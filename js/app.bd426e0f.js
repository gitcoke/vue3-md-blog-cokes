(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-base-blog/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3717:function(t,e,n){},"3b77":function(t,e,n){"use strict";var r=n("b040"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("96cf");var r,a,s=n("1da1"),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),i=n("58ca"),c=n("5f5b"),l=n("2f62"),u=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar"),n("div",{staticClass:"container pt-5 mx-lg-5 px-lg-5"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1),n("Footer")],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{staticClass:"nav-bar pr-sm-5",attrs:{type:"dark",toggleable:"sm",variant:"",fixed:"top"}},[n("b-navbar-brand",{attrs:{href:"#"},on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v("vue-base-blog")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto mr-sm-5 pr-sm-5"},[n("b-nav-item-dropdown",{attrs:{text:"Section",right:""}},[n("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.$router.push({path:"/"})}}},[t._v("All")]),t._l(t.sections,(function(e,r){return n("b-dropdown-item",{key:r,staticClass:"text-capitalize",attrs:{href:"#"},on:{click:function(n){return t.$router.push({path:"/"+e})}}},[t._v(t._s(e))])}))],2)],1)],1),n("Ribbon",t._b({staticClass:"d-none d-sm-block"},"Ribbon",t.ribbonOptions,!1))],1)],1)},b=[],m=(n("a630"),n("d81d"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),{name:"nav-bar",data:function(){return{sections:Array.from(new Set(this.$store.state.postsIndex.map((function(t){return t.section})))),ribbonOptions:{text:"Fork me on GitHub!",linkUrl:"https://github.com/yeikiu/vue-base-blog",border:!1}}}}),v=m,h=(n("3b77"),n("2877")),g=Object(h["a"])(v,f,b,!1,null,null,null),_=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center bg-secondary text-white mt-5"},[n("p",{staticClass:"m-0 p-0"},[t._v("Vue-Base-Blog v"+t._s(t.version))]),n("p",{staticClass:"m-0 p-0"},[t._v("Created with ❤️ by "),n("a",{staticClass:"text-reset",attrs:{href:"https://github.com/yeikiu/",target:"_blank"}},[t._v("JQ")]),t._v(" © "+t._s((new Date).toDateString().slice(-4)))])])},x=[],w=n("9224"),P={data:function(){return{version:w["a"]}}},k=P,O=(n("e116"),Object(h["a"])(k,y,x,!1,null,"191eabd4",null)),C=O.exports,$={metaInfo:{title:"Loading...",titleTemplate:"%s | vue-base-blog ✍️",meta:[{name:"description",content:"Minimal config fully functional blog made with VueJS + GitHub Pages"},{name:"og:title",content:"✍️ vue-base-blog ✍️"},{name:"keywords",content:"VueJS, blog-engine, markdown-article, github-pages"}]},components:{navBar:_,Footer:C}},j=$,E=(n("5c0b"),Object(h["a"])(j,p,d,!1,null,null,null)),R=E.exports,S=n("bc3a"),I=n.n(S),A=(n("f9e3"),n("2dd8"),n("e4cb"),n("9c4e")),V=n.n(A),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-lg-5 px-lg-5"},[t.section?t._e():n("blog-header",{staticClass:"markddown-body mb-5"}),t.section?n("blog-header-section",{staticClass:"markddown-body mb-5"}):t._e(),t.section?n("p",{staticClass:"text-center display-4 text-capitalize my-5"},[t._v(t._s(t.section))]):t._e(),t._l(t.displayPosts,(function(e){return n("div",{key:e.id,staticClass:"text-right mb-5 mx-lg-4 px-lg-4"},[n("router-link",{staticClass:"text-left m-0 p-0 link",attrs:{tag:"h3",to:{path:e.section+"/"+e.id}}},[t._v(t._s(e.title))]),n("p",{staticClass:"text-muted m-0 p-0"},[t._v(t._s(e.date))]),t.section?t._e():n("router-link",{staticClass:"m-0 p-0 link",attrs:{tag:"h6",to:{path:""+e.section}}},[t._v("#"+t._s(e.section))]),n("p",{staticClass:"font-weight-light text-left text-justify mt-1"},[t._v(t._s(e.description))])],1)})),n("div",{staticClass:"my-5"},[n("b-pagination",{staticClass:"pagination",attrs:{align:"center","total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],2)},T=[],F=(n("4de4"),n("fb6a"),n("e25e"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"text-center my-5"},[r("p",{staticClass:"text-uppercase display-3"},[t._v("vue-base-blog")]),r("img",{attrs:{alt:"Vue logo",src:n("cf05"),width:"175px;"}})]),r("hr")])}],B={},G=Object(h["a"])(B,F,J,!1,null,null,null),M=G.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"text-center my-5"},[r("p",{staticClass:"text-uppercase display-3"},[t._v("vue-base-blog")]),r("img",{attrs:{alt:"Vue logo",src:n("cf05"),width:"75px;"}})]),r("hr")])}],z={},D=Object(h["a"])(z,U,q,!1,null,null,null),L=D.exports,N={name:"home",props:["section"],metaInfo:function(t){var e=t.section;return{title:e||"Welcome"}},components:{blogHeader:M,blogHeaderSection:L},data:function(){return{perPage:parseInt(this.$store.state.VUE_APP_POSTS_PER_PAGE,10),currentPage:1}},computed:{allPosts:function(){var t=this;return this.section?this.$store.state.postsIndex.filter((function(e){return e.section===t.section})):this.$store.state.postsIndex},rows:function(){return this.allPosts.length},displayPosts:function(){var t=this,e=this.currentPage>1?(this.currentPage-1)*this.perPage:0,n=e+this.perPage;return this.section?this.allPosts.filter((function(e){return e.section===t.section})).slice(e,n):this.allPosts.slice(e,n)}}},Q=N,W=Object(h["a"])(Q,H,T,!1,null,null,null),K=W.exports,X=(n("99af"),n("ac1f"),n("5319"),n("b85c")),Y=n("a026"),Z=n("d4cd"),tt=n.n(Z),et=n("362d"),nt=n.n(et),rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"my-5 text-center"},[n("div",{staticClass:"my-5 spinner-border",attrs:{role:"status"}},[n("span",{staticClass:"sr-only"},[t._v("Loading...")])])])])}],st={},ot=Object(h["a"])(st,rt,at,!1,null,null,null),it=ot.exports,ct=new tt.a({html:!0}).use(nt.a),lt={name:"post",props:["section","id"],metaInfo:function(t){var e=t.section,n=t.id;return{title:"".concat(e," | ").concat(n.replace(/-/g," "))}},data:function(){return{templateRender:null}},render:function(t){return this.templateRender?this.templateRender():t(it)},beforeRouteUpdate:function(){document.location.reload()},methods:{hasHistory:function(){var t;return(null===(t=window.history)||void 0===t?void 0:t.length)>2}},created:function(){var t=this,e=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,a,s,o,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$store.state.postsIndex.filter((function(e){return e.id===t.id}))[0].url,e.next=3,I.a.get(n);case 3:r=e.sent.data,a=ct.render(r),s=Y["a"].compile('\n        <div class="post my-2 py-2">\n          <button type="button" @click="hasHistory() ? $router.go(-1) : $router.push(\'/\')" class="my-5 btn btn-outline-success">&laquo; Back</button>\n          <div class="markdown-body">\n            '.concat(a,'\n          </div>\n          <button type="button" @click="hasHistory() ? $router.go(-1) : $router.push(\'/\')" class="my-5 btn btn-outline-success">&laquo; Back</button>\n        </div>\n      ')),t.templateRender=s.render,t.$options.staticRenderFns=[],o=Object(X["a"])(s.staticRenderFns);try{for(o.s();!(i=o.n()).done;)c=i.value,t.$options.staticRenderFns.push(c)}catch(l){o.e(l)}finally{o.f()}case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}},ut=lt,pt=Object(h["a"])(ut,r,a,!1,null,null,null),dt=pt.exports;n("ed18").config();var ft="5",bt=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("data/posts_index.json");case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),mt=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o["default"].config.productionTip=!1,o["default"].use(i["a"]),o["default"].use(c["a"]),o["default"].use(l["a"]),o["default"].use(u["a"]),o["default"].use(V.a),t.next=8,bt();case 8:e=t.sent,n=new l["a"].Store({state:{postsIndex:e,VUE_APP_POSTS_PER_PAGE:ft}}),console.log({VUE_APP_POSTS_PER_PAGE:ft}),r=new u["a"]({routes:[{path:"/:section?",name:"home",component:K,props:!0},{path:"/:section/:id",name:"post",component:dt,props:!0}]}),new o["default"]({router:r,store:n,render:function(t){return t(R)}}).$mount("#app");case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();mt()},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},9224:function(t){t.exports=JSON.parse('{"a":"1.3.7"}')},"9c0c":function(t,e,n){},b040:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},e116:function(t,e,n){"use strict";var r=n("3717"),a=n.n(r);a.a}});
//# sourceMappingURL=app.bd426e0f.js.map