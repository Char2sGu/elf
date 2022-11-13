"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),v=r,m=p["".concat(c,".").concat(v)]||p[v]||u[v]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2142:(e,t,n)=>{n.d(t,{S:()=>N});var i=n(7294),r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],o={clickToLoad:function(e){return s("ctl",e)},devToolsHeight:function(e){return c("devToolsHeight",e)},forceEmbedLayout:function(e){return s("embed",e)},hideDevTools:function(e){return s("hideDevTools",e)},hideExplorer:function(e){return s("hideExplorer",e)},hideNavigation:function(e){return s("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return c("terminalHeight",e)},theme:function(e){return l("theme",["light","dark"],e)},view:function(e){return l("view",["preview","editor"],e)}};function a(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&o.hasOwnProperty(t)?o[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function s(e,t){return!0===t?e+"=1":""}function c(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function l(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function d(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function u(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+p(n)+e+a(n)}function p(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function v(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function m(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}var h=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,i=e.payload,r=d();return new Promise((function(e,o){t.pending[r]={resolve:e,reject:o},t.port.postMessage({type:n,payload:f({},i,{__reqid:r})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,i=n.type,r=n.payload,o=r.__reqid,a=r.__error;this.pending[o]&&(r.__success?this.pending[o].resolve(function(e){var t=f({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(r)):this.pending[o].reject(a?i+": "+a:i),delete this.pending[o])}},e}(),g=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new h(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),y=[],k=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=d(),this.element=e,this.pending=new Promise((function(e,n){var i=function(n){var i=n.data;"SDK_INIT_SUCCESS"===(null==i?void 0:i.action)&&i.id===t.id&&(t.vm=new g(n.ports[0],i.payload),e(t.vm),o())},r=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(s),window.removeEventListener("message",i)}window.addEventListener("message",i),r();var a=0,s=window.setInterval((function(){if(t.vm)o();else{if(a>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void y.forEach((function(e,n){e.id===t.id&&y.splice(n,1)}));a++,r()}}),500)})),y.push(this)};function I(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function w(e){if(!r.includes(e.template)){var t=r.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,i=document.createElement("form");return i.method="POST",i.setAttribute("style","display:none!important;"),i.appendChild(I("project[title]",e.title)),i.appendChild(I("project[description]",e.description)),i.appendChild(I("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):i.appendChild(I("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&i.appendChild(I("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&i.appendChild(I("project[files]["+t+"]",e.files[t]))})),i}function A(e){var t,n,i,r;return null!=e&&e.contentWindow?(null!=(r=(n=e)instanceof Element?"element":"id",t=null!=(i=y.find((function(e){return e[r]===n})))?i:null)?t:new k(e)).pending:Promise.reject("Provided element is not an iframe.")}var E=function(e,t,n){var i,r=m(e),o=function(e,t){var n=w(e);return n.action=u("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),a=document.createElement("iframe");return v(r,a,n),null==(i=a.contentDocument)||i.write(o),A(a)},b=n(2949);const S={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function N(e){let{src:t,packages:n=[]}=e;const r=(0,i.useRef)(),o=(0,i.useRef)(),a=["core","rxjs",...n],{colorMode:s}=(0,b.I)();return(0,i.useEffect)((()=>{const e=a.reduce(((e,t)=>(Object.assign(e,S[t]),e)),{});E(r.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:s,height:"500px"}).then((e=>{o.current=e.editor}))}),[]),(0,i.useEffect)((()=>{o.current&&o.current.setTheme(s)}),[s]),i.createElement("section",{style:{height:"500px"}},i.createElement("div",{ref:r}))}},4418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));var o=n(2142);const a={},s="Active ID(s)",c={unversionedId:"features/entities-management/active-ids",id:"features/entities-management/active-ids",title:"Active ID(s)",description:"This feature requires the withEntities to be used in the Store. It lets you hold one or more IDs indicating the entities that are currently active. It is often useful",source:"@site/docs/features/entities-management/active-ids.mdx",sourceDirName:"features/entities-management",slug:"/features/entities-management/active-ids",permalink:"/elf/docs/features/entities-management/active-ids",draft:!1,editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/entities-management/active-ids.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"UI Entities",permalink:"/elf/docs/features/entities-management/ui-entities"},next:{title:"Entities Props Factory",permalink:"/elf/docs/features/entities-management/entities-props-factory"}},l={},d=[{value:"Active Id",id:"active-id",level:2},{value:"Queries",id:"queries",level:3},{value:"<code>selectActiveEntity</code>",id:"selectactiveentity",level:3},{value:"<code>selectActiveId</code>",id:"selectactiveid",level:3},{value:"<code>getActiveEntity</code>",id:"getactiveentity",level:3},{value:"<code>getActiveId</code>",id:"getactiveid",level:3},{value:"Mutations",id:"mutations",level:2},{value:"<code>setActiveId</code>",id:"setactiveid",level:3},{value:"<code>resetActiveId</code>",id:"resetactiveid",level:3},{value:"Active Ids",id:"active-ids-1",level:2},{value:"Queries",id:"queries-1",level:2},{value:"<code>selectActiveEntities</code>",id:"selectactiveentities",level:3},{value:"<code>selectActiveIds</code>",id:"selectactiveids",level:3},{value:"<code>getActiveEntities</code>",id:"getactiveentities",level:3},{value:"<code>getActiveIds</code>",id:"getactiveids",level:3},{value:"Mutations",id:"mutations-1",level:3},{value:"<code>setActiveIds</code>",id:"setactiveids",level:3},{value:"<code>addActiveIds</code>",id:"addactiveids",level:3},{value:"<code>toggleActiveIds</code>",id:"toggleactiveids",level:3},{value:"<code>removeActiveIds</code>",id:"removeactiveids",level:3},{value:"<code>resetActiveIds</code>",id:"resetactiveids",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"active-ids"},"Active ID(s)"),(0,r.kt)("p",null,"This feature requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"withEntities")," to be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),". It lets you hold one or more IDs indicating the entities that are currently active. It is often useful\nfor monitoring which entities the user is interacting with."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This feature requires ",(0,r.kt)("inlineCode",{parentName:"p"},"@ngneat/elf-entities"))),(0,r.kt)("h2",{id:"active-id"},"Active Id"),(0,r.kt)("p",null,"To use this feature, provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"withActiveId")," props factory function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"createStore")," call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@ngneat/elf';\nimport { withEntities, withActiveId } from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  withActiveId()\n);\n")),(0,r.kt)(o.S,{src:"import { createStore } from '@ngneat/elf';\nimport {\n  addEntities,\n  selectActiveEntity,\n  setActiveId,\n  withActiveId,\n  withEntities,\n} from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  withActiveId()\n);\n\ntodosStore.pipe(selectActiveEntity()).subscribe((active) => {\n  console.log(active);\n});\n\ntodosStore.update(addEntities({ id: 1, label: 'one' }), setActiveId(1));\n",packages:["entities"],mdxType:"LiveDemo"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"This will allow you to use the following ready-made mutations and queries:"),(0,r.kt)("h3",{id:"queries"},"Queries"),(0,r.kt)("h3",{id:"selectactiveentity"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectActiveEntity")),(0,r.kt)("p",null,"Select the active entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveEntity } from '@ngneat/elf-entities';\n\nconst active$ = todosStore.pipe(selectActiveEntity());\n")),(0,r.kt)("h3",{id:"selectactiveid"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectActiveId")),(0,r.kt)("p",null,"Select the active id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveId } from '@ngneat/elf-entities';\n\nconst activeId$ = todosStore.pipe(selectActiveId());\n")),(0,r.kt)("h3",{id:"getactiveentity"},(0,r.kt)("inlineCode",{parentName:"h3"},"getActiveEntity")),(0,r.kt)("p",null,"Get active entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getActiveEntity } from '@ngneat/elf-entities';\n\nconst active = todosStore.query(getActiveEntity());\n")),(0,r.kt)("h3",{id:"getactiveid"},(0,r.kt)("inlineCode",{parentName:"h3"},"getActiveId")),(0,r.kt)("p",null,"Get the active id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getActiveId } from '@ngneat/elf-entities';\n\nconst activeId = todosStore.query(getActiveId);\n")),(0,r.kt)("h2",{id:"mutations"},"Mutations"),(0,r.kt)("h3",{id:"setactiveid"},(0,r.kt)("inlineCode",{parentName:"h3"},"setActiveId")),(0,r.kt)("p",null,"Set the active id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { setActiveId } from '@ngneat/elf-entities';\n\ntodosStore.update(setActiveId(id));\n")),(0,r.kt)("h3",{id:"resetactiveid"},(0,r.kt)("inlineCode",{parentName:"h3"},"resetActiveId")),(0,r.kt)("p",null,"Reset the active id:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { resetActiveId } from '@ngneat/elf-entities';\n\ntodosStore.update(resetActiveId());\n")),(0,r.kt)("h2",{id:"active-ids-1"},"Active Ids"),(0,r.kt)("p",null,"To use this feature, provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"withActiveIds")," props factory function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"createStore")," call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@ngneat/elf';\nimport { withEntities, withActiveIds } from '@ngneat/elf-entities';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  withActiveIds()\n);\n")),(0,r.kt)("p",null,"This will allow you to use the following ready-made mutations and queries:"),(0,r.kt)("h2",{id:"queries-1"},"Queries"),(0,r.kt)("h3",{id:"selectactiveentities"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectActiveEntities")),(0,r.kt)("p",null,"Select the active entities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveEntities } from '@ngneat/elf-entities';\n\nconst actives$ = todosStore.pipe(selectActiveEntities());\n")),(0,r.kt)("h3",{id:"selectactiveids"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectActiveIds")),(0,r.kt)("p",null,"Select the active ids:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectActiveIds } from '@ngneat/elf-entities';\n\nconst activeIds$ = todosStore.pipe(selectActiveIds());\n")),(0,r.kt)("h3",{id:"getactiveentities"},(0,r.kt)("inlineCode",{parentName:"h3"},"getActiveEntities")),(0,r.kt)("p",null,"Get active entities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getActiveEntities } from '@ngneat/elf-entities';\n\nconst actives = todosStore.query(getActiveEntities());\n")),(0,r.kt)("h3",{id:"getactiveids"},(0,r.kt)("inlineCode",{parentName:"h3"},"getActiveIds")),(0,r.kt)("p",null,"Get active ids:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getActiveIds } from '@ngneat/elf-entities';\n\nconst activeIds = todosStore.query(getActiveIds);\n")),(0,r.kt)("h3",{id:"mutations-1"},"Mutations"),(0,r.kt)("h3",{id:"setactiveids"},(0,r.kt)("inlineCode",{parentName:"h3"},"setActiveIds")),(0,r.kt)("p",null,"Set the active ids:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { setActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.update(setActiveIds([id, id]));\n")),(0,r.kt)("h3",{id:"addactiveids"},(0,r.kt)("inlineCode",{parentName:"h3"},"addActiveIds")),(0,r.kt)("p",null,"Add active ids:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { addActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.update(addActiveIds([id, id]));\n")),(0,r.kt)("h3",{id:"toggleactiveids"},(0,r.kt)("inlineCode",{parentName:"h3"},"toggleActiveIds")),(0,r.kt)("p",null,"Toggle active ids:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { toggleActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.update(toggleActiveIds([id, id]));\n")),(0,r.kt)("h3",{id:"removeactiveids"},(0,r.kt)("inlineCode",{parentName:"h3"},"removeActiveIds")),(0,r.kt)("p",null,"Remove active ids:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { removeActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.update(removeActiveIds([id, id]));\n")),(0,r.kt)("h3",{id:"resetactiveids"},(0,r.kt)("inlineCode",{parentName:"h3"},"resetActiveIds")),(0,r.kt)("p",null,"Reset the active ids:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { resetActiveIds } from '@ngneat/elf-entities';\n\ntodosStore.update(resetActiveIds());\n")))}p.isMDXComponent=!0}}]);