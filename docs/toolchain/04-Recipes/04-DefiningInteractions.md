# Defining new interactions

### Step 1 - defining a new input action
Double click on "XRI Default Input Actions" in "Assets/Samples/XR Interaction Toolkit/2.4.3/Starter Assets"

<img width="1302" alt="InputAction" src="https://github.com/user-attachments/assets/c30b84ac-52e3-41ae-a34a-d2889f840e52" />

If the wanted input action is not present, you can define a new one: select one action map, then in action, right click and choose « add action ». Choose a new name for the action, then do the binding with the controller: in the Binding, define the path. For Meta quest 2/3, choose « Oculus Touch Controller », then one of the button/trigger/touch of the controller

<img width="1155" alt="NewInputAction" src="https://github.com/user-attachments/assets/b25e9b5e-b9d0-45d8-8515-c93fcc123059" />

### Step 2 - define the effects of this input action

Open the script « SimulationManagerInteraction » in (Assets/Scripts/Gama Provider/Simulation)


Add a new variable «  [SerializeField] protected InputActionReference myButton = null; »





Define in the OtherUpdate method what will happens when this action is triggered


### Step 3 - Do the link between the input action and the script
In the Scene, inspect the game object «Manager/Game Manager ».
Give a value for the variable « My Button » - Click on the circle on the right of the field, and search the input action wanted (for example, the one created in step 1).
<img width="933" alt="LinkInputAction" src="https://github.com/user-attachments/assets/41cfd39e-dff3-4a47-9de8-c71d4c1ca841" />
