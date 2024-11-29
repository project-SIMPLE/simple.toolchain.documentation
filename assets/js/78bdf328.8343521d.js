"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7959],{2160:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Toolchain/Recipes/SendingReceivingMessages","title":"Sending and receiving messages from/to GAMA/Unity","description":"**Link to the example model**: LinkToUnity/Models/Code Examples/Send Receive Messages.gaml","source":"@site/docs/Toolchain/04-Recipes/05-SendingReceivingMessages.md","sourceDirName":"Toolchain/04-Recipes","slug":"/Toolchain/Recipes/SendingReceivingMessages","permalink":"/Toolchain/Recipes/SendingReceivingMessages","draft":false,"unlisted":false,"editUrl":"https://github.com/project-SIMPLE/documentation/tree/main/docs/Toolchain/04-Recipes/05-SendingReceivingMessages.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Defining new interactions","permalink":"/Toolchain/Recipes/DefiningInteractions"},"next":{"title":"Sending attribute values linked to agents/geometries from GAMA","permalink":"/Toolchain/Recipes/SendingAttributeValues"}}');var i=s(4848),a=s(8453);const o={},r="Sending and receiving messages from/to GAMA/Unity",c={},l=[{value:"Sending a message from GAMA to Unity",id:"sending-a-message-from-gama-to-unity",level:3},{value:"Sending a message from Unity to GAMA",id:"sending-a-message-from-unity-to-gama",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.RP)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sending-and-receiving-messages-fromto-gamaunity",children:"Sending and receiving messages from/to GAMA/Unity"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Link to the example model"})}),": ",(0,i.jsx)(n.a,{href:"https://github.com/project-SIMPLE/simple.toolchain/blob/2024-06/GAMA%20Plugin/gaml.extension.unity/models/LinkToUnity/Models/Code%20Examples/Send%20Receive%20Messages.gaml",children:"LinkToUnity/Models/Code Examples/Send Receive Messages.gaml"})]}),"\n",(0,i.jsx)(n.p,{children:"The SIMPLE toolkit allows to send a message from GAMA to Unity and a message from Unity to GAMA."}),"\n",(0,i.jsx)(n.h3,{id:"sending-a-message-from-gama-to-unity",children:"Sending a message from GAMA to Unity"}),"\n",(0,i.jsxs)(n.p,{children:["Sending a message from GAMA to Unity requires to use the action ",(0,i.jsx)(n.code,{children:"send_message"})," of the Unity_linker agent. The message should be a map (key: name of the attribute; value: value of this attribute). The name of the attribute should be the same as the variable in the serialized class in Unity (c# script)"]}),"\n",(0,i.jsx)(n.p,{children:"For example, to send a message to a all the players that contains the current cycle of the simulation, we can use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'do send_message players: unity_player as list mes: ["cycle":: cycle];\n'})}),"\n",(0,i.jsx)(n.p,{children:"In Unity, a serialized class in Unity has to be defined to serialize (decrypt) the message:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"[System.Serializable]\n\npublic class GAMAMessage\n{\n    public int cycle;\n\n    public static GAMAMessage CreateFromJSON(string jsonString)\n    {\n        return JsonUtility.FromJson<GAMAMessage>(jsonString);\n    }\n\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then the message can be received in the SimulationManager class:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class SendReceiveMessageExample : SimulationManager\n{\n\n GAMAMessage message = null;\n\n//allow to serialize the message as GAMAMessage object\nprotected override void ManageOtherMessages(string content)\n {\n     message = GAMAMessage.CreateFromJSON(content);\n }\n\n//action activated at the end of the update phase (every frame)\n protected override void OtherUpdate()\n {\n     // if a message was received, display in the console the content of the message\n     if (message != null)\n        {\n            Debug.Log("received from GAMA: cycle " + message.cycle);\n            message = null;\n        }\n     }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sending-a-message-from-unity-to-gama",children:"Sending a message from Unity to GAMA"}),"\n",(0,i.jsx)(n.p,{children:"The principle is to call from Unity an action defined in the Unity Linker."}),"\n",(0,i.jsx)(n.p,{children:'For example, we define in GAMA, in the unity_linker species a new action called "receive_message" that just display in the console the id of the player sending the message and the content of it:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'species unity_linker parent: abstract_unity_linker {\n\t//action that will be called by the Unity player to send a message to the GAMA simulation\n\taction receive_message (string id, string mes) {\n\t\twrite "Player " + id + " send the message: " + mes;\n\t}\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, in the SimulationManager of Unity, we ask the unity_linker to call this action with the corresponding arguments:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'protected override void OtherUpdate()\n {\n\n     if (IsGameState(GameState.GAME))\n     {\n        string mes = "A message from Unity at time: " + Time.time;\n         //call the action "receive_message" from the unity_linker agent with two arguments: the id of the player and a message\n         Dictionary<string, string> args = new Dictionary<string, string> {\n         {"id",ConnectionManager.Instance.getUseMiddleware() ? ConnectionManager.Instance.GetConnectionId()  : ("\\"" + ConnectionManager.Instance.GetConnectionId() +  "\\"") },\n         {"mes",  mes }};\n\n            Debug.Log("sent to GAMA: " + mes);\n         ConnectionManager.Instance.SendExecutableAsk("receive_message", args);\n     }\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,a.RP)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{RP:()=>a,xA:()=>r});var t=s(6540);const i=t.createContext({});function a(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||o:a(e),t.createElement(i.Provider,{value:r},n)}}}]);