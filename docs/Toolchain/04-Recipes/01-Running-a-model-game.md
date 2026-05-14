# 🚀 Running the Model / Game

## 📋 Prerequisites

Before starting, ensure you have:
1.  A **GAMA model** adapted for VR.
2.  A **Unity project** with a scene containing the necessary prefabs to connect to GAMA.

> [!TIP]
> See the [**Tutorial: From GAMA to Virtual Universe**](https://github.com/project-SIMPLE/simple.toolchain/wiki/02-Tutorial-%E2%80%90-From-GAMA-model-to-Virtual-Universe-%E2%80%90-case-of-a-traffic-model) for details on designing the GAMA model and Unity project.

---

## ⚙️ Middleware Setup (Required)

Regardless of whether you run the game in the Editor or on a Headset, the middleware must be running **before** you start the Unity application.

1.  **Download:** Get the middleware [here](https://github.com/project-SIMPLE/simple.webplatform/archive/refs/heads/main.zip).
2.  **Configuration Files:** The SIMPLE tool generates two files when creating a VR Gaml file:
    * `settings.json`: Model execution conditions.
    * `.env`: Configuration for the modeler's workspace.
3.  **Installation:**
    * Copy the generated `.env` file (located in your project folder) into the **root folder** of the middleware.
    * For detailed installation instructions, refer to the [Middleware Wiki](https://github.com/project-SIMPLE/GamaServerMiddleware).

---

## 🎮 Option A: Running from Unity (Play Mode)

This method is best for development and testing.

### Step 1: Start the Environment
1.  **Run GAMA.**
2.  **Run the Middleware.** (See [Getting Started](https://github.com/project-SIMPLE/simple.webplatform?tab=readme-ov-file#getting-started-%EF%B8%8F)).
    <img width="682" alt="Middleware Terminal" src="https://github.com/user-attachments/assets/c214e66f-8395-43dd-9d8c-20ae274c742f" />
3.  Open your browser and go to: [http://localhost:8000/](http://localhost:8000/).
4.  **Select the Game:** Click on your project name in the web interface (e.g., `traffic_model_VR`).

<img width="1454" alt="Middleware Interface" src="https://github.com/user-attachments/assets/b2d72c71-565a-454d-81ac-2b1e6d3342c8" />

> [!NOTE]
> Ensure your `.env` file is correctly configured (either automatically via the generated file or manually using the `EXTRA_LEARNING_PACKAGE_PATH` variable).

### Step 2: Play in Unity
1.  Open the relevant Scene in Unity (it must contain a **Connection Manager** and a **Game Manager**).
    * *Example:* `Scenes/Code Examples/Receive Static Data`.
2.  Click the ▶️ **Play** button.

![Unity Play Button](https://github.com/user-attachments/assets/836a87b0-eef2-4d48-be25-397c0872c5a4)

---

### 🛠️ Using the XR Device Simulator
If you do not have a headset connected to the PC, you can simulate VR inputs using the keyboard and mouse.

#### 1. Setup
1.  In the **Project Explorer**, search for `simulator`.
    <img width="1250" alt="Search Simulator" src="https://github.com/user-attachments/assets/d9df7889-302f-4082-995f-e43318d7c019" />
2.  Drag and drop the **XR Device Simulator** prefab into your hierarchy.
    <img width="1250" alt="Drag Simulator" src="https://github.com/user-attachments/assets/366e04c3-7c13-4b42-a50e-8aa87f362cba" />

#### 2. Configuration
To move faster in the scene, adjust the sensitivity in the Inspector:
* Look for **Keyboard X / Y / Z Translate Speed**.
* Set values to **20** for faster navigation.

<img width="1250" alt="Simulator Settings" src="https://github.com/user-attachments/assets/69d1b674-82e1-4df3-a653-d1bbbde3f7a5" />

#### 3. Controls
Once inside Play Mode, use the following controls:

| Action | Controls |
| :--- | :--- |
| **Move Horizontal** | `W`/`A`/`S`/`D` (or `Z`/`Q`/`S`/`D` depending on layout) |
| **Move Vertical** | `E` (Up) / `Q` or `A` (Down) |
| **Look Around** | Hold **Right Mouse Button** + Move Mouse |
| **Toggle Controller** | Press `Y` to toggle the Right Controller |
| **Trigger Action** | Press `G` (while controller is active) |

> [!WARNING]
> **Remove the Simulator before Building!**
> The XR Device Simulator is for editor testing only. You **must delete** it from the scene before building the application for a real headset.

---

## 🥽 Option B: Running from a Headset (Standalone)

To run the simulation directly on a standalone headset (like a Meta Quest), follow these steps.

### Step 1: Network Configuration
1.  Ensure your **PC** (running GAMA) and your **Headset** are connected to the **same Wi-Fi network**.
2.  In Unity, select the **Manager / Connection Manager** object.
3.  In the Inspector:
    * Check **Fixed Properties**.
    * In the **Default IP** field, replace `localhost` with your **PC's Local IP Address** (e.g., `192.168.1.x`).

### Step 2: Build and Export
1.  Go to **File** > **Build Profiles**.
    <img width="1136" alt="Build Profiles" src="https://github.com/user-attachments/assets/c76b6ac6-7baa-4022-aef2-7baaf7725060" />
2.  Select **Android** and click **Switch Platform** (this may take a few minutes).
    <img width="793" alt="Switch Platform" src="https://github.com/user-attachments/assets/ea77b928-ce1e-483c-a100-4b6eb0296eb3" />
3.  Click **Open Scene List** and ensure your main scene is checked. If missing, open the scene and click **Add Open Scenes**.
    <img width="837" alt="Scene List" src="https://github.com/user-attachments/assets/ab095509-999f-40aa-b0bd-65777323417d" />

### Step 3: Deploy to Headset
1.  Connect your headset to the PC via USB-C.
2.  Accept any USB debugging authorizations inside the headset.
    * *Note: Your headset must be in [Developer Mode](https://knowledge.vr-expert.com/kb/how-to-activate-developer-mode-on-the-meta-quest-3/).*
3.  In Unity, click **Build and Run**.
4.  Select a folder to save the `.apk` file.

### Step 4: Launching on Headset
* If the app doesn't launch automatically:
    1.  Put on the headset.
    2.  Go to your App Library.
    3.  Select the filter dropdown (usually says "All").
    4.  Select **Unknown Sources**.
    5.  Click on your application name.