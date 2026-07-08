---
sidebar_position: 6
title: "Step 4: Generate and Configure the Unity Preview"
sidebar_label: "4. Generate Preview"
description: Generate a static preview from GAMA and configure species visuals in Edit Mode.
---

# 4. Generate and Configure the Unity Preview

After validating the Play Mode, we'll generate a static preview to inspect the scene in
Unity Edit Mode.

The preview is useful because it lets you tune visual parameters without
launching the full live experiment every time.

## 4.1 Generate The Preview

Open **GAMA > GAMA Panel > Generate Preview from GAMA**.

![Generate Preview from GAMA button](/static/img/simple-unity-plugin/tutorial/03-generate-preview-button.png)

During capture, the GAMA Panel shows that the preview is being built.

<img width="639" height="238" alt="03-preview-building-panel" src="https://github.com/user-attachments/assets/f3dbf077-1511-41d7-8359-0150715c7c85" />

GAMA may start or update the experiment while Unity receives the preview data.

## 4.2 Expected Result

The Unity scene should show the map and detected agents without entering Play
Mode.

<img width="653" height="467" alt="image" src="https://github.com/user-attachments/assets/ec92bb08-7e42-4738-b1fb-90361fb1d3fe" />

The scene now contains the generated static preview.

![Generated static preview scene](/static/img/simple-unity-plugin/tutorial/03-static-preview-scene-built.png)


## 4.3 Parameters You Can Modify In The Preview

For each detected species, the preview exposes visual settings that can later be
applied to Play Mode runtime agents:

<img width="842" height="723" alt="03-preview-captured-species-settings" src="https://github.com/user-attachments/assets/455f9d78-3139-4728-ac21-1e285d8f8116" />

1. **Info**: details about the captured static preview data.
2. **Prefab**: replace the default GAMA geometry with a Unity prefab.
3. **Color**: force a stable color for the species.
4. **Scale**: change the visual size without changing the logical scale.
5. **Visible**: show or hide the species in preview and runtime.
6. **Reset**: return the species to the values received from GAMA.
7. **Validate**: apply the settings to your Unity agents and close the panel.

## 4.4 Preview Configuration Example

With the same model, start by checking that the static background
species is visible. Here, only the vegetation grid is clearly displayed in the
Unity preview.

![Vegetation preview settings](/static/img/simple-unity-plugin/tutorial/04-preview-vegetation-settings.png)

Then, increase the prey and predator scales in the previous panel so we can visualize them. Before assigning colors, they appear as grey points on top of the
vegetation grid.

![Grey prey and predator settings](/static/img/simple-unity-plugin/tutorial/04-preview-gray-agents-settings.png)

Finally, assign stable colors to distinguish the two dynamic species. In this
example, prey are blue and predators are red.

![Colored prey and predator settings](/static/img/simple-unity-plugin/tutorial/04-preview-colored-agents-settings.png)

> [!TIP]
> Generating a new preview should clean previous generated preview/runtime
> objects before rebuilding the scene. This avoids visual superposition with
> older example scenes or older previews.

## Result

At the end of this chapter, the static preview should look close to the desired
Unity scene, and the same species settings should be ready to reuse in Play
Mode.
