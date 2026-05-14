---
sidebar_position: 1
title: Tutorial Overview
sidebar_label: Overview
description: Step-by-step tutorial building a VR version of the GAMA traffic model.
---

# Tutorial: From GAMA Model to Virtual Universe

This tutorial walks through building a complete VR simulation from an existing GAMA model. Starting from the traffic model in the GAMA library, you will generate a VR version using the SIMPLE wizard, set up the Unity scene, and add player interactions.

## What you will build

The result is a VR traffic simulation where a player navigates a city from a top-down view and can open or close roads. It demonstrates:

- Generating a VR GAML model from an existing model using the SIMPLE wizard
- Configuring the Unity scene to receive GAMA geometry data
- Adding player interactions that affect the running simulation

## Steps

1. [Overview and requirements](./02-Tutorial-From-GAMA-to-VU.md) — what the tutorial covers and what you need installed
2. [Step 1 — Generate the VR GAML model](./03-Tutorial-Step-1.md) — run the SIMPLE wizard in GAMA to scaffold the VR experiment
3. [Step 2 — Set up the Unity scene](./04-Tutorial-Step-2.md) — open the Unity template and configure it to receive traffic model geometry
4. [Step 3 — Add interactions](./05-Tutorial-Step-3.md) — enable players to open and close roads from inside VR
