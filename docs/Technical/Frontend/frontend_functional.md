# Functional Components

#### 6.3.1 SelectorSimulation

**Purpose**: Main page component for simulation selection

**Features**:

- Displays available simulations from parsed `settings.json` files  
- Shows splashscreen images or placeholders  
- Starts simulation when it’s associated simulation element is clicked

#### 6.3.2 SimulationManager

**Purpose**: Central control interface for active simulation

**Features**:

- Simulation lifecycle control (launch, pause, resume, stop)  
- Connected headset list with status indicators  
- Real-time simulation state display  
- Per-headset controls (disconnect, restart)

**WebSocket Integration**: Receives WebSocket instance from WebsocketManager to communicate with GAMA server.

**Message Types Sent**:

- `launch_experiment`  
- `start_experiment`  
- `pause_experiment`  
- `stop_experiment`

#### 6.3.3 SimulationManagerPlayer

**Purpose**: Individual headset control component within SimulationManager

**Features**:

- Headset status display  
- Disconnect button  
- Restart connection button  
- Visual identification (color-coded)

**Status Indicators**: 

| Green ( Connected) | Headset connected to the webplatform through the websocket and ADB |
| :---- | :---- |
| Green ( Ingame) | Headset currently in a VR application connected to the application |
| Red ( Error / disconnected) | The web socket connection has been severed |

#### 6.3.4 PlayerScreenCanvas

**Purpose**: Renders VR headset screen mirror

**Features**:

- Displays video stream canvas from VideoStreamManager  
- Color-coded border based on headset IP  
- Fullscreen mode with aspect ratio preservation when clicked  
- Placeholder display when no headset connected

**Color Coding System**:

- Extracts last octet from headset IP address  
- Maps to color via `HEADSETS_COLOR` constant  
- Applies Tailwind background class (e.g., `bg-red-300`)

**Display Modes**:

1. **Normal**: Standard embedded view  
2. **Fullscreen**: Maximized while maintaining aspect ratio

Props: canvas, id, isPlaceholder, needsInteractivity, canvasSize, hideInfos

- canvas: Processed stream passed by VideoStreamManager, contains a HTML canvas   
- id: IP address of the headset the stream belongs to  
- is placeholder: Boolean that will render a blank canvas as a placeholder  
- needsInteractivity: Optional boolean that enables fullscreen interactivity when clicking the canvas  
- canvasSize: number specifying the length of the side of the square container of the stream  
- hideInfos: Optional boolean that hides the player id 

#### 6.3.5 StreamPlayerScreen

**Purpose**: Container for multi-headset display view

**Use Case**: Display on external monitor or tablet for observation

**Features**:

- Grid layout for multiple headsets  
- Designed for passive viewing and monitoring  
- Optimized for large displays (monitors, TVs)

#### 6.3.6 StreamPlayerScreenControl

**Purpose**: Enhanced multi-headset display with tablet-optimized controls

**Use Case**: Display on tablet with interactive controls for teaching assistants or operators

**Features**:

- Similar to StreamPlayerScreen with added functionality  
- Touch-optimized interface for tablet use  
- Interactive controls for monitoring and management  
- Grid layout for multiple headsets

**Differences from StreamPlayerScreen**:

- Includes additional control elements for tablet interaction  
- Optimized touch targets and gestures for tablet use  
- May include quick access controls for common operations

#### 6.3.7 StreamFullscreen

**Purpose**: Single headset full-screen display

**Use Case**: Focus on one specific student's VR experience in detail

**Features**:

- Displays only one headset stream  
- Maximized size for detailed observation  
- Uses headset ID to select which stream to display  
- Optimized for full-screen viewing on any display

**Parameters**:

- **Headset ID**: Identifier to specify which headset stream to display

**Usage Scenario**:

- Teacher or assistant wants to focus on one student  
- Detailed observation of specific interactions  
- Presentation or demonstration of individual work

#### 6.4. VideoStreamManager

**Purpose**: Processes raw video streams for frontend display

**Responsibilities**:

- Receives raw stream data from ScrcpyServer  
- Parses stream metadata  
- Deserializes video frames  
- Selects appropriate decoder  
- Outputs to HTML canvas

**Stream Processing Pipeline**:

1. Raw data reception  
2. Metadata extraction  
3. Frame deserialization  
4. Decoder selection  
5. Canvas output

**Supported Decoders**: H264 or H265  
**Browser Compatibility**: Firefox, Safari, Chrome
