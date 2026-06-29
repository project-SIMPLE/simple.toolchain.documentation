# Managing Water from GAMA

_**Example model**_: use the matching GAMA code example for sending water data.
The Unity package contains the Unity-side package and samples; the `.gaml` models are
maintained on the GAMA/SIMPLE side.

![ezgif com-optimize](https://github.com/user-attachments/assets/b34029f6-19bc-4bae-801e-e4b416efce74)

The principle is to send a set of geometries for the water agent using a water material. Note that to use a material, it has to be located in the Resources folder of Unity project.

For that, we define a specific unity property for the water.

```java
//action that defines the different unity properties
action define_properties {
	//define a unity_aspect called water_aspect that will display in Unity the agents from its geometry, with a height of 1m, the material "Water Material", the white color, and the default precision
	unity_aspect water_aspect <- geometry_aspect(1.0, "Materials/Water/Water Material",#white, precision);

	//define the up_water unity property, with the name "water", no specific layer, the water_aspect unity aspect, no interaction, and the agent location is not sent back
	//to GAMA.
	up_water<- geometry_properties("water", nil, water_aspect, #no_interaction,false);

	// add the up_water unity_property to the list of unity_properties
	unity_properties << up_water;
}

```

Then, we add the water geometry at the right location (z-value) at every step using the **add_geometries_to_send** action of the Unity Linker agent.

```
do add_geometries_to_send(water collect (each.shape at_location {each.location.x,each.location.y, global_water_level}),up_water);
```
