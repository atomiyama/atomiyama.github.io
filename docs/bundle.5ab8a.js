!function(e){function t(t){for(var n,r,o=t[0],l=t[1],u=0,a=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&a.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(c&&c(t);a.length;)a.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({2:"route-home",3:"route-posts"}[e]||e)+".chunk."+{2:"5824d",3:"31d6c"}[e]+".css",l=n.p+i,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var c=(s=u[a]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===i||c===l))return t()}var _=document.getElementsByTagName("style");for(a=0;a<_.length;a++){var s;if((c=(s=_[a]).getAttribute("data-href"))===i||c===l)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css";f.onerror=f.onload=function(n){if(f.onerror=f.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||l,a=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=i,a.request=u,delete o[e],f.parentNode.removeChild(f),r(a)}},f.href=l,document.head.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var l=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=l);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=function(e){return n.p+""+({2:"route-home",3:"route-posts"}[e]||e)+".chunk."+{2:"d6745",3:"03494"}[e]+".js"}(e);var c=new Error;u=function(t){a.onerror=a.onload=null,clearTimeout(_);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[e]=void 0}};var _=setTimeout((function(){u({type:"timeout",target:a})}),12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var c=u;n(n.s="Pq/i")}({"Pq/i":function(e,t,n){"use strict";n.r(t);var r=n("hosL"),o=r.e,i=r.h,l=r.f,u=function(e){return e&&e.default?e.default:e},a=function(e){return"/"===e[e.length-1]?e:e+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(a(n.p)+"sw.js"),"function"==typeof u(n("qVkA"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var e=u(n("qVkA")),t={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(t=JSON.parse(decodeURI(r.innerHTML)).preRenderData||t);var _={preRenderData:t},s=t.url?a(t.url):"";(l&&s===a(location.pathname)?l:i)(o(e,{CLI_DATA:_}),document.body,c)}()}},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o,i,u={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:u[i]=t[i];if(arguments.length>2&&(u.children=arguments.length>3?T.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return l(e,u,r,o,null)}function l(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++U:o};return null==o&&null!=L.vnode&&L.vnode(i),i}function u(e){return e.children}function a(e,t){this.props=e,this.context=t}function c(e,t){if(null==t)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?c(e):null}function _(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return _(e)}}function s(e){(!e.__d&&(e.__d=!0)&&D.push(e)&&!f.__r++||M!==L.debounceRendering)&&((M=L.debounceRendering)||I)(f)}function f(){var e,t,n,o,i,l,u,a;for(D.sort(N);e=D.shift();)e.__d&&(t=D.length,o=void 0,i=void 0,u=(l=(n=e).__v).__e,(a=n.__P)&&(o=[],(i=r({},l)).__v=l.__v+1,O(a,l,i,n.__n,void 0!==a.ownerSVGElement,null!=l.__h?[u]:null,o,null==u?c(l):u,l.__h),j(o,l),l.__e!=u&&_(l)),D.length>t&&D.sort(N));f.__r=0}function p(e,t,n,r,o,i,a,_,s,f){var p,h,m,b,g,k,j,C=r&&r.__k||W,x=C.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(b=n.__k[p]=null==(b=t[p])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?l(null,b,null,null,b):Array.isArray(b)?l(u,{children:b},null,null,null):b.__b>0?l(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(m=C[p])||m&&b.key==m.key&&b.type===m.type)C[p]=void 0;else for(h=0;h<x;h++){if((m=C[h])&&b.key==m.key&&b.type===m.type){C[h]=void 0;break}m=null}O(e,b,m=m||R,o,i,a,_,s,f),g=b.__e,(h=b.ref)&&m.ref!=h&&(j||(j=[]),m.ref&&j.push(m.ref,null,b),j.push(h,b.__c||g,b)),null!=g?(null==k&&(k=g),"function"==typeof b.type&&b.__k===m.__k?b.__d=s=d(b,s,e):s=y(e,b,m,C,g,s),"function"==typeof n.type&&(n.__d=s)):s&&m.__e==s&&s.parentNode!=e&&(s=c(m))}for(n.__e=k,p=x;p--;)null!=C[p]&&("function"==typeof n.type&&null!=C[p].__e&&C[p].__e==n.__d&&(n.__d=v(r).nextSibling),A(C[p],C[p]));if(j)for(p=0;p<j.length;p++)w(j[p],j[++p],j[++p])}function d(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t="function"==typeof r.type?d(r,t,n):y(n,r,r,o,r.__e,t));return t}function h(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){h(e,t)})):t.push(e)),t}function y(e,t,n,r,o,i){var l,u,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=i||null==o.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(o),l=null;else{for(u=i,a=0;(u=u.nextSibling)&&a<r.length;a+=1)if(u==o)break e;e.insertBefore(o,i),l=i}return void 0!==l?l:o.nextSibling}function v(e){var t,n,r;if(null==e.type||"string"==typeof e.type)return e.__e;if(e.__k)for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=v(n)))return r;return null}function m(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||H.test(t)?n:n+"px"}function b(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||m(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||m(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?k:g,i):e.removeEventListener(t,i?k:g,i);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function g(e){return this.l[e.type+!1](L.event?L.event(e):e)}function k(e){return this.l[e.type+!0](L.event?L.event(e):e)}function O(e,t,n,o,i,l,c,_,s){var f,d,h,y,v,m,b,g,k,O,j,w,A,S,P,E=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,_=t.__e=n.__e,t.__h=null,l=[_]),(f=L.__b)&&f(t);try{e:if("function"==typeof E){if(g=t.props,k=(f=E.contextType)&&o[f.__c],O=f?k?k.props.value:f.__:o,n.__c?b=(d=t.__c=n.__c).__=d.__E:("prototype"in E&&E.prototype.render?t.__c=d=new E(g,O):(t.__c=d=new a(g,O),d.constructor=E,d.render=x),k&&k.sub(d),d.props=g,d.state||(d.state={}),d.context=O,d.__n=o,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=E.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=r({},d.__s)),r(d.__s,E.getDerivedStateFromProps(g,d.__s))),y=d.props,v=d.state,d.__v=t,h)null==E.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==E.getDerivedStateFromProps&&g!==y&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(g,O),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(g,d.__s,O)||t.__v===n.__v){for(t.__v!==n.__v&&(d.props=g,d.state=d.__s,d.__d=!1),d.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),j=0;j<d._sb.length;j++)d.__h.push(d._sb[j]);d._sb=[],d.__h.length&&c.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(g,d.__s,O),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(y,v,m)}))}if(d.context=O,d.props=g,d.__P=e,w=L.__r,A=0,"prototype"in E&&E.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),f=d.render(d.props,d.state,d.context),S=0;S<d._sb.length;S++)d.__h.push(d._sb[S]);d._sb=[]}else do{d.__d=!1,w&&w(t),f=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++A<25);d.state=d.__s,null!=d.getChildContext&&(o=r(r({},o),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(m=d.getSnapshotBeforeUpdate(y,v)),P=null!=f&&f.type===u&&null==f.key?f.props.children:f,p(e,Array.isArray(P)?P:[P],t,n,o,i,l,c,_,s),d.base=t.__e,t.__h=null,d.__h.length&&c.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=C(n.__e,t,n,o,i,l,c,s);(f=L.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=l)&&(t.__e=_,t.__h=!!s,l[l.indexOf(_)]=null),L.__e(e,t,n)}}function j(e,t){L.__c&&L.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){L.__e(e,t.__v)}}))}function C(e,t,n,r,i,l,u,a){var _,s,f,d=n.props,h=t.props,y=t.type,v=0;if("svg"===y&&(i=!0),null!=l)for(;v<l.length;v++)if((_=l[v])&&"setAttribute"in _==!!y&&(y?_.localName===y:3===_.nodeType)){e=_,l[v]=null;break}if(null==e){if(null===y)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),l=null,a=!1}if(null===y)d===h||a&&e.data===h||(e.data=h);else{if(l=l&&T.call(e.childNodes),s=(d=n.props||R).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!a){if(null!=l)for(d={},v=0;v<e.attributes.length;v++)d[e.attributes[v].name]=e.attributes[v].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||b(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||b(e,i,t[i],n[i],r)}(e,h,d,i,a),f)t.__k=[];else if(v=t.props.children,p(e,Array.isArray(v)?v:[v],t,n,r,i&&"foreignObject"!==y,l,u,l?l[0]:n.__k&&c(n,0),a),null!=l)for(v=l.length;v--;)null!=l[v]&&o(l[v]);a||("value"in h&&void 0!==(v=h.value)&&(v!==e.value||"progress"===y&&!v||"option"===y&&v!==d.value)&&b(e,"value",v,d.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&b(e,"checked",v,d.checked,!1))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){L.__e(e,n)}}function A(e,t,n){var r,i;if(L.unmount&&L.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||w(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){L.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&A(r[i],t,n||"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__=e.__e=e.__d=void 0}function x(e,t,n){return this.constructor(e,n)}function S(e,t,n){var r,o,l;L.__&&L.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,l=[],O(t,e=(!r&&n||t).__k=i(u,null,[e]),o||R,R,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?T.call(t.childNodes):null,l,!r&&n?n:o?o.__e:t.firstChild,r),j(l,e)}function P(e,t){S(e,t,P)}function E(e,t,n){var o,i,u,a=r({},e.props);for(u in t)"key"==u?o=t[u]:"ref"==u?i=t[u]:a[u]=t[u];return arguments.length>2&&(a.children=arguments.length>3?T.call(arguments,2):n),l(e.type,a,o||e.key,i||e.ref,null)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return P})),n.d(t,"g",(function(){return L})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return h}));var T,L,U,D,M,I,N,R={},W=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;T=W.slice,L={__e:function(e,t,n,r){for(var o,i,l;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),l=o.__d),l)return o.__E=o}catch(t){e=t}throw e}},U=0,a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),s(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),s(this))},a.prototype.render=u,D=[],I="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N=function(e,t){return e.__v.__b-t.__v.__b},f.__r=0},qVkA:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),l={};if(i&&i[1])for(var a=i[1].split("&"),c=0;c<a.length;c++){var _=a[c].split("=");l[decodeURIComponent(_[0])]=decodeURIComponent(_.slice(1).join("="))}e=u(e.replace(o,"")),t=u(t||"");for(var s=Math.max(e.length,t.length),f=0;f<s;f++)if(t[f]&&":"===t[f].charAt(0)){var p=t[f].replace(/(^:|[+*?]+$)/g,""),d=(t[f].match(/[+*?]+$/)||b)[0]||"",h=~d.indexOf("+"),y=~d.indexOf("*"),v=e[f]||"";if(!v&&!y&&(d.indexOf("?")<0||h)){r=!1;break}if(l[p]=decodeURIComponent(v),h||y){l[p]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&l}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function l(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,u(t).map(a).join(""));var t}(e),e.props}function u(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function a(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function c(){var e;return""+((e=g&&g.location?g.location:g&&g.getCurrentLocation?g.getCurrentLocation():"undefined"!=typeof location?location:j).pathname||"")+(e.search||"")}function _(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=k.length;t--;)if(k[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),g&&g[t]?g[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),s(e)}function s(e){for(var t=!1,n=0;n<k.length;n++)!0===k[n].routeTo(e)&&(t=!0);for(var r=O.length;r--;)O[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return _(t)}}function p(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return f(e.currentTarget||e.target||this),d(e)}function d(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function h(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(f(t))return d(e)}}while(t=t.parentNode)}}function y(e,t){if(!e||"string"==typeof e.type)return null;var n=e.__;if(n){var r=n.__k;if(r){Array.isArray(r)||(r=[r]);var o=r.indexOf(e);-1===o&&(o=r.length);for(var i=o;i--;){var l=r[i],u=l&&(l.__e||y(l,!0));if(u)return u}}return t?void 0:y(n)}}function v(e){function t(){var t=this;m.a.call(this),n||(this.componentWillMount=function(){e((function(e){n=e&&e.default||e,t.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(e){if(n)return Object(m.e)(n,e);var r=y(t.__v),o=r&&r.nextSibling||(t.__P||t._parentDom).firstChild;return o?3===o.nodeType?o.data:Object(m.e)(o.localName,{dangerouslySetInnerHTML:E}):void 0}}var n;return t.preload=e,(t.prototype=new m.a).constructor=t,t}n.r(t);var m=n("hosL"),b={},g=null,k=[],O=[],j={},C=!1,w=function(e){function t(t){e.call(this,t),t.history&&(g=t.history),this.state={url:t.url||c()},C||("function"==typeof addEventListener&&(g||addEventListener("popstate",(function(){s(c())})),addEventListener("click",h)),C=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(m.i)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){k.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;g&&(this.unlisten=g.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),k.splice(k.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(l).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var l={url:t,matches:i};return r(l,i),delete l.ref,delete l.key,Object(m.c)(e,l)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(m.i)(n),o,!0),l=i[0]||null,u=this.previousUrl;return o!==u&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:u,active:i,current:l})),l},t}(m.a),A=function(e){return Object(m.d)("a",r({onClick:p},e))},x=function(e){return Object(m.d)(e.component,e)};w.subscribers=O,w.getCurrentUrl=c,w.route=_,w.Router=w,w.Route=x,w.Link=A,w.exec=o;var S={title:"title__I4umU",subtitle:"subtitle__0gF3H"},P=function(){return Object(m.e)("header",null,Object(m.e)("h1",{class:S.title},"Akifumi Akazawa(Tomiyama)"),Object(m.e)("p",{class:S.subtitle},"Software Engineer skilled in Web Application and Data Engineering."),Object(m.e)("nav",null,Object(m.e)("ul",null,Object(m.e)("li",null,Object(m.e)(A,{class:"fa-solid fa-terminal",href:"/"},Object(m.e)("span",{class:S.label},"Terminal"))),Object(m.e)("li",null,Object(m.e)("a",{class:"fa-brands fa-github",href:"https://github.com/atomiyama"},Object(m.e)("span",{class:S.label},"GitHub"))),Object(m.e)("li",null,Object(m.e)("a",{class:"fa-brands fa-twitter",href:"https://twitter.com/atomiyama1216"},Object(m.e)("span",{class:S.label},"Twitter"))),Object(m.e)("li",null,Object(m.e)("a",{class:"fa-brands fa-linkedin",href:"https://linkedin.com/in/atomiyama1216"},Object(m.e)("span",{class:S.label},"LinkedIn"))),Object(m.e)("li",null,Object(m.e)("a",{class:"fa-brands fa-facebook",href:"https://www.facebook.com/atomiyama1216"},Object(m.e)("span",{class:S.label},"Facebook"))),Object(m.e)("li",null,Object(m.e)("a",{class:"fa-regular fa-envelope",href:"mailto:tomisuker16@gmail.com"},Object(m.e)("span",{class:S.label},"Email"))))),Object(m.e)("hr",null))},E={},T=v((function(e){n.e(2).then(function(){var t=n("OPsQ");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)})),L=v((function(e){n.e(3).then(function(){var t=n("yKEw");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)}));t.default=function(){return Object(m.e)("div",{id:"app"},Object(m.e)(P,null),Object(m.e)("main",null,Object(m.e)(w,null,Object(m.e)(x,{path:"/",component:T}),Object(m.e)(x,{path:"/posts",component:L}))))}}});
//# sourceMappingURL=bundle.5ab8a.js.map