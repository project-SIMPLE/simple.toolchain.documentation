# Constraining movement of players from GAMA

_**Example model**_: use the matching GAMA code example for limiting player movement.
The Unity package contains the Unity-side package and samples; the `.gaml` models are
maintained on the GAMA/SIMPLE side.

![ezgif com-optimize-2](https://github.com/user-attachments/assets/7fea5c10-3ff6-4f4b-93df-11412cdb43aa)

There are 3 ways to constraint the movement of a player from GAMA:
* Enable/disable the movement of the player
* Build invisible walls around a given set of geometries
* Define a specific geometry for the teleportation area


### Enable/disable the movement of the player
To enable/disable the movement of the player, use the « enable_player_movement » action of the Unity Linker.

```java
do enable_player_movement(
  player:the_player, //player agent concerned
  enable:enable_movement //true (enable movement) or false (disable movement)
);
```


### Build invisible walls around a given set of geometries
To build invisible walls around a given set of geometries, use the « build_invisible_walls » action of the Unity Linker.

```java
//build invisible walls surrounding the free_area geometry
do build_invisible_walls(
  player: last(unity_player), //player to send the information to
  id: "wall_for_free_area", //id of the walls
  height: 40.0, //height of the walls
  wall_width: 1.0, //width of the walls
  geoms: [free_area] //geometries used to defined the walls - the walls will be generated from the contour of these geometries
);
```

### Define a specific geometry for the teleportation area
To define a specific geometry for the teleportation area, use of the « send_teleport_area » action of the Unity Linker.

```java
// change the area on which the player can teleport
do send_teleport_area(
  player: last(unity_player), //player to send the information to
  id: "Teleport_free_area",//id of the teleportation area
  geoms: [free_area] //geometries used to defined the teleportation area
);
```
