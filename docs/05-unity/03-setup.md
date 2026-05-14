---
sidebar_position: 3
title: Unity Template Setup
description: Open the SIMPLE Unity template, configure the WebPlatform IP, and run a test session in the editor.
---

# Unity Template Setup

This page covers opening the SIMPLE Unity template for the first time and connecting it to a running WebPlatform instance for development testing.

:::note
Before starting, complete the [Unity installation](./installation) (Unity 6000.3.8f1 with Android Build Support modules).
:::

---

## 1. Get the template

Download the Unity template from the [SIMPLE toolchain repository](https://github.com/project-SIMPLE/simple.toolchain/archive/refs/heads/Unity-6.zip) and extract it to a local folder.

:::warning
**Windows only:** Verify that `Assets/Plugins/` contains a file named `websocket-sharp.dll`. If it is missing, download it from the [websocket-sharp repository](https://github.com/sta/websocket-sharp) and place it in `Assets/Plugins/` inside the project.
:::

Alternatively, clone the repository:

```bash
git clone --branch Unity-6 https://github.com/project-SIMPLE/simple.toolchain.git
```

The Unity project is in `simple.toolchain/Unity Template VR/`.

---

## 2. Open the project

1. Open **Unity Hub**.
2. Click **Open** → **Add project from disk**.
3. Select the `Unity Template VR/` folder.
4. Unity Hub will warn if the editor version does not match — install `6000.3.8f1` if needed (see [Unity installation](./installation)).
5. Open the project and wait for Unity to import all assets (this may take several minutes on first open).

---

## 3. Run in the editor (development testing)

You can test the GAMA ↔ WebPlatform ↔ Unity connection without a physical headset using the Unity Editor.

### Switch to Android platform first

Unity must have **Android** as the active build target even for editor testing, so the project scripts initialize correctly:

1. Go to **File → Build Profiles**.
2. Select **Android** and click **Switch Platform**.

### Open a scene

For a quick test, open one of the **Code Examples** scenes:

```
Assets/Scenes/Code Examples/
```

Or open the startup menu scene:

```
Assets/Scenes/Menu/Startup Menu
```

### Set the WebPlatform IP

When you press **Play**, the Startup Menu scene loads first and shows an **IP Menu**. Enter the IP address of the machine running the WebPlatform:

- If the WebPlatform runs on the same machine: use `localhost` or `127.0.0.1`.
- If it runs on another machine on the same network: use that machine's local IP address.

The Unity app connects to `ws://<IP>:8080` (the `HEADSET_WS_PORT` configured in your `.env`).

### Enable the XR Device Simulator (optional)

To simulate VR controller input without a headset:

1. In the **Project** panel, find `Assets/Scenes/` and open your target scene.
2. In the **Hierarchy**, look for an **XR Device Simulator** GameObject. If it is disabled, enable it.
3. Press **Play**. You can now simulate head and controller movement with the mouse and keyboard.

:::tip
The XR Device Simulator documentation is at [docs.unity3d.com — XR Device Simulator](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@latest/manual/xr-device-simulator.html).
:::

---

## 4. Build and deploy to a Meta Quest headset

When you are ready to test on hardware:

1. Make sure the headset is in developer mode and connected via USB or Wireless ADB.
2. Go to **File → Build Profiles → Android**.
3. Click **Build and Run**. Unity builds the APK and installs it directly on the connected headset.

The installed app appears in **Library → Unknown Sources** on the headset.

:::info
To configure the WebPlatform IP on the headset, use the **IP Menu** that appears at startup. On subsequent launches, the previously entered IP is remembered.
:::

---

## 5. Verify the connection

With GAMA and the WebPlatform both running:

1. Launch the Unity app (in editor or on headset).
2. Enter the WebPlatform IP in the IP Menu and confirm.
3. The app transitions to a waiting screen — it is now connected to the WebPlatform.
4. In the WebPlatform admin UI (`http://localhost:8000`), the headset (or editor instance) appears in the headset list.
5. Select a Virtual Universe and click **Launch**. GAMA starts the experiment; Unity receives the simulation data and enters the VR scene.

---

## Next steps

- [Template Reference](./04-template-reference.md) — scenes, prefabs, and C# API (ConnectionManager, SimulationManager)
- [Operator Guide](/user/running-sessions/operators) — running a full session end-to-end
- [GAML API Reference](/gama/api) — writing the GAMA side of your VU
- [Virtual Universe Creator Guide](/webplatform/virtual-universes/vu-creators) — structuring your VU folder and `settings.json`
