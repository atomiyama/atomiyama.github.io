(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{OPsQ:function(e,t,n){"use strict";function o(e,t){y.options.__h&&y.options.__h(v,e,H||t),H=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:k}),n.__[e]}function r(e){return H=1,function(e,t,n){var r=o(b++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):h(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=v,!v.u)){var c=function(e,t,n){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter((function(e){return e.__c}));if(o.every((function(e){return!e.__N})))return!i||i.call(this,e,t,n);var c=!1;return o.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(c=!0)}})),!(!c&&r.__c.props===e)&&(!i||i.call(this,e,t,n))};v.u=!0;var i=v.shouldComponentUpdate,l=v.componentWillUpdate;v.componentWillUpdate=function(e,t,n){if(this.__e){var o=i;i=void 0,c(e,t,n),i=o}l&&l.call(this,e,t,n)},v.shouldComponentUpdate=c}return r.__N||r.__}(h,e)}function c(e,t){var n=o(b++,3);!y.options.__s&&p(n.__H,t)&&(n.__=e,n.i=t,v.__H.__h.push(n))}function i(e){return H=5,l((function(){return{current:e}}),[])}function l(e,t){var n=o(b++,7);return p(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function a(){for(var e;e=P.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(u),e.__H.__h.forEach(_),e.__H.__h=[]}catch(t){e.__H.__h=[],y.options.__e(t,e.__v)}}function s(e){var t,n=function(){clearTimeout(o),C&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);C&&(t=requestAnimationFrame(n))}function u(e){var t=v,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),v=t}function _(e){var t=v;e.__c=e.__(),v=t}function p(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function h(e,t){return"function"==typeof t?t(e):t}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var b,v,O,j,y=n("hosL"),g="terminal__Ns8FN",w="welcome__8TTjf",E="activeprompt__-RKgw",I="prompt__wX4A9",N="command__JBFdT",H=0,P=[],k=[],x=y.options.__b,A=y.options.__r,D=y.options.diffed,S=y.options.__c,T=y.options.unmount;y.options.__b=function(e){v=null,x&&x(e)},y.options.__r=function(e){A&&A(e),b=0;var t=(v=e.__c).__H;t&&(O===v?(t.__h=[],v.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=k,e.__N=e.i=void 0}))):(t.__h.forEach(u),t.__h.forEach(_),t.__h=[])),O=v},y.options.diffed=function(e){D&&D(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==P.push(t)&&j===y.options.requestAnimationFrame||((j=y.options.requestAnimationFrame)||s)(a)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==k&&(e.__=e.__V),e.i=void 0,e.__V=k}))),O=v=null},y.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(u),e.__h=e.__h.filter((function(e){return!e.__||_(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],y.options.__e(n,e.__v)}})),S&&S(e,t)},y.options.unmount=function(e){T&&T(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{u(e)}catch(e){t=e}})),n.__H=void 0,t&&y.options.__e(t,n.__v))};var C="function"==typeof requestAnimationFrame;var R={output:"output__Y6snD",error:"error__HYsFw",experience:"experience__mujx-",title:"title__UtO8N",description:"description__DD9lX"};const L=()=>Object(y.h)("div",{class:R.output},Object(y.h)("div",{class:R.section},Object(y.h)("p",{class:R.title},"Available Commands :"),Object(y.h)("ul",null,Object(y.h)("li",null,"help -- List of available commands"),Object(y.h)("li",null,"experience -- List of professional experiences"),Object(y.h)("li",null,"skills -- List of skills(Not Implemented)"),Object(y.h)("li",null,"education -- List of education(Not Implemented)"),Object(y.h)("li",null,"contact -- List of contact information(Not Implemented)"),Object(y.h)("li",null,"activity -- List of activities and interests(Not Implemented)"))),Object(y.h)("div",{class:R.section},Object(y.h)("p",{class:R.title},"Special Commands :"),Object(y.h)("ul",null,Object(y.h)("li",null,"clear -- Clear all command histories"),Object(y.h)("li",null,"cd -- Change location(Not Implemented)"),Object(y.h)("li",null,"ls -- List locations and files(Not Implemented)")))),F=({command:e})=>Object(y.h)("div",{class:R.error},Object(y.h)("p",null,"command not found: ",e)),V=()=>Object(y.h)("div",{class:R.output},Object(y.h)("strong",null,"Professional Experience :"),Object(y.h)("div",{class:R.experience},Object(y.h)("p",{class:R.title},Object(y.h)("strong",null,"1) Customer Reliability Engineer"),", Studyplus,Inc. Tokyo,Japan (2022/05 ~ Now)"),Object(y.h)("p",{class:R.description},"A first member of the team. Decrease Customer's anxiety and increase Customer's satisfaction by improving the reliability of the service."),Object(y.h)("ul",null,Object(y.h)("li",null,"Building Data Pipeline and Data Warehouse(~500 tables, 1billion records)"),Object(y.h)("li",null,"Implement system to detect messages between users that violate the terms of service.(1M messages/month)"))),Object(y.h)("div",{class:R.experience},Object(y.h)("p",{class:R.title},Object(y.h)("strong",null,"2) Team Leader"),", Studyplus,Inc. Tokyo,Japan (2020/01 ~ Now)"),Object(y.h)("p",{class:R.description},"As a team leader of 9 people web application group, I have lead the team to deliver features in educational field. Examples of actions I have taken are as follows."),Object(y.h)("ul",null,Object(y.h)("li",null,"Create a career ladder to clarify the career goals and current status of the members"),Object(y.h)("li",null,"Introduced scrum development and reduced project delays"))),Object(y.h)("div",{class:R.experience},Object(y.h)("p",{class:R.title},Object(y.h)("strong",null,"3) Back-End Engineer"),", Studyplus,Inc. Tokyo,Japan (2018/09 ~ 2020/12)"),Object(y.h)("p",{class:R.description},"As part of B2B SaaS Web Application Team, I have delivered features to improve the learning efficiency of students and teachers."),Object(y.h)("ul",null,Object(y.h)("li",null,"Migrate monolith Ruby on Rails App into REST API and React SPA"),Object(y.h)("li",null,"Introduce Schema Driven Development process"),Object(y.h)("li",null,"Implement front-end and back-end across ambiguous systems and environment"))),Object(y.h)("div",{class:R.experience},Object(y.h)("p",{class:R.title},Object(y.h)("strong",null,"4) System Engineer"),", Technobrain ,Inc. Tokyo,Japan (2017/09 ~ 2018/08)"),Object(y.h)("p",{class:R.description},"As a system engineer of contract software development team, I have developed a internal use buisiness operation web application."))),J=e=>e.hidden?null:Object(y.h)(y.Fragment,null,Object(y.h)("p",null,Object(y.h)("span",{class:I},B),Object(y.h)("span",{class:N},e.rawInput)),Object(y.h)(U,e)),U=({command:e})=>{switch(e){case"help":return Object(y.h)(L,null);case"experience":return Object(y.h)(V,null);case"":return null;default:return Object(y.h)(F,{command:e})}},B="guest@atomiyama.dev:~$",W=()=>{const{formRef:e,inputRef:t,commandProps:n,handleExecCmd:o}=(()=>{const e=i(null);c((()=>e.current.scrollIntoView({behavior:"smooth"})));const[t,n]=r([]),[o,l]=r(0),a=i(null),s=i("");return c((()=>{const e=e=>{var n,r;if("Enter"===e.key&&document.activeElement!==a.current&&(e.preventDefault(),null===(n=a.current)||void 0===n||n.focus()),o===t.length&&(s.current=(null===(r=a.current)||void 0===r?void 0:r.value)||""),"ArrowUp"===e.key){e.preventDefault();const n=t[o-1];n&&a.current&&(a.current.value=n.rawInput,l((e=>e-1)))}if("ArrowDown"===e.key){e.preventDefault();const n=t[o+1];n&&a.current?(a.current.value=n.rawInput,l((e=>e+1))):(a.current.value=s.current,l(t.length))}};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)}),[t,o]),{formRef:e,inputRef:a,handleExecCmd:e=>{console.log(e);const t=e.split(" ")[0],o=e.split(" ").slice(1);if("clear"===t)return n((e=>e.map((e=>f(f({},e),{},{hidden:!0})))));const r={rawInput:e,command:t,args:o};n((e=>[...e,r])),l((e=>e+1))},commandProps:t}})();return Object(y.h)("div",{class:g},Object(y.h)("div",{class:w},Object(y.h)("p",null,"Hello, there!"),Object(y.h)("p",null,"Welcome to atomiyama's CLI resume."),Object(y.h)("p",null,'Type "help" to see the list of available commands.')),n.map(((e,t)=>Object(y.h)(y.Fragment,{key:`history_${t}`},Object(y.h)(J,e)))),Object(y.h)(q,{handleExecCmd:o,formRef:e,inputRef:t}))},q=({handleExecCmd:e,formRef:t,inputRef:n})=>Object(y.h)("form",{ref:t,id:"activeprompt",class:E,onSubmit:t=>{t.preventDefault();e(t.target.command.value),t.target.command.value=""}},Object(y.h)("span",{class:I},B),Object(y.h)("input",{ref:n,type:"text",name:"command",class:N,autofocus:!0,autocomplete:"off"}));t.default=()=>Object(y.h)(W,null)}}]);
//# sourceMappingURL=route-home.chunk.d655e.esm.js.map