## Defining new interactions

Step 1 - defining a new input action

Double click on « XRI Default Input Actions » in 
Assets/Samples/XR Interaction Toolkit/2.4.3/Starter Assets

If the wanted input action is not present, you can define a new one: select one action map, then in action, right click and choose « add action ».  Choose a new name for the action, then do the binding with the controller: in the Binding, define the path. For Meta quest 2/3, choose « Oculus Touch Controller », then one of the button/trigger/touch of the controller


Step 2 - define the effects of this input action 

Open the script « SimulationManagerInteraction » in (Assets/Scripts/Gama Provider/Simulation)
Add a new variable «  [SerializeField] protected InputActionReference myButton = null; »


Step 3 - Do the link between the input action and the script
In the Scene, inspect the game object «Manager/Game Manager ».
Give a value for the variable « My Button » - Click on the circle on the right of the field, and search the input action wanted (for example, the one created in step 1).

