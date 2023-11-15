"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{873:function(n,e,t){var r=t(861),a=t(757),s=t.n(a),i=t(243),o="https://api.themoviedb.org/3/",c="c23a5d8272617f6f7021ba4c498464ff",l=function(){var n=(0,r.Z)(s().mark((function n(e){var t,r,a=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{},n.prev=1,n.next=4,i.Z.get("".concat(o).concat(e,"?api_key=").concat(c),t);case 4:return r=n.sent,console.log("response in api",r),n.abrupt("return",r.data);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();e.Z=l},134:function(n,e,t){t.r(e);var r=t(861),a=t(439),s=t(757),i=t.n(s),o=t(791),c=t(689),l=t(87),u=t(873),d=t(891),f=t(472),p=t(184);e.default=function(){var n=(0,o.useState)(!1),e=(0,a.Z)(n,2),t=e[0],s=e[1],h=(0,o.useState)(null),m=(0,a.Z)(h,2),x=m[0],b=m[1],g=(0,c.UO)().movieId,v=(0,o.useState)(null),w=(0,a.Z)(v,2),j=w[0],k=w[1],N=(0,c.TH)();(0,o.useEffect)((function(){}),[g]);var y=(0,o.useState)(""),_=(0,a.Z)(y,2),C=_[0],Z=_[1],S=function(n){n.preventDefault(),C||alert("Please, enter film name"),z(C)},z=S,I=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),b(null),n.next=5,(0,u.Z)("movie/".concat(e,"/"),{params:{language:"en-US"}});case 5:t=n.sent,k(t),console.log("setMovieDetails",t),b(null),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),b(n.t0.message),k(null);case 15:return n.prev=15,s(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})));return function(e){return n.apply(this,arguments)}}();(0,o.useEffect)((function(){I(g)}),[g]);var B=j.title,D=j.release_date,F=j.vote_average,L=j.overview,T=j.genres,U=j.poster_path,E=j.backdrop_path,G=j.runtime,M=j.tagline,O={backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces".concat(E,")")},P=Number(F).toFixed(1),R=function(n){var e=Number(n);return{hours:Math.floor(e/60),minutes:e%60}}(G),A=R.hours,H=R.minutes,Y=new Date(D).getFullYear();return(0,p.jsxs)("div",{children:[(0,p.jsxs)("form",{className:"searchForm",onSubmit:S,children:[(0,p.jsx)("button",{type:"submit",className:"button",children:(0,p.jsx)("span",{className:"buttonLabel",children:" Search"})}),(0,p.jsx)("input",{className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"search by film name",value:C,onChange:function(n){Z(n.target.value)}})]}),null!==j&&(0,p.jsxs)(f.G,{children:[null!==x&&(0,p.jsxs)("p",{className:"errorBadge",children:["Oops, some error occurred... Error message: ",x]}),t&&(0,p.jsx)(d.Z,{}),(0,p.jsxs)("h1",{children:[" Movie Id: ",g]})," ",(0,p.jsx)("button",{onClick:function(){N.state&&N.state.from?window.location.href=N.state.from:window.location.href="/"},className:"backBtn",children:"\u041d\u0430\u0437\u0430\u0434"}),(0,p.jsxs)("div",{className:"movieInfoContainer",style:O,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(U),alt:B,style:{height:"460px"}}),(0,p.jsxs)("div",{className:"infoContainer",children:[(0,p.jsxs)("h2",{className:"title",children:[B," ( ",Y,")"]}),(0,p.jsx)("p",{className:"slogan",children:M}),(0,p.jsxs)("p",{children:["Rating: ",P," \u2022 Duration:"," ","".concat(A,"h ").concat(H,"m")]}),(0,p.jsx)("h3",{className:"infoTitle",children:"Overview"}),(0,p.jsx)("p",{children:L}),(0,p.jsx)("h3",{className:"infoTitle",children:"Genres"}),(0,p.jsx)("ul",{className:"genresList",children:T.map((function(n){return(0,p.jsx)("li",{children:n.name.toLowerCase()},n.id)}))}),(0,p.jsx)("h3",{children:"Additional Information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{className:"header-link",to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{className:"header-link",to:"reviews",children:"Reviews"})})]})]})]}),(0,p.jsx)(c.j3,{})]})]})}},472:function(n,e,t){t.d(e,{G:function(){return s}});var r,a=t(168),s=t(444).ZP.div(r||(r=(0,a.Z)(["\n  .movieInfoContainer {\n    display: flex;\n    flex-direction: row;\n    padding: 20px;\n    column-gap: 40px;\n\n    border-bottom: 1px solid #369baf;\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  .infoContainer {\n    max-width: 45%;\n    align-items: center;\n  }\n\n  .title {\n    font-size: 32px;\n    font-weight: 700;\n  }\n\n  .infoTitle {\n    font-size: 24px;\n    font-weight: 700;\n  }\n\n  .slogan {\n    font-style: italic;\n  }\n\n  .backBtn {\n    cursor: pointer;\n    text-decoration: none;\n    background: #373b44; /* fallback for old browsers */\n    background: -webkit-linear-gradient(\n      to right,\n      #4286f4,\n      #373b44\n    ); /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(\n      112.1deg,\n      rgb(32, 38, 57) 11.4%,\n      rgb(63, 76, 119) 70.2%\n    );\n    font-size: 18px;\n    color: white;\n    padding: 15px;\n    margin-left: 20px;\n    margin-bottom: 20px;\n    display: inline-flex;\n    border: 1px solid #373b44;\n    border-radius: 10px;\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),\n      -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .backBtn:hover,\n  .backBtn:focus {\n    cursor: pointer;\n    transform: scale(1.1); /* \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431 \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u0438\u044e */\n    transition: transform 0.3s ease; /* \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e */\n  }\n\n  .genresList {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    column-gap: 8px;\n\n    list-style: none;\n\n    padding: 0;\n  }\n"])))}}]);
//# sourceMappingURL=134.47a4a26c.chunk.js.map