---
sidebar_position: 4
title: Template Reference
sidebar_label: Template Reference
description: Reference for the SIMPLE Unity template — scenes, prefabs, and C# API for ConnectionManager and SimulationManager.
---

# Unity Template Reference

This page documents what the SIMPLE Unity template contains and how to use its C# scripting API.

---

## Scenes

The template ships with scenes organized in `Assets/Scenes/`.

### Code Examples

Located in `Assets/Scenes/Code Examples/`. Each scene pairs with a matching GAMA model in the plugin's `models/LinkToUnity/Models/Code Examples/` folder.

| Scene | What it demonstrates |
|---|---|
| `Limit Player Movement` | Restricting player movement in Unity via GAMA commands |
| `Receive DEM Data` | Receiving a grid/heightmap from GAMA and modifying it at runtime |
| `Receive Dynamic Data` | Receiving dynamic geometry/agent positions from GAMA every step |
| `Receive Static Data` | Receiving static geometries from GAMA once at initialization |
| `Receive Water Data` | Receiving water surface data and updating it at runtime |
| `Send Receive Message` | Bidirectional messaging between Unity and GAMA |
| `User Interactions` | Defining and triggering player interactions from GAMA |

### Menu

Located in `Assets/Scenes/Menu/`.

| Scene | Role |
|---|---|
| `Startup Menu` | Entry point. Loads the IP Menu and Main Scene. Also lets the player choose whether to use the WebPlatform or connect directly to GAMA. |
| `IP Menu` | Lets the player enter the IP address of the machine running the WebPlatform. The entered IP is persisted between sessions. |
| `End of Game Menu` | Displays end-of-session information and offers a restart button. |

### Demo

Located in `Assets/Scenes/Demo/`. Complete playable experiences:

| Scene | Description |
|---|---|
| `Single Player Game` | A single-player game where the player selects cars and motorbikes to remove, grabs a tree, and designates buildings as hotspots. |
| `Multi-Player Game` | A multi-player race where each player collects treasures. Player synchronization is handled through GAMA. |

### Scene Templates

Two minimal templates for starting a new VU scene from scratch:

| Template | Player type |
|---|---|
| `Main Scene - FPS Player` | First-person player: walks on the ground and can teleport |
| `Main Scene - Sky View Player` | Top-down/flying player: no gravity, moves horizontally and vertically |

---

## Prefabs

Located in `Assets/Resources/Prefabs/`.

### GAMA Link

| Prefab | Role |
|---|---|
| `Connection Manager` | Manages the WebSocket connection between Unity and the WebPlatform. **Required in every Main Scene.** |
| `Game Manager` | Manages game state and handles messages sent to/from GAMA. **Required in every Main Scene.** |

### Player

| Prefab | Description |
|---|---|
| `FPS Player` | First-person player. Walks on a ground surface and can teleport. |
| `Sky View Player` | Flying player. No gravity; moves horizontally and vertically. Useful for top-down simulation overviews. |

### Utils

| Prefab | Description |
|---|---|
| `Debug Overlay` | Displays all `Debug.Log()` output directly on-screen inside the headset. Useful during development. |

---

## C# API

All `*Manager` scripts use the **Singleton pattern** — they are instantiated automatically on the `Managers` GameObject at startup. Do not instantiate them manually. To call a method from any manager script, use:

```csharp
NameOfClassManager.Instance.SomeMethod();
```

---

### ConnectionManager

Extends `WebSocketConnector`. Manages the connection lifecycle between Unity and the WebPlatform. The `Connection Manager` prefab must be present in your scene.

#### Connection states

`ConnectionManager` maintains a state machine (`ConnectionState` enum). Transitions fire the `OnConnectionStateChange` event.

#### Events

| Event | Signature | Fired when |
|---|---|---|
| `OnConnectionStateChange` | `(ConnectionState newState)` | The connection state transitions |
| `OnConnectionStateReceived` | `(JObject payload)` | A `"json_state"` message is received from the server |
| `OnConnectionAttempted` | `(bool connectionSuccess)` | A connection attempt completes (true = success) |
| `OnServerMessageReceived` | — | A `"json_simulation"` message is received |

#### Methods

| Method | Returns | Description |
|---|---|---|
| `TryConnectionToServer()` | — | Attempts to connect to the WebPlatform |
| `IsConnectionState(ConnectionState s)` | `bool` | Returns true if the current state matches `s` |
| `GetConnectionId()` | `string` | Returns the player ID generated at connection time (based on headset IP) |
| `SendExecutableExpression(string expression)` | — | Sends a GAML expression string to GAMA for immediate execution in the experiment context. The expression is compiled by GAMA — mind special characters (`;`, `"`, …). |
| `SendExecutableAsk(string action, Dictionary<string,string> args)` | — | Asks an agent in the simulation to trigger `action` with the given argument values. Faster than `SendExecutableExpression` but only supports simple values, not complex GAML expressions. |
| `UpdateConnectionState(ConnectionState newState)` | — | Manually sets the connection state. Use with caution — can break the default connection flow. |

---

### SimulationManager

The core script for handling GAMA simulation data in Unity. Manages game state and processes incoming geometry messages.

#### Game states

`SimulationManager` maintains a `GameState` enum. State transitions fire `OnGameStateChanged`.

#### Events

| Event | Signature | Fired when |
|---|---|---|
| `OnGameStateChanged` | `(GameState newState)` | The game state changes |
| `OnGameRestarted` | — | `RestartGame()` is called |
| `OnGeometriesInitialized` | `(GAMAGeometry geometries)` | Initial geometries from GAMA are fully converted into Unity polygons. Fires just before the state transitions from `LOADING_DATA` to `GAME`. |

:::note
`OnGeometriesInitialized` fires when geometry data is **processed**, not when it is received. Hook to this event to separate geometry loading logic from game state transitions.
:::

#### Methods

| Method | Returns | Description |
|---|---|---|
| `GetCurrentState()` | `GameState` | Returns the current game state |
| `IsGameState(GameState state)` | `bool` | Returns true if the current state matches `state` |
| `UpdateGameState(GameState newState)` | — | Manually sets the game state. Use with caution — can break initialization and connection flows. |
