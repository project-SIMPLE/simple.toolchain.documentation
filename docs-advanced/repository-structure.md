---
title: Repository Structure
sidebar_label: Repository Structure
sidebar_position: 2
description: The repositories and source trees that make up the SIMPLE platform, their contents, and per-component technology stacks.
---

# Repository Structure

SIMPLE is organised by component under the [`project-SIMPLE`](https://github.com/project-SIMPLE) organisation. Each component has its own build workflow and can be developed independently.

| Repository | GitHub URL | Contents |
|---|---|---|
| `simple.webplatform` | https://github.com/project-SIMPLE/simple.webplatform | WebPlatform session server |
| `SIMPLE-Unity-Plugin` | https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin | Unity package for GAMA-connected Unity projects |
| GAMA plugin source | Provided with the SIMPLE GAMA plugin release source tree | GAMA extension, feature descriptor, and update site build |
| Documentation site | Current Docusaurus repository | Developer, user, and advanced documentation |

---

## Repository layout

```text
SIMPLE-Unity-Plugin/
├── Editor/                         # GAMA Panel, setup commands, preview generation
├── Runtime/                        # Runtime managers, WebSocket connection, serializers
├── Samples~/                       # Importable Unity samples
├── Documentation~/                 # Package-local tutorial and notes
└── package.json                    # Unity Package Manager manifest

GAMA Plugin/
├── eu.project-simple.parent/       # Maven parent POM (Tycho build root)
├── gaml.extension.unity/           # Eclipse plugin bundle (main artifact)
├── gaml.feature.unity/             # Eclipse feature descriptor
└── eu.project-simple.site/         # P2 update site generation

simple.webplatform/
├── src/
│   ├── api/                        # Node.js backend (TypeScript)
│   │   ├── core/                   # Controller, Constants
│   │   ├── android/adb/            # AdbManager
│   │   ├── infra/                  # StaticServer, UpsManager
│   │   ├── monitoring/             # MonitorServer
│   │   ├── multiplayer/            # PlayerManager
│   │   └── simulation/             # GamaConnector, ModelManager
│   ├── components/                 # React frontend components
│   ├── redux/                      # Redux state slices
└── └── i18next/                    # i18n configuration (EN, FR, VN, TH)

documentation/
├── docs/                           # Developer and integration guides
├── docs-advanced/                  # This site — low-level technical reference
└── docs-user/                      # End-user (operator) guide
```

---

## Component summary

| Component | Repository | Version | Language / Runtime |
|---|---|---|---|
| WebPlatform | `simple.webplatform` | 3.0.0 | TypeScript, React 18, Node.js ≥ 22 |
| GAMA Plugin | SIMPLE GAMA plugin source tree | 2.0.0-SNAPSHOT | Java, JDK 21, Maven/Tycho 4.0.8 |
| SIMPLE Unity Plugin | `SIMPLE-Unity-Plugin` | 1.0.0 | C#, Unity 6000.3.2f1, Android / Meta Quest |
| Documentation | Documentation site | — | Docusaurus 3.10.1, Node.js |
