(this.webpackJsonpreddit=this.webpackJsonpreddit||[]).push([[0],{104:function(t,e,c){},105:function(t,e,c){},139:function(t,e){},159:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c.n(a),s=c(7),i=c.n(s),r=(c(104),c(105),c(11)),o=c(34),j=c(191),l=c(16),d=c(197),b=c(198),h=c(196),O=c(51),u=c(208),m=c(195),p=c(207),x=c(94),g=c.n(x),f=c(95),v=c.n(f),w=c(50),y=c.n(w),N=c(12),R=c(1),k=Object(j.a)((function(t){return{grow:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(o.a)({display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(o.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(l.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(l.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(o.a)({display:"none"},t.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(o.a)({display:"flex"},t.breakpoints.up("md"),{display:"none"})}})),S=function(){var t=k(),e=n.a.useState(null),c=Object(r.a)(e,2),a=c[0],s=c[1],i=n.a.useState(null),o=Object(r.a)(i,2),j=o[0],l=o[1],x=Boolean(a),f=Boolean(j),w=function(){l(null)},S=Object(R.jsx)(p.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:x,onClose:function(){s(null),w()},children:Object(R.jsxs)(m.a,{children:[Object(R.jsx)(h.a,{"aria-label":"Github",color:"inherit",children:Object(R.jsx)(y.a,{})}),Object(R.jsx)("span",{className:"github",children:"Github"})]})}),F="primary-search-account-menu-mobile",A=Object(R.jsx)(p.a,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},id:F,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:w,children:Object(R.jsxs)(m.a,{children:[Object(R.jsx)(h.a,{"aria-label":"Github",color:"inherit",children:Object(R.jsx)(y.a,{})}),Object(R.jsx)("span",{className:"github",children:"Github"})]})});return Object(R.jsxs)("div",{className:t.grow,children:[Object(R.jsx)(d.a,{position:"static",children:Object(R.jsxs)(b.a,{children:[Object(R.jsx)("img",{src:"/RedFeed/favicon.ico",width:"50"}),"\xa0\xa0\xa0",Object(R.jsx)(O.a,{className:t.title,variant:"h6",noWrap:!0,children:Object(R.jsx)(N.c,{to:"/",style:{color:"white"},children:"RedFeed"})}),Object(R.jsx)("div",{className:t.grow}),Object(R.jsx)("div",{className:t.search,children:Object(R.jsxs)("form",{action:"/search",method:"get",children:[Object(R.jsx)("div",{className:t.searchIcon,children:Object(R.jsx)(g.a,{})}),Object(R.jsx)(u.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search",name:"q"}})]})}),Object(R.jsx)("div",{className:t.sectionDesktop,children:Object(R.jsx)(h.a,{"aria-label":"Github",color:"inherit",children:Object(R.jsx)(y.a,{})})}),Object(R.jsx)("div",{className:t.sectionMobile,children:Object(R.jsx)(h.a,{"aria-label":"show more","aria-controls":F,"aria-haspopup":"true",onClick:function(t){l(t.currentTarget)},color:"inherit",children:Object(R.jsx)(v.a,{})})})]})}),A,S]})},F=c(199),A=c(202),E=c(201),C=c(200),B=c(203),D=c(204),I=function(t){var e=Object(j.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12},media:{width:t.post.thumbnail_width}})(),c="http://redit.com"+t.post.permalink,a=c.split("/").indexOf("r"),n=c.split("/")[a+4];return console.log(t.post),Object(R.jsx)(F.a,{className:e.root,variant:"outlined",children:Object(R.jsxs)("div",{className:"row",children:["default"==t.post.thumbnail||"self"==t.post.thumbnail||"image"==t.post.thumbnail||""==t.post.thumbnail?"":Object(R.jsx)(C.a,{className:e.media,image:t.post.thumbnail,component:"img"}),Object(R.jsxs)("div",{className:"main-card",children:[Object(R.jsxs)(E.a,{children:[Object(R.jsxs)(O.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:[t.post.subreddit," \u2022 by ",t.post.author]}),Object(R.jsx)(O.a,{variant:"h5",component:"h2",children:t.post.title})]}),Object(R.jsxs)(A.a,{children:[Object(R.jsx)(N.c,{to:"/post/"+t.post.subreddit+"/"+t.post.id+"/"+n,children:Object(R.jsx)(B.a,{color:"primary",children:"Details"})}),Object(R.jsx)(B.a,{color:"primary",onClick:function(){window.open("https://reddit.com".concat(t.post.permalink))},children:"View on Reddit"}),Object(R.jsxs)(B.a,{color:"primary",children:[Object(R.jsx)(D.a,{}),"\xa0\xa0",t.post.score]})]})]})]})})},T=function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),c=e[0],n=e[1],s=Object(a.useState)("hot"),i=Object(r.a)(s,2),o=i[0];i[1];return Object(a.useEffect)((function(){return function(t){fetch(t).then((function(t){200!==t.status?console.error("ERROR: "+t.responseText):t.json().then((function(t){null!==t&&(console.log(t),n(t.data.children))}))}))}("https://www.reddit.com/".concat(o,".json"))}),[o]),Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("div",{className:"posts",children:[Object(R.jsxs)(O.a,{variant:"h2",style:{marginBottom:"1rem"},children:["All Posts ","hot"==o?"":o]}),Object(R.jsx)("div",{className:"all-posts",children:null!==c?c.map((function(t,e){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(I,{post:t.data},e),Object(R.jsx)("br",{})]})})):""})]})})},_=c(13),z=function(t){var e=t.match.params.subreddit,c=Object(a.useState)(!0),n=Object(r.a)(c,2),s=n[0],i=n[1],o=Object(a.useState)(),j=Object(r.a)(o,2),l=(j[0],j[1]),d=Object(a.useState)([]),b=Object(r.a)(d,2),h=b[0],u=b[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/".concat(e,".json")).then((function(t){200!==t.status?console.error("ERROR: "+t.responseText):t.json().then((function(t){null!==t&&(l(t),i(!1),u(t.data.children))}))}))}),[e]),s?Object(R.jsx)("div",{style:{textAlign:"center"},children:Object(R.jsx)("img",{src:"/RedFeed/loading.svg"})}):(h!==h&&i(!0),Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("div",{className:"posts",children:[Object(R.jsxs)(O.a,{variant:"h2",children:["r/",e]}),Object(R.jsx)("br",{}),null!==h?h.map((function(t,e){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(I,{post:t.data}),Object(R.jsx)("br",{})]})})):""]})}))},G=c(194),L=c(162),M=c(205),J=Object(j.a)((function(t){return{root:{width:"30vh",maxWidth:360,backgroundColor:t.palette.background.paper,border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:"4px"}}})),P=function(){var t=J();return Object(R.jsxs)("div",{className:"sidebar",children:[Object(R.jsx)(O.a,{variant:"h4",children:"Subreddits"}),Object(R.jsx)("div",{className:t.root,children:Object(R.jsxs)(G.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(R.jsx)(N.c,{to:"/subreddit/announcements",children:Object(R.jsx)(L.a,{button:!0,children:Object(R.jsx)(M.a,{primary:"Announcements"})},"100")}),Object(R.jsx)(N.c,{to:"/subreddit/funny",children:Object(R.jsx)(L.a,{button:!0,children:Object(R.jsx)(M.a,{primary:"Funny"})},"200")}),Object(R.jsx)(N.c,{to:"/subreddit/AskReddit",children:Object(R.jsx)(L.a,{button:!0,children:Object(R.jsx)(M.a,{primary:"AskReddit"})},"300")}),Object(R.jsx)(N.c,{to:"/subreddit/gaming",children:Object(R.jsx)(L.a,{button:!0,children:Object(R.jsx)(M.a,{primary:"gaming"})},"400")}),Object(R.jsx)(N.c,{to:"/subreddit/memes",children:Object(R.jsx)(L.a,{button:!0,children:Object(R.jsx)(M.a,{primary:"memes"})},"500")}),Object(R.jsx)(N.c,{to:"/subreddit/Jokes",children:Object(R.jsx)(L.a,{button:!0,children:Object(R.jsx)(M.a,{primary:"Jokes"})},"600")}),Object(R.jsx)(N.c,{to:"/subreddit/sports",children:Object(R.jsx)(L.a,{button:!0,children:Object(R.jsx)(M.a,{primary:"Sports"})},"700")}),Object(R.jsx)(N.c,{to:"/subreddit/DIY",children:Object(R.jsx)(L.a,{button:!0,children:Object(R.jsx)(M.a,{primary:"DIY"})},"800")}),Object(R.jsx)(N.c,{to:"/subreddit/Art",children:Object(R.jsx)(L.a,{button:!0,children:Object(R.jsx)(M.a,{primary:"Art"})},"900")})]})})]})},W=c(48),q=c.n(W),V=c(157),U=function(t){var e="",c="";return t.post.preview&&(e=V.basename(t.post.preview.images[0].source.url)),t.post.selftext_html&&(c=(c=(c=t.post.selftext_html.replaceAll("&lt;","<")).replaceAll("&gt;",">")).replaceAll('"',"")),console.log(null===t.post.selftext_html),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("div",{className:"post",children:[Object(R.jsx)("br",{}),Object(R.jsxs)(O.a,{variant:"h5",color:"textSecondary",children:[t.post.title," \u2022 by ",t.post.author]}),Object(R.jsx)("br",{}),q()(c),Object(R.jsx)("br",{}),t.post.preview?Object(R.jsx)("img",{src:"http://i.redd.it/"+e,className:"main-image",alt:"main"}):""]}),Object(R.jsx)("script",{children:document.title=t.post.title})]})},Y=c(81),H=function(t){var e=t.match,c=Object(j.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}})(),n=e.params,s=n.subreddit,i=n.user,o=n.post,l=Object(a.useState)(!0),d=Object(r.a)(l,2),b=d[0],h=d[1],u=Object(a.useState)(),m=Object(r.a)(u,2),p=(m[0],m[1]),x=Object(a.useState)([]),g=Object(r.a)(x,2),f=g[0],v=g[1],w=Object(a.useState)([]),y=Object(r.a)(w,2),N=y[0],k=y[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/".concat(s,"/comments/").concat(i,"/").concat(o,".json")).then((function(t){200!==t.status?console.error("ERROR: "+t.responseText):t.json().then((function(t){null!==t&&(console.log(t),p(t),h(!1),v(t[0].data.children),k(t[1].data.children))}))}))}),[s],[i],[o]),b?Object(R.jsx)("div",{style:{textAlign:"center"},children:Object(R.jsx)("img",{src:"/RedFeed/loading.svg",alt:"loading..."})}):Object(R.jsxs)("div",{className:"posts",children:[Object(R.jsxs)(O.a,{variant:"h3",className:"title",children:["r/",o]}),null!==f?f.map((function(t,e){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(U,{post:t.data,comments:t.data},e),Object(R.jsx)("br",{}),null!==N?N.map((function(t,e){var a=new Date(t.data.created);return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(F.a,{className:c.root,variant:"outlined",children:Object(R.jsxs)(E.a,{children:[Object(R.jsxs)(O.a,{className:c.title,color:"textSecondary",children:[t.data.author," \u2022 ",a.toUTCString()]}),Object(R.jsx)(O.a,{variant:"body1",children:t.data.body_html?q()(Y.decodeHTML(t.data.body_html)):""}),Object(R.jsxs)(B.a,{children:[Object(R.jsx)(D.a,{}),"\xa0\xa0",t.data.score]})]})},e),Object(R.jsx)("br",{})]})})):""]})})):""]})},K=function(t){var e=t.match.params.user,c=Object(a.useState)(!0),n=Object(r.a)(c,2),s=n[0],i=n[1],o=Object(a.useState)(),j=Object(r.a)(o,2),l=(j[0],j[1]),d=Object(a.useState)([]),b=Object(r.a)(d,2),h=b[0],u=b[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/user/".concat(e,".json")).then((function(t){200!==t.status?console.error("ERROR: "+t.responseText):t.json().then((function(t){null!==t&&(console.log(t),l(t),i(!1),u(t.data.children))}))}))}),[e]),s?Object(R.jsx)("div",{style:{textAlign:"center"},children:Object(R.jsx)("img",{src:"/RedFeed/loading.svg"})}):Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("div",{className:"posts",children:[Object(R.jsx)(O.a,{variant:"h2",children:e}),null!==h?h.map((function(t,e){var c="http://redit.com"+t.data.permalink,a=c.split("/").indexOf("r"),n=c.split("/")[a+4];return Object(R.jsx)(R.Fragment,{children:"t3"==t.kind?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(F.a,{variant:"outlined",children:Object(R.jsxs)("div",{className:"row",children:["default"==t.data.thumbnail?"":Object(R.jsx)(C.a,{image:t.data.thumbnail,height:t.data.thumbnail_height,width:t.data.thumbnail_width,title:"Paella dish"}),Object(R.jsxs)("div",{className:"main-card",children:[Object(R.jsxs)(E.a,{children:[Object(R.jsxs)(O.a,{color:"textSecondary",gutterBottom:!0,children:[t.data.subreddit," \u2022 by ",t.data.author]}),Object(R.jsx)(O.a,{variant:"h5",component:"h2",children:t.data.title})]}),Object(R.jsxs)(A.a,{children:[Object(R.jsx)(N.c,{to:"/post/"+t.data.subreddit+"/"+t.data.id+"/"+n,children:Object(R.jsx)(B.a,{color:"primary",children:"Details"})}),Object(R.jsx)(B.a,{color:"primary",onClick:function(){window.open("https://reddit.com".concat(t.data.permalink))},children:"View on Reddit"})]})]})]})}),Object(R.jsx)("br",{})]}):""})})):""]})})},Q=function(t){var e=t.match.params.param,c=Object(a.useState)(!0),n=Object(r.a)(c,2),s=n[0],i=n[1],o=Object(a.useState)(),l=Object(r.a)(o,2),d=(l[0],l[1]),b=Object(a.useState)([]),h=Object(r.a)(b,2),u=h[0],m=h[1];Object(a.useEffect)((function(){fetch("https://www.reddit.com/search.json?q=".concat(new URL(window.location.href).searchParams.get("q"))).then((function(t){200!==t.status?console.error("ERROR: "+t.responseText):t.json().then((function(t){null!==t&&(console.log(t),d(t),i(!1),m(t.data.children))}))}))}),[e]);var p=Object(j.a)({media:{width:140}})();return s?Object(R.jsx)("div",{style:{textAlign:"center"},children:Object(R.jsx)("img",{src:"/RedFeed/loading.svg"})}):Object(R.jsx)("div",{className:"posts",children:u.map((function(t,e){var c="http://redit.com"+t.data.permalink,a=c.split("/").indexOf("r"),n=c.split("/")[a+4];return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(F.a,{variant:"outlined",children:Object(R.jsxs)("div",{className:"row",children:["default"==t.data.thumbnail||"self"==t.data.thumbnail||"image"==t.data.thumbnail?"":Object(R.jsx)(C.a,{className:p.media,image:t.data.thumbnail,component:"img"}),Object(R.jsxs)("div",{className:"main-card",children:[Object(R.jsxs)(E.a,{children:[Object(R.jsxs)(O.a,{color:"textSecondary",gutterBottom:!0,children:[t.data.subreddit," \u2022 by ",t.data.author]}),Object(R.jsx)(O.a,{variant:"h5",component:"h2",children:t.data.title})]}),Object(R.jsxs)(A.a,{children:[Object(R.jsx)(N.c,{to:"/post/"+t.data.subreddit+"/"+t.data.id+"/"+n,children:Object(R.jsx)(B.a,{color:"primary",children:"Details"})}),Object(R.jsx)(B.a,{color:"primary",onClick:function(){window.open("https://reddit.com".concat(t.data.permalink))},children:"View on Reddit"}),Object(R.jsxs)(B.a,{color:"primary",children:[Object(R.jsx)(D.a,{}),"\xa0\xa0",t.data.score]})]})]})]})}),Object(R.jsx)("br",{})]})}))})},X=c(96),Z=c(206),$=c(64),tt=c.n($),et=Object(X.a)({palette:{primary:{main:tt.a[500]},secondary:{main:tt.a[500]}}}),ct=function(){return Object(R.jsx)(N.a,{children:Object(R.jsx)(Z.a,{theme:et,children:Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(S,{}),Object(R.jsxs)("div",{className:"main-row",children:[Object(R.jsx)(P,{}),Object(R.jsx)(_.c,{children:Object(R.jsx)(_.a,{path:"/#/",exact:!0,component:T})}),Object(R.jsx)(_.c,{children:Object(R.jsx)(_.a,{path:"/#/subreddit/:subreddit",exact:!0,component:z})}),Object(R.jsx)(_.c,{children:Object(R.jsx)(_.a,{path:"/#/post/:subreddit/:user/:post",exact:!0,component:H})}),Object(R.jsx)(_.c,{children:Object(R.jsx)(_.a,{path:"/#/user/:user",exact:!0,component:K})}),Object(R.jsx)(_.c,{children:Object(R.jsx)(_.a,{path:"/#/search",exact:!0,component:Q})})]})]})})})};i.a.render(Object(R.jsx)(N.b,{basename:"/RedFeed",children:Object(R.jsx)(ct,{})}),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.f28d2b1e.chunk.js.map