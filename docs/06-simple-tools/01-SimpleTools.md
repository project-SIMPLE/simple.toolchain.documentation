---
sidebar_position: 1
title: SIMPLE Tools
---

# SIMPLE Tools

The SIMPLE Unity workflow is based on the **SIMPLE Unity Plugin** package installed
through Unity Package Manager.

The main entry point in Unity is:

```text
GAMA > GAMA Panel
```

## What changed

Geometry import/export is now documented through the package workflow rather than
separate editor windows.

In the package workflow:

- importing data from GAMA into Unity is handled mainly through **Generate Preview from
  GAMA** and the runtime Play Mode connection;
- visual configuration is handled through the GAMA Panel and the Simulation Manager
  Inspector;
- Unity-to-GAMA communication is done through runtime messages such as executable
  asks or expressions;
- the previous shapefile-style export from Unity to GAMA is a legacy workflow and is not
  part of the current package documentation.

## Current pages

1. [Importing data from GAMA to Unity](Importing-Data-from-GAMA)
2. [Sending data from Unity to GAMA](Export-Data-from-Unity)
