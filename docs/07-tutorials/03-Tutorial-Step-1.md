---
sidebar_position: 3
title: "Step 1: Install the Unity Package"
sidebar_label: "1. Install Package"
description: Install the SIMPLE Unity Plugin and prepare the Unity scene.
---

# Step 1: Install the Unity Package

This chapter shows how to install the SIMPLE Unity Plugin in a Unity project and
prepare the scene for GAMA communication.

## Create or Open a Unity Project

Start by creating a new Unity project or opening an existing one.

Use Unity `6000.3.2f1` for this tutorial.

## Install from GitHub

In Unity:

1. Open **Window > Package Manager**.
2. Click the **+** button.
3. Select **Add package from git URL...**.
4. Enter:

```text
https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git
```

To install a specific branch:

```text
https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git#branch-name
```

After installation, the package appears in Package Manager.

## Install from Local Disk

For local development:

1. Open **Window > Package Manager**.
2. Click **+**.
3. Select **Add package from disk...**.
4. Select the package repository's `package.json`.

## Prepare the Unity Scene

Open:

```text
GAMA > GAMA Panel
```

Then click:

```text
Default Setup
```

After setup, the scene should contain the objects needed to communicate with the
middleware:

- a player or camera rig;
- a `Connection Manager`;
- a `Game Manager`;
- required roots for preview and runtime objects.

## Result

At the end of this chapter, Unity is ready to communicate with the middleware.

Next: [Run the GAMA experiment in Play Mode](./04-Tutorial-Step-2.md).
