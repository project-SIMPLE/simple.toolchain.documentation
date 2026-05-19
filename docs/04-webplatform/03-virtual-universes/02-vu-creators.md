---
title: Create a Virtual Universe
sidebar_position: 2
description: Guide for VU creators — structuring a GAML model, configuring settings.json, and preparing assets for the SIMPLE platform.
---

# Virtual Universe Creator Guide

This guide covers everything a Virtual Universe (VU) creator needs to know to integrate a simulation into the SIMPLE platform.

## What a Virtual Universe Contains

A VU is a folder that the WebPlatform scans at startup. It must contain:

- A `settings.json` descriptor (required) — tells the WebPlatform the name, splashscreen, and which GAML experiment to launch. See [Understanding settings.json](./03-settings.md).
- A GAML model file (`.gaml`) — the simulation logic.
- Optional assets: splashscreen image, shapefiles, textures, etc.

## Structuring Your GAML Model

Your GAML model must define an experiment that the WebPlatform can launch. The experiment name must match the `experiment_name` field in `settings.json`.

The SIMPLE GAMA plugin provides two abstract species to inherit from:

- `abstract_unity_linker` — handles the connection between GAMA and the WebPlatform. Your simulation species should inherit from this.
- `abstract_unity_player` — represents one connected VR headset/player. Extend this to hold per-player state.

A minimal GAML experiment for use with SIMPLE uses the `VR_Experiment` type:

```gaml
experiment Launch type: VR_Experiment {
  // experiment body
}
```

See the [GAML API Reference](/gama/api) for the full list of available species, operators, and actions.

## Configuring `settings.json`

Every VU folder must have a `settings.json` at its root. The minimal configuration:

```json
{
  "type": "json_settings",
  "name": "My Simulation",
  "model_file_path": "./models/MyModel.gaml",
  "experiment_name": "Launch",
  "minimal_players": "1",
  "maximal_players": "6"
}
```

See the [settings.json Reference](./03-settings.md) for all fields, path resolution rules, and catalog grouping.

## Providing a Splashscreen

Add a `splashscreen` field pointing to a PNG image:

```json
"splashscreen": "./splash.png"
```

Recommended dimensions: 16:9 aspect ratio, at least 640×360 px. If omitted, a placeholder is shown in the simulation selector.

## Folder Layout Example

```
my-simulation/
├── settings.json
├── splash.png
└── models/
    └── MyModel.gaml
```

Place this folder inside `learning-packages/` (or the directory set in `LEARNING_PACKAGE_PATH`). The WebPlatform picks it up on next startup.

## Testing Your VU

1. Drop the VU folder into `learning-packages/`.
2. Start the WebPlatform (`npm start`).
3. The simulation should appear in the selector. If it does not, check the WebPlatform logs for `settings.json` parse errors.
4. Click the simulation card to select it, then click **Launch** to run the experiment.
5. Connect a headset (or use GAMALESS mode to test without one) to verify the session runs end-to-end.
