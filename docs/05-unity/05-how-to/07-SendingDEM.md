# Sending a Digital Elevation Model (DEM) from GAMA

_**Link to the example model**_: [LinkToUnity/Models/Code Examples/Send DEM.gaml](https://github.com/project-SIMPLE/simple.toolchain/blob/2024-06/GAMA%20Plugin/gaml.extension.unity/models/LinkToUnity/Models/Code%20Examples/Send%20DEM.gaml)

![Vidoterrain-ezgif com-optimize](https://github.com/user-attachments/assets/ea54503b-5099-4484-984d-ffd5c6581a29)

The principle is to use a Terrain game object in Unity and sending/updating from GAMA its height map.

### Step 1: Creating a new terrain

In the Scene, click on the right button to add a new 3D Object/Terrain.

<img width="423" alt="CreateNewTerrain" src="https://github.com/user-attachments/assets/302697cf-31f0-4a6d-9017-a14245cddf72" />

### Step 2: Setting the new terrain

A first element to set is the name of the Terrain that will be used as a _id_ from GAMA. To assign a particular material to the Terrain, click on the terrain setting icon.

<img width="1249" alt="Setup Terrain 1" src="https://github.com/user-attachments/assets/e5b17c51-5e1f-46d2-aa01-f1de3fc2782e" />

Then, the material can be assigned in the corresponding field.

<img width="693" alt="Setup Terrain 2" src="https://github.com/user-attachments/assets/819827eb-f358-424f-aa60-d187f41f6faa" />

It is also important to set the resolution of the height map. For rendering and performance issues, it is highly recommended to use a low resolution like 65x65.

<img width="403" alt="Setup Terrain 3" src="https://github.com/user-attachments/assets/9e59a084-a888-4f71-8039-e545f156e0bc" />

### Step 3: Using the terrain for teleportation

To use the terrain for teleportation, first, remove the « Ground » game object inside the Teleport Area (in the Scene). Then, add the terrain as a collider for the Teleportation area.

<img width="1251" alt="Terrain Teleportation" src="https://github.com/user-attachments/assets/28aca3ac-3978-49d7-9f73-98a36d35ad9a" />

### Step 4: Updating the terrain from GAMA

There are two ways to update the terrain values (height map) from GAMA that correspond to two actions of the Unity Linker agent. The first one can be used to setup all the value of the height map, and the second one is dedicated to update specific cells of the terrain.


**Updating all the values of the terrain's height map**
We use for that the "update_terrain" action. The value of the height map can be either sent as a field or as a matrix. Note that for optimisation purposes, it is important to set the **max_values** as the maximal value can that be obtained during all the simulation.

```java
do update_terrain (
  player:last(unity_player), //player concerned
  id:"Dem", //name of the Terrain in Unity
  field:f, //it is possible to send the grid either as a field or as a matrix
  resolution:65, //resolution of the target Terrain in Unity.
  max_value:max_value //optional : max possible value of the grid
);
```

**Updating a subset of the values of the terrain's height map**

We use for that the "set_terrain_values" action. The principle is to give the new values for the cells as a matrix and the index of this "sub-matrix" according to the global height map matrix.

<img width="254" alt="Terrain Update" src="https://github.com/user-attachments/assets/f8ca7427-574a-4c07-a8e1-9a0164f16568" />

```java
do set_terrain_values(
  player:last(unity_player), //player concerned
  id:"Dem", //name of the Terrain in Unity
  matrix: {1,1} matrix_with c.grid_value, //matrix containing the new values
  index_x : c.grid_x, //index x (column) of the matrix in the total grid
  index_y : c.grid_y //index y (row) of the matrix in the total grid
);
```
