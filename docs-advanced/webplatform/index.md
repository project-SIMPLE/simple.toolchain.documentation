---
title: WebPlatform
sidebar_label: Overview
sidebar_position: 0
description: The SIMPLE WebPlatform — session orchestration server for VR classroom deployments.
---

# WebPlatform

The WebPlatform (`simple.webplatform/`, version 3.0.0) is the session orchestration server for SIMPLE deployments. It:

- Connects to a running GAMA simulation and relays output to VR headsets.
- Manages WebSocket connections to Meta Quest headsets running the Unity VR app.
- Serves the React-based admin UI for session operators.
- Mirrors headset screens in the browser using ADB + scrcpy.
- Controls an APC UPS for M2L2 portable classroom deployments.

---

## In this section

| Page | Contents |
|---|---|
| [Architecture](./architecture.md) | Internal components, initialization sequence, logging |
| [WebSocket API](./websocket-api.md) | All WebSocket message types (monitor, headset, GAMA) |
| [Packaging](./packaging.md) | Building and distributing the self-contained executable |

For environment variable configuration, see [.env Reference](./env-reference.md).

For running a session end-to-end, see [Operator Guide](/user/running-sessions/operators).
