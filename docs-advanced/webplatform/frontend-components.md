---
title: Frontend Components
sidebar_label: Frontend Components
sidebar_position: 6
description: Reference for the React components in the SIMPLE WebPlatform admin UI.
---

# Frontend Components

The admin UI is a React application (Vite build, Tailwind CSS, react-i18next). It connects to the WebPlatform backend via a WebSocket on `MONITOR_WS_PORT` (default 8001).

---

## Page components

### SelectorSimulation

Main page component for simulation selection.

- Displays available simulations parsed from `settings.json` files.
- Shows splashscreen images or a placeholder when none is configured.
- Clicking a simulation card starts the session selection flow.

### SimulationManager

Central control interface for an active simulation session.

- Simulation lifecycle controls: launch, pause, resume, stop.
- Connected headset list with per-headset status indicators.
- Real-time simulation state display.
- Per-headset controls: disconnect, restart.

**WebSocket messages sent**:

| Message type | Action |
|---|---|
| `launch_experiment` | Start the selected experiment in GAMA |
| `pause_experiment` | Pause the running experiment |
| `resume_experiment` | Resume a paused experiment |
| `stop_experiment` | Stop the experiment |

### SimulationManagerPlayer

Individual headset row within `SimulationManager`.

- Headset status display with color-coded indicator.
- Disconnect button.
- Restart connection button.

**Status indicators**:

| Color | Label | Meaning |
|---|---|---|
| Green | Connected | Headset connected via WebSocket and ADB |
| Green | In game | Headset connected and student is inside the VR app |
| Red | Disconnected | WebSocket connection severed |

---

## Stream view components

### PlayerScreenCanvas

Renders one headset's screen mirror.

- Displays the video stream canvas from `VideoStreamManager`.
- Applies a color-coded border derived from the headset's IP address (last octet mapped via `HEADSETS_COLOR`).
- Clicking enters fullscreen mode with preserved aspect ratio.
- Shows a blank placeholder when no headset is connected.

**Props**:

| Prop | Type | Description |
|---|---|---|
| `canvas` | HTMLCanvasElement | Processed stream from VideoStreamManager |
| `id` | string | Headset IP address |
| `isPlaceholder` | boolean | Render a blank placeholder instead of a stream |
| `needsInteractivity` | boolean | Enable fullscreen on click |
| `canvasSize` | number | Side length of the square stream container in pixels |
| `hideInfos` | boolean | Hide the player ID overlay |

### StreamPlayerScreen

Multi-headset grid view for passive observation.

- Grid layout of `PlayerScreenCanvas` components.
- Optimized for large displays, monitors, and projectors.
- No interactive controls — view only.

### StreamPlayerScreenControl

Multi-headset grid view with tablet-optimized controls.

- Same grid layout as `StreamPlayerScreen`.
- Adds touch-optimized controls for a roaming assistant or tablet operator.
- Interactive per-headset controls alongside the stream.

### StreamFullscreen

Single headset at full size.

- Displays one headset stream maximized.
- Selected by headset ID.
- Best used when focusing on one specific student.

---

## Media pipeline

### VideoStreamManager

Processes raw video frames from `ScrcpyServer` for display in the browser.

**Pipeline**:
1. Receive raw stream data from ScrcpyServer.
2. Extract stream metadata.
3. Deserialize video frames.
4. Select decoder (H.264 or H.265).
5. Output to HTML canvas.

**Browser support**: Firefox, Safari, Chrome.

---

## Shared UI components

### Header

Rendered at the top of every page.

- SIMPLE logo (links to home).
- Language selector button.

**Supported languages**: English, French, Vietnamese, Thai.

### Footer

Rendered at the bottom of every page. Displays partner organization logos.

### Button

Reusable styled button component.

**Props**:

| Prop | Type | Description |
|---|---|---|
| `onClick` | function | Click handler |
| `text` | string (optional) | Button label |
| `bgColor` | string | Tailwind background color class |
| `className` | string | Additional Tailwind utility classes |
| `customStyle` | object | Inline CSS for edge-case overrides |

### LanguageSelector

Language switching interface using react-i18next (v15.0.2).

- Renders as a dropdown or button in the Header.
- Selecting a language propagates the change to the entire application via the i18n context.
- No local state — language state is managed by react-i18next.
- Persists the selected language globally.
