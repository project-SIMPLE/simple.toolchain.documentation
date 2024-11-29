"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1566],{1929:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Tools/MetaQuest/troubleshooting","title":"Troubleshooting","description":"By design, Meta Quest headsets are based on Android systems. Therefore, the headsets mimic the behavior of a typical Android smartphone, and most of the issues you encounter may stem from this.","source":"@site/docs/Tools/MetaQuest/troubleshooting.md","sourceDirName":"Tools/MetaQuest","slug":"/Tools/MetaQuest/troubleshooting","permalink":"/Tools/MetaQuest/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/project-SIMPLE/documentation/tree/main/docs/Tools/MetaQuest/troubleshooting.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Useful tools","permalink":"/Tools/MetaQuest/tools"},"next":{"title":"GAMA Platform","permalink":"/Tools/Gama"}}');var n=o(4848),i=o(8453);const a={},r="Troubleshooting",l={},d=[{value:"Headsets Keep Disconnecting from Wi-Fi",id:"headsets-keep-disconnecting-from-wi-fi",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,n.jsx)(t.p,{children:"By design, Meta Quest headsets are based on Android systems. Therefore, the headsets mimic the behavior of a typical Android smartphone, and most of the issues you encounter may stem from this."}),"\n",(0,n.jsx)(t.h2,{id:"headsets-keep-disconnecting-from-wi-fi",children:"Headsets Keep Disconnecting from Wi-Fi"}),"\n",(0,n.jsx)(t.p,{children:"By default, headsets probe new networks they connect to by sending a ping and trying to detect a captive portal if there is one."}),"\n",(0,n.jsx)(t.p,{children:"In the SIMPLE project, we're using dedicated private Wi-Fi that is disconnected from the internet, which causes the probing system to fail and prevents auto-connection of the headsets to these networks."}),"\n",(0,n.jsx)(t.p,{children:"Luckily for us, it's possible to disable this behavior with the following commands:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'# Disable captive portal probing\nadb shell "settings put global captive_portal_detection_enabled 0"\n\n# Set the probing URL to localhost to always get a positive response (in case it gets re-activated)\nadb shell "settings put global captive_portal_server localhost"\n\n# Disable captive portal mode\nadb shell "settings put global captive_portal_mode 0"\n\n# Restart headset (recommended)\nadb reboot\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,o)=>{o.d(t,{RP:()=>i,xA:()=>r});var s=o(6540);const n=s.createContext({});function i(e){const t=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||a:i(e),s.createElement(n.Provider,{value:r},t)}}}]);