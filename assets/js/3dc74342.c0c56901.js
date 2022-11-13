"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,d=m["".concat(s,".").concat(u)]||m[u]||f[u]||a;return n?o.createElement(d,l(l({ref:t},c),{},{components:n})):o.createElement(d,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},l="DevTools",i={unversionedId:"dev-tools",id:"dev-tools",title:"DevTools",description:"Elf provides built-in integration with the Redux DevTools Chrome extension.",source:"@site/docs/dev-tools.mdx",sourceDirName:".",slug:"/dev-tools",permalink:"/elf/docs/dev-tools",draft:!1,editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/dev-tools.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Entities State History",permalink:"/elf/docs/features/history/entities-history"},next:{title:"Using Immer",permalink:"/elf/docs/immer"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Display actions from @ngeat/effects",id:"display-actions-from-ngeateffects",level:2},{value:"Angular",id:"angular",level:3}],c={toc:p};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"devtools"},"DevTools"),(0,r.kt)("p",null,"Elf provides built-in integration with the Redux DevTools Chrome extension."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Install the Redux extension from the supported App stores ( ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"},"Chrome"),", ",(0,r.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"Firefox")," )."),(0,r.kt)("p",null,"And call the ",(0,r.kt)("inlineCode",{parentName:"p"},"devtools()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { devTools } from '@ngneat/elf-devtools';\n\ndevTools();\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"The plugin supports the following options passed as the second function parameter:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"maxAge")," - Maximum amount of actions to be stored in the history tree."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"preAction")," - A method that's called before each action."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"actionsDispatcher")," - Observable of actions. For example actions created by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ngneat/effects"},"@ngeat/effects")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"postTimelineUpdate")," - A function that'll be invoked after the devtools timeline updates. For example, you can run a change detection when working with Angular:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { ApplicationRef } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\n\nimport { AppModule } from './app/app.module';\nimport { devTools } from '@ngneat/elf-devtools';\n\nplatformBrowserDynamic()\n  .bootstrapModule(AppModule).then((moduleRef) => {\n    devTools({\n      postTimelineUpdate: () => moduleRef.injector.get(ApplicationRef).tick()\n    });\n})\n")),(0,r.kt)("h2",{id:"display-actions-from-ngeateffects"},"Display actions from ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/ngneat/effects"},"@ngeat/effects")),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { EffectsNgModule, Actions } from '@ngneat/effects-ng';\nimport { SampleEffects } from 'sample/sample.effect.ts';\nimport { devTools } from '@ngneat/elf-devtools';\n\nexport function initElfDevTools(actions: Actions) {\n  return () => {\n    devTools({\n      name: 'Sample Application',\n      actionsDispatcher: actions\n    })\n  };\n}\n\n@NgModule({\n  imports: [\n    // other modules\n    EffectsNgModule.forRoot([SampleEffects]),\n  ],\n  providers: [\n    {\n      provide: APP_INITIALIZER,\n      multi: true,\n      useFactory: initElfDevTools,\n      deps: [Actions]\n    }\n  ]\n})\nexport class AppModule {\n}\n")))}f.isMDXComponent=!0}}]);