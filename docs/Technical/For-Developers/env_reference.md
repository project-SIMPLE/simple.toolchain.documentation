# .env file reference
The application uses the file ```.env``` to be able to expose parameters easily modifiable by users that will affect the whole application.

:::info
In general, the application exposes information required by the backend through the index.ts file, while exposing informations for the frontend using the ```vite.config.ts``` file.
:::



## Example env

```json
GAMA_WS_PORT=1000
GAMA_IP_ADDRESS=localhost

HEADSET_WS_PORT=8080
MONITOR_WS_PORT=8001

WEB_APPLICATION_HOST=0.0.0.0
WEB_APPLICATION_PORT=8000
VERBOSE=true
EXTRA_VERBOSE = false

LEARNING_PACKAGE_PATH="./learning-packages"
EXTRA_LEARNING_PACKAGE_PATH="/uncommment/and/set/another/path/to/check"

ENV_GAMALESS =  false
HEADSETS_IP="192.168.68.15;192.168.68.103;192.168.68.104;192.168.68.110"
ENV_MAX_ELEMENTS = 4
AGGRESSIVE_DISCONNECT=false

SCRCPY_FORCE_H265 = true
```

##### Logging Settings

**ENV_VERBOSE**

- **Type**: Boolean  
- **Default**: `false`  
- **Required**: No  
- **Description**: Enables basic logging output to console. Shows initialization, connection events, and major state changes.  
- **Valid Values**: `true`, `false`  
- **Performance Impact**: Minimal  
- **Security Considerations**: May expose internal state information

**ENV_EXTRA_VERBOSE**

- **Type**: Boolean  
- **Default**: `false`  
- **Required**: No  
- **Description**: Enables detailed diagnostic logging including all WebSocket messages, ADB commands, and internal state transitions. Use only for debugging.  
- **Valid Values**: `true`, `false`  
- **Performance Impact**: Moderate (increased I/O operations)  
- **Security Considerations**: Logs may contain sensitive connection details

## Headset Management 
### ENV_AGGRESSIVE_DISCONNECT

- **Type**: Boolean  
- **Default**: `false`  
- **Required**: No  
- **Description**: Controls disconnect button behavior. When enabled, disconnected headsets are immediately removed from the platform. When disabled, headsets remain visible with "disconnected" status, allowing for reconnection.  
- **Valid Values**: `true`, `false`  
- **Use Cases**: Enable for production environments; disable for development  
- **Recommendation**: Keep disabled to handle temporary network interruptions gracefully  
  


  
### HEADSETS_IPS {#Headset_ips}

- **Type**: String (semicolon-separated IP addresses)  
- **Default**: None  
- **Required**: No (if omitted, automatic network scan is performed)  
- **Description**: Specifies known IP addresses of VR headsets. Port numbers are automatically detected using network scanning.  
- **Format**: `IP1;IP2;IP3` (no spaces)  
- **Standard Configuration**: `192.168.68.101;192.168.68.102;192.168.68.103;192.168.68.104;192.168.68.105;192.168.68.106`  
- **Port Detection**: Automatically scans common ADB ports (5555 by default, which is open on all headsets or all ports on range 30000-49999 if 5555 is not opened)  
- **Performance Note**: Providing IPs speeds up connection time significantly compared to network scanning  
- **IP Pattern**: Headsets typically use `192.168.68.10x` pattern where x \= 1-6

**ENV_MAX_ELEMENTS**

- **Type**: Integer  
- **Default**: 6  
- **Required**: No  
- **Description**: Maximum number of headset display panels shown on mirror pages. If fewer headsets are connected, placeholders fill remaining slots.  
- **Valid Range**: 0-6  
- **UI Impact**: Affects layout grid dimensions  
- **Note**: Does not limit actual headset connections, only display slots

##### Video Streaming

**ENV_FORCE_H265**

- **Type**: Boolean  
- **Default**: `false` on Windows/Linux, `true` on macOS  
- **Required**: No  
- **Description**: Forces H.265 (HEVC) video encoding instead of default H.264. H.265 provides better compression and quality but may have compatibility issues on some devices.  
- **Valid Values**: `true`, `false`  
- **Benefits of H.265**: Higher resolution, better framerate, improved stability  
- **Drawbacks**: Requires hardware decoder support, higher CPU usage  
- **Platform Behavior**: Automatically enabled on macOS (Darwin OS)

##### GAMA Server Connection

**GAMA_IP_ADDRESS**

- **Type**: String (IP address or hostname)  
- **Default**: `localhost`  
- **Required**: No (defaults to localhost if not specified)  
- **Description**: IP address or hostname of the GAMA simulation server  
- **Valid Values**: Valid IPv4 address, `localhost`, or resolvable hostname  
- **Examples**: `localhost`, `192.168.68.50`  
- **Network Requirement**: Must be reachable from application host

**GAMA_WS_PORT**

- **Type**: Integer  
- **Default**: `1000`  
- **Required**: No (defaults to 1000 if not specified)  
- **Description**: WebSocket port exposed by GAMA server. Verify in GAMA: Support → Preferences → Server  
- **Valid Range**: 1024-65535 (above reserved port range)  
- **Common Values**: 1000, 6868  
- **Firewall**: Ensure port is not blocked

##### Web Application Network

**WEB_APPLICATION_HOST**

- **Type**: String (IP address or hostname)  
- **Default**: `localhost`  
- **Required**: No (defaults to localhost if not specified)  
- **Description**: IP address on which the application creates WebSocket servers for video streaming (ScrcpyServer) and monitoring (MonitorServer)  
- **Valid Values**: `0.0.0.0` (all interfaces), specific IP, `localhost`  
- **Use Cases**:  
  - `localhost`: Local development only (default)  
  - `0.0.0.0`: Expose to all network interfaces  
  - Specific IP: Bind to particular network interface  
- **Security Warning**: Using `0.0.0.0` exposes services to network

**WEB_APPLICATION_PORT**

- **Type**: Integer  
- **Default**: `8000`  
- **Required**: No (defaults to 8000 if not specified)  
- **Description**: Port number for application WebSocket server  
- **Valid Range**: 1024-65535  
- **Conflict Avoidance**: Ensure no other services use this port

##### Simulation Packages

**LEARNING_PACKAGE_PATH**

- **Type**: String (file system path)  
- **Default**: None  
- **Required**: Yes  
- **Description**: Primary directory containing GAMA simulation models with `settings.json` configuration files  
- **Path Type**: Absolute or relative to application root  
- **Example**: `./learning-packages`, `/opt/simulations/main`  
- **Structure Requirements**: Each simulation must have `settings.json` in root folder

**EXTRA_LEARNING_PACKAGE_PATH**

- **Type**: String (file system path)  
- **Default**: None  
- **Required**: No  
- **Description**: Additional directory for GAMA simulation models, scanned in addition to primary path  
- **Use Case**: provide an additional folder as a source to discover GAMA simulations

##### Application starting option

**ENV_GAMALESS**

- **Type**: boolean
- **Default**: false 
- **Required**: no
- **Description**: Option that will disable the gama connector and all interactions related to gama, to only keep features related to streaming.
