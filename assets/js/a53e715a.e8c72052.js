"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l="Operators",i={unversionedId:"miscellaneous/operators",id:"miscellaneous/operators",title:"Operators",description:"Elf provides the following operators:",source:"@site/docs/miscellaneous/operators.mdx",sourceDirName:"miscellaneous",slug:"/miscellaneous/operators",permalink:"/elf/docs/miscellaneous/operators",draft:!1,editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/miscellaneous/operators.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Props Factory",permalink:"/elf/docs/miscellaneous/props-factory"},next:{title:"Registry",permalink:"/elf/docs/miscellaneous/registry"}},s={},c=[{value:"filterNil",id:"filternil",level:2},{value:"head",id:"head",level:2},{value:"distinctUntilArrayItemChanged",id:"distinctuntilarrayitemchanged",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operators"},"Operators"),(0,a.kt)("p",null,"Elf provides the following operators:"),(0,a.kt)("h2",{id:"filternil"},"filterNil"),(0,a.kt)("p",null,"Filters ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { filterNil } from '@ngneat/elf';\n\nfoo$.pipe(filterNil());\n")),(0,a.kt)("h2",{id:"head"},"head"),(0,a.kt)("p",null,"Get the the first item from an array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { head } from '@ngneat/elf';\n\nskills$.pipe(head());\n")),(0,a.kt)("h2",{id:"distinctuntilarrayitemchanged"},"distinctUntilArrayItemChanged"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"distinctUntillChanged")," implementation for arrays:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { distinctUntilArrayItemChanged } from '@ngneat/elf';\n\nskills$.pipe(distinctUntilArrayItemChanged());\n")))}u.isMDXComponent=!0}}]);