import{r,_ as L,j as n,a as e,L as N,S as p}from"./index-7944a1b6.js";import{c as C}from"./index.esm-f8ab8554.js";import{a as _,b as P}from"./index.esm-aec0888b.js";import{a as B}from"./axios-760d4776.js";import{s as h}from"./style-c048b2de.js";import{B as j}from"./Button-3baf81b3.js";import{u as R}from"./usePlantsContext-67d54dea.js";import"./iconBase-5d0ce26d.js";const z=r.lazy(()=>L(()=>import("./PlantCard-7b9ff22d.js"),["assets/PlantCard-7b9ff22d.js","assets/index-7944a1b6.js","assets/index-0082ef7e.css","assets/iconBase-5d0ce26d.js","assets/style-c048b2de.js","assets/useCartFunctions-f65d4762.js","assets/usePlantsContext-67d54dea.js"]).then(i=>({default:i.PlantCard}))),A=()=>{const{isPlantAdded:i,dispatch:x}=R(),o=r.useRef(),[g,v]=r.useState(!0),[y,m]=r.useState(!1),[w,u]=r.useState(!0),[f,b]=r.useState([]);r.useEffect(()=>{(async()=>{await B.get("/api/store").then(s=>{x({type:"GET_FROM_STORE",payload:s.data});let a=[];for(;a.length<8;){const d=Math.floor(Math.random()*s.data.length),c=s.data[d];a.includes(c)||(a=[...a,c])}b(a),v(!1),l()}).catch(s=>{console.log(s)})})()},[]);const l=()=>{if(o.current){const{scrollLeft:t,scrollWidth:s,clientWidth:a}=o.current;if(a===s)u(!0),m(!0);else{const d=Math.ceil(t+a)>=s,c=Math.ceil(t)===0;m(d),u(c)}}};r.useEffect(()=>(l(),o.current.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{o.current&&o.current.removeEventListener("scroll",l),window.removeEventListener("resize",l)}),[o]);const S=()=>{var t=document.getElementById("slider");t.scrollLeft=t.scrollLeft-200},E=()=>{var t=document.getElementById("slider");t.scrollLeft=t.scrollLeft+200};return n("section",{id:"Store",className:`flex flex-col sm:flex-row justify-center items-center ${h.padding}`,children:[n("div",{className:"flex-[30%] flex flex-col justify-center m-6 sm:m-9",children:[n("div",{className:"flex items-center justify-between",children:[e("h1",{className:`${h.heading} mb-2`,children:"Shop Now"}),n(N,{className:"relative flex items-center ml-6 mr-3 my-1 cursor-pointer text-black hover:text-[#669660] duration-300",to:"/cart",children:[e(C,{className:"h-8 w-8"}),i!==0&&e("div",{className:"absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-semibold text-black bg-red-400 rounded-full -top-2 -right-3",children:i})]})]}),e("p",{className:`${h.paragraph3}`,children:"We’ve made it easy for you to bring your home to life with plants"}),e(j,{to:"/store",content:"Shop Now"})]}),e("div",{className:"flex-[70%] w-full sm:w-[70%]",children:n("div",{className:"relative flex items-center group",children:[e("div",{className:`${w?"opacity-0 cursor-default":"opacity-0 group-hover:opacity-100 duration-500 cursor-pointer"} absolute top-[80%] -translate-x-0 translate-y-[-50%] left-5 p-2 z-10 bg-[#669660] hover:bg-[#99B896] duration-300 text-white`,onClick:S,children:e(_,{size:20})}),e("div",{id:"slider",ref:o,className:"w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mx-6",children:g?e(p,{height:"200px"}):f&&f.map(t=>e(r.Suspense,{fallback:e(p,{height:"300px"}),children:e(z,{plant:t,group:!1})},t._id))}),e("div",{className:`${y?"opacity-0 cursor-default":"opacity-0 group-hover:opacity-100 duration-500 cursor-pointer"} absolute top-[80%] -translate-x-0 translate-y-[-50%] right-5 p-2 z-10 bg-[#669660] hover:bg-[#99B896] duration-300 text-white`,onClick:E,children:e(P,{size:20})})]})})]})};export{A as default};
