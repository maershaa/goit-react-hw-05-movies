"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[836],{105:function(n,e,t){t.d(e,{Z:function(){return c}});t(791);var r,i=t(689),o=t(168),a=t(444).ZP.button(r||(r=(0,o.Z)(["\n  cursor: pointer;\n  text-decoration: none;\n  background: rgb(3, 37, 65);\n  font-size: 18px;\n  color: #369baf;\n  padding: 10px;\n  margin-top: 15px;\n  margin-left: 10px;\n  margin-bottom: 20px;\n  display: inline-flex;\n  border: 1px solid #369baf;\n  border-radius: 10px;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n    -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: scale(1.1); /* \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431 \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u044e */\n    transition: transform 0.3s ease; /* \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e */\n  }\n"]))),s=t(184),c=function(){var n=(0,i.TH)(),e=(0,i.s0)();return(0,s.jsx)(a,{onClick:function(){n.state&&n.state.from?e(n.state.from):e("/")},className:"backBtn",children:"\u21a9"})}},658:function(n,e,t){t.d(e,{Z:function(){return d}});t(791);var r,i,o=t(689),a=t(168),s=t(444),c=s.ZP.li(r||(r=(0,a.Z)(["\n  padding: 20px;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n\n  .itemContainer {\n    max-width: 50%;\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .moviePoster {\n    border-radius: 10px;\n  }\n"]))),u=t(184),l=function(n){var e=n.id,t=n.poster_path,r=n.title,i=n.overview,a=(n.onClick,(0,o.s0)());return(0,u.jsxs)(c,{className:"movieItem",onClick:function(){a("/movies/".concat(e))},children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t),alt:r,style:{height:"260px"},className:"moviePoster"}),(0,u.jsxs)("div",{className:"itemContainer",children:[(0,u.jsx)("h3",{children:r}),(0,u.jsx)("p",{className:"overviewText",children:i})]})]})},p=s.ZP.ul(i||(i=(0,a.Z)([""]))),d=function(n){var e=n.movies,t=(0,o.s0)();return(0,u.jsx)(p,{className:"moviesList",children:e&&e.map((function(n){return(0,u.jsx)(l,{id:n.id,poster_path:n.poster_path,title:n.title,overview:n.overview,onClick:function(){return e=n.id,void t("/movies/".concat(e));var e}},n.id)}))})}},836:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,i=t(861),o=t(439),a=t(757),s=t.n(a),c=t(791),u=t(689),l=t(87),p=t(243),d=t(979),m=function(){var n=(0,i.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.get("".concat(d._,"/search/movie?api_key=").concat(d.$,"&language=en-US&page=1&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=m,x=t(658),b=t(168),h=t(444).ZP.div(r||(r=(0,b.Z)(["\n  background-image: linear-gradient(\n      to right,\n      rgba(3, 37, 65, 0.8) 0%,\n      rgba(3, 37, 65, 0) 100%\n    ),\n    url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-color: rgb(3, 37, 65);\n\n  padding-top: 40px;\n  padding-bottom: 40px;\n\n  .welcomeTitle {\n    padding: 15px;\n    margin: 0;\n    margin-bottom: 10px;\n    font-size: 48px;\n    font-weight: 700;\n    line-height: 1;\n  }\n  .welcomeText {\n    padding: 15px;\n\n    margin: 0;\n    margin-bottom: 10px;\n    font-size: 32px;\n    font-weight: 700;\n    line-height: 1;\n  }\n  .searchContainer {\n    position: relative;\n    display: inline-block;\n    width: 500px;\n  }\n\n  input[type='text'] {\n    margin-top: 15px;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-bottom: 20px;\n\n    width: 100%;\n    padding: 10px;\n\n    background: white;\n    font-size: 18px;\n    color: rgb(3, 37, 65);\n\n    border: 2px solid rgb(3, 37, 65);\n    border-radius: 40px;\n  }\n\n  .submitBtn {\n    position: absolute;\n    top: 47%;\n    right: -33px;\n    transform: translateY(-50%);\n\n    cursor: pointer;\n    text-decoration: none;\n    background: rgb(54, 155, 175);\n    font-size: 18px;\n    color: white;\n    padding: 10px;\n\n    display: inline-flex;\n    border: 1px solid rgb(54, 155, 175);\n    border-radius: 40px;\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n      -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .submitBtn :hover,\n  .submitBtn :focus {\n    transform: scale(1.1); /* \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431 \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u044e */\n    transition: transform 0.3s ease; /* \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e */\n  }\n\n  .buttonLabel {\n    color: white;\n  }\n"]))),g=t(184),v=function(n){var e=n.onSearch,t=n.inputValue,r=n.setInputValue;return(0,g.jsxs)(h,{children:[(0,g.jsx)("h2",{className:"welcomeTitle",children:" Welcome."}),(0,g.jsx)("h3",{className:"welcomeText",children:"Millions of movies, series, and people. Explore now."}),(0,g.jsx)("div",{className:"searchContainer",children:(0,g.jsxs)("form",{className:"searchForm",onSubmit:function(n){n.preventDefault(),t||alert("Please, enter film name"),console.log("inputValue",t),e(t)},children:[(0,g.jsx)("input",{className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"search by film name",value:t,onChange:function(n){r(n.target.value)}}),(0,g.jsx)("button",{type:"submit",className:"submitBtn",children:(0,g.jsx)("span",{className:"buttonLabel",children:" Search"})})]})})]})},w=t(891),k=t(105),j=function(){var n=(0,c.useState)(!1),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,c.useState)(null),p=(0,o.Z)(a,2),d=p[0],m=p[1],b=(0,c.useState)(""),h=(0,o.Z)(b,2),j=h[0],Z=h[1],y=(0,c.useState)(null),C=(0,o.Z)(y,2),N=C[0],_=C[1],z=(0,u.s0)(),S=(0,l.lr)(),P=(0,o.Z)(S,2),B=P[0],T=P[1],V=B.get("query"),q=function(){var n=(0,i.Z)(s().mark((function n(e,t){var i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(!0),m(null),n.next=5,f(e);case 5:i=n.sent,console.log("\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0435:",i),_(i.results),m(null),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),m(n.t0.message),_(null);case 15:return n.prev=15,r(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})));return function(e,t){return n.apply(this,arguments)}}();(0,c.useEffect)((function(){V&&(Z(V),q(V,1))}),[V]);return(0,g.jsxs)(g.Fragment,{children:[null!==d&&(0,g.jsxs)("p",{className:"errorBadge",children:["Oops, some error occurred... Error message: ",d]}),t&&(0,g.jsx)(w.Z,{}),(0,g.jsx)(k.Z,{}),(0,g.jsx)(v,{inputValue:j,setInputValue:Z,onSearch:function(n){n&&(Z(n),T({query:n}),q(n,1))}}),N&&N.length>0&&(0,g.jsx)(x.Z,{movies:N,onClick:function(n){z("/movies/".concat(n))}})]})}},979:function(n,e,t){t.d(e,{$:function(){return i},_:function(){return r}});var r="https://api.themoviedb.org/3/",i="c23a5d8272617f6f7021ba4c498464ff"}}]);
//# sourceMappingURL=836.05d03894.chunk.js.map