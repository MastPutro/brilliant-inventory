import{X as g,r as o,j as e,A as j}from"./app-Bjn5v1rC.js";import{g as b,h,e as u}from"./Icons-CqyroUO_.js";function N({header:l,body:a,children:n,...w}){const{query:x}=g().props,[r,m]=o.useState(x||{col:"",sort:""}),c=o.useRef(),i=s=>{const t=r;s===t.col?t.sort==="desc"?(t.col="",t.sort=""):t.sort="desc":(t.col=s,t.sort="asc"),m(t),c.current&&clearTimeout(c.current),c.current=window.setTimeout(()=>{j.get("",r,{preserveState:!0,preserveScroll:!0})},100)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"relative overflow-x-auto border border-gray-200 rounded-lg mb-2",children:e.jsxs("table",{className:"w-full text-sm text-left text-gray-500",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-100",children:e.jsx("tr",{children:l.map((s,t)=>e.jsx(e.Fragment,{children:e.jsx("th",{scope:"col",className:"px-6 py-3",children:s.sortable&&s.name?e.jsxs("button",{onClick:()=>i(s.name||""),disabled:a.length<1,className:"uppercase items-center flex gap-2",children:[s.label,(r==null?void 0:r.col)===s.name&&(r==null?void 0:r.sort)==="asc"?e.jsx(b,{className:"w-4 h-4 text-gray-700"}):(r==null?void 0:r.col)===s.name&&(r==null?void 0:r.sort)==="desc"?e.jsx(h,{className:"w-4 h-4 text-gray-700"}):e.jsx(u,{className:"w-5 h-5 text-gray-400"})]},t):s.label},t)}))})}),e.jsxs("tbody",{children:[a.map((s,t)=>e.jsx(e.Fragment,{children:e.jsx("tr",{className:"bg-white border-b hover:bg-gray-50",children:s.map((p,d)=>e.jsx("td",{className:"px-6 py-4 text-gray-800",children:p},`td-${d}`))},`tr-${t}`)})),!a.length&&e.jsx("tr",{className:"bg-white border-b w-full",children:e.jsx("td",{className:"px-6 py-4 text-gray-800",colSpan:l.length,children:n})})]})]})})})}export{N as T};
