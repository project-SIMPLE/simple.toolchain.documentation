---
title: Oculus Wireless ADB
sidebar_label: Oculus Wireless ADB
sidebar_position: 1
description: In-headset GUI app for toggling wireless ADB on Meta Quest — installed automatically by the SIMPLE WebPlatform.
---

# Oculus Wireless ADB

**Package**: `tdg.oculuswirelessadb`  
**APK file**: `toolkit/tdg.oculuswirelessadb.apk`  
**Source**: https://github.com/thedroidgeek/oculus-wireless-adb  
**Author**: thedroidgeek (third-party, not SIMPLE-developed)

---

## What it does

Oculus Wireless ADB is a minimal GUI app that runs on the Quest headset and provides a one-tap toggle for wireless ADB debugging. It shows the current ADB state and lets the user enable or disable it without navigating to **Settings → System → Developer**.

This is the only user-facing companion app — it is not a background service and does not run automatically. It exists as a convenience for operators who need to manually re-enable wireless ADB from inside the headset (for example, after a firmware update resets developer settings).

## How the WebPlatform manages it

When `HeadsetSetup` runs for a newly connected Quest headset, it:

1. Checks whether `tdg.oculuswirelessadb` is installed.
2. If not, installs the bundled APK from `toolkit/`.
3. If the installed version is older than the bundled APK's version (parsed from the filename), uninstalls the old one and installs the new one.
4. Grants `android.permission.WRITE_SECURE_SETTINGS` via `pm grant` — required for the app to write the `adb_wifi_enabled` global setting.

The app is **not launched** by the WebPlatform (`needsToStart: false`). It is purely available for manual use.

## Permission

`WRITE_SECURE_SETTINGS` is a privileged permission not accessible through the normal Android permission dialog. It is granted once over ADB:

```bash
adb shell pm grant tdg.oculuswirelessadb android.permission.WRITE_SECURE_SETTINGS
```

The WebPlatform does this automatically.
