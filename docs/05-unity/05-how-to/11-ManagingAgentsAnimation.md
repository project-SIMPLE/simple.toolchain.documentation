# Management of agents’ animation

_**Link to the example model**_: [LinkToUnity/Models/Code Examples/Manage Animation for Agents.gaml](https://github.com/project-SIMPLE/simple.toolchain/blob/2024-06/GAMA%20Plugin/gaml.extension.unity/models/LinkToUnity/Models/Code%20Examples/Manage%20Animation%20for%20Agents.gaml)

![ezgif com-optimize-3](https://github.com/user-attachments/assets/f34c7507-2b87-4687-b46b-3fa05d626d11)

The general principle is to modify from GAMA the parameters of an animator or sent triggers to it. It works both for geometries/agents (sent to Unity using add_geometries_to_send) and other player agents (player_unity_properties).

<img width="756" alt="Animation" src="https://github.com/user-attachments/assets/67b8de21-31ac-4275-af36-90fb6e65f828" />


The triggering of an animation is done using the action "update_animation" of the Unity Linker.

```gaml
ask unity_linker {
	do update_animation(
		players: unity_player as list, //list of players to send the information to
		geometries: boy_agent, //list of geometries/agents to update the geometry to - these agents should have been sent to Unity using add_geometries_to_send
		parameters: ["MoveSpeed":: 1.0], //list of parameters to send to trigger animation - key(string): name of the parameter, value: either a float, an integer or a boolean
		triggers: []//list of triggers (string)
	);
}
```
