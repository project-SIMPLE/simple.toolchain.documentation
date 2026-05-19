---
sidebar_position: 1
title: Install the Web Platform
description: How to download, configure, and run the SIMPLE WebPlatform.
---

# Install the Web Platform

This guide covers how to download, configure, and run the SIMPLE WebPlatform.

---

## Prerequisites

### Node.js

Required only if you run from source (Option 2). Pre-built binaries include their own runtime.

**Required version:** Node.js ≥ 22 (v24 recommended).

Download and install from [nodejs.org](https://nodejs.org/en/download).

Verify:
```bash
node -v
```

Expected output: `v22.x.x` or later.

### Android Debug Bridge (ADB)

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

## Option 1: Pre-built executable (recommended for deployment)

Pre-built binaries require no Node.js installation. Download the latest release from the [SIMPLE WebPlatform GitHub Releases](https://github.com/project-SIMPLE/simple.webplatform/releases).

Available binaries:

| Binary | Platform |
|---|---|
| `simple.webplatform-linux` | Linux x64 |
| `simple.webplatform-win.exe` | Windows x64 |
| `simple.webplatform-macos` | macOS x64 |

After downloading:

1. Place the binary and a `.env` file in the same directory.
2. Place your Virtual Universe folders in `./learning-packages/` (created automatically if missing).
3. Run the binary.

See [Packaging](/advanced/webplatform/packaging) for details on the executable format and how to build your own.

---

## Option 2: From source (recommended for development)

### Installation

```bash
git clone https://github.com/project-SIMPLE/simple.webplatform
cd simple.webplatform
npm install
```

### Configure environment variables

<details>
<summary>macOS / Linux</summary>

```bash
cp .env.example .env
```

</details>

<details>
<summary>Windows</summary>

```cmd
copy .env.example .env
```

</details>

Edit `.env` with your settings. See the [.env Reference](./configuration) for all available options.

### Start the application

```bash
npm start
```

The application starts both the backend server and the Vite development server concurrently. Open `http://localhost:8000` in your browser.

:::info
GAMA does not need to be running before you start the WebPlatform. The platform reconnects to GAMA automatically whenever it becomes available.
:::

---

## Access the platform

Open your browser at the URL shown in the terminal (default: `http://localhost:8000`).

On the local network, the platform is also reachable via mDNS at `http://simple.local:8000` if `WEB_HOSTNAME=simple` is set in `.env` and your network supports mDNS.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Port 8000 in use | Change `WEB_APPLICATION_PORT` in `.env` |
| Can't connect to GAMA | Check `GAMA_IP_ADDRESS` and `GAMA_WS_PORT` in `.env`; verify GAMA is running |
| No simulations in UI | Check `LEARNING_PACKAGE_PATH` — each simulation needs a `settings.json` in its folder |

---

## Next steps

- [Install a Virtual Universe](/webplatform/virtual-universes/install)
- [Configure VR headsets](/user/running-sessions/meta-quest/headset-config)
- [Developer Troubleshooting](/08-troubleshooting/)
