# Step 2: Creation of the Unity basic game

## Prerequisites
Before starting this tutorial, please ensure:
* You have correctly installed Unity and the required modules: **[Installation Guide](https://github.com/project-SIMPLE/simple.toolchain/wiki/Unity-Installation-Guide)**.
* You are familiar with the editor's layout: **[Unity Interface Basics](https://github.com/project-SIMPLE/simple.toolchain/wiki/Unity%E2%80%90Interface%E2%80%90Basics)**.

---

## A. Project Setup

### 1. Import the Template
To start the game creation process, first clone or download the **[Simple Unity Template](https://github.com/project-SIMPLE/simple.toolchain/archive/refs/heads/Unity-6.zip)**.

1. Unzip the archive.
2. Open **Unity Hub**.
3. Click the **Add** button and select the unzipped `Unity Template` folder. **Note**: Make sure to import the _Unity Template_ folder (located inside _simple.toolchain-Unity-6_) and not the _simple.toolchain-Unity-6_ folder itself.

<img width="1282" alt="Unity Hub Add Project" src="https://github.com/user-attachments/assets/bb7eda8a-cd5c-462c-831b-2158c6a39d95" />

4. Once imported, **click on the project name** in the list to launch it.

---

## B. Scene Configuration

Once the project is open, the first step is to create a specific scene for the simulation.

### 1. Create the Scene
We want to establish a "decision maker" view from the sky. We will use a specific template for this.

1. Go to **File** > **New Scene** (or press `Ctrl+N` / `Cmd+N`).
 ![New Scene](https://github.com/user-attachments/assets/1b3f02ce-5aac-4c68-8227-d4c276876037)
2. Select the **"Main Scene - Sky View Player"** template.
 ![Main Scene - Sky View Player](https://github.com/user-attachments/assets/6b407147-61eb-49b8-923c-1045cb040eac)
3. Click **Create**.
4. **Save** your current scene immediately (**File** > **Save**).

### 2. Verification: Scene Loading

:::warning
Sometimes, Unity may not load all references correctly upon scene creation.
:::

**How to detect a loading error:**
You might encounter one of the two following issues immediately after creating the scene:

1. **Console Error:** A red error appears: `NullReferenceException: Object reference not set to an instance of an object`.
 <img width="1726" alt="Console Error" src="https://github.com/user-attachments/assets/0846d46d-76bd-456d-8bcd-dc92f79e6828" />
2. **Missing References:** If you select the **Manager** object in the Hierarchy, the **Player** and **Ground** fields in the Inspector show as "None" or empty.
 <img width="1510" alt="Missing References" src="https://github.com/user-attachments/assets/e0a33b6b-2a4d-489f-bdd1-b977fd5d8cb8" />

**To fix this issue:**
1. Go to the **Console** tab and click **Clear**.
2. Open a different scene (e.g., `Assets/Scenes/Code Examples/Limit Player Movement`).
3. **Re-open** your newly created scene.
4. The error should disappear, and the Manager references should now be correctly assigned.

### 3. Configuration: Middleware Connection
Once the scene is loaded correctly, you must verify the external connection settings.

1. Select the **Manager** object in the Hierarchy.
2. Locate the **Connection Manager** component in the Inspector.
3. **Crucial:** Ensure that the **Fixed Properties** checkbox is **enabled**.

:::danger
If `Fixed Properties` is not checked, the connection to the middleware will not function correctly.
:::

<img width="1466" alt="Fixed Properties" src="https://github.com/user-attachments/assets/37cd909d-8c66-4e72-86f8-7b377a1deee1" />

### 4. Troubleshooting: Lighting Warning
You may see a yellow warning in the Console stating:
> *"Lighting data asset 'LightingData' is incompatible with the current Unity version..."*

To fix this:
1. Go to **Window** > **Rendering** > **Lighting**.
 <img width="1728" alt="Lighting Menu" src="https://github.com/user-attachments/assets/97eb2dbe-9088-4955-8f9f-482032d38edf" />
2. In the Lighting window, click **Generate Lighting**.
 <img width="393" alt="Generate Lighting" src="https://github.com/user-attachments/assets/d0abba0e-9db5-4760-87f1-95d455e2a5e0" />
3. Wait for the process to finish, then **Clear** the Console.

---

## C. Gameplay Configuration

### 1. Game Manager: Tag Configuration
**Crucial Step:** Tags sent by the model must be explicitly defined in Unity to avoid synchronization issues.

To define a new tag:
1. Select **any** Game Object.
2. In the Inspector, click the **Tag** dropdown > **Add Tag...**
3. Click **+** and type the tag name.

:::note
For this tutorial, please add a new tag named **"road"** (case-sensitive).
:::

<img width="1022" alt="Add Tag" src="https://github.com/user-attachments/assets/38542af2-47f6-4ba1-827b-630e7d232c2d" />
<img width="1725" alt="Road Tag" src="https://github.com/user-attachments/assets/9fe51940-4b3b-4927-9e89-12ddd98184a2" />

### 2. SkyViewPlayer Configuration
We will use the **SkyViewPlayer** prefab. To improve navigation speed:

1. In the Hierarchy, expand **SkyViewPlayer**.
2. Select the child object named **Locomotion**.
3. In the Inspector, update the script values:
 * **Move Vertical Speed:** `20`
 * **Move Horizontal Speed:** `20`
 * **Rotation Speed:** `10`

<img width="1250" alt="Locomotion Settings" src="https://github.com/user-attachments/assets/894aa50e-5071-48a0-a429-f5b12a972449" />

---

## D. Testing the Model

You can run the simulation in two ways:
1. **VR Headset:** Build and deploy to the device.
2. **Unity Editor (Play Mode):** Runs directly on your computer.

:::info
**Simulator Requirement**
To control the player movements within the Unity Editor (Play Mode), you must use a **Simulator**. Note that on some platforms (like macOS), you may need to manually set it up.

**Please follow the instructions in the [Running a Model Game guide](https://github.com/project-SIMPLE/simple.toolchain/wiki/01-Running-a-model-game) to properly set up the simulator.**
:::

---

 **Next Step:** [Proceed to Step 3](https://github.com/project-SIMPLE/simple.toolchain/wiki/05-Tutorial-%E2%80%90-Step-3)