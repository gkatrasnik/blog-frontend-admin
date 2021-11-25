(this["webpackJsonpblog-frontend-admin"]=this["webpackJsonpblog-frontend-admin"]||[]).push([[0],{55:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(19),s=n.n(o),r=(n(55),n(24)),l=n(7),i=n(88),j=n(84),u=n(89),b=n(6),d=n(1),m=c.a.createContext({user:""});function h(e){var t=e.children,n=Object(a.useState)(""),c=Object(b.a)(n,2),o=c[0],s=c[1];return Object(d.jsx)(m.Provider,{value:{user:o,login:function(e){s(e)},logout:function(){s("")}},children:t})}var O=function(){var e=Object(a.useContext)(m),t=e.user,n=e.logout;return Object(d.jsxs)(i.a,{style:{borderBottom:"1px solid black"},children:[Object(d.jsx)(j.a,{children:Object(d.jsx)(i.a.Brand,{children:Object(d.jsx)("h3",{children:"My Blog - Admin App"})})}),Object(d.jsxs)(u.a,{className:"me-auto",children:[Object(d.jsx)(u.a.Link,{children:t.username}),t?Object(d.jsx)(u.a.Link,{onClick:n,children:"Logout"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.a.Link,{href:"login",children:"Login"}),Object(d.jsx)(u.a.Link,{href:"signup",children:"Sign up"})]})]})]})},x=n(90),p=n(85),g=n(11),f=n.n(g);var v=function(e){var t=Object(a.useState)(""),n=Object(b.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),r=Object(b.a)(s,2),l=r[0],i=r[1],j=Object(a.useContext)(m).user;return Object(d.jsxs)(x.a,{onSubmit:function(t){if(t.preventDefault(),c&&l){var n=localStorage.getItem("token");f.a.post("/api/posts/",{title:c,content:l,userId:j._id},{headers:{Authorization:"Bearer "+n}}).then((function(t){o(""),i(""),e.getPostsData()}),(function(e){console.log(e)}))}else alert("Title or content can not be empty!")},style:{width:"80%",maxWidth:"32rem",margin:"auto"},children:[Object(d.jsx)("h1",{children:"New Post"}),Object(d.jsxs)(x.a.Group,{className:"mb-3",controlId:"title",children:[Object(d.jsx)(x.a.Label,{children:"Title"}),Object(d.jsx)(x.a.Control,{type:"text",placeholder:"Enter title",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(x.a.Group,{className:"mb-3",controlId:"content",children:[Object(d.jsx)(x.a.Label,{children:"Content"}),Object(d.jsx)(x.a.Control,{type:"text",placeholder:"content",value:l,onChange:function(e){return i(e.target.value)}})]}),Object(d.jsx)(p.a,{variant:"primary",type:"submit",children:"Add Post"})]})},C=n(91),y=n(86);var S=function(e){return console.log(e.comment.author),Object(d.jsxs)(C.a.Text,{comment:e.comment,children:[e.comment.author,": ",e.comment.title,e.comment.content,Object(d.jsxs)(p.a,{variant:"danger",onClick:function(t){t.preventDefault();var n=e.comment.postId,a=e.comment._id,c=localStorage.getItem("token");f.a.delete("/api/posts/".concat(n,"/comments/").concat(a),{headers:{Authorization:"Bearer "+c}}).then((function(t){console.log(t),e.getPostsData()})).catch((function(e){return console.log(e)}))},className:"float-end",children:[Object(d.jsx)(y.a,{})," Delete domment"]})]})},w=n(87);var P=function(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),r=Object(b.a)(s,2),l=r[0],i=r[1],j=Object(a.useState)(""),u=Object(b.a)(j,2),m=u[0],h=u[1],O=e.item.comments;return console.log(O),Object(d.jsx)(C.a,{style:{width:"80%",maxWidth:"32rem",margin:"20px"},children:Object(d.jsxs)(C.a.Body,{children:[Object(d.jsxs)(C.a.Title,{className:"text-center",children:[e.item.title," ",Object(d.jsxs)(p.a,{variant:"danger",onClick:function(t){t.preventDefault();var n=e.item._id,a=localStorage.getItem("token");f.a.delete("/api/posts/".concat(n),{headers:{Authorization:"Bearer "+a}}).then((function(t){console.log(t),e.getPostsData()})).catch((function(e){return console.log(e)}))},className:"float-end",children:[Object(d.jsx)(w.a,{})," Delete post"]})]}),Object(d.jsxs)(C.a.Subtitle,{className:"mb-2 text-muted",children:["Author: ",e.item.user.username]}),Object(d.jsx)(C.a.Text,{children:e.item.content}),Object(d.jsx)("br",{}),Object(d.jsx)(C.a.Text,{children:"Comments:"}),O.map((function(t,n){return Object(d.jsx)(S,{getPostsData:e.getPostsData,comment:t},n)})),Object(d.jsx)(p.a,{variant:"primary",className:"float-end my-2",onClick:function(){o(!c)},children:"Comment"}),c&&Object(d.jsxs)(x.a,{onSubmit:function(t){if(t.preventDefault(),l&&m){var n=e.item._id;f.a.post("/api/posts/".concat(n,"/comments/"),{author:l,content:m}).then((function(t){i(""),h(""),o(!c),e.getPostsData()}),(function(e){console.log(e)}))}else alert("Author or Comment can not be empty!")},children:[Object(d.jsxs)(x.a.Group,{className:"mb-3",controlId:"author",children:[Object(d.jsx)(x.a.Label,{children:"Author:"}),Object(d.jsx)(x.a.Control,{type:"text",placeholder:"enter your nickname",onChange:function(e){i(e.target.value)}})]}),Object(d.jsxs)(x.a.Group,{className:"mb-3",controlId:"content",children:[Object(d.jsx)(x.a.Label,{children:"Text:"}),Object(d.jsx)(x.a.Control,{type:"text",placeholder:"Type your comment",onChange:function(e){h(e.target.value)}})]}),Object(d.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})};var k=function(e){var t=Object(a.useState)([]),n=Object(b.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(!1),r=Object(b.a)(s,2),l=r[0],i=r[1];Object(a.useEffect)((function(){j()}),[]);var j=function(){i(!0),f.a.get("/api/posts").then((function(e){o(e.data),i(!1)})).catch((function(e){console.log(e)}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{getPostsData:j}),l&&Object(d.jsx)("h2",{style:{textAlign:"center",marginTop:"20px"},children:'"Loading Posts..."'}),Object(d.jsx)("ul",{style:{padding:0},children:c.map((function(e,t){return Object(d.jsx)("li",{className:"d-flex flex-direction-column justify-content-center",children:Object(d.jsx)(P,{getPostsData:j,item:e,index:t})},t)}))})]})};var L=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(k,{})})};var D=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(b.a)(o,2),r=s[0],i=s[1],j=Object(a.useContext)(m),u=(j.user,j.login),h=Object(l.h)();return Object(d.jsxs)(x.a,{onSubmit:function(e){e.preventDefault(),f.a.post("/api/users/login",{username:n,password:r}).then((function(e){console.log(e),u(e.data.user),localStorage.setItem("token",e.data.token),console.log(e.data.user,e.data.token),h("/")}),(function(e){console.log(e)}))},style:{width:"80%",maxWidth:"32rem",margin:"auto"},children:[Object(d.jsxs)(x.a.Group,{className:"mb-3",controlId:"username",children:[Object(d.jsx)(x.a.Label,{children:"Username"}),Object(d.jsx)(x.a.Control,{type:"text",placeholder:"Enter username",onChange:function(e){c(e.target.value)}})]}),Object(d.jsxs)(x.a.Group,{className:"mb-3",controlId:"password",children:[Object(d.jsx)(x.a.Label,{children:"Password"}),Object(d.jsx)(x.a.Control,{type:"password",placeholder:"Password",onChange:function(e){i(e.target.value)}})]}),Object(d.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})};var I=function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(b.a)(o,2),r=s[0],i=s[1],j=Object(a.useState)(""),u=Object(b.a)(j,2),m=u[0],h=u[1],O=Object(l.h)();return Object(d.jsxs)(x.a,{style:{width:"80%",maxWidth:"32rem",margin:"auto"},onSubmit:function(e){e.preventDefault(),r===m?f.a.post("/api/users/register",{username:n,password:r}).then((function(e){console.log(e),O("/")}),(function(e){console.log(e)})):alert("Passwords doesn't match!"),f.a.post("/api/users/signup",{username:n,password:r}).then((function(e){console.log(e),O("/")}),(function(e){console.log(e)}))},children:[Object(d.jsxs)(x.a.Group,{className:"mb-3",controlId:"username",children:[Object(d.jsx)(x.a.Label,{children:"Username"}),Object(d.jsx)(x.a.Control,{type:"text",placeholder:"Enter username",onChange:function(e){c(e.target.value)}})]}),Object(d.jsxs)(x.a.Group,{className:"mb-3",controlId:"password",children:[Object(d.jsx)(x.a.Label,{children:"Password"}),Object(d.jsx)(x.a.Control,{type:"password",placeholder:"Password",onChange:function(e){i(e.target.value)}})]}),Object(d.jsxs)(x.a.Group,{className:"mb-3",controlId:"confirm-password",children:[Object(d.jsx)(x.a.Label,{children:"Confirm Password"}),Object(d.jsx)(x.a.Control,{type:"password",placeholder:"Confirm Password",onChange:function(e){h(e.target.value)}})]}),Object(d.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})},N=n(3),T=["component"];function A(e){e.component,Object(N.a)(e,T);return Object(a.useContext)(m).user?Object(d.jsx)(l.b,{}):Object(d.jsx)(l.a,{to:"/login"})}n(80),n(81);var B=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)(h,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(j.a,{children:Object(d.jsxs)(l.e,{children:[Object(d.jsx)(l.c,{exact:!0,path:"/",element:Object(d.jsx)(A,{}),children:Object(d.jsx)(l.c,{exact:!0,path:"/",element:Object(d.jsx)(L,{})})}),Object(d.jsx)(l.c,{exact:!0,path:"/signup",element:Object(d.jsx)(I,{})}),Object(d.jsx)(l.c,{exact:!0,path:"/login",element:Object(d.jsx)(D,{})}),Object(d.jsx)(l.c,{to:"/"})]})})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};f.a.defaults.baseURL="https://obscure-temple-20965.herokuapp.com",s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),G()}},[[82,1,2]]]);
//# sourceMappingURL=main.829e5eb2.chunk.js.map