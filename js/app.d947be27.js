(function(e){function t(t){for(var n,s,a=t[0],i=t[1],c=t[2],p=0,d=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},u=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/js-fw-vue-degs/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=i;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Vue Demonstration Application")]),r("hr"),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.degs,expression:"degs"}],attrs:{type:"number"},domProps:{value:e.degs},on:{input:function(t){t.target.composing||(e.degs=t.target.value)}}})]),r("button",{on:{click:e.addPower}},[e._v("Add Power")]),r("hr"),r("PowersList",{attrs:{degsArr:e.degsArr}})],1)},u=[],s=(r("a630"),r("3ca3"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",e._l(e.degsArr,(function(e,t){return r("PowerItem",{key:t,attrs:{deg:e}})})),1)}),a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[e._v(e._s(2)),r("sup",[e._v(e._s(e.deg))]),e._v(": "+e._s(Math.pow(2,e.deg)))])},c=[],l={props:["deg"],name:"PowerItem"},p=l,d=r("2877"),f=Object(d["a"])(p,i,c,!1,null,"3bd95ea4",null),g=f.exports,v={name:"PowersList",components:{PowerItem:g},props:{degsArr:{type:Array,required:!0}}},m=v,h=Object(d["a"])(m,s,a,!1,null,"06f7b2e2",null),b=h.exports,w={name:"App",components:{PowersList:b},data:function(){return{degs:5}},methods:{addPower:function(){this.degs=+this.degs+1}},computed:{degsArr:function(){return Array.from({length:this.degs},(function(e,t){return 10+t}))}}},y=w,_=(r("034f"),Object(d["a"])(y,o,u,!1,null,null,null)),P=_.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.d947be27.js.map