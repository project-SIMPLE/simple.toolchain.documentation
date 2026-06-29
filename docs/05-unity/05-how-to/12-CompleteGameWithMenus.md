# Complete Game with Menus

The SIMPLE Unity Plugin provides menu scenes as an optional Package Manager sample.

Import the **Menu Scenes** sample from the package details panel to add:

- **Startup Menu**: start page of the application, with access to the IP menu;
- **IP Menu**: lets the user enter the IP address of the computer running
  `simple.webplatform`;
- **End of Game Menu**: displays an end message and allows the user to restart.

<img width="561" alt="Menus" src="https://github.com/user-attachments/assets/24f704d9-195d-4fa7-ab7f-03195828a4c4" />

## Build Settings

After importing the sample scenes:

1. Open **File > Build Profiles**.
2. Open the scene list.
3. Add the menu scenes.
4. Put **Startup Menu** first in the list.

<img width="832" alt="Build_withMenu" src="https://github.com/user-attachments/assets/eec4368b-f9cf-496f-8a24-89c612f30f6a" />

If you use the **IP Menu** scene, make sure `Fixed Properties` is disabled on the
`Connection Manager` so the runtime IP can be entered by the player.

## End of Game

To load the end-of-game menu, use the `end_of_game` action from the Unity Linker on
the GAMA side:

```gaml
reflex end_of_game when: empty(token) {
    map<string, int> ranking <- rank();
    string mes <- "";
    loop i from: 1 to: int(max(ranking.values)) {
        list<string> pls <- ranking.keys where (ranking[each] = i);
        loop p over: pls {
            mes <- mes + "\n " + i + ") " + p + " - score: " + score_players[p];
        }
    }
    do end_of_game(mes);
}
```
