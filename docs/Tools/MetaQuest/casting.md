---
sidebar_position: 4
---

# Casting Headset to Screen

There are two ways to display the headset's live video on another screen.

:::tip
Both methods require **Wireless ADB** to be enabled on your headset. The web platform connects to the headset via ADB and runs scrcpy automatically. See the [headset configuration guide](headset-config.md) to enable Wireless ADB.
:::

## Option 1: Automatic Casting (Recommended)

The SIMPLE web platform can automatically cast the headset display.

### Prerequisites

- Wireless ADB enabled on the headset
- Headset connected to the same WiFi network as the computer

### Using the Stream Page

1. Ensure the headset is connected to the web platform
2. Open your browser and navigate to:
   ```
   http://localhost:8000/streamPlayerScreen
   ```
3. The headset stream should appear automatically

<!-- TODO: Add screenshot of streamPlayerScreen page -->
<!-- Screenshot description: The web platform streaming page showing the headset video feed with controls. -->

### Troubleshooting

- **No stream?** Ensure Wireless ADB is enabled and headset is on the same WiFi network
- **Poor quality?** Try adjusting the headset's WiFi position or check network latency

---

## Option 2: Manual Casting

If you need more control, you can cast manually using scrcpy.

### Prerequisites

- ADB installed and configured on your computer
- scrcpy v3 or later installed
- Wireless ADB enabled on the headset
- Headset connected to the same WiFi network as the computer

### Step 1: Enable Wireless ADB

Connect your headset to your computer via USB, then:

```bash
adb tcpip 5555
```

Or use the [Oculus Wireless ADB](https://github.com/thedroidgeek/oculus-wireless-adb/releases) app on your headset to enable ADB.

### Step 2: Start Streaming

```bash
scrcpy --tcpip=<HEADSET_IP> --angle 20 --crop 1508:1708:300:200 --stay-awake --disable-screensaver --no-audio --video-bit-rate 1M --video-buffer=200 --video-codec=h265 --max-fps=20
```

Replace `<HEADSET_IP>` with your headset's IP address (e.g., `192.168.68.103`).

### Command Options Explained

| Parameter | Description |
|-----------|-------------|
| `--tcpip` | Connect to headset over WiFi |
| `--angle 20` | Tilt the view by 20 degrees |
| `--crop` | Crop to show headset-style view |
| `--stay-awake` | Prevent headset from sleeping |
| `--video-codec h265` | Use H.265 for better quality |
| `--max-fps 20` | Limit to 20 fps for stability |

### Crop Values for Different Headsets

| Headset | Crop Value | Crop Angle | Notes |
|---------|------------|------------|-------|
| Quest 2 (Full) | Use without crop | N/A | |
| Quest 2 (Left eye) | `1632:1220:100:320` | N/A | |
| Quest 3 (Recommended) | `2064:2208:2064:0` | `20` | Quest 3 screens are tilted by default - using this crop makes viewing much easier |

:::info
Quest 3 has tilted displays by default. Using the recommended crop values above significantly improves the viewing experience.
:::

### Linux Wayland Support

On Linux, set this environment variable before running scrcpy:

```bash
export SDL_VIDEODRIVER=wayland
```
