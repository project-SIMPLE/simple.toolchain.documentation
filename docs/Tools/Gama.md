---
title: GAMA Platform
sidebar_position: 2
---

# GAMA Platform

GAMA is the simulation platform that runs the Virtual Universes. This guide covers installation and configuration for use with SIMPLE.

![gama splash screen](../../static/img/gama-splash.png)

## Requirements

- **Version:** GAMA 2025.06 or later (with JDK)
- **Download:** [GitHub Releases](https://github.com/gama-platform/gama/releases/tag/2025.06.4)

## Installation

1. Download the GAMA installer for your operating system
2. Follow the [official installation guide](https://gama-platform.org/wiki/Installation)
3. Launch GAMA to verify installation

<!-- TODO: Add screenshot of GAMA welcome screen -->
<!-- Screenshot description: GAMA platform main window showing the IDE interface with the welcome panel. -->

## Configure Network Settings (Optional)

The web platform communicates with GAMA via WebSocket on port 1000 by default.

1. Open GAMA
2. Go to **Support → Preferences → Network → Server Mode**
3. You can change the port if needed (default: `1000`)

:::note
GAMA wildcard the server's address by default. So the server port is always accessible on the machine IP address.
:::

<!-- TODO: Add screenshot of GAMA Network Preferences -->
<!-- Screenshot description: GAMA Preferences window showing Network/Server Mode settings with Address and Port fields. -->

:::info
Ensure these settings match your web platform's `.env` file:
- `GAMA_IP_ADDRESS` (default: `localhost`)
   - It has to be changed if GAMA doesn't run on the same machine as the web platform
- `GAMA_WS_PORT` (default: `1000`)
:::

## Install SIMPLE Plugin

The SIMPLE plugin adds VR capabilities to GAMA.

Follow the instructions in the [SIMPLE GAMA Plugin Repository](https://github.com/project-SIMPLE/simple.toolchain/tree/Unity-6/GAMA%20Plugin).

## Verify Connection

1. Start the web platform
2. Ensure GAMA is running
3. The web platform should connect to GAMA automatically

If connection fails, check:
- GAMA is running and not showing errors
- Firewall allows connection on port 1000
- `GAMA_IP_ADDRESS` in `.env` matches GAMA settings

## Troubleshooting

- **Can't connect?** Verify GAMA is fully started before launching the web platform
- **Port in use?** Change the port in GAMA preferences and update `.env`
