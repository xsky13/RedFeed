(this.webpackJsonpreddit=this.webpackJsonpreddit||[]).push([[0],{108:function(t,e,c){},109:function(t,e,c){},143:function(t,e){},163:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c(7),s=c.n(n),r=(c(108),c(109),c(13)),i=c(34),o=c(193),j=c(16),l=c(199),d=c(200),b=c(198),h=c(54),u=c(211),O=c(197),p=c(212),m=c(94),x=c.n(m),g=c(95),f=c.n(g),v=c(53),y=c.n(v),w=c(11),k=c(202),N=c(204),R=c(203),S=c(210),F=c(205),E=c(201),A=c(206),C=c(1),B=Object(o.a)((function(t){return{grow:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(i.a)({display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(i.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(j.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"}),searchIcon:{padding:t.spacing(0),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(i.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(2),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(i.a)({display:"none"},t.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(i.a)({display:"flex"},t.breakpoints.up("md"),{display:"none"}),typography:{padding:t.spacing(2)},popover:{height:"60vh",width:"100vh",right:"3rem"}}})),D=function(){var t=B(),e=Object(a.useState)(null),c=Object(r.a)(e,2),n=c[0],s=c[1],i=Object(a.useState)(null),o=Object(r.a)(i,2),j=o[0],m=o[1],g=Object(a.useState)(null),v=Object(r.a)(g,2),D=v[0],I=v[1],T=Object(a.useState)(""),_=Object(r.a)(T,2),z=_[0],G=_[1],M=Object(a.useState)([]),J=Object(r.a)(M,2),L=J[0],W=J[1],P=Object(a.useState)(!0),q=Object(r.a)(P,2),V=(q[0],q[1]);Object(a.useEffect)((function(){fetch("https://www.reddit.com/search.json?q=".concat(z)).then((function(t){200!==t.status?console.error("ERROR: "+t.responseText):"Search for something"===z?W("Search for something"):t.json().then((function(t){null!==t&&(V(!1),W(t.data.children))}))}))}),[z]);var Y=Boolean(n),H=Boolean(j),U=Boolean(D),K=U?"simple-popover":void 0,Q=function(){m(null)},X=function(){I(!0)},Z=Object(C.jsx)(p.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Y,onClose:function(){s(null),Q()},children:Object(C.jsxs)(O.a,{children:[Object(C.jsx)(b.a,{"aria-label":"Github",color:"inherit",children:Object(C.jsx)(y.a,{})}),Object(C.jsx)("span",{className:"github",children:"Github"})]})}),$="primary-search-account-menu-mobile",tt=Object(C.jsx)(p.a,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},id:$,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:H,onClose:Q,children:Object(C.jsxs)(O.a,{children:[Object(C.jsx)(b.a,{"aria-label":"Github",color:"inherit",children:Object(C.jsx)(y.a,{})}),Object(C.jsx)("span",{className:"github",children:"Github"})]})}),et=function(t){var e=t.split("/").indexOf("r");return t.split("/")[e+4]};return Object(C.jsxs)("div",{className:t.grow,children:[Object(C.jsx)(l.a,{position:"static",children:Object(C.jsxs)(d.a,{children:[Object(C.jsx)("img",{src:"/RedFeed/favicon.ico",width:"50"}),"\xa0\xa0\xa0",Object(C.jsx)(h.a,{className:t.title,variant:"h6",noWrap:!0,children:Object(C.jsx)(w.b,{to:"/",style:{color:"white"},children:"RedFeed"})}),Object(C.jsx)(b.a,{"aria-label":"Search",color:"inherit","aria-describedby":K,onClick:X,children:Object(C.jsx)(E.a,{})}),Object(C.jsxs)(S.a,{id:K,open:U,anchorEl:D,onClose:function(){I(null)},className:t.popover,getContentAnchorEl:null,children:[Object(C.jsxs)("div",{className:t.search,children:[Object(C.jsx)("div",{className:t.searchIcon,children:Object(C.jsx)(x.a,{})}),Object(C.jsx)(u.a,{placeholder:"Search\u2026",value:z,onChange:function(t){G(t.target.value)},"aria-describedby":K,onFocus:X,classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search",name:"q",autocomplete:"off"}})]}),L.map((function(t){return Object(C.jsxs)(k.a,{variant:"outlined",children:[Object(C.jsxs)(R.a,{children:[Object(C.jsxs)(h.a,{color:"textSecondary",gutterBottom:!0,children:[t.data.subreddit," \u2022 by ",t.data.author]}),Object(C.jsx)(h.a,{variant:"h6",component:"h2",children:t.data.title})]}),Object(C.jsxs)(N.a,{children:[Object(C.jsx)(w.b,{to:"/post/"+t.data.subreddit+"/"+t.data.id+"/"+et("http:redit.com"+t.data.permalink),children:Object(C.jsx)(F.a,{color:"primary",children:"Details"})}),Object(C.jsxs)(F.a,{color:"primary",children:[Object(C.jsx)(A.a,{}),"\xa0\xa0",t.data.score]})]})]})}))]}),Object(C.jsx)("div",{className:t.grow}),Object(C.jsx)("div",{className:t.sectionDesktop,children:Object(C.jsx)("a",{href:"https://github.com/xsky13/RedFeed/",target:"_blank",className:"github-link",children:Object(C.jsx)(b.a,{"aria-label":"Github",color:"inherit",children:Object(C.jsx)(y.a,{})})})}),Object(C.jsx)("div",{className:t.sectionMobile,children:Object(C.jsx)(b.a,{"aria-label":"show more","aria-controls":$,"aria-haspopup":"true",onClick:function(t){m(t.currentTarget)},color:"inherit",children:Object(C.jsx)(f.a,{})})})]})}),tt,Z]})},I=c(207),T=function(t){var e=Object(o.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12},media:{width:t.post.thumbnail_width}})(),c="http://redit.com"+t.post.permalink,a=c.split("/").indexOf("r"),n=c.split("/")[a+4];return Object(C.jsx)(k.a,{className:e.root,variant:"outlined",children:Object(C.jsxs)("div",{className:"row",children:["default"==t.post.thumbnail||"self"==t.post.thumbnail||"image"==t.post.thumbnail||""==t.post.thumbnail?"":Object(C.jsx)(I.a,{className:e.media,image:t.post.thumbnail,component:"img"}),Object(C.jsxs)("div",{className:"main-card",children:[Object(C.jsxs)(R.a,{children:[Object(C.jsxs)(h.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:[t.post.subreddit," \u2022 by ",Object(C.jsx)(w.b,{to:"/user/"+t.post.author,children:t.post.author})]}),Object(C.jsx)(h.a,{variant:"h5",component:"h2",children:t.post.title})]}),Object(C.jsxs)(N.a,{children:[Object(C.jsx)(w.b,{to:"/post/"+t.post.subreddit+"/"+t.post.id+"/"+n,children:Object(C.jsx)(F.a,{color:"primary",children:"Details"})}),Object(C.jsx)(F.a,{color:"primary",onClick:function(){window.open("https://reddit.com".concat(t.post.permalink))},children:"View on Reddit"}),Object(C.jsxs)(F.a,{color:"primary",children:[Object(C.jsx)(A.a,{}),"\xa0\xa0",t.post.score]})]})]})]})})},_=function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),c=e[0],n=e[1],s=Object(a.useState)("hot"),i=Object(r.a)(s,2),o=i[0];i[1];return Object(a.useEffect)((function(){return function(t){fetch(t).then((function(t){200!==t.status?console.error("ERROR: "+t.responseText):t.json().then((function(t){null!==t&&n(t.data.children)}))}))}("https://www.reddit.com/".concat(o,".json"))}),[o]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"posts",children:[Object(C.jsxs)(h.a,{variant:"h2",style:{marginBottom:"1rem"},children:["All Posts ","hot"==o?"":o]}),Object(C.jsx)("div",{className:"all-posts",children:null!==c?c.map((function(t,e){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(T,{post:t.data},e),Object(C.jsx)("br",{})]})})):""})]})})},z=c(12),G=function(t){var e=t.match.params.subreddit,c=Object(a.useState)(!0),n=Object(r.a)(c,2),s=n[0],i=n[1],o=Object(a.useState)(),j=Object(r.a)(o,2),l=(j[0],j[1]),d=Object(a.useState)([]),b=Object(r.a)(d,2),u=b[0],O=b[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/".concat(e,".json")).then((function(t){200!==t.status?console.error("ERROR: "+t.responseText):t.json().then((function(t){null!==t&&(l(t),i(!1),O(t.data.children))}))}))}),[e]),s?Object(C.jsx)("div",{style:{textAlign:"center"},children:Object(C.jsx)("img",{src:"/RedFeed/loading.svg"})}):(u!==u&&i(!0),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"posts",children:[Object(C.jsxs)(h.a,{variant:"h2",children:["r/",e]}),Object(C.jsx)("br",{}),null!==u?u.map((function(t,e){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(T,{post:t.data}),Object(C.jsx)("br",{})]})})):""]})}))},M=c(196),J=c(165),L=c(208),W=Object(o.a)((function(t){return{root:{width:"30vh",maxWidth:360,backgroundColor:t.palette.background.paper,border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:"4px"}}})),P=function(){var t=W();return Object(C.jsxs)("div",{className:"sidebar",children:[Object(C.jsx)(h.a,{variant:"h4",children:"Subreddits"}),Object(C.jsx)("div",{className:t.root,children:Object(C.jsxs)(M.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(C.jsx)(w.b,{to:"/subreddit/announcements",children:Object(C.jsx)(J.a,{button:!0,children:Object(C.jsx)(L.a,{primary:"Announcements"})},"100")}),Object(C.jsx)(w.b,{to:"/subreddit/funny",children:Object(C.jsx)(J.a,{button:!0,children:Object(C.jsx)(L.a,{primary:"Funny"})},"200")}),Object(C.jsx)(w.b,{to:"/subreddit/AskReddit",children:Object(C.jsx)(J.a,{button:!0,children:Object(C.jsx)(L.a,{primary:"AskReddit"})},"300")}),Object(C.jsx)(w.b,{to:"/subreddit/gaming",children:Object(C.jsx)(J.a,{button:!0,children:Object(C.jsx)(L.a,{primary:"gaming"})},"400")}),Object(C.jsx)(w.b,{to:"/subreddit/memes",children:Object(C.jsx)(J.a,{button:!0,children:Object(C.jsx)(L.a,{primary:"memes"})},"500")}),Object(C.jsx)(w.b,{to:"/subreddit/Jokes",children:Object(C.jsx)(J.a,{button:!0,children:Object(C.jsx)(L.a,{primary:"Jokes"})},"600")}),Object(C.jsx)(w.b,{to:"/subreddit/sports",children:Object(C.jsx)(J.a,{button:!0,children:Object(C.jsx)(L.a,{primary:"Sports"})},"700")}),Object(C.jsx)(w.b,{to:"/subreddit/DIY",children:Object(C.jsx)(J.a,{button:!0,children:Object(C.jsx)(L.a,{primary:"DIY"})},"800")}),Object(C.jsx)(w.b,{to:"/subreddit/Art",children:Object(C.jsx)(J.a,{button:!0,children:Object(C.jsx)(L.a,{primary:"Art"})},"900")})]})})]})},q=c(50),V=c.n(q),Y=c(161),H=function(t){var e="",c="";return t.post.preview&&(e=Y.basename(t.post.preview.images[0].source.url)),t.post.selftext_html&&(c=(c=(c=t.post.selftext_html.replaceAll("&lt;","<")).replaceAll("&gt;",">")).replaceAll('"',"")),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"post",children:[Object(C.jsx)("br",{}),Object(C.jsxs)(h.a,{variant:"h5",color:"textSecondary",children:[t.post.title," \u2022 by ",Object(C.jsx)(w.b,{to:"/user/"+t.post.author,children:t.post.author})]}),Object(C.jsx)("br",{}),V()(c),Object(C.jsx)("br",{}),t.post.preview?Object(C.jsx)("img",{src:"http://i.redd.it/"+e,className:"main-image",alt:"main"}):""]}),Object(C.jsx)("script",{children:document.title=t.post.title})]})},U=c(81),K=function(t){var e=t.match,c=Object(o.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}})(),n=e.params,s=n.subreddit,i=n.user,j=n.post,l=Object(a.useState)(!0),d=Object(r.a)(l,2),b=d[0],u=d[1],O=Object(a.useState)([]),p=Object(r.a)(O,2),m=p[0],x=p[1],g=Object(a.useState)([]),f=Object(r.a)(g,2),v=f[0],y=f[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/r/".concat(s,"/comments/").concat(i,"/").concat(j,".json")).then((function(t){200!==t.status?console.error("ERROR: "+t.responseText):t.json().then((function(t){null!==t&&(u(!1),x(t[0].data.children),y(t[1].data.children))}))}))}),[s],[i],[j]),b?Object(C.jsx)("div",{style:{textAlign:"center"},children:Object(C.jsx)("img",{src:"/RedFeed/loading.svg",alt:"loading..."})}):Object(C.jsxs)("div",{className:"posts",children:[Object(C.jsxs)(h.a,{variant:"h3",className:"title",children:["r/",j]}),null!==m?m.map((function(t,e){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(H,{post:t.data,comments:t.data},e),Object(C.jsx)("br",{}),null!==v?v.map((function(t,e){var a=new Date(t.data.created);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(k.a,{className:c.root,variant:"outlined",children:Object(C.jsxs)(R.a,{children:[Object(C.jsxs)(h.a,{className:c.title,color:"textSecondary",children:[t.data.author," \u2022 ",a.toUTCString()]}),Object(C.jsx)(h.a,{variant:"body1",children:t.data.body_html?V()(U.decodeHTML(t.data.body_html)):""}),Object(C.jsxs)(F.a,{children:[Object(C.jsx)(A.a,{}),"\xa0\xa0",t.data.score]})]})},e),Object(C.jsx)("br",{})]})})):""]})})):""]})},Q=function(t){var e=t.match.params.user,c=Object(a.useState)(!0),n=Object(r.a)(c,2),s=n[0],i=n[1],o=Object(a.useState)([]),j=Object(r.a)(o,2),l=j[0],d=j[1];return Object(a.useEffect)((function(){fetch("https://www.reddit.com/user/".concat(e,".json")).then((function(t){200!==t.status?console.error("ERROR: "+t.responseText):t.json().then((function(t){null!==t&&(i(!1),d(t.data.children))}))}))}),[e]),s?Object(C.jsx)("div",{style:{textAlign:"center"},children:Object(C.jsx)("img",{src:"/RedFeed/loading.svg"})}):Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"posts",children:[Object(C.jsx)(h.a,{variant:"h2",children:e}),null!==l?l.map((function(t,e){var c="http://redit.com"+t.data.permalink,a=c.split("/").indexOf("r"),n=c.split("/")[a+4];return Object(C.jsx)(C.Fragment,{children:"t3"==t.kind?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(k.a,{variant:"outlined",children:Object(C.jsxs)("div",{className:"row",children:["default"==t.data.thumbnail?"":Object(C.jsx)(I.a,{image:t.data.thumbnail,height:t.data.thumbnail_height,width:t.data.thumbnail_width,title:"Paella dish"}),Object(C.jsxs)("div",{className:"main-card",children:[Object(C.jsxs)(R.a,{children:[Object(C.jsxs)(h.a,{color:"textSecondary",gutterBottom:!0,children:[t.data.subreddit," \u2022 by ",t.data.author]}),Object(C.jsx)(h.a,{variant:"h5",component:"h2",children:t.data.title})]}),Object(C.jsxs)(N.a,{children:[Object(C.jsx)(w.b,{to:"/post/"+t.data.subreddit+"/"+t.data.id+"/"+n,children:Object(C.jsx)(F.a,{color:"primary",children:"Details"})}),Object(C.jsx)(F.a,{color:"primary",onClick:function(){window.open("https://reddit.com".concat(t.data.permalink))},children:"View on Reddit"})]})]})]})}),Object(C.jsx)("br",{})]}):""})})):""]})})},X=c(96),Z=c(209),$=c(65),tt=c.n($),et=Object(X.a)({palette:{primary:{main:tt.a[500]},secondary:{main:tt.a[500]}}}),ct=function(){return Object(C.jsx)(w.a,{basename:"/RedFeed",children:Object(C.jsx)(Z.a,{theme:et,children:Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(D,{}),Object(C.jsxs)("div",{className:"main-row",children:[Object(C.jsx)(P,{}),Object(C.jsx)(z.c,{children:Object(C.jsx)(z.a,{path:"/",exact:!0,component:_})}),Object(C.jsx)(z.c,{children:Object(C.jsx)(z.a,{path:"/subreddit/:subreddit",exact:!0,component:G})}),Object(C.jsx)(z.c,{children:Object(C.jsx)(z.a,{path:"/post/:subreddit/:user/:post",exact:!0,component:K})}),Object(C.jsx)(z.c,{children:Object(C.jsx)(z.a,{path:"/user/:user",exact:!0,component:Q})})]})]})})})};s.a.render(Object(C.jsx)(ct,{}),document.getElementById("root"))}},[[163,1,2]]]);
//# sourceMappingURL=main.97ae2461.chunk.js.map