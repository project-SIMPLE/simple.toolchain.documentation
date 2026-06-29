---
sidebar_position: 13
title: Preview and Species Settings
description: Generate a static GAMA preview in Unity and configure species visual settings before Play Mode.
---

# Preview and Species Settings

The SIMPLE Unity Plugin provides an Editor preview workflow so you can configure the
Unity representation of GAMA agents before entering Play Mode.

This is more comfortable than adjusting everything while the simulation is already
running.

## 1. Generate the Preview

Start `simple.webplatform`, open GAMA, and open or select the target experiment.

Then, in Unity:

1. Open **GAMA > GAMA Panel**.
2. Click **Generate Preview from GAMA**.

Unity receives data through the middleware and creates a static preview under:

```text
[GAMA] Static Experiment Preview
```

The experiment does not need to be already running for this preview workflow. It must
be open or selected in GAMA so the package can request data from the correct model.

## 2. Configure Species

After the preview is generated, detected species appear in the GAMA Panel and in the
Simulation Manager Inspector.

For each species, you can configure:

| Setting | Purpose |
|---|---|
| `Prefab Override` | Use a Unity prefab instead of the default geometry |
| `Resources Path Override` | Resolve a prefab available through Unity `Resources` |
| `Color Override` | Force a stable color for the species |
| `Scale Multiplier` | Make agents larger or smaller without changing GAMA data |
| `Position Offset` | Shift the visual representation relative to the GAMA position |
| `Rotation Offset` | Rotate the visual representation |
| `Visible` | Show or hide a species |
| `Reset to GAMA attributes` | Revert local overrides |

## 3. Import Default Prefabs

If the prefab list is empty or missing the default examples, run:

```text
GAMA > Import Default Prefabs
```

Unity copies the default package prefabs into the project so they can be assigned from
the Inspector or GAMA Panel.

## 4. Reuse Settings in Play Mode

When Play Mode starts:

- the static preview is hidden to avoid duplicates;
- live agents are created under `[GAMA] Runtime Live Agents`;
- species settings are applied to runtime agents.

This lets you prepare the visual mapping in Edit Mode, then reuse it when the live
GAMA simulation runs.

## Troubleshooting

### No species appear

Generate a preview first and check that GAMA and `simple.webplatform` are running.

### Preview objects overlap old objects

Generate the preview again. The package is designed to clean previous preview/runtime
objects before rebuilding the scene.

### Settings do not affect Play Mode

Check that the preview settings were applied or validated before entering Play Mode.
