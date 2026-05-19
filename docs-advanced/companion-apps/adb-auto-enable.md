---
title: ADB Auto-Enable
sidebar_label: ADB Auto-Enable
sidebar_position: 2
description: Watchdog service that keeps wireless ADB enabled on Meta Quest headsets across reboots, sleep, and network changes — source code reference and build guide.
---

# ADB Auto-Enable

**Package**: `eu.project_simple.adbautoenable`  
**APK file**: `toolkit/eu.project_simple.adbautoenable.apk`  
**Source**: `adb-auto-enable/` (local repository)  
**Forked from**: [project-SIMPLE/adb-auto-enable](https://github.com/project-SIMPLE/adb-auto-enable)

---

## What it does

ADB Auto-Enable is a foreground watchdog service that ensures wireless ADB (`adb_wifi_enabled`) stays enabled on a Meta Quest headset at all times — through reboots, sleep cycles, network reconnects, and firmware-level resets. It requires no root and uses only `WRITE_SECURE_SETTINGS`, granted once over ADB by the WebPlatform.

This solves a persistent problem with Meta Quest: the OS can disable wireless ADB silently (e.g. after a sleep/wake cycle, after a network change, or as a side effect of firmware updates), causing the WebPlatform to lose its ADB connection and drop screen mirroring.

:::note
The app has no GUI. It is invisible except for a persistent foreground notification — **"ADB Auto-Enable — Watchdog Active"** — visible in the headset's notification panel. `MainActivity` exists solely as a launch trigger and exits immediately after starting the service.
:::

:::warning
Wireless ADB provides full shell access to the device. Only deploy this app on isolated, trusted networks. Never expose port 5555 to the internet.
:::

---

## Architecture

The app has four components.

### `BootReceiver`

Listens for `BOOT_COMPLETED` and `LOCKED_BOOT_COMPLETED` broadcasts (the latter fires during encrypted early boot, before user unlock). On either event, it starts `AdbConfigService` as a foreground service.

The receiver is declared `android:directBootAware="true"`, allowing it to fire before the user unlocks the device.

### `AdbConfigService`

The core watchdog. A `START_STICKY` foreground service that runs continuously after the first boot post-install.

**On start**, it:
1. Immediately calls `triggerHook("Service Start")` to enforce ADB.
2. Registers two reactive hooks (see below).
3. Schedules a 60-second periodic fallback watchdog.
4. Calls `ensureA11yEnabled()` to register `AdbPopupAccessibilityService` in the secure settings.

**Enforcement logic** (`triggerHook`):

```java
int current = Settings.Global.getInt(getContentResolver(), "adb_wifi_enabled", 0);
if (current == 1) return;
// ADB is off — re-enable it
Settings.Global.putInt(getContentResolver(), "adb_wifi_enabled", 1);
```

A 500 ms debounce prevents rapid-fire re-triggering when multiple hooks fire at once.

**Reactive hooks**:

| Hook | Trigger | Purpose |
|---|---|---|
| Settings observer | Any change to `adb_wifi_enabled` | Immediately re-enables ADB if it is turned off |
| Network callback | `onAvailable` or `onCapabilitiesChanged` (Wi-Fi with `NET_CAPABILITY_VALIDATED`) | Re-enforces ADB after network reconnects |
| Periodic watchdog | Every 60 seconds | Fallback for any edge case the above hooks miss |

### `AdbPopupAccessibilityService`

An accessibility service that monitors window changes and detects the Quest's **VrUsb trust dialog** — the popup that asks "Allow USB debugging from this computer?". When detected (by window title containing `"VrUsb"`), it automatically sends:

```
TAB → TAB → TAB → ENTER
```

This selects and confirms the "Always allow" option without any user interaction. The sequence has a 1-second cooldown between triggers.

The service is enabled programmatically on each service start via `ensureA11yEnabled()`:

```java
Settings.Secure.putString(
    getContentResolver(),
    Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES,
    packageName + "/" + AdbPopupAccessibilityService.class.getName()
);
Settings.Secure.putInt(getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, 1);
```

### `MainActivity`

A no-display activity. When launched (including via the `monkey` command the WebPlatform uses on first install), it starts `AdbConfigService` and immediately finishes. Its only purpose is to give the foreground service an initial launch trigger.

---

## How the WebPlatform manages it

When `HeadsetSetup` runs for a connected Quest headset:

1. Checks whether `eu.project_simple.adbautoenable` is installed and up to date.
2. If not installed or outdated, installs the bundled APK from `toolkit/`.
3. Grants `android.permission.WRITE_SECURE_SETTINGS`.
4. On first install (`needsToStart: true`), launches `MainActivity` once to start the foreground service:

```
adb shell monkey -p eu.project_simple.adbautoenable -c android.intent.category.LAUNCHER 1
```

After that first launch, the app starts automatically on every subsequent boot via `BootReceiver`.

---

## Permissions

| Permission | Purpose |
|---|---|
| `RECEIVE_BOOT_COMPLETED` | Start on device boot |
| `WRITE_SECURE_SETTINGS` | Write `adb_wifi_enabled` and the secure accessibility settings |
| `ACCESS_NETWORK_STATE` / `ACCESS_WIFI_STATE` | Register the network callback |
| `FOREGROUND_SERVICE` / `FOREGROUND_SERVICE_SPECIAL_USE` | Run as a persistent foreground service |
| `POST_NOTIFICATIONS` | Show the persistent foreground service notification |

`WRITE_SECURE_SETTINGS` is privileged and must be granted via ADB — the WebPlatform does this automatically.

---

## Building from source

**Prerequisites**: JDK 17, Android SDK (API 34), Gradle (wrapper included).

```bash
cd adb-auto-enable

# Debug build
./gradlew assembleDebug

# Release build (requires keystore env vars)
export KEYSTORE_FILE=/path/to/keystore.jks
export KEYSTORE_PASSWORD=...
export KEY_ALIAS=...
export KEY_PASSWORD=...
./gradlew assembleRelease -PversionName="1.0.0" -PversionCode="1"
```

Output: `app/build/outputs/apk/release/app-release.apk`

The CI workflow (`.github/workflows/build-release.yml`) triggers on `v*` tags, builds a signed release APK, and publishes it as a GitHub Release asset. `versionName` is derived from the tag (stripping the leading `v`); `versionCode` is the GitHub Actions run number.

---

## Troubleshooting

**Check permission status**:

```bash
adb shell dumpsys package eu.project_simple.adbautoenable | grep WRITE_SECURE_SETTINGS
# Expected: android.permission.WRITE_SECURE_SETTINGS: granted=true
```

**Re-grant permission** (needed after reinstall if signature changed):

```bash
adb shell pm grant eu.project_simple.adbautoenable android.permission.WRITE_SECURE_SETTINGS
```

**Force-restart the service**:

```bash
adb shell am force-stop eu.project_simple.adbautoenable
adb shell am start -n eu.project_simple.adbautoenable/.MainActivity
```

**View live logs**:

```bash
adb logcat -s ADBAutoEnable ADBAutoEnable.A11y
```

**Reset and re-grant all permissions**:

```bash
adb shell cmd appops reset eu.project_simple.adbautoenable
adb shell pm grant eu.project_simple.adbautoenable android.permission.WRITE_SECURE_SETTINGS
```
