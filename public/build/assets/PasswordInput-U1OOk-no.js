import{r as x,j as e}from"./app-Bjn5v1rC.js";import{E as m,k as i}from"./Icons-CqyroUO_.js";function d({label:n,icon:t,errorMsg:r,...s}){const[a,l]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:s.id,className:`block mb-1 text-sm font-medium text-gray-900 ${s.required?"after:content-['*'] after:text-red-500":""}`,children:n}),e.jsxs("div",{className:"relative",children:[t&&e.jsx("div",{className:"absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-500",children:t}),e.jsx("input",{type:a?"text":"password",className:`w-full p-2.5 rounded-md ${t?"ps-10":""}`,...s}),e.jsx("button",{className:"absolute inset-y-0 end-0 flex items-center pe-3.5 text-gray-500",type:"button",onClick:()=>{l(!a)},children:a?e.jsx(m,{className:"w-5 h-5"}):e.jsx(i,{className:"w-5 h-5"})})]}),r&&e.jsx("p",{className:"mt-1 text-xs text-red-600",children:r})]})}export{d as P};
