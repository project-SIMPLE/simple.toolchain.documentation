"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[817],{1310:(e,s,i)=>{i.d(s,{Z:()=>g});i(7294);var n=i(6905),a=i(5281),t=i(8425),r=i(8596),c=i(9960),l=i(5999),o=i(4996),d=i(5893);function u(e){return(0,d.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){var e=(0,o.Z)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(c.Z,{"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function v(e){var s=e.children,i=e.href,n="breadcrumbs__link";return e.isLast?(0,d.jsx)("span",{className:n,itemProp:"name",children:s}):i?(0,d.jsx)(c.Z,{className:n,href:i,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:s})}):(0,d.jsx)("span",{className:n,children:s})}function x(e){var s=e.children,i=e.active,a=e.index,t=e.addMicrodata;return(0,d.jsxs)("li",Object.assign({},t&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,n.Z)("breadcrumbs__item",{"breadcrumbs__item--active":i}),children:[s,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function g(){var e=(0,t.s1)(),s=(0,r.Ns)();return e?(0,d.jsx)("nav",{className:(0,n.Z)(a.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[s&&(0,d.jsx)(h,{}),e.map((function(s,i){var n=i===e.length-1,a="category"===s.type&&s.linkUnlisted?void 0:s.href;return(0,d.jsx)(x,{active:n,index:i,addMicrodata:!!a,children:(0,d.jsx)(v,{href:a,isLast:n,children:s.label})},i)}))]})}):null}},4228:(e,s,i)=>{i.r(s),i.d(s,{default:()=>I});i(7294);var n=i(1944),a=i(8425),t=i(4996),r=i(6905),c=i(9960),l=i(3919),o=i(5999),d=i(2503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=i(5893);function h(e){var s=e.href,i=e.children;return(0,m.jsx)(c.Z,{href:s,className:(0,r.Z)("card padding--lg",u.cardContainer),children:i})}function b(e){var s=e.href,i=e.icon,n=e.title,a=e.description;return(0,m.jsxs)(h,{href:s,children:[(0,m.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:n,children:[i," ",n]}),a&&(0,m.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:a,children:a})]})}function v(e){var s,i=e.item,n=(0,a.LM)(i);return n?(0,m.jsx)(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:i.label,description:null!=(s=i.description)?s:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:i.items.length})}):null}function x(e){var s,i,n=e.item,t=(0,l.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(null!=(s=n.docId)?s:void 0);return(0,m.jsx)(b,{href:n.href,icon:t,title:n.label,description:null!=(i=n.description)?i:null==r?void 0:r.description})}function g(e){var s=e.item;switch(s.type){case"link":return(0,m.jsx)(x,{item:s});case"category":return(0,m.jsx)(v,{item:s});default:throw new Error("unknown item type "+JSON.stringify(s))}}function j(e){var s=e.className,i=(0,a.jA)();return(0,m.jsx)(p,{items:i.items,className:s})}function p(e){var s=e.items,i=e.className;if(!s)return(0,m.jsx)(j,Object.assign({},e));var n=(0,a.MN)(s);return(0,m.jsx)("section",{className:(0,r.Z)("row",i),children:n.map((function(e,s){return(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(g,{item:e})},s)}))})}var f=i(4966),N=i(3120),Z=i(4364),L=i(1310);const _={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function k(e){var s=e.categoryGeneratedIndex;return(0,m.jsx)(n.d,{title:s.title,description:s.description,keywords:s.keywords,image:(0,t.Z)(s.image)})}function T(e){var s=e.categoryGeneratedIndex,i=(0,a.jA)();return(0,m.jsxs)("div",{className:_.generatedIndexPage,children:[(0,m.jsx)(N.Z,{}),(0,m.jsx)(L.Z,{}),(0,m.jsx)(Z.Z,{}),(0,m.jsxs)("header",{children:[(0,m.jsx)(d.Z,{as:"h1",className:_.title,children:s.title}),s.description&&(0,m.jsx)("p",{children:s.description})]}),(0,m.jsx)("article",{className:"margin-top--lg",children:(0,m.jsx)(p,{items:i.items,className:_.list})}),(0,m.jsx)("footer",{className:"margin-top--lg",children:(0,m.jsx)(f.Z,{previous:s.navigation.previous,next:s.navigation.next})})]})}function I(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k,Object.assign({},e)),(0,m.jsx)(T,Object.assign({},e))]})}},4966:(e,s,i)=>{i.d(s,{Z:()=>l});i(7294);var n=i(5999),a=i(6905),t=i(9960),r=i(5893);function c(e){var s=e.permalink,i=e.title,n=e.subLabel,c=e.isNext;return(0,r.jsxs)(t.Z,{className:(0,a.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:s,children:[n&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,r.jsx)("div",{className:"pagination-nav__label",children:i})]})}function l(e){var s=e.previous,i=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[s&&(0,r.jsx)(c,Object.assign({},s,{subLabel:(0,r.jsx)(n.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),i&&(0,r.jsx)(c,Object.assign({},i,{subLabel:(0,r.jsx)(n.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},4364:(e,s,i)=>{i.d(s,{Z:()=>l});i(7294);var n=i(6905),a=i(5999),t=i(5281),r=i(4477),c=i(5893);function l(e){var s=e.className,i=(0,r.E)();return i.badge?(0,c.jsx)("span",{className:(0,n.Z)(s,t.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(a.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:i.label},children:"Version: {versionLabel}"})}):null}},3120:(e,s,i)=>{i.d(s,{Z:()=>x});i(7294);var n=i(6905),a=i(2263),t=i(9960),r=i(5999),c=i(143),l=i(5281),o=i(373),d=i(4477),u=i(5893);var m={unreleased:function(e){var s=e.siteTitle,i=e.versionMetadata;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:s,versionLabel:(0,u.jsx)("b",{children:i.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var s=e.siteTitle,i=e.versionMetadata;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:s,versionLabel:(0,u.jsx)("b",{children:i.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){var s=m[e.versionMetadata.banner];return(0,u.jsx)(s,Object.assign({},e))}function b(e){var s=e.versionLabel,i=e.to,n=e.onClick;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:s,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(t.Z,{to:i,onClick:n,children:(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function v(e){var s,i=e.className,t=e.versionMetadata,r=(0,a.Z)().siteConfig.title,d=(0,c.gA)({failfast:!0}).pluginId,m=(0,o.J)(d).savePreferredVersionName,v=(0,c.Jo)(d),x=v.latestDocSuggestion,g=v.latestVersionSuggestion,j=null!=x?x:(s=g).docs.find((function(e){return e.id===s.mainDocId}));return(0,u.jsxs)("div",{className:(0,n.Z)(i,l.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:t})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:g.label,to:j.path,onClick:function(){return m(g.name)}})})]})}function x(e){var s=e.className,i=(0,d.E)();return i.banner?(0,u.jsx)(v,{className:s,versionMetadata:i}):null}}}]);