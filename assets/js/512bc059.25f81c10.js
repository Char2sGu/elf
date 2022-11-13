"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2142:(e,t,n)=>{n.d(t,{S:()=>P});var r=n(7294),i=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],o={clickToLoad:function(e){return s("ctl",e)},devToolsHeight:function(e){return c("devToolsHeight",e)},forceEmbedLayout:function(e){return s("embed",e)},hideDevTools:function(e){return s("hideDevTools",e)},hideExplorer:function(e){return s("hideExplorer",e)},hideNavigation:function(e){return s("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return c("terminalHeight",e)},theme:function(e){return p("theme",["light","dark"],e)},view:function(e){return p("view",["preview","editor"],e)}};function a(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&o.hasOwnProperty(t)?o[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function s(e,t){return!0===t?e+"=1":""}function c(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function p(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function l(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function u(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+d(n)+e+a(n)}function d(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function f(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function m(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var g=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,i=l();return new Promise((function(e,o){t.pending[i]={resolve:e,reject:o},t.port.postMessage({type:n,payload:h({},r,{__reqid:i})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,i=n.payload,o=i.__reqid,a=i.__error;this.pending[o]&&(i.__success?this.pending[o].resolve(function(e){var t=h({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(i)):this.pending[o].reject(a?r+": "+a:r),delete this.pending[o])}},e}(),y=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new g(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),v=[],w=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=l(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new y(n.ports[0],r.payload),e(t.vm),o())},i=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),i();var a=0,s=window.setInterval((function(){if(t.vm)o();else{if(a>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void v.forEach((function(e,n){e.id===t.id&&v.splice(n,1)}));a++,i()}}),500)})),v.push(this)};function E(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function b(e){if(!i.includes(e.template)){var t=i.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(E("project[title]",e.title)),r.appendChild(E("project[description]",e.description)),r.appendChild(E("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(E("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(E("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(E("project[files]["+t+"]",e.files[t]))})),r}function k(e){var t,n,r,i;return null!=e&&e.contentWindow?(null!=(i=(n=e)instanceof Element?"element":"id",t=null!=(r=v.find((function(e){return e[i]===n})))?r:null)?t:new w(e)).pending:Promise.reject("Provided element is not an iframe.")}var _=function(e,t,n){var r,i=m(e),o=function(e,t){var n=b(e);return n.action=u("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),a=document.createElement("iframe");return f(i,a,n),null==(r=a.contentDocument)||r.write(o),k(a)},S=n(2949);const N={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function P(e){let{src:t,packages:n=[]}=e;const i=(0,r.useRef)(),o=(0,r.useRef)(),a=["core","rxjs",...n],{colorMode:s}=(0,S.I)();return(0,r.useEffect)((()=>{const e=a.reduce(((e,t)=>(Object.assign(e,N[t]),e)),{});_(i.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:s,height:"500px"}).then((e=>{o.current=e.editor}))}),[]),(0,r.useEffect)((()=>{o.current&&o.current.setTheme(s)}),[s]),r.createElement("section",{style:{height:"500px"}},r.createElement("div",{ref:i}))}},8101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));var o=n(2142);const a={},s="Entities Props Factory",c={unversionedId:"features/entities-management/entities-props-factory",id:"features/entities-management/entities-props-factory",title:"Entities Props Factory",description:"There are two built-in entities props included in Elf - withEntities and UIEntities. In addition to that, we can create our own entities props for our stores.",source:"@site/docs/features/entities-management/entities-props-factory.mdx",sourceDirName:"features/entities-management",slug:"/features/entities-management/entities-props-factory",permalink:"/elf/docs/features/entities-management/entities-props-factory",draft:!1,editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/entities-management/entities-props-factory.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Active ID(s)",permalink:"/elf/docs/features/entities-management/active-ids"},next:{title:"Requests Result",permalink:"/elf/docs/features/requests-result"}},p={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entities-props-factory"},"Entities Props Factory"),(0,i.kt)("p",null,"There are two built-in entities props included in Elf - ",(0,i.kt)("a",{parentName:"p",href:"./entities"},(0,i.kt)("inlineCode",{parentName:"a"},"withEntities"))," and ",(0,i.kt)("a",{parentName:"p",href:"./ui-entities"},(0,i.kt)("inlineCode",{parentName:"a"},"UIEntities")),". In addition to that, we can create our own entities props for our stores."),(0,i.kt)("p",null,"Let's say we have a products page with a shopping cart. As well as managing a store for products, we must also maintain a shopping cart. We can create a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Store")," for our ",(0,i.kt)("inlineCode",{parentName:"p"},"cart")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"cart")," entity props in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"products")," store."),(0,i.kt)("p",null,"First, let's create the ",(0,i.kt)("inlineCode",{parentName:"p"},"products")," store:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="products.repository.ts"',title:'"products.repository.ts"'},"import { createStore } from '@ngneat/elf';\nimport { withEntities } from '@ngneat/elf-entities';\n\ninterface Product {\n  id: number;\n  title: string;\n  price: number;\n}\n\nexport const productsStore = createStore(\n  { name: 'products' },\n  withEntities<Product>()\n);\n")),(0,i.kt)("p",null,"Now we can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"cart")," entities props to the same ",(0,i.kt)("inlineCode",{parentName:"p"},"store"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="products.repository.ts"',title:'"products.repository.ts"'},"import { createStore } from '@ngneat/elf';\nimport { withEntities, entitiesPropsFactory } from '@ngneat/elf-entities';\n\n// highlight-next-line\nconst { cartEntitiesRef, withCartEntities } = entitiesPropsFactory('cart');\n\ninterface Product {\n  id: number;\n  title: string;\n  price: number;\n}\n\ninterface CartItem {\n  id: Product['id'];\n  quantity: number;\n}\n\nexport const productsStore = createStore(\n  { name: 'products' },\n  withEntities<Product>(),\n  withCartEntities<CartItem>()\n);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"entitiesPropsFactory")," function takes the name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"feature")," and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"entitiesRef")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"entitiesProps")," we can use in our store."),(0,i.kt)("p",null,"In the above example, our final ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," shape will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  entities: Record<number, Product>;\n  ids: number[];\n  // highlight-next-line\n  cartEntities: Record<number, CartItem>;\n  // highlight-next-line\n  cartIds: number[];\n}\n")),(0,i.kt)(o.S,{src:"import { createStore } from '@ngneat/elf';\nimport {\n  addEntities,\n  entitiesPropsFactory,\n  upsertEntitiesById,\n  withEntities,\n} from '@ngneat/elf-entities';\n\nconst { cartEntitiesRef, withCartEntities } = entitiesPropsFactory('cart');\n\ninterface Product {\n  id: number;\n  title: string;\n  price: number;\n}\n\ninterface CartItem {\n  id: Product['id'];\n  quantity: number;\n}\n\nconst productsStore = createStore(\n  { name: 'products' },\n  withEntities<Product>(),\n  withCartEntities<CartItem>()\n);\n\nproductsStore.subscribe((value) => {\n  console.log(value);\n});\n\nproductsStore.update(\n  addEntities({ id: 1, title: 'one', price: 55 }),\n  upsertEntitiesById(1, {\n    updater: (e) => ({ ...e, quantity: e.quantity + 1 }),\n    creator: (id) => ({ id, quantity: 1 }),\n    ref: cartEntitiesRef,\n  })\n);\n",packages:["entities"],mdxType:"LiveDemo"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"We can pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"cartEntitiesRef")," to each one of the built-in ",(0,i.kt)("a",{parentName:"p",href:"./entities#queries"},"queries")," and ",(0,i.kt)("a",{parentName:"p",href:"./entities#mutations"},"mutations"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="products.repository.ts"',title:'"products.repository.ts"'},"import { upsertEntitiesById } from '@ngneat/elf-entities';\n\nexport function updateCart(id: Product['id']) {\n  productsStore.update(\n    upsertEntitiesById(id, {\n      updater: (e) => ({ ...e, quantity: e.quantity + 1 }),\n      creator: (id) => ({ id, quantity: 1 }),\n      // highlight-next-line\n      ref: cartEntitiesRef,\n    })\n  );\n}\n")),(0,i.kt)("p",null,"One more use case for custom entities props is when we work with a normalized state. For example, we might have a ",(0,i.kt)("inlineCode",{parentName:"p"},"movies")," page, with ",(0,i.kt)("inlineCode",{parentName:"p"},"actors")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"genres"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="movies.repository.ts"',title:'"movies.repository.ts"'},"interface Actor {\n  id: string;\n  name: string;\n}\n\ninterface Genre {\n  id: string;\n  name: string;\n}\n\ninterface Movie {\n  id: string;\n  title: string;\n  genres: Array<Genre['id']>;\n  actors: Array<Actor['id']>;\n}\n\nconst { actorsEntitiesRef, withActorsEntities } =\n  entitiesPropsFactory('actors');\n\nconst { genresEntitiesRef, withGenresEntities } =\n  entitiesPropsFactory('genres');\n\nconst store = createStore(\n  { name: 'movies' },\n  withEntities<Movie>(),\n  withGenresEntities<Genre>(),\n  withActorsEntities<Actor>()\n);\n\nstore.update(\n  addEntities({ id: '1', name: 'Nicolas cage' }, { ref: actorsEntitiesRef }),\n  addEntities({ id: '1', name: 'Action' }, { ref: genresEntitiesRef }),\n  addEntities({\n    id: '1',\n    title: 'Gone in 60 Seconds',\n    genres: ['1'],\n    actors: ['1'],\n  })\n);\n")))}d.isMDXComponent=!0}}]);