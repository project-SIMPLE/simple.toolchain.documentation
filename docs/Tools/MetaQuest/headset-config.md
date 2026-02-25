---
sidebar_position: 3
---

# Configure Meta Quest Headsets

Configure your Meta Quest headset for use with the SIMPLE web platform.

## Why Configure IP Addresses?

The web platform uses headset IP addresses to:
- Assign colors to each headset
- Display the correct icons in the simulation control page
- Draw colored borders around video streams

Therefore, you must set a static IP address for each headset.

## Configure Network Settings

On your headset:
1. Go to **Settings** → **Wi-Fi** → Arrow next to your network → **Edit** → **Advanced**
2. Set the following:
   - **IP Assignment:** Static
   - **IP Address:** `192.168.68.x` (choose x based on [headset color constants](docs/Technical/For-Developers/Backend/backend_modules.md#headset_color))
   - **Gateway:** `192.168.68.1`
   - **Network Prefix Length:** `24`
   - **DNS 1:** `1.1.1.1`
   - **DNS 2:** `1.0.0.1`
   - **Private MAC:** No
   - **Proxy:** No
   - **Hidden Network:** No

<!-- TODO: Add screenshot of headset network settings -->
<!-- Screenshot description: The Meta Quest headset WiFi advanced settings screen showing Static IP configuration with fields filled in (IP: 192.168.68.xx, Gateway: 192.168.68.1, DNS: 1.1.1.1 and 1.0.0.1). -->

:::info
Headsets with IPs not in the configured list will display a gray border.
:::

## Enable Wireless ADB

Wireless ADB allows the web platform to communicate with the headset over WiFi.

### Install Oculus Wireless ADB

1. Download the `.apk` file from [Oculus Wireless ADB releases](https://github.com/thedroidgeek/oculus-wireless-ADB/releases/tag/1.3)
2. Connect your headset to your computer via USB
3. Install the app:
   ```bash
   adb install tdg.oculuswirelessADB-1.3.apk
   adb shell pm grant tdg.oculuswirelessadb android.permission.WRITE_SECURE_SETTINGS
   ```

(Optional) Speed up connections:
```bash
adb tcpip 5555
```

### Connect Wirelessly

1. Ensure only one headset is connected to your computer:
   ```bash
   adb devices
   ```
2. If multiple devices appear, disconnect them:
   ```bash
   adb disconnect
   ```
3. On your headset, open **Library → Unknown Sources → Oculus Wireless ADB**
4. Enable **TCPIP Mode**
5. Toggle **Wireless ADB** on

<!-- TODO: Add screenshot of Oculus Wireless ADB app -->
<!-- Screenshot description: The Oculus Wireless ADB app running on the Meta Quest headset, showing the main screen with TCPIP Mode enabled and the main toggle switched ON. -->

Your headset can now connect remotely to the web platform.

:::tip
Add headset IPs to `HEADSETS_IPS` in your `.env` file for faster automatic connections. See the [.env reference](docs/Technical/For-Developers/env_reference.md#Headset_ips).
:::

## Troubleshooting

Having issues? See the [troubleshooting guide](troubleshooting.md) for help with common problems.
