(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{258:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(53).default)("7ce60c7c",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";n(258)},263:function(t,e,n){var r=n(52)(!1);r.push([t.i,"a[data-v-1c7b0400],a[data-v-1c7b0400]:visited{text-decoration:none;color:#472d30}a[data-v-1c7b0400]:hover{text-decoration:underline;color:#526488}.blogcard[data-v-1c7b0400]{padding-top:.5em;padding-bottom:.5em;padding-left:.5em;margin:.5em;width:60%}.blogindex[data-v-1c7b0400]{margin-left:10%}.blogheading[data-v-1c7b0400]{color:#472d30;font-size:40px;padding-left:10px}.date-float-right[data-v-1c7b0400]{float:right}",""]),t.exports=r},282:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(43),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("articles").only(["title","description","img","slug","author","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}}}),c=(n(262),n(33)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blogindex"},[n("h1",{staticClass:"blogheading"},[t._v("Blog Posts")]),t._v(" "),t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"blogcard"},[n("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[n("div",[n("h2",[t._v(t._s(article.title))]),t._v(" "),n("span",{staticClass:"date-float-right"},[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),n("p",[t._v(t._s(article.description))])])])],1)}))],2)}),[],!1,null,"1c7b0400",null);e.default=component.exports}}]);