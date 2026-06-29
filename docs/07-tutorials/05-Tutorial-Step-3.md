---
sidebar_position: 5
title: "Step 3: Personalize Agents"
sidebar_label: "3. Personalize Agents"
description: Modify species appearance from Unity while the GAMA experiment is running.
---

# Step 3: Personalize Agents During Play Mode

In the previous step, Unity performed a raw import of the GAMA experiment during Play
Mode.

The goal now is to verify that imported GAMA species can be modified from Unity while
the simulation is running.

## Open the Game Manager

Start Play Mode and wait until the GAMA agents appear in the Unity scene.

In the **Hierarchy**, select the object that manages GAMA connection and simulation
settings, usually the `Game Manager`.

In the **Inspector**, find the species settings. Unity should show the species
detected from the running GAMA experiment.

## Modify Species Attributes Live

Pick one species in the Inspector. You can modify visual settings such as:

1. **Prefab Override**: assign a Unity prefab instead of displaying the default
   geometry.
2. **Color**: change the species color.
3. **Scale Multiplier**: make agents bigger or smaller.
4. **Position Offset** and **Rotation Offset**: adjust the instantiated visual object.
5. **Visible**: hide species that are not useful for the Unity view.
6. **Reset to GAMA attributes**: revert local changes.

If default prefabs are missing, import them with:

```text
GAMA > Import Default Prefabs
```

## Why This Is Not the Final Workflow

Live modification proves that Unity can customize GAMA agents, but it is not the most
comfortable way to build a final visual setup.

You have to:

- launch Play Mode;
- wait for the GAMA experiment to connect;
- wait for agents to appear;
- modify settings while the simulation is already running;
- restart the workflow when you want to test another setup.

The next step introduces the **GAMA Preview** workflow. The preview generates a static
snapshot in Edit Mode so you can adjust colors, prefabs, scale, and visibility before
entering Play Mode again.

Next: [Generate and configure the Unity preview](./06-Tutorial-Step-4.md).
