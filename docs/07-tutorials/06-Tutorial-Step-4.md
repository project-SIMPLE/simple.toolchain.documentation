---
sidebar_position: 6
title: "Step 4: Generate the Preview"
sidebar_label: "4. Generate Preview"
description: Generate a static Unity preview from GAMA and configure species settings.
---

# Step 4: Generate and Configure the Unity Preview

After validating Play Mode, generate a static preview to inspect the scene in Unity
Edit Mode.

The preview is useful because it lets you tune visual parameters without launching the
full live experiment every time.

## Generate the Preview

Open:

```text
GAMA > GAMA Panel
```

Then click:

```text
Generate Preview from GAMA
```

During capture, the GAMA Panel shows that the preview is being built. GAMA may start
or update the experiment while Unity receives the preview data.

## Expected Result

The Unity scene should show the map and detected agents without entering Play Mode.

The generated static preview appears under:

```text
[GAMA] Static Experiment Preview
```

## Parameters You Can Modify

For each detected species, the preview exposes visual settings that can later be
applied to Play Mode runtime agents:

| Setting | Role |
|---|---|
| Info | Details about captured preview data |
| Prefab | Replace the default GAMA geometry with a Unity prefab |
| Color | Force a stable species color |
| Scale | Change the visual size without changing GAMA data |
| Visible | Show or hide the species |
| Reset | Return the species to values received from GAMA |
| Validate | Apply the settings to Unity agents |

## Result

At the end of this chapter, the static preview should look close to the desired Unity
scene, and the same species settings should be ready to reuse in Play Mode.

Next: [Dynamic colors from GAMA attributes](./07-Tutorial-Step-5.md).
