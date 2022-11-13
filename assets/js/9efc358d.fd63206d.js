"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),f=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=f(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=f(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||s;return n?o.createElement(m,r(r({ref:t},l),{},{components:n})):o.createElement(m,r({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var f=2;f<s;f++)r[f]=n[f];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>f});var o=n(7462),a=(n(7294),n(3905));const s={},r="Managing Side Effects",i={unversionedId:"side-effects",id:"side-effects",title:"Managing Side Effects",description:"Elf is a state management solution, and it doesn't force you to manage side effects in a certain way. But the same team also created companion packages that can be used with Elf to handle side effects.",source:"@site/docs/side-effects.mdx",sourceDirName:".",slug:"/side-effects",permalink:"/elf/docs/side-effects",draft:!1,editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/side-effects.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"CLI",permalink:"/elf/docs/cli"},next:{title:"Production Mode",permalink:"/elf/docs/miscellaneous/production"}},c={},f=[{value:"Using Services",id:"using-services",level:2},{value:"Using Effects",id:"using-effects",level:2},{value:"Using Effect Functions",id:"using-effect-functions",level:2}],l={toc:f};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"managing-side-effects"},"Managing Side Effects"),(0,a.kt)("p",null,"Elf is a state management solution, and it doesn't force you to manage side effects in a certain way. But the same team also created companion packages that can be used with Elf to handle side effects."),(0,a.kt)("p",null,"A side-effect is anything that happens outside of the normal flow of the store\u2014interacting with the API asynchronously, setting intervals and timeouts, updating the local storage, etc."),(0,a.kt)("p",null,"It's entirely up to the developer to model and implement those tasks and update the store."),(0,a.kt)("p",null,"Let's examine three ways to handle side effects in our application:"),(0,a.kt)("h2",{id:"using-services"},"Using Services"),(0,a.kt)("p",null,"In most cases, services are the most straightforward solution:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { setTodos, addTodo } from './todos.repository';\nimport { tap } from 'rxjs/operators';\n\nexport function fetchTodos() {\n  return http.get('todos').pipe(\n    tap(setTodos)\n  )\n}\n\nexport function addTodo(todo: Todo) {\n  return http.post('todos', todo).pipe(\n    tap(addTodo)\n  )\n}\n")),(0,a.kt)("p",null,"And ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," in the component. Below is an example using a React component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useObservable } from '@ngneat/react-rxjs';\nimport { todos$ } from './todos.repository';\nimport { fetchTodos } from './todos.service';\n\nfunction Todos() {\n  const [todos] = useObservable(todos$);\n  \n  useEffect(() => {\n    fetchTodos().subscribe();\n  }, [])\n  \n  return <div>{todos}</div>\n}\n")),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngneat/react-rxjs"},(0,a.kt)("inlineCode",{parentName:"a"},"@ngneat/react-rxjs"))," library for more information."),(0,a.kt)("h2",{id:"using-effects"},"Using Effects"),(0,a.kt)("p",null,"We can register ",(0,a.kt)("inlineCode",{parentName:"p"},"effects")," that'll execute when we dispatch actions using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngneat/effects"},(0,a.kt)("inlineCode",{parentName:"a"},"@ngneat/effects")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.effects.ts"',title:'"todos.effects.ts"'},"\nimport { createEffect, ofType } from '@ngneat/effects';\n\nconst loadTodos = createAction('[Todos] Load');\n\nexport const loadTodos$ = createEffect(actions => \n  actions.pipe(\n    ofType(loadTodos),\n    switchMap((todo) => todosApi.loadTodos()),\n    tap(setTodos)\n  )\n);\n")),(0,a.kt)("p",null,"Below is an example using a React component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffects } from '@ngneat/effects-hook';\nimport { dispatch }   from '@ngneat/effects';\nimport { useObservable } from '@ngneat/react-rxjs';\nimport { useEffect }  from 'react';\n\nexport function TodosPage() {\n  const [todos] = useObservable(todos$);\n\n  useEffects([loadTodos$]);\n\n  useEffect(() => dispatch(loadTodos()), []);\n\n  return {todos}\n}\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngneat/effects"},"official")," documentation, you can find more information and an Angular example."),(0,a.kt)("h2",{id:"using-effect-functions"},"Using Effect Functions"),(0,a.kt)("p",null,"You may prefer effect functions if you're not a big fan of ",(0,a.kt)("inlineCode",{parentName:"p"},"actions"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.effects.ts"',title:'"todos.effects.ts"'},"import { createEffectFn } from '@ngneat/effects';\n\nexport const searchTodoEffect = createEffectFn((searchTerm$: Observable<string>) => {\n  return searchTerm$.pipe(\n    debounceTime(300),\n    switchMap((searchTerm) => fetchTodos({ searchTerm })),\n    tap(setTodos)\n  );\n});\n")),(0,a.kt)("p",null,"Below is an example using a React component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffectFn } from '@ngneat/effects-hooks';\n\nfunction SearchComponent() {\n  const searchTodo = useEffectFn(searchTodoEffect);\n\n  return <input onChange = {({ target: { value } }) => searchTodo(value) }/>\n}\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngneat/effects#effect-functions"},"official")," documentation, you can find more information and an Angular example. It's possible to use effects and effect functions simultaneously if you like."))}p.isMDXComponent=!0}}]);