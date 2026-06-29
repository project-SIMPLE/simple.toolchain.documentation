---
title: Unity Plugin Issues
sidebar_label: Unity Issues
sidebar_position: 5
---

# Unity Plugin Issues

Common hurdles when working with the SIMPLE Unity Plugin package.

---

## The "Managers" are missing

The SIMPLE Unity Plugin setup creates manager objects in the active scene. These
objects contain the `ConnectionManager` and `SimulationManager` components required
for runtime communication.

**Symptoms:**
- `NullReferenceException` when accessing `SimulationManager.Instance`.
- No connection attempts logged in the Unity console.

**Solution:**
Open **GAMA > GAMA Panel** and run **Default Setup** in the active scene. If you use a
custom scene, verify that the scene contains a `Connection Manager` and a `Game
Manager`.

---

## Prefabs not appearing (Pink/Missing)

If GAMA is sending data but objects don't appear in Unity, or appear as pink boxes:

1. **Resources Folder:** Ensure your prefabs are located inside a folder named `Resources`. Unity's `Resources.Load()` can only find assets in these specific folders.
2. **Prefab Name Mismatch:** The `prefabPath` parameter in GAML's `prefab_aspect` must exactly match the path relative to the `Resources` folder (e.g., `"Prefabs/Car"`).

---

## Jittery Movement or Floating Objects

If agents appear to jump around or are at the wrong height:

1. **Coordinate Precision:** Ensure the `precision` variable in GAMA matches the one expected by Unity. If GAMA sends raw high-precision integers but Unity doesn't divide them correctly, objects will appear millions of meters away.
2. **Y-Offset:** Adjust the `y_offset` in your `unity_aspect` (GAML) to ensure agents are properly grounded on your Unity terrain.

---

## Editor & Build Environment

### "Android SDK/NDK path not found"
If Unity complains about missing Android tools:
1. Go to **Edit** > **Preferences** > **External Tools**.
2. Scroll to the **Android** section.
3. **Uncheck** and then **Recheck** the boxes for JDK, SDK, and NDK. This forces Unity to refresh its internal paths.

### VS Code IntelliSense not working
1. Go to **Edit** > **Preferences** > **External Tools**.
2. Set "External Script Editor" to **Visual Studio Code**.
3. Click **Regenerate project files**.

### Lighting Data Warning
If you see a warning about incompatible lighting data:
1. Go to **Window** > **Rendering** > **Lighting**.
2. Click **Generate Lighting** at the bottom of the window.

---

## Interactions & UI

### Raycast doesn't hit agents
If you point at an agent with your controller but no hover/select event fires:
1. **Collider:** Check that the agent's Unity prefab (or the generated mesh) has a **Collider** component.
2. **Interaction Layer:** Ensure the object is not on a layer that the XR Ray Interactor is configured to ignore.
3. **`unity_interaction`:** Verify that `is_interactable` is set to `true` in your GAML `unity_interaction` definition.

### UI Buttons don't respond to clicks
If you can see the UI but cannot interact with it:
1. **EventSystem:** Ensure there is an `EventSystem` object in your scene with an **XR UI Input Module**.
2. **Canvas:** The Canvas must have a **Tracked Device Graphic Raycaster** component to respond to VR controllers.

---

## Package installation fails from Git URL

If Unity Package Manager cannot install the package from Git:

1. Check that Git is installed and available from the command line:

   ```bash
   git --version
   ```

2. Open **Window > Package Manager**.
3. Use **Add package from git URL...**.
4. Paste:

   ```text
   https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git
   ```

If this still fails, install the package from local disk by selecting the package
repository's `package.json`.

---

## Can't connect to the WebPlatform from the headset

The Unity startup menu asks for the WebPlatform's IP address. Entering `localhost` or `127.0.0.1` only works when the WebPlatform is running **on the same device**, which is never the case for a physical headset.

Use the **LAN IP address** of the machine running the WebPlatform (e.g. `192.168.68.100`). Find it with `ip addr` (Linux/macOS) or `ipconfig` (Windows). The headset and the server must be on the same Wi-Fi network.
