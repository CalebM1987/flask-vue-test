(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff2ba3d0"],{"03d1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"dealer",attrs:{fluid:""}},[n("b-row",[n("b-col",[n("h3",[t._v("Cards in Deck "),n("a",{attrs:{href:"#",title:"peek at the dealer's deck"},on:{click:function(e){t.peek=!t.peek}}},[n("small",[t._v("("+t._s(t.deckCount)+")")])])]),n("div",{staticClass:"d-flex justify-content-center mt-3 mb-2"},[n("b-form-spinbutton",{staticStyle:{"max-width":"160px"},attrs:{min:"1",max:Math.min(7,t.deckCount)},model:{value:t.handSize,callback:function(e){t.handSize=e},expression:"handSize"}}),n("b-button",{staticClass:"ml-4 mr-4",on:{click:t.dealHand}},[t._v("Deal Hand")]),n("b-button",{on:{click:t.shuffleDeck}},[t._v("Shuffle Deck")])],1),"busy"==t.state?n("b-spinner",{staticClass:"m-3 mx-auto",attrs:{variant:"secondary"}}):t._e()],1)],1),n("b-row",{staticStyle:{"min-height":"50vh"}},[n("b-col",[n("hr"),n("transition",{attrs:{name:"bounce-right","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutRight"}},[t.hand.length?n("card-hand",{attrs:{hand:t.hand},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"mx-auto"},[n("playing-card",{staticClass:"text-center",attrs:{card:e}},[n("p",{style:"color: "+e.color+"; font-size: 12rem;",domProps:{innerHTML:t._s(t.getCardUnicode(e))}})]),n("div",{staticClass:"text-center",staticStyle:{"margin-top":"-4rem"}},[n("b",[t._v(t._s(e.value))]),t._v(" of "),n("b",{style:"color: "+e.color},[t._v(t._s(e.suit)+"s")])])],1)]}}],null,!1,2079218048)}):t._e()],1),n("b-alert",{staticClass:"my-auto",attrs:{show:"idle"===t.state&&!t.hand.length,variant:"warning"}},[t._v(" You do not have any cards in your hand, set the number of cards you want and click the "),n("a",{attrs:{href:"#"},on:{click:t.dealHand}},[t._v("Deal Hand")]),t._v(" button to get your cards. If you are feeling like the dealer didn't shuffle very well, click the "),n("a",{attrs:{href:"#"},on:{click:t.shuffleDeck}},[t._v("Shuffle Deck")]),t._v(" button to make the dealer reshuffle the cards. ")])],1)],1),n("b-modal",{attrs:{title:"Peek at the Cards in the Deck",size:"lg"},model:{value:t.peek,callback:function(e){t.peek=e},expression:"peek"}},[n("b-container",{staticClass:"deck-preview"},[n("card-hand",{attrs:{hand:t.deck},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"mx-auto"},[n("playing-card",{staticClass:"text-center",attrs:{card:e}},[n("p",{style:"color: "+e.color+"; font-size: 12rem;",domProps:{innerHTML:t._s(t.getCardUnicode(e))}})]),n("div",{staticClass:"text-center",staticStyle:{"margin-top":"-4rem"}},[n("b",[t._v(t._s(e.value))]),t._v(" of "),n("b",{style:"color: "+e.color},[t._v(t._s(e.suit)+"s")])])],1)]}}])})],1)],1)],1)},i=[];n("7db0"),n("c975"),n("d81d"),n("d3b7");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){if(Array.isArray(t))return a(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("3ca3"),n("ddb0");function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("b0c0"),n("25f0");function u(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return o(t)||c(t)||u(t)||s()}n("96cf");var l=n("1da1"),d=["🂡","🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂭","🂮","🂱","🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂽","🂾","🃁","🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃍","🃎","🃑","🃒","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃝","🃞"],h=function(t){return new Promise((function(e){return setTimeout(e,t)}))},v={name:"dealer",components:{CardHand:function(){return n.e("chunk-2d21e411").then(n.bind(null,"d57a"))},PlayingCard:function(){return n.e("chunk-cac9e07e").then(n.bind(null,"3529"))}},data:function(){return{peek:!1,handSize:5,hand:[],deckCount:52,deck:[],isNewDeck:!1,state:"idle",cards:d}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state="busy",e.next=3,t.$flask.getDeck();case 3:n=e.sent,r=n.cards,i=n.count,t.state="idle",t.deck=r,t.deckCount=i;case 9:case"end":return e.stop()}}),e)})))()},computed:{cardIndices:function(){for(var t=["Spade","Heart","Diamond","Club"],e=["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"],n=[],r=function(){var t=a[i];n.push.apply(n,f(e.map((function(e){return{suit:t,value:e}}))))},i=0,a=t;i<a.length;i++)r();return n}},methods:{getCardUnicode:function(t){var e=t.suit,n=t.value,r=this.cardIndices.find((function(t){return t.suit===e&&t.value==n}));return this.cards[this.cardIndices.indexOf(r)]},dealHand:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,r,i,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.hand=[],t.state="busy",e.next=4,h(250);case 4:return e.next=6,t.$flask.dealHand(t.handSize);case 6:return n=e.sent,r=n.hand,i=n.isNewDeck,e.next=11,t.$flask.getDeck();case 11:a=e.sent,o=a.cards,c=a.count,t.state="idle",t.deck=o,t.deckCount=c,t.hand=r,i&&t.$bvToast.toast('You have gone through an entire deck, the dealer just grabbed another deck.  If you\'re feeling unlucky with cards you are getting, request the dealer to shuffle the deck by clicking on the "Shuffle Deck" button.',{title:"New Deck Alert",variant:"warning",autoHideDelay:1e4});case 19:case"end":return e.stop()}}),e)})))()},shuffleDeck:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state="busy",e.next=3,t.$flask.shuffleDeck();case 3:n=e.sent,r=n.cards,i=n.count,t.deckCount=i,t.deck=r,t.state="idle";case 9:case"end":return e.stop()}}),e)})))()}}},b=v,p=(n("ebf1"),n("2877")),y=Object(p["a"])(b,r,i,!1,null,null,null);e["default"]=y.exports},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(r(t))}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),a=n("2d00"),o=i("species");t.exports=function(t){return a>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),a=n("d039"),o=n("ad6d"),c="toString",u=RegExp.prototype,s=u[c],f=a((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=c;(f||l)&&r(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),a=n("7dd0"),o="String Iterator",c=i.set,u=i.getterFor(o);a(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),a=n("9bdd"),o=n("e95a"),c=n("50c4"),u=n("8418"),s=n("35a1");t.exports=function(t){var e,n,f,l,d,h,v=i(t),b="function"==typeof this?this:Array,p=arguments.length,y=p>1?arguments[1]:void 0,g=void 0!==y,m=s(v),S=0;if(g&&(y=r(y,p>2?arguments[2]:void 0,2)),void 0==m||b==Array&&o(m))for(e=c(v.length),n=new b(e);e>S;S++)h=g?y(v[S],S):v[S],u(n,S,h);else for(l=m.call(v),d=l.next,n=new b;!(f=d.call(l)).done;S++)h=g?a(l,y,[f.value,S],!0):f.value,u(n,S,h);return n.length=S,n}},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,o,c=String(i(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(a=c.charCodeAt(u),a<55296||a>56319||u+1===s||(o=c.charCodeAt(u+1))<56320||o>57343?t?c.charAt(u):a:t?c.slice(u,u+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),a=n("b622"),o=a("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,a=n("44d2"),o=n("ae40"),c="find",u=!0,s=o(c);c in[]&&Array(1)[c]((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!s},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(c)},"818d":function(t,e,n){},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,a(0,n)):t[o]=n}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("d066"),o=n("c430"),c=n("83ab"),u=n("4930"),s=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),h=n("861d"),v=n("825a"),b=n("7b0b"),p=n("fc6a"),y=n("c04e"),g=n("5c6c"),m=n("7c73"),S=n("df75"),k=n("241c"),w=n("057f"),x=n("7418"),C=n("06cf"),O=n("9bf2"),A=n("d1e7"),L=n("9112"),_=n("6eeb"),D=n("5692"),j=n("f772"),T=n("d012"),P=n("90e3"),R=n("b622"),E=n("e538"),H=n("746f"),M=n("d44e"),I=n("69f3"),N=n("b727").forEach,$=j("hidden"),z="Symbol",V="prototype",F=R("toPrimitive"),G=I.set,J=I.getterFor(z),U=Object[V],q=i.Symbol,B=a("JSON","stringify"),Q=C.f,Y=O.f,K=w.f,W=A.f,X=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),nt=D("wks"),rt=i.QObject,it=!rt||!rt[V]||!rt[V].findChild,at=c&&f((function(){return 7!=m(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(U,e);r&&delete U[e],Y(t,e,n),r&&t!==U&&Y(U,e,r)}:Y,ot=function(t,e){var n=X[t]=m(q[V]);return G(n,{type:z,tag:t,description:e}),c||(n.description=e),n},ct=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ut=function(t,e,n){t===U&&ut(Z,e,n),v(t);var r=y(e,!0);return v(n),l(X,r)?(n.enumerable?(l(t,$)&&t[$][r]&&(t[$][r]=!1),n=m(n,{enumerable:g(0,!1)})):(l(t,$)||Y(t,$,g(1,{})),t[$][r]=!0),at(t,r,n)):Y(t,r,n)},st=function(t,e){v(t);var n=p(e),r=S(n).concat(vt(n));return N(r,(function(e){c&&!lt.call(n,e)||ut(t,e,n[e])})),t},ft=function(t,e){return void 0===e?m(t):st(m(t),e)},lt=function(t){var e=y(t,!0),n=W.call(this,e);return!(this===U&&l(X,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(X,e)||l(this,$)&&this[$][e])||n)},dt=function(t,e){var n=p(t),r=y(e,!0);if(n!==U||!l(X,r)||l(Z,r)){var i=Q(n,r);return!i||!l(X,r)||l(n,$)&&n[$][r]||(i.enumerable=!0),i}},ht=function(t){var e=K(p(t)),n=[];return N(e,(function(t){l(X,t)||l(T,t)||n.push(t)})),n},vt=function(t){var e=t===U,n=K(e?Z:p(t)),r=[];return N(n,(function(t){!l(X,t)||e&&!l(U,t)||r.push(X[t])})),r};if(u||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),n=function(t){this===U&&n.call(Z,t),l(this,$)&&l(this[$],e)&&(this[$][e]=!1),at(this,e,g(1,t))};return c&&it&&at(U,e,{configurable:!0,set:n}),ot(e,t)},_(q[V],"toString",(function(){return J(this).tag})),_(q,"withoutSetter",(function(t){return ot(P(t),t)})),A.f=lt,O.f=ut,C.f=dt,k.f=w.f=ht,x.f=vt,E.f=function(t){return ot(R(t),t)},c&&(Y(q[V],"description",{configurable:!0,get:function(){return J(this).description}}),o||_(U,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:q}),N(S(nt),(function(t){H(t)})),r({target:z,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ht,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:f((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(b(t))}}),B){var bt=!u||f((function(){var t=q();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));r({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var r,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(r=e,(h(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),i[1]=e,B.apply(null,i)}})}q[V][F]||L(q[V],F,q[V].valueOf),M(q,z),T[$]=!0},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),a=n("1c7e"),o=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),a=n("5135"),o=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(a(c,t))return c[t];e||(e={});var n=[][t],s=!!a(e,"ACCESSORS")&&e.ACCESSORS,f=a(e,0)?e[0]:u,l=a(e,1)?e[1]:void 0;return c[t]=!!n&&!i((function(){if(s&&!r)return!0;var t={length:-1};s?o(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,f,l)}))}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!(u in a)&&i(a,u,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),a=n("7b0b"),o=n("50c4"),c=n("65f0"),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,d=5==t||l;return function(h,v,b,p){for(var y,g,m=a(h),S=i(m),k=r(v,b,3),w=o(S.length),x=0,C=p||c,O=e?C(h,w):n?C(h,0):void 0;w>x;x++)if((d||x in S)&&(y=S[x],g=k(y,x,m),t))if(e)O[x]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return x;case 2:u.call(O,y)}else if(f)return!1;return l?-1:s||f?f:O}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},c975:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").indexOf,a=n("a640"),o=n("ae40"),c=[].indexOf,u=!!c&&1/[1].indexOf(1,-0)<0,s=a("indexOf"),f=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!s||!f},{indexOf:function(t){return u?c.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},d28b:function(t,e,n){var r=n("746f");r("iterator")},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,a=n("1dde"),o=n("ae40"),c=a("map"),u=o("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),a=n("e260"),o=n("9112"),c=n("b622"),u=c("iterator"),s=c("toStringTag"),f=a.values;for(var l in i){var d=r[l],h=d&&d.prototype;if(h){if(h[u]!==f)try{o(h,u,f)}catch(b){h[u]=f}if(h[s]||o(h,s,l),i[l])for(var v in a)if(h[v]!==a[v])try{o(h,v,a[v])}catch(b){h[v]=a[v]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),a=n("da84"),o=n("5135"),c=n("861d"),u=n("9bf2").f,s=n("e893"),f=a.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(d,f);var h=d.prototype=f.prototype;h.constructor=d;var v=h.toString,b="Symbol(test)"==String(f("test")),p=/^Symbol\((.*)\)[^)]+$/;u(h,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=v.call(t);if(o(l,t))return"";var n=b?e.slice(7,-1):e.replace(p,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ebf1:function(t,e,n){"use strict";var r=n("818d"),i=n.n(r);i.a},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),a=n("e8b5"),o=n("23cb"),c=n("50c4"),u=n("fc6a"),s=n("8418"),f=n("b622"),l=n("1dde"),d=n("ae40"),h=l("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),b=f("species"),p=[].slice,y=Math.max;r({target:"Array",proto:!0,forced:!h||!v},{slice:function(t,e){var n,r,f,l=u(this),d=c(l.length),h=o(t,d),v=o(void 0===e?d:e,d);if(a(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(l,h,v);for(r=new(void 0===n?Array:n)(y(v-h,0)),f=0;h<v;h++,f++)h in l&&s(r,f,l[h]);return r.length=f,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);