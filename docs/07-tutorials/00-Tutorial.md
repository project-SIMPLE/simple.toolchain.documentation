---
sidebar_position: 2
title: "Step 0: Middleware and GAMA Requirements"
sidebar_label: "0. Requirements"
description: Prepare GAMA, simple.webplatform, and the Unity-compatible vr_xp experiment.
---

# 0. Middleware and GAMA requirements

This chapter explains how to correctly expose the middleware and the GAMA model so Unity can preview and
render the experiment.

## 0.1 GAMA Requirements

This tutorial requires a GAMA experiment converted into a Unity-compatible **vr_xp** experiment. This conversion is done with the **SIMPLE plugin**.

Before continuing, make sure the **SIMPLE plugin** is installed in GAMA. Installation instructions are available [here](https://doc.project-simple.eu/gama/installation).

> [!WARNING]
> Without the SIMPLE Unity plugin, you will not be able to convert the experiment to **vr_xp**, and Unity will not receive the simulation data correctly.


![Open a GAMA experiment](/static/img/simple-unity-plugin/tutorial/02-open-gama-experiment.png)
_Example of the experiment that will be used throughout this tutorial_

## 0.2 Middleware Requirements

Use the branch dev with : 
git clone -b dev --single-branch https://github.com/project-SIMPLE/simple.webplatform.git

Open the Websocket connection thanks to [this tutorial](https://github.com/project-SIMPLE/simple.webplatform).

![Open the middleware](/static/img/simple-unity-plugin/tutorial/02-open-middleware.png)

## Steps

1. [Step 1 — Install the Unity Package](./03-Tutorial-Step-1.md) — install the SIMPLE Unity Package in a Unity project and prepare the scene for GAMA communication.
2. [Step 2 — Set up the Unity scene](./04-Tutorial-Step-2.md) — configure the Unity template to receive traffic model geometry
3. [Step 3 — Add interactions](./05-Tutorial-Step-3.md) — enable players to open and close roads from inside VR

