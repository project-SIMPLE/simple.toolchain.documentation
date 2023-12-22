# Rac VR

## Installation

1. The project requires GAMA version 1.9.3 (to download, go to https://github.com/gama-platform/gama/releases/tag/1.9.3 and select the version corresponding to your operating system)
1. Download one of the released project on https://github.com/ACROSS-Lab/Rac-VR/releases
1. Download the "Jaldi" font in your operating system.

## Set-up to do before the demo:

### Oculus Headset:

* **In the headset, go in the applications menu after pressing the Oculus button. Click on the menu in the upper right corner and press "Unknown sources".**
You will see the "Testing_VR" application. Click on it to launch the application. If the application crashes or if you have an unsolvable issue, press the oculus button and quit the application, then you can restart it by doing the steps mentioned before.
(Video:https://drive.google.com/file/d/1nwXXhnW-Cj_hPuwVLIjbUTOlgYZzXKK3/view?usp=share_link )

### GAMA:

1. **Launch "UI_solo.gaml" in the "models/Experiments" folder in GAMA.**
2. **Select Demo_02 and the desired language on the menu. Then press "Ok".** 

![](/img/RacVR/gama2.jpg)

3. **Press "play".** It will display the flow of water. 

![](/img/RacVR/gama3.jpg)

## Beginning of the demo:

1. **Press the button "next" on the GAMA interface to start the simulation.**
While the simulation is running, you can explain what is shown (the map, the charts…). 

![](/img/RacVR/demo1.jpg)

2. **When the simulation ends, you can explain the objectives of the game: keep the ecolabel, speak to the grandma, clean the trash etc.**
It is easier when people already know what they will do before they put on the VR headset. Indeed, you really lose the player's attention when they are in VR because of all the sensitive elements inside. 

3. **Explain how to move with joysticks before they are putting on the headset**
There are two ways: With the **left hand controller**, you can use the joystick to move in a similar way to usual video games (note: the movement is slow and can cause dizziness for some persons). With the **right hand controller**, you aim the point where you want to move to by pushing the joystick forward. When you are on the desired point you release the joystick (you can compare this way with the moving control on Google Earth). 

| ![](/img/RacVR/demo3.1.png) | ![](/img/RacVR/demo3.2.png) |
|---|---|

4. **Once the one year simulation is done, press on the button "Next" to display the mini map of the VR environment** (note: it is during this phase that GAMA is waiting for the connection with unity).
Maybe it’s interesting to show the map a bit, it will be easier for the player to understand the possibility by showing him the environment size. 

![](/img/RacVR/demo4.1.jpg)

End of computing stage. Press the button next to go to the VR phase. 

![](/img/RacVR/demo4.2.jpg)

VR phase. After pressing the next button in the computing stage, Gama will enter in the VR phase. Note that the next button cannot be pressed until gama is connected to the oculus headset.

5. **The player can put on the headset and confirm if all is set. He follows a short tutorial and must aim at the "Play" button with the controllers.** 
GAMA and Unity connect to each other when the player clicks on "Play". In GAMA, you will know if the connection has been established, when the player icon on the mini map moves and follows the player’s movements in the virtual environment. 

![](/img/RacVR/demo5.png)

6. **The player can begin to play: first, he must speak with the grandma who will ask him to collect waste, then he can begin to collect the waste.** 
The player passes the dialogue by pushing on the arrow with the backside trigger. He has to pass all the dialogue to be able to collect the waste.

7. **He has 1min30 to collect a maximum of 20 trash. To collect the trash, players have to aim at a group of trash, which turns blue, and press the trigger** (button on the right handle, pressed with the middle finger) **to make it disappear. When the 1m30 is over or when players have already finished before the time runs out, the player is teleported in front of the NPC. Then, the player has to talk a last time to the NPC, after the dialogue, the VR part is finished.**
Usually, players do not really explore the map so it will be nice if you push them to explore the map to see some point of view (rice field, riverbank…).

8. **Click on Next to start playing the simulation for the next year.** Then, the player sees if he keeps the ecolabel .

9. **Repeat.** The game in the VR will restart automatically, but not the GAMA simulation. If you want to play the experiment with a new participant, you should reload the experiment in GAMA (in the "Experiment" window, click on "Reload Experiment"). 

![](/img/RacVR/demo9.jpg)

## Information on the GAMA interface:

* The spheres displayed on the map that move along the canals allow to show the direction of the water flow. 

![](/img/RacVR/info1.jpg)

* On the map, the productivity level of each field is displayed (from green to yellow for bad productivity). 

![](/img/RacVR/info2.jpg)

* From the left to the right chart: productivity, pollution, wastewater, solid waste. 

![](/img/RacVR/info3.jpg)

* The eye button on the right allows to show/hide the pollution and productivity per village. 

| ![](/img/RacVR/info4.1.png) | ![](/img/RacVR/info4.2.png) |
|---|---|

## General remarks:
* Oculus headsets discharge quickly. Don’t forget to charge them when not in use.
* The blue boundary mesh will stay visible as long as neither controller is in the area. If you want to run the demo with only one controller, either disconnect or remove the battery of the unused controller.
