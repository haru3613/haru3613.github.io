(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-531143e0"],{"0fd9":function(t,e,s){"use strict";s("4b85");var n=s("2b0e"),a=s("d9f7"),i=s("80d2");const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce((s,n)=>(s[t+Object(i["n"])(n)]=e(),s),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...o,"space-between","space-around"].includes(t),f=l("justify",()=>({type:String,default:null,validator:u})),h=t=>[...o,"space-between","space-around","stretch"].includes(t),g=l("alignContent",()=>({type:String,default:null,validator:h})),p={align:Object.keys(d),justify:Object.keys(f),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,s){let n=b[t];if(null!=s){if(e){const s=e.replace(t,"");n+="-"+s}return n+="-"+s,n.toLowerCase()}}const v=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...f,alignContent:{type:String,default:null,validator:h},...g},render(t,{props:e,data:s,children:n}){let i="";for(const a in e)i+=String(e[a]);let r=v.get(i);if(!r){let t;for(t in r=[],p)p[t].forEach(s=>{const n=e[s],a=m(t,s,n);a&&r.push(a)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),v.set(i,r)}return t(e.tag,Object(a["a"])(s,{staticClass:"row",class:r}),n)}})},"132d":function(t,e,s){"use strict";s("4804");var n,a=s("7e2b"),i=s("a9ad"),r=s("af2b"),o=s("7560"),l=s("80d2"),c=s("2b0e"),d=s("58df");function u(t){return["fas","far","fal","fab","fad"].some(e=>t.includes(e))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));const h=Object(d["a"])(a["a"],i["a"],r["a"],o["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["m"])(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["j"])(t).find(e=>t[e]);return e&&n[e]||Object(l["d"])(this.size)},getDefaultData(){const t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$};return t},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const s=[],n=this.getDefaultData();let a="material-icons";const i=t.indexOf("-"),r=i<=-1;r?s.push(t):(a=t.slice(0,i),u(a)&&(a="")),n.class[a]=!0,n.class[t]=!r;const o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,s)},renderSvgIcon(t,e){const s=this.getSize(),n={...this.getDefaultData(),style:s?{fontSize:s,height:s,width:s}:void 0};n.class["v-icon--svg"]=!0,this.applyColors(n);const a={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:s||"24",width:s||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",n,[e("svg",a,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const s=this.getDefaultData();s.class["v-icon--is-component"]=!0;const n=this.getSize();n&&(s.style={fontSize:n,height:n,width:n}),this.applyColors(s);const a=t.component;return s.props=t.props,s.nativeOn=s.on,e(a,s)}},render(t){const e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=c["a"].extend({name:"v-icon",$_wrapperFor:h,functional:!0,render(t,{data:e,children:s}){let n="";return e.domProps&&(n=e.domProps.textContent||e.domProps.innerHTML||n,delete e.domProps.textContent,delete e.domProps.innerHTML),t(h,e,n?[n]:s)}})},3408:function(t,e,s){},4804:function(t,e,s){},"4b85":function(t,e,s){},"61cd":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"overflow-hidden",attrs:{id:"services"}},[n("v-row",{staticClass:"accent",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"6"}},[n("v-img",{attrs:{src:s("67e9"),height:"100%"}})],1),n("v-col",{staticClass:"text-center pa-5",attrs:{cols:"12",md:"6"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("base-bubble-2",{staticStyle:{transform:"translateX(55%)"}}),n("base-heading",{staticClass:"info--text"},[t._v(" 工作經歷 ")]),n("base-text",{staticClass:"mb-5"},[t._v(" 遠景科技股份有限公司 QA Engineer Intern"),n("br"),t._v(" 跨國物聯網軟體公司，"),n("br"),t._v("協助各大企業透過軟體技術與商務解決方案打造連網產品 ")])],1),t._l(t.services,(function(e,s){return n("v-col",{key:s,staticClass:"text-center mb-3",attrs:{md:"6"}},[n("v-avatar",{staticClass:"elevation-6 mb-2",attrs:{color:"#69A1BB",size:"64",tile:""}},[n("v-icon",{attrs:{dark:"",size:"52"},domProps:{textContent:t._s(e.icon)}})],1),n("base-text",[n("div",{staticClass:"mb-2",domProps:{textContent:t._s(e.name)}}),n("div",{domProps:{innerHTML:t._s(e.blurb)}})])],1)}))],2)],1)],1)],1)},a=[],i={name:"Services",data:function(){return{services:[{name:"程式語言",icon:" mdi-language-python",blurb:"Robotframework<br>Google App Script"},{name:"測試",icon:"mdi-bug",blurb:"Web testing<br>API testing"},{name:"工具",icon:"mdi-server",blurb:"Jenkins<br>Docker"},{name:"作業系統",icon:"mdi-laptop-mac",blurb:"Linux<br>MacOS"}]}}},r=i,o=s("2877"),l=s("6544"),c=s.n(l),d=(s("3408"),s("a9ad")),u=s("24b2"),f=s("80d2"),h=s("58df"),g=Object(h["a"])(d["a"],u["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles(){return{height:Object(f["d"])(this.size),minWidth:Object(f["d"])(this.size),width:Object(f["d"])(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),p=s("62ad"),b=s("132d"),m=s("adda"),v=s("0fd9"),y=Object(o["a"])(r,n,a,!1,null,null,null);e["default"]=y.exports;c()(y,{VAvatar:g,VCol:p["a"],VIcon:b["a"],VImg:m["a"],VRow:v["a"]})},"62ad":function(t,e,s){"use strict";s("4b85");var n=s("2b0e"),a=s("d9f7"),i=s("80d2");const r=["sm","md","lg","xl"],o=(()=>r.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>r.reduce((t,e)=>(t["offset"+Object(i["n"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>r.reduce((t,e)=>(t["order"+Object(i["n"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,s){let n=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");n+="-"+s}return"col"!==t||""!==s&&!0!==s?(n+="-"+s,n.toLowerCase()):n.toLowerCase()}}const f=new Map;e["a"]=n["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:n,parent:i}){let r="";for(const a in e)r+=String(e[a]);let o=f.get(r);if(!o){let t;for(t in o=[],d)d[t].forEach(s=>{const n=e[s],a=u(t,s,n);a&&o.push(a)});const s=o.some(t=>t.startsWith("col-"));o.push({col:!s||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(r,o)}return t(e.tag,Object(a["a"])(s,{class:o}),n)}})},"67e9":function(t,e,s){t.exports=s.p+"img/services.2739f6e4.png"},d9f7:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("80d2");const a={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function i(t){const e={};for(const s of t.split(a.styleList)){let[t,i]=s.split(a.styleProp);t=t.trim(),t&&("string"===typeof i&&(i=i.trim()),e[Object(n["a"])(t)]=i)}return e}function r(){const t={};let e,s,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"style":case"directives":if(!arguments[n][e])break;if(Array.isArray(t[e])||(t[e]=[]),"style"===e){let t;t=Array.isArray(arguments[n].style)?arguments[n].style:[arguments[n].style];for(let e=0;e<t.length;e++){const s=t[e];"string"===typeof s&&(t[e]=i(s))}arguments[n].style=t}t[e]=t[e].concat(arguments[n][e]);break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":if(!arguments[n][e])break;t[e]||(t[e]={});const a=t[e];for(s of Object.keys(arguments[n][e]||{}))a[s]?a[s]=Array().concat(a[s],arguments[n][e][s]):a[s]=arguments[n][e][s];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:t[e]||(t[e]=arguments[n][e])}return t}}}]);
//# sourceMappingURL=chunk-531143e0.39104c28.js.map