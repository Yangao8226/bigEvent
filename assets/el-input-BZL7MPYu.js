import{aD as Ve,b$ as Se,bY as Ce,b5 as re,c0 as Re,b3 as qe,a_ as Qe,b4 as je,c1 as et,c as f,a5 as Ae,bA as tt,s as T,bz as Z,t as q,W as at,az as nt,b as Be,k as Ie,aG as ot,i as ae,I as Ee,m as st,L as ne,d as Le,c2 as lt,P as rt,u as Pe,ak as it,a0 as F,R as ut,au as ct,V as dt,o as m,J as S,a4 as h,a7 as oe,n as y,e as n,r as G,y as N,a as I,w as O,g as X,K as $,N as se,v as pt,aH as ft,a6 as vt,bB as mt,al as J,f as ht,_ as gt,l as ze,aC as yt,c3 as bt,c4 as xt,aj as wt,h as St}from"./index-D2kwZ2wK.js";import{i as Oe,j as Ct,k as It,b as Et,c as Pt,a as zt,e as kt,d as ke}from"./plugin-vueexport-helper-BBRCZWvx.js";const Ft=()=>Ve&&/firefox/i.test(window.navigator.userAgent);function Nt(e){return e}function Tt(e,o,l){switch(l.length){case 0:return e.call(o);case 1:return e.call(o,l[0]);case 2:return e.call(o,l[0],l[1]);case 3:return e.call(o,l[0],l[1],l[2])}return e.apply(o,l)}var Vt=800,Rt=16,At=Date.now;function Bt(e){var o=0,l=0;return function(){var a=At(),s=Rt-(a-l);if(l=a,s>0){if(++o>=Vt)return arguments[0]}else o=0;return e.apply(void 0,arguments)}}function Lt(e){return function(){return e}}var Ot=Se?function(e,o){return Se(e,"toString",{configurable:!0,enumerable:!1,value:Lt(o),writable:!0})}:Nt,$t=Bt(Ot),Fe=Math.max;function Ht(e,o,l){return o=Fe(o===void 0?e.length-1:o,0),function(){for(var a=arguments,s=-1,r=Fe(a.length-o,0),i=Array(r);++s<r;)i[s]=a[o+s];s=-1;for(var p=Array(o+1);++s<o;)p[s]=a[s];return p[o]=l(i),Tt(e,this,p)}}var Ne=Ce?Ce.isConcatSpreadable:void 0;function Mt(e){return re(e)||Oe(e)||!!(Ne&&e&&e[Ne])}function Dt(e,o,l,a,s){var r=-1,i=e.length;for(l||(l=Mt),s||(s=[]);++r<i;){var p=e[r];l(p)?Ct(s,p):s[s.length]=p}return s}function Kt(e){var o=e==null?0:e.length;return o?Dt(e):[]}function _t(e){return $t(Ht(e,void 0,Kt),e+"")}function ya(){if(!arguments.length)return[];var e=arguments[0];return re(e)?e:[e]}function Ut(e,o){return e!=null&&o in Object(e)}function Wt(e,o,l){o=Re(o,e);for(var a=-1,s=o.length,r=!1;++a<s;){var i=qe(o[a]);if(!(r=e!=null&&l(e,i)))break;e=e[i]}return r||++a!=s?r:(s=e==null?0:e.length,!!s&&It(s)&&Qe(i,s)&&(re(e)||Oe(e)))}function Yt(e,o){return e!=null&&Wt(e,o,Ut)}function Gt(e,o,l){for(var a=-1,s=o.length,r={};++a<s;){var i=o[a],p=je(e,i);l(p,i)&&et(r,Re(i,e),p)}return r}function Xt(e,o){return Gt(e,o,function(l,a){return Yt(e,a)})}var Jt=_t(function(e,o){return e==null?{}:Xt(e,o)});const le="update:modelValue",ba="change",Zt=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e),qt=["class","style"],Qt=/^on[A-Z]/,jt=(e={})=>{const{excludeListeners:o=!1,excludeKeys:l}=e,a=f(()=>((l==null?void 0:l.value)||[]).concat(qt)),s=Ae();return s?f(()=>{var r;return tt(Object.entries((r=s.proxy)==null?void 0:r.$attrs).filter(([i])=>!a.value.includes(i)&&!(o&&Qt.test(i))))}):f(()=>({}))};function ea(e){const o=T();function l(){if(e.value==null)return;const{selectionStart:s,selectionEnd:r,value:i}=e.value;if(s==null||r==null)return;const p=i.slice(0,Math.max(0,s)),v=i.slice(Math.max(0,r));o.value={selectionStart:s,selectionEnd:r,value:i,beforeTxt:p,afterTxt:v}}function a(){if(e.value==null||o.value==null)return;const{value:s}=e.value,{beforeTxt:r,afterTxt:i,selectionStart:p}=o.value;if(r==null||i==null||p==null)return;let v=s.length;if(s.endsWith(i))v=s.length-i.length;else if(s.startsWith(r))v=r.length;else{const x=r[p-1],w=s.indexOf(x,p-1);w!==-1&&(v=w+1)}e.value.setSelectionRange(v,v)}return[l,a]}function ta(e,{afterFocus:o,beforeBlur:l,afterBlur:a}={}){const s=Ae(),{emit:r}=s,i=Z(),p=T(!1),v=d=>{p.value||(p.value=!0,r("focus",d),o==null||o())},x=d=>{var V;nt(l)&&l(d)||d.relatedTarget&&((V=i.value)!=null&&V.contains(d.relatedTarget))||(p.value=!1,r("blur",d),a==null||a())},w=()=>{var d;(d=e.value)==null||d.focus()};return q(i,d=>{d&&d.setAttribute("tabindex","-1")}),at(i,"click",w),{wrapperRef:i,isFocused:p,handleFocus:v,handleBlur:x}}const aa=Be({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),na=e=>Jt(aa,e);let b;const oa=`
  height:0 !important;
  visibility:hidden !important;
  ${Ft()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,sa=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function la(e){const o=window.getComputedStyle(e),l=o.getPropertyValue("box-sizing"),a=Number.parseFloat(o.getPropertyValue("padding-bottom"))+Number.parseFloat(o.getPropertyValue("padding-top")),s=Number.parseFloat(o.getPropertyValue("border-bottom-width"))+Number.parseFloat(o.getPropertyValue("border-top-width"));return{contextStyle:sa.map(i=>`${i}:${o.getPropertyValue(i)}`).join(";"),paddingSize:a,borderSize:s,boxSizing:l}}function Te(e,o=1,l){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:s,borderSize:r,boxSizing:i,contextStyle:p}=la(e);b.setAttribute("style",`${p};${oa}`),b.value=e.value||e.placeholder||"";let v=b.scrollHeight;const x={};i==="border-box"?v=v+r:i==="content-box"&&(v=v-s),b.value="";const w=b.scrollHeight-s;if(Ie(o)){let d=w*o;i==="border-box"&&(d=d+s+r),v=Math.max(d,v),x.minHeight=`${d}px`}if(Ie(l)){let d=w*l;i==="border-box"&&(d=d+s+r),v=Math.min(d,v)}return x.height=`${v}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,x}const ra=Be({id:{type:String,default:void 0},size:ot,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ee},prefixIcon:{type:Ee},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>st({})},autofocus:{type:Boolean,default:!1},...na(["ariaLabel"])}),ia={[le]:e=>ne(e),input:e=>ne(e),change:e=>ne(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},ua=["role"],ca=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],da=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],pa=Le({name:"ElInput",inheritAttrs:!1}),fa=Le({...pa,props:ra,emits:ia,setup(e,{expose:o,emit:l}){const a=e,s=lt(),r=rt(),i=f(()=>{const t={};return a.containerRole==="combobox"&&(t["aria-haspopup"]=s["aria-haspopup"],t["aria-owns"]=s["aria-owns"],t["aria-expanded"]=s["aria-expanded"]),t}),p=f(()=>[a.type==="textarea"?ue.b():c.b(),c.m(ie.value),c.is("disabled",P.value),c.is("exceed",De.value),{[c.b("group")]:r.prepend||r.append,[c.bm("group","append")]:r.append,[c.bm("group","prepend")]:r.prepend,[c.m("prefix")]:r.prefix||a.prefixIcon,[c.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[c.bm("suffix","password-clear")]:W.value&&j.value,[c.b("hidden")]:a.type==="hidden"},s.class]),v=f(()=>[c.e("wrapper"),c.is("focus",K.value)]),x=jt({excludeKeys:f(()=>Object.keys(i.value))}),{form:w,formItem:d}=Et(),{inputId:V}=Pt(a,{formItemContext:d}),ie=zt(),P=kt(),c=Pe("input"),ue=Pe("textarea"),H=Z(),C=Z(),Q=T(!1),R=T(!1),M=T(!1),ce=T(),D=Z(a.inputStyle),z=f(()=>H.value||C.value),{wrapperRef:$e,isFocused:K,handleFocus:_,handleBlur:U}=ta(z,{afterBlur(){var t;a.validateEvent&&((t=d==null?void 0:d.validate)==null||t.call(d,"blur").catch(u=>ke()))}}),de=f(()=>{var t;return(t=w==null?void 0:w.statusIcon)!=null?t:!1}),A=f(()=>(d==null?void 0:d.validateState)||""),pe=f(()=>A.value&&yt[A.value]),He=f(()=>M.value?bt:xt),Me=f(()=>[s.style]),fe=f(()=>[a.inputStyle,D.value,{resize:a.resize}]),E=f(()=>wt(a.modelValue)?"":String(a.modelValue)),W=f(()=>a.clearable&&!P.value&&!a.readonly&&!!E.value&&(K.value||Q.value)),j=f(()=>a.showPassword&&!P.value&&!a.readonly&&!!E.value&&(!!E.value||K.value)),k=f(()=>a.showWordLimit&&!!a.maxlength&&(a.type==="text"||a.type==="textarea")&&!P.value&&!a.readonly&&!a.showPassword),ee=f(()=>E.value.length),De=f(()=>!!k.value&&ee.value>Number(a.maxlength)),Ke=f(()=>!!r.suffix||!!a.suffixIcon||W.value||a.showPassword||k.value||!!A.value&&de.value),[_e,Ue]=ea(H);it(C,t=>{if(We(),!k.value||a.resize!=="both")return;const u=t[0],{width:g}=u.contentRect;ce.value={right:`calc(100% - ${g+15+6}px)`}});const B=()=>{const{type:t,autosize:u}=a;if(!(!Ve||t!=="textarea"||!C.value))if(u){const g=ze(u)?u.minRows:void 0,Y=ze(u)?u.maxRows:void 0,we=Te(C.value,g,Y);D.value={overflowY:"hidden",...we},F(()=>{C.value.offsetHeight,D.value=we})}else D.value={minHeight:Te(C.value).minHeight}},We=(t=>{let u=!1;return()=>{var g;if(u||!a.autosize)return;((g=C.value)==null?void 0:g.offsetParent)===null||(t(),u=!0)}})(B),L=()=>{const t=z.value,u=a.formatter?a.formatter(E.value):E.value;!t||t.value===u||(t.value=u)},te=async t=>{_e();let{value:u}=t.target;if(a.formatter&&(u=a.parser?a.parser(u):u),!R.value){if(u===E.value){L();return}l(le,u),l("input",u),await F(),L(),Ue()}},ve=t=>{l("change",t.target.value)},me=t=>{l("compositionstart",t),R.value=!0},he=t=>{var u;l("compositionupdate",t);const g=(u=t.target)==null?void 0:u.value,Y=g[g.length-1]||"";R.value=!Zt(Y)},ge=t=>{l("compositionend",t),R.value&&(R.value=!1,te(t))},Ye=()=>{M.value=!M.value,ye()},ye=async()=>{var t;await F(),(t=z.value)==null||t.focus()},Ge=()=>{var t;return(t=z.value)==null?void 0:t.blur()},Xe=t=>{Q.value=!1,l("mouseleave",t)},Je=t=>{Q.value=!0,l("mouseenter",t)},be=t=>{l("keydown",t)},Ze=()=>{var t;(t=z.value)==null||t.select()},xe=()=>{l(le,""),l("change",""),l("clear"),l("input","")};return q(()=>a.modelValue,()=>{var t;F(()=>B()),a.validateEvent&&((t=d==null?void 0:d.validate)==null||t.call(d,"change").catch(u=>ke()))}),q(E,()=>L()),q(()=>a.type,async()=>{await F(),L(),B()}),ut(()=>{!a.formatter&&a.parser,L(),F(B)}),ct({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-input",ref:"https://element-plus.org/en-US/component/input.html"},f(()=>!!a.label)),o({input:H,textarea:C,ref:z,textareaStyle:fe,autosize:dt(a,"autosize"),focus:ye,blur:Ge,select:Ze,clear:xe,resizeTextarea:B}),(t,u)=>(m(),S("div",se(n(i),{class:n(p),style:n(Me),role:t.containerRole,onMouseenter:Je,onMouseleave:Xe}),[h(" input "),t.type!=="textarea"?(m(),S(oe,{key:0},[h(" prepend slot "),t.$slots.prepend?(m(),S("div",{key:0,class:y(n(c).be("group","prepend"))},[G(t.$slots,"prepend")],2)):h("v-if",!0),N("div",{ref_key:"wrapperRef",ref:$e,class:y(n(v))},[h(" prefix slot "),t.$slots.prefix||t.prefixIcon?(m(),S("span",{key:0,class:y(n(c).e("prefix"))},[N("span",{class:y(n(c).e("prefix-inner"))},[G(t.$slots,"prefix"),t.prefixIcon?(m(),I(n($),{key:0,class:y(n(c).e("icon"))},{default:O(()=>[(m(),I(X(t.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),N("input",se({id:n(V),ref_key:"input",ref:H,class:n(c).e("inner")},n(x),{minlength:t.minlength,maxlength:t.maxlength,type:t.showPassword?M.value?"text":"password":t.type,disabled:n(P),readonly:t.readonly,autocomplete:t.autocomplete,tabindex:t.tabindex,"aria-label":t.label||t.ariaLabel,placeholder:t.placeholder,style:t.inputStyle,form:t.form,autofocus:t.autofocus,onCompositionstart:me,onCompositionupdate:he,onCompositionend:ge,onInput:te,onFocus:u[0]||(u[0]=(...g)=>n(_)&&n(_)(...g)),onBlur:u[1]||(u[1]=(...g)=>n(U)&&n(U)(...g)),onChange:ve,onKeydown:be}),null,16,ca),h(" suffix slot "),n(Ke)?(m(),S("span",{key:1,class:y(n(c).e("suffix"))},[N("span",{class:y(n(c).e("suffix-inner"))},[!n(W)||!n(j)||!n(k)?(m(),S(oe,{key:0},[G(t.$slots,"suffix"),t.suffixIcon?(m(),I(n($),{key:0,class:y(n(c).e("icon"))},{default:O(()=>[(m(),I(X(t.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),n(W)?(m(),I(n($),{key:1,class:y([n(c).e("icon"),n(c).e("clear")]),onMousedown:vt(n(mt),["prevent"]),onClick:xe},{default:O(()=>[pt(n(ft))]),_:1},8,["class","onMousedown"])):h("v-if",!0),n(j)?(m(),I(n($),{key:2,class:y([n(c).e("icon"),n(c).e("password")]),onClick:Ye},{default:O(()=>[(m(),I(X(n(He))))]),_:1},8,["class"])):h("v-if",!0),n(k)?(m(),S("span",{key:3,class:y(n(c).e("count"))},[N("span",{class:y(n(c).e("count-inner"))},J(n(ee))+" / "+J(t.maxlength),3)],2)):h("v-if",!0),n(A)&&n(pe)&&n(de)?(m(),I(n($),{key:4,class:y([n(c).e("icon"),n(c).e("validateIcon"),n(c).is("loading",n(A)==="validating")])},{default:O(()=>[(m(),I(X(n(pe))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),t.$slots.append?(m(),S("div",{key:1,class:y(n(c).be("group","append"))},[G(t.$slots,"append")],2)):h("v-if",!0)],64)):(m(),S(oe,{key:1},[h(" textarea "),N("textarea",se({id:n(V),ref_key:"textarea",ref:C,class:[n(ue).e("inner"),n(c).is("focus",n(K))]},n(x),{minlength:t.minlength,maxlength:t.maxlength,tabindex:t.tabindex,disabled:n(P),readonly:t.readonly,autocomplete:t.autocomplete,style:n(fe),"aria-label":t.label||t.ariaLabel,placeholder:t.placeholder,form:t.form,autofocus:t.autofocus,onCompositionstart:me,onCompositionupdate:he,onCompositionend:ge,onInput:te,onFocus:u[2]||(u[2]=(...g)=>n(_)&&n(_)(...g)),onBlur:u[3]||(u[3]=(...g)=>n(U)&&n(U)(...g)),onChange:ve,onKeydown:be}),null,16,da),n(k)?(m(),S("span",{key:0,style:ht(ce.value),class:y(n(c).e("count"))},J(n(ee))+" / "+J(t.maxlength),7)):h("v-if",!0)],64))],16,ua))}});var va=gt(fa,[["__file","input.vue"]]);const xa=St(va);export{ba as C,xa as E,le as U,na as a,Nt as b,ya as c,Dt as d,Yt as h,Zt as i,Ht as o,Jt as p,$t as s,ta as u};
