---
title: Unity Environment and Package Installation
sidebar_label: Unity Installation
sidebar_position: 1
description: Install Unity 6000.3.2f1 and add the SIMPLE Unity Plugin package to a Unity project.
---

# Unity Environment and Package Installation

This page explains how to prepare Unity for the SIMPLE Unity Plugin.

Start from an empty or existing Unity project, then install the SIMPLE Unity Plugin
through Unity Package Manager.

## 1. Requirements

Before installing the package, prepare:

- **Unity Hub**
- **Unity 6000.3.2f1**
- **Git**, required by Unity Package Manager when installing from a Git URL
- **GAMA**
- **simple.webplatform**, started separately from Unity

Use Unity `6000.3.2f1` for the SIMPLE Unity Plugin workflow documented here.

:::tip
For a reproducible setup, use the same Unity version across the team when testing or
preparing a demo.
:::

## 2. Install Unity Hub

1. Go to the [Unity Download Page](https://unity.com/download).
2. Download and install **Unity Hub**.
3. Launch Unity Hub and sign in with your Unity ID.

## 3. Install Unity Editor

1. Open Unity Hub.
2. Go to **Installs** > **Install Editor**.
3. Select Unity `6000.3.2f1`.
4. Continue to the module selection screen.

If your required Unity version is not listed in Unity Hub, use the
[Unity Download Archive](https://unity.com/releases/editor/archive).

## 4. Select Unity Modules

For desktop-only testing, the default Unity editor modules are usually enough.

For Meta Quest or Android headset builds, add:

- **Android Build Support**
- **OpenJDK**
- **Android SDK & NDK Tools**

For C# editing, install either:

- **Visual Studio Code**
- another Unity-compatible C# editor

## 5. Install the SIMPLE Unity Plugin

Open your Unity project, then:

1. Open **Window > Package Manager**.
2. Click the **+** button.
3. Select **Add package from git URL...**.
4. Paste:

```text
https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git
```

To install a specific branch:

```text
https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git#branch-name
```

Unity downloads the package and installs its dependencies declared in
`package.json`, including XR, Input System, Newtonsoft JSON, UGUI, and related
Unity packages.

:::note
The package already contains its WebSocket transport under
`Runtime/ThirdParty/NativeWebSocket`. Do not add another copy of NativeWebSocket
unless you intentionally remove the vendored one.
:::

## 6. Install from Local Disk

For local package development:

1. Clone or open the `SIMPLE-Unity-Plugin` repository locally.
2. In Unity, open **Window > Package Manager**.
3. Click **+**.
4. Select **Add package from disk...**.
5. Select the package repository's `package.json`.

Use this mode when editing the package itself before pushing changes to GitHub.

## 7. Optional Samples

The package exposes sample content through Package Manager. Open the package details
panel and import only the samples you need:

| Sample | Purpose |
|---|---|
| `VR Template` | Base VR scenes and prefabs for a GAMA-connected Unity project |
| `Code Examples` | Example scenes for common GAMA and Unity integration flows |
| `Menu Scenes` | Startup, IP configuration, and end-of-game menus |
| `Scene Templates` | Reusable FPS and sky-view starter scenes |

Samples are optional. The main package workflow can start from an empty Unity scene
using **GAMA > GAMA Panel > Setup Scene**.

## Troubleshooting

### Git URL installation fails

Check that Git is installed and available from the command line:

```bash
git --version
```

Then retry the Package Manager installation.

### Android SDK or NDK path not found

If Unity complains about missing Android tools:

1. Open **Edit > Preferences** on Windows or **Unity > Settings** on macOS.
2. Go to **External Tools**.
3. In the Android section, uncheck and recheck:
   - **JDK Installed with Unity**
   - **Android SDK Tools Installed with Unity**
   - **Android NDK Installed with Unity**

### VS Code IntelliSense not working

1. In Unity, open **Edit > Preferences > External Tools**.
2. Set **External Script Editor** to **Visual Studio Code**.
3. Click **Regenerate project files**.
4. In VS Code, install the **C# Dev Kit** extension.

## Next steps

- [Set up a Unity scene](./setup)
- [Understand the package structure](./package-reference)
- [Run a model from Unity](./05-how-to/01-Running-a-model-game.md)
