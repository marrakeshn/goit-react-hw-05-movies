"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[748],{3174:function(n,e,t){t.d(e,{O:function(){return o}});var r,a=t(7689),u=t(1087),c=t(168),i=t(5706).Z.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n"]))),s=t(184),o=function(n){var e=n.data,t=n.prefix,r=(0,a.TH)();return{data:e}&&(0,s.jsx)(i,{children:e.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"".concat(t).concat(n.id),state:{from:r},children:n.title||n.name})},n.id)}))})}},6748:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,u,c,i=t(4165),s=t(5861),o=t(9439),p=t(2791),f=t(2134),d=t(1087),l=t(6345),x=t(168),h=t(5706),Z=h.Z.div(r||(r=(0,x.Z)(["\n  padding: 8px;\n  margin-bottom: 8px;\n\n  border-bottom: 1px solid grey;\n"]))),v=h.Z.label(a||(a=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n\n  width: 350px;\n\n  padding: 8px 16px 8px 8px;\n  font-size: 16px;\n\n  border: 1px solid grey;\n  border-radius: 4px;\n"]))),m=h.Z.input(u||(u=(0,x.Z)(["\n  border: none;\n  outline: none;\n\n  width: 100%;\n"]))),g=h.Z.button(c||(c=(0,x.Z)(["\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n"]))),b=t(3174),w=t(7737),y=t(184),k=function(){var n=(0,p.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(""),u=(0,o.Z)(a,2),c=u[0],x=u[1],h=(0,p.useState)(!1),k=(0,o.Z)(h,2),j=k[0],_=k[1],C=(0,p.useState)(""),S=(0,o.Z)(C,2),E=S[0],R=S[1],z=(0,d.lr)(),B=(0,o.Z)(z,2),D=B[0],F=B[1],L=(0,p.useCallback)(function(){var n=(0,s.Z)((0,i.Z)().mark((function n(e){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _(!0),n.prev=1,n.next=4,(0,w.ax)(e);case 4:t=n.sent,r(t.data.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),"ERR_CANCELED"!==n.t0.code&&x(n.t0.message||n.t0);case 11:_(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),[]);return(0,p.useEffect)((function(){L(D.get("searchValue"))}),[L,D]),(0,y.jsxs)("main",{children:[(0,y.jsx)(Z,{children:(0,y.jsx)("form",{onSubmit:function(n){n.preventDefault(),F("searchValue=".concat(E))},children:(0,y.jsxs)(v,{children:[(0,y.jsx)(m,{name:"search",type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){var e=n.target;R(e.value)},value:E}),(0,y.jsx)(g,{type:"submit",children:(0,y.jsx)(f.RB5,{style:{width:"24px",height:"24px"}})})]})})}),c&&(0,y.jsx)("p",{children:c}),j?(0,y.jsx)(l.a,{}):(0,y.jsx)(y.Fragment,{children:!!t.length&&(0,y.jsx)(b.O,{data:t,prefix:""})})]})}},7737:function(n,e,t){t.d(e,{XB:function(){return s},ax:function(){return o},b6:function(){return f},mw:function(){return p},rl:function(){return d}});var r=t(4165),a=t(5861),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org";var c="f341564f871ad54342c422dd44d9e8b4",i=function(n){return{signal:n.signal,params:{api_key:c}}},s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/trending/movie/week",i(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/search/movie",{params:{api_key:c,query:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(e),i(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(e,"/credits"),i(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(e,"/reviews"),i(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=748.1a534c6a.chunk.js.map