---
sidebar_position: 2
title: "Step 0: Middleware and GAMA Requirements"
sidebar_label: "0. Requirements"
description: Prepare GAMA and simple.webplatform before using the SIMPLE Unity Plugin.
---

# Step 0: Middleware and GAMA Requirements

This chapter explains what must be running before Unity can preview or render a GAMA
experiment.

## GAMA Requirements

Open the target model in GAMA and select the experiment you want Unity to receive.

For the tutorial workflow, the experiment can be:

- open or selected when generating a static preview;
- running when validating the live Play Mode workflow.

The package tutorial commonly uses the **Prey Predator** model because it contains
static background species, dynamic agents, runtime updates, and species-specific
visualization.

## Middleware Requirements

Start `simple.webplatform` before starting the Unity Play Mode connection or preview
capture.

From the WebPlatform project folder:

```bash
npm start
```

Default endpoints:

```text
Unity runtime / headset WebSocket: ws://localhost:8080/
Monitor WebSocket: ws://localhost:8001/
GAMA Server behind WebPlatform: ws://localhost:1000/
```

## Expected State

Before continuing:

- GAMA is open;
- `simple.webplatform` is running;
- Unity can connect to the middleware player WebSocket on port `8080`.

Next: [Install the Unity package](./03-Tutorial-Step-1.md).
