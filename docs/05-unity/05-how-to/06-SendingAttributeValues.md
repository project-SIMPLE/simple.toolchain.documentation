# Sending attribute values linked to agents/geometries from GAMA

_**Example model**_: use the matching GAMA code example for sending dynamic data.
The Unity package contains the Unity-side package, samples, and scripts; the `.gaml`
models are maintained on the GAMA/SIMPLE side.

The SIMPLE toolkit allows to send the values of attributes linked to geometries/agents

For example, to send the value of the attribute _type_ linked to the dynamic_punctual_agent species:

```java
species dynamic_punctual_agent parent: moving_agent{
  int type <- rnd(2);
}
```

To do this, we first have to send in GAMA the values for each agent of the attribute with the *add_geometries_to_send* action. Attributes as to be sent as a map with key: the name of the attributes, value: the list of values of the attributes for each agent.


```java
reflex send_agents when: not empty(unity_player) {

    // add attributes to send to Unity. We send one attribute "type" for the dynamic_punctual_agent agents,
    // that will have for name "type" in uniy and which is an integer (between 0 and 2 for each dynamic_punctual_agent).
    // get the value of type for each agent.
    list<int> type_agents <- dynamic_punctual_agent collect each.type;
    //put this list value in a map (several attributes can be send at the same time).
    map<string,list<int>> atts <- ["type":: type_agents];

    //at every step, we send the dynamic_punctual_agent agents with the up_car properties and the attributes "atts"
    do add_geometries_to_send(dynamic_punctual_agent,up_car,atts);

    //we want to keep the dynamic_geometry_agent in their current state in Unity, so we add them in the geometries_to_keep list
    do add_geometries_to_keep(dynamic_geometry_agent);
  }

```

In the current package, the `Attributes` class is provided by:

```text
Packages/com.project-simple.unity-plugin/Runtime/Serialization/Attributes.cs
```

The package already stores arbitrary attributes received from GAMA. For the common
`type` attribute, the class still exposes a `type` field:

```csharp
[System.Serializable]
public class Attributes
{
    public int type;
}
```


Then, in a Unity script that inherits from `SimulationManager`, override
`ManageAttributes`. In this example, we change the color of the corresponding game
object according to the value of the _type_ attribute.

```csharp
public class ReceiveDynamicDataExample : SimulationManager
{

    // read the attributes send by GAMA and use it to define the color of the car objects
    protected override void ManageAttributes(List<Attributes> attributes)
    {
        for (int i = 0; i < infoWorld.names.Count; i++)
        {
            string name = infoWorld.names[i];
            int type = attributes[i].type;
            List<object> o = geometryMap[name];
            GameObject obj = (GameObject)o[0];
            if (type == 0)
            {
                ChangeColor(obj, Color.white);
            }
            else if (type == 1)
            {
                ChangeColor(obj, Color.blue);
            }
            else if (type == 2)
            {
                ChangeColor(obj, Color.red);
            }
        }

    }
}
```

For visual mappings that only change colors, prefer the package's dynamic color
settings when possible. See [Dynamic Colors](./14-DynamicColors.md).
