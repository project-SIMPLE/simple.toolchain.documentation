---
sidebar_position: 1
title: Running a Model
description: Run a GAMA experiment in Unity through the SIMPLE Unity Plugin package.
---

# Running a GAMA Model in Unity

This guide describes the package-based workflow.

The Unity project should contain the SIMPLE Unity Plugin package and a scene prepared
with **GAMA > GAMA Panel > Default Setup**.

## Prerequisites

Before starting, make sure you have:

1. a GAMA experiment that sends data to Unity;
2. `simple.webplatform` running;
3. the SIMPLE Unity Plugin installed in Unity;
4. a Unity scene prepared with **GAMA > GAMA Panel > Default Setup**.

The package tutorial currently uses the **Prey Predator** model as a validation
scenario because it contains static background species, dynamic agents, runtime
updates, and species-specific visualization.

## 1. Start the Middleware

The Unity package connects to `simple.webplatform`; it does not start the middleware
automatically.

For the current package workflow, use the `dev` branch:

```bash
git clone -b dev --single-branch https://github.com/project-SIMPLE/simple.webplatform.git
```

Then start the middleware from the `simple.webplatform` folder:

```bash
npm start
```

Default endpoints:

```text
Unity runtime / headset WebSocket: ws://localhost:8080/
Monitor WebSocket: ws://localhost:8001/
GAMA Server behind webplatform: ws://localhost:1000/
```

:::note
The standard package preview workflow does not require the middleware catalogue,
`settings.json`, or `LEARNING_PACKAGE_PATH` flow. Those may still be relevant for
full WebPlatform catalogue sessions, but they are not the default package tutorial
path.
:::

## 2. Prepare GAMA

Open GAMA and open the target experiment.

For Play Mode validation, run the experiment in GAMA before pressing Play in Unity.
For Editor preview generation, the experiment only needs to be open or selected in
GAMA.

## 3. Prepare Unity

In Unity:

1. Open the scene you want to use.
2. Open **GAMA > GAMA Panel**.
3. Click **Default Setup** if the scene has not been prepared yet.

The scene should contain:

- `FPSPlayer`
- `Teleport Area/Ground`
- `ManagersSolo/Connection Manager`
- `ManagersSolo/Game Manager`

## 4. Run in Play Mode

With GAMA and the middleware running:

1. Return to Unity.
2. Press **Play**.
3. Wait for Unity to connect to `simple.webplatform`.

When the connection works, runtime agents are created under:

```text
[GAMA] Runtime Live Agents
```

Agents are grouped by species, for example:

```text
[GAMA] Runtime Live Agents
prey
predator
vegetation_cell
```

At this point Unity is receiving live objects from GAMA and updating them while the
experiment runs.

## 5. Generate a Static Preview

For visual iteration, use the Editor preview:

1. Open **GAMA > GAMA Panel**.
2. Click **Generate Preview from GAMA**.

Unity creates a static preview under:

```text
[GAMA] Static Experiment Preview
```

Use this preview to configure prefabs, colors, scale, offsets, visibility, and dynamic
color rules before running the live simulation again.

## 6. Optional XR Device Simulator

For editor-side VR input testing:

1. Open **GAMA > GAMA Panel**.
2. Expand **Advanced Options** in the scene configuration section.
3. Click **Setup (VR Simulator)**.

If Unity cannot find the XR Device Simulator prefab, import the XR Interaction Toolkit
simulator sample in your Unity project, then run the setup again.

## 7. Optional Headset Build

For a Meta Quest or other Android headset:

1. Install Android Build Support, OpenJDK, and Android SDK/NDK Tools with Unity.
2. Open **File > Build Profiles**.
3. Select **Android** and click **Switch Platform**.
4. In **GAMA > GAMA Panel**, use **Setup (Headset Ready)**.
5. Add the correct scenes to the build list.
6. Click **Build and Run**.

The headset and the machine running `simple.webplatform` must be on the same network.
If you use the package menu scenes, the IP menu lets the user enter the WebPlatform
host at runtime.

## Next steps

- [Configure preview and species settings](./13-EditorPreviewSpeciesSettings.md)
- [Configure dynamic colors](./14-DynamicColors.md)
