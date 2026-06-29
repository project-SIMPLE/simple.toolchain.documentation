---
sidebar_position: 3
title: Sending Data from Unity to GAMA
---

# Sending Data from Unity to GAMA

For geometry/shapefile-style workflows, implement a project-specific exporter or send
the required data back to GAMA at runtime. A dedicated geometry export editor window
is not part of the current SIMPLE Unity Plugin package workflow.

## Current Package Workflow

With the SIMPLE Unity Plugin, Unity sends data back to GAMA during runtime through the
middleware connection.

Use this approach for:

- object selections;
- player positions;
- interaction events;
- scenario-specific commands;
- values that should trigger GAMA actions.

The main runtime API is exposed by `ConnectionManager`.

## Send an Executable Ask

Use `SendExecutableAsk` when Unity should call a GAMA action on the configured target
agent.

Example:

```csharp
using System.Collections.Generic;
using UnityEngine;

public class SendSelectionToGama : MonoBehaviour
{
    public void SendSelectedObject(GameObject selectedObject)
    {
        if (ConnectionManager.Instance == null || selectedObject == null)
        {
            return;
        }

        var args = new Dictionary<string, string>
        {
            { "id", selectedObject.name }
        };

        ConnectionManager.Instance.SendExecutableAsk("select_object", args);
    }
}
```

On the GAMA side, define the corresponding action and handle the argument sent by
Unity.

## Send an Executable Expression

Use `SendExecutableExpression` for simple GAML expressions:

```csharp
ConnectionManager.Instance.SendExecutableExpression("do_something <- true;");
```

Use this carefully. For structured runtime communication, `SendExecutableAsk` is
usually easier to validate and maintain.

## Legacy Geometry Export

If the goal is specifically to export Unity-edited geometries as GIS data or
shapefiles, treat that as a legacy or custom workflow.

The current package documentation does not expose a direct replacement for the legacy
geometry export editor window. For this use case, either:

- implement a dedicated exporter in the Unity project;
- send the required geometry information to GAMA through runtime asks and let GAMA
  write the output data.

## Recommended Direction

For new projects, keep GAMA as the source of simulation data and use Unity mainly for:

- visualizing GAMA agents;
- configuring species appearance;
- sending player interactions back to GAMA;
- previewing and testing the visual representation of the simulation.
