# Installation Guide: Unity & Development Environment

This page documents the setup process for the project. Strict adherence to the versions listed below is required to avoid compatibility issues.

## 1. Prerequisites: Unity Hub

Before installing the editor, you must install the **Unity Hub**. This tool manages your Unity versions and project files.

1. Go to the [Unity Download Page](https://unity.com/download).
2. Download and install **Unity Hub**.
3. Launch the application and sign in with your Unity ID.

---

## 2. Installing Unity Editor

> [!IMPORTANT]
> **Required Version:** `Unity 6000.3.8f1`
>
> Please do not install a newer or older version unless explicitly instructed, as this may break project dependencies.

### Method A: Direct Install via Hub (If available)
1. Open Unity Hub.
2. Go to **Installs** > **Install Editor**.
3. Check the "Official Releases" tab.
4. If version `6000.3.8f1` is listed, select it and proceed to **Section 3**.

### Method B: Via Download Archive (Recommended)
If the version is not proposed by default in the Hub, you must use the archive link.

1. Visit the **[Unity Download Archive](https://unity.com/releases/editor/archive)**.
2. Select the **Unity 6** tab and ensure you are looking at **LTS** releases.

<img width="865"  alt="Capture d’écran 2026-02-13 à 10 32 05" src="https://github.com/user-attachments/assets/347cb4fc-83ad-4ffd-96db-ab1d98354bb8" />



3. Scroll down to find **Unity 6000.3.8f1**.
4. Click the blue **Install** button next to that version and accept to open it with Unity Hub
5. This will trigger the installation wizard inside your Unity Hub.

---

## 3. Module Configuration

During the installation window (or by clicking the ⚙️ gear icon on an existing install -> *Add Modules*), you must select the following components:

### 📱 Android Build Support
You **must** expand the arrow next to "Android Build Support" and check the sub-tools:

- [x] **Android Build Support**
  - [x] **OpenJDK**
  - [x] **Android SDK & NDK Tools**

### 💻 Development Tools
- [x] **Visual Studio Code**

> [!NOTE]
> If Visual Studio Code is not listed in the "Dev Tools" section, install it manually from [code.visualstudio.com](https://code.visualstudio.com/).

---

## 4. Troubleshooting

### ⚠️ "Android SDK/NDK path not found"
If Unity complains about missing Android tools despite having installed the modules:

1. Open the project in Unity.
2. Go to **Edit** > **Preferences** (Windows) or **Unity** > **Settings** (Mac).
3. Navigate to **External Tools**.
4. Scroll to the **Android** section.
5. **Uncheck** and then **Recheck** the boxes for:
   - "JDK Installed with Unity"
   - "Android SDK Tools Installed with Unity"
   - "Android NDK Installed with Unity"
6. This forces Unity to refresh the internal file paths.

### ⚠️ VS Code IntelliSense not working
If code autocompletion is missing:

1. In Unity, go to **Edit** > **Preferences** > **External Tools**.
2. Set "External Script Editor" to **Visual Studio Code**.
3. Click **Regenerate project files**.
4. Inside VS Code, ensure you have the **C# Dev Kit** extension installed.