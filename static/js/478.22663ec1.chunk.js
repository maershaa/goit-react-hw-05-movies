"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[478],{56:function(n,e,t){t.d(e,{Eb:function(){return d},ts:function(){return p},SM:function(){return l},gH:function(){return f},nc:function(){return i}});var r=t(861),a=t(757),c=t.n(a),u=t(243),s="https://api.themoviedb.org/3/",o="c23a5d8272617f6f7021ba4c498464ff",i=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o,"&page=1"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),n.t0;case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&page=1&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},478:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,c=t(861),u=t(439),s=t(757),o=t.n(s),i=t(791),p=t(689),f=t(168),l=t(444),d=l.ZP.li(r||(r=(0,f.Z)(["\n  width: 50%;\n  background-color: rgb(36, 100, 152);\n\n  padding: 10px;\n  margin: 10px 4px 10px 10px;\n\n  border: 1px solid grey;\n  padding-bottom: 10px;\n  border-radius: 10px;\n\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n"]))),v=t(184),h=function(n){var e=n.userName,t=n.rating,r=n.content,a=n.date;return(0,v.jsxs)(d,{children:[(0,v.jsxs)("h3",{children:["@",e]}),(0,v.jsxs)("p",{children:[" Rating:",t]}),(0,v.jsx)("p",{className:"content",children:r}),(0,v.jsx)("p",{children:new Date(a).toLocaleString()})]})},x=l.ZP.ul(a||(a=(0,f.Z)(["\n  list-style: none;\n\n  padding-bottom: 0;\n\n  gap: 10px;\n\n  .content {\n    font-style: italic;\n  }\n"]))),g=function(n){var e=n.reviews;return(0,v.jsx)(x,{children:e.map((function(n){return(0,v.jsx)(h,{userName:n.author,rating:n.author_details.rating,content:n.content,date:n.created_at},n.id)}))})},m=t(891),w=t(56),b=function(){var n=(0,p.UO)().movieId,e=(0,i.useState)(!1),t=(0,u.Z)(e,2),r=t[0],a=t[1],s=(0,i.useState)(null),f=(0,u.Z)(s,2),l=f[0],d=f[1],h=(0,i.useState)(null),x=(0,u.Z)(h,2),b=x[0],k=x[1],Z=function(){var n=(0,c.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(!0),d(null),n.next=5,(0,w.SM)(e);case 5:r=n.sent,k(r),console.log("fetchReviews",r),d(null),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),d(n.t0.message),k(null);case 15:return n.prev=15,a(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,i.useEffect)((function(){Z(n,1)}),[n]),(0,v.jsxs)("div",{children:[null!==l&&(0,v.jsxs)("p",{className:"errorBadge",children:["Oops, some error occurred... Error message: ",l]}),r&&(0,v.jsx)(m.Z,{}),(0,v.jsx)("h2",{children:" Reviews "}),null!==b&&(0,v.jsx)(g,{reviews:b.results})]})}}}]);
//# sourceMappingURL=478.22663ec1.chunk.js.map