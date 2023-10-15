import{u as y,r as v,a as e,T as n,j as t}from"./index-7944a1b6.js";import{d as C,e as b}from"./index.esm-2f7eda3c.js";import{b as j}from"./index.esm-f8ab8554.js";import{s as c}from"./style-c048b2de.js";import{u as O}from"./useCartFunctions-f65d4762.js";import{u as S}from"./usePlantsContext-67d54dea.js";import"./iconBase-5d0ce26d.js";const E=({plant:r})=>{const{dispatch:p}=S(),{user:i}=y(),{updateLoading:a,updatePlantInCart:o}=O(),[h,m]=v.useState(!1),{_id:l,numOfPieces:x}=r,u=async({id:f,name:g,price:N})=>{m(!0);const s=JSON.parse(localStorage.getItem(`${i.email}_cart`))||[],d=s.findIndex(w=>w.name===g);d!==-1&&s.splice(d,1),p({type:"DELETE_FROM_CART",payload:{id:f,price:N}}),s.length===0?localStorage.removeItem(`${i.email}_cart`):localStorage.setItem(`${i.email}_cart`,JSON.stringify(s)),m(!1)};return h?e("div",{className:"w-[250px] sm:w-[260px] md:w-[270px] lg:w-[280px] min-h-[122px] flex my-2 justify-center items-center",children:e(n,{width:"40px"})}):t("div",{className:"w-[250px] sm:w-[260px] md:w-[270px] lg:w-[280px] flex my-2 border-solid border-gray-400 border-[1px]",children:[e("img",{src:r.image,alt:"plant",className:"h-[120px] w-[120px]"}),t("div",{className:"flex-1 flex flex-col items-center justify-start",children:[e("h5",{className:`${c.paragraph2} my-3 text-center`,children:r.name}),t("div",{className:"flex mt-3 justify-center items-center",children:[e("p",{className:`${c.paragraph2} mr-3`,children:r.price}),e("div",{className:"hover:bg-gray-300 duration-300 ml-3 hover:rounded-full p-1",children:e(j,{className:"h-[24px] w-[24px] shrink-0 cursor-pointer",onClick:()=>u({id:l,name:r.name,price:r.price})})})]})]}),t("div",{className:"flex flex-col items-center justify-center mr-2",children:[e("button",{disabled:a,className:"hover:rounded-full hover:bg-gray-300 duration-300 p-0.5 mb-3",children:a?e(n,{width:"20px"}):e(C,{className:"h-[20px] w-[20px] shrink-0 cursor-pointer",onClick:()=>o({id:l,change:"add"})})}),e("p",{className:`${c.paragraph3}`,children:r.numOfPieces}),e("button",{disabled:a||x===1,className:"hover:rounded-full hover:bg-gray-300 duration-300 p-0.5 mt-3",children:a?e(n,{width:"20px"}):e(b,{className:"h-[20px] w-[20px] shrink-0 cursor-pointer",onClick:()=>o({id:l,change:"remove"})})})]})]})};export{E as CartCard};