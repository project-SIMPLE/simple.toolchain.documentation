"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5522],{2061:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Tools/MetaQuest/casting","title":"Casting headset","description":"Here are the two main ways to display the live headset video on another screen.","source":"@site/docs/Tools/MetaQuest/casting.md","sourceDirName":"Tools/MetaQuest","slug":"/Tools/MetaQuest/casting","permalink":"/Tools/MetaQuest/casting","draft":false,"unlisted":false,"editUrl":"https://github.com/project-SIMPLE/documentation/tree/main/docs/Tools/MetaQuest/casting.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Meta Quest Headset","permalink":"/category/meta-quest-headset"},"next":{"title":"Useful tools","permalink":"/Tools/MetaQuest/tools"}}');var i=s(4848),r=s(8453);const a={},o="Casting headset",c={},l=[{value:"Online casting",id:"online-casting",level:2},{value:"Offline casting",id:"offline-casting",level:2},{value:"Activate Wireless ADB",id:"activate-wireless-adb",level:3},{value:"Start scrcpy stream",id:"start-scrcpy-stream",level:3},{value:"scrcpy v2.X",id:"scrcpy-v2x",level:4},{value:"Meta Quest 2",id:"meta-quest-2",level:5},{value:"Meta Quest 3",id:"meta-quest-3",level:5},{value:"scrcpy v3.X",id:"scrcpy-v3x",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.RP)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"casting-headset",children:"Casting headset"})}),"\n",(0,i.jsx)(t.p,{children:"Here are the two main ways to display the live headset video on another screen."}),"\n",(0,i.jsxs)(t.p,{children:["In the context of SIMPLE, we recommend the ",(0,i.jsx)(t.strong,{children:"Offline casting"})," solution. Since the project is supposed to run offline in schools, it is the primary method. This approach is not affected by unstable internet connections and generally provides better streaming quality performance."]}),"\n",(0,i.jsx)(t.h2,{id:"online-casting",children:"Online casting"}),"\n",(0,i.jsx)(t.p,{children:"(this steps order is important to respect and follow)"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Ensure the VR headset and the computer are on the same network"}),"\n",(0,i.jsxs)(t.li,{children:["On the computer, open the website : ",(0,i.jsx)(t.a,{href:"https://oculus.com/casting",children:"https://oculus.com/casting"})]}),"\n",(0,i.jsx)(t.li,{children:"In the headset, enable the screen casting"}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["In the sub menu, choose cast to ",(0,i.jsx)(t.code,{children:"Computer"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"offline-casting",children:"Offline casting"}),"\n",(0,i.jsxs)(t.p,{children:["This method use the ",(0,i.jsx)(t.a,{href:"https://github.com/Genymobile/scrcpy",children:"scrcpy"})," project which can get video stream from ADB (Android Debug Bridge). Therefore, it's a little more complex to prepare, but allow offline and better quality stream."]}),"\n",(0,i.jsx)(t.h3,{id:"activate-wireless-adb",children:"Activate Wireless ADB"}),"\n",(0,i.jsxs)(t.p,{children:["The classical way is to plug a computer to the headset, allow USB connection inside the headset and run the command ",(0,i.jsx)(t.code,{children:"adb tcpip 5555"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://www.virtu-al.net/wp-content/uploads/2019/11/com.oculus.vrshell-20191111-141155-768x768.jpg",alt:"ADB enable screenshot"})}),"\n",(0,i.jsxs)(t.p,{children:["Otherwise, a simplier way is to use a tool developed for this particular need and available as an APK to install inside the headset : ",(0,i.jsx)(t.a,{href:"https://github.com/thedroidgeek/oculus-wireless-adb/releases/tag/1.2",children:"https://github.com/thedroidgeek/oculus-wireless-adb"})]}),"\n",(0,i.jsx)(t.h3,{id:"start-scrcpy-stream",children:"Start scrcpy stream"}),"\n",(0,i.jsx)(t.h4,{id:"scrcpy-v2x",children:"scrcpy v2.X"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Deprecated method, please prefer scrcpy v3"}),(0,i.jsx)(t.h5,{id:"meta-quest-2",children:"Meta Quest 2"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"scrcpy --tcpip=<IPv4.ADDRESS.OF.HEADSET> --crop <CROP:VALUE:TO:DISPLAY> --stay-awake --disable-screensaver --no-audio --video-bit-rate 1M --display-buffer=200 --video-codec=h265 --max-fps=20\n"})}),(0,i.jsx)(t.p,{children:"Crop"}),(0,i.jsx)(t.p,{children:"-> round view"}),(0,i.jsxs)(t.p,{children:["-> (cutted) Full screen\n1632:1220","\ud83d\udcaf","320"]}),(0,i.jsx)(t.h5,{id:"meta-quest-3",children:"Meta Quest 3"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"scrcpy --tcpip=<IP.ADDRESS> --crop 2064:2208:2064:0 --stay-awake --disable-screensaver --no-audio --video-bit-rate 1M --display-buffer=200 --video-codec=h265 --max-fps=20\n"})}),(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["If you're running system on Linux, by default scrcpy is running on ",(0,i.jsx)(t.code,{children:"x11"}),". To enable wayland support, you should set the envrionment variable ",(0,i.jsx)(t.code,{children:"SDL_VIDEODRIVER=wayland"})]})})]}),"\n",(0,i.jsx)(t.h4,{id:"scrcpy-v3x",children:"scrcpy v3.X"}),"\n",(0,i.jsx)(t.p,{children:"This new major release introduced a new feature to angled the point of view in the headset. Therefore it's possible to use this command to achieve a almost similar view as the online streaming :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"scrcpy --tcpip=<IP.ADDRESS> --angle 20 --crop 1508:1708:300:200 --stay-awake --disable-screensaver --no-audio --video-bit-rate 1M --video-buffer=200 --video-codec=h265 --max-fps=20\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.RP)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{RP:()=>r,xA:()=>o});var n=s(6540);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:r(e),n.createElement(i.Provider,{value:o},t)}}}]);