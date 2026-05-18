---
title: Building the Executable
sidebar_label: Packaging
sidebar_position: 4
description: How to build the WebPlatform as a self-contained binary for Windows, macOS, and Linux.
---

# Building the WebPlatform Executable

The WebPlatform can be packaged as a self-contained binary that requires no Node.js installation on the target machine. Pre-built binaries are available in the GitHub Releases section of the repository. This page explains how to build one yourself.

---

## Prerequisites

- Node.js ≥ 22
- npm

---

## Build steps

```bash
# 1. Install dependencies
npm install

# 2. Build the executable
npm run build:executable
```

The command `build:executable` runs three steps in sequence:

1. **`build:frontend`** — Runs `vite build`. Compiles the React frontend into `dist/`.
2. **`build:backend`** — Runs `vite build -c vite.backend.config.ts`. Bundles the Node.js backend into `dist-api/index.cjs`. This resolves all TypeScript and ESM imports into a single CommonJS file.
3. **`pkg .`** — Packages `dist-api/index.cjs` and its assets (the compiled frontend and native `uWebSockets.js` binaries) into self-contained executables using `@yao-pkg/pkg`.

### Output

Executables land in `bin/`:

```
bin/
├── simple.webplatform-linux (Node 24, Linux x64)
├── simple.webplatform-win.exe (Node 24, Windows x64)
└── simple.webplatform-macos (Node 24, macOS x64)
```

---

## Compressed build

To reduce binary size with Brotli compression:

```bash
npm run build:executable-compressed
```

Compressed binaries take slightly longer to start (decompression on launch).

---

## Running the executable

Place the executable and a configured `.env` file in the same directory:

```
my-deployment/
├── simple.webplatform-linux (or -win.exe / -macos)
├── .env
└── learning-packages/
 └── my-virtual-universe/
 └── settings.json
```

Then run:

```bash
# Linux / macOS
./simple.webplatform-linux

# Windows (PowerShell or cmd)
.\simple.webplatform-win.exe
```

:::warning
The `.env` file **must** be in the same directory as the executable. The application reads it from `path.dirname(process.execPath)` at startup.
:::

The platform auto-creates the `learning-packages/` folder if it does not exist.

---

## Technical notes

### Packaging tool

`@yao-pkg/pkg` is a maintained fork of the original `pkg` tool that supports Node.js ≥ 20. It is listed as a devDependency.

### Native modules

`uWebSockets.js` ships pre-compiled platform-specific `.node` binaries. These are included as `pkg` assets and extracted at runtime.

### ADB dependency

The packaged executable still requires `adb` to be installed on the host system and available in `PATH` for headset management and screen mirroring. ADB is not bundled.

### Environment variable loading

`dotenv` is configured to look for `.env` in `path.dirname(process.execPath)` when running as a packaged binary, not in the current working directory.

### Detecting packaged mode

The application detects packaged mode via:
```typescript
const IS_PLATFORM_PACKAGED =
 (process as any).pkg
 || process.env.PKG_EXECPATH
 || (!path.basename(process.argv[0]).includes('node')
 && !process.argv[1].startsWith("/snapshot"));
```

In packaged mode, the `StaticServer` starts automatically to serve the frontend, and the `ModelManager` exits if no `learning-packages` folder is found (rather than just logging a warning).
