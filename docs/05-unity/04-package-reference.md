---
sidebar_position: 4
title: Package Reference
sidebar_label: Package Reference
description: Reference for the SIMPLE Unity Plugin package structure, samples, editor tools, and runtime objects.
---

# SIMPLE Unity Plugin Package Reference

The SIMPLE Unity Plugin is distributed as a Unity Package Manager package. Its role is
to add GAMA/WebPlatform integration to a Unity project without requiring users to
download a complete Unity project.

## Package Identity

| Field | Value |
|---|---|
| Package name | `com.project-simple.unity-plugin` |
| Display name | `SIMPLE Unity Plugin` |
| Version | `1.0.0` |
| Unity version used by this documentation | `6000.3.2f1` |
| Distribution | Git URL or local package disk path |

Install URL:

```text
https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git
```

## Package Folders

| Folder | Purpose |
|---|---|
| `Runtime/` | Runtime code compiled into the Unity player |
| `Editor/` | Unity Editor tools such as the GAMA Panel, setup tools, preview tools, inspectors, and prefab import helpers |
| `Samples~/` | Optional sample scenes and starter content importable from Package Manager |
| `Documentation~/` | Package-local tutorial and technical notes |

## Runtime Content

The `Runtime/` folder contains the code and assets used while the Unity scene is
running:

| Runtime area | Role |
|---|---|
| `Runtime/Connection` | WebSocket connection to `simple.webplatform` |
| `Runtime/Simulation` | Conversion of GAMA messages into Unity runtime objects |
| `Runtime/Serialization` | Data structures for JSON messages exchanged with the middleware |
| `Runtime/Preview` | Runtime support for preview settings and species overrides |
| `Runtime/Resources` | Default prefabs, materials, player objects, and visual fallback assets |
| `Runtime/ThirdParty/NativeWebSocket` | Vendored WebSocket transport |
| `Runtime/Utils` | Geometry, debugging, color, and utility helpers |

## Editor Tools

The main editor entry point is:

```text
GAMA > GAMA Panel
```

The GAMA Panel groups the package workflow:

| Tool | Purpose |
|---|---|
| `Default Setup` | Rebuilds the active scene with the required GAMA objects |
| `Setup (VR Simulator)` | Prepares a scene for editor-side VR simulation |
| `Setup (Headset Ready)` | Configures project settings for headset-oriented builds |
| `Generate Preview from GAMA` | Creates a static preview from the experiment opened or selected in GAMA |
| `Workspace Explorer` | Scans local GAMA workspaces and experiments |
| Species settings | Adjusts per-species prefabs, colors, scale, offsets, and visibility |

The package also exposes:

```text
GAMA > Import Default Prefabs
```

This copies default package prefabs into the Unity project so they can be assigned
more easily from the Inspector.

## Scene Objects Created by Default Setup

The default setup builds a minimal scene for GAMA communication with the following
objects:

| Object | Role |
|---|---|
| `Directional Light` | Basic scene lighting |
| `Teleport Area/Ground` | Ground and teleport surface |
| `FPSPlayer` | Default player/camera rig |
| `ManagersSolo/Connection Manager` | WebSocket connection to the middleware |
| `ManagersSolo/Game Manager` | Simulation and agent rendering manager |

During Play Mode, live agents are created under:

```text
[GAMA] Runtime Live Agents
```

During Editor preview, static preview objects are created under:

```text
[GAMA] Static Experiment Preview
```

## Samples

Samples are optional and are imported from the Package Manager package details panel.

| Sample | Purpose |
|---|---|
| `VR Template` | Base VR scenes and prefabs for a GAMA-connected Unity project |
| `Code Examples` | Example scenes showing common GAMA and Unity integration flows |
| `Menu Scenes` | Startup, IP configuration, and end-of-game menu scenes |
| `Scene Templates` | Reusable FPS and sky-view starter scenes |

### Scene Templates

The `Scene Templates` sample contains reusable starter scenes, including:

| Template | Purpose |
|---|---|
| `Main Scene - FPS Player` | First-person player setup with ground movement and teleportation |
| `Main Scene - Sky View Player` | Top-down or flying overview setup without gravity |

The GAMA Panel can also generate code example scenes into:

```text
Assets/Scenes/Code Examples
```

These generated scenes are project files created inside the user's Unity project.

## Main Runtime Classes

### ConnectionManager

`ConnectionManager` manages the runtime WebSocket connection between Unity and
`simple.webplatform`. The runtime client connects to the middleware player endpoint,
usually:

```text
ws://localhost:8080/
```

It does not connect directly to GAMA Server. GAMA Server is reached internally by
`simple.webplatform`.

### SimulationManager

`SimulationManager` receives simulation messages, creates Unity objects from GAMA
agents, groups them by species, and applies visual settings such as prefab override,
color, scale, position offset, rotation offset, visibility, and dynamic color rules.

### GamaInitializer

`GamaInitializer` is used by the setup workflow to create the required runtime
objects in the active Unity scene.

### Preview and Species Override Assets

Preview-related runtime and editor classes store visual settings that can be reused
between:

- the static Editor preview;
- Play Mode runtime agents;
- the Simulation Manager Inspector.
