!function(e){function t(t){for(var n,r,o=t[0],l=t[1],u=0,a=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&a.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(c&&c(t);a.length;)a.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({2:"route-home",3:"route-posts"}[e]||e)+".chunk."+{2:"05379",3:"31d6c"}[e]+".css",l=n.p+i,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var c=(s=u[a]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===i||c===l))return t()}var _=document.getElementsByTagName("style");for(a=0;a<_.length;a++){var s;if((c=(s=_[a]).getAttribute("data-href"))===i||c===l)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css";f.onerror=f.onload=function(n){if(f.onerror=f.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||l,a=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=i,a.request=u,delete o[e],f.parentNode.removeChild(f),r(a)}},f.href=l,document.head.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var l=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=l);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=function(e){return n.p+""+({2:"route-home",3:"route-posts"}[e]||e)+".chunk."+{2:"85690",3:"c8416"}[e]+".esm.js"}(e);var c=new Error;u=function(t){a.onerror=a.onload=null,clearTimeout(_);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[e]=void 0}};var _=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var c=u;n(n.s="Pq/i")}({"Pq/i":function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:l}=r,u=e=>e&&e.default?e.default:e,a=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(a(n.p)+"sw-esm.js"),"function"==typeof u(n("qVkA"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=u(n("qVkA")),r={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(r=JSON.parse(decodeURI(c.innerHTML)).preRenderData||r);const _={preRenderData:r},s=r.url?a(r.url):"";(l&&s===a(location.pathname)?l:i)(o(t,{CLI_DATA:_}),document.body,e)};0,t()}},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,u={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:u[i]=t[i];if(arguments.length>2&&(u.children=arguments.length>3?L.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return l(e,u,r,o,null)}function l(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++M:o};return null==o&&null!=D.vnode&&D.vnode(i),i}function u(){return{current:null}}function a(e){return e.children}function c(e,t){this.props=e,this.context=t}function _(e,t){if(null==t)return e.__?_(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?_(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function f(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!p.__r++||N!==D.debounceRendering)&&((N=D.debounceRendering)||W)(p)}function p(){var e,t,n,o,i,l,u,a;for(I.sort(H);e=I.shift();)e.__d&&(t=I.length,o=void 0,i=void 0,u=(l=(n=e).__v).__e,(a=n.__P)&&(o=[],(i=r({},l)).__v=l.__v+1,C(a,l,i,n.__n,void 0!==a.ownerSVGElement,null!=l.__h?[u]:null,o,null==u?_(l):u,l.__h),j(o,l),l.__e!=u&&s(l)),I.length>t&&I.sort(H));p.__r=0}function h(e,t,n,r,o,i,u,c,s,f){var p,h,y,b,g,k,O,j=r&&r.__k||$,x=j.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(b=n.__k[p]=null==(b=t[p])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?l(null,b,null,null,b):Array.isArray(b)?l(a,{children:b},null,null,null):b.__b>0?l(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(y=j[p])||y&&b.key==y.key&&b.type===y.type)j[p]=void 0;else for(h=0;h<x;h++){if((y=j[h])&&b.key==y.key&&b.type===y.type){j[h]=void 0;break}y=null}C(e,b,y=y||K,o,i,u,c,s,f),g=b.__e,(h=b.ref)&&y.ref!=h&&(O||(O=[]),y.ref&&O.push(y.ref,null,b),O.push(h,b.__c||g,b)),null!=g?(null==k&&(k=g),"function"==typeof b.type&&b.__k===y.__k?b.__d=s=d(b,s,e):s=m(e,b,y,j,g,s),"function"==typeof n.type&&(n.__d=s)):s&&y.__e==s&&s.parentNode!=e&&(s=_(y))}for(n.__e=k,p=x;p--;)null!=j[p]&&("function"==typeof n.type&&null!=j[p].__e&&j[p].__e==n.__d&&(n.__d=v(r).nextSibling),A(j[p],j[p]));if(O)for(p=0;p<O.length;p++)w(O[p],O[++p],O[++p])}function d(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?d(r,t,n):m(n,r,r,o,r.__e,t));return t}function y(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){y(e,t)})):t.push(e)),t}function m(e,t,n,r,o,i){var l,u,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(u=i,a=0;(u=u.nextSibling)&&a<r.length;a+=1)if(u==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function v(e){var t,n,r;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=v(n)))return r;return null}function b(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||q.test(t)?n:n+"px"}function g(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||b(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||b(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?O:k,i):e.removeEventListener(t,i?O:k,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function k(e){return this.l[e.type+!1](D.event?D.event(e):e)}function O(e){return this.l[e.type+!0](D.event?D.event(e):e)}function C(e,t,n,o,i,l,u,_,s){var f,p,d,y,m,v,b,g,k,O,C,j,w,A,P,E=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,_=t.__e=n.__e,t.__h=null,l=[_]),(f=D.__b)&&f(t);try{e:if("function"==typeof E){if(g=t.props,k=(f=E.contextType)&&o[f.__c],O=f?k?k.props.value:f.__:o,n.__c?b=(p=t.__c=n.__c).__=p.__E:("prototype"in E&&E.prototype.render?t.__c=p=new E(g,O):(t.__c=p=new c(g,O),p.constructor=E,p.render=S),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=o,d=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=E.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,E.getDerivedStateFromProps(g,p.__s))),y=p.props,m=p.state,p.__v=t,d)null==E.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==E.getDerivedStateFromProps&&g!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||t.__v===n.__v){for(t.__v!==n.__v&&(p.props=g,p.state=p.__s,p.__d=!1),p.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),C=0;C<p._sb.length;C++)p.__h.push(p._sb[C]);p._sb=[],p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(y,m,v)}))}if(p.context=O,p.props=g,p.__P=e,j=D.__r,w=0,"prototype"in E&&E.prototype.render){for(p.state=p.__s,p.__d=!1,j&&j(t),f=p.render(p.props,p.state,p.context),A=0;A<p._sb.length;A++)p.__h.push(p._sb[A]);p._sb=[]}else do{p.__d=!1,j&&j(t),f=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++w<25);p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(v=p.getSnapshotBeforeUpdate(y,m)),P=null!=f&&f.type===a&&null==f.key?f.props.children:f,h(e,Array.isArray(P)?P:[P],t,n,o,i,l,u,_,s),p.base=t.__e,t.__h=null,p.__h.length&&u.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=x(n.__e,t,n,o,i,l,u,s);(f=D.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=l)&&(t.__e=_,t.__h=!!s,l[l.indexOf(_)]=null),D.__e(e,t,n)}}function j(e,t){D.__c&&D.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){D.__e(e,t.__v)}}))}function x(e,t,n,r,i,l,u,a){var c,s,f,p=n.props,d=t.props,y=t.type,m=0;if("svg"===y&&(i=!0),null!=l)for(;m<l.length;m++)if((c=l[m])&&"setAttribute"in c==!!y&&(y?c.localName===y:3===c.nodeType)){e=c,l[m]=null;break}if(null==e){if(null===y)return document.createTextNode(d);e=i?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,d.is&&d),l=null,a=!1}if(null===y)p===d||a&&e.data===d||(e.data=d);else{if(l=l&&L.call(e.childNodes),s=(p=n.props||K).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!a){if(null!=l)for(p={},m=0;m<e.attributes.length;m++)p[e.attributes[m].name]=e.attributes[m].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||g(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||g(e,i,t[i],n[i],r)}(e,d,p,i,a),f)t.__k=[];else if(m=t.props.children,h(e,Array.isArray(m)?m:[m],t,n,r,i&&"foreignObject"!==y,l,u,l?l[0]:n.__k&&_(n,0),a),null!=l)for(m=l.length;m--;)null!=l[m]&&o(l[m]);a||("value"in d&&void 0!==(m=d.value)&&(m!==e.value||"progress"===y&&!m||"option"===y&&m!==p.value)&&g(e,"value",m,p.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==e.checked&&g(e,"checked",m,p.checked,!1))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){D.__e(e,n)}}function A(e,t,n){var r,i;if(D.unmount&&D.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||w(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){D.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&A(r[i],t,n||"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__=e.__e=e.__d=void 0}function S(e,t,n){return this.constructor(e,n)}function P(e,t,n){var r,o,l;D.__&&D.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,l=[],C(t,e=(!r&&n||t).__k=i(a,null,[e]),o||K,K,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?L.call(t.childNodes):null,l,!r&&n?n:o?o.__e:t.firstChild,r),j(l,e)}function E(e,t){P(e,t,E)}function T(e,t,n){var o,i,u,a=r({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?i=t[u]:a[u]=t[u];return arguments.length>2&&(a.children=arguments.length>3?L.call(arguments,2):n),l(e.type,a,o||e.key,i||e.ref,null)}function U(e,t){var n={__c:t="__cC"+F++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,f(e)}))},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"Component",(function(){return c})),n.d(t,"Fragment",(function(){return a})),n.d(t,"cloneElement",(function(){return T})),n.d(t,"createContext",(function(){return U})),n.d(t,"createElement",(function(){return i})),n.d(t,"createRef",(function(){return u})),n.d(t,"h",(function(){return i})),n.d(t,"hydrate",(function(){return E})),n.d(t,"isValidElement",(function(){return R})),n.d(t,"options",(function(){return D})),n.d(t,"render",(function(){return P})),n.d(t,"toChildArray",(function(){return y}));var L,D,M,R,I,N,W,H,F,K={},$=[],q=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L=$.slice,D={__e:function(e,t,n,r){for(var o,i,l;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),l=o.__d),l)return o.__E=o}catch(t){e=t}throw e}},M=0,R=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=a,I=[],W="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(e,t){return e.__v.__b-t.__v.__b},p.__r=0,F=0},qVkA:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),l={};if(i&&i[1])for(var a=i[1].split("&"),c=0;c<a.length;c++){var _=a[c].split("=");l[decodeURIComponent(_[0])]=decodeURIComponent(_.slice(1).join("="))}e=u(e.replace(o,"")),t=u(t||"");for(var s=Math.max(e.length,t.length),f=0;f<s;f++)if(t[f]&&":"===t[f].charAt(0)){var p=t[f].replace(/(^:|[+*?]+$)/g,""),h=(t[f].match(/[+*?]+$/)||b)[0]||"",d=~h.indexOf("+"),y=~h.indexOf("*"),m=e[f]||"";if(!m&&!y&&(h.indexOf("?")<0||d)){r=!1;break}if(l[p]=decodeURIComponent(m),d||y){l[p]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&l}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function l(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,u(t).map(a).join(""));var t}(e),e.props}function u(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function a(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function c(){var e;return""+((e=g&&g.location?g.location:g&&g.getCurrentLocation?g.getCurrentLocation():"undefined"!=typeof location?location:C).pathname||"")+(e.search||"")}function _(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=k.length;t--;)if(k[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),g&&g[t]?g[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),s(e)}function s(e){for(var t=!1,n=0;n<k.length;n++)!0===k[n].routeTo(e)&&(t=!0);for(var r=O.length;r--;)O[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return _(t)}}function p(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return f(e.currentTarget||e.target||this),h(e)}function h(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function d(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(f(t))return h(e)}}while(t=t.parentNode)}}function y(e,t){if(!e||"string"==typeof e.type)return null;const n=e.__;if(!n)return;let r=n.__k;if(r){Array.isArray(r)||(r=[r]);let t=r.indexOf(e);-1===t&&(t=r.length);for(let e=t;e--;){const t=r[e],n=t&&(t.__e||y(t,!0));if(n)return n}}return t?void 0:y(n)}function m(e){function t(){v.Component.call(this),n||(this.componentWillMount=()=>{e((e=>{n=e&&e.default||e,this.setState({})}))},this.shouldComponentUpdate=()=>null!=n),this.render=e=>{if(n)return Object(v.h)(n,e);const t=y(this.__v),r=t&&t.nextSibling||(this.__P||this._parentDom).firstChild;return r?3===r.nodeType?r.data:Object(v.h)(r.localName,{dangerouslySetInnerHTML:E}):void 0}}let n;return t.preload=e,(t.prototype=new v.Component).constructor=t,t}n.r(t);var v=n("hosL"),b={},g=null,k=[],O=[],C={},j=!1,x=function(e){function t(t){e.call(this,t),t.history&&(g=t.history),this.state={url:t.url||c()},j||("function"==typeof addEventListener&&(g||addEventListener("popstate",(function(){s(c())})),addEventListener("click",d)),j=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){k.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;g&&(this.unlisten=g.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),k.splice(k.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(l).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var l={url:t,matches:i};return r(l,i),delete l.ref,delete l.key,Object(v.cloneElement)(e,l)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),l=i[0]||null,u=this.previousUrl;return o!==u&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:u,active:i,current:l})),l},t}(v.Component),w=function(e){return Object(v.createElement)("a",r({onClick:p},e))},A=function(e){return Object(v.createElement)(e.component,e)};x.subscribers=O,x.getCurrentUrl=c,x.route=_,x.Router=x,x.Route=A,x.Link=w,x.exec=o;var S={header:"header__OVZyn",header_fixed:"header_fixed__e+u-O",header_hidden:"header_hidden__HZ-RF",title:"title__I4umU",subtitle:"subtitle__0gF3H"};const P=({ariaHidden:e})=>Object(v.h)("header",{"aria-hidden":!!e,class:`${S.header} ${e?S.header_hidden:S.header_fixed}`},Object(v.h)("h1",{class:S.title},"Akifumi Akazawa(Tomiyama)"),Object(v.h)("p",{class:S.subtitle},"Software Engineer skilled in Web Application and Data Engineering."),Object(v.h)("nav",null,Object(v.h)("ul",null,Object(v.h)("li",null,Object(v.h)(w,{class:"fa-solid fa-terminal",href:"/"},Object(v.h)("span",{class:S.label},"Terminal"))),Object(v.h)("li",null,Object(v.h)("a",{class:"fa-brands fa-github",href:"https://github.com/atomiyama"},Object(v.h)("span",{class:S.label},"GitHub"))),Object(v.h)("li",null,Object(v.h)("a",{class:"fa-brands fa-twitter",href:"https://twitter.com/atomiyama1216"},Object(v.h)("span",{class:S.label},"Twitter"))),Object(v.h)("li",null,Object(v.h)("a",{class:"fa-brands fa-linkedin",href:"https://linkedin.com/in/atomiyama1216"},Object(v.h)("span",{class:S.label},"LinkedIn"))),Object(v.h)("li",null,Object(v.h)("a",{class:"fa-brands fa-facebook",href:"https://www.facebook.com/atomiyama1216"},Object(v.h)("span",{class:S.label},"Facebook"))),Object(v.h)("li",null,Object(v.h)("a",{class:"fa-regular fa-envelope",href:"mailto:tomisuker16@gmail.com"},Object(v.h)("span",{class:S.label},"Email"))))),Object(v.h)("hr",null)),E={};var T=m((function(e){n.e(2).then(function(){var t=n("OPsQ");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)})),U=m((function(e){n.e(3).then(function(){var t=n("yKEw");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)}));t.default=()=>Object(v.h)("div",{id:"app"},Object(v.h)(P,null),Object(v.h)(P,{ariaHidden:!0}),Object(v.h)("main",null,Object(v.h)(x,null,Object(v.h)(A,{path:"/",component:T}),Object(v.h)(A,{path:"/posts",component:U}))))}});
//# sourceMappingURL=bundle.4dde4.esm.js.map