---
sidebar_position: 15
title: Preview and Play Mode Synchronization
description: Summary of recent SIMPLE Unity Plugin work on GAMA preview generation, species overrides, and Play Mode consistency.
---

# Preview and Play Mode Synchronization

This page summarizes the recent work done on the SIMPLE Unity Plugin to make the
static Unity preview and Play Mode runtime behave consistently.

The main goal was to let users configure species appearance once, from the GAMA Panel
or the Simulation Manager Inspector, and see the same result in:

- the Editor preview generated from GAMA;
- Unity Play Mode connected to `simple.webplatform`;
- later preview generations for the same experiment.

## Problems Addressed

Several related issues were fixed.

### Play Mode launch reliability

Play Mode could fail to start the GAMA experiment reliably, or could leave GAMA in an
unexpected state after Unity stopped. The plugin now identifies the Unity Play Mode
runtime player more explicitly and avoids reusing stale player state between runs.

### Runtime appearance updates

Changing species appearance from the Game Manager during Play Mode did not always
update existing agents immediately. Color, scale, visibility, prefab override, and
position/rotation offsets are now refreshed on the runtime agents when a species
setting changes.

### Transient Play Mode edits

Appearance changes made during Play Mode must not pollute the next Editor preview.
Play Mode changes are treated as runtime changes unless they are explicitly saved as
Editor preview settings. This prevents temporary runtime choices from being stored as
the default appearance for future preview captures.

### Preview defaults and reset behavior

The plugin now keeps a stable imported baseline for species appearance. The reset
button restores the appearance captured from GAMA or from the first import baseline
instead of restoring a temporary Play Mode state.

### Parent scale spread

Some agents are represented by fallback primitives, such as capsules or cubes, when
the GAMA geometry is too small, degenerate, or not directly usable as a polygon.

Earlier implementations could place visual geometry on a child object while the
parent stayed at the origin. Scaling the parent then changed the apparent spread of a
whole cloud of agents instead of scaling each visible agent around its own location.

The preview and runtime paths now follow the same rule:

- each agent root is placed at the GAMA agent anchor;
- fallback visuals are local children at `(0, 0, 0)`;
- species scale is applied to the agent root;
- the fallback visual keeps a fixed local base size.

This keeps scale changes local to each agent.

### Preview and Play Mode scale consistency

The same scale value should now produce the same result in both Editor preview and
Play Mode. For example, if `prey = 3`, `predator = 3`, and `vegetation_cell = 1`
look correct in the preview, the same values should be used in Play Mode.

The important correction was to avoid applying the same species scale once on the
agent root and again on the generated fallback visual.

## Diagnostic Logs

The plugin now logs spread diagnostics for preview objects. These logs compare the
expected spread from GAMA coordinates with the visible rendered bounds in Unity.

Example log prefix:

```text
[GAMA][PREVIEW][SPREAD]
```

Runtime/editor override refreshes can also emit:

```text
[GAMA][PREVIEW][SPREAD][ACTIVE]
```

These diagnostics are useful when a species looks visually stretched even though the
root transforms look correct. The checks use renderer bounds so they can detect
spread caused by visible child objects.

## Expected Workflow

1. Start `simple.webplatform`.
2. Open or select the target experiment in GAMA.
3. In Unity, open **GAMA > GAMA Panel**.
4. Generate a preview from GAMA.
5. Adjust species appearance in the preview:
   - color;
   - scale;
   - visibility;
   - prefab override;
   - position and rotation offsets.
6. Validate the preview settings.
7. Enter Play Mode.
8. Confirm that the runtime agents use the same appearance.

If the package was updated while Unity already had preview objects in the scene, clear
and regenerate the preview. Old preview objects may still contain the previous object
hierarchy.

## Validation Checklist

Use this checklist after changing preview or runtime appearance code.

| Check | Expected result |
|---|---|
| Generate preview once | Agents appear under `[GAMA] Static Experiment Preview` |
| Set `prey` scale to `3` | Each prey becomes larger without expanding the full prey cloud |
| Set `predator` scale to `3` | Predators scale around their own positions |
| Keep `vegetation_cell` scale at `1` | Vegetation cells keep the expected grid size |
| Enter Play Mode | Runtime agents appear under `[GAMA] Runtime Live Agents` |
| Compare preview and Play Mode | The same scale values produce the same visual size |
| Stop Play Mode | Temporary runtime edits do not overwrite the next preview baseline |
| Generate another preview | Previous Play Mode-only edits are not reused accidentally |

## Package Branch Used During Development

The work was developed and tested on the Unity package branch:

```text
fix/playmode-launch-appearance-sync
```

The main commits in this work sequence included fixes for:

- Play Mode experiment launch and runtime appearance refresh;
- stale Play Mode player state;
- transient runtime overrides;
- Play Mode reconnect and pause behavior;
- preview completion and cache replacement;
- edit preview polygon scaling;
- parent scale spread;
- preview spread diagnostics;
- fallback preview anchors;
- runtime fallback scaling;
- preview fallback scale application.

