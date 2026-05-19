---
title: ADB Headset Management
sidebar_label: ADB Headset Management
sidebar_position: 7
description: How the WebPlatform discovers, connects to, and configures Meta Quest headsets over ADB — pairing procedure, automatic provisioning, installed apps, and the video streaming pipeline.
---

# ADB Headset Management

The WebPlatform uses ADB (Android Debug Bridge) to manage Meta Quest headsets over Wi-Fi. This covers four distinct responsibilities:

1. **Discovery and connection** — finding headsets on the network and connecting to them automatically.
2. **Provisioning** — applying a set of system settings and installing required apps on first connection.
3. **Screen mirroring** — streaming each headset's display to the admin UI using scrcpy.
4. **Shutdown** — sending a power-off command to all headsets at session end.

ADB is optional. If `adb` is not in PATH or `adb devices` fails at startup, the WebPlatform continues without it — headsets can still connect over the WebSocket API, but screen mirroring and provisioning are unavailable.

---

## One-time pairing setup

Before the WebPlatform can connect to a headset wirelessly, ADB must be authorized on that device. This is a one-time step per headset.

### Prerequisites

- Developer mode must be enabled on the headset. See the [Meta developer mode guide](/user/running-sessions/meta-quest/developer-mode).
- `adb` must be installed on the machine running the WebPlatform and in PATH.

### Pairing via USB (recommended for first-time setup)

1. Connect the headset to the WebPlatform machine via USB-C.
2. Put on the headset. A dialog will appear: **"Allow USB debugging?"**. Tap **Allow**. Check **Always allow from this computer** to avoid repeating this step.
3. Verify the connection:
   ```bash
   adb devices
   ```
   The headset should appear with status `device` (not `unauthorized`).
4. Switch to wireless ADB:
   ```bash
   adb tcpip 5555
   ```
5. Note the headset's IP address (Settings → Wi-Fi → current network on the headset, or from your router's DHCP table).
6. Connect wirelessly:
   ```bash
   adb connect <headset-ip>:5555
   ```
7. Disconnect the USB cable. From this point the WebPlatform can connect to this headset automatically.

### Pairing via wireless pairing code (Android 11+ / Meta OS)

Newer Meta OS versions support wireless pairing without USB:

1. On the headset: **Settings → System → Developer → Wireless Debugging → Pair device with pairing code**.
2. Note the IP address, pairing port, and 6-digit code shown on the headset.
3. On the server:
   ```bash
   adb pair <ip>:<pairing-port>
   ```
   Enter the 6-digit code when prompted.
4. After pairing:
   ```bash
   adb connect <ip>:5555
   ```

:::warning
Pairing establishes trust. Connection (`adb connect`) uses the trusted relationship established during pairing. If the headset shows `unauthorized` after connecting, the RSA key was not accepted — re-pair the device.
:::

---

## Headset discovery

On startup, `AdbManager` initializes a device observer and runs `DeviceFinder` to connect to all known headsets.

### Explicit IP list (`HEADSETS_IP`)

If `HEADSETS_IP` is set in `.env`, `DeviceFinder` attempts to connect to each IP in the list:

```dotenv
HEADSETS_IP="192.168.68.101;192.168.68.102;192.168.68.103"
```

Entries are semicolon-separated. IPv4 only. For each IP, `DeviceFinder`:
1. Pings the address. Unreachable addresses are skipped.
2. Port-scans `5555` and the range `30000–49999` (the standard ADB port and the wireless-pairing ephemeral port range).
3. Calls `adb connect <ip>:<port>` for the first open port found.

If a connection attempt fails, `DeviceFinder` retries after 5 seconds, indefinitely, until all IPs are connected.

### Auto-detection (no `HEADSETS_IP`)

If `HEADSETS_IP` is not set, `DeviceFinder` scans the `/24` subnet of the server's primary network interface, looking for any host with port `5555` open. **This only runs when the server's IP is in the `192.168.68.x` range** (the M2L2 classroom network). On any other subnet, auto-detection is disabled and a warning is logged.

### Automatic reconnection

`AdbManager` watches for device state changes via the ADB observer. When a device transitions from `device` to `offline`:
1. The stale ADB entry is disconnected.
2. A `DeviceFinder` loop starts for that IP, retrying every 3 seconds until the device is reachable again.
3. Once reconnected, streaming resumes automatically.

---

## Automatic provisioning

Every time a Quest headset connects, `HeadsetSetup.setupHeadset()` runs. It checks and applies a set of system settings, then installs or updates required apps. Provisioning is idempotent — it only makes changes when the current state differs from the expected value.

Only devices whose model name starts with `Quest_` are provisioned.

### Global settings (`settings put global`)

| Setting | Value | Purpose |
|---|---|---|
| `captive_portal_detection_enabled` | `0` | Disable captive portal probing |
| `captive_portal_mode` | `0` | Disable captive portal handling |
| `captive_portal_server` | `localhost` | Route any probe to localhost |
| `captive_portal_https_url` | `https://localhost` | Route HTTPS probe to localhost |
| `captive_portal_http_url` | `http://localhost` | Route HTTP probe to localhost |
| `private_dns_mode` | `off` | Disable private DNS — keep on the local network |
| `wifi_watchdog_on` | `0` | Disable Wi-Fi watchdog |
| `wifi_watchdog_poor_network_test_enabled` | `0` | Disable poor network detection |
| `network_recommendations_enabled` | `0` | Disable network recommendations |
| `network_avoid_bad_wifi` | `0` | Prevent Android from switching away from the classroom Wi-Fi |
| `wifi_passpoint_enabled` | `0` | Disable Passpoint (Hotspot 2.0) |
| `wifi_sleep_policy` | `2` | Wi-Fi stays on even when the screen is off |
| `stay_on_while_plugged_in` | `15` | Keep display on when charging (AC + USB + wireless + docked) |
| `wifi_enhance_network_while_sleeping` | `0` | Disable background Wi-Fi optimization |
| `adb_allowed_connection_time` | `9007199254740991` | Effectively never-expiring ADB authorization |
| `ota_disable_automatic_update` | `1` | Disable automatic OS updates during sessions |
| `wifi_networks_available_notification_on` | `0` | Suppress Wi-Fi network notifications |
| `netstats_enabled` | `0` | Disable network statistics collection |
| `assisted_gps_enabled` | `1` | Keep assisted GPS on |

### System settings (`settings put system`)

| Setting | Value | Purpose |
|---|---|---|
| `screen_off_timeout` | `86400000` (24 h) | Prevent Android from turning off the screen; actual display-off is controlled by OVR prefs |

### Secure settings (`settings put secure`)

| Setting | Value | Purpose |
|---|---|---|
| `sleep_timeout` | `-1` | Disable Android-level sleep — OVR prefs control the headset sleep timer instead |

### OVR preference overrides (`persist.ovr.prefs_overrides.*`)

Set via `service call PreferencesService 1 s16 "<key>" i32 <value>`.

| Key | Value | Purpose |
|---|---|---|
| `idle_time_threshold` | `14400` (4 h) | Display-off timeout (seconds) |
| `autosleep_time` | `14400` (4 h) | Sleep mode timeout (seconds) |

### Shell settings (app standby + background restrictions)

| Command | Purpose |
|---|---|
| `am set-standby-bucket com.oculus.updater restricted` | Move the Meta updater to restricted standby — reduces spurious update activity during sessions |
| `am set-standby-bucket com.oculus.nux.ota restricted` | Same for the OTA update service |
| `cmd appops set com.oculus.updater RUN_ANY_IN_BACKGROUND deny` | Block updater background execution |
| `cmd appops set com.oculus.nux.ota RUN_ANY_IN_BACKGROUND deny` | Block OTA background execution |

### Broadcasts

| Action | Purpose |
|---|---|
| `com.oculus.vrpowermanager.prox_close` | Forces the proximity sensor to report "worn" — prevents the screen from going dark when the headset is set down |

---

## Automatically installed apps

`HeadsetSetup` installs and maintains two APKs from the `toolkit/` directory alongside the WebPlatform executable. If the installed version is older than the bundled APK, the old package is uninstalled and the new one installed automatically. Both apps require the `android.permission.WRITE_SECURE_SETTINGS` permission, which is granted via `pm grant` over ADB.

### `tdg.oculuswirelessadb`

**APK file**: `toolkit/tdg.oculuswirelessadb.apk`  
**Source**: https://github.com/thedroidgeek/oculus-wireless-adb

A third-party GUI app that provides an in-headset toggle for wireless ADB. The operator can open it from inside the Quest to enable or disable wireless ADB without navigating to **Settings → System → Developer**. It is not a background service and does not run automatically.

For full details, see [Oculus Wireless ADB](/advanced/companion-apps/oculus-wireless-adb).

### `eu.project_simple.adbautoenable`

**APK file**: `toolkit/eu.project_simple.adbautoenable.apk`  
**Source**: `adb-auto-enable/` (local repository)

A SIMPLE-developed watchdog service that keeps wireless ADB enabled persistently. It runs as a foreground service from boot, watches the `adb_wifi_enabled` global setting, and immediately re-enables ADB if the OS turns it off. It also handles the Quest's VrUsb trust dialog automatically via an accessibility service. On first install, the WebPlatform launches it once via:

```
monkey -p eu.project_simple.adbautoenable -c android.intent.category.LAUNCHER 1
```

After that, `BootReceiver` ensures it starts on every subsequent boot. For full technical details, see [ADB Auto-Enable](/advanced/companion-apps/adb-auto-enable).

### Removed app

| Package | Reason |
|---|---|
| `com.tpn.adbautoenable` | Conflicts with `eu.project_simple.adbautoenable` — uninstalled automatically if found |

---

## Video streaming pipeline (scrcpy)

Once a headset is connected and provisioned, `ScrcpyServer` starts a scrcpy session for it.

### How it works

1. **Server push**: `ScrcpyServer` uploads the scrcpy server JAR (`toolkit/scrcpyServer-v3.3.4-rom1v`) to the headset via ADB sync.
2. **Session start**: `AdbScrcpyClient.start()` launches the server process on the headset over ADB.
3. **Video packets**: The headset streams H.265 (default) or H.264 frames to the WebPlatform. H.265 is used unless a browser client reports it cannot decode it, in which case the entire pipeline permanently downgrades to H.264 for that session.
4. **WebSocket relay**: Frames are forwarded to browser clients over a dedicated WebSocket server on `VIDEO_WS_PORT` (default `8082`).
5. **Automatic restart**: If a session exits unexpectedly, the supervisor loop restarts it after 1 second.

**scrcpy settings applied per session**:

| Option | Value |
|---|---|
| Video codec | H.265 (downgrade to H.264 if client unsupported) |
| Max resolution | 1570 px (longest dimension) |
| Max frame rate | 30 fps |
| Video bit rate | 8 Mbps |
| Audio | Disabled |
| `stayAwake` | `true` |

**Device-specific crop** (applied to correct for Quest lens geometry):

| Device | Crop |
|---|---|
| Quest 3S | `1570:1482:170:150` (or flipped on first connection if aspect ratio is inverted) |
| Quest 3 | `1482:1570:300:250` + `angle: 23` |
| Other | No crop applied; a warning is logged |

:::note
The scrcpy server used is a custom build by `rom1v` (scrcpy's original author) that better handles the Quest's fallback video API. See [Genymobile/scrcpy#5913](https://github.com/Genymobile/scrcpy/issues/5913#issuecomment-3677889916) for context.
:::

### Video WebSocket protocol

The video stream is exposed on a separate WebSocket server at `VIDEO_WS_PORT` (default `8082`). The admin UI's `VideoStreamManager` connects to it.

**Control channel** (`ws://<host>:8082`):

| Direction | Message | Description |
|---|---|---|
| Server → Client | `{"type":"stream_list","streamIds":["192.168.68.101",...]}` | Sent on connect — current list of active streams |
| Server → Client | `{"type":"stream_available","streamId":"<ip>"}` | A new headset stream has started |
| Server → Client | `{"type":"stream_ended","streamId":"<ip>"}` | A headset stream has stopped |
| Client → Server | `{"type":"...","h264":true,"h265":true,"av1":false}` | Codec capabilities. If `h265` is `false`, all sessions permanently switch to H.264 |

**Data channel** (`ws://<host>:8082/stream/<ip>`):

Opened by the client after receiving `stream_available`. All video packets for one device flow here.

| Packet type | Fields | Description |
|---|---|---|
| `configuration` | `streamId`, `h265`, `data` (base64) | H.264/H.265 codec configuration record. Must be processed before any data packet. |
| `data` | `streamId`, `h265`, `keyframe`, `pts` (string), `data` (base64) | Encoded video frame |

`pts` is a bigint serialized as a string. `data` is a base64-encoded `Uint8Array`.

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `Device is not authorized` in logs | Headset did not accept the RSA key prompt | Put on the headset; approve the "Allow USB debugging?" dialog, or re-pair via `adb pair` |
| Device appears as `offline` | Stale ADB entry (headset rebooted or Wi-Fi interrupted) | WebPlatform disconnects and reconnects automatically; wait or reconnect manually with `adb connect <ip>:5555` |
| No screen stream in admin UI | scrcpy session not started (USB-only device, or error at session start) | Check logs for `[<ip>] Failed to start streaming`; verify headset is connected wirelessly (`adb devices` should show `<ip>:5555 device`) |
| H.265 stream black / artifacts | Browser does not support H.265 | The WebPlatform will downgrade to H.264 once the browser reports its codec capabilities — this happens automatically on the first stream |
| Apps not installing | APK not found in `toolkit/` | Ensure the full WebPlatform distribution was unpacked, not just the executable |
