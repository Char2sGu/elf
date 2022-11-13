"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,f=u["".concat(l,".").concat(g)]||u[g]||c[g]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2142:(e,t,n)=>{n.d(t,{S:()=>_});var a=n(7294),i=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],r={clickToLoad:function(e){return s("ctl",e)},devToolsHeight:function(e){return l("devToolsHeight",e)},forceEmbedLayout:function(e){return s("embed",e)},hideDevTools:function(e){return s("hideDevTools",e)},hideExplorer:function(e){return s("hideExplorer",e)},hideNavigation:function(e){return s("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return l("terminalHeight",e)},theme:function(e){return p("theme",["light","dark"],e)},view:function(e){return p("view",["preview","editor"],e)}};function o(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&r.hasOwnProperty(t)?r[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function s(e,t){return!0===t?e+"=1":""}function l(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function p(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function d(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function c(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+u(n)+e+o(n)}function u(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function g(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function f(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}var h=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,a=e.payload,i=d();return new Promise((function(e,r){t.pending[i]={resolve:e,reject:r},t.port.postMessage({type:n,payload:m({},a,{__reqid:i})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,a=n.type,i=n.payload,r=i.__reqid,o=i.__error;this.pending[r]&&(i.__success?this.pending[r].resolve(function(e){var t=m({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(i)):this.pending[r].reject(o?a+": "+o:a),delete this.pending[r])}},e}(),v=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new h(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),y=[],k=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=d(),this.element=e,this.pending=new Promise((function(e,n){var a=function(n){var a=n.data;"SDK_INIT_SUCCESS"===(null==a?void 0:a.action)&&a.id===t.id&&(t.vm=new v(n.ports[0],a.payload),e(t.vm),r())},i=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function r(){window.clearInterval(s),window.removeEventListener("message",a)}window.addEventListener("message",a),i();var o=0,s=window.setInterval((function(){if(t.vm)r();else{if(o>=20)return r(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void y.forEach((function(e,n){e.id===t.id&&y.splice(n,1)}));o++,i()}}),500)})),y.push(this)};function P(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function w(e){if(!i.includes(e.template)){var t=i.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(P("project[title]",e.title)),a.appendChild(P("project[description]",e.description)),a.appendChild(P("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(P("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(P("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(P("project[files]["+t+"]",e.files[t]))})),a}function b(e){var t,n,a,i;return null!=e&&e.contentWindow?(null!=(i=(n=e)instanceof Element?"element":"id",t=null!=(a=y.find((function(e){return e[i]===n})))?a:null)?t:new k(e)).pending:Promise.reject("Provided element is not an iframe.")}var E=function(e,t,n){var a,i=f(e),r=function(e,t){var n=w(e);return n.action=c("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),o=document.createElement("iframe");return g(i,o,n),null==(a=o.contentDocument)||a.write(r),b(o)},N=n(2949);const S={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function _(e){let{src:t,packages:n=[]}=e;const i=(0,a.useRef)(),r=(0,a.useRef)(),o=["core","rxjs",...n],{colorMode:s}=(0,N.I)();return(0,a.useEffect)((()=>{const e=o.reduce(((e,t)=>(Object.assign(e,S[t]),e)),{});E(i.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:s,height:"500px"}).then((e=>{r.current=e.editor}))}),[]),(0,a.useEffect)((()=>{r.current&&r.current.setTheme(s)}),[s]),a.createElement("section",{style:{height:"500px"}},a.createElement("div",{ref:i}))}},8695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));var r=n(2142);const o={},s="Pagination",l={unversionedId:"features/pagination",id:"features/pagination",title:"Pagination",description:"In many cases - for example, when working with very large data-sets - we don't want to work with the full collection in memory.",source:"@site/docs/features/pagination.mdx",sourceDirName:"features",slug:"/features/pagination",permalink:"/elf/docs/features/pagination",draft:!1,editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/pagination.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Requests Result",permalink:"/elf/docs/features/requests-result"},next:{title:"Persist State",permalink:"/elf/docs/features/persist-state"}},p={},d=[{value:"Queries",id:"queries",level:2},{value:"<code>selectCurrentPageEntities</code>",id:"selectcurrentpageentities",level:3},{value:"<code>selectCurrentPage</code>",id:"selectcurrentpage",level:3},{value:"<code>selectHasPage</code>",id:"selecthaspage",level:3},{value:"<code>hasPage</code>",id:"haspage",level:3},{value:"<code>selectPaginationData</code>",id:"selectpaginationdata",level:3},{value:"<code>getPaginationData</code>",id:"getpaginationdata",level:3},{value:"Mutations",id:"mutations",level:2},{value:"<code>setCurrentPage</code>",id:"setcurrentpage",level:3},{value:"<code>setPage</code>",id:"setpage",level:3},{value:"<code>updatePaginationData</code>",id:"updatepaginationdata",level:3},{value:"<code>deletePage</code>",id:"deletepage",level:3},{value:"<code>deleteAllPages</code>",id:"deleteallpages",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"In many cases - for example, when working with very large data-sets - we don't want to work with the full collection in memory.\nInstead, server-side pagination is used, where the server sends just a single page of data at a time."),(0,i.kt)("p",null,"Usually, we also want to cache pages that already have been fetched, in order to spare the need for an additional request."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This feature requires ",(0,i.kt)("inlineCode",{parentName:"p"},"@ngneat/elf-entities"))),(0,i.kt)("p",null,"Using this feature, you can manage pagination by using the store. First, you need to install the package by using\nthe CLI command ",(0,i.kt)("inlineCode",{parentName:"p"},"elf-cli install")," and selecting the pagination package, or via npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-pagination\n")),(0,i.kt)("p",null,"To use this feature, provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"withPagination")," props factory function in the ",(0,i.kt)("inlineCode",{parentName:"p"},"createStore")," call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from '@ngneat/elf';\nimport { withEntities } from '@ngneat/elf-entities';\nimport { withPagination } from '@ngneat/elf-pagination';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  withPagination()\n);\n")),(0,i.kt)("p",null,"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"updatePaginationData()")," with a configuration object that determines the various pagination settings, and call ",(0,i.kt)("inlineCode",{parentName:"p"},"setPage()")," whenever you want to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"ids")," that belong to a certain page number."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Note: pagination can start at index 0 or 1.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.repository"',title:'"todos.repository"'},"import { PaginationData } from '@ngneat/elf-pagination';\n\nexport function addTodos(response: PaginationData & { data: Todo[] }) {\n  const { data, ...paginationData } = response;\n\n  todosStore.update(\n    addEntities(todos),\n    updatePaginationData(paginationData),\n    setPage(\n      1,\n      data.map((c) => c.id)\n    )\n  );\n}\n")),(0,i.kt)("p",null,"In your server calls, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"skipWhilePageExists")," operator, which enables you to skip server calls\nif the page exists in the store:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { skipWhilePageExists } from '@ngneat/elf-pagination';\n\nexport function getTodosPage(page: number) {\n  return http.get(todosUrl).pipe(\n    tap((todos) => addTodos(todos)),\n    skipWhilePageExists(page)\n  );\n}\n")),(0,i.kt)(r.S,{src:"import { createStore } from '@ngneat/elf';\nimport { addEntities, withEntities } from '@ngneat/elf-entities';\nimport {\n  setPage,\n  updatePaginationData,\n  withPagination,\n} from '@ngneat/elf-pagination';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore(\n  { name: 'todos' },\n  withEntities<Todo>(),\n  withPagination()\n);\n\nexport function addTodos(todos: Todo[]) {\n  todosStore.update(\n    addEntities(todos),\n    updatePaginationData({\n      currentPage: 1,\n      perPage: 10,\n      total: 96,\n      lastPage: 10,\n    }),\n    setPage(\n      1,\n      todos.map((c) => c.id)\n    )\n  );\n}\n\ntodosStore.subscribe(console.log);\n\naddTodos([{ id: 1, label: 'one' }]);\n",packages:["entities","pagination"],mdxType:"LiveDemo"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Additional queries and mutations available are:"),(0,i.kt)("h2",{id:"queries"},"Queries"),(0,i.kt)("h3",{id:"selectcurrentpageentities"},(0,i.kt)("inlineCode",{parentName:"h3"},"selectCurrentPageEntities")),(0,i.kt)("p",null,"Select the current page entities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectCurrentPageEntities } from '@ngneat/elf-pagination';\n\ntodos$ = store.pipe(selectCurrentPageEntities());\n")),(0,i.kt)("h3",{id:"selectcurrentpage"},(0,i.kt)("inlineCode",{parentName:"h3"},"selectCurrentPage")),(0,i.kt)("p",null,"Select the current page number (by default it's page 1):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectCurrentPage } from '@ngneat/elf-pagination';\n\ncurrentPage$ = store.pipe(selectCurrentPage());\n")),(0,i.kt)("h3",{id:"selecthaspage"},(0,i.kt)("inlineCode",{parentName:"h3"},"selectHasPage")),(0,i.kt)("p",null,"Select whether the page exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectHasPage } from '@ngneat/elf-pagination';\n\nhasPage$ = store.pipe(selectHasPage(1));\n")),(0,i.kt)("h3",{id:"haspage"},(0,i.kt)("inlineCode",{parentName:"h3"},"hasPage")),(0,i.kt)("p",null,"Get whether the page exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { hasPage } from '@ngneat/elf-pagination';\n\nhasPage = store.query(hasPage(1));\n")),(0,i.kt)("h3",{id:"selectpaginationdata"},(0,i.kt)("inlineCode",{parentName:"h3"},"selectPaginationData")),(0,i.kt)("p",null,"Select the pagination data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { selectPaginationData } from '@ngneat/elf-pagination';\n\ndata$ = store.pipe(selectPaginationData());\n")),(0,i.kt)("h3",{id:"getpaginationdata"},(0,i.kt)("inlineCode",{parentName:"h3"},"getPaginationData")),(0,i.kt)("p",null,"Get pagination data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { getPaginationData } from '@ngneat/elf-pagination';\n\ndata = store.query(getPaginationData());\n")),(0,i.kt)("h2",{id:"mutations"},"Mutations"),(0,i.kt)("h3",{id:"setcurrentpage"},(0,i.kt)("inlineCode",{parentName:"h3"},"setCurrentPage")),(0,i.kt)("p",null,"Set the current page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { setCurrentPage } from '@ngneat/elf-pagination';\n\nstore.update(setCurrentPage(2));\n")),(0,i.kt)("h3",{id:"setpage"},(0,i.kt)("inlineCode",{parentName:"h3"},"setPage")),(0,i.kt)("p",null,"Set the ids belongs to a page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { setPage } from '@ngneat/elf-pagination';\n\nstore.update(setPage(2, [id, id, id]));\n")),(0,i.kt)("h3",{id:"updatepaginationdata"},(0,i.kt)("inlineCode",{parentName:"h3"},"updatePaginationData")),(0,i.kt)("p",null,"Set the current page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { updatePaginationData } from '@ngneat/elf-pagination';\n\nstore.update(\n  updatePaginationData({\n    currentPage: 1,\n    perPage: 10,\n    total: 96,\n    lastPage: 10,\n  })\n);\n")),(0,i.kt)("h3",{id:"deletepage"},(0,i.kt)("inlineCode",{parentName:"h3"},"deletePage")),(0,i.kt)("p",null,"Delete a page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { deletePage } from '@ngneat/elf-pagination';\n\nstore.update(deletePage(2));\n")),(0,i.kt)("h3",{id:"deleteallpages"},(0,i.kt)("inlineCode",{parentName:"h3"},"deleteAllPages")),(0,i.kt)("p",null,"Delete all pages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { deleteAllPages } from '@ngneat/elf-pagination';\n\nstore.update(deleteAllPages());\n")))}u.isMDXComponent=!0}}]);