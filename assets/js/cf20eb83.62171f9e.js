"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5872],{9939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Getting-started/simple.template.unity","title":"Install Unity Template","description":"This project allows to adapt a GAMA simulation to a VR environment created with Unity. It provides the VR developer with a game and connection management system, including GameObjects, methods and events that can be hooked. A list of these elements and how to use them is provided in the Documentation section.","source":"@site/docs/Getting-started/simple.template.unity.md","sourceDirName":"Getting-started","slug":"/Getting-started/simple.template.unity","permalink":"/Getting-started/simple.template.unity","draft":false,"unlisted":false,"editUrl":"https://github.com/project-SIMPLE/documentation/tree/main/docs/Getting-started/simple.template.unity.md","tags":[],"version":"current","frontMatter":{"title":"Install Unity Template"},"sidebar":"docSidebar","previous":{"title":"Install GAMA Plugin","permalink":"/Getting-started/gaml.extension.unity"},"next":{"title":"Tutorials","permalink":"/category/tutorials"}}');var s=n(4848),o=n(8453);const a={title:"Install Unity Template"},r="SIMPLE Unity Template",l={},c=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"What is included",id:"what-is-included",level:3},{value:"Scenes",id:"scenes",level:4},{value:"Resources",id:"resources",level:4},{value:"Quick Start",id:"quick-start",level:3},{value:"Documentation",id:"documentation",level:2},{value:"WebSocketConnector",id:"websocketconnector",level:3},{value:"ConnectionManager",id:"connectionmanager",level:3},{value:"SimulationManager",id:"simulationmanager",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.RP)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"simple-unity-template",children:"SIMPLE Unity Template"})}),"\n",(0,s.jsxs)(t.p,{children:["This project allows to adapt a GAMA simulation to a VR environment created with Unity. It provides the VR developer with a game and connection management system, including GameObjects, methods and events that can be hooked. A list of these elements and how to use them is provided in the ",(0,s.jsx)(t.a,{href:"#documentation",children:(0,s.jsx)(t.strong,{children:"Documentation"})})," section."]}),"\n",(0,s.jsxs)(t.p,{children:["A description of the use of the template with a tutorial can be found ",(0,s.jsx)(t.a,{href:"https://github.com/project-SIMPLE/simple.toolchain/wiki/Tutorial-%E2%80%90-From-GAMA-model-to-Virtual-Universe-%E2%80%90-case-of-a-traffic-model",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["[!WARNING]\nThe project is being developped using ",(0,s.jsx)(t.strong,{children:"Unity Editor 2022.3.5f1"}),". Although it should work with newer versions, as is doesn't use any version-specific features (for now), it is strongly recommanded to use exactly the same Editor version."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Once the project is opened in Unity, if you have any errors, you can check the following points:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Make sure that ",(0,s.jsx)(t.strong,{children:"Newtonsoft Json"})," is installed. Normaly, ",(0,s.jsx)(t.a,{href:"https://github.com/project-SIMPLE/simple.toolchain/",children:"cloning this repo"})," should ensure that it is installed. But if it's not the case, follow the tutorial on this ",(0,s.jsx)(t.a,{href:"https://github.com/applejag/Newtonsoft.Json-for-Unity/wiki/Install-official-via-UPM",children:"link"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["To work properly, we assume that you already have a compatible GAMA model. It is also highly recommended that you install ",(0,s.jsx)(t.a,{href:"https://github.com/project-SIMPLE/GamaServerMiddleware",children:(0,s.jsx)(t.strong,{children:"Gama Server Middleware"})})," as well."]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["[!TIP]\n",(0,s.jsx)(t.strong,{children:"For Windows users"}),", make sure that the folder Assets/Plugins contains a .dll file called websocket-sharp. If not, download it from ",(0,s.jsx)(t.a,{href:"https://github.com/sta/websocket-sharp",children:"this repo"}),". And place it in Assets/Plugins in your Unity project."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"what-is-included",children:"What is included"}),"\n",(0,s.jsx)(t.h4,{id:"scenes",children:"Scenes"}),"\n",(0,s.jsx)(t.p,{children:"The project contains different scenes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:['Code Examples: Set of scenes illustrating some of the features of the SIMPLE tool. Works with GAMA models in the "Code Examples" folder of the GAMA plugin.',"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Limit Player Movement: Show how to limit the player movement in Unity from GAMA."}),"\n",(0,s.jsx)(t.li,{children:"Receive DEM data: Show how to send a grid/matrix from GAMA to Unity and modify it on the fly."}),"\n",(0,s.jsx)(t.li,{children:"Receive Dynamic Data: Show how to send dynamic geometries/agents from GAMA to Unity."}),"\n",(0,s.jsx)(t.li,{children:"Receive Static Data: Show how to send static geometries/agents from GAMA to Unity."}),"\n",(0,s.jsx)(t.li,{children:"Receive Water Data: Show how to send water data to Unity and modify it on the fly."}),"\n",(0,s.jsx)(t.li,{children:"Send Receive Message: Show how to send and receive a message from Unity to GAMA."}),"\n",(0,s.jsx)(t.li,{children:"User Interactions: Show how to define interaction in Unity from GAMA."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Menu: A set of scenes with menus that can be manipulated via VR.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Startup Menu: Allows to load two Scenes - IP Menu and Main Scene. It allows as well to define if the middleware will be used or not. Using the middleware requires to run another software (the middleware), but allows to connect several players et to follow the connection status of the players."}),"\n",(0,s.jsx)(t.li,{children:"IP Menu: Allows to change the IP used to connect to the computer running the middleware/GAMA"}),"\n",(0,s.jsx)(t.li,{children:"End of Game Menu : Displays information to the player and allows to restart the game."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Demo: present a complete experience of game with interactions with GAMA.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Single Player Game: a simple game connected with GAMA where the player can move, select cars and motorbikes to remobe then, grab a tree, select a building bloc to define it as a hotspot (to attract cars and motorbikes)."}),"\n",(0,s.jsx)(t.li,{children:"Multi-Player Game: a multi-player game where each player has to collect treasures. The player that collect the highest number of treasures is the winner. The synchronization between the players is done through GAMA."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In addtion, two scene templates are provided to create new games:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Main Scene - FPS player: define a basic scene with a FPS-type (First-Person) player"}),"\n",(0,s.jsx)(t.li,{children:"Main Scene - Sky View player: define a basic scene with a Sky View-type player"}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)(t.p,{children:"Composed of two types of elements:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Materials: includes different materials, especially for water and terrain."}),"\n",(0,s.jsxs)(t.li,{children:["Prefabs: includes different prefabs:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'GAMA Link: Prefabs dedicated to the connection with GAMA, in particular "Connection Manager" to manage the connection between Unity and GAMA, and "Game Manager" to manage the game and the messages sent to/from GAMA.'}),"\n",(0,s.jsx)(t.li,{children:"Player: Prefabs dedicated to the management of the VR player. It includes two types of players - FPS player, where the player walks on a ground and can teleport; Sky view player, where the player flies in the sky (no gravity) and can move horizontally and vertically."}),"\n",(0,s.jsx)(t.li,{children:"Utils: contains a Debug overlay that will display all the elements display in the console (using the Debug.Log() method)."}),"\n",(0,s.jsx)(t.li,{children:"Visual Prefabs: contains a set of 3D assets that can be used for different purposes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Download the silmple.template.project (",(0,s.jsx)(t.a,{href:"https://github.com/project-SIMPLE/simple.toolchain/archive/refs/heads/2024-06.zip",children:"here"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Import it as a Unity project. ",(0,s.jsx)(t.strong,{children:"Make sure to use the right Editor version (Unity Editor 2022.3.5f1)"}),".\n",(0,s.jsx)(t.img,{src:"https://github.com/user-attachments/assets/58dfd971-b89a-44aa-aaf6-77767784a596",alt:"qs-1"})]}),"\n",(0,s.jsx)(t.li,{children:'In the Menu "File" select "Build Settings..."'}),"\n"]}),"\n",(0,s.jsx)("img",{width:"1027",alt:"Build-setting_menu",src:"https://github.com/user-attachments/assets/f8e5583d-c3f6-4e22-826b-c36cea979e52"}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:'Select "Android" in "Platform", then click on "Switch Platform". You can after build and deploy the application on the headset by clicking on "Build and Run".'}),"\n"]}),"\n",(0,s.jsx)("img",{width:"642",alt:"Build-setting",src:"https://github.com/user-attachments/assets/5fab90c2-c11d-4a5b-a5c8-c0503b2a413f"}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["To run the application in conjunction with GAMA, make sure you have installed ",(0,s.jsx)(t.a,{href:"https://github.com/gama-platform/gama/releases/tag/2024.07.0",children:"GAMA 2024.07"})," and the ",(0,s.jsx)(t.a,{href:"https://github.com/project-SIMPLE/simple.toolchain/tree/2024-06/GAMA%20Plugin",children:"Unity Plugin for GAMA"}),". Information on installing the plugin is available ",(0,s.jsx)(t.a,{href:"https://github.com/project-SIMPLE/simple.toolchain/tree/2024-06/GAMA%20Plugin#installation",children:"here"}),". The plugin provides a set of model (added in Plugin models/LinkToUnity) that works with the Unity project."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsxs)(t.p,{children:["This section focuses only on the C# scripts which are useful for a Unity developer. The scripts not mentioned here are at least commented.\n",(0,s.jsx)(t.strong,{children:"Important note:"}),' As all the scripts which name finishes by "Manager" are instantiated when Unity is launched in the "Managers" GameObject, they are all developed using the Singleton Pattern. Hence trying to instantiate in some external scripts could break the default mechanisms. To call a method from one of these classes, one should rather use the following code snippet :']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:"NameOfClassManager.Instance.SomeMethod();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"websocketconnector",children:"WebSocketConnector"}),"\n",(0,s.jsxs)(t.p,{children:["Base abstract class to establish a web-socket connection with GAMA. All the methods of this class are private or protected. Hence they are only accessible through a child class (ConnectionManager here).\nTheorically, in most cases, ",(0,s.jsx)(t.strong,{children:"one mustn't try to access the methods of this class"}),", as they are alreay used/overriden by ConnectionManager."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Abstract Methods:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"HandleConnectionOpen"})," : triggered when a web-socket connection is established."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"HandleReceivedMessage"})," : triggered when a message is received from the server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"HandleConnectionClosed"})," : triggered when the connection is closed, either by the server or by Unity itself."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"connectionmanager",children:"ConnectionManager"}),"\n",(0,s.jsxs)(t.p,{children:['This class extends WebSocketConnector and implements the methods mentioned above. The corresponding script is already in a GameObject called "Connection Manager", which has to be integrated in the Main Scene.\nIt is in charge of creating an ID for the player once the connection with GAMA is established. Moreover, it provides the Unity developer with a state machine implemented as an ',(0,s.jsx)(t.code,{children:"enum"})," to handle each stage of the connection process. The specific role of each state is explained in the script source code. Some useful events allow the developer to to handle connection transitions and informations."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Events:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OnConnectionStateChange<ConnectionState newState>"})," : Triggered when a transition from one connection state from another occurs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OnConnectiontStateReceived<JObject payload>"}),' : Triggered when Unity receives a Json message from the server, which "type" field holds "json_state". For further informations about the payload detail, please refer to GamaServerMiddleware documentation']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OnConnectionAttempted<boolean connectionSuccess>"}),' : Triggered when a Json object with type "json_state" is received from the server, after Unity attempted to connect to it using ',(0,s.jsx)(t.code,{children:"TryConnectionToServer"})," method. The boolean ",(0,s.jsx)(t.code,{children:"connectionSuccess"})," contains true if the connection was successfully established, false otherwise."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OnServerMessageReceived"}),' : Triggered when Unity receives a Json message from the server, which "type" field holds "json_simulation". For further informations about the payload detail, please refer to GamaServerMiddleware documentation.']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Methods:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"UpdateConnectionState(ConnectionState newState)"})," : Changes the current connection state to ",(0,s.jsx)(t.code,{children:"newState"}),". Calling this method should be avoided whenever possible, as it could break the default connection process, leading to some undefined state."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"TryConnectionToServer"})," : Attemps a connection to the middleware or to GAMA"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"IsConnectionState(ConnectionState currentState)"})," : Checks current state."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SendExecutableExpression(string expression)"})," : Allows to send an expression to GAMA through the middleware or directlty to GAMA. The expression is compiled and executed in the experiment context. ","\u26a0\ufe0f"," Beware of the arguments expected by GAMA and special characters required by GAMA (such as ",(0,s.jsx)(t.code,{children:";"}),", ",(0,s.jsx)(t.code,{children:'"'}),", ...) as the expression is executed as it is sent by Unity."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"SendExecutableAsk(string action, Dictionary<string,string> arguments)"})," : Allows you to ask one of the  agents of the simulation to trigger an action (defined by its name), the second argument represents the values of the action arguments given by a dictionary (key: name of the argument, value: value of the argument). ","\u26a0\ufe0f"," unlike SendExecutableExpression, the expression is not compiled, which is less time-consuming for GAMA, but only allows you to send simple values for the action's argument values and not complex expressions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"GetConnectionId"})," : Returns the ID created by Unity when the connection was established. This one is based on the IP of the headset."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"simulationmanager",children:"SimulationManager"}),"\n",(0,s.jsx)(t.p,{children:"This is the core script of this package. It allows to manage the actions triggered by the messages received by GAMA."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Events"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OnGameStateChanged<GameState newGameState>"})," : Triggered when a transition from one GameState to another occurs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OnGameRestarted"})," : Triggered when the function ",(0,s.jsx)(t.code,{children:"RestartGame"})," is called."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"OnGeometriesInitialized<GAMAGeometry geometries>"})," : Triggered when the initial geometries sent by GAMA are converted into polygons in the Unity scene. By default, ",(0,s.jsx)(t.code,{children:"OnGameStateChanged"})," is triggered just after this event, to switch from the LOADING_DATA state to the GAME state. Hooking to this event allows to seperate the logic between the game state transition and the loading of geometries.\n","\u26a0\ufe0f"," This event is called when incoming geometric data is successfully managed and NOT when it is received."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Methods"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"void UpdateGameState(GameState newState)"})," : Changes the current game state to ",(0,s.jsx)(t.code,{children:"newState"}),". This method must be used with caution, as it could break the default game logic, leading to errors in the execution of crucial steps such as initialization or connection steps."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"GameState GetCurrentState"})," : Returns the current game state"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"bool IsGameState(GameState state)"})," : Compares the current game state with the one specified as a parameter."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.RP)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{RP:()=>o,xA:()=>r});var i=n(6540);const s=i.createContext({});function o(e){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:o(e),i.createElement(s.Provider,{value:r},t)}}}]);