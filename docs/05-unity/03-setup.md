---
sidebar_position: 3
title: Unity Package Setup
description: Install the SIMPLE Unity Plugin in a Unity project, prepare the scene, and validate the GAMA connection.
---

# Unity Package Setup

This page replaces the old Unity Template setup workflow.

You no longer need to download the full `simple.toolchain` Unity project or open
`Unity Template VR`. The current workflow is:

1. create or open a Unity project;
2. install the SIMPLE Unity Plugin package;
3. prepare the active scene from the **GAMA Panel**;
4. run GAMA and `simple.webplatform`;
5. validate the connection in Play Mode or with the Editor preview.

:::note
Before starting, complete the [Unity installation](./installation) and install the
SIMPLE Unity Plugin through Unity Package Manager.
:::

## 1. Create or Open a Unity Project

Start from either:

- a new empty Unity project;
- an existing Unity project where you want to add GAMA integration.

The package brings its own runtime scripts, editor tools, prefabs, and optional
samples. The Unity project does not need to be cloned from the SIMPLE toolchain.

## 2. Install the Package

In Unity:

1. Open **Window > Package Manager**.
2. Click **+**.
3. Select **Add package from git URL...**.
4. Enter:

```text
https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git
```

For local package development, use **Add package from disk...** and select the
package repository's `package.json`.

## 3. Prepare the Scene

Open:

```text
GAMA > GAMA Panel
```

In the **Scene Configuration** tab, click:

```text
Default Setup
```

This rebuilds the active scene with the objects required by the package. After the
setup, the scene should contain at least:

- `Directional Light`
- `Teleport Area/Ground`
- `FPSPlayer`
- `ManagersSolo/Connection Manager`
- `ManagersSolo/Game Manager`

:::warning
`Default Setup` rebuilds the active scene and removes existing root objects. Run it
in an empty scene or save your work before using it in an existing scene.
:::

## 4. Optional Setup Modes

The **GAMA Panel** also exposes advanced setup options:

| Option | Use case |
|---|---|
| `Setup (VR Simulator)` | Prepare a scene for editor-side VR input testing |
| `Setup (Headset Ready)` | Prepare project settings for headset builds |
| `Generate Selected Example Scene` | Generate one code example scene under `Assets/Scenes/Code Examples` |
| `Generate All Example Scenes` | Generate all package-defined example scenes |

The code example scenes are generated into the Unity project. They are not part of a
separate template project.

## 5. Start GAMA and the Middleware

The Unity package connects to `simple.webplatform`. It does not start or modify the
middleware for you.

For the current package tutorial, use the `dev` branch of `simple.webplatform`:

```bash
git clone -b dev --single-branch https://github.com/project-SIMPLE/simple.webplatform.git
```

Then start the middleware according to the `simple.webplatform` README, commonly:

```bash
npm start
```

Default endpoints:

```text
Unity runtime / headset WebSocket: ws://localhost:8080/
Monitor WebSocket: ws://localhost:8001/
GAMA Server behind webplatform: ws://localhost:1000/
```

Open GAMA and open or run the target experiment. The package tutorial currently uses
the **Prey Predator** tutorial model as a validation scenario.

## 6. Validate Play Mode

With GAMA and `simple.webplatform` running:

1. Return to Unity.
2. Make sure the scene was prepared with **GAMA > GAMA Panel > Default Setup**.
3. Press **Play**.

When the connection works, Unity creates live runtime agents under:

```text
[GAMA] Runtime Live Agents
```

The imported agents are grouped by species in the Unity hierarchy.

## 7. Generate an Editor Preview

The package also provides a faster visual iteration workflow.

Open:

```text
GAMA > GAMA Panel
```

Then click:

```text
Generate Preview from GAMA
```

Unity connects to the middleware, receives GAMA data, and creates a static preview
under:

```text
[GAMA] Static Experiment Preview
```

This lets you tune species colors, prefabs, scale, visibility, and dynamic color
rules in Edit Mode before running Play Mode again.

## Next steps

- [Package Reference](./04-template-reference.md)
- [Run a model from Unity](./05-how-to/01-Running-a-model-game.md)
- [Configure preview and species settings](./05-how-to/13-EditorPreviewSpeciesSettings.md)
- [Configure dynamic colors](./05-how-to/14-DynamicColors.md)
