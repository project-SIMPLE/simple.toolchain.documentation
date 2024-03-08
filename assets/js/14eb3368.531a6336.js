"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[969],{1243:(e,i,n)=>{n.d(i,{A:()=>g});n(6540);var s=n(8215),a=n(7559),t=n(7460),r=n(9169),c=n(8774),l=n(1312),o=n(6025),d=n(4848);function u(e){return(0,d.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){var e=(0,o.A)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(c.A,{"aria-label":(0,l.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function v(e){var i=e.children,n=e.href,s="breadcrumbs__link";return e.isLast?(0,d.jsx)("span",{className:s,itemProp:"name",children:i}):n?(0,d.jsx)(c.A,{className:s,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:i})}):(0,d.jsx)("span",{className:s,children:i})}function x(e){var i=e.children,n=e.active,a=e.index,t=e.addMicrodata;return(0,d.jsxs)("li",Object.assign({},t&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,s.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[i,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function g(){var e=(0,t.OF)(),i=(0,r.Dt)();return e?(0,d.jsx)("nav",{className:(0,s.A)(a.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,l.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[i&&(0,d.jsx)(h,{}),e.map((function(i,n){var s=n===e.length-1,a="category"===i.type&&i.linkUnlisted?void 0:i.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(v,{href:a,isLast:s,children:i.label})},n)}))]})}):null}},4136:(e,i,n)=>{n.r(i),n.d(i,{default:()=>y});n(6540);var s=n(1003),a=n(7460),t=n(6025),r=n(8215),c=n(8774),l=n(6654),o=n(1312),d=n(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=n(4848);function h(e){var i=e.href,n=e.children;return(0,m.jsx)(c.A,{href:i,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function b(e){var i=e.href,n=e.icon,s=e.title,a=e.description;return(0,m.jsxs)(h,{href:i,children:[(0,m.jsxs)(d.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),a&&(0,m.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function v(e){var i,n=e.item,s=(0,a.Nr)(n);return s?(0,m.jsx)(b,{href:s,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(i=n.description)?i:(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function x(e){var i,n,s=e.item,t=(0,l.A)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.cC)(null!=(i=s.docId)?i:void 0);return(0,m.jsx)(b,{href:s.href,icon:t,title:s.label,description:null!=(n=s.description)?n:null==r?void 0:r.description})}function g(e){var i=e.item;switch(i.type){case"link":return(0,m.jsx)(x,{item:i});case"category":return(0,m.jsx)(v,{item:i});default:throw new Error("unknown item type "+JSON.stringify(i))}}function p(e){var i=e.className,n=(0,a.$S)();return(0,m.jsx)(j,{items:n.items,className:i})}function j(e){var i=e.items,n=e.className;if(!i)return(0,m.jsx)(p,Object.assign({},e));var s=(0,a.d1)(i);return(0,m.jsx)("section",{className:(0,r.A)("row",n),children:s.map((function(e,i){return(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(g,{item:e})},i)}))})}var f=n(6929),A=n(1878),N=n(4267),T=n(1243);const _={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function L(e){var i=e.categoryGeneratedIndex;return(0,m.jsx)(s.be,{title:i.title,description:i.description,keywords:i.keywords,image:(0,t.A)(i.image)})}function k(e){var i=e.categoryGeneratedIndex,n=(0,a.$S)();return(0,m.jsxs)("div",{className:_.generatedIndexPage,children:[(0,m.jsx)(A.A,{}),(0,m.jsx)(T.A,{}),(0,m.jsx)(N.A,{}),(0,m.jsxs)("header",{children:[(0,m.jsx)(d.A,{as:"h1",className:_.title,children:i.title}),i.description&&(0,m.jsx)("p",{children:i.description})]}),(0,m.jsx)("article",{className:"margin-top--lg",children:(0,m.jsx)(j,{items:n.items,className:_.list})}),(0,m.jsx)("footer",{className:"margin-top--lg",children:(0,m.jsx)(f.A,{previous:i.navigation.previous,next:i.navigation.next})})]})}function y(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(L,Object.assign({},e)),(0,m.jsx)(k,Object.assign({},e))]})}},6929:(e,i,n)=>{n.d(i,{A:()=>l});n(6540);var s=n(1312),a=n(8215),t=n(8774),r=n(4848);function c(e){var i=e.permalink,n=e.title,s=e.subLabel,c=e.isNext;return(0,r.jsxs)(t.A,{className:(0,a.A)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:i,children:[s&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}function l(e){var i=e.previous,n=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[i&&(0,r.jsx)(c,Object.assign({},i,{subLabel:(0,r.jsx)(s.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,r.jsx)(c,Object.assign({},n,{subLabel:(0,r.jsx)(s.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},4267:(e,i,n)=>{n.d(i,{A:()=>l});n(6540);var s=n(8215),a=n(1312),t=n(7559),r=n(2252),c=n(4848);function l(e){var i=e.className,n=(0,r.r)();return n.badge?(0,c.jsx)("span",{className:(0,s.A)(i,t.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},1878:(e,i,n)=>{n.d(i,{A:()=>x});n(6540);var s=n(8215),a=n(4586),t=n(8774),r=n(1312),c=n(4070),l=n(7559),o=n(5597),d=n(2252),u=n(4848);var m={unreleased:function(e){var i=e.siteTitle,n=e.versionMetadata;return(0,u.jsx)(r.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:i,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var i=e.siteTitle,n=e.versionMetadata;return(0,u.jsx)(r.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:i,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){var i=m[e.versionMetadata.banner];return(0,u.jsx)(i,Object.assign({},e))}function b(e){var i=e.versionLabel,n=e.to,s=e.onClick;return(0,u.jsx)(r.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:i,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(t.A,{to:n,onClick:s,children:(0,u.jsx)(r.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function v(e){var i,n=e.className,t=e.versionMetadata,r=(0,a.A)().siteConfig.title,d=(0,c.vT)({failfast:!0}).pluginId,m=(0,o.g1)(d).savePreferredVersionName,v=(0,c.HW)(d),x=v.latestDocSuggestion,g=v.latestVersionSuggestion,p=null!=x?x:(i=g).docs.find((function(e){return e.id===i.mainDocId}));return(0,u.jsxs)("div",{className:(0,s.A)(n,l.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:r,versionMetadata:t})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:g.label,to:p.path,onClick:function(){return m(g.name)}})})]})}function x(e){var i=e.className,n=(0,d.r)();return n.banner?(0,u.jsx)(v,{className:i,versionMetadata:n}):null}}}]);