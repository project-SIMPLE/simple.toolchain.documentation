---
slug: /
title: Introduction
sidebar_label: Introduction
sidebar_position: 0
description: What SIMPLE is, who it is for, and how its components fit together.
---

# SIMPLE Technical Overview

SIMPLE is a research-grade platform for deploying synchronized multi-user VR
classroom sessions. It lets researchers and educators run GAMA agent-based
simulations that students experience through Unity and Meta Quest VR headsets, with
a web-based control panel for the session operator.

The project is developed at IRD (Institut de Recherche pour le Developpement),
UMMISCO lab, under the ACROSS program. It is co-funded by the European Union.

---

## System Architecture

![SIMPLE development environment](/img/FirstPageGAMAUnity.png)

A SIMPLE session connects three software layers:

| Component | Role |
|---|---|
| **GAMA platform** | Runs the `.gaml` simulation model and exposes a WebSocket server, usually on port `1000`. |
| **WebPlatform** | Central hub between GAMA, Unity clients, and the admin UI. |
| **Admin UI** | Browser-based control panel for selecting simulations, launching sessions, and monitoring connected clients. |
| **Unity application** | A Unity project using the SIMPLE Unity Plugin package. It connects to the WebPlatform and renders the simulation in Unity or VR. |

---

## Components

### WebPlatform

The WebPlatform is a Node.js application. It:

- connects to GAMA as a WebSocket client and relays simulation output to Unity;
- acts as a WebSocket server for Unity runtime clients on `HEADSET_WS_PORT`, default
  `8080`;
- acts as a WebSocket server for the admin UI on `MONITOR_WS_PORT`, default `8001`;
- serves the React admin UI as static files on `WEB_APPLICATION_PORT`, default `8000`;
- manages optional ADB connections to Meta Quest headsets for screen mirroring.

See the [WebPlatform section](/webplatform/installation) for installation and
configuration.

### GAMA Plugin

The GAMA plugin extends the GAMA platform with:

- two abstract species: `abstract_unity_linker` and `abstract_unity_player`;
- a Unity-oriented experiment type that instantiates a linker automatically;
- GAML types such as `unity_property`, `unity_aspect`, and `unity_interaction`;
- operators and actions for sending geometries, terrain, water data, messages, and
  player movement to Unity.

See the [GAMA Plugin section](/gama/installation) for installation and the
[GAML API reference](/gama/api) for the full API.

### SIMPLE Unity Plugin

The SIMPLE Unity Plugin is a Unity Package Manager package. It adds GAMA/WebPlatform
integration to an empty or existing Unity project.

It provides:

- runtime connection scripts for `simple.webplatform`;
- the **GAMA Panel** editor workflow;
- scene setup tools;
- preview generation from the experiment opened in GAMA;
- species visual settings such as prefab, color, scale, offsets, visibility, and
  dynamic color rules;
- optional samples for menus, code examples, and starter scenes.

See the [Unity package installation guide](/unity/installation) and the
[Unity package setup guide](/unity/setup).

---

## Virtual Universes

A **Virtual Universe (VU)** combines a GAML model and a Unity experience into one
deployable simulation session. In the current workflow, the Unity side is built from a
Unity project that has the SIMPLE Unity Plugin installed.

A VU can contain:

- a GAML model (`.gaml` file);
- a `settings.json` descriptor for WebPlatform sessions;
- a Unity APK for Meta Quest sessions;
- optional assets such as maps, shapefiles, textures, or prefabs.

The WebPlatform scans the configured learning package directory for `settings.json`
files and presents found VUs in the admin UI.

See [Virtual Universe settings reference](/webplatform/virtual-universes/settings) for
the `settings.json` format.

---

## M2L2 Portable Classroom

M2L2 is a portable classroom-in-a-box hardware kit built around Mac minis, Meta Quest
headsets, a Wi-Fi access point, and an APC UPS. The WebPlatform integrates session
monitoring and headset management for this deployment context.

---

## Where to Go Next

| Goal | Page |
|---|---|
| Set up the full development stack | [Quick Start](/overview/quick-start) |
| Install GAMA and the SIMPLE plugin | [GAMA Installation](/gama/installation) |
| Install the WebPlatform | [Install the WebPlatform](/webplatform/installation) |
| Install Unity and the SIMPLE Unity Plugin | [Unity Installation](/unity/installation) |
| Prepare a Unity scene | [Unity Package Setup](/unity/setup) |
| Configure environment variables | [.env Reference](/webplatform/configuration) |
| Browse the GAML API | [GAML API Reference](/gama/api) |
