---
sidebar_position: 5
title: "Step 3 — Add Interactions"
sidebar_label: "3. Add Interactions"
description: Add player interactions to open and close roads from inside VR.
---

# Step 3: Adding Interactions

## Objectives
The aim of this step is to enable simple interactions from the VR headset. 
* **Main Interaction:** Block specific roads by selecting them with the interaction ray.
* **Visual Feedback:** Change road colors based on selection and hover states.
* **Advanced Usage:** Understand how to map specific controller buttons to custom scripts (e.g., changing brightness).

## 1. GAMA Model Modifications

First, we must update the GAMA model to support the "blocked" state and handle commands sent from Unity.

### A. Update `Traffic and Pollution.gaml`
We need to add a `blocked` attribute to the roads and update their visual aspect.

1. Open **Traffic and Pollution.gaml**.
2. Update the **road species** as follows:

```gaml
species road {
  // ... existing attributes ...
  bool blocked <- false;

  aspect default {
    // Roads turn red if blocked, white otherwise
    draw (shape + 5) color: blocked ? #red : #white;
  }
}
```
![TutorialGAMARoad](https://github.com/user-attachments/assets/2b5a2e04-80cc-4e81-83d0-195a65573437)


### B. Update Traffic Logic
**File**: `Traffic and Pollution.gaml`(Global Section)

To ensure cars intelligently avoid blocked roads, we need to modify the **weight** (cost) associated with each road in the simulation's network. By applying a massive multiplier to blocked roads, the pathfinding algorithm will naturally redirect traffic to alternative routes.

Add or update the following reflex in your global section:

```gaml
// Reflex to update the speed of the roads according to the weights
reflex update_road_speed {
  // If blocked, weight is multiplied by 100,000, effectively making it impassable
  road_weights <- road as_map (each::(each.shape.perimeter / each.speed_coeff * (each.blocked ? 100000.0 : 1.0)));
  road_network <- road_network with_weights road_weights;
}
```

ℹ This logic uses a conditional operator (`condition ? true_value : false_value`). If blocked is true, it applies the `100,000` multiplier; otherwise, it keeps the original weight.

![TutorialGAMAGlobal](https://github.com/user-attachments/assets/bd7460c4-3f1d-480e-8773-c9ebd3e5eec8)

### C. Enable Live Updates
**File**: Traffic and Pollution.gaml (Experiment Section)

To visualize the color change in GAMA's display, we must enable the refresh rate for the road species.

Find the line `species road refresh: false;` and change it to `species road refresh: true;`.

![TutorialGAMADisplay](https://github.com/user-attachments/assets/e3b2beac-213e-496b-aa69-818267e4c954)

### D. Update Traffic and Pollution-VR.gaml
We need to add an action that Unity will trigger to toggle the blocked state.

```gaml
// Map to link road names to their agents
map<string,road> roads <- road as_map (each.name :: each);

action block_road(string id) {
  road b <- roads[id];
  if (b != nil) {
    ask b {
      // Toggle blocked state
      blocked <- !blocked;
    }
  }
}
```

![TutorialGAMAUnityLinker](https://github.com/user-attachments/assets/67e61064-cbaa-4ed2-8864-77e7b511e67e)

## 2. Unity Project Modifications
Now, let's configure Unity to interact with these new GAMA features.

### A. Extend Interaction Distance
Since we are in "Sky View," the default interaction ray might be too short to reach the roads.

1. In the **Hierarchy**, select: `SkyViewPlayer` > `Camera Offset` > `Right Controller` > `Near-Far Interactor`.
1. In the **Inspector**, find the **Curve Interaction Caster** component.
1. Under **Curve Casting Settings**, set **Cast Distance** to `1000`.

<img width="1138" alt="CastDist" src="https://github.com/user-attachments/assets/4d05f6e7-9d5c-4eb8-8b6f-d0fe22b2e439" />

### B. Programming the Interaction
We need to modify the C# script that handles what happens when the ray hits an object.

**How to open the code:**
You have two ways to access the script:

**1. Via Inspector:**
* Select the Manager (or Game Manager) object in the Hierarchy.
* In the Inspector, locate the **Simulation Manager Interaction** component.
* **Double-click** on the Script field (where it says `SimulationManagerInteraction.cs`).

<img width="1550" alt="Capture d’écran 2026-02-13 à 13 40 36" src="https://github.com/user-attachments/assets/1be072d7-78e8-4275-a33e-8c7c0683fdee" />

**2. Via Project Window( Alternative):**
* In the **Unity Project Window** (bottom panel), navigate to the folder: `Assets` > `Scripts` > `Gama Provider`.
* **Double-click** the script: `SimulationManagerInteraction.cs`.

Unity opens Visual Studio, allowing you to edit the script.

<img width="1840" alt="Capture d’écran 2026-02-13 à 13 40 52" src="https://github.com/user-attachments/assets/ae76f090-7bcc-4aba-9692-08bd65addb3d" />


**Modify the following three methods inside the script:**

**1. Hover Enter (Pointer enters the road)**

**Description:**
This method triggers when the VR pointer **starts touching** an object. It provides immediate visual feedback to the user.
* It checks if the object is tagged as a `"road"`.
* It changes the color to **Blue** to indicate interaction is possible.

```csharp
protected override void HoverEnterInteraction(HoverEnterEventArgs ev)
{
    GameObject obj = ev.interactableObject.transform.gameObject;
    if (obj.tag.Equals("road"))
        ChangeColor(obj, Color.blue); // Visual feedback
}
```

**2. Hover Exit (Pointer leaves the road)**

**Description:**
This method triggers when the VR pointer **leaves** the object. It resets the color based on the object's logic state.
* It checks if the road is currently in the `SelectedObjects` list (meaning it is blocked).
* If **Selected (Blocked)**: It turns **Red**.
* If **Not Selected (Free)**: It reverts to default **Gray**.

```csharp
protected override void HoverExitInteraction(HoverExitEventArgs ev)
{
    GameObject obj = ev.interactableObject.transform.gameObject;
    if (obj.tag.Equals("road"))
    {
        bool isSelected = SelectedObjects.Contains(obj);
        ChangeColor(obj, isSelected ? Color.red : Color.gray);
    }
}
```

**3. Select Interaction (Clicking the Trigger)**

**Description:**
This method triggers when the user presses the **Trigger button** while pointing at an object. It handles the main logic.
* **Cooldown:** Checks `remainingTime` to prevent accidental double-clicks.
* **GAMA Communication:** Asks GAMA to trigger the `block_road` action with the road's ID.
* **Local State:** Toggles the road's status in the `SelectedObjects` list and updates the color immediately.

```csharp
protected override void SelectInteraction(SelectEnterEventArgs ev)
{
    if (remainingTime <= 0.0)
    {
        GameObject obj = ev.interactableObject.transform.gameObject;
        if (obj.tag.Equals("road"))
        {
            Dictionary<string, string> args = new Dictionary<string, string> {
                {"id", obj.name }
            };
            // Trigger the GAMA action
            ConnectionManager.Instance.SendExecutableAsk("block_road", args);

            // Toggle selection state and color in Unity
            bool newSelection = !SelectedObjects.Contains(obj);
            if (newSelection) SelectedObjects.Add(obj);
            else SelectedObjects.Remove(obj);

            ChangeColor(obj, newSelection ? Color.red : Color.gray);
            remainingTime = timeWithoutInteraction; // 1s cooldown
        }
    }
}
```

### 3. Advanced: Custom Controller Buttons
_(Informational only - not required for the main tutorial)_

To map a specific physical button (like the "A" or "X" button) to an action:

1. **Define the Action**: Double-click `Assets/Samples/XR Interaction Toolkit/[Version]/Starter Assets/XRI` Default Input Actions.
1. **Add Binding**: In `XRI RightHand Interaction`, add a new action (e.g., "Main Button") and bind it to the controller's primary button.
1. **Reference in Script**: Use `[SerializeField] private InputActionReference primaryRightHandButton;` in your script.
1. **Link in Inspector**: Drag the Input Action into the corresponding field on your **Game Manager** object.
1. **Detect Press**:

```csharp
if (primaryRightHandButton != null && primaryRightHandButton.action.triggered) {
 TriggerMainButton(); // Your custom function here
}
```