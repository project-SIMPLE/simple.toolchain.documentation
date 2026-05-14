---
sidebar_position: 2
title: Prerequisites
description: Install GAMA, the SIMPLE plugin, Node.js, ADB, and Unity before setting up the SIMPLE development stack.
---

# Prerequisites

Install these tools before working through the rest of Getting Started.

---

## GAMA Platform

GAMA runs the simulation models (`.gaml` files) and exposes a WebSocket server that the WebPlatform connects to.

**Required version:** GAMA 2025.06 or later.

Download from [gama-platform.org/download](https://gama-platform.org/download) and follow the [official installation guide](https://gama-platform.org/wiki/next/Installation).

After installing, launch GAMA and verify the WebSocket server is on the default port:

1. Go to **Support → Preferences → Network → Server Mode**.
2. Confirm **Port** is `1000`. Change it here if there is a conflict, and update `GAMA_WS_PORT` in your `.env` to match.

<!-- TODO: Add screenshot of GAMA Network Preferences dialog -->
<!-- Screenshot description: The GAMA Preferences window showing Network/Server Mode settings with Port set to 1000. -->

:::info
`GAMA_IP_ADDRESS` in the WebPlatform `.env` defaults to `localhost`. Change it only if GAMA and the WebPlatform run on different machines.
:::

### Install the SIMPLE plugin {#simple-plugin}

The SIMPLE plugin adds VR-specific GAML species, operators, and the `VR_Experiment` type to GAMA.

1. In GAMA, go to **Support → Install new plugins...**
2. In the dialog, click **Work with** and enter this update site URL:
  ```
 https://project-simple.github.io/simple.toolchain/
  ```
3. Press **Enter**. The plugin list loads.
4. Select **SIMPLE Unity plugin** and click **Next**, then follow the prompts to finish installation.
5. Restart GAMA when asked.

After restarting, you should see a **UnityVR** menu in the GAMA IDE.

---

## Node.js

The WebPlatform is a Node.js application.

**Required version:** Node.js ≥ 22 (v24 recommended).

Download and install from [nodejs.org](https://nodejs.org/en/download).

Verify:
```bash
node -v
```

Expected output: `v22.x.x` or later.

---

## Android Debug Bridge (ADB)

ADB is required for connecting to Meta Quest headsets (screen mirroring, automatic WiFi fixes, headset management). For development without a physical headset, ADB is optional.

<details>
<summary>macOS — via Homebrew</summary>

```bash
brew install android-platform-tools
```

</details>

<details>
<summary>All platforms — manual install</summary>

1. Download [Android Platform Tools](https://developer.android.com/tools/releases/platform-tools) for your OS.
2. Extract to a permanent location (e.g. `/usr/local/platform-tools/` on macOS/Linux or `C:\platform-tools\` on Windows).
3. Add the directory to your system `PATH`.

**macOS/Linux:**
```bash
echo 'export PATH=$PATH:/usr/local/platform-tools' >> ~/.zshrc
source ~/.zshrc
```

**Windows:** Open *Edit the system environment variables* → Environment Variables → User variables → Path → New → add the path → OK.

</details>

Verify:
```bash
adb version
```

---

## Unity

The Unity template is where VU creators build the VR side of their simulation.

**Required version:** Unity `6000.3.8f1` (Unity 6 LTS).

See the full [Unity installation guide](../toolchain/Unity-Installation-Guide.md) for step-by-step instructions including required modules (Android Build Support, OpenJDK, Android SDK & NDK Tools).

---

## Next step

Proceed to [Install the WebPlatform](./03-web-platform.md).
