---
title: Plugin Verification
sidebar_label: Plugin Verification
sidebar_position: 3
---

# Verifying Plugin Installation

If GAMA does not recognize `type: unity` or the Unity-specific operators (like `prefab_aspect`), the plugin may not be installed correctly.

### 1. Check the IDE Menu
After a successful installation and restart, a **UnityVR** menu should appear in the GAMA top menu bar.

### 2. Check GAML Syntax Highlighting
In a `.gaml` file, type `unity_property`. If the plugin is active, the IDE should recognize this as a valid type and provide autocompletion.

### 3. Check Installed Plugins List
1. Go to **Help → About GAMA**.
2. Click on the **Installation Details** button.
3. Search for **SIMPLE Unity plugin** in the list.

If any of these checks fail, refer back to the [GAMA Installation guide](/gama/installation#simple-plugin) to re-install the plugin from the update site.

---

## GAMA version requirement

The SIMPLE plugin requires **GAMA 2025-06 or later**. On older releases, the update site may install without errors but the plugin will fail to activate because its internal dependencies are not satisfied.

Check your GAMA version at **Help → About GAMA**. If it is older than 2025-06, update GAMA first.

---

## Update site unreachable

If the P2 update site is unreachable, use the offline update site ZIP provided for
the current SIMPLE release:

1. Download the update site ZIP asset.
2. In GAMA, go to **Support → Install new plugins...**.
3. Click **Work with** and enter the path to the extracted ZIP:
   ```
   jar:file:/path/to/simple-update-site.zip!/
   ```
4. Select **SIMPLE Unity plugin** and proceed with the install.
