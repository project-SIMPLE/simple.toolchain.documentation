---
title: Building from Source
sidebar_label: Building from Source
sidebar_position: 3
description: Step-by-step build instructions for the WebPlatform, GAMA Plugin, SIMPLE Unity Plugin, and documentation site.
---

# Building from Source

This page covers the build procedure for each SIMPLE component from a freshly cloned repository. Each component has a fully independent build system.

---

## WebPlatform

### Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| Node.js | ≥ 22 | The production packager (`@yao-pkg/pkg`) targets a node24 runtime internally |
| npm | bundled with Node.js | |

### Development build

```bash
npm install
npm start
```

`npm start` uses `concurrently` to run two processes simultaneously:
- The Vite dev server for the React frontend (with hot-module reload).
- The Node.js backend via `tsx` (requires a manual restart on backend file changes).

The admin UI is served at `http://localhost:8000` and the WebSocket ports are live immediately.

### Production build

For the full production build procedure (executables for Linux, Windows, macOS, Brotli compression, runtime requirements), see [Building the WebPlatform Executable](./webplatform/packaging.md).

---

## GAMA Plugin

### Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| JDK | 21 | Tested with Adoptium distribution |
| Maven | 3.x | Standard Maven installation; Tycho is fetched from Maven Central |
| Network | — | P2 repositories are fetched at build time |

### Repository layout

The Maven build is rooted at `GAMA Plugin/eu.project-simple.parent/`. The parent POM declares three child modules:

| Module | Contents |
|---|---|
| `gaml.extension.unity` | Eclipse plugin bundle — all GAML source code and models |
| `gaml.feature.unity` | Eclipse feature descriptor for installation |
| `eu.project-simple.site` | P2 update site generation |

### Build

```bash
cd "GAMA Plugin/eu.project-simple.parent"
mvn verify
```

The build resolves dependencies from two remote P2 repositories at build time:

| Repository | URL |
|---|---|
| Eclipse 2025-03 | `https://download.eclipse.org/releases/2025-03` |
| GAMA 2025-06 | `https://updates.gama-platform.org/2025-06` |

The plugin requires GAMA version `2024.6.0` or later (declared as `[2024.6.0,)` in the parent POM).

### Build output

The P2 update site is produced in `eu.project-simple.site/target/repository/`. To install the locally built plugin into GAMA for testing, use **Help > Install New Software** and point it at that directory path (as a `file://` URL).

### Target platforms

Tycho builds the plugin for four platform configurations:

| OS | Windowing system | Architecture |
|---|---|---|
| Linux | GTK | x86_64 |
| Windows | Win32 | x86_64 |
| macOS | Cocoa | x86_64 |
| macOS | Cocoa | aarch64 |

---

## SIMPLE Unity Plugin

### Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| Unity Editor | **6000.3.2f1** | Reference version used by the SIMPLE Unity Plugin documentation |
| Android Build Support | — | Install as a Unity module via Unity Hub |
| Visual Studio Code | — | Recommended C# editor module |

### Obtaining the package source

```bash
git clone https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git
```

The repository is a Unity package. It is not opened as a standalone Unity project. To test local source changes, create or open a Unity project, then install the package from disk:

1. Open **Window > Package Manager**.
2. Click **+**.
3. Select **Add package from disk...**.
4. Select the `package.json` file at the root of the cloned `SIMPLE-Unity-Plugin` repository.

For normal usage without editing package source, install the package from its Git URL instead:

```text
https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git
```

### Building the APK for Meta Quest

1. Create or open a Unity project with Unity Editor 6000.3.2f1.
2. Install the SIMPLE Unity Plugin package.
3. Open **GAMA > GAMA Panel** and click **Default Setup** to prepare the scene.
4. Import optional samples from **Package Manager > SIMPLE Unity Plugin > Samples** if the project needs starter scenes or code examples.
5. Open **Build > Build Profiles**.
6. Select **Android** in the platform list.
7. Click **Switch Platform** and wait for the asset import pipeline to complete.
8. Connect your Meta Quest headset via USB with developer mode enabled.
9. Click **Build and Run** to compile and deploy the APK.

:::tip
Developer mode must be enabled on the headset before deploying. See the [Meta Quest Developer Mode guide](/user/running-sessions/meta-quest/developer-mode) for setup instructions.
:::

---

## Documentation site

### Development

```bash
npm install
npm start
```

The site is served locally at `http://localhost:3000`.

### Production

```bash
npm run build
```

Output is a static site in `build/`. Serve it with any HTTP server or deploy it as a static site.
