---
title: Environment Variable Reference
sidebar_label: .env Reference
sidebar_position: 2
description: Complete reference for all environment variables in the SIMPLE WebPlatform .env configuration file.
---

# Environment Variable Reference

The WebPlatform reads configuration from a `.env` file at startup. When running as a packaged executable, the file must be in the same directory as the binary. In development mode, it must be in the project root (`simple.webplatform/.env`).

Copy `.env.example` to `.env` to start:

```bash
cp .env.example .env
```

---

## Full example

```dotenv
# GAMA connection
GAMA_WS_PORT=1000
GAMA_IP_ADDRESS=localhost

# WebSocket ports
HEADSET_WS_PORT=8080
MONITOR_WS_PORT=8001

# Web server
WEB_APPLICATION_HOST=0.0.0.0
WEB_APPLICATION_PORT=8000
# WEB_HOSTNAME=simple

# Logging
VERBOSE=false
# EXTRA_VERBOSE=false

# Learning packages
LEARNING_PACKAGE_PATH="./learning-packages"
# EXTRA_LEARNING_PACKAGE_PATH="/path/to/extra/packages"

# Headset management
# HEADSETS_IP="192.168.68.101;192.168.68.102;192.168.68.103"
# AGGRESSIVE_DISCONNECT=false

# Special modes
# ENV_GAMALESS=false
```

---

## GAMA connection

### `GAMA_IP_ADDRESS`

| | |
|---|---|
| **Type** | string |
| **Default** | `localhost` |
| **Required** | No |

IP address or hostname of the GAMA server. Must be reachable from the machine running the WebPlatform.

```dotenv
GAMA_IP_ADDRESS=192.168.1.50
```

### `GAMA_WS_PORT`

| | |
|---|---|
| **Type** | integer |
| **Default** | `1000` |
| **Required** | No |

WebSocket port that the GAMA server listens on. To change it in GAMA: **Support → Preferences → Network → Server Mode**.

```dotenv
GAMA_WS_PORT=6868
```

---

## WebSocket ports

### `HEADSET_WS_PORT`

| | |
|---|---|
| **Type** | integer |
| **Default** | `8080` |
| **Required** | No |

Port of the WebSocket server that VR headsets (Unity apps) connect to. The Unity template reads this value from the `ConnectionManager` configuration in the scene.

```dotenv
HEADSET_WS_PORT=8080
```

### `MONITOR_WS_PORT`

| | |
|---|---|
| **Type** | integer |
| **Default** | `8001` |
| **Required** | No |

Port of the WebSocket server that the admin UI connects to for state updates and experiment control.

```dotenv
MONITOR_WS_PORT=8001
```

---

## Web server

### `WEB_APPLICATION_HOST`

| | |
|---|---|
| **Type** | string |
| **Default** | `0.0.0.0` |
| **Required** | No |

IP address on which the WebSocket servers (monitor and player) listen. Use `0.0.0.0` to accept connections on all network interfaces.

```dotenv
WEB_APPLICATION_HOST=0.0.0.0
```

:::warning
Using `0.0.0.0` exposes the WebSocket servers to the local network. For local-only development, use `127.0.0.1`.
:::

### `WEB_APPLICATION_PORT`

| | |
|---|---|
| **Type** | integer |
| **Default** | `8000` |
| **Required** | No |

Port for the static HTTP server that serves the admin UI. Open `http://localhost:<WEB_APPLICATION_PORT>` in your browser.

```dotenv
WEB_APPLICATION_PORT=8000
```

### `WEB_HOSTNAME`

| | |
|---|---|
| **Type** | string |
| **Default** | `simple` |
| **Required** | No |

mDNS hostname registered by the platform. When set, the admin UI becomes reachable at `http://<WEB_HOSTNAME>.local:<WEB_APPLICATION_PORT>` on the local network (e.g. `http://simple.local:8000`). Requires mDNS support on the network.

```dotenv
WEB_HOSTNAME=simple
```

---

## Logging

### `VERBOSE`

| | |
|---|---|
| **Type** | boolean (`true` / `false` / `1` / `yes`) |
| **Default** | `false` |
| **Required** | No |

Enables `debug`-level logging to the console. Shows connection events, player state changes, and message routing.

```dotenv
VERBOSE=true
```

### `EXTRA_VERBOSE`

| | |
|---|---|
| **Type** | boolean |
| **Default** | `false` |
| **Required** | No |

Enables `trace`-level logging. Logs every WebSocket message, ADB command, and internal state transition. Use only for deep debugging — output volume is very high.

```dotenv
EXTRA_VERBOSE=true
```

:::warning
`EXTRA_VERBOSE=true` logs may contain player IDs, IP addresses, and simulation content. Do not use in production.
:::

---

## Learning packages

### `LEARNING_PACKAGE_PATH`

| | |
|---|---|
| **Type** | string (file path) |
| **Default** | `./learning-packages` |
| **Required** | Yes (effectively) |

Primary directory scanned for Virtual Universe packages. Each subdirectory containing a `settings.json` file is registered as an available simulation.

Path may be absolute or relative to the executable / project root.

```dotenv
LEARNING_PACKAGE_PATH="./learning-packages"
```

If the directory does not exist when running as a packaged executable, the platform creates it automatically and then exits (since no simulations are available).

### `EXTRA_LEARNING_PACKAGE_PATH`

| | |
|---|---|
| **Type** | string (file path) |
| **Default** | *(unset)* |
| **Required** | No |

Additional directory scanned for Virtual Universe packages, in addition to `LEARNING_PACKAGE_PATH`. Useful when simulations are stored on an external drive or shared network path.

```dotenv
EXTRA_LEARNING_PACKAGE_PATH="/Volumes/SSD/simulations"
```

---

## Headset management

### `HEADSETS_IP`

| | |
|---|---|
| **Type** | string (semicolon-separated IPv4 addresses) |
| **Default** | *(unset — automatic scan)* |
| **Required** | No |

Explicit list of headset IP addresses. When set, the platform connects directly to these IPs instead of performing a network scan.

```dotenv
HEADSETS_IP="192.168.68.101;192.168.68.102;192.168.68.103;192.168.68.104"
```

- IPs must be separated by `;` with no spaces.
- Trailing characters (e.g. stray quotes) are stripped automatically; a warning is logged.
- Port detection (5555 or 30000–49999) is still performed per IP.

Providing explicit IPs significantly reduces startup time compared to a full network scan.

### `AGGRESSIVE_DISCONNECT`

| | |
|---|---|
| **Type** | boolean |
| **Default** | `false` |
| **Required** | No |

Controls what happens when a headset disconnects.

- `false` (default): the headset entry remains in the panel with a "disconnected" status, allowing reconnection.
- `true`: the headset is immediately removed from the player list on disconnect.

```dotenv
AGGRESSIVE_DISCONNECT=false
```

Keep `false` to handle temporary WiFi drops gracefully.

---

## Special modes

### `ENV_GAMALESS`

| | |
|---|---|
| **Type** | boolean |
| **Default** | `false` |
| **Required** | No |

Disables all GAMA integration (`GamaConnector`, `ModelManager`). Only headset and player management remain active. Use this mode to:

- Test screen mirroring without a GAMA installation.
- Deploy a session where only headset connectivity is needed.

```dotenv
ENV_GAMALESS=true
```

In GAMALESS mode, the `gama` field in `json_state` messages is always an empty object `{}`, and simulation-related monitor commands (`launch_experiment`, etc.) are silently ignored.

---

## Summary table

| Variable | Default | Required | Description |
|---|---|---|---|
| `GAMA_IP_ADDRESS` | `localhost` | No | GAMA server hostname/IP |
| `GAMA_WS_PORT` | `1000` | No | GAMA WebSocket port |
| `HEADSET_WS_PORT` | `8080` | No | VR headset WebSocket port |
| `MONITOR_WS_PORT` | `8001` | No | Admin UI WebSocket port |
| `WEB_APPLICATION_HOST` | `0.0.0.0` | No | WebSocket server bind address |
| `WEB_APPLICATION_PORT` | `8000` | No | Admin UI HTTP port |
| `WEB_HOSTNAME` | `simple` | No | mDNS hostname |
| `VERBOSE` | `false` | No | Enable debug logging |
| `EXTRA_VERBOSE` | `false` | No | Enable trace logging |
| `LEARNING_PACKAGE_PATH` | `./learning-packages` | Yes | Primary VU directory |
| `EXTRA_LEARNING_PACKAGE_PATH` | *(unset)* | No | Additional VU directory |
| `HEADSETS_IP` | *(unset)* | No | Explicit headset IPs |
| `AGGRESSIVE_DISCONNECT` | `false` | No | Remove headsets on disconnect |
| `ENV_GAMALESS` | `false` | No | Disable GAMA integration |
