"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[748],{3174:function(n,e,t){t.d(e,{O:function(){return o}});var r,a=t(7689),u=t(1087),c=t(168),i=t(5706).Z.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n"]))),s=t(184),o=function(n){var e=n.data,t=n.prefix,r=(0,a.TH)();return{data:e}&&(0,s.jsx)(i,{children:e.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"".concat(t).concat(n.id),state:{from:r},children:n.title||n.name})},n.id)}))})}},6748:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,u,c,i=t(4165),s=t(5861),o=t(9439),p=t(2791),f=t(2134),d=t(6345),l=t(168),x=t(5706),h=x.Z.div(r||(r=(0,l.Z)(["\n  padding: 8px;\n  margin-bottom: 8px;\n\n  border-bottom: 1px solid grey;\n"]))),Z=x.Z.label(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n\n  width: 350px;\n\n  padding: 8px 16px 8px 8px;\n  font-size: 16px;\n\n  border: 1px solid grey;\n  border-radius: 4px;\n"]))),v=x.Z.input(u||(u=(0,l.Z)(["\n  border: none;\n  outline: none;\n\n  width: 100%;\n"]))),m=x.Z.button(c||(c=(0,l.Z)(["\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n"]))),g=t(3174),b=t(7737),w=t(184),y=function(){var n=(0,p.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(""),u=(0,o.Z)(a,2),c=u[0],l=u[1],x=new AbortController,y=(0,p.useState)(!1),j=(0,o.Z)(y,2),k=j[0],_=j[1],C=function(){var n=(0,s.Z)((0,i.Z)().mark((function n(e){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _(!0),n.prev=1,n.next=4,(0,b.ax)(e,x);case 4:t=n.sent,r(t.data.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),"ERR_CANCELED"!==n.t0.code&&l(n.t0.message||n.t0);case 11:_(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,w.jsxs)("main",{children:[(0,w.jsx)(h,{children:(0,w.jsx)("form",{onSubmit:function(n){n.preventDefault();var e=n.target[0].value;C(e)},children:(0,w.jsxs)(Z,{children:[(0,w.jsx)(v,{name:"search",type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,w.jsx)(m,{type:"submit",children:(0,w.jsx)(f.RB5,{style:{width:"24px",height:"24px"}})})]})})}),c&&(0,w.jsx)("p",{children:c}),k?(0,w.jsx)(d.a,{}):(0,w.jsx)(w.Fragment,{children:t.length>0&&(0,w.jsx)(g.O,{data:t,prefix:""})})]})}},7737:function(n,e,t){t.d(e,{XB:function(){return s},ax:function(){return o},b6:function(){return f},mw:function(){return p},rl:function(){return d}});var r=t(4165),a=t(5861),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org";var c="f341564f871ad54342c422dd44d9e8b4",i=function(n){return{signal:n.signal,params:{api_key:c}}},s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/trending/movie/week",i(e));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/search/movie",{signal:t.signal,params:{api_key:c,query:e}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(e),i(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(e,"/credits"),i(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(e,"/reviews"),i(t));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=748.0260237c.chunk.js.map