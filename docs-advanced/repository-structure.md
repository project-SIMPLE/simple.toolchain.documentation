---
title: Repository Structure
sidebar_label: Repository Structure
sidebar_position: 2
description: The three GitHub repositories that make up the SIMPLE platform, their contents, and per-component technology stacks.
---

# Repository Structure

SIMPLE is split across **three separate GitHub repositories** under the [`project-SIMPLE`](https://github.com/project-SIMPLE) organisation. Each has its own issues tracker, release history, and CI pipeline.

| Repository | GitHub URL | Contents |
|---|---|---|
| `simple.toolchain` | https://github.com/project-SIMPLE/simple.toolchain | GAMA plugin + Unity Template VR |
| `simple.webplatform` | https://github.com/project-SIMPLE/simple.webplatform | WebPlatform session server |
| `simple.documentation` | https://github.com/project-SIMPLE/simple.toolchain.documentation | This Docusaurus site |

---

## Repository layout

```text
simple.toolchain/
├── GAMA Plugin/
│   ├── eu.project-simple.parent/   # Maven parent POM (Tycho build root)
│   ├── gaml.extension.unity/       # Eclipse plugin bundle (main artifact)
│   ├── gaml.feature.unity/         # Eclipse feature descriptor
│   └── eu.project-simple.site/     # P2 update site generation
└── Unity Template VR/              # Unity 6 project root
    ├── Assets/
    │   ├── Plugins/                # websocket-sharp.dll (Windows)
    │   ├── Prefabs/                # Connection Manager, players, utils
    │   ├── Scenes/                 # Code Examples, Menu, Demo, Templates
    │   └── Scripts/                # C# source files
    ├── Packages/
    └── ProjectSettings/

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
| GAMA Plugin | `simple.toolchain` — `GAMA Plugin/` | 2.0.0-SNAPSHOT | Java, JDK 21, Maven/Tycho 4.0.8 |
| Unity Template VR | `simple.toolchain` — `Unity Template VR/` | — (ZIP distribution) | C#, Unity 6000.3.0f1, Android |
| Documentation | `documentation` | — | Docusaurus 3.10.1, Node.js |
