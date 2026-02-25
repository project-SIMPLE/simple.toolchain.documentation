---
sidebar_position: 3
---

# Install the Web Platform

This guide covers how to download, configure, and run the SIMPLE web platform.

## Download the Platform

### Option 1: Release Download (Recommended)

1. Go to the [SIMPLE web platform repository](https://github.com/project-SIMPLE/simple.webplatform)
2. Click on "Releases" in the right sidebar
3. Download the latest stable release ZIP file

<!-- TODO: Add screenshot of GitHub Releases page -->
<!-- Screenshot description: The SIMPLE web platform GitHub repository page with the Releases section highlighted and the latest release ZIP file button visible. -->

### Option 2: Direct Download

1. Go to the [repository homepage](https://github.com/project-SIMPLE/simple.webplatform)
2. Click the green "Code" button
3. Select "Download ZIP"

:::warning
Ensure the "main" branch is selected before downloading
:::

## Configure Environment Variables

1. Copy the example environment file:

<!-- TODO: Add screenshot of the .env.example file in a code editor -->
<!-- Screenshot description: The .env.example file opened in a text editor (like VS Code) showing the available environment variables with descriptions as comments. -->

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

2. Edit the `.env` file with your settings

:::tip
For detailed information about all environment variables, see the [.env reference](docs/Technical/env_reference.md)
:::

## Install Dependencies

```bash
npm install
```

This may take a few minutes depending on your network speed.

## Start the Application

:::warning Prerequisite
Ensure GAMA is open and running before starting the web platform.
:::

```bash
npm start
```

The application will start and display the URL in your terminal (default: `http://localhost:8000`).

## Access the Platform

Open your web browser and navigate to the URL shown in your terminal.

<!-- TODO: Add screenshot of the web platform in browser -->
<!-- Screenshot description: The SIMPLE web platform running in a browser, showing the main dashboard or welcome screen. -->

## Troubleshooting

- **Port 8000 in use?** Change `WEB_APPLICATION_PORT` in `.env`
- **Can't connect to GAMA?** Verify GAMA is running and check `GAMA_IP_ADDRESS` and `GAMA_WS_PORT` settings

## Next Steps

- [Install a Virtual Universe](04-virtual-universe.md)
- [Configure your VR headset](docs/Tools/MetaQuest/headset-config.md)
