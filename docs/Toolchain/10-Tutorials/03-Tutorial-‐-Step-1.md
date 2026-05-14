# Step 1: Generation of the GAMA VR model

## Creation of the project


Create a new GAMA project, then copy inside in this project the folders "models" and "includes" from "Toy Models/Traffic" of the model library. In the "model" folder, delete all the models except "Traffic and Pollution.gaml".
To make testing easier later, set ‘fullscreen’ to false in the ‘carte’ display of the ‘traffic’ experiment (if it is not already set to false)

![Fullscreen to false](https://github.com/user-attachments/assets/e9bdaa91-89a0-4114-b27b-c51a19e89a92)

## Generation of the VR model
Open the "Traffic and Pollution.gaml" model in the editor, then, select in the "Unity VR" menu "Model to VR". A Wizard should open. :warning: The "Unity VR" menu only appears if you have the mouse cursor in the text editor of the model.

![MenuVR](https://github.com/user-attachments/assets/f6d2732a-b439-4a69-aecf-b3272f70bc6a)

### Page 1 - Define the general information to define the VR experiment

#### Main experiment
_Name of the experiment, which will be extended to include a VR version._

In this tutorial, we will extend the only experiment defined: **traffic**.

#### Minimum duration of a cycle (in s)
_This represents the minimum time between two simulation steps. As GAMA will be sending information to Unity at each simulation step, setting a minimum value for this variable ensures that the Unity client doesn't receive too much information too quickly._

- In this tutorial, we will set the value to **0.1**.

#### Perception radius of player agent
_If this option is greater than 0.0, it filters the agents to be sent to Unity, sending only those agents that are at a distance less than or equal to the perception radius._

In this tutorial, we'll leave the **default value (0.0)** as we don't wish to filter the agents sent to Unity.

#### Minimum distance between agents to be sent
_If greater than 0.0, this option filters the agents to be sent to Unity, so as to send only those agents that are too close (distance greater than this minimum distance)._

In this tutorial, we'll leave the **default value (0.0)** as we don't wish to filter the agents sent to Unity.


#### Main display
_Name of the display, which will be extended to include a VR version._

In this tutorial, only we will extend the only display defined: **carte**.

#### Display to hide
_Displays that will not be displayed in the experiment._

In this tutorial, we don't want to have the `carte` display, so it **must be checked**.

<img width="820" alt="Wizard_Experiment" src="https://github.com/user-attachments/assets/5fa67658-8cbd-4399-9561-8b4b6aa0a48b" />


### Page 2 - Define the agents and Unity properties for the geometries to send
#### General information

An important step is to describe how the entities (agents, geometries) will be sent to Unity, in particular how they will be represented in Unity and how the player will be able to interact with them. In the same way as for "aspects" in GAMA, it will be possible to define sets of properties that can then be assigned to agent species: for each agent species, you will be able to choose a way of sending it to Unity.

Regarding the representation of entities, the tool allows them to be represented in 2 different ways: by their geometry (with optional 3D extrusion) and by a prefab already defined in Unity.

For interactions, it is possible to define whether the entity will have a physical existence in the world (collider), whether the player will be able to interact with it and how he or she will be able to interact: interaction by ray or possibility of catching the entity. Finally, it is possible to define whether Unity will send GAMA information on the entity's location (for example, if the player moves it).

#### Definition of the road unity properties
In this tutorial, we want to send all road geometries to Unity with the possibility to interact with them (to let the player close roads by selecting them through the ray interactor). We therefore add a new property for this purpose and check the road species.

To define a new properties, clicks on the "+" button.
<img width="820" alt="Wizard-Properties-Add" src="https://github.com/user-attachments/assets/40d1e496-b781-45d1-86d3-fb3489a9c941" />

Then choose a name for the new properties. For the road species, we will keep the name "road" for the property. Then, click on "Ok"


<img width="820" alt="Wizard-Properties-Add-Road" src="https://github.com/user-attachments/assets/d4068eca-4965-4d0b-8ce3-a4e81a2e21dc" />


The roads will only be sent at the initialization of the game, thus, we uncheck "Update every" to make it static. For _Aspect_, as we want to represent road geometries and not use a prefab, choose for "Uses" "The geometries of the agents in GAMA". We keep the default color (gray), and the default height/depth (1 #m). We will not use a particular material for these agents, so we let the _material_ field empty. As we want to represent roads as surfaces rather than lines, we add a buffer of 3m buffer around them. To do this, we need to fill the _Buffer_ field with "3.0".

As we want to interact with the roads using the ray interaction, in _Interaction_ check the box _has a collider_ and _is interactable_.

Finally, we add a tag  to facilitate the identification of this type of entity in Unity. For that, in the _tag_ field, write "road".

<img width="820" alt="Wizard-Properties-Road" src="https://github.com/user-attachments/assets/d6d3560e-321d-46f1-893a-ff13b6bef8fc" />


#### Definition of the building unity properties
In this tutorial, we want to send all building geometries to Unity without interaction. We therefore check the building species add a new property for this purpose. As for road, we have to click on the "+" button to create a new property. Leave the default name ("building"). Similarly to roads, we want to only send the buildings at the initialization, so we uncheck "Update every".
For the _Aspect_, we want to represent the building by their GAMA geometries, so we set "Uses" to "The geometry of the agent in GAMA". Concerning the Color, we want to display them in black, so we click on the gray square and choose the black color.

<img width="820" alt="Wizard-Properties-Building-Color" src="https://github.com/user-attachments/assets/cd592f97-0e24-439e-8a82-6bff86d031fb" />

We use the default value for the _Material_ (empty) and Buffer (0.0). For the _Height/depth_ we set the value to _5.0_. We define no interaction for building and no Tag.


<img width="820" alt="Wizard-Properties-Building" src="https://github.com/user-attachments/assets/c4cb4c11-c957-40ea-aade-4e25445d59c6" />


#### Definition of the people unity properties
In this tutorial, we want to send the location of the people agents to Unity without any interaction with them. We therefore add a new property for this purpose called "people".
As we want to sent the people agents at every step, we leave "Update every" checked with the default value for the simulation cycles (_1_).

 For _Aspect_, we want to represent people agents using a specific prefab called _Car_, we then have to select a prefab defined in Unity_ for "Uses". In _Path to the Prefab_, we have to specify the path to the Prefab. For reasons of Unity limitations, this prefab must absolutely be in the Resources directory of the Unity project. In this tutorial, we want to use the _Car_ prefab located in folder "Assets/Resources/Prefabs/Visual Prefabs/City/Vehicles/", we then write in _Path_ "Prefabs/Visual Prefabs/City/Vehicles/Car". We set the scale of the prefab to "60.0", the rotation coefficient to "1.0", the rotation offset to "-90.0" and the offset along the Y-Axis to "1.5".

As we want no interaction with the people entities, leave all the check box in _Interaction_ unchecked. We leave also empty the _Tag_ field.


<img width="820" alt="Wizard-Properties-People" src="https://github.com/user-attachments/assets/41a605ed-270b-49d4-b631-9c12dbf4df0d" />


### Page 3 - Define the information about the player
#### Min (minimum number of players)
_How many players are required to run the simulation._

In this tutorial, we'll set this to **1**.

#### Maximum number of players
_Does an unlimited number of players can connect to the game?_

In this tutorial, we'll **check** this option, and set the maximum number of player to 1.

<img width="820" alt="Wizard-Properties-NumPlayer" src="https://github.com/user-attachments/assets/6c0b5389-359c-44bc-929e-3bbbcd388342" />


By clicking on "Player0" it is possible to set the property of the player. In particular how it is represented in GAMA and in Unity for the other players. As we are here defining a single player GAMA, we will keep the default value for the _Aspect in Unity_. Concerning the attributes, we define the following values:

#### Init location of the player
_Sets the initial location of Player0._

In this example, we'll set it to **{1100,1400, 300}**.

#### Player Size
_Player display size in GAMA._

In this tutorial, we'll set it to **100.0**.

#### Player color
_Player display color in GAMA._

In this tutorial, we keep the red color.

<img width="818" alt="Wizard-Properties-NumPlayer" src="https://github.com/user-attachments/assets/41db03f2-ac44-4c6c-adf6-ae741dcc17aa" />

### Finalizing
You can then click on finish to generate a new file: "traffic and Pollution-VR.gaml", which will be used to launch the VR version of the model (experiment vr_xp). If the file does not appear, refresh the folder (right click on the folder, then "refresh").

![ModelCreated](https://github.com/user-attachments/assets/8117e89d-03ac-4295-a182-4c6cfecbcdea)

You can now proceed to [Step 2](https://github.com/project-SIMPLE/simple.toolchain/wiki/04-Tutorial-%E2%80%90-Step-2)
