# Operator Guide

This guide covers everything a teacher or session facilitator needs to run a SIMPLE session end-to-end: starting GAMA, preparing headsets, running a simulation from the web UI, monitoring students, and ending the session cleanly.

---

## How the Platform Works

A SIMPLE session involves three components working together:

- **GAMA** — runs the simulation model on the operator's computer
- **SIMPLE web platform** — the web application (running on the operator's computer) that controls GAMA, manages headset connections, and streams headset screens
- **VR headsets (Meta Quest)** — worn by students; each headset runs the VR app for the current Virtual Universe

All three must be running at the same time during a session.

---

## Before the Session

Make sure the following are installed and ready:
- GAMA with the SIMPLE plugin
- The SIMPLE web platform (`npm install` already done)
- The Virtual Universe folder installed in the `learning-packages` directory
- All headsets charged and the VR app installed on each headset

---

## 1. Start GAMA

1. Open GAMA on the operator's computer.
2. In the GAMA interface, open the experiment file for the Virtual Universe you want to run (a `.gaml` file in the VU folder, typically under `models/`).
3. The simulation is ready but not yet started — GAMA will wait for the web platform to trigger the launch.

<!-- TODO: Add screenshot of GAMA with a simulation model loaded and ready -->
<!-- Screenshot description: The GAMA platform interface with a loaded experiment file, showing the experiment control panel with the Play/Stop buttons and the simulation model name visible. The experiment should be in a stopped/ready state. -->

:::warning
The web platform must be able to reach GAMA over the network. Make sure the `GAMA_IP_ADDRESS` and `GAMA_WS_PORT` values in your `.env` match what GAMA is configured to use (check in GAMA: **Support → Preferences → Server**).
:::

---

## 2. Start the Web Platform

In a terminal, from the platform folder:

```bash
npm start
```

Then open your browser and navigate to `http://localhost:8000`.

<!-- TODO: Add screenshot of the web platform simulation selector page -->
<!-- Screenshot description: The SIMPLE web platform main page (simulation selector) showing a grid of Virtual Universe cards, each with a splashscreen image, name, and player count. The platform is connected to GAMA (status indicator shows connected). -->

If the platform cannot connect to GAMA, a connection error will be shown. Verify GAMA is open and running before proceeding.

---

## 3. Prepare the Headsets

### Power on the headsets

Turn on each Meta Quest headset. Ensure they connect to the same WiFi network as the operator's computer.

### Launch the VR application

On each headset:

1. Press the **Oculus button** on the right controller to open the menu.
2. Go to **Library → Unknown Sources**.
3. Find and launch the VR application for the current Virtual Universe.

<!-- TODO: Add screenshot of the Meta Quest Unknown Sources library -->
<!-- Screenshot description: The Meta Quest headset interface showing the Library → Unknown Sources section with the VR application icon visible and ready to launch. -->

The application will display a waiting screen until the operator launches the experiment from the web platform.

<!-- TODO: Add screenshot of the VR application waiting screen on the headset -->
<!-- Screenshot description: The VR application running on the Meta Quest headset, showing a loading or waiting screen with the application name, indicating it is waiting for a GAMA connection. -->

:::tip
If a headset does not appear in the web platform after a few moments, check that its IP address is reachable and listed in `HEADSETS_IPS` in your `.env`. See the [headset configuration guide](../../Tools/MetaQuest/headset-config.md).
:::

---

## 4. Select and Launch a Simulation

Once GAMA is running and the headsets are on:

1. In the web platform, the simulation selector shows all available Virtual Universes. Click the one you want to run.

<!-- TODO: Add screenshot of the simulation control panel before launch -->
<!-- Screenshot description: The SimulationManager control panel showing the selected simulation name, the list of detected headsets with their colored identifiers and "Connected" green status, and the Launch button ready to be clicked. -->

2. Verify the headsets you expect are listed with a **green Connected** status.
3. Click **Launch** to send the experiment to GAMA and start it.
4. Once GAMA confirms the experiment is running, all connected headsets are added to the simulation automatically and students enter the VR experience.

<!-- TODO: Add screenshot of the simulation control panel after launch -->
<!-- Screenshot description: The SimulationManager control panel with the simulation running, showing headsets in "In game" (green) status, and the Pause and Stop buttons available. -->

---

## 5. Monitor the Session

### Headset status indicators

Each headset entry in the control panel shows one of three states:

| Indicator | Meaning |
|-----------|---------|
| Green — *Connected* | Headset is connected to the platform via ADB and WebSocket |
| Green — *In game* | Headset is connected and the student is inside the VR experience |
| Red — *Disconnected* | The connection to this headset has been lost |

Each headset also has a **colored border** derived from its IP address, so you can match what you see on screen to the physical headset in the room.

### Screen mirroring

The platform can mirror each headset's screen in the browser, letting the operator (and potentially students on a projected screen) see what is happening in VR. Several views are available:

| View | Best used for |
|------|--------------|
| **SimulationManager** | Full control panel — headset list, status, per-headset controls |
| **StreamPlayerScreen** | Passive grid view of all headset screens — good for a projector or large monitor |
| **StreamPlayerScreenControl** | Tablet-optimized grid with interactive controls — for a roaming assistant |
| **StreamFullscreen** | One headset at full size — focus on a specific student |

<!-- TODO: Add screenshot of the StreamPlayerScreen view -->
<!-- Screenshot description: The StreamPlayerScreen view showing a 2×3 grid of live headset screen mirrors, each in a colored border matching the headset's assigned color. Some panels show an active VR scene, others show a placeholder if the headset is not yet connected. -->

### Pause and Resume

- Click **Pause** to freeze the simulation in GAMA. Headsets remain connected and students stay in VR.
- Click **Resume** to continue from where you paused.

---

## 6. Handle Issues During the Session

### A headset disconnects

If a headset shows **Red / Disconnected**:

1. Check the headset is still on and connected to WiFi.
2. Have the student reopen the VR application — it will attempt to reconnect automatically.
3. If it does not reconnect within a few seconds, use the **Restart** button on that headset's entry in the control panel.

:::info
By default (`ENV_AGGRESSIVE_DISCONNECT = false` in `.env`), disconnected headsets stay visible in the panel so you can see them. They are not silently removed.
:::

### GAMA shows an error

If GAMA reports a simulation error (visible in the GAMA console), stop the experiment from the web platform, fix the issue in GAMA, then relaunch.

---

## 7. End the Session

1. Click **Stop** in the control panel. GAMA stops the experiment and all headsets are removed from the simulation.
2. Students can safely remove their headsets.
3. The web platform returns to the simulation selector — you can launch a new session immediately.
4. To fully shut down the platform, press `Ctrl+C` in the terminal running `npm start`.
