(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[284],{506:function(e,t,n){"use strict";n.d(t,{AK:function(){return le},eh:function(){return X},Hf:function(){return fe},xf:function(){return ae}});var r=n(178),o=n.n(r),a=n(7294),i=n.t(a,2);Math.round(1e10*Math.random());Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);var u=n(3935);"undefined"!==typeof window&&a.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let c=new Map,d=new Set;function f(){if("undefined"===typeof window)return;let e=t=>{let n=c.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),c.delete(t.target)),0===c.size)){for(let e of d)e();d.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=c.get(t.target);n||(n=new Set,c.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?f():document.addEventListener("DOMContentLoaded",f));"undefined"!==typeof window&&window.visualViewport;new Map;function l(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function s(){return l(/^Mac/)}function p(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const y=a.createContext(null);y.displayName="PressResponderContext";let v=null,h=new Set,m=!1,b=!1,w=!1;function g(e,t){for(let n of h)n(e,t)}function O(e){b=!0,function(e){return!(e.metaKey||!s()&&e.altKey||e.ctrlKey||"keyup"===e.type&&("Control"===e.key||"Shift"===e.key))}(e)&&(v="keyboard",g("keyboard",e))}function j(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(b=!0,g("pointer",e))}function S(e){p(e)&&(b=!0,v="virtual")}function E(e){e.target!==window&&e.target!==document&&(b||w||(v="virtual",g("virtual",e)),b=!1,w=!1)}function A(){b=!1,w=!0}function M(){if("undefined"===typeof window||m)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){b=!0,e.apply(this,arguments)},document.addEventListener("keydown",O,!0),document.addEventListener("keyup",O,!0),document.addEventListener("click",S,!0),window.addEventListener("focus",E,!0),window.addEventListener("blur",A,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",j,!0),document.addEventListener("pointermove",j,!0),document.addEventListener("pointerup",j,!0)):(document.addEventListener("mousedown",j,!0),document.addEventListener("mousemove",j,!0),document.addEventListener("mouseup",j,!0)),m=!0}"undefined"!==typeof document&&("loading"!==document.readyState?M():document.addEventListener("DOMContentLoaded",M));new Set;const k=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];k.join(":not([hidden]),");k.push('[tabindex]:not([tabindex="-1"]):not([disabled])');k.join(':not([hidden]):not([tabindex="-1"]),');function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function L(e){return null!=e}function I(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var u=i[a];u in e&&(t[u]=e[u])}return t}function N(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=Object.keys(e);a<i.length;a++){var u=i[a];r.includes(u)||(t[u]=e[u])}return t}function D(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=P(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var H="undefined"!==typeof window,T=Symbol("NONE"),Z=H?a.useLayoutEffect:a.useEffect;function R(e,t,n){return Array.isArray(n)?a.createElement.apply(a,[e,t].concat(n)):n||"children"in t?a.createElement(e,t,n):a.createElement(e,t)}function U(e){for(var t=x({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++)for(var u=i[a],c=0,d=Object.keys(u);c<d.length;c++){var f=d[c];t[f]=F(f,t[f],u[f])}return t}function z(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function W(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n,r=P(t);!(n=r()).done;){z(n.value,e)}}}function F(e,t,n){return t===T||n===T?null:null==t?n:null==n?t:"className"===e?o()(t,n):"style"===e?x({},t,n):"ref"===e?W(t,n):typeof t!==typeof n?n:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function G(e,t,n,r){var o=t.children,a=C(t,["children"]),i=B(o,null!=n&&n);return R(e,x({ref:r},a),i)}function K(e,t){var n=e.as,r=e.hasGap;return G(null!=n?n:"div",C(e,["as","hasGap"]),r,t)}var $=(0,a.forwardRef)(K),V=function(e){return(0,a.forwardRef)((function(t,n){var r=t.hasGap,o=C(t,["hasGap"]);return G(e,o,r,n)}))},q=Object.assign($,{div:V("div"),a:V("a"),button:V("button"),h1:V("h1"),h2:V("h2"),h3:V("h3"),h4:V("h4"),h5:V("h5"),h6:V("h6"),label:V("label"),form:V("form"),section:V("section"),head:V("head"),main:V("main"),nav:V("nav")});function B(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?a.createElement.apply(i,["div",{className:n}].concat(e)):(0,a.createElement)("div",{className:n},e):null}function Q(e,t,n,r){var o=ne(e),i=te(n,o.props);if("render"===o.type)return o.render(i,t);var u=t;"as"===o.type&&o.as&&(t===q?i.as=o.as:u=o.as);var c=i.children;o.wrapChildren&&(c=o.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:a.createElement.apply(a,[a.Fragment,{}].concat(e)):e}(c))),r&&(c=B(c,!0));var d=R(u,i,c);return o.wrap&&(d=o.wrap(d)),d}var J=new Map;function X(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),u=2;u<a;u++)i[u-2]=arguments[u];var c=Y.apply(void 0,[e,t].concat(i));if(n&&J.set(n,c),r){var d,f=o?null!=(d=J.get(o))?d:null:c;return J.clear(),f}return c}function Y(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],a=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return Q(r,e,U.apply(void 0,[t,0===u.length?{}:{children:1===u.length?u[0]:u}].concat(a)),o)}var ee=Symbol("UNSET");function te(e,t){if(!t)return e;for(var n=x({},e),r=0,o=Object.keys(t);r<o.length;r++){var a=o[r],i=e[a],u=t[a];u===ee?delete n[a]:(null!=u||"className"===a||"style"===a||a.startsWith("on")&&"function"===typeof i||(u=T),n[a]=F(a,i,u))}return n}function ne(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||a.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?x({},e,{props:e.props||{},type:"as"}):"render"in e?x({},e,{type:"render"}):"props"in e?x({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?x({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function re(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var a=o[r];n[a]=oe(e[a],t[a])}return n}function oe(e,t){var n,r;if(!e)return t;if(!t)return e;var o=ne(e),a=ne(t),i=D.apply(void 0,[o.wrap,a.wrap].filter(L)),u=D.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(L)),c=te(null!=(n=o.props)?n:{},a.props);if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:u};if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:u};var d=null!=(r="as"===a.type?a.as:void 0)?r:"as"===o.type?o.as:void 0;return x({props:c,wrap:i,wrapChildren:u},d?{as:d}:{})}function ae(e,t){var n,r,o,a,i,u,c,d,f=t.name,l=t.descendantNames,s=t.internalVariantPropNames,p=t.internalArgPropNames,y=["variants","args","overrides"],v=(a=N.apply(void 0,[I.apply(void 0,[e].concat(s))].concat(y)),i=null!=(n=e.variants)?n:{},x({},a,i)),h=(u=N.apply(void 0,[I.apply(void 0,[e].concat(p))].concat(y)),c=null!=(r=e.args)?r:{},x({},u,c)),m=re(N.apply(void 0,[I.apply(void 0,[e].concat(l))].concat(p,s,y)),null!=(o=e.overrides)?o:{}),b=N.apply(void 0,[e,"variants","args","overrides"].concat(l,s,p));Object.keys(b).length>0&&(m=re(m,((d={})[f]={props:b},d)));return{variants:v,args:h,overrides:m}}var ie=[],ue={};function ce(){return H?Object.entries(ue).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var de=void 0;function fe(e,t){return Object.assign(ue,t),de=void 0,function(){var t=(0,a.useState)()[1],n=(0,a.useRef)(de||[]);return Z((function(){var e=function(){de&&n.current.join("")!==de.join("")&&(n.current=de,t({}))};return ie.push(e),void 0===de&&(de=ce()),e(),function(){ie.splice(ie.indexOf(e),1)}}),[]),e?de||[]:de?de[de.length-1]:void 0}}H&&window.addEventListener("resize",(function(){var e=ce();de&&e.join("")===de.join("")||(de=e,u.unstable_batchedUpdates((function(){return ie.forEach((function(e){return e()}))})))}));var le=o()},178:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},110:function(e,t,n){"use strict";n.d(t,{ZP:function(){return r.ZP}});var r=n(3077)},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},2775:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=s,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(3244))&&a.__esModule?a:{default:a},c=n(3398),d=n(1165),f=n(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var y=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,d=y.length;c<d;c++){var f=y[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],s=r[f]||new Set;"name"===f&&i||!s.has(l)?(s.add(l),r[f]=s):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}var h=function(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(d.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)};t.default=h},3244:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),i=(n(450),n(9807)),u=n(7690),c=n(9828);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),l=function(e){i(n,e);var t=d(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},3179:function(){},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},5093:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},4121:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(355);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},9999:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5093);var o=n(355);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},355:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5093);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),i=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||i()}}}]);