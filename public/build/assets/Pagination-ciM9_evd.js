import{j as r,A as d}from"./app-Bjn5v1rC.js";function o(e,s){const n=s-e+1;return Array.from({length:n},(t,i)=>i+e)}function a(e,s){if(e<=5)return o(1,e);const n=Math.max(s,1),t=Math.min(s,e),i=n>2,l=t<e-2;if(!i&&l)return[...o(1,3),"...",e];if(i&&!l)return[1,"...",...o(e-3+1,e)];if(i&&l)return[1,"...",...o(n,t),"...",e]}function m({page:e=1,totalPage:s=1}){var n;if(!(s<2))return r.jsx("nav",{children:r.jsxs("ul",{className:"flex items-center -space-x-px h-10 text-sm",children:[r.jsx("li",{children:r.jsxs("button",{onClick:()=>d.get("",{page:e-1},{preserveState:!0,preserveScroll:!0}),disabled:e===1,className:"flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700",children:[r.jsx("span",{className:"sr-only",children:"Previous"}),r.jsx("svg",{className:"w-2.5 h-2.5 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:r.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 1 1 5l4 4"})})]})}),(n=a(s,e))==null?void 0:n.map(t=>r.jsx("li",{children:r.jsx("button",{onClick:()=>d.get("",{page:t},{preserveState:!0,preserveScroll:!0}),className:`flex items-center justify-center px-4 h-10 font-medium leading-tight border ${e===t?"text-white border-primary-500 bg-primary-500 hover:bg-primary-600 hover:border-primary-600":"text-gray-500 bg-white border-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500"}`,disabled:e===t||t==="...",children:t})})),r.jsx("li",{children:r.jsxs("button",{onClick:()=>d.get("",{page:e+1},{preserveState:!0,preserveScroll:!0}),disabled:e===s,className:"flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700",children:[r.jsx("span",{className:"sr-only",children:"Next"}),r.jsx("svg",{className:"w-2.5 h-2.5 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:r.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})})]})})]})})}export{m as P};
