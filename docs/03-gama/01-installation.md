---
sidebar_position: 1
title: GAMA Installation
description: Install GAMA 2025.06 and the SIMPLE plugin for VR simulation development.
---

# GAMA Installation

GAMA runs the simulation models (`.gaml` files) and exposes a WebSocket server that the WebPlatform connects to.

---

## Install GAMA

**Required version:** GAMA 2025.06 or later.

Download from [gama-platform.org/download](https://gama-platform.org/download) and follow the [official installation guide](https://gama-platform.org/wiki/next/Installation).

After installing, launch GAMA and verify the WebSocket server is on the default port:

1. Go to **Support → Preferences → Network → Server Mode**.
2. Confirm **Port** is `1000`. Change it here if there is a conflict, and update `GAMA_WS_PORT` in your `.env` to match.

<!-- TODO: Add screenshot of GAMA Network Preferences dialog -->
<!-- Screenshot description: The GAMA Preferences window showing Network/Server Mode settings with Port set to 1000. -->

:::info
`GAMA_IP_ADDRESS` in the WebPlatform `.env` defaults to `localhost`. Change it only if GAMA and the WebPlatform run on different machines.
:::

---

## Install the SIMPLE plugin {#simple-plugin}

The SIMPLE plugin adds VR-specific GAML species, operators, and the `VR_Experiment` type to GAMA.

1. In GAMA, go to **Support → Install new plugins...**

<img width="1065" alt="InstallPlugin" src="https://github.com/user-attachments/assets/e2df2f5d-a579-46df-8622-708be654a121" />

2. In the dialog, click **Work with** and enter this update site URL:
  ```
  https://project-simple.github.io/simple.toolchain/
  ```
3. Press **Enter**. The plugin list loads.

<img width="1796" alt="Plugin" src="https://github.com/user-attachments/assets/923f923f-93e1-41de-8e6e-a0d7abeae414" />

4. Select **SIMPLE Unity plugin** and click **Next**, then follow the prompts to finish installation.
5. Restart GAMA when asked.

After restarting, you should see a **UnityVR** menu in the GAMA IDE.

---

## Next step

Proceed to [Install the WebPlatform](/webplatform/installation).
