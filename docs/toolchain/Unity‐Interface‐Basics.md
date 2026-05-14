---
title: Unity Interface Basics
sidebar_label: Unity Interface
sidebar_position: 4
description: Overview of the Unity Editor layout and navigation controls for SIMPLE development.
---

# Unity Interface & Navigation Basics

This page provides an overview of the Unity Editor layout and the fundamental controls to navigate the 3D space.

## 1. The Editor Layout

The Unity interface is divided into several key panels. Understanding what each window does is crucial for development.

<img width="1550" alt="Capture d’écran 2026-02-13 à 13 11 44" src="https://github.com/user-attachments/assets/0ed1f321-266e-41df-84e2-6c9cd91cf213" />

### A. Hierarchy (Left Panel)
* **Function:** Lists every **Game Object** currently present in the active scene.
* **Usage:** Use this to select objects, parent them to one another (drag and drop), or organize your scene structure.
* **Key Concept:** If an object is not in the Hierarchy, it is not in the level.

### B. Scene View & Game View (Center)
This is your main visual workspace, usually tabbed at the top:
* **Scene View:** The "Director's view." You can fly around, select objects, move them, and edit the world freely.
* **Game View:** The "Player's view." This renders what the main camera sees. It represents the final look of the game.

### C. Inspector (Right Panel)
* **Function:** Displays the detailed properties of the **currently selected object**.
* **Usage:** This is where you configure Components. You can change position, rotation, assign scripts, modify public variables, and set tags/layers.

### D. Project Window (Bottom)
* **Function:** The file explorer for your entire project (Assets folder).
* **Usage:** Contains all source files: Scripts, Models, Textures, Prefabs, and Materials.
* **Action:** To use an asset, drag it from here into the *Scene View* or *Hierarchy*.

### E. Console (Bottom Tab)
* **Function:** System output log.
* **Usage:**
 * **Logs:** General info (`Debug.Log`).
 * **Warnings:** Non-critical issues.
 * **Errors:** Critical issues that prevent the game from running or compiling.

---

## 2. Navigating the 3D View (Scene View)

To build your scene, you need to move the camera comfortably.

### Mouse Controls
| Action | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **Orbit** (Rotate around) | `Alt` + `Left Click` + Drag | `Option` + `Left Click` + Drag |
| **Pan** (Move sideways) | `Middle Mouse Click` + Drag | `Option` + `Command` + `Left Click` |
| **Zoom** | Mouse Wheel | Mouse Wheel / Trackpad Scroll |

### Fly Mode (First Person Style)
This is the most efficient way to move large distances.
1. **Hold Right Click** inside the Scene View (your cursor turns into an eye ).
2. Use **W, A, S, D** (or Z, Q, S, D) to fly.
3. Use **Q** and **E** to move Up and Down.

### Focus Object
If you get lost or want to center the camera on a specific object:
1. Select the object in the **Hierarchy**.
2. Press **F** on your keyboard.
3. The camera will instantly zoom and focus on that object.

---

## 3. Play Mode Warning

:::danger
**Changes made during Play Mode are NOT SAVED!**

When you press the ▶ **Play** button at the top to test the game, the editor enters "Play Mode".
Any modification (changing values, moving objects) will be **reset** as soon as you stop the game.

**Always stop Play Mode before making permanent changes.**
:::
