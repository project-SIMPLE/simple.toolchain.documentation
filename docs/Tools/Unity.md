---
title: Unity 3D Engine
sidebar_position: 3
---

# Unity 3D Engine

Unity is used to create and modify the 3D Virtual Universes that run on the GAMA platform.

## Requirements

- **Unity Version:** 6000.3.8f1
- **Module:** WebGL Build Support (required for web-based VR)

## Installation

1. Download **Unity Hub** from [unity.com](https://unity.com/download)
2. Install Unity Hub
3. In Unity Hub, go to **Installs → Add**
4. Select Unity version 6000.3.8f1
5. **Important:** Add the **Android Build Support** module

<!-- TODO: Add screenshot of Unity Hub installation with modules -->
<!-- Screenshot description: Unity Hub install dialog showing Unity 2022.3 LTS selected with Android Build Support module checked. -->

## Create a New Project

1. Open Unity Hub
2. Go to **Projects → New Project**
3. Select **3D (URP)** template
4. Name your project and click **Create Project**

:::info
URP (Universal Render Pipeline) is recommended for VR applications as it performs better on standalone headsets.
:::

## Build for VR devices

When your Virtual Universe is ready:

1. Go to **File → Build Settings**
2. Select **Android** platform
3. Click **Switch Platform** if not already selected
4. Configure **Player Settings**:
   - Set **Resolution and Presentation** to your target resolution
   - Enable **VR/WebXR** if using VR features
5. Click **Build** and select an output folder

## Troubleshooting

- **Build errors?** Ensure Android Build Support module is installed
- **VR not working?** Check that WebXR export package is installed
- **Performance issues?** Use URP and optimize textures for mobile VR
