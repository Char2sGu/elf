"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[905],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=a,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||c;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<c;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(8168),a=(n(6540),n(5680));const c={},o="The Facade Pattern",s={unversionedId:"facade",id:"facade",title:"The Facade Pattern",description:"A Facade is a simple public interface that hides more complex usage. Facades encapsulate all interactions in one place, including queries, updates, and side effects, allowing components to only ever interact with the Facade.",source:"@site/docs/facade.mdx",sourceDirName:".",slug:"/facade",permalink:"/elf/docs/facade",draft:!1,editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/facade.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"The Repository Pattern",permalink:"/elf/docs/repository"},next:{title:"Entities",permalink:"/elf/docs/features/entities-management/entities"}},i={},p=[{value:"Creating a Facade with the CLI",id:"creating-a-facade-with-the-cli",level:3}],u={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(l,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"the-facade-pattern"},"The Facade Pattern"),(0,a.yg)("p",null,"A Facade is a simple public interface that hides more complex usage. Facades encapsulate all interactions in one place, including queries, updates, and side effects, allowing components to only ever interact with the Facade."),(0,a.yg)("p",null,"For example, we can create a ",(0,a.yg)("inlineCode",{parentName:"p"},"products.facade.ts"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="products.facade.ts"',title:'"products.facade.ts"'},"\nimport { createEffectFn } from '@ngneat/effects';\nimport { createStore } from '@ngneat/elf';\nimport {\n  withEntities,\n  selectAllEntities,\n  setEntities,\n} from '@ngneat/elf-entities';\nimport {\n  createRequestDataSource,\n  withRequestsStatus,\n} from '@ngneat/elf-requests';\nimport { mergeMap, Observable, tap } from 'rxjs';\nimport { http } from '../http';\n\nexport interface Product {\n  id: number;\n  name: string;\n  price: number;\n  image: string;\n  category: 'vegetables' | 'fruits' | 'nuts';\n}\n\nconst store = createStore(\n  { name: 'products' },\n  withEntities<Product>(),\n  withRequestsStatus()\n);\n\nconst { setSuccess, trackRequestStatus, data$ } =\n  createRequestDataSource({\n    data$: () => store.pipe(selectAllEntities()),\n    requestKey: 'products',\n    dataKey: 'products',\n    store,\n  });\n\nexport const productsDataSource = data$();\n\nfunction setProducts(products: Product[]) {\n  store.update(setEntities(products), setSuccess());\n}\n\nexport const getProductsEffect = createEffectFn(($: Observable<void>) => {\n  return $.pipe(\n    trackRequestStatus(),\n    mergeMap(() =>\n      http<Product[]>('assets/products.json', {\n        selector: (res) => res.json(),\n      })\n    ),\n    tap(setProducts)\n  );\n});\n\n")),(0,a.yg)("h3",{id:"creating-a-facade-with-the-cli"},"Creating a Facade with the CLI"),(0,a.yg)("p",null,"Coming soon."))}d.isMDXComponent=!0}}]);