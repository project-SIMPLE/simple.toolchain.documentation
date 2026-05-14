---
title: Useful Tools
sidebar_label: Useful Tools
sidebar_position: 1
description: Recommended tools for managing and debugging Meta Quest headsets.
---

# Useful Tools

## Manage Meta Quest

### Meta Quest Developer Hub

:::info
Meta Quest Developer Hub (MQDH) is the official desktop companion application for Meta Quest devices. It provides device management, log capture, and performance profiling from a desktop UI.

[Website](https://developer.oculus.com/meta-quest-developer-hub)
:::

- [Documentation](https://developer.oculus.com/documentation/unity/ts-odh/)

### SideQuest

:::info
SideQuest is a community platform for installing unofficial apps on standalone VR headsets. It provides a safe way to sideload APKs and manage device content.

[Website](https://sidequestvr.com/)
:::

:::tip
Download the [**Advanced Installer**](https://sidequestvr.com/setup-howto) — it does not require an account and provides additional device management tools.
:::

## Debug Meta Quest

### OVR Metrics Tool

OVR Metrics Tool is a performance monitoring app for Meta Quest headsets. It shows frame rate, GPU/CPU load, thermal throttling, and frame timing.

- [Download from Meta Store](https://www.meta.com/experiences/2372625889463779/)
- [Download standalone APK](https://developer.oculus.com/downloads/package/ovr-metrics-tool/)
- [Download from SideQuest](https://sidequestvr.com/app/17261/ovr-metrics-tool)

[Documentation](https://developer.oculus.com/documentation/unity/ts-ovrmetricstool/)

Some monitors are not enabled by default. Enable them via ADB (recommended: run these commands through SideQuest's ADB interface):

#### Enable memory (RAM) profiling

```bash
adb shell setprop debug.oculus.enableLifeMemoryProfiling 1
```

#### Enable GPU profiling

```bash
adb shell ovrgpuprofiler -e
```
