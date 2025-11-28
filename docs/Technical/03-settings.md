# Understanding the settings.json file

The settings.json file is an essential file allowing the web platform to detect and interact with Gama simulations. <br/>

The minimum for one simulation is as follows:
## settings.json

```json
{

  "type": "json_settings",

  "name": "Quang Binh Flood Project",

  "model_file_path": "./models/version 2/Flooding VR.gaml",

  "experiment_name": "Launch",

  "minimal_players": "0",

  "maximal_players": "1",

  "selected_monitoring": "gama_screen"

}
```

####  Field Reference

| Field                 | Type   | Required | Description                                                                           |
| :-------------------- | :----- | :------- | :------------------------------------------------------------------------------------ |
| `type`                | String | Yes      | Must be `"json_settings"` for standard configuration                                  |
| `name`                | String | Yes      | Display name shown in simulation selector                                             |
| `splashscreen`        | String | No       | Path to preview image (PNG recommended). Shows placeholder if omitted                 |
| `model_file_path`     | String | Yes      | Path to `.gaml` file (relative to the position of the settings.json file or absolute) |
| `experiment_name`     | String | Yes      | Name of experiment to launch within the model                                         |
| `minimal_players`     | String | Yes      | Minimum headset count suggested for the simulation                                    |
| `maximal_players`     | String | Yes      | Maximum players suggested for the simulation displayed in the web application         |
| `selected_monitoring` | String | Yes      | Display mode: `"gama_screen"` or `"shared_screen"`. currently unused                  |

####  Catalog Configuration
When dealing with cases with a lot of simulation, the application uses the structure ```catalog``` to avoid having too many simulations to be displayed in the main page.



## Catalog structure example
```json
{

  "name": "Simple Toolchain",

  "type": "catalog",

  "splashscreen": "learning-packages/demo/splashscreen/demoOne.png",

  "entries": [

    {

      "type": "json_settings",

      "name": "Single-player game",

      "splashscreen": "./includes/splashscreen/screen.png",

      "model_file_path": "./Models/Demo/SimplePlayerGame/DemoModelVR.gaml",

      "experiment_name": "vr_xp",

      "minimal_players": "0",

      "maximal_players": "1",

      "selected_monitoring": "gama_screen"

    },

    {

      "type": "json_settings",

      "name": "Multi-player game",

      "model_file_path": "./Models/Demo/MultiPlayerGame/DemoModelVR.gaml",

      "experiment_name": "vr_multi",

      "minimal_players": "2",

      "maximal_players": "4",

      "selected_monitoring": "shared_screen"

    }

 ]

}
```

The catalog structure will allow you to create a folder like interface within the application. You can insert a catalog inside of another catalog to have nested folders, and a hierarchical organisation of your projects.

  

#### Path Resolution
When using paths in the settings.json file, you can use either relative or absolute paths. 
Relative paths are resolved from the location of the settings.json file.

 **Splashscreen**

If you wish to add a picture to illustrate your experiment, you can use pictures of dimension 100*100 pixels, in format jpg or png.