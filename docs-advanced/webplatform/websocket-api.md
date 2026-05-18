---
title: WebSocket API Reference
sidebar_label: WebSocket API
sidebar_position: 3
description: Complete reference for all WebSocket message types exchanged between the WebPlatform, the admin UI, and VR headsets.
---

# WebSocket API Reference

The WebPlatform exposes two WebSocket servers and maintains one outbound WebSocket connection. All messages are JSON-encoded strings.

---

## Ports summary

| Port (default) | Env var | Direction | Purpose |
|---|---|---|---|
| `8001` | `MONITOR_WS_PORT` | Frontend ↔ WebPlatform | Admin UI control and state updates |
| `8080` | `HEADSET_WS_PORT` | Headset ↔ WebPlatform | Player connection and simulation data |
| `1000` | `GAMA_WS_PORT` | WebPlatform → GAMA | GAMA server protocol (outbound client) |

---

## Monitor WebSocket (`MONITOR_WS_PORT`)

The admin UI (browser frontend) connects to this port. The server broadcasts state updates to all connected monitor clients and sends targeted responses to the requesting client.

### Messages: Frontend → WebPlatform

#### `launch_experiment`

Start the currently selected simulation in GAMA.

```json
{ "type": "launch_experiment" }
```

#### `stop_experiment`

Stop the running simulation. All headsets are removed from the simulation.

```json
{ "type": "stop_experiment" }
```

#### `pause_experiment`

Pause the running simulation. Headsets stay connected.

```json
{ "type": "pause_experiment" }
```

#### `resume_experiment`

Resume a paused simulation.

```json
{ "type": "resume_experiment" }
```

#### `get_simulation_informations`

Request the full catalog of available Virtual Universes. The server responds with the catalog structure read from the `learning-packages` directories.

```json
{ "type": "get_simulation_informations" }
```

#### `get_simulation_by_index`

Select a specific Virtual Universe by its index in the flat model list and receive its settings.

```json
{
 "type": "get_simulation_by_index",
 "simulationIndex": 0
}
```

`simulationIndex` is a 0-based integer index into the list returned by `get_simulation_informations`.

#### `send_simulation`

Alternative to `get_simulation_by_index`. Select a simulation using the `model_index` field embedded in a previously received simulation object.

```json
{
 "type": "send_simulation",
 "simulation": { "model_index": 2 }
}
```

#### `add_player_headset`

Manually add a connected headset to the running simulation. Normally headsets are added automatically on experiment launch.

```json
{
 "type": "add_player_headset",
 "id": "player-ip-or-id"
}
```

#### `remove_player_headset`

Remove a headset from the simulation and disconnect it.

```json
{
 "type": "remove_player_headset",
 "id": "player-id"
}
```

`id` must match the player's `id` field (set by the headset on connection), not the internal IP key.

#### `screen_control`

Switch the display mode shown on all monitor clients.

```json
{
 "type": "screen_control",
 "display_type": "stream"
}
```

#### `try_connection`

No-op in normal mode. Sent by the frontend to check whether GAMA is reachable. The GamaConnector manages its own reconnection independently.

```json
{ "type": "try_connection" }
```

---

### Messages: WebPlatform → Frontend

#### `json_state`

Broadcast to all connected monitor clients whenever GAMA or player state changes.

```json
{
 "type": "json_state",
 "gama": {
 "connected": true,
 "experiment_state": "RUNNING",
 "loading": false,
 "content_error": "",
 "experiment_id": "abc123",
 "experiment_name": "My Simulation"
 },
 "player": {
 "PlayerA": {
 "id": "PlayerA",
 "ping_interval": 5000,
 "is_alive": true,
 "connected": true,
 "in_game": true,
 "date_connection": "14:32"
 }
 }
}
```

**`gama.experiment_state`** values:

| Value | Meaning |
|---|---|
| `NONE` | No experiment loaded |
| `NOTREADY` | Experiment loading |
| `RUNNING` | Experiment running |
| `PAUSED` | Experiment paused |

In GAMALESS mode (`ENV_GAMALESS=true`), `gama` is an empty object `{}`.

#### `get_simulation_by_index`

Response to a `get_simulation_by_index` or `send_simulation` request. Sent only to the requesting client. The `simulation` field is the full `settings.json` content for the selected VU (with `model_file_path` resolved to an absolute path).

```json
{
 "type": "get_simulation_by_index",
 "simulation": {
 "type": "json_settings",
 "name": "Flood Model",
 "splashscreen": "./splash.png",
 "model_file_path": "/absolute/path/to/model.gaml",
 "experiment_name": "Launch",
 "minimal_players": "1",
 "maximal_players": "6",
 "selected_monitoring": "gama_screen"
 }
}
```

`selected_monitoring` is optional; omit it to use the default display mode.

#### Catalog response (to `get_simulation_informations`)

The server sends the raw JSON string of the nested catalog structure. Each entry is either a `json_settings` leaf or a `catalog` node:

```json
[
 {
 "type": "json_settings",
 "name": "Single-player demo",
 "splashscreen": "./splash.png",
 "model_index": 0
 },
 {
 "type": "catalog",
 "name": "Flood scenarios",
 "entries": [
 { "type": "json_settings", "name": "Quang Binh", "model_index": 1 },
 { "type": "json_settings", "name": "Mekong Delta", "model_index": 2 }
 ]
 }
]
```

#### `screen_control`

Forwarded to all monitor clients when the display mode changes.

```json
{
 "type": "screen_control",
 "display_type": "stream"
}
```

#### Auto-push on monitor connect

When a monitor client connects, the WebPlatform automatically sends two messages without any request:

1. `json_state` (as documented above) — current GAMA and player state.
2. If a VU is currently selected, the full `settings.json` of the active model sent **without a type envelope**:

```json
{
 "type": "json_settings",
 "name": "My Simulation",
 "splashscreen": "./splash.png",
 "model_file_path": "/absolute/path/to/model.gaml",
 "experiment_name": "Launch",
 "minimal_players": "1",
 "maximal_players": "6"
}
```

The frontend uses this to restore the selected simulation card when the admin UI reconnects after a reload.

---

## Headset WebSocket (`HEADSET_WS_PORT`)

VR headsets (running the Unity app) connect to this port. The server uses each headset's IP address as its internal key.

### Messages: Headset → WebPlatform

#### `connection`

First message sent by a headset after establishing the WebSocket connection. Registers the headset in the player list.

```json
{
 "type": "connection",
 "id": "PlayerA",
 "heartbeat": 5000
}
```

| Field | Type | Description |
|---|---|---|
| `id` | string | Human-readable player identifier (set in the Unity app, typically the headset color name) |
| `heartbeat` | number | Desired ping interval in milliseconds. Defaults to 5000 if omitted. |

#### `ping`

Sent by a headset to verify its connection is alive. The WebPlatform responds with `pong`.

```json
{
 "type": "ping",
 "id": "PlayerA"
}
```

#### `pong`

Response to a heartbeat `ping` sent by the WebPlatform.

```json
{ "type": "pong" }
```

#### `expression`

Send a GAML expression to be evaluated in the running GAMA simulation on behalf of this player. The literal string `$id` in `expr` is replaced with the player's `id` before being forwarded to GAMA.

```json
{
 "type": "expression",
 "expr": "do my_action(player: $id);"
}
```

#### `ask`

Send a GAML `ask` statement to GAMA on behalf of this player.

```json
{
 "type": "ask",
 "action": "my_action",
 "args": "{\"key\": \"value\"}",
 "agent": "unity_linker[0]"
}
```

#### `disconnect_properly`

Request a clean disconnection. The WebPlatform removes the player from GAMA and closes the WebSocket with code 1000.

```json
{ "type": "disconnect_properly" }
```

---

### Messages: WebPlatform → Headset

#### `ping`

Heartbeat sent by the WebPlatform at the interval negotiated during `connection`. The headset must respond with `pong`. If no response is received before the next ping, the connection is considered dead and terminated.

```json
{ "type": "ping" }
```

#### `pong`

Response to a headset-initiated `ping`.

```json
{
 "type": "pong",
 "id": "PlayerA"
}
```

#### `json_state`

Sent to a headset whenever its state changes (connection, in-game status). Contains all player fields except the internal WebSocket handle and timer.

```json
{
 "type": "json_state",
 "id_player": "PlayerA",
 "id": "PlayerA",
 "ping_interval": 5000,
 "is_alive": true,
 "connected": true,
 "in_game": false,
 "date_connection": "14:32"
}
```

`ping_interval` is the heartbeat interval negotiated at connection (milliseconds). `is_alive` reflects the server-side liveness flag — it will be `false` if the server just sent a ping and is waiting for a pong.

#### `json_output`

Simulation data from GAMA, targeted at this specific player. The `contents` field is the raw payload produced by the GAML model's `send_world` or `send_geometries` actions, filtered to only include entries addressed to this player's `id`.

```json
{
 "type": "json_output",
 "contents": [
 { "key": "value" }
 ]
}
```

---

## GAMA WebSocket (outbound client)

The WebPlatform connects as a WebSocket **client** to the GAMA server at `ws://<GAMA_IP_ADDRESS>:<GAMA_WS_PORT>`.

### GAML model requirements

The WebPlatform uses the expression channel to call actions in the GAMA experiment. For the connection lifecycle to work, every GAML experiment used with SIMPLE **must** declare at least these two actions in the experiment block:

```gaml
action create_player(string id_player) {
    // called when a headset connects and joins the simulation
}

action remove_player(string id_player) {
    // called when a headset disconnects or is removed
}
```

Omitting either action causes a GAMA compilation error when the WebPlatform calls them. Additional actions (for player interactions, map control, etc.) are defined per-model. See the [GAML API Reference](/gama/api) for the full abstract species definition.

:::tip
Use `string` for all action parameters called remotely. GAMA avoids type-casting errors when the argument is serialized as a JSON string.
:::

---

### Messages: WebPlatform → GAMA

#### Load experiment

```json
{
 "type": "load",
 "model": "/absolute/path/to/model.gaml",
 "experiment": "ExperimentName"
}
```

#### Control experiment

```json
{
 "type": "play" | "pause" | "stop",
 "exp_id": "<experiment-id>"
}
```

#### Send expression

The WebPlatform sends expressions to GAMA in two contexts, which produce slightly different payloads.

**Player lifecycle** (`create_player` / `remove_player`) — no `content` field:

```json
{
 "type": "expression",
 "exp_id": "<experiment-id>",
 "expr": "do create_player(\"PlayerA\");"
}
```

**Forwarded player expression** (from a headset `expression` message) — includes a `content` label:

```json
{
 "type": "expression",
 "content": "Send an expression",
 "exp_id": "<experiment-id>",
 "expr": "do my_action(\"PlayerA\");"
}
```

The `content` field is a static label added by `GamaConnector.jsonSendExpression()`. GAMA ignores it; it is safe to omit in client implementations.

### Messages: GAMA → WebPlatform

| `type` | Description |
|---|---|
| `ConnectionSuccessful` | GAMA accepted the WebSocket connection |
| `SimulationStatus` | Experiment state changed; `content` holds the new state string |
| `SimulationOutput` | JSON-encoded simulation output (`content` field); forwarded to headsets |
| `CommandExecutedSuccessfully` | A command was accepted; `command.type === "load"` carries the experiment name |
| `SimulationStatusError` | Simulation state error |
| `SimulationErrorDialog` | GAMA displayed an error dialog |
| `SimulationError` | Generic simulation error |
| `RuntimeError` | GAMA runtime error |
| `GamaServerError` | GAMA server-level error |
| `MalformedRequest` | Sent message was not valid |
| `UnableToExecuteRequest` | GAMA could not execute the request |

On any error type, the WebPlatform logs the error and sets `content_error` in the state broadcast to the admin UI.

On abnormal socket closure, the WebPlatform waits 5 seconds and attempts to reconnect automatically.
