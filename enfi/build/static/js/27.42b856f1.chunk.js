"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[27],{31027:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var i=n(29439),r=n(72791),c=(n(8582),n(80184)),s=function(){var e=(0,r.useState)([]),t=(0,i.Z)(e,2),n=t[0],s=t[1],l=localStorage.getItem("LoginId"),d=(0,r.useState)(!0),a=(0,i.Z)(d,2),h=a[0],o=a[1];return(0,r.useEffect)((function(){fetch("http://localhost:5000/user-api/get-direct-list/".concat(l)).then((function(e){return e.json()})).then((function(e){s(e),o(!1)})).catch((function(e){console.error("Error fetching data:",e)}))}),[]),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"d-flex flex-column flex-lg-row align-items-lg-center align-item-start justify-content-lg-between  my-2",children:(0,c.jsx)("h5",{className:"text-white my-2",children:"My Direct Report"})}),h?(0,c.jsx)("div",{className:"loader",children:(0,c.jsx)("div",{className:"loader-text",children:"Loading..."})}):(0,c.jsx)("div",{style:{overflow:"auto"},children:(0,c.jsxs)("table",{className:"custom-table mt-2",children:[(0,c.jsx)("thead",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:"Sr. No."}),(0,c.jsx)("th",{children:"Member ID"}),(0,c.jsx)("th",{children:"Name"}),(0,c.jsx)("th",{children:"Sponsor ID"}),(0,c.jsx)("th",{children:"Sponsor Name"}),(0,c.jsx)("th",{children:"Joining Date"}),(0,c.jsx)("th",{children:"Mobile No."}),(0,c.jsx)("th",{children:"Status"}),(0,c.jsx)("th",{children:"Activation Date"}),(0,c.jsx)("th",{children:"Package Name"})]})}),(0,c.jsx)("tbody",{children:n.map((function(e,t){return(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:t+1}),(0,c.jsx)("td",{children:e.LoginId}),(0,c.jsx)("td",{children:e.DisplayName}),(0,c.jsx)("td",{children:e.SponsorId}),(0,c.jsx)("td",{children:e.SponsorName}),(0,c.jsx)("td",{children:e.JoiningDate}),(0,c.jsx)("td",{children:e.MobileNo}),(0,c.jsx)("td",{children:e.Status}),(0,c.jsx)("td",{children:e.ActivationDate||"N/A"}),(0,c.jsx)("td",{children:e.PackageName||"N/A"})]},e.FK_MemId)}))})]})})]})}},8582:function(){}}]);
//# sourceMappingURL=27.42b856f1.chunk.js.map