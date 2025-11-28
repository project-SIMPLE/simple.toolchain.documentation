# Constants.ts file

The Constants.ts file defines constant values that will be used in both the frontend and the backend of the application,as well as all the interfaces used.


## Interfaces
```ts
export interface JsonOutput {
    contents?: Array<{
        id: string[];
        contents: any;
    }>;
}

```
```ts
export interface JsonSettings {
    type?: string;
    model_file_path: string;
    experiment_name: string;
}
```

```ts
export interface JsonMonitor {
    type: string;
    id?: string;
    simulationIndex?: number;
}
```

```ts
export interface JsonPlayerAsk {
    type: string;
    action: string;
    args: string; 
    agent: string;
}
```

```ts
export interface JsonPlayer {
    id: string;
    type: string;
    expr?: string;
    heartbeat?: number;
}
```


```ts
export interface PlayerState {
    connected: boolean;
    in_game: boolean;
    date_connection: string;
}
```

```ts
export interface GamaState {
    connected: boolean;
    experiment_state: string;
    loading: boolean;
    content_error: string;
    experiment_id: string;
    experiment_name: string;
}
```

```ts
export interface Player {
    id: string,
    // Player Socket
    ws: uWS.WebSocket<unknown>,
    ping_interval: number,
    is_alive: boolean,
    timeout?: NodeJS.Timeout,
    // Player State
    connected: boolean,
    in_game: boolean,
    date_connection: string,
}
```

## Constants

```ts
export const GAMA_ERROR_MESSAGES = [
    "SimulationStatusError",
    "SimulationErrorDialog",
    "SimulationError",
    "RuntimeError",
    "GamaServerError",
    "MalformedRequest",
    "UnableToExecuteRequest"
];
```
This constant is used in the backend when listening to the response messages of the GAMA server. 
The type of message read and throws an error if the type of the message received is contained in this array
-- --
<br/>

```ts
export const HEADSET_COLOR: Record<string,string> = {
    "101": "bg-blue-300",
    "102": "bg-red-300",
    "103": "bg-red-500",
    "104": "bg-red-300",
    "105": "bg-black",
    "106": "bg-white",
    "110":"bg-[#416250]",
    "190": "red",
    "21": "bg-blue-500",
    "15":"bg-blue-600"
};
```
This constant is used to determine the color assigned to each headset. The application looks at the last numbers in the IP address of the headset, then assign a 
tailwind string to be applied as a border around the video stream. The color of the icon determined by extracting the color in the middle of the tailwind value, 
and is then used to fill the path leading to the icon stored in the sources:
 public/images/headset_`color`.png



```ts
/**
 * ANSI colors for console output
 */
export const ANSI_COLORS: Record<string,string> ={
    "black": "\x1b[30m",
    "red": "\x1b[31m",
    "green": "\x1b[32m",
    "yellow": "\x1b[33m",
    "blue": "\x1b[34m",
    "magenta": "\x1b[35m",
    "cyan": "\x1b[36m",
    "white": "\x1b[37m",
    "orange": "\x1b[38;5;208m",
    "purple": "\x1b[38;5;129m",
    "reset": "\x1b[0m"
}
```

This constant is used to apply different colors to text in console outputs. Not as used since the change from raw ```console.log``` statements to the use of the Logtape library.  