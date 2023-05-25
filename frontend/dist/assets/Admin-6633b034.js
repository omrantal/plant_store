import{r as d,t as N,u as xe,b as K,_ as q,c as Pe,a,S as me,j as v,F as Se}from"./index-a1ba6871.js";import{A as Ae,c as Re}from"./index.esm-fa7a5fc5.js";import{B as ke,a as $e,b as ve}from"./index.esm-58293f3a.js";import{s as B}from"./style-c048b2de.js";import{u as _e}from"./usePlantsContext-fd8a136a.js";function we(e){var t,o,c="";if(typeof e=="string"||typeof e=="number")c+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=we(e[t]))&&(c&&(c+=" "),c+=o);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}function Q(){for(var e,t,o=0,c="";o<arguments.length;)(e=arguments[o++])&&(t=we(e))&&(c&&(c+=" "),c+=t);return c}const Y=e=>typeof e=="number"&&!isNaN(e),W=e=>typeof e=="string",M=e=>typeof e=="function",se=e=>W(e)||M(e)?e:null,pe=e=>d.isValidElement(e)||W(e)||M(e)||Y(e);function De(e,t,o){o===void 0&&(o=300);const{scrollHeight:c,style:p}=e;requestAnimationFrame(()=>{p.minHeight="initial",p.height=c+"px",p.transition=`all ${o}ms`,requestAnimationFrame(()=>{p.height="0",p.padding="0",p.margin="0",setTimeout(t,o)})})}function oe(e){let{enter:t,exit:o,appendPosition:c=!1,collapse:p=!0,collapseDuration:h=300}=e;return function(n){let{children:u,position:_,preventExitTransition:w,done:b,nodeRef:E,isIn:L}=n;const m=c?`${t}--${_}`:t,f=c?`${o}--${_}`:o,r=d.useRef(0);return d.useLayoutEffect(()=>{const s=E.current,i=m.split(" "),T=I=>{I.target===E.current&&(s.dispatchEvent(new Event("d")),s.removeEventListener("animationend",T),s.removeEventListener("animationcancel",T),r.current===0&&I.type!=="animationcancel"&&s.classList.remove(...i))};s.classList.add(...i),s.addEventListener("animationend",T),s.addEventListener("animationcancel",T)},[]),d.useEffect(()=>{const s=E.current,i=()=>{s.removeEventListener("animationend",i),p?De(s,b,h):b()};L||(w?i():(r.current=1,s.className+=` ${f}`,s.addEventListener("animationend",i)))},[L]),N.createElement(N.Fragment,null,u)}}function Ee(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}const j={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const o=this.list.get(e).filter(c=>c!==t);return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const o=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(o)})}},te=e=>{let{theme:t,type:o,...c}=e;return N.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...c})},he={info:function(e){return N.createElement(te,{...e},N.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return N.createElement(te,{...e},N.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return N.createElement(te,{...e},N.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return N.createElement(te,{...e},N.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return N.createElement("div",{className:"Toastify__spinner"})}};function Be(e){const[,t]=d.useReducer(m=>m+1,0),[o,c]=d.useState([]),p=d.useRef(null),h=d.useRef(new Map).current,n=m=>o.indexOf(m)!==-1,u=d.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:m=>h.get(m)}).current;function _(m){let{containerId:f}=m;const{limit:r}=u.props;!r||f&&u.containerId!==f||(u.count-=u.queue.length,u.queue=[])}function w(m){c(f=>m==null?[]:f.filter(r=>r!==m))}function b(){const{toastContent:m,toastProps:f,staleId:r}=u.queue.shift();L(m,f,r)}function E(m,f){let{delay:r,staleId:s,...i}=f;if(!pe(m)||function($){return!p.current||u.props.enableMultiContainer&&$.containerId!==u.props.containerId||h.has($.toastId)&&$.updateId==null}(i))return;const{toastId:T,updateId:I,data:g}=i,{props:y}=u,R=()=>w(T),k=I==null;k&&u.count++;const x={...y,style:y.toastStyle,key:u.toastKey++,...Object.fromEntries(Object.entries(i).filter($=>{let[F,O]=$;return O!=null})),toastId:T,updateId:I,data:g,closeToast:R,isIn:!1,className:se(i.className||y.toastClassName),bodyClassName:se(i.bodyClassName||y.bodyClassName),progressClassName:se(i.progressClassName||y.progressClassName),autoClose:!i.isLoading&&(P=i.autoClose,S=y.autoClose,P===!1||Y(P)&&P>0?P:S),deleteToast(){const $=Ee(h.get(T),"removed");h.delete(T),j.emit(4,$);const F=u.queue.length;if(u.count=T==null?u.count-u.displayedToast:u.count-1,u.count<0&&(u.count=0),F>0){const O=T==null?u.props.limit:1;if(F===1||O===1)u.displayedToast++,b();else{const U=O>F?F:O;u.displayedToast=U;for(let A=0;A<U;A++)b()}}else t()}};var P,S;x.iconOut=function($){let{theme:F,type:O,isLoading:U,icon:A}=$,z=null;const V={theme:F,type:O};return A===!1||(M(A)?z=A(V):d.isValidElement(A)?z=d.cloneElement(A,V):W(A)||Y(A)?z=A:U?z=he.spinner():(H=>H in he)(O)&&(z=he[O](V))),z}(x),M(i.onOpen)&&(x.onOpen=i.onOpen),M(i.onClose)&&(x.onClose=i.onClose),x.closeButton=y.closeButton,i.closeButton===!1||pe(i.closeButton)?x.closeButton=i.closeButton:i.closeButton===!0&&(x.closeButton=!pe(y.closeButton)||y.closeButton);let D=m;d.isValidElement(m)&&!W(m.type)?D=d.cloneElement(m,{closeToast:R,toastProps:x,data:g}):M(m)&&(D=m({closeToast:R,toastProps:x,data:g})),y.limit&&y.limit>0&&u.count>y.limit&&k?u.queue.push({toastContent:D,toastProps:x,staleId:s}):Y(r)?setTimeout(()=>{L(D,x,s)},r):L(D,x,s)}function L(m,f,r){const{toastId:s}=f;r&&h.delete(r);const i={content:m,props:f};h.set(s,i),c(T=>[...T,s].filter(I=>I!==r)),j.emit(4,Ee(i,i.props.updateId==null?"added":"updated"))}return d.useEffect(()=>(u.containerId=e.containerId,j.cancelEmit(3).on(0,E).on(1,m=>p.current&&w(m)).on(5,_).emit(2,u),()=>{h.clear(),j.emit(3,u)}),[]),d.useEffect(()=>{u.props=e,u.isToastActive=n,u.displayedToast=o.length}),{getToastToRender:function(m){const f=new Map,r=Array.from(h.values());return e.newestOnTop&&r.reverse(),r.forEach(s=>{const{position:i}=s.props;f.has(i)||f.set(i,[]),f.get(i).push(s)}),Array.from(f,s=>m(s[0],s[1]))},containerRef:p,isToastActive:n}}function be(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Te(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Me(e){const[t,o]=d.useState(!1),[c,p]=d.useState(!1),h=d.useRef(null),n=d.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,u=d.useRef(e),{autoClose:_,pauseOnHover:w,closeToast:b,onClick:E,closeOnClick:L}=e;function m(g){if(e.draggable){g.nativeEvent.type==="touchstart"&&g.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",i),document.addEventListener("mouseup",T),document.addEventListener("touchmove",i),document.addEventListener("touchend",T);const y=h.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=y.getBoundingClientRect(),y.style.transition="",n.x=be(g.nativeEvent),n.y=Te(g.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=y.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=y.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function f(g){if(n.boundingRect){const{top:y,bottom:R,left:k,right:x}=n.boundingRect;g.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=k&&n.x<=x&&n.y>=y&&n.y<=R?s():r()}}function r(){o(!0)}function s(){o(!1)}function i(g){const y=h.current;n.canDrag&&y&&(n.didMove=!0,t&&s(),n.x=be(g),n.y=Te(g),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),y.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,y.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function T(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",T),document.removeEventListener("touchmove",i),document.removeEventListener("touchend",T);const g=h.current;if(n.canDrag&&n.didMove&&g){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return p(!0),void e.closeToast();g.style.transition="transform 0.2s, opacity 0.2s",g.style.transform=`translate${e.draggableDirection}(0)`,g.style.opacity="1"}}d.useEffect(()=>{u.current=e}),d.useEffect(()=>(h.current&&h.current.addEventListener("d",r,{once:!0}),M(e.onOpen)&&e.onOpen(d.isValidElement(e.children)&&e.children.props),()=>{const g=u.current;M(g.onClose)&&g.onClose(d.isValidElement(g.children)&&g.children.props)}),[]),d.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||s(),window.addEventListener("focus",r),window.addEventListener("blur",s)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",r),window.removeEventListener("blur",s))}),[e.pauseOnFocusLoss]);const I={onMouseDown:m,onTouchStart:m,onMouseUp:f,onTouchEnd:f};return _&&w&&(I.onMouseEnter=s,I.onMouseLeave=r),L&&(I.onClick=g=>{E&&E(g),n.canCloseOnClick&&b()}),{playToast:r,pauseToast:s,isRunning:t,preventExitTransition:c,toastRef:h,eventHandlers:I}}function Ne(e){let{closeToast:t,theme:o,ariaLabel:c="close"}=e;return N.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:p=>{p.stopPropagation(),t(p)},"aria-label":c},N.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},N.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Fe(e){let{delay:t,isRunning:o,closeToast:c,type:p="default",hide:h,className:n,style:u,controlledProgress:_,progress:w,rtl:b,isIn:E,theme:L}=e;const m=h||_&&w===0,f={...u,animationDuration:`${t}ms`,animationPlayState:o?"running":"paused",opacity:m?0:1};_&&(f.transform=`scaleX(${w})`);const r=Q("Toastify__progress-bar",_?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${L}`,`Toastify__progress-bar--${p}`,{"Toastify__progress-bar--rtl":b}),s=M(n)?n({rtl:b,type:p,defaultClassName:r}):Q(r,n);return N.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:s,style:f,[_&&w>=1?"onTransitionEnd":"onAnimationEnd"]:_&&w<1?null:()=>{E&&c()}})}const ze=e=>{const{isRunning:t,preventExitTransition:o,toastRef:c,eventHandlers:p}=Me(e),{closeButton:h,children:n,autoClose:u,onClick:_,type:w,hideProgressBar:b,closeToast:E,transition:L,position:m,className:f,style:r,bodyClassName:s,bodyStyle:i,progressClassName:T,progressStyle:I,updateId:g,role:y,progress:R,rtl:k,toastId:x,deleteToast:P,isIn:S,isLoading:D,iconOut:$,closeOnClick:F,theme:O}=e,U=Q("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${w}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":F}),A=M(f)?f({rtl:k,position:m,type:w,defaultClassName:U}):Q(U,f),z=!!R||!u,V={closeToast:E,type:w,theme:O};let H=null;return h===!1||(H=M(h)?h(V):d.isValidElement(h)?d.cloneElement(h,V):Ne(V)),N.createElement(L,{isIn:S,done:P,position:m,preventExitTransition:o,nodeRef:c},N.createElement("div",{id:x,onClick:_,className:A,...p,style:r,ref:c},N.createElement("div",{...S&&{role:y},className:M(s)?s({type:w}):Q("Toastify__toast-body",s),style:i},$!=null&&N.createElement("div",{className:Q("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},$),N.createElement("div",null,n)),H,N.createElement(Fe,{...g&&!z?{key:`pb-${g}`}:{},rtl:k,theme:O,delay:u,isRunning:t,isIn:S,closeToast:E,hide:b,type:w,style:I,className:T,controlledProgress:z,progress:R||0})))},re=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},je=oe(re("bounce",!0));oe(re("slide",!0));oe(re("zoom"));const Ye=oe(re("flip")),ge=d.forwardRef((e,t)=>{const{getToastToRender:o,containerRef:c,isToastActive:p}=Be(e),{className:h,style:n,rtl:u,containerId:_}=e;function w(b){const E=Q("Toastify__toast-container",`Toastify__toast-container--${b}`,{"Toastify__toast-container--rtl":u});return M(h)?h({position:b,rtl:u,defaultClassName:E}):Q(E,se(h))}return d.useEffect(()=>{t&&(t.current=c.current)},[]),N.createElement("div",{ref:c,className:"Toastify",id:_},o((b,E)=>{const L=E.length?{...n}:{...n,pointerEvents:"none"};return N.createElement("div",{className:w(b),style:L,key:`container-${b}`},E.map((m,f)=>{let{content:r,props:s}=m;return N.createElement(ze,{...s,isIn:p(s.toastId),style:{...s.style,"--nth":f+1,"--len":E.length},key:`toast-${s.key}`},r)}))}))});ge.displayName="ToastContainer",ge.defaultProps={position:"top-right",transition:je,autoClose:5e3,closeButton:Ne,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let fe,G=new Map,X=[],Ue=1;function Ce(){return""+Ue++}function Ve(e){return e&&(W(e.toastId)||Y(e.toastId))?e.toastId:Ce()}function J(e,t){return G.size>0?j.emit(0,e,t):X.push({content:e,options:t}),t.toastId}function ae(e,t){return{...t,type:t&&t.type||e,toastId:Ve(t)}}function ne(e){return(t,o)=>J(t,ae(e,o))}function C(e,t){return J(e,ae("default",t))}C.loading=(e,t)=>J(e,ae("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),C.promise=function(e,t,o){let c,{pending:p,error:h,success:n}=t;p&&(c=W(p)?C.loading(p,o):C.loading(p.render,{...o,...p}));const u={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},_=(b,E,L)=>{if(E==null)return void C.dismiss(c);const m={type:b,...u,...o,data:L},f=W(E)?{render:E}:E;return c?C.update(c,{...m,...f}):C(f.render,{...m,...f}),L},w=M(e)?e():e;return w.then(b=>_("success",n,b)).catch(b=>_("error",h,b)),w},C.success=ne("success"),C.info=ne("info"),C.error=ne("error"),C.warning=ne("warning"),C.warn=C.warning,C.dark=(e,t)=>J(e,ae("default",{theme:"dark",...t})),C.dismiss=e=>{G.size>0?j.emit(1,e):X=X.filter(t=>e!=null&&t.options.toastId!==e)},C.clearWaitingQueue=function(e){return e===void 0&&(e={}),j.emit(5,e)},C.isActive=e=>{let t=!1;return G.forEach(o=>{o.isToastActive&&o.isToastActive(e)&&(t=!0)}),t},C.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const o=function(c,p){let{containerId:h}=p;const n=G.get(h||fe);return n&&n.getToast(c)}(e,t);if(o){const{props:c,content:p}=o,h={delay:100,...c,...t,toastId:t.toastId||e,updateId:Ce()};h.toastId!==e&&(h.staleId=e);const n=h.render||p;delete h.render,J(n,h)}},0)},C.done=e=>{C.update(e,{progress:1})},C.onChange=e=>(j.on(4,e),()=>{j.off(4,e)}),C.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},C.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},j.on(2,e=>{fe=e.containerId||e,G.set(fe,e),X.forEach(t=>{j.emit(0,t.content,t.options)}),X=[]}).on(3,e=>{G.delete(e.containerId||e),G.size===0&&j.off(0).off(1).off(5)});const He=()=>{const{user:e,dispatch:t}=xe(),{dispatch:o}=_e(),[c,p]=d.useState(!0),[h,n]=d.useState(!0),[u,_]=d.useState(!1);return{plantsLoading:c,usersLoading:h,modal:u,setModal:_,getPlantsFromStore:async()=>{await K.get("/api/store").then(r=>{o({type:"GET_FROM_STORE",payload:r.data})}).catch(r=>{console.log(r)}),p(!1)},getUsers:async r=>{await K.get("/api/user",{headers:{Authorization:`Bearer ${r}`}}).then(s=>{t({type:"GET_USERS",payload:s.data})}).catch(s=>{console.log(s)}),n(!1)},addPlant:async({image:r,name:s,price:i,type:T,title:I,desc:g,watering:y,light:R,about:k})=>{_(!1),p(!0);const x={image:r,name:s,price:i,type:T,title:I,desc:g,watering:y,light:R,about:k};await K.post("/api/store",x,{headers:{Authorization:`Bearer ${e.token}`}}).then(P=>{o({type:"ADD_TO_STORE",payload:P.data}),q(()=>import("./Toast-1d70326b.js"),["assets/Toast-1d70326b.js","assets/index-a1ba6871.js","assets/index-ad40ca10.css","assets/index.esm-fa7a5fc5.js","assets/iconBase-b0a5b4c4.js","assets/index.esm-58293f3a.js","assets/style-c048b2de.js","assets/usePlantsContext-fd8a136a.js"]).then(S=>{S.notifySuccess("Plant got added successfully")})}).catch(P=>{q(()=>import("./Toast-1d70326b.js"),["assets/Toast-1d70326b.js","assets/index-a1ba6871.js","assets/index-ad40ca10.css","assets/index.esm-fa7a5fc5.js","assets/iconBase-b0a5b4c4.js","assets/index.esm-58293f3a.js","assets/style-c048b2de.js","assets/usePlantsContext-fd8a136a.js"]).then(S=>{S.notifyError(P.response.data.error)})}),p(!1)},editPlant:async({id:r,image:s,name:i,price:T,type:I,title:g,desc:y,watering:R,light:k,about:x})=>{_(!1),p(!0);const P={image:s,name:i,price:T,type:I,title:g,desc:y,watering:R,light:k,about:x};await K.put(`/api/store/${r}`,P,{headers:{Authorization:`Bearer ${e.token}`}}).then(S=>{o({type:"UPDATE_IN_STORE",payload:{_id:r,...P}}),q(()=>import("./Toast-1d70326b.js"),["assets/Toast-1d70326b.js","assets/index-a1ba6871.js","assets/index-ad40ca10.css","assets/index.esm-fa7a5fc5.js","assets/iconBase-b0a5b4c4.js","assets/index.esm-58293f3a.js","assets/style-c048b2de.js","assets/usePlantsContext-fd8a136a.js"]).then(D=>{D.notifySuccess("Plant got updated successfully")})}).catch(S=>{q(()=>import("./Toast-1d70326b.js"),["assets/Toast-1d70326b.js","assets/index-a1ba6871.js","assets/index-ad40ca10.css","assets/index.esm-fa7a5fc5.js","assets/iconBase-b0a5b4c4.js","assets/index.esm-58293f3a.js","assets/style-c048b2de.js","assets/usePlantsContext-fd8a136a.js"]).then(D=>{D.notifyError(S.response.data.error)})}),p(!1)},removePlant:async r=>{p(!0),await K.delete(`/api/store/${r}`,{headers:{Authorization:`Bearer ${e.token}`}}).then(s=>{o({type:"DELETE_FROM_STORE",payload:{_id:r}}),q(()=>import("./Toast-1d70326b.js"),["assets/Toast-1d70326b.js","assets/index-a1ba6871.js","assets/index-ad40ca10.css","assets/index.esm-fa7a5fc5.js","assets/iconBase-b0a5b4c4.js","assets/index.esm-58293f3a.js","assets/style-c048b2de.js","assets/usePlantsContext-fd8a136a.js"]).then(i=>{i.notifySuccess("Plant got removed successfully")})}).catch(s=>{q(()=>import("./Toast-1d70326b.js"),["assets/Toast-1d70326b.js","assets/index-a1ba6871.js","assets/index-ad40ca10.css","assets/index.esm-fa7a5fc5.js","assets/iconBase-b0a5b4c4.js","assets/index.esm-58293f3a.js","assets/style-c048b2de.js","assets/usePlantsContext-fd8a136a.js"]).then(i=>{i.notifyError(s.response.data.error)})}),p(!1)},removeUser:async r=>{n(!0),await K.delete(`/api/user/${r}`,{headers:{Authorization:`Bearer ${e.token}`}}).then(s=>{t({type:"DELETE_USER",payload:{_id:r}}),q(()=>import("./Toast-1d70326b.js"),["assets/Toast-1d70326b.js","assets/index-a1ba6871.js","assets/index-ad40ca10.css","assets/index.esm-fa7a5fc5.js","assets/iconBase-b0a5b4c4.js","assets/index.esm-58293f3a.js","assets/style-c048b2de.js","assets/usePlantsContext-fd8a136a.js"]).then(i=>{i.notifySuccess("User got removed successfully")})}).catch(s=>{q(()=>import("./Toast-1d70326b.js"),["assets/Toast-1d70326b.js","assets/index-a1ba6871.js","assets/index-ad40ca10.css","assets/index.esm-fa7a5fc5.js","assets/iconBase-b0a5b4c4.js","assets/index.esm-58293f3a.js","assets/style-c048b2de.js","assets/usePlantsContext-fd8a136a.js"]).then(i=>{i.notifyError(s.response.data.error)})}),n(!1)}}},qe=()=>{const{user:e,users:t}=xe(),{plants:o}=_e(),{plantsLoading:c,usersLoading:p,modal:h,setModal:n,getPlantsFromStore:u,getUsers:_,addPlant:w,editPlant:b,removePlant:E,removeUser:L}=He(),m=Pe(),[f,r]=d.useState(1),[s,i]=d.useState(""),[T,I]=d.useState(!0),[g,y]=d.useState(""),[R,k]=d.useState(""),[x,P]=d.useState(""),[S,D]=d.useState("indoor"),[$,F]=d.useState(""),[O,U]=d.useState(""),[A,z]=d.useState(""),[V,H]=d.useState(""),[ie,le]=d.useState(""),[ce,de]=d.useState(""),[Le,ye]=d.useState("");d.useEffect(()=>{(async()=>{const{role:ue,token:Oe}=await JSON.parse(localStorage.getItem("user"));ue!=="ADMIN"?m("/"):(I(!1),await u(),await _(Oe))})()},[e]),d.useEffect(()=>{const l=ue=>{ue.key==="Escape"&&n(!1)};return window.addEventListener("keydown",l),()=>{window.removeEventListener("keydown",l)}},[]);const Z=d.useMemo(()=>(f===1?o:t).filter(l=>(f===1?l.name:l.username).toLowerCase().includes(s.toLowerCase())),[o,t,f,s]),ee=()=>{y(""),P(""),k(""),F(""),D("indoor"),U(""),z(""),H(""),le(""),de("")},Ie=l=>{y(l._id),P(l.name),k(l.image),F(l.price),D(l.type),U(l.title),z(l.desc),H(l.watering),le(l.light),de(l.about),ye("Edit"),n(!0)};return T?a(me,{height:"300px"}):v("section",{className:`${B.padding}`,children:[a("h1",{className:`${B.heading} mb-6 text-center`,children:"Admin Panel"}),v("div",{className:"w-full my-6 flex flex-col sm:flex-row items-center justify-around",children:[v("div",{className:"my-2 sm:my-0 mx-0 sm:mx-6 order-2 sm:order-1",children:[a("button",{className:`${f===1?"bg-[#669660] text-white opacity-100":"bg-white opacity-30"} duration-300 whitespace-nowrap rounded-full rounded-r-none py-2 px-4`,onClick:()=>r(1),children:"Plants"}),a("button",{className:`${f===2?"bg-[#669660] text-white opacity-100":"bg-white opacity-30"} duration-300 whitespace-nowrap rounded-full rounded-l-none py-2 px-4`,onClick:()=>r(2),children:"Users"})]}),v("div",{className:"flex flex-row my-2 sm:my-0 mx-0 sm:mx-6 order-1 sm:order-2",children:[a("label",{htmlFor:"search",className:"rounded-full rounded-r-none py-2 px-4 border-solid border-gray-400 border-[1px] border-r-0",children:a(Ae,{className:"w-6 h-6 text-gray-800 shrink-0"})}),a("input",{id:"search",type:"search",className:"rounded-full rounded-l-none py-2 px-4 border-solid border-gray-400 border-[1px] focus:outline-none",placeholder:"Search ...",onChange:l=>i(l.target.value)})]})]}),f===1?v("div",{children:[a("div",{className:`fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-70 ${h?"block":"hidden"}`,children:v("div",{className:"flex flex-col items-start my-2 mx-auto p-4 bg-gradient-to-t from-[#669660] to-[#99B896] text-black w-[60%]",children:[v("div",{className:`flex flex-col w-full ${B.paragraph3}`,children:[a("h1",{className:`${B.paragraph1} my-3 text-center`,children:"Add New Plant"}),v("div",{children:[a("label",{htmlFor:"image",children:"Enter Image Link:"}),a("input",{id:"image",className:"my-2 px-2 w-full h-[30px]",value:R,onChange:l=>k(l.target.value)})]}),v("div",{children:[a("label",{htmlFor:"name",children:"Enter Name:"}),a("input",{id:"name",className:"my-2 px-2 w-full h-[30px]",value:x,onChange:l=>P(l.target.value)})]}),v("div",{children:[a("label",{htmlFor:"price",children:"Enter Price:"}),a("input",{id:"price",className:"my-2 px-2 w-full h-[30px]",value:$,onChange:l=>F(l.target.value)})]}),v("div",{children:[a("label",{htmlFor:"type",children:"Select Type:"}),v("select",{id:"type",className:"bg-white my-2 px-2 w-full h-[30px]",value:S,onChange:l=>D(l.target.value),children:[a("option",{value:"indoor",children:"Indoor"}),a("option",{value:"outdoor",children:"Outdoor"})]})]}),v("div",{children:[a("label",{htmlFor:"title",children:"Enter Title:"}),a("input",{id:"title",className:"my-2 px-2 w-full h-[30px]",value:O,onChange:l=>U(l.target.value)})]}),v("div",{children:[a("label",{htmlFor:"desc",children:"Enter Description:"}),a("input",{id:"desc",className:"my-2 px-2 w-full h-[30px]",value:A,onChange:l=>z(l.target.value)})]}),v("div",{children:[a("label",{htmlFor:"watering",children:"Enter Watering Conditions:"}),a("input",{id:"watering",className:"my-2 px-2 w-full h-[30px]",value:V,onChange:l=>H(l.target.value)})]}),v("div",{children:[a("label",{htmlFor:"light",children:"Enter Light Conditions:"}),a("input",{id:"light",className:"my-2 px-2 w-full h-[30px]",value:ie,onChange:l=>le(l.target.value)})]}),v("div",{children:[a("label",{htmlFor:"about",children:"Enter About Section:"})," ",a("br",{}),a("textarea",{id:"about",className:"my-2 p-2 w-full min-w-full max-w-full min-h-[60px]",value:ce,onChange:l=>de(l.target.value)})]})]}),v("div",{className:`flex justify-between mt-6 w-full ${B.paragraph2}`,children:[Le==="Add"?a("button",{className:"mx-1 py-2 px-4 text-white cursor-pointer hover:bg-[#99B896] hover:scale-110 duration-300",disabled:(x&&O)==="",onClick:()=>{w({image:R,name:x,price:$,type:S,title:O,desc:A,watering:V,light:ie,about:ce}),ee()},children:"Add"}):a("button",{className:"mx-1 py-2 px-4 text-white cursor-pointer hover:bg-[#99B896] hover:scale-110 duration-300",disabled:(x&&O)==="",onClick:()=>{b({id:g,image:R,name:x,price:$,type:S,title:O,desc:A,watering:V,light:ie,about:ce}),ee()},children:"Edit"}),a("button",{className:"mx-1 py-2 px-4 text-white cursor-pointer hover:bg-[#99B896] hover:scale-110 duration-300",onClick:()=>{n(!1),ee()},children:"Close"})]})]})}),a("div",{className:"list-none",children:c?a(me,{height:"300px"}):Z.length>0?v(Se,{children:[v("div",{className:"flex justify-center items-center w-fit mx-auto my-3 sm:my-6 px-6 py-3 text-center text-white cursor-pointer bg-[#669660] hover:bg-[#99B896] hover:scale-110 duration-500",onClick:()=>{ee(),ye("Add"),n(!0)},children:[a(ke,{className:"h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"}),a("p",{className:`${B.paragraph1} ml-2`,children:"Add Plant"})]}),Z.map(l=>v("li",{className:"flex flex-col items-center justify-center mx-auto w-[80%] border-gray-300 border-solid border-[1px] p-4 mb-2",children:[v("div",{className:"flex justify-start items-start w-full",children:[a("img",{src:l.image,alt:"plant",className:"h-[120px] w-[120px]"}),v("div",{className:"px-1 sm:px-3 py-3 ml-4",children:[a("p",{className:`${B.paragraph2} font-bold mb-2`,children:l.name}),a("p",{className:`${B.paragraph3} font-semibold`,children:l.title}),a("p",{className:`${B.paragraph3}`,children:l.desc}),v("p",{className:`${B.paragraph3} font-semibold`,children:[l.price,".00"]})]})]}),v("div",{className:"flex justify-between w-full",children:[v("p",{className:`${B.paragraph2} my-2 ml-3`,children:[l.type," plant"]}),v("div",{className:"flex justify-end items-end m-2",children:[a("div",{className:"hover:bg-gray-300 duration-300 ml-3 hover:rounded-full",children:a($e,{className:"m-0.5 sm:m-1 cursor-pointer h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7",onClick:()=>Ie(l)})}),a("div",{className:"hover:bg-gray-300 duration-300 ml-3 hover:rounded-full",children:a(ve,{className:"m-0.5 sm:m-1 cursor-pointer h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7",onClick:()=>E(l._id)})})]})]})]},l._id))]}):a("div",{className:"flex justify-center items-center w-full h-[343px]",children:a("h1",{className:B.heading,children:"Nothing to Show"})})})]}):a("div",{className:"list-none",children:p?a(me,{}):Z.length>0?Z.map(l=>v("li",{className:"flex flex-col items-center justify-center mx-auto w-[80%] border-gray-300 border-solid border-[1px] p-4 mb-2",children:[v("div",{className:"flex justify-start items-start w-full",children:[a(Re,{className:"h-[100px] w-[100px]"}),v("div",{className:"px-1 sm:px-3 py-3 ml-4",children:[a("p",{className:`${B.paragraph2} font-bold mb-2`,children:l.username}),a("p",{className:`${B.paragraph2} font-semibold`,children:l.email})]})]}),a("div",{className:"flex justify-end w-full",children:a("div",{className:"hover:bg-gray-300 duration-300 ml-3 hover:rounded-full",children:a(ve,{className:"m-0.5 sm:m-1 cursor-pointer h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7",onClick:()=>L(l._id)})})})]},l._id)):a("div",{className:"flex justify-center items-center w-full h-[343px]",children:a("h1",{className:B.heading,children:"Nothing to Show"})})}),a(ge,{})]})},Je=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"}));export{Ye as $,Je as A,C as Q};
