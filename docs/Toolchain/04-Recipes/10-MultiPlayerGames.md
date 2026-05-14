# Multi-player games

_**Link to the example model**_: [LinkToUnity/Models/Code Examples/Multi player game.gaml](https://github.com/project-SIMPLE/simple.toolchain/blob/2024-06/GAMA%20Plugin/gaml.extension.unity/models/LinkToUnity/Models/Code%20Examples/Multi%20player%20game.gaml)

![ezgif com-optimize-4](https://github.com/user-attachments/assets/4c85bd78-17d3-4a61-9f3f-4870954e69c0)

The general idea is to manage the interactions between players through GAMA.

* When a player « modify » the world, it sends a message to GAMA, then GAMA sends a message to all players to inform about this modification.
* Possibility to use a Unity Properties defined in GAMA to represent the other players through the use of the variable "player_unity_properties" of the Unity Linker.


<img width="1297" alt="Player_properties" src="https://github.com/user-attachments/assets/07ee1595-b92b-44fc-85d3-772eceec453d" />


As an example, we define an interaction where we let the players modify the color of pylon by their color through ray interaction.


**In GAMA**: we define an action in Unity Linker that changes the color of a given pylon and sends a message to all players about this change

```java
species unity_linker parent: abstract_unity_linker {
	[…]
	//action that will be called from unity with two argument: the id of the pylon selected, the player that change the color of the pylon
	action change_color(string id, string player) {
		//pylon that was selected
		pylon the_pylon <- pylon first_with (each.name = id) ;
		//player that triggers the action
		unity_player the_player <-  unity_player first_with (each.name = player) ;

		if (the_pylon != nil) {
			// change the color of the pylon agent
			the_pylon.color <- the_player.color;
			//send a massage to all the players to change the color of the given pylon for all the players
			do send_message players: unity_player as list mes: ["id"::id, "color"::[the_pylon.color.red,the_pylon.color.green,the_pylon.color.blue, the_pylon.color.alpha]];
		}
	}
}
```


**In Unity**: we define a new class to serialize the message from GAMA. The color is represented by a list of 4 values (red, green, blue, alpha):

```csharp
[System.Serializable]
public class ChangeColorMessage
{
    public string id;
    public List<int> color;

    public static ChangeColorMessage CreateFromJSON(string jsonString)
    {
        return JsonUtility.FromJson<ChangeColorMessage>(jsonString);
    }
}
```


**In Unity**: we add a new behavior in the method « other update » of the Simulation Manager to serialize the message and update the corresponding pylon color.

```csharp
//action activated at the end of the update phase (every frame)
 protected override void OtherUpdate() {
     if (message != null) {
            Color c = new Color32(BitConverter.GetBytes(message.color[0])[0], BitConverter.GetBytes(message.color[1])[0],
                    BitConverter.GetBytes(message.color[2])[0], BitConverter.GetBytes(message.color[3])[0]);

            […]
            GameObject obj = SelecableObjects[message.id];
            SimulationMultiPlayerExample.ChangeColor(obj, c);
            […]
            message = null;
        }
     }
```

**In Unity**: we define what will happens when a pylon is selected, i.e. a message is sent to GAMA to change the color of the pylon.

```csharp
protected override void SelectInteraction(SelectEnterEventArgs ev) {
    if (remainingTime <= 0.0)
    {
    GameObject obj = ev.interactableObject.transform.gameObject;
       if (("selectable").Equals(obj.tag)) {
           Dictionary<string, string> args = new Dictionary<string, string> {
          {"id", obj.name },
            {"player",ConnectionManager.Instance.GetConnectionId()}};

ConnectionManager.Instance.SendExecutableAsk("change_color", args);
        remainingTime = timeWithoutInteraction;
       }
    }
}
```
