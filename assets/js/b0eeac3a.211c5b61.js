"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4775],{7284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Toolchain/Recipes/GrabbingObjects","title":"Grabbing objects","description":"**Link to the example model**: LinkToUnity/Models/Code Examples/User Interaction.gaml","source":"@site/docs/Toolchain/04-Recipes/03-GrabbingObjects.md","sourceDirName":"Toolchain/04-Recipes","slug":"/Toolchain/Recipes/GrabbingObjects","permalink":"/Toolchain/Recipes/GrabbingObjects","draft":false,"unlisted":false,"editUrl":"https://github.com/project-SIMPLE/documentation/tree/main/docs/Toolchain/04-Recipes/03-GrabbingObjects.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Debugging","permalink":"/Toolchain/Recipes/Debugging"},"next":{"title":"Defining new interactions","permalink":"/Toolchain/Recipes/DefiningInteractions"}}');var o=n(4848),s=n(8453);const a={},r="Grabbing objects",c={},l=[];function b(e){const t={a:"a",code:"code",em:"em",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.RP)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"grabbing-objects",children:"Grabbing objects"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:(0,o.jsx)(t.strong,{children:"Link to the example model"})}),": ",(0,o.jsx)(t.a,{href:"https://github.com/project-SIMPLE/simple.toolchain/blob/2024-06/GAMA%20Plugin/gaml.extension.unity/models/LinkToUnity/Models/Code%20Examples/User%20Interaction.gaml",children:"LinkToUnity/Models/Code Examples/User Interaction.gaml"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://github.com/user-attachments/assets/8b1c9614-6a7f-4cd8-a535-985529425e7a",alt:"grab-ezgif com-optimize"})}),"\n",(0,o.jsx)(t.p,{children:"The SIMPLE toolkit offers several forms of interaction with objects defined in unity properties."}),"\n",(0,o.jsx)(t.p,{children:"More precisely :"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"#no_interaction: no interaction with the object."}),"\n",(0,o.jsx)(t.li,{children:"#collider: gives the object a physical existence (the player can't pass through it) but no interaction with it."}),"\n",(0,o.jsx)(t.li,{children:"#ray_interactable: the object has a collider and the player can select it with a ray."}),"\n",(0,o.jsx)(t.li,{children:'#grabable: the object has a collider and can be grabbed and moved by the player - an object cannot be both grabbable and selectable by a ray. Note that it is possible for grabbable objects to be tracked from GAMA. To do this, select "send back to GAMA" and the object\'s position will be sent back to GAMA in real time.'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:'To make an object grabbable, just select the "collider", "interactable" and "grabbable" options in the Unity Properties wizard. You can also select "send back to GAMA" to track object movements in GAMA.'}),"\n",(0,o.jsx)("img",{width:"850",alt:"Wizard-grab_property",src:"https://github.com/user-attachments/assets/86863289-a533-491d-9d04-fd49244c2697"}),"\n",(0,o.jsx)(t.p,{children:"This corresponds to this code in GAML:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-gaml",children:'geometry_properties("grabable_object", nil, object_aspect, #grabable, true);\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.RP)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}},8453:(e,t,n)=>{n.d(t,{RP:()=>s,xA:()=>r});var i=n(6540);const o=i.createContext({});function s(e){const t=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||a:s(e),i.createElement(o.Provider,{value:r},t)}}}]);