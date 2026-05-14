# Sending and receiving messages from/to GAMA/Unity

_**Link to the example model**_: [LinkToUnity/Models/Code Examples/Send Receive Messages.gaml](https://github.com/project-SIMPLE/simple.toolchain/blob/2024-06/GAMA%20Plugin/gaml.extension.unity/models/LinkToUnity/Models/Code%20Examples/Send%20Receive%20Messages.gaml)

The SIMPLE toolkit allows to send a message from GAMA to Unity and a message from Unity to GAMA.

### Sending a message from GAMA to Unity

Sending a message from GAMA to Unity requires to use the action `send_message` of the Unity_linker agent. The message should be a map (key: name of the attribute; value: value of this attribute). The name of the attribute should be the same as the variable in the serialized class in Unity (c# script)


For example, to send a message to a all the players that contains the current cycle of the simulation, we can use:

```java
do send_message players: unity_player as list mes: ["cycle":: cycle];
```

In Unity, a serialized class in Unity has to be defined to serialize (decrypt) the message:

```csharp
[System.Serializable]

public class GAMAMessage
{
    public int cycle;

    public static GAMAMessage CreateFromJSON(string jsonString)
    {
        return JsonUtility.FromJson<GAMAMessage>(jsonString);
    }

}
```

Then the message can be received in the SimulationManager class:

```csharp
public class SendReceiveMessageExample : SimulationManager
{

 GAMAMessage message = null;

//allow to serialize the message as GAMAMessage object
protected override void ManageOtherMessages(string content)
 {
     message = GAMAMessage.CreateFromJSON(content);
 }

//action activated at the end of the update phase (every frame)
 protected override void OtherUpdate()
 {
     // if a message was received, display in the console the content of the message
     if (message != null)
        {
            Debug.Log("received from GAMA: cycle " + message.cycle);
            message = null;
        }
     }
}
```

### Sending a message from Unity to GAMA
The principle is to call from Unity an action defined in the Unity Linker.

For example, we define in GAMA, in the unity_linker species a new action called "receive_message" that just display in the console the id of the player sending the message and the content of it:

```java
species unity_linker parent: abstract_unity_linker {
	//action that will be called by the Unity player to send a message to the GAMA simulation
	action receive_message (string id, string mes) {
		write "Player " + id + " send the message: " + mes;
	}
}
```

Then, in the SimulationManager of Unity, we ask the unity_linker to call this action with the corresponding arguments:

```csharp
protected override void OtherUpdate()
 {

     if (IsGameState(GameState.GAME))
     {
        string mes = "A message from Unity at time: " + Time.time;
         //call the action "receive_message" from the unity_linker agent with two arguments: the id of the player and a message
         Dictionary<string, string> args = new Dictionary<string, string> {
         {"id",ConnectionManager.Instance.getUseMiddleware() ? ConnectionManager.Instance.GetConnectionId()  : ("\"" + ConnectionManager.Instance.GetConnectionId() +  "\"") },
         {"mes",  mes }};

            Debug.Log("sent to GAMA: " + mes);
         ConnectionManager.Instance.SendExecutableAsk("receive_message", args);
     }
}
```
