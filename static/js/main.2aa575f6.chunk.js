(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(8),n=a.n(o),l=(a(13),a(4)),i=(a.p,a(14),a(5)),r=a(0);function d(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link",to:"/about",children:e.Abouttxt})})]}),Object(r.jsx)("form",{className:"d-flex",children:Object(r.jsxs)("div",{className:"form-check form-switch mx-5 text-".concat("light"===e.mode?"dark":"light"," "),onClick:e.togglemode,children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable ".concat("light"===e.mode?"dark":"light"," mode")})]})})]})]})})})}function h(e){var t=Object(c.useState)("Enter Your Text Here"),a=Object(l.a)(t,2),s=a[0],o=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container my-3 text-".concat("light"===e.mode?"dark":"light"," "),children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{value:s,onChange:function(e){o(e.target.value)},className:" text-".concat("light"===e.mode?"dark":"light"," form-control"),style:{backgroundColor:"dark"===e.mode?"gray":"white"},id:"mybox",rows:"8"})}),Object(r.jsx)("div",{className:"btn btn-primary my-3 ",onClick:function(t){var a=s.toUpperCase();o(a),e.alert("This Text Become Uppercase","success")},children:"convert to uppercase"}),Object(r.jsx)("div",{className:"btn btn-primary my-3 mx-5",onClick:function(t){var a=s.toLowerCase();o(a),e.alert("This Text Become Lowercase","success")},children:"convert to lowecase"}),Object(r.jsx)("div",{className:"btn btn-primary my-3",onClick:function(t){o(""),e.alert("This Text Clear The Text","danger")},children:"clear text"}),Object(r.jsx)("div",{className:"btn btn-primary my-3 mx-5",onClick:function(t){var a=document.querySelector("#mybox");a.select(),navigator.clipboard.writeText(a.value),e.alert("This Text Is Copyied","warning")},children:"copy text"})]}),Object(r.jsxs)("div",{className:"container my-3 text-".concat("light"===e.mode?"dark":"light"," "),children:[Object(r.jsx)("h2",{children:"your text summary"}),Object(r.jsxs)("p",{children:[s.split(" ").length," words and  ",s.length," character"]}),Object(r.jsxs)("p",{children:[s.split(" ").length/125," minute"]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:s.length>0?s:"Enter Your Text for preview"})]})]})}function b(e){var t={text:"disable dark mode",color:"white",backgroundColor:"gray"},a={color:"gray",backgroundColor:"white",text:"enable dark mode"};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container my-5",style:"dark"===e.mode?t:a,children:[Object(r.jsx)("h2",{children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",style:"dark"===e.mode?t:a,children:[Object(r.jsxs)("div",{className:"accordion-item",style:"dark"===e.mode?t:a,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",style:"dark"===e.mode?t:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",style:"dark"===e.mode?t:a,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:"dark"===e.mode?t:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",style:"dark"===e.mode?t:a,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:"dark"===e.mode?t:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]})})}function m(e){return Object(r.jsx)(r.Fragment,{children:e.alert&&Object(r.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show d-flex justify-content-between align-content-center"),role:"alert",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{style:{textTransform:"capitalize"},children:e.alert.type})," : ",e.alert.msg]})})})}d.defaultProps={title:"manish",Abouttxt:"Hello "};var j=a(2);function u(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null,null),n=Object(l.a)(o,2),u=n[0],x=n[1],g=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),3e3)},p=function(){"light"===a?(s("dark"),document.body.style.backgroundColor="gray",g("dark mode enable ","success"),document.title="Text utils -  dark mode "):(s("light"),document.body.style.backgroundColor="white",g("light mode enable ","danger"),document.title="Text utils -  light mode ")};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(d,{title:"Dhaval",Abouttxt:"About Us",mode:a,togglemode:p}),Object(r.jsx)(m,{alert:u}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/about",element:Object(r.jsx)(b,{mode:a,togglemode:p})}),Object(r.jsx)(j.a,{exact:!0,path:"/",element:Object(r.jsx)(h,{heading:"Enter Text to Analysis",mode:a,togglemode:p,alert:g})})]})]})})}var x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.2aa575f6.chunk.js.map