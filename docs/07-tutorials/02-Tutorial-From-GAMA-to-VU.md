---
sidebar_position: 2
title: "Step 0: From GAMA Model to Virtual Universe"
sidebar_label: "0. Initial project"
description: Overview and requirements for the GAMA-to-VU traffic model tutorial.
---

![Tutorial](https://github.com/user-attachments/assets/fb19740c-d470-4533-9a31-aebf5af1eb42)

## Objectives

This tutorial shows how to build a complete virtual environment with interactions from an existing GAMA model. Starting from the traffic model included in the GAMA model library, vehicles travel on a road network from building to building. The greater the number of vehicles on a road relative to its capacity, the slower the vehicles move along the road. Each vehicle also emits pollutants into the air. The VR version allows you to navigate with a top-down manager's view and to close or open roads.

## Requirements

- GAMA 2025.06 with the SIMPLE plugin installed. See [GAMA Installation](/gama/installation).
- Unity 6000.3.2f1 with Android Build Support. See [Unity Installation](/unity/installation).
- The WebPlatform running. See [Install the WebPlatform](/webplatform/installation).

## Steps

1. [Step 1 — Generate the VR GAML model](./03-Tutorial-Step-1.md) — run the SIMPLE wizard in GAMA to scaffold the VR experiment
2. [Step 2 — Set up the Unity scene](./04-Tutorial-Step-2.md) — configure the Unity template to receive traffic model geometry
3. [Step 3 — Add interactions](./05-Tutorial-Step-3.md) — enable players to open and close roads from inside VR
