"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7669],{8871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Tutorials/SendingAttributeValues","title":"SendingAttributeValues","description":"Sending attribute values linked to agents/geometries from GAMA","source":"@site/docs/Tutorials/SendingAttributeValues.md","sourceDirName":"Tutorials","slug":"/Tutorials/SendingAttributeValues","permalink":"/Tutorials/SendingAttributeValues","draft":false,"unlisted":false,"editUrl":"https://github.com/project-SIMPLE/documentation/tree/main/docs/Tutorials/SendingAttributeValues.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Preamble","permalink":"/Tutorials/Running-a-model-game"},"next":{"title":"SendingDEM","permalink":"/Tutorials/SendingDEM"}}');var a=n(4848),s=n(8453);const o={},r=void 0,l={},d=[{value:"Sending attribute values linked to agents/geometries from GAMA",id:"sending-attribute-values-linked-to-agentsgeometries-from-gama",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.RP)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"sending-attribute-values-linked-to-agentsgeometries-from-gama",children:"Sending attribute values linked to agents/geometries from GAMA"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"Link to the example model"})}),": ",(0,a.jsx)(t.a,{href:"https://github.com/project-SIMPLE/simple.toolchain/blob/2024-06/GAMA%20Plugin/gaml.extension.unity/models/LinkToUnity/Models/Code%20Examples/Send%20Dynamic%20data.gaml",children:"LinkToUnity/Models/Code Examples/Send Dynamic data.gaml"})]}),"\n",(0,a.jsx)(t.p,{children:"The SIMPLE toolkit allows to send the values of attributes linked to geometries/agents"}),"\n",(0,a.jsxs)(t.p,{children:["For example, to send the value of the attribute ",(0,a.jsx)(t.em,{children:"type"})," linked to the dynamic_punctual_agent species:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"species dynamic_punctual_agent parent: moving_agent{\n\tint type <- rnd(2);\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To do this, we first have to send in GAMA the values for each agent of the attribute with the ",(0,a.jsx)(t.em,{children:"add_geometries_to_send"})," action. Attributes as to be sent as a map with key: the name of the attributes, value: the list of values of the attributes for each agent."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'reflex send_agents when: not empty(unity_player) {\n\t\t\n\t\t// add attributes to send to Unity. We send one attribute "type" for the dynamic_punctual_agent agents, \n\t\t// that will have for name "type" in uniy and which is an integer  (between 0 and 2 for each dynamic_punctual_agent).\n\t\t// get the value of type for each agent.\n\t\tlist<int> type_agents <-  dynamic_punctual_agent collect each.type;\n\t\t//put this list value in a map (several attributes can be send at the same time).\n\t\tmap<string,list<int>> atts <-  ["type":: type_agents];\n\t\t\n\t\t//at every step, we send the dynamic_punctual_agent agents with the up_car properties and the attributes "atts" \n\t\tdo add_geometries_to_send(dynamic_punctual_agent,up_car,atts);\t\n\t\t\n\t\t//we want to keep the dynamic_geometry_agent in their current state in Unity, so we add them in the geometries_to_keep list\n\t\tdo add_geometries_to_keep(dynamic_geometry_agent);\t\n\t}\n\t\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In Unity, we have first to add the attribute (with its type) in the Attributes class (Assets/Scripts/Gama Provider/Serialization). The name of the attribute variable have to be the same and the key in the ",(0,a.jsx)(t.em,{children:"add_geometries_to_send"})," action."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"[System.Serializable]\npublic class Attributes\n{\n   public int type;\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then, in Unity's SimulationManager class (or any class that inherits from SimulationManager), we override the ManageAttributes method. In this example, we change the color of the corresponding game object according to the value of the ",(0,a.jsx)(t.em,{children:"type"})," attribute."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"\npublic class ReceiveDynamicDataExample : SimulationManager\n{\n\n    //read the attributes send by GAMA and use it to define the color of the car objects\n    protected override void ManageAttributes(List<Attributes> attributes)\n    {\n        for (int i = 0; i < infoWorld.names.Count; i++)\n        {\n            string name = infoWorld.names[i];\n            int type = attributes[i].type;\n            List<object> o = geometryMap[name];\n            GameObject obj = (GameObject)o[0];\n            if (type == 0)\n            {\n                ChangeColor(obj, Color.white);\n            }\n            else if (type == 1)\n            {\n                ChangeColor(obj, Color.blue);\n            }\n            else if (type == 2)\n            {\n                ChangeColor(obj, Color.red);\n            }\n        }\n        \n    }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.RP)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{RP:()=>s,xA:()=>r});var i=n(6540);const a=i.createContext({});function s(e){const t=i.useContext(a);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||o:s(e),i.createElement(a.Provider,{value:r},t)}}}]);