---
sidebar_position: 2
title: Importing Data from GAMA
---

# Importing Data from GAMA

With the SIMPLE Unity Plugin, importing GAMA data into Unity is handled from the
package's GAMA Panel.

The current package workflow uses:

```text
GAMA > GAMA Panel > Generate Preview from GAMA
```

This creates a static Unity preview from the experiment opened or selected in GAMA.
The preview lets you inspect GAMA geometries and agents in the Unity Editor before
running the live simulation.

## Requirements

Before importing data:

1. Install the SIMPLE Unity Plugin in the Unity project.
2. Prepare the scene with **GAMA > GAMA Panel > Default Setup**.
3. Start `simple.webplatform`.
4. Open GAMA.
5. Open or select the experiment to preview.

The GAMA model must send data using the SIMPLE Unity integration actions expected by
the package, such as geometries, Unity properties, and optional attributes.

## Generate the Preview

In Unity:

1. Open **GAMA > GAMA Panel**.
2. Click **Generate Preview from GAMA**.
3. Wait until the preview is built in the scene.

Unity creates preview objects under:

```text
[GAMA] Static Experiment Preview
```

Detected species also appear in the GAMA Panel and in the Simulation Manager
Inspector.

## What You Can Configure

For each detected species, you can configure:

| Setting | Purpose |
|---|---|
| Prefab override | Replace the default geometry with a Unity prefab |
| Color override | Force a stable species color |
| Scale multiplier | Make agents easier to see without changing GAMA data |
| Position offset | Adjust the visual position |
| Rotation offset | Adjust the visual orientation |
| Visibility | Hide or show species |
| Dynamic color | Drive per-agent color from GAMA attributes |

These settings can then be reused during Play Mode.

## Difference with the Old Tool

The previous documentation required a dedicated utility model, a separate Unity import
window, and a manual middleware player step.

The package workflow centralizes this in the GAMA Panel:

- no separate Unity template project is required;
- no legacy geometry import menu is used;
- the preview is generated directly from the current GAMA/WebPlatform connection;
- the same species settings can be reused by live runtime agents.

## Next Step

After generating the preview, run the scene in Play Mode to validate that live agents
are created under:

```text
[GAMA] Runtime Live Agents
```
