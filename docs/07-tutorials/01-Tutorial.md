---
sidebar_position: 3
title: "Step 1: Install the Unity Package"
sidebar_label: "1. Install Package"
description: Install the SIMPLE Unity Plugin and prepare the Unity scene.
---

# 1. Install the Unity Package

This chapter will show you how to install the SIMPLE Unity Package in a Unity project and prepare the
scene for GAMA communication.

## 1.1 Create and Open a Unity Project

Start by creating a new Unity project.

![Create a new Unity project](/static/img/simple-unity-plugin/tutorial/01-create-new-unity-project.png)

Check the choosen Unity version and Create project (you don't have to choose a perticular kind of project).

![Unity version and project creation](/static/img/simple-unity-plugin/tutorial/01-unity-version-create-project.png)

Wait until Unity finishes building the scene...

![Wait while Unity builds the preview](/static/img/simple-unity-plugin/tutorial/03-wait-preview-building.png)

After the project opens, you should be on the Unity home/editor screen.

![Unity project home](/static/img/simple-unity-plugin/tutorial/01-unity-home.png)

## 1.2 Install the Package...
### ...From GitHub

1. Open the Package Manager from Unity.

![Open Package Manager from Unity](/static/img/simple-unity-plugin/tutorial/Capture%20d'%C3%A9cran%202026-0dfgedfgdfg6-18%20161333.png)

![Package Manager add button](/static/img/simple-unity-plugin/tutorial/01-package-manager-add-button.png)


3. Click the **+** button.


5. Select **Add package from git URL...**.

6. Enter:

```text
https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git
```

To install a specific branch:

```text
https://github.com/project-SIMPLE/SIMPLE-Unity-Plugin.git#branch-name
```
![Add package from Git URL](/static/img/simple-unity-plugin/tutorial/01-package-manager-git-url.png)

7. After installation, the package should appear in the Package Manager.

![Package installed](/static/img/simple-unity-plugin/tutorial/01-package-installed.png)

### ...From Local Disk

For local development:

1. After clicking on **+** select **Add package from disk...**
2. Select the package `package.json` file from your local package folder.

## 1.3 Setup The Unity Scene

1. Open **GAMA > GAMA Panel**

![Open a new GAMA tab](/static/img/simple-unity-plugin/tutorial/Capture%20d'%C3%A9cran%2020fsfsdfsz26-06-18%20161411.png)

2. Click **Setup Scene**

![Setup Scene button](/static/img/simple-unity-plugin/tutorial/Capture%20d'%C3%A9cran%202026-06-18%20161833.png)


3. After a quick build...
![Unity project ready](/static/img/simple-unity-plugin/tutorial/01-unity-project-ready.png)

...your scene should contain every object needed to communicate with the middleware.
You can verify that the scene contains:
   - a player or camera rig;
   - a `Connection Manager`;
   - a `Game Manager`;
   - required scene roots for preview and runtime objects.

<img width="793" height="226" alt="image" src="https://github.com/user-attachments/assets/67e1f633-81e5-4654-9785-893460597e76" />


## Result

At the end of this chapter, Unity is ready to communicate with the middleware.
