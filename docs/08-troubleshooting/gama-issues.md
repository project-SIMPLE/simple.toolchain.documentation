---
title: GAMA Simulation Issues
sidebar_label: GAMA Issues
sidebar_position: 2
---

# GAMA Simulation Issues

This page covers issues related to the GAML model and the GAMA execution environment.

---

## Simulation doesn't start or headsets don't connect

The most common reason for a simulation not connecting to the WebPlatform or headsets is using a standard GAMA experiment type instead of the SIMPLE-provided type.

**Symptoms:**
- GAMA experiment runs but nothing appears in the WebPlatform.
- Headsets stay on the "Waiting for GAMA" screen.
- Errors in the WebPlatform console about missing actions.

**Solution:**
Ensure your experiment uses `type: unity`. This built-in type automatically manages the `unity_linker` agent and the mandatory `create_player` / `remove_player` actions.

```gaml
// Correct
experiment MyVRExperiment type: unity {
    // ...
}

// Incorrect
experiment MyStandardExperiment type: gui {
    // ...
}
```

---

## "Action not found" Errors

When sending commands from Unity to GAMA using `SendExecutableAsk`, GAMA may report that an action cannot be found.

**Solution:**
1. Verify the action is defined in your experiment block or global block.
2. **Critical:** Ensure all parameters in actions called from Unity are of type `string`. GAMA's network bridge handles strings most reliably; you can then cast them to the correct type inside the GAML action.

```gaml
// Recommended pattern
action my_interaction(string id) {
    agent target <- agent(id);
    // ...
}
```

---

## Simulation pauses immediately / headsets see "Waiting for players"

The simulation will not advance past its first step until the number of connected players reaches `min_num_players` (default `1`). If no headset has connected yet, GAMA waits indefinitely.

**During development**, set `min_num_players` to `0` in your linker's `init` block so the simulation runs freely without a headset:

```gaml
species my_linker parent: abstract_unity_linker {
  init {
    min_num_players <- 0;
  }
}
```

For production, set it to the number of headsets you expect and connect them before launching the experiment.

---

## GAMA runs out of memory (OutOfMemoryError)

Sending high-resolution shapefiles or thousands of agents to Unity can consume significant memory in GAMA during serialization.

**Solution:**
1. **Increase GAMA Memory:** Open your GAMA installation folder, find the `.ini` file (e.g., `Gama.ini`), and increase the `-Xmx` value (e.g., `-Xmx8g`).
2. **Simplify Geometries:** Use the `simplification` operator in GAML to reduce the number of vertices in your shapefiles before sending them to Unity.
3. **Filter by Distance:** Use the linker's `player_agents_perception_radius` to only send agents that are near the player.

---

## Objects appear in Unity but are millions of meters away

This is a `precision` mismatch. GAMA multiplies all geometry coordinates by
`precision` before sending them. The SIMPLE Unity Plugin applies the corresponding
conversion on receipt. If the two values differ, agents appear displaced by several
orders of magnitude.

Check that your linker's `precision` variable matches the `coordinateConverter` factor in your Unity scene's `ConnectionManager`. If you customized `precision` in GAML, apply the same value on the Unity side.
