---
title: GAML API Reference
sidebar_label: GAML API Reference
sidebar_position: 2
description: Complete reference for all GAML species, experiment types, variables, actions, and operators provided by the SIMPLE GAMA plugin.
---

# GAML API Reference

The SIMPLE GAMA plugin (version 2.0.0, artifact `gaml.extension.unity`) extends GAMA with the following constructs. All are available after installing the plugin.

---

## Experiment type: `unity`

A dedicated experiment type that automatically creates and manages the `unity_linker` agent.

```gaml
experiment MyVRExperiment type: unity {
 // optional: override unity_linker_species if you use a custom linker
}
```

### Variables

| Name | Type | Description |
|---|---|---|
| `unity_linker_species` | `string` | Species name of the linker agent to instantiate. Defaults to the first species inheriting `abstract_unity_linker`. |
| `unity_linker` | `agent` | Reference to the active linker agent. |
| `displays_to_hide` | `list` | List of display names to hide when the VR experiment starts. |

---

## Species: `abstract_unity_linker`

The central agent that manages the connection between GAMA and Unity. Extend this species to create your own linker.

```gaml
species my_linker parent: abstract_unity_linker {
 // override init and reflex as needed
}
```

The species uses the `network` skill internally to maintain the WebSocket connection to the WebPlatform.

### Variables

| Name | Type | Default | Description |
|---|---|---|---|
| `connect_to_unity` | `bool` | `true` | Activate the Unity connection. If `true`, the model waits for a Unity client before starting. |
| `ready_to_move_player` | `list` | `[]` | List of players whose positions can be updated from Unity. |
| `ready_to_send_geometries` | `list` | `[]` | List of players that are ready to receive geometries. |
| `min_num_players` | `int` | `1` | Minimum number of connected players before the simulation proceeds. |
| `max_num_players` | `int` | `1` | Maximum number of simultaneous players. |
| `min_player_position_update_duration` | `float` | `0.01` | Minimum interval (in simulation time) between player position updates sent to Unity. |
| `precision` | `int` | `10000` | Coordinate precision multiplier. All geometry coordinates are multiplied by this value before sending to Unity to preserve sub-meter precision using integers. |
| `unity_properties` | `list<unity_property>` | — | Properties applied to geometries sent to Unity. |
| `background_geometries` | `map` | — | Static background geometries sent once at initialization. Map key is a `unity_property`, value is a geometry or list of geometries. |
| `attributes_to_send` | `map` | — | Attribute values to send alongside geometries. |
| `geometries_to_send` | `map` | — | Dynamic geometries to send every step. |
| `geometries_to_keep` | `list` | — | Geometry IDs to retain in Unity across steps (not cleared each cycle). |
| `do_send_world` | `bool` | `true` | If `true`, calls `send_world` every step. |
| `initialized` | `bool` | `false` | Whether the linker has completed initialization with Unity. |
| `player_species` | `string` | — | Name of the species to use for player agents. |
| `player_unity_properties` | `list<unity_property>` | — | Unity properties applied to player geometry. |
| `end_message_symbol` | `string` | `"|||"` | Delimiter appended to messages to mark end-of-message. |
| `receive_information` | `bool` | `false` | Whether to receive information back from Unity players. |
| `move_player_event` | `bool` | `false` | Whether a player-moved event should trigger a reflex. |
| `move_player_from_unity` | `bool` | `true` | Whether player positions can be updated from Unity movement. |
| `use_middleware` | `bool` | `true` | Whether to use the WebPlatform as middleware (always `true` in SIMPLE deployments). |
| `new_player_position` | `map` | — | Latest player positions received from Unity, keyed by player ID. |
| `distance_player_selection` | `float` | `2.0` | Distance threshold for player-geometry selection interactions. |
| `init_locations` | `list<point>` | — | Initial spawn locations for players. |
| `player_agents` | `map` | — | Map from player ID (string) to player agent instance. |

### Actions

#### `create_player(id: string)`

Called automatically when a new player connects. Creates a new agent of `player_species` and stores it in `player_agents`.

```gaml
do create_player(id: "PlayerA");
```

#### `create_init_player(id: string)`

Creates the player agent and sends it the initial world state and geometry data.

```gaml
do create_init_player(id: "PlayerA");
```

#### `send_init_data(id: string)`

Sends initialization data (geometries, properties) to a specific player.

```gaml
do send_init_data(id: "PlayerA");
```

#### `send_world`

Sends the current world state (dynamic geometries and attributes) to all connected players.

```gaml
do send_world;
```

#### `send_geometries(player: agent, update_position: bool, is_init: bool, geoms: map)`

Sends a specific set of geometries to one player.

```gaml
do send_geometries(player: p, update_position: true, is_init: false, geoms: my_map);
```

#### `add_geometries_to_send(geometries: container, property: unity_property, attributes: map)`

Queues geometries for sending in the next `send_world` call.

```gaml
do add_geometries_to_send(geometries: car as list, property: car_property, attributes: []);
```

#### `add_background_geometries(geometries: container, property: unity_property)`

Sends static geometries once at initialization. These are not resent on subsequent steps.

```gaml
do add_background_geometries(geometries: roads, property: road_property);
```

#### `add_geometries_to_keep(geometries: container)`

Marks geometry IDs to retain in Unity between simulation steps.

```gaml
do add_geometries_to_keep(geometries: permanent_objects);
```

#### `move_player(player: agent, loc: point)`

Teleports a player agent to a new location in both GAMA and Unity.

```gaml
do move_player(player: the_player, loc: {100, 200, 0});
```

#### `move_player_external(id: string, x: int, y: int, z: int, angle: int)`

Updates a player's position from Unity-originated movement data (called internally when `move_player_from_unity` is `true`).

#### `enable_player_movement(player: agent, enable: bool)`

Enable or disable movement for a specific player.

```gaml
do enable_player_movement(player: the_player, enable: false);
```

#### `build_invisible_walls(player: agent, id: string, height: float, wall_width: float, geoms: list)`

Creates invisible collider walls around a geometry to constrain player movement.

```gaml
do build_invisible_walls(player: p, id: "zone1", height: 3.0, wall_width: 0.5, geoms: fence_geoms);
```

#### `send_teleport_area(player: agent, id: string, geoms: list)`

Defines valid teleportation areas for a specific player.

```gaml
do send_teleport_area(player: p, id: "allowed_zone", geoms: walkable_areas);
```

#### `send_message(players: list, mes: map)`

Sends a message to one or more players.

```gaml
do send_message(players: [p1, p2], mes: ["type"::"alert", "text"::"Game over"]);
```

#### `update_animation(players: list, geometries: container, triggers: list, parameters: map)`

Updates animation state for geometry agents in Unity.

```gaml
do update_animation(players: all_players, geometries: cars, triggers: ["move"], parameters: []);
```

#### `set_terrain_values(player: agent, id: string, field: field, matrix: matrix, index_x: int?, index_y: int?)`

Sets terrain heightmap values for a Unity terrain object.

#### `update_terrain(player: agent, id: string, field: field, matrix: matrix, max_value: float, size_x: float, size_y: float, resolution: int)`

Updates a Unity terrain heightmap on the fly.

#### `send_parameters(player: agent)`

Sends the current parameter map to a player.

#### `add_to_send_parameter(player: agent, map_to_send: map)`

Adds entries to the outgoing parameter map for a player.

#### `add_to_send_world(map_to_send: map)`

Appends arbitrary data to the next `send_world` payload.

#### `after_sending_geometries(player: agent)`

Override hook called after geometries are sent to a player. Default: no-op.

#### `after_sending_world(map_to_send: map)`

Override hook called after a world update is sent. Default: no-op.

#### `filter_distance(geometries: list, player: agent) → list`

Returns the subset of `geometries` within `distance_player_selection` of the given player.

#### `filter_overlapping(geometries: list, player: agent) → list`

Returns the subset of `geometries` that overlap the player's bounding geometry.

#### `end_of_game(mes: string)`

Sends an end-of-game message to all players.

```gaml
do end_of_game(mes: "You won!");
```

#### `ping_GAMA(id: string)`

Sends a keep-alive ping to the player with the given ID.

#### `player_position_updated(id: string)`

Marks that a player's position has been received and can be applied.

#### `player_ready_to_receive_geometries(id: string)`

Marks that a player's Unity client is ready to receive the initial geometry set.

#### `send_player_position(player: agent)`

Sends the current GAMA position of a player agent back to Unity.

#### `new_player_location(loc: point, player: agent) → point`

Override hook. Given a proposed new location from Unity, returns the location to actually apply. Default: returns `loc` unchanged.

#### `loc_to_send(→ point)`

Returns the location to include in outgoing messages. Override to customize coordinate transformation.

#### `message_geometry_shape(geom: geometry) → map`

Serializes a geometry for sending as a shape message.

#### `message_geometry_loc(geom: geometry) → map`

Serializes a geometry for sending as a location-only message.

#### `move_geoms_followed(ids: string, points: string, sep: string)`

Moves geometries in Unity to follow new positions.

#### `add_to_map(map: map, geom: geometry)`

Utility: adds geometry data to a map payload.

#### `send_current_message`

Flushes the current message buffer to the WebSocket.

#### `send_unity_propetries(player: agent)`

Sends the `unity_properties` list to a specific player.

---

## Species: `abstract_unity_player`

Represents a VR player agent within the GAMA simulation. Extend this species for your player agents.

```gaml
species my_player parent: abstract_unity_player {
 // ...
}
```

### Variables

| Name | Type | Default | Description |
|---|---|---|---|
| `heading` | `float` | — | Player orientation in degrees (0 = north). |
| `color` | `rgb` | — | Color used to identify this player (displayed in the admin UI). |
| `to_display` | `bool` | — | Whether to display this player's avatar in the simulation. |
| `selected` | `bool` | — | Whether this player is currently selected (clicked) in Unity. |
| `z_offset` | `float` | `2.0` | Vertical offset applied to the player's avatar in Unity. |
| `x_movement_speed` | `float` | `-1.0` | Maximum movement speed on X axis (`-1` = Unity default). |
| `y_movement_speed` | `float` | `-1.0` | Maximum movement speed on Y axis (`-1` = Unity default). |
| `rotation_speed` | `float` | `-1.0` | Rotation speed (`-1` = Unity default). |
| `movement_min_y` | `float` | `-1.0` | Minimum Y coordinate the player can reach (`-1` = no constraint). |
| `movement_max_y` | `float` | `-1.0` | Maximum Y coordinate the player can reach (`-1` = no constraint). |
| `camera_clipping_planes_near` | `float` | `-1.0` | Near camera clipping plane (`-1` = Unity default). |
| `camera_clipping_planes_far` | `float` | `-1.0` | Far camera clipping plane (`-1` = Unity default). |
| `x_movement_strafe` | `bool` | `false` | If `true`, X-axis movement strafes instead of rotates. |
| `cone_distance` | `float` | — | Distance of the player's perception cone. |
| `cone_amplitude` | `float` | — | Angular width (degrees) of the player's perception cone. |
| `player_size` | `float` | `3.0` | Scale of the player avatar in Unity. |
| `player_rotation` | `float` | `90.0` | Initial rotation offset of the player avatar. |
| `player_agents_perception_radius` | `float` | `0.0` | Radius within which agents are displayed to this player (`0` = all). |
| `player_agents_min_dist` | `float` | `0.0` | Minimum distance between displayed agents and this player. |

### Actions

#### `player_perception_cone() → geometry`

Returns the geometric shape of this player's perception cone.

```gaml
geometry cone <- the_player.player_perception_cone();
```

---

## Types

### `unity_property`

Describes how a GAMA geometry or agent should be represented in Unity.

| Field | Type | Description |
|---|---|---|
| `id` | `string` | Unique identifier for this property definition. |
| `aspect` | `unity_aspect` | Visual representation. |
| `interaction` | `unity_interaction` | Interaction capabilities. |
| `tag` | `string` | Unity tag assigned to the object. |

### `unity_aspect`

Describes the visual appearance of a geometry in Unity.

| Field | Type | Description |
|---|---|---|
| `prefab` | `string` | Path to a Unity prefab (e.g. `"Prefabs/Car"`). If set, uses a prefab; otherwise a generated mesh. |
| `size` | `float` | Scale of the prefab or mesh. |
| `rotation_coeff` | `float` | Rotation multiplier applied to the agent's heading. |
| `rotation_offset` | `float` | Constant rotation offset (degrees) added to the agent's heading. |
| `y_offset` | `float` | Vertical offset applied to the object in Unity. |
| `height` | `float` | Height of the geometry mesh (for non-prefab aspects). |
| `material` | `string` | Path to a Unity material (e.g. `"Materials/Water/Water Material"`). |
| `color` | `rgb` | Color applied to the geometry. |

### `unity_interaction`

Describes how a geometry can be interacted with in Unity.

| Field | Type | Description |
|---|---|---|
| `has_collider` | `bool` | Whether the object has a physics collider. |
| `is_interactable` | `bool` | Whether the object responds to ray interactions. |
| `is_grabable` | `bool` | Whether the object can be grabbed by the player. |
| `constraints` | `list<bool>` | Axis/rotation movement constraints (x, y, z position; x, y, z rotation). |

---

## Operators

### `prefab_aspect(prefabPath, size, yOffset, rotationCoeff, rotationOffset, precision) → unity_aspect`

Creates a `unity_aspect` using a Unity prefab.

```gaml
unity_aspect car_aspect <- prefab_aspect("Prefabs/Car", 1.0, 0.5, 1.0, 90.0, precision);
```

| Parameter | Type | Description |
|---|---|---|
| `prefabPath` | `string` | Relative path to the prefab from the Unity `Resources/` folder. |
| `size` | `float` | Scale factor. |
| `yOffset` | `float` | Vertical offset. |
| `rotationCoeff` | `float` | Rotation multiplier. |
| `rotationOffset` | `float` | Constant rotation offset in degrees. |
| `precision` | `int` | Coordinate precision (use the linker's `precision` variable). |

### `geometry_aspect(height, color, precision) → unity_aspect`

Creates a `unity_aspect` that renders the GAMA geometry as a colored mesh.

```gaml
unity_aspect road_aspect <- geometry_aspect(0.3, #grey, precision);
```

### `geometry_aspect(height, material, color, precision) → unity_aspect`

Creates a `unity_aspect` with a specific Unity material and color.

```gaml
unity_aspect water_aspect <- geometry_aspect(0.1, "Materials/Water/Water Material", #blue, precision);
```

### `geometry_aspect(height, material, precision) → unity_aspect`

Creates a `unity_aspect` with a Unity material (no color override).

### `geometry_grabable(constraints) → unity_interaction`

Creates a `unity_interaction` for an object that can be grabbed and is interactable.

```gaml
unity_interaction grab_int <- geometry_grabable([]);
```

### `geometry_ray(allow_collider) → unity_interaction`

Creates a `unity_interaction` for an object interactable via ray casting (not grabable).

```gaml
unity_interaction ray_int <- geometry_ray(true);
```

### `new_geometry_interaction(has_collider, is_interactable, is_grabable, constraints) → unity_interaction`

Creates a fully customized `unity_interaction`.

```gaml
unity_interaction custom <- new_geometry_interaction(true, true, false, []);
```

### `geometry_properties(name, tag, aspect, interaction, toFollow) → unity_property`

Creates a `unity_property` with interaction capabilities.

```gaml
unity_property car_prop <- geometry_properties("car", "vehicle", car_aspect, ray_int, true);
```

`toFollow`: if `true`, the geometry's position is sent to Unity every step.

### `geometry_properties_no_interaction(name, tag, aspect) → unity_property`

Creates a `unity_property` with no interaction (static display only).

```gaml
unity_property road_prop <- geometry_properties_no_interaction("road", "road", road_aspect);
```

---

## Minimal model example

```gaml
model VRTrafficDemo

global {
 int precision <- 10000;

 init {
 create road from: road_shapefile;
 create car number: 20;
 }
}

species road { geometry shape; }
species car skills: [moving] { point location; }

species my_linker parent: abstract_unity_linker {
 unity_aspect car_prefab <- prefab_aspect("Prefabs/Car", 1.0, 0.5, 1.0, 90.0, precision);
 unity_interaction car_interaction <- new_geometry_interaction(true, true, false, []);
 unity_property car_prop <- geometry_properties("car", "vehicle", car_prefab, car_interaction, true);

 unity_aspect road_geom <- geometry_aspect(0.1, #grey, precision);
 unity_property road_prop <- geometry_properties_no_interaction("road", "road", road_geom);

 init {
 min_num_players <- 1;
 max_num_players <- 6;
 }

 reflex send_data when: initialized {
 do add_geometries_to_send(geometries: car, property: car_prop, attributes: []);
 do send_world;
 }
}

species my_player parent: abstract_unity_player {}

experiment VR type: unity {
 parameter "Number of cars" var: nb_cars <- 20 min: 5 max: 100;
}
```
