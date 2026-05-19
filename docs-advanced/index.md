---
title: Advanced
sidebar_label: Overview
sidebar_position: 1
slug: /
description: Low-level technical reference for the SIMPLE platform — internals, APIs, build procedures, and contribution guidelines.
---

# Advanced Documentation

This section is for **platform developers**: people who need to understand how SIMPLE works internally, build it from source, release new versions, or contribute code.

If you are setting up a classroom session, see the [Operator Guide](/user/running-sessions/operators). If you are building a new Virtual Universe (GAML model + Unity scene), see the [Developer Guide](/overview/quick-start).

---

## What is covered here

### WebPlatform internals

Deep technical reference for the `simple.webplatform` session server:

| Page | When to read it |
|---|---|
| [Architecture](/advanced/webplatform/architecture) | You need to understand how the backend modules connect, or how data flows from GAMA to headsets |
| [WebSocket API](/advanced/webplatform/websocket-api) | You are implementing a custom client (non-Unity headset, custom monitor, test harness) |
| [Backend Modules](/advanced/webplatform/backend-modules) | You are modifying or extending a specific backend module |
| [Frontend Components](/advanced/webplatform/frontend-components) | You are modifying the admin UI React app |
| [ADB Headset Management](/advanced/webplatform/adb-headset-management) | You need to understand or modify headset provisioning, the scrcpy pipeline, or the video WebSocket protocol |
| [Packaging](/advanced/webplatform/packaging) | You need to produce a self-contained executable for deployment |

Environment variable reference is in the main docs: [.env Reference](/webplatform/configuration).

### Developer guide

Covers all three repositories — `simple.webplatform`, `simple.toolchain` (GAMA plugin + Unity template), and this documentation site:

| Page | When to read it |
|---|---|
| [Repository Structure](/advanced/repository-structure) | You are orienting yourself: which repo has what, where to clone |
| [Building from Source](/advanced/building-from-source) | You need to build the GAMA plugin or Unity template from source |
| [Release Process](/advanced/release-process) | You are cutting a release of any component |
| [Contributing](/advanced/contributing) | You want to submit a patch or understand code conventions |

### Companion apps

Android apps automatically installed on Meta Quest headsets by the WebPlatform:

| Page | When to read it |
|---|---|
| [Oculus Wireless ADB](/advanced/companion-apps/oculus-wireless-adb) | You need to understand what this third-party GUI app does and why it's installed |
| [ADB Auto-Enable](/advanced/companion-apps/adb-auto-enable) | You are modifying or rebuilding the ADB watchdog service |
