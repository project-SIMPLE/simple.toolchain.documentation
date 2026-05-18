---
title: WebPlatform
sidebar_label: Overview
sidebar_position: 0
description: Technical reference for the SIMPLE WebPlatform — the session orchestration server that bridges GAMA simulations and VR headsets.
---

# WebPlatform

The WebPlatform (`simple.webplatform`, version 3.0.0) is the session orchestration server for SIMPLE deployments. It:

- Connects to a running GAMA simulation as a WebSocket client and relays its output to VR headsets.
- Accepts WebSocket connections from Meta Quest headsets running the Unity VR app.
- Serves the React-based admin UI for session operators.
- Mirrors headset screens in the browser using ADB and scrcpy.
- Controls an APC UPS for M2L2 portable classroom deployments.

For environment variable configuration, see [.env Reference](/webplatform/configuration). For running a session end-to-end, see the [Operator Guide](/user/running-sessions/operators).
