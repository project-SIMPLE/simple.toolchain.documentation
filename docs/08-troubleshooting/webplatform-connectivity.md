---
title: WebPlatform Connectivity
sidebar_label: Connectivity
sidebar_position: 4
---

# WebPlatform Connectivity

This page covers issues connecting the WebPlatform to GAMA or headsets.

---

## WebPlatform shows GAMA "Disconnected"

1. **Firewall:** Ensure your OS firewall is not blocking incoming connections on port `1000`.
2. **GAMA Server Preferences:** Verify that GAMA is actually listening for connections. Go to **Support → Preferences → Network → Server Mode** and ensure **Port** is `1000`.
3. **WebPlatform Config:** Check your `.env` file. `GAMA_IP_ADDRESS` should be `localhost` (if on the same machine) and `GAMA_WS_PORT` must be `1000`.

---

## Headsets don't appear in the Monitor UI

If headsets are running the VR app but don't show up as "Connected" in the web panel:

1. **Network:** Ensure the headsets and the machine running the WebPlatform are on the **same WiFi network**.
2. **ADB Status:** If using ADB for discovery, check that `adb devices` lists the headsets. They must be in **Developer Mode** and have **USB Debugging** authorized.
3. **Manual IP:** If discovery fails, try adding the headset IPs explicitly to the `HEADSETS_IP` variable in your `.env` file.

---

## Simulation logic works, but no video stream

The WebPlatform uses `scrcpy` for video streaming.

1. **Prerequisites:** Ensure `adb` is in your system PATH.
2. **Authorization:** Check the headset for a "Allow USB Debugging?" prompt. This is required for every new connection unless "Always allow" is checked.
3. **Silent scrcpy failure:** If `adb devices` lists the headset but streaming still doesn't start, scrcpy may have failed to get device authorization. Check the WebPlatform logs for `Failed to start streaming`. Install and run [ADB Auto-Enable](/advanced/companion-apps/adb-auto-enable) on the headset to keep authorization persistent and auto-accept the trust dialog.

---

## `.env` file not found when running the packaged executable

The WebPlatform reads `.env` from the **same directory as the binary**, not from the working directory. Running the executable from a different folder (e.g. `./bin/simple.webplatform-linux` while your `.env` is in `./`) will silently use defaults for all variables.

Place `.env` alongside the binary:

```
my-deployment/
├── simple.webplatform-linux
└── .env                    ← must be here
```

---

## Port already in use

If ports `8001`, `8080`, or `1000` are already bound by another process, the WebPlatform will fail to start the corresponding server. Diagnose with:

```bash
# Linux / macOS
ss -tlnp | grep -E '8001|8080|1000'
# or
lsof -i :8080

# Windows (PowerShell)
netstat -ano | findstr "8001 8080 1000"
```

Then override conflicting ports in `.env`:

```dotenv
MONITOR_WS_PORT=8011
HEADSET_WS_PORT=8090
GAMA_WS_PORT=1001
```

---

## mDNS / Hostname Issues

### `http://simple.local` does not resolve

The `WEB_HOSTNAME` feature relies on mDNS (Multicast DNS).

1. **Windows Support:** Older versions of Windows do not support mDNS natively. Install **iTunes** or the **Bonjour Print Services for Windows** to add mDNS support.
2. **Network Isolation:** Some enterprise or university WiFi networks block Multicast traffic. In this case, `.local` addresses will not work.
3. **Solution:** Use the machine's static IP address instead of the hostname.

---

## Virtual Universe Loading

### VU not appearing in the simulation selector
1. **`settings.json`:** Verify that the VU folder contains a valid `settings.json` file in its root.
2. **Directory Path:** Check `LEARNING_PACKAGE_PATH` in your `.env`. The WebPlatform only scans subdirectories of this path.
3. **Recursive Scan:** The WebPlatform only scans one level deep into the learning packages directory. Ensure your VU is not buried in a sub-subfolder.

### GAML file not found error
The `model_file_path` in `settings.json` must be relative to the location of the `settings.json` file itself.

**Example:**
If your folder structure is:
```
my_vu/
├── settings.json
└── models/
    └── my_model.gaml
```
Then your `settings.json` should contain:
`"model_file_path": "./models/my_model.gaml"`
