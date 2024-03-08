"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[872],{3236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(4848),s=n(8453);const o={title:"Install Unity Template"},a="GAMA VR Provider",r={id:"Getting-started/simple.template.unity",title:"Install Unity Template",description:"This project allows to adapt a GAMA simulation to a VR environment created with Unity. It provides the VR developer with a game and connection management system, including GameObjects, methods and events that can be hooked. A list of these elements and how to use them is provided in the Documentation section.",source:"@site/docs/Getting-started/simple.template.unity.md",sourceDirName:"Getting-started",slug:"/Getting-started/simple.template.unity",permalink:"/Getting-started/simple.template.unity",draft:!1,unlisted:!1,editUrl:"https://github.com/project-SIMPLE/documentation/tree/main/docs/Getting-started/simple.template.unity.md",tags:[],version:"current",frontMatter:{title:"Install Unity Template"},sidebar:"docSidebar",previous:{title:"Install GAMA Plugin",permalink:"/Getting-started/gaml.extension.unity"},next:{title:"Tutorials",permalink:"/category/tutorials"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"What is included",id:"what-is-included",level:3},{value:"Quick Start",id:"quick-start",level:3},{value:"Documentation",id:"documentation",level:2},{value:"WebSocketConnector",id:"websocketconnector",level:3},{value:"ConnectionManager",id:"connectionmanager",level:3},{value:"SimulationManager",id:"simulationmanager",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.RP)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"gama-vr-provider",children:"GAMA VR Provider"}),"\n",(0,i.jsxs)(t.p,{children:["This project allows to adapt a GAMA simulation to a VR environment created with Unity. It provides the VR developer with a game and connection management system, including GameObjects, methods and events that can be hooked. A list of these elements and how to use them is provided in the ",(0,i.jsx)(t.a,{href:"#documentation",children:(0,i.jsx)(t.strong,{children:"Documentation"})})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["A description of the use of the template with a tutorial can be found ",(0,i.jsx)(t.a,{href:"https://github.com/project-SIMPLE/documentation/wiki",children:"here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["[!WARNING]\nThe project is being developped using ",(0,i.jsx)(t.strong,{children:"Unity Editor 2022.3.5f1"}),". Although it should work with newer versions, as is doesn't use any version-specific features (for now), it is strongly recommanded to use exactly the same Editor version."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(t.p,{children:"Once the project is opened in Unity, if you have any errors, you can check the following points:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Make sure that ",(0,i.jsx)(t.strong,{children:"Newtonsoft Json"})," is installed. Normaly, cloning this repo should ensure that it is installed. But if it's not the case, follow the tutorial on this ",(0,i.jsx)(t.a,{href:"https://github.com/applejag/Newtonsoft.Json-for-Unity/wiki/Install-official-via-UPM",children:"link"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["To work properly, we assume that you already have a compatible GAMA model and optionally that you have installed the ",(0,i.jsx)(t.a,{href:"https://github.com/project-SIMPLE/GamaServerMiddleware",children:(0,i.jsx)(t.strong,{children:"Gama Server Middleware"})})," if you want to design a multi-player game."]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["[!TIP]\n",(0,i.jsx)(t.strong,{children:"For Windows users"}),", make sure that the folder Assets/Plugins contains a .dll file called websocket-sharp. If not, download it from ",(0,i.jsx)(t.a,{href:"https://github.com/sta/websocket-sharp",children:"this repo"}),". And place it in Assets/Plugins in your Unity project."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"what-is-included",children:"What is included"}),"\n",(0,i.jsx)(t.p,{children:"The project contains three scenes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Startup Menu: Main menu that allows to load two Scenes - IP Menu and Main Scene. It allows as well to define if the middleware will be used or not. Using the middleware requires to run another software (the middleware), but allows to connect several players et to follow the connection status of the players."}),"\n",(0,i.jsx)(t.li,{children:"IP Menu: allows to change the IP used to connect to the computer running the middleware/GAMA"}),"\n",(0,i.jsxs)(t.li,{children:["Demo/Main Scene: main scene with the required script and the following GameObjects:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Directional Light"}),"\n",(0,i.jsx)(t.li,{children:"FPS Player"}),"\n",(0,i.jsxs)(t.li,{children:["Managers","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Connection Manager: define the connection properties of Unity"}),"\n",(0,i.jsx)(t.li,{children:"Game Manager: define all the aspects of the game"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Telelport Area: used only for FPS player to move using teleportation","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Debug Overlay: display all the information written in the model (using Debug.Log("message")).'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Download the silmple.template.project.\n",(0,i.jsx)(t.img,{src:"https://github.com/project-SIMPLE/simple.template.unity/raw/main/ReadmeRes/download.png",alt:"qs1"})]}),"\n",(0,i.jsxs)(t.li,{children:["Import it as a Unity project. ",(0,i.jsx)(t.strong,{children:"Make sure to use the right Editor version (Unity Editor 2022.3.5f1)"}),".\n",(0,i.jsx)(t.img,{src:"https://github.com/project-SIMPLE/simple.template.unity/raw/main/ReadmeRes/qs-1.png",alt:"qs1"})]}),"\n",(0,i.jsxs)(t.li,{children:['In the Menu "File" select "Build Settings..."\n',(0,i.jsx)(t.img,{src:"https://github.com/project-SIMPLE/simple.template.unity/raw/main/ReadmeRes/Build-setting_menu.png",alt:"qs1"})]}),"\n",(0,i.jsxs)(t.li,{children:['Select "Android" in "Platform", then click on "Switch Platform". You can after build and deploy the application on the headset by clicking on "Build and Run".\n',(0,i.jsx)(t.img,{src:"https://github.com/project-SIMPLE/simple.template.unity/raw/main/ReadmeRes/Build-setting.png",alt:"qs1"})]}),"\n",(0,i.jsxs)(t.li,{children:["To run the application in conjunction with GAMA, make sure you have installed ",(0,i.jsx)(t.a,{href:"https://github.com/gama-platform/gama/releases/tag/1.9.3",children:"GAMA 1.9.3"})," and the ",(0,i.jsx)(t.a,{href:"https://github.com/project-SIMPLE/gaml.extension.unity",children:"Unity Plugin for GAMA"}),". Information on installing the plugin is available [here] (",(0,i.jsx)(t.a,{href:"https://github.com/project-SIMPLE/gaml.extension.unity?tab=readme-ov-file#from-gama",children:"https://github.com/project-SIMPLE/gaml.extension.unity?tab=readme-ov-file#from-gama"}),"). The plugin provides a demo model (added in Plugin models/LinkToUnity/DemoModelVR.gaml) that works with the Unity project model, and in particular the main scene. To connect the VR headset to this model, run the vr_xp experiment before connecting the headset."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsxs)(t.p,{children:["This section focuses only on the C# scripts which are useful for a Unity developer. The scripts not mentioned here are at least commented.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.strong,{children:"Important note:"}),' As all the scripts which name finishes by "Manager" are instantiated when Unity is launched in the "Managers" GameObject, they are all developed using the Singleton Pattern. Hence trying to instantiate in some external scripts could break the default mechanisms. To call a method from one of these classes, one should rather use the following code snippet :']}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"NameOfClassManager.Instance.SomeMethod();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"websocketconnector",children:"WebSocketConnector"}),"\n",(0,i.jsxs)(t.p,{children:["Base abstract class to establish a web-socket connection with GAMA. All the methods of this class are private or protected. Hence they are only accessible through a child class (ConnectionManager here).",(0,i.jsx)(t.br,{}),"\n","Theorically, in most cases, ",(0,i.jsx)(t.strong,{children:"one mustn't try to access the methods of this class"}),", as they are alreay used/overriden by ConnectionManager."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Abstract Methods:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"HandleConnectionOpen"})," : triggered when a web-socket connection is established."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"HandleReceivedMessage"})," : triggered when a message is received from the server."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"HandleConnectionClosed"})," : triggered when the connection is closed, either by the server or by Unity itself."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"connectionmanager",children:"ConnectionManager"}),"\n",(0,i.jsxs)(t.p,{children:['This class extends WebSocketConnector and implements the methods mentioned above. The corresponding script is already in a GameObject called "Connection Manager", which is already in the Main Scene.',(0,i.jsx)(t.br,{}),"\n","It is in charge of creating an ID for the player once the connection with GAMA is established. Moreover, it provides the Unity developer with a state machine implemented as an ",(0,i.jsx)(t.code,{children:"enum"})," to handle each stage of the connection process. The specific role of each state is explained in the script source code. Some useful events allow the developer to to handle connection transitions and informations."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Events:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OnConnectionStateChange<ConnectionState newState>"})," : Triggered when a transition from one connection state from another occurs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OnConnectiontStateReceived<JObject payload>"}),' : Triggered when Unity receives a Json message from the server, which "type" field holds "json_state". For further informations about the payload detail, please refer to GamaServerMiddleware documentation']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OnConnectionAttempted<boolean connectionSuccess>"}),' : Triggered when a Json object with type "json_state" is received from the server, after Unity attempted to connect to it using ',(0,i.jsx)(t.code,{children:"TryConnectionToServer"})," method. The boolean ",(0,i.jsx)(t.code,{children:"connectionSuccess"})," contains true if the connection was successfully established, false otherwise."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OnServerMessageReceived"}),' : Triggered when Unity receives a Json message from the server, which "type" field holds "json_simulation". For further informations about the payload detail, please refer to GamaServerMiddleware documentation.']}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Methods:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"UpdateConnectionState(ConnectionState newState)"})," : Changes the current connection state to ",(0,i.jsx)(t.code,{children:"newState"}),". Calling this method should be avoided whenever possible, as it could break the default connection process, leading to some undefined state."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"TryConnectionToServer"})," : Attemps a connection to the middleware or to GAMA"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"IsConnectionState(ConnectionState currentState)"})," : Checks current state."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"SendExecutableExpression(string expression)"})," : Allows to send an expression to GAMA through the middleware or directlty to GAMA. The expression is compiled and executed in the experiment context. ","\u26a0\ufe0f"," Beware of the arguments expected by GAMA and special characters required by GAMA (such as ",(0,i.jsx)(t.code,{children:";"}),", ",(0,i.jsx)(t.code,{children:'"'}),", ...) as the expression is executed as it is sent by Unity."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"SendExecutableAsk(string action, Dictionary<string,string> arguments)"})," : Allows you to ask one of the  agents of the simulation to trigger an action (defined by its name), the second argument represents the values of the action arguments given by a dictionary (key: name of the argument, value: value of the argument). ","\u26a0\ufe0f"," unlike SendExecutableExpression, the expression is not compiled, which is less time-consuming for GAMA, but only allows you to send simple values for the action's argument values and not complex expressions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"GetConnectionId"})," : Returns the ID created by Unity when the connection was established."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"simulationmanager",children:"SimulationManager"}),"\n",(0,i.jsx)(t.p,{children:"This is the core script of this package. It allows to manage the actions triggered by the messages received by GAMA."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Events"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OnGameStateChanged<GameState newGameState>"})," : Triggered when a transition from one GameState to another occurs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OnGameRestarted"})," : Triggered when the function ",(0,i.jsx)(t.code,{children:"RestartGame"})," is called."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"OnGeometriesInitialized<GAMAGeometry geometries>"})," : Triggered when the initial geometries sent by GAMA are converted into polygons in the Unity scene. By default, ",(0,i.jsx)(t.code,{children:"OnGameStateChanged"})," is triggered just after this event, to switch from the LOADING_DATA state to the GAME state. Hooking to this event allows to seperate the logic between the game state transition and the loading of geometries.",(0,i.jsx)(t.br,{}),"\n","\u26a0\ufe0f"," This event is called when incoming geometric data is successfully managed and NOT when it is received."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Methods"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void UpdateGameState(GameState newState)"})," : Changes the current game state to ",(0,i.jsx)(t.code,{children:"newState"}),". This method must be used with caution, as it could break the default game logic, leading to errors in the execution of crucial steps such as initialization or connection steps."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"GameState GetCurrentState"})," : Returns the current game state"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bool IsGameState(GameState state)"})," : Compares the current game state with the one specified as a parameter."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"void RestartGame"})," : Restarts the game. Concretely, it reloads the main scene. This implementation is quite basic and can be enhanced with additional features by using the ",(0,i.jsx)(t.code,{children:"OnGameRestarted"})," event."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.RP)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{RP:()=>o});var i=n(6540);const s=i.createContext({});function o(e){const t=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);