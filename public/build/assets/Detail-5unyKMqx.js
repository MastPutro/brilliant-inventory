import{r as u,G as p,j as e,x as g}from"./app-Bjn5v1rC.js";import{B as m}from"./Button-Cu1muM6q.js";import{B as j,S as f,P as N,T as b}from"./Icons-CqyroUO_.js";import{T as w}from"./Textarea-goP6-HIq.js";import{T as c}from"./TextInput-D0DmMJqU.js";import{A as y}from"./AuthLayout-CslI81Fu.js";function B({auth:d,distributor:s}){const[r,o]=u.useState(!1),{data:t,setData:l,put:i,processing:x,errors:n}=p({name:s.name,phone:s.phone,address:s.address}),h=a=>{a.preventDefault(),i(route("distributors.edit",{id:`D${s.id.toString().padStart(3,"0")}`}))};return e.jsxs(y,{user:d.user,children:[e.jsx("h2",{className:"font-semibold text-gray-800 text-2xl mb-6",children:"Detail Distributor"}),e.jsxs("form",{onSubmit:h,className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4 bg-white p-4 rounded-md",children:[e.jsxs("div",{className:"sm:col-span-2 md:col-span-3",children:[e.jsx("p",{className:"text-xl font-medium mb-2",children:"Informasi Distributor"}),e.jsx("hr",{className:"border border-gray-200"})]}),e.jsx("div",{className:"max-w-screen-sm",children:r?e.jsx(c,{label:"Nama Distributor",value:t.name,onChange:a=>l("name",a.target.value),id:"name",errorMsg:n.name,required:!0,autoFocus:!0}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"block mb-1 text-sm font-medium text-gray-600",children:"Nama Distributor"}),e.jsx("p",{className:"w-full text-lg text-gray-900",children:s.name})]})}),e.jsx("div",{className:"max-w-screen-sm",children:r?e.jsx(c,{label:"Nomor Telepon",value:t.phone,onChange:a=>l("phone",a.target.value),id:"phone",errorMsg:n.phone,required:!0}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"block mb-1 text-sm font-medium text-gray-600",children:"Nomor Telepon"}),e.jsx("p",{className:"w-full text-lg text-gray-900",children:s.phone})]})}),e.jsx("div",{className:"max-w-screen-sm sm:col-span-2",children:r?e.jsx(w,{label:"Alamat",value:t.address,onChange:a=>l("address",a.target.value),id:"address",errorMsg:n.address,required:!0}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"block mb-1 text-sm font-medium text-gray-600",children:"Alamat"}),e.jsx("p",{className:"w-full text-lg text-gray-900",children:s.address})]})}),e.jsx("div",{className:"max-w-screen-sm sm:col-span-3 flex gap-2",children:r?e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"button",colorScheme:"secondary",onClick:()=>o(!1),icon:e.jsx(j,{className:"w-5 h-5"}),children:"Batal"}),e.jsx(m,{type:"submit",icon:e.jsx(f,{className:"w-5 h-5"}),disabled:x,children:"Simpan"})]}):e.jsxs(e.Fragment,{children:[e.jsx(m,{colorScheme:"warning",type:"button",onClick:()=>o(!0),icon:e.jsx(N,{className:"w-5 h-5"}),children:"Edit"}),e.jsxs(g,{href:`/distributors/${s.id.toString().padStart(3,"0")}`,as:"button",method:"delete",type:"button",className:"btn danger",children:[e.jsx(b,{className:"h-5 w-5"}),"Hapus"]})]})})]})]})}export{B as default};
