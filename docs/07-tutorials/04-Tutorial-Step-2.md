---
sidebar_position: 4
title: "Step 2: Run the GAMA Experiment"
sidebar_label: "2. Play Mode"
description: Run a GAMA experiment in Unity Play Mode with the SIMPLE Unity Plugin.
---

# Step 2: Run the GAMA Experiment in Play Mode

This chapter validates the baseline live workflow: Unity enters Play Mode, connects to
`simple.webplatform`, receives the running GAMA simulation, and creates Unity objects
from the GAMA agents.

## Steps

1. Make sure the scene was prepared with **GAMA > GAMA Panel > Default Setup**.
2. Start `simple.webplatform` with:

   ```bash
   npm start
   ```

3. Open and run the target experiment in GAMA.
4. Press **Play** in Unity.

Runtime agents are created under:

```text
[GAMA] Runtime Live Agents
```

When Play Mode works, Unity receives live objects from GAMA and updates them while the
experiment is running.

## Expected Result

Unity should connect to `simple.webplatform` and create live Unity objects from the
agents received from GAMA.

The imported agents are grouped by species in the Unity hierarchy.

At this stage, the important result is that the connection works and that GAMA agents
are imported into Unity while the experiment is running.

## Why Continue to Preview?

Play Mode proves that the live connection works, but it is not always comfortable for
visual iteration. The next steps show how to tune imported species and then use the
Editor preview workflow.

Next: [Personalize agents during Play Mode](./05-Tutorial-Step-3.md).
