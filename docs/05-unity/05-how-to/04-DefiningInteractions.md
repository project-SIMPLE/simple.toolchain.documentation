# Defining new interactions

This page describes the package-based workflow for adding custom Unity interactions.

The package provides the base interaction logic in:

```text
Packages/com.project-simple.unity-plugin/Runtime/Simulation/SimulationManagerInteraction.cs
```

If you are only building a Unity project, prefer creating your own script under
`Assets/Scripts` that inherits from `SimulationManagerInteraction` or
`SimulationManager`. Edit the package source directly only when you are contributing
to the package itself.

## Step 1 - Define a New Input Action

Import the XR Interaction Toolkit starter assets if they are not already present in
your project. The input action asset is usually available under:

```text
Assets/Samples/XR Interaction Toolkit/<version>/Starter Assets
```

Open **XRI Default Input Actions**.

<img width="1302" alt="InputAction" src="https://github.com/user-attachments/assets/c30b84ac-52e3-41ae-a34a-d2889f840e52" />

If the wanted input action is not present:

1. Select the action map.
2. Right-click in the action list.
3. Choose **Add Action**.
4. Name the action.
5. Add a controller binding.

For Meta Quest 2/3, use an Oculus Touch Controller binding and select the target
button, trigger, or touch input.

<img width="1155" alt="NewInputAction" src="https://github.com/user-attachments/assets/b25e9b5e-b9d0-45d8-8515-c93fcc123059" />

## Step 2 - Define the Behavior

Create a project script that extends the package behavior:

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class MySimulationInteractions : SimulationManagerInteraction
{
    [SerializeField] protected InputActionReference myButton = null;

    protected override void OtherUpdate()
    {
        base.OtherUpdate();

        if (myButton != null && myButton.action.WasPressedThisFrame())
        {
            // Add project-specific interaction behavior here.
        }
    }
}
```

You can also override interaction hooks such as `SelectInteraction`,
`HoverEnterInteraction`, `HoverExitInteraction`, `TriggerMainButton`,
`ManageOtherMessages`, or `ManageOtherInformation`.

## Step 3 - Link the Input Action in the Scene

In the Unity scene:

1. Select `ManagersSolo/Game Manager`.
2. Replace or extend the simulation manager component with your project-specific
   interaction script.
3. Assign the new input action in the Inspector by clicking the circle icon next to
   the serialized field.

<img width="933" alt="LinkInputAction" src="https://github.com/user-attachments/assets/41df39e-dff3-4a47-9de8-c71d4c1ca841" />
