# Grabbing objects

_**Example model**_: use the matching GAMA code example for user interactions.
The Unity package contains the Unity-side package and samples; the `.gaml` models are
maintained on the GAMA/SIMPLE side.

![grab-ezgif com-optimize](https://github.com/user-attachments/assets/8b1c9614-6a7f-4cd8-a535-985529425e7a)


The SIMPLE toolkit offers several forms of interaction with objects defined in unity properties.

More precisely :
* #no_interaction: no interaction with the object.
* #collider: gives the object a physical existence (the player can't pass through it) but no interaction with it.
* #ray_interactable: the object has a collider and the player can select it with a ray.
* #grabable: the object has a collider and can be grabbed and moved by the player - an object cannot be both grabbable and selectable by a ray. Note that it is possible for grabbable objects to be tracked from GAMA. To do this, select "send back to GAMA" and the object's position will be sent back to GAMA in real time.

To make an object grabbable, just select the "collider", "interactable" and "grabbable" options in the Unity Properties wizard. You can also select "send back to GAMA" to track object movements in GAMA.

<img width="850" alt="Wizard-grab_property" src="https://github.com/user-attachments/assets/86863289-a533-491d-9d04-fd49244c2697" />

This corresponds to this code in GAML:

```gaml
geometry_properties("grabable_object", nil, object_aspect, #grabable, true);
```
