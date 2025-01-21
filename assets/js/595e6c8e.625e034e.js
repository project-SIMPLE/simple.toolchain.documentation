"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5735],{9562:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"Toolchain/Tutorials/Tutorial-\u2010-Step-1","title":"Step 1: Generation of the GAMA VR model","description":"Creation of the project","source":"@site/docs/Toolchain/10-Tutorials/03-Tutorial-\u2010-Step-1.md","sourceDirName":"Toolchain/10-Tutorials","slug":"/Toolchain/Tutorials/Tutorial-\u2010-Step-1","permalink":"/Toolchain/Tutorials/Tutorial-\u2010-Step-1","draft":false,"unlisted":false,"editUrl":"https://github.com/project-SIMPLE/documentation/tree/main/docs/Toolchain/10-Tutorials/03-Tutorial-\u2010-Step-1.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"docSidebar","previous":{"title":"From GAMA model to Virtual Universe \u2010 case of a traffic model","permalink":"/Toolchain/Tutorials/Tutorial-\u2010-From-GAMA-model-to-Virtual-Universe-\u2010-case-of-a-traffic-model"},"next":{"title":"Step 2: Creation of the Unity basic game","permalink":"/Toolchain/Tutorials/Tutorial-\u2010-Step-2"}}');var o=i(4848),r=i(8453);const a={},s="Step 1: Generation of the GAMA VR model",l={},h=[{value:"Creation of the project",id:"creation-of-the-project",level:2},{value:"Generation of the VR model",id:"generation-of-the-vr-model",level:2},{value:"Page 1 - Define the general information to define the VR experiment",id:"page-1---define-the-general-information-to-define-the-vr-experiment",level:3},{value:"Main experiment",id:"main-experiment",level:4},{value:"Minimum duration of a cycle (in s)",id:"minimum-duration-of-a-cycle-in-s",level:4},{value:"Perception radius of player agent",id:"perception-radius-of-player-agent",level:4},{value:"Minimum distance between agents to be sent",id:"minimum-distance-between-agents-to-be-sent",level:4},{value:"Main display",id:"main-display",level:4},{value:"Display to hide",id:"display-to-hide",level:4},{value:"Page 2 - Define the agents and Unity properties for the geometries to send",id:"page-2---define-the-agents-and-unity-properties-for-the-geometries-to-send",level:3},{value:"General information",id:"general-information",level:4},{value:"Definition of the road unity properties",id:"definition-of-the-road-unity-properties",level:4},{value:"Definition of the building unity properties",id:"definition-of-the-building-unity-properties",level:4},{value:"Definition of the people unity properties",id:"definition-of-the-people-unity-properties",level:4},{value:"Page 3 - Define the information about the player",id:"page-3---define-the-information-about-the-player",level:3},{value:"Min (minimum number of players)",id:"min-minimum-number-of-players",level:4},{value:"Maximum number of players",id:"maximum-number-of-players",level:4},{value:"Init location of the player",id:"init-location-of-the-player",level:4},{value:"Player Size",id:"player-size",level:4},{value:"Player color",id:"player-color",level:4},{value:"Finalizing",id:"finalizing",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.RP)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"step-1-generation-of-the-gama-vr-model",children:"Step 1: Generation of the GAMA VR model"})}),"\n",(0,o.jsx)(t.h2,{id:"creation-of-the-project",children:"Creation of the project"}),"\n",(0,o.jsx)(t.p,{children:'Create a new GAMA project, then copy inside in this project the folders "models" and "includes" from "Toy Models/Traffic" of the model library. In the "model" folder, delete all the models except "Traffic and Pollution.gaml".\nTo make the test easier later, set "fullscreen" to false in the "carte" display of the "traffic" experiment.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/user-attachments/assets/e9bdaa91-89a0-4114-b27b-c51a19e89a92",alt:"Fullscreen to false"})}),"\n",(0,o.jsx)(t.h2,{id:"generation-of-the-vr-model",children:"Generation of the VR model"}),"\n",(0,o.jsxs)(t.p,{children:['Open the "Traffic and Pollution.gaml" model in the editor, then, select in the "Unity VR" menu "Model to VR". A Wizard should open. ',"\u26a0\ufe0f",' The "Unity VR" menu only appears if you have the mouse cursor in the text editor of the model.']}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/user-attachments/assets/f6d2732a-b439-4a69-aecf-b3272f70bc6a",alt:"MenuVR"})}),"\n",(0,o.jsx)(t.h3,{id:"page-1---define-the-general-information-to-define-the-vr-experiment",children:"Page 1 - Define the general information to define the VR experiment"}),"\n",(0,o.jsx)(t.h4,{id:"main-experiment",children:"Main experiment"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Name of the experiment, which will be extended to include a VR version."})}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, we will extend the only experiment defined: ",(0,o.jsx)(t.strong,{children:"traffic"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"minimum-duration-of-a-cycle-in-s",children:"Minimum duration of a cycle (in s)"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"This represents the minimum time between two simulation steps. As GAMA will be sending information to Unity at each simulation step, setting a minimum value for this variable ensures that the Unity client doesn't receive too much information too quickly."})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["In this tutorial, we will set the value to ",(0,o.jsx)(t.strong,{children:"0.1"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"perception-radius-of-player-agent",children:"Perception radius of player agent"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"If this option is greater than 0.0, it filters the agents to be sent to Unity, sending only those agents that are at a distance less than or equal to the perception radius."})}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, we'll leave the ",(0,o.jsx)(t.strong,{children:"default value (0.0)"})," as we don't wish to filter the agents sent to Unity."]}),"\n",(0,o.jsx)(t.h4,{id:"minimum-distance-between-agents-to-be-sent",children:"Minimum distance between agents to be sent"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"If greater than 0.0, this option filters the agents to be sent to Unity, so as to send only those agents that are too close (distance greater than this minimum distance)."})}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, we'll leave the ",(0,o.jsx)(t.strong,{children:"default value (0.0)"})," as we don't wish to filter the agents sent to Unity."]}),"\n",(0,o.jsx)(t.h4,{id:"main-display",children:"Main display"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Name of the display, which will be extended to include a VR version."})}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, only we will extend the only display defined: ",(0,o.jsx)(t.strong,{children:"carte"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"display-to-hide",children:"Display to hide"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Displays that will not be displayed in the experiment."})}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, we don't want to have the ",(0,o.jsx)(t.code,{children:"carte"})," display, so it ",(0,o.jsx)(t.strong,{children:"must be checked"}),"."]}),"\n",(0,o.jsx)("img",{width:"820",alt:"Wizard_Experiment",src:"https://github.com/user-attachments/assets/5fa67658-8cbd-4399-9561-8b4b6aa0a48b"}),"\n",(0,o.jsx)(t.h3,{id:"page-2---define-the-agents-and-unity-properties-for-the-geometries-to-send",children:"Page 2 - Define the agents and Unity properties for the geometries to send"}),"\n",(0,o.jsx)(t.h4,{id:"general-information",children:"General information"}),"\n",(0,o.jsx)(t.p,{children:'An important step is to describe how the entities (agents, geometries) will be sent to Unity, in particular how they will be represented in Unity and how the player will be able to interact with them. In the same way as for "aspects" in GAMA, it will be possible to define sets of properties that can then be assigned to agent species: for each agent species, you will be able to choose a way of sending it to Unity.'}),"\n",(0,o.jsx)(t.p,{children:"Regarding the representation of entities, the tool allows them to be represented in 2 different ways: by their geometry (with optional 3D extrusion) and by a prefab already defined in Unity."}),"\n",(0,o.jsx)(t.p,{children:"For interactions, it is possible to define whether the entity will have a physical existence in the world (collider), whether the player will be able to interact with it and how he or she will be able to interact: interaction by ray or possibility of catching the entity. Finally, it is possible to define whether Unity will send GAMA information on the entity's location (for example, if the player moves it)."}),"\n",(0,o.jsx)(t.h4,{id:"definition-of-the-road-unity-properties",children:"Definition of the road unity properties"}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial, we want to send all road geometries to Unity with the possibility to interact with them (to let the player close roads by selecting them through the ray interactor). We therefore add a new property for this purpose and check the road species."}),"\n",(0,o.jsx)(t.p,{children:'To define a new properties, clicks on the "+" button.'}),"\n",(0,o.jsx)("img",{width:"820",alt:"Wizard-Properties-Add",src:"https://github.com/user-attachments/assets/40d1e496-b781-45d1-86d3-fb3489a9c941"}),"\n",(0,o.jsx)(t.p,{children:'Then choose a name for the new properties. For the road species, we will keep the name "road" for the property. Then, click on "Ok"'}),"\n",(0,o.jsx)("img",{width:"820",alt:"Wizard-Properties-Add-Road",src:"https://github.com/user-attachments/assets/d4068eca-4965-4d0b-8ce3-a4e81a2e21dc"}),"\n",(0,o.jsxs)(t.p,{children:['The roads will only be sent at the initialization of the game, thus, we uncheck "Update every" to make it static. For ',(0,o.jsx)(t.em,{children:"Aspect"}),', as we want to represent road geometries and not use a prefab, choose for "Uses" "The geometries of the agents in GAMA". We keep the default color (gray), and the default height/depth (1 #m). We will not use a particular material for these agents, so we let the ',(0,o.jsx)(t.em,{children:"material"})," field empty. As we want to represent roads as surfaces rather than lines, we add a buffer of 2m buffer around them. To do this, we need to fill the ",(0,o.jsx)(t.em,{children:"Buffer"}),' field with "2.0".']}),"\n",(0,o.jsxs)(t.p,{children:["As we want to interact with the roads using the ray interaction, in ",(0,o.jsx)(t.em,{children:"Interaction"})," check the box ",(0,o.jsx)(t.em,{children:"has a collider"})," and ",(0,o.jsx)(t.em,{children:"is interactable"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Finally, we add a tag  to facilitate the identification of this type of entity in Unity. For that, in the ",(0,o.jsx)(t.em,{children:"tag"}),' field, write "road".']}),"\n",(0,o.jsx)("img",{width:"820",alt:"Wizard-Properties-Road",src:"https://github.com/user-attachments/assets/685a90f9-ae36-47b8-b313-e5dfcf0046fc"}),"\n",(0,o.jsx)(t.h4,{id:"definition-of-the-building-unity-properties",children:"Definition of the building unity properties"}),"\n",(0,o.jsxs)(t.p,{children:['In this tutorial, we want to send all building geometries to Unity without interaction. We therefore check the building species add a new property for this purpose. As for road, we have to click on the "+" button to create a new property. Leave the default name ("building"). Similarly to roads, we want to only send the buildings at the initialization, so we uncheck "Update every".\nFor the ',(0,o.jsx)(t.em,{children:"Aspect"}),', we want to represent the building by their GAMA geometries, so we set "Uses" to "The geometry of the agent in GAMA". Concerning the Color, we want to display them in black, so we click on the gray square and choose the black color.']}),"\n",(0,o.jsx)("img",{width:"820",alt:"Wizard-Properties-Building-Color",src:"https://github.com/user-attachments/assets/cd592f97-0e24-439e-8a82-6bff86d031fb"}),"\n",(0,o.jsxs)(t.p,{children:["We use the default value for the ",(0,o.jsx)(t.em,{children:"Material"})," (empty) and Buffer (0.0). For the ",(0,o.jsx)(t.em,{children:"Height/depth"})," we set the value to ",(0,o.jsx)(t.em,{children:"10.0"}),". We define no interaction for building and no Tag."]}),"\n",(0,o.jsx)("img",{width:"820",alt:"Wizard-Properties-Building",src:"https://github.com/user-attachments/assets/46bdd9a6-2250-4309-a8db-be7384212445"}),"\n",(0,o.jsx)(t.h4,{id:"definition-of-the-people-unity-properties",children:"Definition of the people unity properties"}),"\n",(0,o.jsxs)(t.p,{children:['In this tutorial, we want to send the location of the people agents to Unity without any interaction with them. We therefore add a new property for this purpose called "people".\nAs we want to sent the people agents at every step, we leave "Update every" checked with the default value for the simulation cycles (',(0,o.jsx)(t.em,{children:"1"}),")."]}),"\n",(0,o.jsxs)(t.p,{children:["For ",(0,o.jsx)(t.em,{children:"Aspect"}),", we want to represent people agents using a specific prefab called ",(0,o.jsx)(t.em,{children:"Car"}),', we then have to select a prefab defined in Unity_ for "Uses". In ',(0,o.jsx)(t.em,{children:"Path to the Prefab"}),", we have to specify the path to the Prefab. For reasons of Unity limitations, this prefab must absolutely be in the Resources directory of the Unity project. In this tutorial, we want to use the ",(0,o.jsx)(t.em,{children:"Car"}),' prefab located in folder "Assets/Resources/Prefabs/Visual Prefabs/City/Vehicles/", we then write in ',(0,o.jsx)(t.em,{children:"Path"}),' "Prefabs/Visual Prefabs/City/Vehicles/Car". We set the scale of the prefab to "30.0", the rotation coefficient to "1.0", the rotation offset to "-90.0" and the offset along the Y-Axis to "0.2".']}),"\n",(0,o.jsxs)(t.p,{children:["As we want no interaction with the people entities, leave all the check box in ",(0,o.jsx)(t.em,{children:"Interaction"})," unchecked. We leave also empty the ",(0,o.jsx)(t.em,{children:"Tag"})," field."]}),"\n",(0,o.jsx)("img",{width:"820",alt:"Wizard-Properties-People",src:"https://github.com/user-attachments/assets/b5ae09a4-1898-439b-af0c-e9501e4c4cd0"}),"\n",(0,o.jsx)(t.h3,{id:"page-3---define-the-information-about-the-player",children:"Page 3 - Define the information about the player"}),"\n",(0,o.jsx)(t.h4,{id:"min-minimum-number-of-players",children:"Min (minimum number of players)"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"How many players are required to run the simulation."})}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, we'll set this to ",(0,o.jsx)(t.strong,{children:"1"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"maximum-number-of-players",children:"Maximum number of players"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Does an unlimited number of players can connect to the game?"})}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, we'll ",(0,o.jsx)(t.strong,{children:"check"})," this option, and set the maximum number of player to 1."]}),"\n",(0,o.jsx)("img",{width:"820",alt:"Wizard-Properties-NumPlayer",src:"https://github.com/user-attachments/assets/6c0b5389-359c-44bc-929e-3bbbcd388342"}),"\n",(0,o.jsxs)(t.p,{children:['By clicking on "Player0" it is possible to set the property of the player. In particular how it is represented in GAMA and in Unity for the other players. As we are here defining a single player GAMA, we will keep the default value for the ',(0,o.jsx)(t.em,{children:"Aspect in Unity"}),". Concerning the attributes, we define the following values:"]}),"\n",(0,o.jsx)(t.h4,{id:"init-location-of-the-player",children:"Init location of the player"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Sets the initial location of Player0."})}),"\n",(0,o.jsxs)(t.p,{children:["In this example, we'll set it to ",(0,o.jsx)(t.strong,{children:100}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"player-size",children:"Player Size"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Player display size in GAMA."})}),"\n",(0,o.jsxs)(t.p,{children:["In this tutorial, we'll set it to ",(0,o.jsx)(t.strong,{children:"20.0"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"player-color",children:"Player color"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Player display color in GAMA."})}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial, we keep the red color."}),"\n",(0,o.jsx)("img",{width:"820",alt:"Wizard-Properties-PlayerProperties",src:"https://github.com/user-attachments/assets/d047d67e-1e1d-435e-9264-3c558d201ebe"}),"\n",(0,o.jsx)(t.h3,{id:"finalizing",children:"Finalizing"}),"\n",(0,o.jsx)(t.p,{children:'You can then click on finish to generate a new file: "traffic and Pollution-VR.gaml", which will be used to launch the VR version of the model (experiment vr_xp). If the file does not appear, refresh the folder (right click on the folder, then "refresh").'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/user-attachments/assets/8117e89d-03ac-4295-a182-4c6cfecbcdea",alt:"ModelCreated"})}),"\n",(0,o.jsxs)(t.p,{children:["You can now proceed to ",(0,o.jsx)(t.a,{href:"https://github.com/project-SIMPLE/simple.toolchain/wiki/04-Tutorial-%E2%80%90-Step-2",children:"Step 2"})]})]})}function c(e={}){const{wrapper:t}={...(0,r.RP)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{RP:()=>r,xA:()=>s});var n=i(6540);const o=n.createContext({});function r(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:i}){let s;return s=i?"function"==typeof e?e({}):e||a:r(e),n.createElement(o.Provider,{value:s},t)}}}]);