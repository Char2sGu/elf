"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[387],{2600:(e,t,s)=>{s.d(t,{k:()=>l});var n=s(6540),o=s(2908),r=s(5293);const i={core:{"@ngneat/elf":"latest"},entities:{"@ngneat/elf-entities":"latest"},requests:{"@ngneat/elf-requests":"latest"},pagination:{"@ngneat/elf-pagination":"latest"},devtools:{"@ngneat/elf-devtools":"latest"},persist:{"@ngneat/elf-persist-state":"latest"},history:{"@ngneat/elf-state-history":"latest"},rxjs:{rxjs:"latest"},immer:{immer:"latest"}};function l(e){let{src:t,packages:s=[]}=e;const l=(0,n.useRef)(),a=(0,n.useRef)(),u=["core","rxjs",...s],{colorMode:p}=(0,r.G)();return(0,n.useEffect)((()=>{const e=u.reduce(((e,t)=>(Object.assign(e,i[t]),e)),{});o.A.embedProject(l.current,{description:"this is descrption",title:"Elf Core",files:{"index.html":"","index.ts":t},template:"typescript",dependencies:e,settings:{compile:{clearConsole:!0}}},{hideDevTools:!1,devToolsHeight:99,theme:p,height:"500px"}).then((e=>{a.current=e.editor}))}),[]),(0,n.useEffect)((()=>{a.current&&a.current.setTheme(p)}),[p]),n.createElement("section",{style:{height:"500px"}},n.createElement("div",{ref:l}))}},4751:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=s(8168),o=(s(6540),s(5680));const r="import { createStore } from '@ngneat/elf';\nimport {\n  setEntities,\n  withEntities,\n  selectAllEntities,\n} from '@ngneat/elf-entities';\nimport { joinRequestResult, trackRequestResult } from '@ngneat/elf-requests';\nimport { fromFetch } from 'rxjs/fetch';\nimport { tap } from 'rxjs';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst store = createStore({ name: 'todos' }, withEntities<Todo>());\n\nconst entities$ = store.pipe(selectAllEntities(), joinRequestResult(['todos']));\n\nentities$.subscribe((result) => {\n  console.log(result);\n});\n\nfunction setTodos(todos: Todo[]) {\n  store.update(setEntities(todos));\n}\n\n// todos.service.ts\nfunction fecthTodos() {\n  return fromFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos', {\n    selector: (response) => response.json(),\n  }).pipe(tap(setTodos), trackRequestResult(['todos']));\n}\n\nsetTimeout(() => {\n  fecthTodos().subscribe();\n}, 2000);\n\nsetTimeout(() => {\n  fecthTodos().subscribe();\n}, 4000);\n";var i=s(2600);const l={},a="Requests Result",u={unversionedId:"features/requests-result",id:"features/requests-result",title:"Requests Result",description:"Elf provides a convenient way to track the status of async requests and combine it with your store selectors. First, you need to install the package by",source:"@site/docs/features/requests-result.mdx",sourceDirName:"features",slug:"/features/requests-result",permalink:"/elf/docs/features/requests-result",draft:!1,editUrl:"https://github.com/ngneat/elf/docusaurus/edit/main/website/docs/features/requests-result.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Entities Props Factory",permalink:"/elf/docs/features/entities-management/entities-props-factory"},next:{title:"Pagination",permalink:"/elf/docs/features/pagination"}},p={},d=[{value:"Additional Options",id:"additional-options",level:3},{value:"Operators",id:"operators",level:3},{value:"API",id:"api",level:3}],c={toc:d},g="wrapper";function m(e){let{components:t,...s}=e;return(0,o.yg)(g,(0,n.A)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"requests-result"},"Requests Result"),(0,o.yg)("p",null,"Elf provides a convenient way to track the ",(0,o.yg)("inlineCode",{parentName:"p"},"status")," of async requests and combine it with your store selectors. First, you need to install the package by\nusing the CLI command ",(0,o.yg)("inlineCode",{parentName:"p"},"elf-cli install")," and selecting the requests package, or via npm:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/elf-requests\n")),(0,o.yg)("p",null,"Now, simply add to your source request the ",(0,o.yg)("inlineCode",{parentName:"p"},"trackRequestResult")," operator, and give it a unique ",(0,o.yg)("inlineCode",{parentName:"p"},"key"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { trackRequestResult } from '@ngneat/elf-requests';\nimport { setTodos } from './todos.repository';\n\nexport function fetchTodos() {\n  return http.get(todosUrl).pipe(\n    tap(setTodos),\n    // highlight-next-line\n    trackRequestResult(['todos'])\n  );\n}\n")),(0,o.yg)("p",null,"Now, we can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"joinRequestResult")," operator with our store selectors:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.repository"',title:'"todos.repository"'},"import { createStore } from '@ngneat/elf';\nimport { withEntities } from '@ngneat/elf-entities';\nimport { joinRequestResult } from '@ngneat/elf-requests';\n\ninterface Todo {\n  id: number;\n  label: string;\n}\n\nconst todosStore = createStore({ name: 'todos' }, withEntities<Todo>());\n\nexport const entities$ = store.pipe(\n  selectAllEntities(),\n  // highlight-next-line\n  joinRequestResult(['todos'])\n);\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"entities$")," selector will now track the ",(0,o.yg)("inlineCode",{parentName:"p"},"todos")," request and will provide the following information:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"entities$.subscribe(\n  ({ isLoading, isError, isSuccess, data, error, status }) => {\n    console.log(\n      isLoading,\n      isError,\n      isSuccess,\n      status,\n      successfulRequestsCount,\n      data, // typed as Todo[]\n      error\n    );\n  }\n);\n")),(0,o.yg)(i.k,{src:r,packages:["entities","requests"],mdxType:"LiveDemo"}),(0,o.yg)("br",null),(0,o.yg)("p",null,"We can also initialize the selector as ",(0,o.yg)("inlineCode",{parentName:"p"},"idle")," by using ",(0,o.yg)("inlineCode",{parentName:"p"},"joinRequestResult(['todos'], { initialStatus: 'idle' })")),(0,o.yg)("p",null,"Here is an example of a ",(0,o.yg)("inlineCode",{parentName:"p"},"dynamic")," selector:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"export const selectTodo = (id: Todo['id]) => store.pipe(\n  selectEntity(id),\n  // highlight-next-line\n  joinRequestResult(['todos', id])\n);\n")),(0,o.yg)("h3",{id:"additional-options"},"Additional Options"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"staleTime")," - When we should refetch")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { trackRequestResult } from '@ngneat/elf-requests';\nimport { setTodos } from './todos.repository';\n\nexport function fetchTodos() {\n  return http.get(todosUrl).pipe(\n    tap(setTodos),\n    // highlight-next-line\n    trackRequestResult(['todos'], { staleTime: 10_000 })\n  );\n}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"skipCache")," - Ignore everything and perform the request")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { trackRequestResult } from '@ngneat/elf-requests';\nimport { setTodos } from './todos.repository';\n\nexport function fetchTodos() {\n  return http.get(todosUrl).pipe(\n    tap(setTodos),\n    // highlight-next-line\n    trackRequestResult(['todos'], { skipCache: true })\n  );\n}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"preventConcurrentRequest")," - Don't perform the request if there is a pending request, defaults to ",(0,o.yg)("inlineCode",{parentName:"li"},"true"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { trackRequestResult } from '@ngneat/elf-requests';\nimport { setTodos } from './todos.repository';\n\nexport function fetchTodos() {\n  return http.get(todosUrl).pipe(\n    tap(setTodos),\n    // highlight-next-line\n    trackRequestResult(['todos'], { preventConcurrentRequest: false })\n  );\n}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"cacheResponseData")," - Cache the response data and emit it as responseData for skipped requests, defaults to ",(0,o.yg)("inlineCode",{parentName:"li"},"false"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { trackRequestResult } from '@ngneat/elf-requests';\nimport { setTodos } from './todos.repository';\n\nexport function fetchTodos() {\n  return http.get(todosUrl).pipe(\n    tap(setTodos),\n    // highlight-next-line\n    trackRequestResult(['todos'], { cacheResponseData: true })\n  );\n}\n\nfetchTodos().subscribe((todos) => {\n  // This will be called with the cached result, or once the request is completed\n});\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"additionalKeys")," - Cache the request result for additional keys, e.g. based on properties from the response data")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'},"import { trackRequestResult } from '@ngneat/elf-requests';\nimport { setTodos } from './todos.repository';\n\nexport function fetchTodos() {\n  return http.get(todosUrl).pipe(\n    tap(setTodos),\n    // highlight-next-line\n    trackRequestResult(['todos'], { additionalKeys: todos => todos.map(todo => (['todos', todo.id])) })\n  );\n}\n")),(0,o.yg)("h3",{id:"operators"},"Operators"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"import { filterSuccess, filterError } from '@ngneat/elf-requests';\n\nentities$.pipe(filterSuccess()).subscribe((result) => {\n  // This will be called only upon success\n});\n\nentities$.pipe(filterError()).subscribe((result) => {\n  // This will be called only upon error\n});\n\nentities$\n  .pipe(\n    mapResultData((data) => {\n      // This will be called only when data is defined (not `null` or `undefined`)\n      return data.filter((todo) => todo.id === 1);\n    })\n  )\n  .subscribe((result) => {});\n")),(0,o.yg)("h3",{id:"api"},"API"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"getRequestResult")," - ",(0,o.yg)("inlineCode",{parentName:"li"},"getRequestResult(key): Observable<RequestResult>")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"deleteRequestResult")," - ",(0,o.yg)("inlineCode",{parentName:"li"},"deleteRequestResult(key): void")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"resetStaleTime")," - ",(0,o.yg)("inlineCode",{parentName:"li"},"resetStaleTime(key): void")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"clearRequestsResult")," - ",(0,o.yg)("inlineCode",{parentName:"li"},"clearRequestsResult(): void"))))}m.isMDXComponent=!0}}]);