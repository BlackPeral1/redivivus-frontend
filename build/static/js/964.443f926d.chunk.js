"use strict";(self.webpackChunkredivivus=self.webpackChunkredivivus||[]).push([[964],{52964:function(e,n,a){a.r(n),a.d(n,{default:function(){return d}});var s=a(70885),l=a(74569),o=a.n(l),t=a(72791),r=a(13855),c=a(89743),i=a(2677),u=a(43360),m=a(80184);function d(){var e=(0,t.useState)(""),n=(0,s.Z)(e,2),a=n[0],l=n[1],d=(0,t.useState)(""),h=(0,s.Z)(d,2),p=h[0],Z=h[1],x=(0,t.useState)(""),j=(0,s.Z)(x,2),y=j[0],v=j[1],g=(0,t.useState)(""),C=(0,s.Z)(g,2),b=C[0],N=C[1],f=(0,t.useState)(""),S=(0,s.Z)(f,2),E=S[0],L=S[1],G=(0,t.useState)(""),q=(0,s.Z)(G,2),I=q[0],O=q[1],k=(0,t.useState)(""),T=(0,s.Z)(k,2),A=T[0],R=T[1],D=(0,t.useState)(""),P=(0,s.Z)(D,2),w=P[0],H=P[1],M=(0,t.useState)(""),U=(0,s.Z)(M,2),Y=U[0],z=U[1],B=(0,t.useState)(""),F=(0,s.Z)(B,2),J=F[0],K=F[1],Q=(0,t.useState)(""),V=(0,s.Z)(Q,2),W=V[0],X=V[1],$=(0,t.useState)(""),_=(0,s.Z)($,2),ee=_[0],ne=_[1],ae=(0,t.useState)({}),se=(0,s.Z)(ae,2),le=se[0],oe=se[1],te=(0,t.useState)({}),re=(0,s.Z)(te,2),ce=re[0],ie=re[1],ue=(0,t.useState)({}),me=(0,s.Z)(ue,2),de=me[0],he=me[1],pe=(0,t.useState)(!1),Ze=(0,s.Z)(pe,2),xe=Ze[0],je=Ze[1];var ye=function(){var e={},n=!0;return a.trim().length<3&&(e.nameShort="Company Name is too short",n=!1),a.trim().length>10&&(e.nameLong="Company Name is too long",n=!1),10==b.trim().length&&(ce.telephoneLength="Must have 10 numbers for field",n=!1),oe(e),ie(ce),he(de),n};function ve(){console.log("RESET PROCEED!"),l(""),Z(""),v(""),N("-"),L(""),O(""),R(""),H(""),z(""),K(""),X(""),ne("")}return(0,m.jsx)("div",{className:"row",children:(0,m.jsxs)("div",{className:"card",children:[(0,m.jsx)("h2",{children:"ADD COMPANY"}),(0,m.jsx)("div",{className:"container3",children:(0,m.jsx)("div",{className:"container1",children:(0,m.jsxs)(r.Z,{onSubmit:function(e){e.preventDefault(),ye()&&(l(""),N(""),Z(""));var n={name:a,email:p,address:y,telephone:b,customers:E,centers:I,logo:A,openhour:w,closehour:Y,opendays:J,slogan:W,about:ee};console.log(n),o().post("http://localhost:3001/api/company/addcompany",n).then((function(){console.log("CREATE PROCEED!"),ve(),alert("Successfully Created!")})).catch((function(e){alert(e)}))},onReset:ve,children:[(0,m.jsxs)("div",{hidden:xe,children:[(0,m.jsxs)("div",{className:"company-registartion-container-part",children:[(0,m.jsxs)(r.Z.Group,{as:c.Z,controlId:"name",className:"companylabel",children:[(0,m.jsx)(r.Z.Label,{column:!0,sm:2,children:"Company Name"}),(0,m.jsx)(i.Z,{sm:5,className:"company-input-layer",children:(0,m.jsx)(r.Z.Control,{required:!0,type:"text",name:"companyname",value:a,onChange:function(e){l(e.target.value)},placeholder:"company Name"})})]}),Object.keys(le).map((function(e){return(0,m.jsx)("div",{style:{color:"red"},children:le[e]})})),(0,m.jsxs)(r.Z.Group,{as:c.Z,controlId:"Email",className:"pt-3",children:[(0,m.jsx)(r.Z.Label,{column:!0,sm:2,className:"companylabel",children:"E-mail"}),(0,m.jsx)(i.Z,{sm:5,class:!0,children:(0,m.jsx)(r.Z.Control,{required:!0,type:"",name:"Email",value:p,onChange:function(e){Z(e.target.value)},placeholder:"company Email"})})]}),Object.keys(de).map((function(e){return(0,m.jsx)("div",{style:{color:"red"},children:de[e]})})),(0,m.jsxs)(r.Z.Group,{as:c.Z,controlId:"address",className:"pt-3",children:[(0,m.jsx)(r.Z.Label,{column:!0,sm:2,className:"companylabel",children:"Address"}),(0,m.jsx)(i.Z,{sm:5,class:!0,children:(0,m.jsx)(r.Z.Control,{required:!0,type:"text",name:"address",value:y,onChange:function(e){v(e.target.value)},placeholder:"company Address"})})]}),(0,m.jsxs)(r.Z.Group,{as:c.Z,controlId:"Telephone",className:"pt-3",children:[(0,m.jsx)(r.Z.Label,{column:!0,sm:2,className:"companylabel",children:"Telephone"}),(0,m.jsx)(i.Z,{sm:5,children:(0,m.jsx)(r.Z.Control,{required:!0,type:"Number",name:"Telephone",value:b,onChange:function(e){N(e.target.value)},placeholder:"No Of Centers"})})]}),Object.keys(ce).map((function(e){return(0,m.jsx)("div",{style:{color:"red"},children:ce[e]})})),(0,m.jsxs)(r.Z.Group,{as:c.Z,controlId:"centers",className:"pt-3",children:[(0,m.jsx)(r.Z.Label,{column:!0,sm:2,className:"companylabel",children:"No of Centers"}),(0,m.jsx)(i.Z,{sm:5,children:(0,m.jsx)(r.Z.Control,{required:!0,type:"Number",name:"centers",value:I,onChange:function(e){O(e.target.value)},placeholder:"No Of Centers"})})]})]}),(0,m.jsxs)("div",{className:"company-registartion-container-part",children:[(0,m.jsxs)(r.Z.Group,{as:c.Z,controlId:"logo",className:"pt-3",children:[(0,m.jsx)(r.Z.Label,{column:!0,sm:2,className:"companylabel",children:"Company Logo"}),(0,m.jsx)(i.Z,{sm:5,children:(0,m.jsx)(r.Z.Control,{required:!0,type:"text",name:"logo",value:A,onChange:function(e){R(e.target.value)},placeholder:"company Logo Url"})})]}),(0,m.jsxs)(r.Z.Group,{as:c.Z,controlId:"openhour",className:"pt-3",children:[(0,m.jsx)(r.Z.Label,{column:!0,sm:2,className:"companylabel",children:"Opening Hour"}),(0,m.jsx)(i.Z,{sm:5,children:(0,m.jsx)(r.Z.Control,{required:!0,type:"Time",name:"openhour",value:w,onChange:function(e){H(e.target.value)},placeholder:"Open Hour"})})]}),(0,m.jsxs)(r.Z.Group,{as:c.Z,controlId:"closehour",className:"pt-3",children:[(0,m.jsx)(r.Z.Label,{column:!0,sm:2,className:"companylabel",children:"Closing Hour"}),(0,m.jsx)(i.Z,{sm:5,children:(0,m.jsx)(r.Z.Control,{required:!0,type:"Time",name:"closehour",value:Y,onChange:function(e){z(e.target.value)}})})]})]}),(0,m.jsx)("div",{children:(0,m.jsx)(u.Z,{type:"button",variant:"secondary",onClick:function(){return je(!0)},children:"Next"})})]}),(0,m.jsxs)("div",{hidden:!xe,children:[(0,m.jsxs)(r.Z.Group,{as:c.Z,controlId:"slogans",className:"pt-3",children:[(0,m.jsx)(r.Z.Label,{column:!0,sm:2,className:"companylabel",children:"Company Slogan"}),(0,m.jsx)(i.Z,{sm:5,children:(0,m.jsx)(r.Z.Control,{required:!0,type:"text",name:"slogan",value:W,onChange:function(e){X(e.target.value)},placeholder:"company Slogan"})})]}),(0,m.jsxs)(r.Z.Group,{as:c.Z,controlId:"about",className:"pt-3",children:[(0,m.jsx)(r.Z.Label,{column:!0,sm:2,className:"companylabel",children:"About Company"}),(0,m.jsx)(i.Z,{sm:5,children:(0,m.jsx)(r.Z.Control,{required:!0,type:"text",name:"about",value:ee,onChange:function(e){ne(e.target.value)},placeholder:"About Company"})})]}),(0,m.jsx)("button",{type:"button",variant:"secondary",onClick:function(){return je(!1)},children:"Previous"}),(0,m.jsx)(r.Z.Group,{as:c.Z,className:"pt-2",children:(0,m.jsxs)(i.Z,{sm:{span:10,offset:2},children:[(0,m.jsx)(u.Z,{type:"submit",children:"CREATE"}),"\xa0",(0,m.jsx)(u.Z,{type:"reset",className:"btn-danger",children:"RESET"}),"\xa0"]})})]})]})})})]})})}}}]);
//# sourceMappingURL=964.443f926d.chunk.js.map