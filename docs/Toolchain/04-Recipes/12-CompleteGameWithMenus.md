# Complete game with menus

3 Scenes with a menu are provided with the SIMPLE Unity Template:
* **Startup Menu**: allows to define the starting page of the game, with the possibility to start the game, choose to use or not the middleware and to set the IP (loading of the IP Menu Scene).
* **IP Menu**: allows to set the IP of the Computer running GAMA (or the middleware) through a virtual keyboard.
* **End of Game Menu**: allows to restart the game and to display a last message to the player (i.e. final score, ranking, etc.)

<img width="561" alt="Menus" src="https://github.com/user-attachments/assets/24f704d9-195d-4fa7-ab7f-03195828a4c4" />


To use them: add them (and check them) in the Build Settings. The « Startup Menu » scene should be first Scene (0 - you can drag and drop the Scene to change the order).

<img width="832" alt="Build_withMenu" src="https://github.com/user-attachments/assets/eec4368b-f9cf-496f-8a24-89c612f30f6a" />


If your are using the « IP Menu » Scene, uncheck « Fixed Properties » in the Connection Manager.


For loading the End of Scene Menu, just use the « end_of_game » action of the Unity Linker:

```java
reflex end_of_game when: empty(token) {
	map<string, int> ranking <- rank();
	string mes <- "";
	loop i from: 1 to: int(max(ranking.values)) {
		list<string> pls <- ranking.keys where (ranking[each] = i);
		loop p over: pls {
			mes <- mes + "\n  " + i + ") " + p + " - score: " + score_players[p];
		}
	}
	do end_of_game(mes);
}
```
