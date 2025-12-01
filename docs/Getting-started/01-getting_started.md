-+# Installating the platform's dependencies  

In order to be able to run the web platform, you need to ensure you have all prerequisite dependencies:


### Installing Node


Visit the [official Node.js website](https://nodejs.org/en/download) and download the installer for your operating system.

**Step 2: Execute the installation wizard**

Run the installer and follow the on-screen prompts.

:::info

To verify that node was correctly installed, you can use the command

```
node -v 
```
Node.js 22.10.1 or later is required
:::


### Android Debug Bridge (ADB) {#adb-installation-instructions} 

ADB enables command-line interaction between the host system and Android devices, including VR headsets.
It is also required when displaying the headsets streams on the application.

<details>
  <summary>  **Installation via Homebrew (macOS Only)**</summary>

If your system is running macOS, you may use the package manager Homebrew, which makes the installation a bit more convenient:

**Prerequisites:** You can check how to install Homebrew by following the installation instructions [here](https://brew.sh/)

**Installation command:**
```
brew install android-platform-tools
```

</details>






### **Manual Installation**

**Step 1: Download the platform-specific ADB package**

Navigate to the [official Android Platform Tools repository](https://developer.android.com/tools/releases/platform-tools) and download the appropriate version for your operating system.

**Step 2: Extract the archive**

Extract the downloaded file to a permanent location:

* macOS/Linux: `/usr/local/platform-tools/`  
* Windows: `C:\platform-tools\`

**Step 3: Configure system PATH**
In order to make ADB usable by the terminal of your system, you must add the path leading to its folders to the PATH environment variable.
Below are the instructions on how to do this:
<details>
  <summary>**macOS/Linux:**</summary>

```
echo 'export PATH=$PATH:/path/to/platform-tools' \>\> \~/.zshrc  
source \~/.zshrc
```



</details>



<details>
  <summary>**Windows**</summary>

1. Press Windows Key and search for "Edit the system environment variables"  
2. Click "Environment Variables"  
3. Under "User variables", double-click "Path"  
4. Click "New" and add the full path to your platform-tools directory  
5. Click "OK" to confirm all dialogs  
6. Restart all terminal sessions


</details>

:::info
You can check that the adb is reachable by your computer by using the following command in your terminal:
```
adb version
```
:::



### Installing the GAMA platform
--- 
**Download and install GAMA**

Download from the [official GAMA website](https://gama-platform.org/download)

Refer to the [installation documentation](https://gama-platform.org/wiki/next/Installation#download-gama) for detailed instructions.

**Step 2: Configure network settings (if required)**

Default WebSocket configuration:

* Address: `localhost`  
* Port: `1000`

To modify these settings:

1. Navigate to Support → Preferences → Network → Server Mode  
2. Adjust the port configuration as needed

**Important:** Ensure the web platform's `GAMA_WS_PORT` and `GAMA_IP_ADDRESS` environment variables match your GAMA configuration.

**Step 3: Install the SIMPLE web platform plugin**

Follow the instructions in the [GAMA Plugin Repository](https://github.com/project-SIMPLE/simple.toolchain/tree/Unity-6/GAMA%20Plugin)


---

With all the dependencies installed, check out you may proceed to the configuration of the web application

