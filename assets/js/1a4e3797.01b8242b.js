"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2138],{1430:(e,r,t)=>{t.d(r,{W:()=>u});var n=t(6540),a=t(797),s=["zero","one","two","few","many","other"];function c(e){return s.filter((function(r){return e.includes(r)}))}var l={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,a.A)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return r=e,t=new Intl.PluralRules(r),{locale:r,pluralForms:c(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),l}var r,t}),[e])}function u(){var e=o();return{selectMessage:function(r,t){return function(e,r,t){var n=e.split("|");if(1===n.length)return n[0];n.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var a=t.select(r),s=t.pluralForms.indexOf(a);return n[Math.min(s,n.length-1)]}(t,r,e)}}}},1738:(e,r,t)=>{t.r(r),t.d(r,{default:()=>U});var n=t(3845),a=t(675),s=t(467),c=t(6540),l=t(797),o=t(9795),u=t(7143),i=t(6289),h=t(539),d=t(1430),m=t(53),p=t(6347),f=t(9136),g=t(5351);const x=function(){var e=(0,f.A)(),r=(0,p.W6)(),t=(0,p.zy)(),n=(0,l.A)().siteConfig.baseUrl,a=e?new URLSearchParams(t.search):null,s=(null==a?void 0:a.get("q"))||"",c=(null==a?void 0:a.get("ctx"))||"",o=(null==a?void 0:a.get("version"))||"",u=function(e){var r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:s,searchContext:c&&Array.isArray(g.Hg)&&g.Hg.some((function(e){return"string"==typeof e?e===c:e.path===c}))?c:"",searchVersion:o,updateSearchPath:function(e){var t=u(e);r.replace({search:t.toString()})},updateSearchContext:function(e){var n=new URLSearchParams(t.search);n.set("ctx",e),r.replace({search:n.toString()})},generateSearchPageLink:function(e){var r=u(e);return n+"search?"+r.toString()}}};var v=t(4342),y=t(5203),j=t(3008),A=t(6826),S=t(6068),w=t(6609),C=t(6985),b=t(2142);const P="searchContextInput_mXoe",F="searchQueryInput_CFBF",R="searchResultItem_U687",T="searchResultItemPath_uIbk",_="searchResultItemSummary_oZHr",k="searchQueryColumn_q7nx",I="searchContextColumn_oWAF";var H=t(596),N=t(4848);function q(){var e,r=(0,l.A)(),t=r.siteConfig.baseUrl,n=r.i18n.currentLocale,o=(0,d.W)().selectMessage,i=x(),p=i.searchValue,f=i.searchContext,j=i.searchVersion,A=i.updateSearchPath,S=i.updateSearchContext,w=(0,c.useState)(p),b=w[0],R=w[1],T=(0,c.useState)(),_=T[0],q=T[1],U=(0,c.useState)(),z=U[0],M=U[1],E=""+t+j,D=(0,c.useMemo)((function(){return b?(0,h.T)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:b}):(0,h.T)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})}),[b]);(0,c.useEffect)((function(){A(b),_&&(b?_(b,(function(e){M(e)})):M(void 0))}),[b,_]);var V=(0,c.useCallback)((function(e){R(e.target.value)}),[]);return(0,c.useEffect)((function(){p&&p!==b&&R(p)}),[p]),(0,c.useEffect)((function(){function e(){return(e=(0,s.A)((0,a.A)().mark((function e(){var r,t,n;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(g.Hg)&&!f&&!g.dz){e.next=6;break}return e.next=3,(0,v.Z)(E,f);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0={wrappedIndexes:[],zhDictionary:[]};case 7:r=e.t0,t=r.wrappedIndexes,n=r.zhDictionary,q((function(){return(0,y.m)(t,n,100)}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f,E]),(0,N.jsxs)(c.Fragment,{children:[(0,N.jsxs)(u.A,{children:[(0,N.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,N.jsx)("title",{children:D})]}),(0,N.jsxs)("div",{className:"container margin-vert--lg",children:[(0,N.jsx)("h1",{children:D}),(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:(0,m.A)("col",(e={},e[k]=Array.isArray(g.Hg),e["col--9"]=Array.isArray(g.Hg),e["col--12"]=!Array.isArray(g.Hg),e)),children:(0,N.jsx)("input",{type:"search",name:"q",className:F,"aria-label":"Search",onChange:V,value:b,autoComplete:"off",autoFocus:!0})}),Array.isArray(g.Hg)?(0,N.jsx)("div",{className:(0,m.A)("col","col--3","padding-left--none",I),children:(0,N.jsxs)("select",{name:"search-context",className:P,id:"context-selector",value:f,onChange:function(e){return S(e.target.value)},children:[g.dz&&(0,N.jsx)("option",{value:"",children:(0,h.T)({id:"theme.SearchPage.searchContext.everywhere",message:"Everywhere"})}),g.Hg.map((function(e){var r=(0,H.p)(e,n),t=r.label,a=r.path;return(0,N.jsx)("option",{value:a,children:t},a)}))]})}):null]}),!_&&b&&(0,N.jsx)("div",{children:(0,N.jsx)(C.A,{})}),z&&(z.length>0?(0,N.jsx)("p",{children:o(z.length,(0,h.T)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:z.length}))}):(0,N.jsx)("p",{children:(0,h.T)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,N.jsx)("section",{children:z&&z.map((function(e){return(0,N.jsx)(L,{searchResult:e},e.document.i)}))})]})]})}function L(e){var r=e.searchResult,t=r.document,a=r.type,s=r.page,c=r.tokens,l=r.metadata,o=a===j.i.Title,u=a===j.i.Keywords,h=a===j.i.Description,d=h||u,m=o||d,p=a===j.i.Content,f=(o?t.b:s.b).slice(),x=p||d?t.s:t.t;m||f.push(s.t);var v="";if(g.CU&&c.length>0){for(var y,C=new URLSearchParams,P=(0,n.A)(c);!(y=P()).done;){var F=y.value;C.append("_highlight",F)}v="?"+C.toString()}return(0,N.jsxs)("article",{className:R,children:[(0,N.jsx)("h2",{children:(0,N.jsx)(i.A,{to:t.u+v+(t.h||""),dangerouslySetInnerHTML:{__html:p||d?(0,A.Z)(x,c):(0,S.C)(x,(0,w.g)(l,"t"),c,100)}})}),f.length>0&&(0,N.jsx)("p",{className:T,children:(0,b.$)(f)}),(p||h)&&(0,N.jsx)("p",{className:_,dangerouslySetInnerHTML:{__html:(0,S.C)(t.t,(0,w.g)(l,"t"),c,100)}})]})}const U=function(){return(0,N.jsx)(o.A,{children:(0,N.jsx)(q,{})})}}}]);