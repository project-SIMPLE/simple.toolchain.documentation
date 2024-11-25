"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5521],{740:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Tutorials/Defining_Interactions","title":"Defining_Interactions","description":"Defining new interactions","source":"@site/docs/Tutorials/Defining_Interactions.md","sourceDirName":"Tutorials","slug":"/Tutorials/Defining_Interactions","permalink":"/Tutorials/Defining_Interactions","draft":false,"unlisted":false,"editUrl":"https://github.com/project-SIMPLE/documentation/tree/main/docs/Tutorials/Defining_Interactions.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"DefiningInteractions","permalink":"/Tutorials/DefiningInteractions"},"next":{"title":"Export-Data-from-Unity","permalink":"/Tutorials/Export-Data-from-Unity"}}');var o=t(4848),r=t(8453);const a={},s=void 0,c={},l=[{value:"Defining new interactions",id:"defining-new-interactions",level:2}];function u(e){const n={h2:"h2",p:"p",...(0,r.RP)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"defining-new-interactions",children:"Defining new interactions"}),"\n",(0,o.jsx)(n.p,{children:"Step 1 - defining a new input action"}),"\n",(0,o.jsx)(n.p,{children:"Double click on \xab\xa0XRI Default Input Actions\xa0\xbb in\nAssets/Samples/XR Interaction Toolkit/2.4.3/Starter Assets"}),"\n",(0,o.jsx)(n.p,{children:"If the wanted input action is not present, you can define a new one: select one action map, then in action, right click and choose \xab\xa0add action\xa0\xbb.  Choose a new name for the action, then do the binding with the controller: in the Binding, define the path. For Meta quest 2/3, choose \xab\xa0Oculus Touch Controller\xa0\xbb, then one of the button/trigger/touch of the controller"}),"\n",(0,o.jsx)(n.p,{children:"Step 2 - define the effects of this input action"}),"\n",(0,o.jsx)(n.p,{children:"Open the script \xab\xa0SimulationManagerInteraction\xa0\xbb in (Assets/Scripts/Gama Provider/Simulation)\nAdd a new variable \xab\xa0 [SerializeField] protected InputActionReference myButton = null;\xa0\xbb"}),"\n",(0,o.jsx)(n.p,{children:"Step 3 - Do the link between the input action and the script\nIn the Scene, inspect the game object \xabManager/Game Manager\xa0\xbb.\nGive a value for the variable \xab\xa0My Button\xa0\xbb - Click on the circle on the right of the field, and search the input action wanted (for example, the one created in step 1)."})]})}function d(e={}){const{wrapper:n}={...(0,r.RP)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{RP:()=>r,xA:()=>s});var i=t(6540);const o=i.createContext({});function r(e){const n=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||a:r(e),i.createElement(o.Provider,{value:s},n)}}}]);