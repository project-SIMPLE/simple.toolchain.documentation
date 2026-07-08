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

1. [Step 1 — Install the Unity Package](./01-Tutorial.md) — install the SIMPLE Unity Package in a Unity project and prepare the scene for GAMA communication.
2. [Step 2 — Run the GAMA experiment in Play Mode](./02-Tutorial.md) — show that the imported GAMA species can be modified live from Unity while the simulation is running.
3. [Step 3 — Personalize Agents During Play Mode](./03-Tutorial.md) — generate a static preview to inspect the scene in Unity Edit Mode
4. [Step 4 — Generate and Configure the Unity Preview](./04-Tutorial.md) — After validating the Play Mode, we'll generate a static preview to inspect the scene in Unity Edit Mode.
