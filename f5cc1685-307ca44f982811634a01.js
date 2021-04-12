(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6530],{80004:function(e,t,i){"use strict";i.d(t,{j:function(){return D}});var a=i(80018),r=i(96156),s=i(15007),n=i(95926),o=i(12992),c=i(10755),l=i(97155),d=i(2731),m=i(72390);function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}var p=[{title:"Last updated",value:"last_updated",filter:function(e){return e.sort((function(e,t){var i=e.lastUpdated,a=t.lastUpdated;return new Date(a)>new Date(i)?1:new Date(a)<new Date(i)?-1:0}))}},{title:"Name",value:"name",filter:function(e){return e.sort((function(e,t){var i=e.name,a=t.name;return i.localeCompare(a)}))}},{title:"Custom",value:"id",filter:function(e,t){void 0===t&&(t=[]);var i=[];return t.forEach((function(t){var a=e.find((function(e){return e.id===t}));a&&i.push(a)})),i}}],v={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},f={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},g={name:"jfisvt",styles:"height:auto;margin-bottom:0!important"},y={name:"lb9ais",styles:"font-size:var(--spectrum-global-dimension-size-200)"},b={name:"18q6r0i",styles:"margin-top:0!important;margin-bottom:var(--spectrum-global-dimension-size-100)!important"},h={name:"4iuuc6",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-bottom:var(--spectrum-global-dimension-size-200)"},w={name:"1b40y0w",styles:"height:var(--spectrum-global-dimension-size-3000);overflow:auto;text-align:left"},x={name:"82a6rk",styles:"flex:1"},Z={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},j={name:"16hp6jg",styles:"margin-top:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column"},z={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},O={name:"1swdil1",styles:"display:flex;align-items:start;flex-direction:column"},C={name:"jqnfog",styles:"display:flex;align-items:end;width:var(--spectrum-global-dimension-size-3000);flex-direction:column"},N={name:"1jq71rh",styles:"display:flex;align-items:right;height:var(--spectrum-global-dimension-size-800);justify-content:flex-end;margin-right:var(--spectrum-global-dimension-size-400)"},k={name:"upcn9w",styles:"max-width:var(--spectrum-global-dimension-static-grid-fixed-max-width);margin:var(--spectrum-global-dimension-size-400) auto"},D=function(e){var t=e.clouds,i=void 0===t?[]:t,D=e.products,P=void 0===D?[]:D,S=e.interaction,_=void 0!==S&&S,q=e.orderBy,B=void 0===q?"last_updated":q,E=e.filterByCloud,H=void 0===E?[]:E,X=e.filterByIds,A=void 0===X?[]:X;A.length&&(B="id");var F=p.find((function(e){return e.value===B}));F.ids=A;var I=(0,s.useState)(F.value),L=I[0],Q=I[1],U=(0,s.useState)(F.filter(P,F.ids)),V=U[0],G=U[1],J=(0,s.useState)(H),K=J[0],M=J[1];(0,s.useEffect)((function(){!function(e,t,i,a){var r=e.filter((function(e){var i=e.cloud;return t.some((function(e){return i===e}))})),s=p.find((function(e){return e.value===i}));a(s.filter(r,s.ids))}(P,K.length?K:i,L,G)}),[K,L]);var R="calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-500))",T="calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-800))";return(0,n.tZ)("section",{className:"spectrum--light",css:k},_&&(0,n.tZ)("div",{css:N},(0,n.tZ)(l.c,{isQuiet:!0,items:p.slice(0,2).map((function(e){return e.value===B?function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){(0,r.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({selected:!0},e):e})),"aria-label":"Filter by name or last updated product",onChange:function(e){Q(p[e].value)}})),(0,n.tZ)("div",{css:(0,n.iv)("display:flex;@media screen and (max-width: ",m.p1,"){flex-direction:column;align-items:center;}","")},_&&(0,n.tZ)("div",{css:C},(0,n.tZ)("div",{css:O},(0,n.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:z},"Filter by"),(0,n.tZ)("div",{css:j},i.map((function(e,t){return(0,n.tZ)(c.X,{key:t,value:e,onChange:function(t){M(t?[].concat((0,a.Z)(K),[e]):K.filter((function(t){return t!==e})))},css:Z},e)}))))),(0,n.tZ)("div",{css:x},(0,n.tZ)("div",{css:(0,n.iv)("display:grid;grid-template-columns:repeat(auto-fit, ",T,");grid-auto-rows:",R,";justify-content:center;gap:var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",m.p1,"){margin-top:var(--spectrum-global-dimension-size-400);display:flex;flex-direction:column;}","")},V.map((function(e){return(0,n.tZ)("div",{key:e.id,role:"figure",tabIndex:"0",className:"spectrum-Card",css:(0,n.iv)("width:",T,";height:",R,";&:hover{border-color:var(--spectrum-global-color-gray-200);}@media screen and (max-width: ",m.p1,"){width:0;}","")},(0,n.tZ)("div",{className:"spectrum-Card-body",css:w},(0,n.tZ)("div",null,e.icon&&(0,n.tZ)("div",{css:h},(0,n.tZ)(d.E,{src:e.icon,"aria-hidden":"true",alt:""}))),(0,n.tZ)("div",{className:"spectrum-Card-header spectrum-Heading spectrum-Heading--sizeXXS",css:b},(0,n.tZ)("div",{className:"spectrum-Card-title",css:y},(0,n.tZ)("strong",null,e.name))),(0,n.tZ)("div",{className:"spectrum-Card-content spectrum-Body spectrum-Body--sizeS",css:g},e.description)),(0,n.tZ)("div",{className:"spectrum-Card-footer"},(0,n.tZ)("div",{css:(0,n.iv)("display:flex;justify-content:flex-end;flex-wrap:wrap;--gap:var(--spectrum-global-dimension-size-200);margin:calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));width:calc(100% + var(--gap));@media screen and (max-width: ",m.p1,"){justify-content:center;}","")},e.discover&&(0,n.tZ)("div",{css:f},(0,n.tZ)(o.A,{isQuiet:!0,href:e.discover,variant:"secondary"},"Learn more")),e.docs&&(0,n.tZ)("div",{css:v},(0,n.tZ)(o.A,{href:e.docs,variant:"primary"},"View docs")))))}))))))}}}]);
//# sourceMappingURL=f5cc1685-307ca44f982811634a01.js.map