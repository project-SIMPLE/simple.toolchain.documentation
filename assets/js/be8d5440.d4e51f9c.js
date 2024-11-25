"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[827],{2005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"Toolchain/Recipes/ManagingWater","title":"Managing Water from GAMA","description":"**Link to the example model**: LinkToUnity/Models/Code Examples/Send Water data.gaml","source":"@site/docs/Toolchain/04-Recipes/08-ManagingWater.md","sourceDirName":"Toolchain/04-Recipes","slug":"/Toolchain/Recipes/ManagingWater","permalink":"/Toolchain/Recipes/ManagingWater","draft":false,"unlisted":false,"editUrl":"https://github.com/project-SIMPLE/documentation/tree/main/docs/Toolchain/04-Recipes/08-ManagingWater.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Sending a Digital Elevation Model (DEM) from GAMA","permalink":"/Toolchain/Recipes/SendingDEM"},"next":{"title":"Constraining movement of players from GAMA","permalink":"/Toolchain/Recipes/ConstrainingPlayerMovement"}}');var i=n(4848),o=n(8453);const r={},s="Managing Water from GAMA",c={},l=[];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.RP)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"managing-water-from-gama",children:"Managing Water from GAMA"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Link to the example model"})}),": ",(0,i.jsx)(t.a,{href:"https://github.com/project-SIMPLE/simple.toolchain/blob/2024-06/GAMA%20Plugin/gaml.extension.unity/models/LinkToUnity/Models/Code%20Examples/Send%20Water%20data.gaml",children:"LinkToUnity/Models/Code Examples/Send Water data.gaml"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://github.com/user-attachments/assets/b34029f6-19bc-4bae-801e-e4b416efce74",alt:"ezgif com-optimize"})}),"\n",(0,i.jsx)(t.p,{children:"The principle is to send a set of geometries for the water agent using a water material. Note that to use a material, it has to be located in the Resources folder of Unity project."}),"\n",(0,i.jsx)(t.p,{children:"For that, we define a specific unity property for the water."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'//action that defines the different unity properties\naction define_properties {\n\t//define a unity_aspect called water_aspect that will display in Unity the agents from its geometry, with a height of 1m, the material "Water Material", the white color, and the default precision\n\tunity_aspect water_aspect <- geometry_aspect(1.0, "Materials/Water/Water Material",#white, precision);\n\n\t//define the up_water unity property, with the name "water", no specific layer, the water_aspect unity aspect, no interaction, and the agent location is not sent back\n\t//to GAMA.\n\tup_water<- geometry_properties("water", nil, water_aspect, #no_interaction,false);\n\n\t// add the up_water unity_property to the list of unity_properties\n\tunity_properties << up_water;\n}\n\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Then, we add the water geometry at the right location (z-value) at every step using the ",(0,i.jsx)(t.strong,{children:"add_geometries_to_send"})," action of the Unity Linker agent."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"do add_geometries_to_send(water collect (each.shape at_location {each.location.x,each.location.y, global_water_level}),up_water);\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.RP)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{RP:()=>o,xA:()=>s});var a=n(6540);const i=a.createContext({});function o(e){const t=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||r:o(e),a.createElement(i.Provider,{value:s},t)}}}]);