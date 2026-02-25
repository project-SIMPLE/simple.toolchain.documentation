---
sidebar_position: 2
---

# Prerequisites

Before installing the web platform, ensure you have all required dependencies installed on your system.

## Node.js

Visit the [official Node.js website](https://nodejs.org/en/download) and download the installer for your operating system.

**Verify the installation:**

```bash
node -v
```

:::info
Node.js v24 or later is required
:::

## Android Debug Bridge (ADB)

ADB enables command-line interaction between your computer and Android devices, including VR headsets. It's also required for streaming headset displays to the web platform.

### Installation Options

<details>
<summary>macOS (Homebrew)</summary>

Install Homebrew if needed: [brew.sh](https://brew.sh/)

```bash
brew install android-platform-tools
```

</details>

<details>
<summary>Manual Installation (All Platforms)</summary>

1. Download the Android Platform Tools from [developer.android.com](https://developer.android.com/tools/releases/platform-tools)
2. Extract to a permanent location:
   - macOS/Linux: `/usr/local/platform-tools/`
   - Windows: `C:\platform-tools\`
3. Add to your system PATH

**macOS/Linux:**
```bash
echo 'export PATH=$PATH:/usr/local/platform-tools' >> ~/.zshrc
source ~/.zshrc
```

**Windows:**
1. Press Windows Key and search for "Edit the system environment variables"
2. Click "Environment Variables"
3. Under "User variables", double-click "Path"
4. Click "New" and add the platform-tools path
5. Click "OK" and restart terminals

</details>

**Verify the installation:**

```bash
adb version
```

## GAMA Platform

The GAMA platform runs the virtual universe simulations.

### Installation

1. Download from [gama-platform.org](https://gama-platform.org/download)
2. Follow the [official installation guide](https://gama-platform.org/wiki/next/Installation)

### Configuration

Default WebSocket settings:
- **Address:** `localhost`
- **Port:** `1000`

To modify these in GAMA: **Support → Preferences → Network → Server Mode**

<!-- TODO: Add screenshot of GAMA Network Preferences dialog -->
<!-- Screenshot description: The GAMA Preferences window showing Network/Server Mode settings with Address set to localhost and Port set to 1000. Highlight the relevant fields. -->

:::warning
Ensure the web platform's `.env` settings (`GAMA_WS_PORT` and `GAMA_IP_ADDRESS`) match your GAMA configuration.
:::

### SIMPLE Plugin

Follow the instructions in the [GAMA Plugin Repository](https://github.com/project-SIMPLE/simple.toolchain/tree/Unity-6/GAMA%20Plugin) to install the SIMPLE plugin.

## Next Step

With dependencies installed, proceed to [Install the Web Platform](03-web-platform.md).
