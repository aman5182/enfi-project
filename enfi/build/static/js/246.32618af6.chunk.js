"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[246],{70246:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r,o=t(29439),i=t(30168),d=t(72791),c=(t(8582),t(65867)),s=t(80184),l=function(){c.ZP.select(r||(r=(0,i.Z)(["\n    ","\n    text-align: left;\n    padding: 10px;\n    ","\n    border: none;\n    border-bottom: 3px solid #7f4eb5;\n    border-radius: 0;\n    background-color: transparent;\n    color: #fff;\n    font-size: 16px;\n    min-width: 10vw;\n    outline: none;\n    cursor: pointer;\n    transition: border-bottom 0.3s ease;\n    ","\n    /* Remove the default dropdown arrow */\n\n    option {\n      padding: 10px; /* Add padding to the options */\n      background-color: #3c215e;\n      color: #fff;\n    }\n  "])),"","","");var e=(0,d.useState)(!0),n=(0,o.Z)(e,2),t=n[0],l=n[1],a=(0,d.useState)([]),h=(0,o.Z)(a,2),x=h[0],u=h[1],j=localStorage.getItem("LoginId");return(0,d.useEffect)((function(){fetch("http://localhost:5000/user-api/get-downline-list/".concat(j)).then((function(e){return e.json()})).then((function(e){console.log(e),u(e),l(!1)})).catch((function(e){console.error("Error fetching data:",e)}))}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"d-flex flex-column flex-lg-row align-items-baseline justify-content-lg-between  my-2",children:(0,s.jsx)("h5",{className:"text-white my-2",children:"My Downline Report"})}),t?(0,s.jsx)("div",{className:"loader",children:(0,s.jsx)("div",{className:"loader-text",children:"Loading..."})}):(0,s.jsx)("div",{style:{overflow:"auto"},children:(0,s.jsxs)("table",{className:"custom-table mt-2",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Sr. No."}),(0,s.jsx)("th",{children:"Member ID"}),(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Sponsor ID"}),(0,s.jsx)("th",{children:"Sponsor Name"}),(0,s.jsx)("th",{children:"Joining Date"}),(0,s.jsx)("th",{children:"Mobile No."}),(0,s.jsx)("th",{children:"Status"}),(0,s.jsx)("th",{children:"Activation Date"}),(0,s.jsx)("th",{children:"Level"}),(0,s.jsx)("th",{children:"Package Name"})]})}),(0,s.jsx)("tbody",{children:x.map((function(e,n){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:n+1}),(0,s.jsx)("td",{children:e.LoginId}),(0,s.jsx)("td",{children:e.DisplayName}),(0,s.jsx)("td",{children:e.SponsorId}),(0,s.jsx)("td",{children:e.SponsorName}),(0,s.jsx)("td",{children:e.JoiningDate}),(0,s.jsx)("td",{children:e.MobileNo}),(0,s.jsx)("td",{children:e.Status}),(0,s.jsx)("td",{children:e.ActivationDate||"N/A"}),(0,s.jsx)("td",{children:e.Level}),(0,s.jsx)("td",{children:e.PackageName||"N/A"})]},e.FK_MemId)}))})]})})]})}},8582:function(){}}]);
//# sourceMappingURL=246.32618af6.chunk.js.map