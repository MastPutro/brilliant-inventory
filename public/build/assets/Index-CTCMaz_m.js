import{G as j,j as e}from"./app-Bjn5v1rC.js";import{A as b}from"./Alert-B2CoNMAD.js";import{B as d}from"./Button-Cu1muM6q.js";import{S as l}from"./Icons-CqyroUO_.js";import{P as o}from"./PasswordInput-U1OOk-no.js";import{T as c}from"./TextInput-D0DmMJqU.js";import{A as g}from"./AuthLayout-CslI81Fu.js";function _({auth:n,flash:u}){const{data:s,setData:r,put:t,processing:i,errors:m,reset:p}=j({name:n.user.name,email:n.user.email,password:"",current_password:""}),x=a=>{a.preventDefault(),t(route("account.update-profile"))},h=a=>{a.preventDefault(),t(route("account.update-password")),p("password","current_password")};return e.jsxs(g,{user:n.user,children:[e.jsx("h2",{className:"font-semibold text-gray-800 text-2xl mb-6",children:"Akun Saya"}),e.jsx(b,{flash:u}),e.jsxs("div",{className:"grid grid-cols-1 w-full gap-4 bg-white p-4 rounded-md",children:[e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-xl font-medium mb-2",children:"Informasi Akun"}),e.jsx("hr",{className:"border border-gray-200"})]}),e.jsxs("form",{className:"max-w-screen-sm space-y-4",onSubmit:x,children:[e.jsx("div",{children:e.jsx(c,{label:"Nama",id:"name",name:"name",value:s.name,onChange:a=>r("name",a.target.value),required:!0})}),e.jsx("div",{children:e.jsx(c,{label:"Email",id:"email",name:"email",type:"email",value:s.email,onChange:a=>r("email",a.target.value),required:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(d,{type:"submit",icon:e.jsx(l,{className:"w-5 h-5"}),disabled:i,children:"Simpan"})})]}),e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-xl font-medium mb-2",children:"Ubah Kata Sandi"}),e.jsx("hr",{className:"border border-gray-200"})]}),e.jsxs("form",{className:"max-w-screen-sm space-y-4",onSubmit:h,children:[e.jsx("div",{children:e.jsx(o,{label:"Kata Sandi Lama",id:"current-password",minLength:8,value:s.current_password,onChange:a=>r("current_password",a.target.value),errorMsg:m.current_password,required:!0})}),e.jsx("div",{children:e.jsx(o,{label:"Kata Sandi Baru",id:"new-password",minLength:8,value:s.password,onChange:a=>r("password",a.target.value),errorMsg:m.password,required:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(d,{type:"submit",icon:e.jsx(l,{className:"w-5 h-5"}),disabled:i,children:"Simpan"})})]})]})]})}export{_ as default};
