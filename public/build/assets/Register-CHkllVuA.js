import{G as o,j as e,x as d}from"./app-Bjn5v1rC.js";import{B as c}from"./Button-Cu1muM6q.js";import{i as u,M as x,L as p}from"./Icons-CqyroUO_.js";import{N as h}from"./Navbar-CaE6LlRo.js";import{P as g}from"./PasswordInput-U1OOk-no.js";import{T as m}from"./TextInput-D0DmMJqU.js";function y(){const{data:s,setData:r,post:i,processing:l,errors:t}=o({name:"",email:"",password:""}),n=a=>{a.preventDefault(),i(route("register"))};return e.jsxs("div",{className:"antialiased bg-gray-100",children:[e.jsx(h,{}),e.jsx("main",{className:"px-4 pt-20 min-h-screen flex flex-col sm:justify-center items-center sm:pt-0 bg-gray-100",children:e.jsxs("div",{className:"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-4 sm:p-6 md:p-8",children:[e.jsx("h2",{className:"text-xl font-medium text-center mb-1 text-gray-900",children:"Selamat Datang"}),e.jsx("h3",{className:"text-center text-sm mb-2 text-gray-500 font-medium",children:"Silahkan masuk ke akun Anda"}),e.jsxs("form",{className:"p-4",onSubmit:n,children:[e.jsx("div",{className:"mb-2",children:e.jsx(m,{label:"Nama",icon:e.jsx(u,{className:"w-5 h-5"}),errorMsg:t.name,id:"name",value:s.name,onChange:a=>r("name",a.target.value),autoFocus:!0,required:!0})}),e.jsx("div",{className:"mb-2",children:e.jsx(m,{label:"Email",icon:e.jsx(x,{className:"w-5 h-5"}),errorMsg:t.email,id:"email",type:"email",value:s.email,onChange:a=>r("email",a.target.value),required:!0})}),e.jsx("div",{className:"mb-4",children:e.jsx(g,{label:"Kata Sandi",icon:e.jsx(p,{className:"w-5 h-5"}),errorMsg:t.password,id:"password",minLength:8,value:s.password,onChange:a=>r("password",a.target.value),required:!0})}),e.jsx(c,{className:"w-full mb-2",type:"submit",disabled:l,children:"Daftar"}),e.jsxs("div",{className:"text-center text-sm font-medium text-gray-500",children:["Sudah punya akun?",e.jsx(d,{href:"/login",className:"text-primary-700 hover:underline",children:"Masuk"})]})]})]})})]})}export{y as default};
