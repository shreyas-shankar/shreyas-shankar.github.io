(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{285:function(e,t,n){"use strict";n.r(t);var r=n(18),c=n(6),o=(n(43),{asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,o,path,d,f,article;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,e.app,c=e.params,o=e.error,path="/".concat(c.pathMatch||"index"),t.next=4,n({deep:!0}).where({path:path}).fetch();case 4:if(d=t.sent,f=Object(r.a)(d,1),article=f[0]){t.next=9;break}return t.abrupt("return",o({statusCode:404,message:"Article not found"}));case 9:return t.abrupt("return",{article:article});case 10:case"end":return t.stop()}}),t)})))()}}),d=n(33),component=Object(d.a)(o,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);