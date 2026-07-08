---
sidebar_position: 5
title: "Step 3: Personalize Agents During Play Mode"
sidebar_label: "3. Personalize Agents"
description: Change species appearance and prefab settings while the simulation is running.
---

# 3. Personalize Agents During Play Mode

In the previous step, Unity performed a raw import of the GAMA experiment during
Play Mode. At this stage, the goal is not yet to build the final visual setup. The goal is
to show that the imported GAMA species can be modified live from Unity while the
simulation is running.

## 3.1 Open The Game Manager

Start Play Mode and wait until the GAMA agents appear in the Unity scene.

In the **Hierarchy**, select the object that manages the GAMA connection and
simulation settings:

![Game Manager Hierarchy](/static/img/simple-unity-plugin/tutorial/game-manager-hierarchy.png)

In the **Inspector** window, find the GAMA agent or species settings. Unity should show
the species detected from the running GAMA experiment.

> [!TIP]
> **Can't find the Inspector?** If the Inspector window is not visible in your Unity layout, you can open it via the top menu: **Window > General > Inspector**, or by pressing `Ctrl + 3` (Windows) / `Cmd + 3` (macOS).
>
> <img width="1013" height="557" alt="Open Inspector Menu" src="https://github.com/user-attachments/assets/523641bb-b849-44dc-a32c-6e4e1643b94c" />

For example, here we have the species `prey`, `predator`, and `vegetation_cell`:

<img width="226" height="88" alt="02-agents-grouped-by-species" src="https://github.com/user-attachments/assets/0c90e272-6aae-4432-b6ab-87982a10d8de" />


## 3.2 Modify Species Attributes Live

Pick one specie in the Inspector. You will see several attributes you can modify live.

This lets you quickly verify that Unity can override the visual appearance of a GAMA species without changing the GAMA model itself. The scene should update while Play Mode is still running, or on the next visual refresh received from GAMA.

For example, the prey and predator species can be given different prefabs,
colors, and scales so the running experiment becomes readable from Unity.

<img width="630" height="915" alt="Capture d&#39;écran 2026-06-18 163019" src="https://github.com/user-attachments/assets/975716d3-03fe-4bad-b682-f19f0f1388eb" />


![Species Attributes](/static/img/simple-unity-plugin/tutorial/inspector-attributes.png)

Using the Inspector, you can change the following attributes directly:

1. **Prefab Override**: Assign a Unity prefab instead of displaying a default geometric shape.
   
   To change it, click on the small circle icon on the right of the field:
   
   ![Click Prefab Circle](/static/img/simple-unity-plugin/tutorial/prefab-override-circle.png)
   
   You will see a list of prefab previews (like Boy, Car, Cube, Ghost, Scooter). These are default prefabs downloaded into the project during the package installation (if you clicked "OK" when prompted to bring prefabs into the project).
   
   ![Select Prefab Window](/static/img/simple-unity-plugin/tutorial/select-prefab-window.png)
   
   > [!NOTE]
   > **Missing Prefabs?**
   > If you don't see these prefabs in the list, you can import them at any time by going to the top Unity menu: **GAMA > Import Default Prefabs**.
   > 
   > ![Import Prefabs Menu](/static/img/simple-unity-plugin/tutorial/gama-menu-import-prefabs.png)
   > 
   > Click **Import** when the prompt appears, and Unity will copy them into your project.
   > 
   > ![Import Prefabs Prompt](/static/img/simple-unity-plugin/tutorial/import-prefabs-prompt.png)
   > 
   > ![Import Success](/static/img/simple-unity-plugin/tutorial/import-prefabs-success.png)
2. **Color**: Quickly change the species color to separate them visually.
3. **Scale Multiplier**: Make agents bigger or smaller so they are easier to see.
4. **Position & Rotation Offset**: Adjust the 3D position and rotation of the instantiated prefab relative to the GAMA agent's center.
5. **Visible**: Hide species that are not useful for the Unity view.
6. **Reset to GAMA attributes**: Revert any local changes back to the original attributes sent by GAMA.

This is very useful for quick experimentation because you immediately see whether the selected setup makes sense in the scene.

For example, you can quickly try exaggerated prefabs, colors, or scales to check
that the override pipeline works, even if the result is not meant to be a final
visual design.

![Quick personalization example](/static/img/simple-unity-plugin/tutorial/03-quick-personalization-example.png)

## 3.4 Why This Is Not The Best Workflow

Live modification proves that the Unity side can customize GAMA agents, but it
is not comfortable for real visual iteration.

You have to:

- launch Play Mode;
- wait for the GAMA experiment to connect;
- wait for the agents to appear;
- modify settings while the simulation is already running;
- restart the workflow when you want to test another setup.

This means you are often tuning the scene after launching it, almost blindly.

To make this easier, the next step introduces the **GAMA Preview** workflow. The
preview lets you generate a static snapshot of the GAMA experiment in Edit Mode,
then adjust colors, prefabs, scale, and visibility before entering Play Mode
again.
