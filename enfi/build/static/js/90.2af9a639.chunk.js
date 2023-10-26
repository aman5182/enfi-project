"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[90],{63432:function(e,r,a){a.r(r),a.d(r,{default:function(){return Z}});var l=a(74165),c=a(15861),s=a(4942),i=a(1413),t=a(29439),o=a(72791),n=a(31243),d="http://localhost:5000";function m(){return(m=(0,c.Z)((0,l.Z)().mark((function e(r){var a;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(d,"/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Registration failed");case 6:return e.abrupt("return",a.json());case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Registration failed");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var h={registerUser:function(e){return m.apply(this,arguments)}},u=a(57689),p=a(11087),x=a(78983),y=a.p+"static/media/5068893.1e7dabeaf19218efea2b.jpg",f=a(24846),j=a(99161),g=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z' class='ci-primary'/>"],v=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M440,464V16H72V464H16v32H496V464Zm-32,0H272V400H240v64H104V48H408Z' class='ci-primary'/><rect width='32' height='32' x='160' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='240' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='320' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='160' y='208' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='240' y='208' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='320' y='208' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='160' y='112' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='240' y='112' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='320' y='112' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"],b=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z' class='ci-primary'/>"],N=a(93647),w=a.p+"static/media/reglogo.de711430808bbd2cb913.png",C=a(80184);var Z=function(){var e=(0,u.TH)().search,r=new URLSearchParams(e).get("Id"),a=(0,o.useState)({SponsorCode:r,FirstName:"",EmailId:"",MobileNo:"",Password:"",Country:"",ActionType:"I",CreatedBy:"101"}),d=(0,t.Z)(a,2),m=d[0],Z=d[1],V=((0,u.s0)(),(0,o.useState)(!0)),S=(0,t.Z)(V,2),H=(S[0],S[1]);(0,o.useEffect)((function(){r&&n.Z.get("http://localhost:5000/user-api/get-member-data/".concat(r)).then((function(e){Z((0,i.Z)((0,i.Z)({},m),{},{SponsorName:e.data[0].DisplayName})),H(!1)})).catch((function(e){console.error("Error fetching sponsor name:",e),H(!1)}))}),[r]);var M=function(e){var r=e.target,a=r.name,l=r.value;Z((0,i.Z)((0,i.Z)({},m),{},(0,s.Z)({},a,l)))},R=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(r){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,h.registerUser(m);case 4:console.log("Registration successful"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error("Registration failed:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(r){return e.apply(this,arguments)}}();return(0,C.jsx)("div",{className:"bg-light min-vh-100 py-2 d-flex flex-row align-items-center",style:{backgroundImage:"url(".concat(y,")"),backgroundSize:"cover"},children:(0,C.jsx)(x.KB,{className:"",children:(0,C.jsx)(x.rb,{className:"  justify-content-center",children:(0,C.jsx)(x.b7,{sm:11,md:10,lg:8,xl:8,className:"",children:(0,C.jsxs)(x.dL,{className:" d-flex flex-column flex-md-row h-100",children:[(0,C.jsx)(x.xH,{className:" ",style:{background:"linear-gradient(45deg, #331959, #543279, #3c215e, #311855, #2d164f)"},children:(0,C.jsxs)(x.sl,{className:"  d-flex flex-column justify-content-center align-items-center text-center",children:[" ",(0,C.jsx)("img",{src:w,style:{width:"10rem"},alt:""}),(0,C.jsxs)("div",{children:[(0,C.jsx)("h2",{className:"text-white mt-2",children:"Sign Up Now !!"}),(0,C.jsx)("br",{}),(0,C.jsxs)("p",{className:"mb-1",style:{color:"#dbdbdb"},children:["Not Signed in yet !"," "]}),(0,C.jsx)("p",{className:"mb-5",style:{color:"#dbdbdb"},children:"Register yourself to join us"}),(0,C.jsx)("p",{className:"mb-0",style:{color:"#dbdbdb"},children:"Already Have An Account !"}),(0,C.jsx)(p.rU,{to:"/",children:(0,C.jsx)(x.u5,{color:"warning",className:"mt-3 px-5 ",active:!0,tabIndex:-1,children:"login"})})]})]})}),(0,C.jsx)(x.xH,{className:"col-lg-6 col-md-6 col-12",children:(0,C.jsx)(x.sl,{className:" py-2",children:(0,C.jsxs)(x.lx,{onSubmit:R,children:[(0,C.jsx)("h1",{children:"Register"}),(0,C.jsx)("p",{className:"text-medium-emphasis",children:"Create your account"}),(0,C.jsxs)(x.YR,{className:"mb-3",children:[(0,C.jsx)(x.wV,{children:(0,C.jsx)(f.Z,{icon:j.E})}),(0,C.jsx)(x.jO,{placeholder:"Sponser ID",autoComplete:"Sponser ID",readOnly:!0,value:m.SponsorCode})]}),(0,C.jsxs)(x.YR,{className:"mb-3",children:[(0,C.jsx)(x.wV,{children:"@"}),(0,C.jsx)(x.jO,{placeholder:"Sponser Name",autoComplete:"Sponser Name",readOnly:!0,value:m.SponsorName})]}),(0,C.jsxs)(x.YR,{className:"mb-3",children:[(0,C.jsx)(x.wV,{children:"@"}),(0,C.jsx)(x.jO,{placeholder:"User Name",autoComplete:"User Name",type:"text",id:"FirstName",name:"FirstName",value:m.FirstName,onChange:M,required:!0})]}),(0,C.jsxs)(x.YR,{className:"mb-3",children:[(0,C.jsx)(x.wV,{children:(0,C.jsx)(f.Z,{icon:g})}),(0,C.jsx)(x.jO,{placeholder:"Email",autoComplete:"Email",type:"email",id:"EmailId",name:"EmailId",value:m.EmailId,onChange:M,required:!0})]}),(0,C.jsxs)(x.YR,{className:"mb-3",children:[(0,C.jsx)(x.wV,{children:(0,C.jsx)(f.Z,{icon:v})}),(0,C.jsx)(x.jO,{placeholder:"Country",autoComplete:"Country",type:"text",id:"Country",name:"Country",value:m.Country,onChange:M,required:!0})]}),(0,C.jsxs)(x.YR,{className:"mb-3",children:[(0,C.jsx)(x.wV,{children:(0,C.jsx)(f.Z,{icon:b})}),(0,C.jsx)(x.jO,{placeholder:"Mobile",autoComplete:"Mobile",type:"number",id:"MobileNo",name:"MobileNo",value:m.MobileNo,onChange:M,required:!0})]}),(0,C.jsxs)(x.YR,{className:"mb-3",children:[(0,C.jsx)(x.wV,{children:(0,C.jsx)(f.Z,{icon:N.U})}),(0,C.jsx)(x.jO,{type:"password",placeholder:"Password",autoComplete:"new-password",id:"Password",name:"Password",value:m.Password,onChange:M,required:!0})]}),(0,C.jsx)(x.YR,{className:"mb-4"}),(0,C.jsx)("div",{className:"d-grid",children:(0,C.jsx)(x.u5,{type:"submit",style:{backgroundColor:"#543279"},children:"Create Account"})})]})})})]})})})})})}},93647:function(e,r,a){a.d(r,{U:function(){return l}});var l=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},99161:function(e,r,a){a.d(r,{E:function(){return l}});var l=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=90.2af9a639.chunk.js.map