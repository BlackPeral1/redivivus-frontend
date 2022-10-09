"use strict";(self.webpackChunkredivivus=self.webpackChunkredivivus||[]).push([[361],{41361:function(e,s,n){n.r(s),n.d(s,{default:function(){return f}});var o=n(4942),l=n(1413),t=n(70885),a=n(72791),i=n(43360),c=n(2677),r=n(13855),d=n(89743),u=n(19902),h=n(74569),m=n.n(h),x=n(21830),p=n.n(x),Z=n(3202),j=n(80184);function f(e){var s,n=(0,a.useState)(!1),h=(0,t.Z)(n,2),x=h[0],f=h[1],v=(0,a.useState)({}),g=(0,t.Z)(v,2),y=g[0],C=g[1],b=(0,a.useState)({}),N=(0,t.Z)(b,2),S=(N[0],N[1],(0,a.useState)({chips:{background:"#17d193"},highlightOption:{background:"#17d193"}})),w=(0,t.Z)(S,2),k=w[0],I=w[1],L=(0,a.useState)(!1),q=(0,t.Z)(L,2),T=q[0],z=q[1],B=function(){return z(!0)};(0,a.useEffect)((function(){var e;null!==(e=navigator)&&void 0!==e&&e.geolocation&&navigator.geolocation.getCurrentPosition((function(e){e&&C((0,l.Z)((0,l.Z)({},y),{},{location:{lat:e.coords.latitude,lng:e.coords.longitude}}))}))}),[]);var G=function(e){return void 0==y.wasteTypes||0==y.wasteTypes.length?(I({chips:{background:"#17d193"},highlightOption:{background:"#17d193"},searchBox:{border:"1px solid #dc3545"}}),!0):(I({chips:{background:"#17d193"},highlightOption:{background:"#17d193"}}),!1)},O=function(e){C((0,l.Z)((0,l.Z)({},y),{},(0,o.Z)({},e.target.name,e.target.value)))};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h4",{className:"content-title",children:"Create New Request"}),(0,j.jsx)("hr",{}),(0,j.jsx)("div",{className:"row",children:(0,j.jsx)("div",{className:"card p-4 form",children:(0,j.jsxs)(r.Z,{noValidate:!0,validated:x,onSubmit:function(e){e.preventDefault();var s=e.currentTarget;G(),!1!==s.checkValidity()&&y.location.lat&&y.location.lng&&!G()?(console.log(y),m().post("http://localhost:3001/api/pickupRequest",y).then((function(e){console.log(e)})).catch((function(e){console.log(e)})).then((function(){})),p().fire({icon:"success",title:"Request successfully sent!",showConfirmButton:!1,timer:2e3}),C((0,l.Z)((0,l.Z)({},y),{},{company:"",note:"",size:"",wasteTypes:[]})),f(!1)):(f(!0),console.log(y))},children:[(0,j.jsx)(d.Z,{className:"mb-3",children:(0,j.jsxs)(r.Z.Group,{as:c.Z,md:"12",controlId:"validationCustom01",className:"d-flex",children:[(0,j.jsx)(c.Z,{md:"2",children:(0,j.jsx)(r.Z.Label,{children:"Company"})}),(0,j.jsx)(c.Z,{md:"10",children:(0,j.jsxs)(r.Z.Select,{required:!0,value:y.company,name:"company",onChange:O,className:"font-s",children:[(0,j.jsx)("option",{value:"",children:"Select Company"}),(0,j.jsx)("option",{value:"ABC Inc",children:"ABC Inc"}),(0,j.jsx)("option",{value:"Earthology Inc",children:"Earthology Inc"}),(0,j.jsx)("option",{value:"Browning-Ferris Industries",children:"Browning-Ferris Industries"}),(0,j.jsx)("option",{value:"Casella Waste Systems",children:"Casella Waste Systems"})]})})]})}),(0,j.jsx)(d.Z,{className:"mb-3",children:(0,j.jsxs)(r.Z.Group,{as:c.Z,md:"12",controlId:"validationCustom01",className:"d-flex",children:[(0,j.jsx)(c.Z,{md:"2",children:(0,j.jsx)(r.Z.Label,{children:"Location"})}),(0,j.jsxs)(c.Z,{md:"10",children:[(0,j.jsx)(r.Z.Control,{required:!0,readOnly:!0,type:"text",placeholder:"Location",onChange:O,value:null===(s=y.location)||void 0===s?void 0:s.formatted_address,onClick:B,name:"location",className:"font-s"}),(0,j.jsx)("span",{style:{fontSize:"12px"},children:"Live Location"})]})]})}),(0,j.jsx)(d.Z,{className:"mb-3",children:(0,j.jsxs)(r.Z.Group,{as:c.Z,md:"12",controlId:"validationCustom01",className:"d-flex",children:[(0,j.jsx)(c.Z,{md:"2",children:(0,j.jsx)(r.Z.Label,{children:"Note"})}),(0,j.jsx)(c.Z,{md:"10",children:(0,j.jsx)(r.Z.Control,{required:!0,type:"text",placeholder:"Note",onChange:O,name:"note",value:y.note,className:"font-s"})})]})}),(0,j.jsxs)(d.Z,{className:"mb-3",children:[(0,j.jsxs)(r.Z.Group,{as:c.Z,md:"6",controlId:"validationCustom01",className:"d-flex",children:[(0,j.jsx)(c.Z,{md:"4",children:(0,j.jsx)(r.Z.Label,{children:"Waste Types"})}),(0,j.jsx)(c.Z,{md:"8",children:(0,j.jsx)(u.default,{required:!0,className:"from-control",isObject:!1,onSelect:function(e){C((0,l.Z)((0,l.Z)({},y),{},{wasteTypes:e}))},onRemove:function(e){C((0,l.Z)((0,l.Z)({},y),{},{wasteTypes:e}))},selectedValues:y.wasteTypes,options:["Plastic","Glass","Iron"],placeholder:"Waste Types",style:k})})]}),(0,j.jsxs)(r.Z.Group,{as:c.Z,md:"6",controlId:"validationCustom01",className:"d-flex",children:[(0,j.jsx)(c.Z,{md:"4",children:(0,j.jsx)(r.Z.Label,{children:"Size"})}),(0,j.jsx)(c.Z,{md:"8",children:(0,j.jsxs)(r.Z.Select,{required:!0,onChange:O,name:"size",value:y.size,className:"d-flex",children:[(0,j.jsx)("option",{value:"",children:"Select Size"}),(0,j.jsx)("option",{value:"Small",children:"Small"}),(0,j.jsx)("option",{value:"Mediam",children:"Mediam"}),(0,j.jsx)("option",{value:"Large",children:"Large"})]})})]})]}),(0,j.jsx)(c.Z,{md:"12",className:"d-flex justify-content-end",children:(0,j.jsx)(i.Z,{type:"submit",children:"Request"})})]})})}),(0,j.jsx)(Z.Vd,{show:T,mapModalShow:B,mapModalClose:function(){return z(!1)},setForm:C,form:y})]})}}}]);
//# sourceMappingURL=361.00689749.chunk.js.map