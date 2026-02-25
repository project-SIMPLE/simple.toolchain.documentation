---
sidebar_position: 1
---

# Quick Start

Get the SIMPLE web platform up and running in under 10 minutes.

## What You Need First

Before starting, ensure you have:
- **Node.js** v24 or later installed
- **GAMA** platform (for running virtual universes)
- **Meta Quest headset** (optional, for VR functionality)
- A code editor (VS Code recommended)

## Step-by-Step Setup

### 1. Install Dependencies

Download and install the following:

1. **Node.js** - Download from [nodejs.org](https://nodejs.org/)
2. **GAMA** - Download from [gama-platform.org](https://gama-platform.org/download)
3. **ADB** (optional) - Required for headset connectivity
   - macOS: `brew install android-platform-tools`
   - Other OS: See [detailed instructions](02-dependencies.md#adb)

### 2. Get the Web Platform

```bash
# Clone or download from GitHub
git clone https://github.com/project-SIMPLE/simple.webplatform
cd simple.webplatform
```

### 3. Configure Environment

```bash
# Copy the example environment file
cp .env.example .env
```

Edit `.env` and set at minimum:
- `LEARNING_PACKAGE_PATH="./learning-packages"`
- Your GAMA connection settings (if using GAMA)

<!-- TODO: Add screenshot of the .env file open in a text editor -->
<!-- Screenshot description: The .env file open in a code editor (e.g. VS Code) showing the key variables filled in: GAMA_IP_ADDRESS, GAMA_WS_PORT, LEARNING_PACKAGE_PATH, and WEB_APPLICATION_PORT. -->

See the [.env reference](docs/Technical/For-Developers/env_reference.md) for all options.

### 4. Install and Run

```bash
# Install dependencies
npm install

# Start the application
npm start
```

<!-- TODO: Add screenshot of the terminal after npm start -->
<!-- Screenshot description: A terminal window showing the output of `npm start`, with the platform successfully started and the URL (e.g. http://localhost:8000) displayed. -->

### 5. Open in Browser

Navigate to `http://localhost:8000`

<!-- TODO: Add screenshot of the web platform landing page -->
<!-- Screenshot description: The SIMPLE web platform homepage showing the Virtual Universe selector or welcome screen. Should show the main UI with navigation options. -->

## Next Steps

- [Install a Virtual Universe](04-virtual-universe.md) to run simulations
- [Configure your VR headset](docs/Tools/MetaQuest/headset-config.md) for immersive experiences
- [Configure GAMA](docs/Tools/Gama.md) for advanced simulation control

## Troubleshooting

- Application won't start? Check that port 8000 is available
- Can't connect to GAMA? Verify GAMA is running and `GAMA_WS_PORT` matches
- Headset issues? See the [troubleshooting guide](docs/Tools/MetaQuest/troubleshooting.md)
