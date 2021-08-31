var e={store:null,root:"object"==typeof global&&global&&global.Math===Math&&global.Array===Array?global:self||window||global||function(){return this}(),mapping:{},isMultiStore:!1,ignoreAttrs:!1};
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */function t(e){var t=document.createElement("style");return t.textContent=e,t}function n(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))}function r(e){return e.children}function o(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}function s(e){return"[object Array]"===Object.prototype.toString.call(e)}function a(e,t,n,r){var o=[];return t.forEach((function(t,n){if("string"==typeof t)o[n]=p(e,t);else{var r=Object.keys(t)[0],i=t[r];if("string"==typeof i)o[n]=p(e,i);else{var s=i[0];if("string"==typeof s){var a=p(e,s);o[n]=i[1]?i[1](a):a}else{var c=[];s.forEach((function(t){c.push(p(e,t))})),o[n]=i[1].apply(null,c)}}o[r]=o[n]}})),n&&(n[r]=o),o}function c(e){return"string"==typeof e&&e?e.replace(/]/g,"").replace(/\[/g,".").split("."):[]}function p(e,t){for(var n=c(t),r=e,o=0,i=n.length;o<i;o++)r=r[n[o]];return r}!function(){if(void 0!==window.Reflect&&void 0!==window.customElements&&!window.customElements.hasOwnProperty("polyfillWrapFlushCallback")){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var u=/\B([A-Z])/g;function l(e,t,n){var r={};return e.forEach((function(e){if("string"==typeof e)r[e]=!0;else{var t=e[Object.keys(e)[0]];"string"==typeof t?r[t]=!0:"string"==typeof t[0]?r[t[0]]=!0:t[0].forEach((function(e){return r[e]=!0}))}})),t&&(t[n]=r),r}function f(e,t){if(t)for(var n=0,r=t.length;n<r;n++)if(t[n]===e){t.splice(n,1);break}}var h=[];function d(t,n){var o,i,s,a,c=[];for(a=arguments.length;a-- >2;)h.push(arguments[a]);for(n&&null!=n.children&&(h.length||h.push(n.children),delete n.children);h.length;)if((i=h.pop())&&void 0!==i.pop)for(a=i.length;a--;)h.push(i[a]);else"boolean"==typeof i&&(i=null),(s="function"!=typeof t)&&(null==i?i="":"number"==typeof i?i=String(i):"string"!=typeof i&&(s=!1)),s&&o?c[c.length-1]+=i:0===c.length?c=[i]:c.push(i),o=s;if(t===r)return c;var p={nodeName:t,children:c,attributes:null==n?void 0:n,key:null==n?void 0:n.key};return void 0!==e.vnode&&e.vnode(p),p}var y=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}var g={};function m(e){return this._listeners[e.type](e)}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function S(e,t,n,r,o,s){if("className"===t&&(t="class"),"o"==t[0]&&"-"==t[1])g[t]&&g[t](e,r,s);else if("key"===t);else if("ref"===t)i(n,null),i(r,e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var a in n)a in r||(e.style[a]="");for(var a in r)e.style[a]="number"==typeof r[a]&&!1===y.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("_"==t[0]&&"o"==t[1]&&"n"==t[2]&&"WeElement"===e.constructor.is)P(e,t.replace("_",""),r,n);else if("o"==t[0]&&"n"==t[1])P(e,t,r,n);else if("INPUT"===e.nodeName&&"value"===t)e[t]=null==r?"":r;else if("list"!==t&&"type"!==t&&"css"!==t&&!o&&t in e&&""!==r){try{e[t]=null==r?"":r}catch(p){}null!=r&&!1!==r||"spellcheck"==t||(e.pureRemoveAttribute?e.pureRemoveAttribute(t):e.removeAttribute(t))}else{var c=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.pureRemoveAttribute?e.pureRemoveAttribute(t):e.removeAttribute(t):"function"!=typeof r&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.pureSetAttribute?e.pureSetAttribute(t,r):e.setAttribute(t,r))}else e.className=r||""}function w(t){return this._listeners[t.type](e.event&&e.event(t)||t)}function P(e,t,n,r){var o=t!==(t=t.replace(/Capture$/,"")),i=t.toLowerCase();t=(i in e?i:t).slice(2),n?r||e.addEventListener(t,w,o):e.removeEventListener(t,w,o),(e._listeners||(e._listeners={}))[t]=n}var x=0,E=!1,N=!1;function O(e,t,n,o,i){var a;if(e||t)return x++||(E=null!=n&&void 0!==n.ownerSVGElement,N=null!=e&&!("prevProps"in e)),t&&t.nodeName===r&&(t=t.children),s(t)?n?j(n,t,N,o,i):(a=[],t.forEach((function(t,n){var r=C(0===n?e:null,t,o,i);a.push(r)}))):(s(e)?e.forEach((function(e,n){0===n?a=C(e,t,o,i):k(e,!1)})):a=C(e,t,o,i),n&&a.parentNode!==n&&n.appendChild(a)),--x||(N=!1),a}function C(t,r,o,i){t&&r&&t.props&&(t.props.children=r.children);var s=t,a=E;if(null!=r&&"boolean"!=typeof r||(r=""),"string"==typeof r||"number"==typeof r)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=r&&(t.nodeValue=r):(s=document.createTextNode(r),t&&(t.parentNode&&t.parentNode.replaceChild(s,t),k(t,!0))),s.prevProps=!0,s;var c,p,u=r.nodeName;if("function"==typeof u)for(var l in e.mapping)if(e.mapping[l]===u){u=l,r.nodeName=l;break}if(E="svg"===u||"foreignObject"!==u&&E,u=String(u),(!t||!v(t,u))&&(c=u,(p=E?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c)).normalizedNodeName=c,s=p,t)){for(;t.firstChild;)s.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(s,t),k(t,!0)}var f=s.firstChild,h=s.prevProps,d=r.children;if(null==h){h=s.prevProps={};for(var y=s.attributes,g=y.length;g--;)h[y[g].name]=y[g].value}return!N&&d&&1===d.length&&"string"==typeof d[0]&&null!=f&&void 0!==f.splitText&&null==f.nextSibling?f.nodeValue!=d[0]&&(f.nodeValue=d[0]):(d&&d.length||null!=f)&&("WeElement"==s.constructor.is&&s.constructor.noSlot||j(s,d,N||null!=h.dangerouslySetInnerHTML,o,i)),function(e,t,r,o,i){var s,a,c=e.update;e.receiveProps&&(a=Object.assign({},r));for(s in r)t&&null!=t[s]||null==r[s]||(S(e,s,r[s],r[s]=void 0,E,o),c&&delete e.props[s]);for(s in t)if(c&&"object"==typeof t[s]&&"ref"!==s){"style"===s&&S(e,s,r[s],r[s]=t[s],E,o);var p=n(s);e.props[p]=r[p]=t[s]}else if("children"!==s&&(!(s in r)||t[s]!==("value"===s||"checked"===s?e[s]:r[s])))if(S(e,s,r[s],t[s],E,o),-1!==e.nodeName.indexOf("-")){e.props=e.props||{};var u=n(s);e.props[u]=r[u]=t[s]}else r[s]=t[s];c&&!i&&e.parentNode&&!1!==e.receiveProps(e.props,a)&&e.update()}(s,r.attributes,h,o,i),s.props&&(s.props.children=r.children),E=a,s}function j(t,n,r,o,i){var s,a,c,p,u,l,f,h,d=t.childNodes,y=[],g={},m=0,S=0,w=d.length,P=0,x=n?n.length:0;if(0!==w)for(var E=0;E<w;E++){var N=d[E],O=N.prevProps;null!=(j=x&&O?N._component?N._component.__key:O.key:null)?(m++,g[j]=N):(O||(void 0!==N.splitText?!r||N.nodeValue.trim():r))&&(y[P++]=N)}if(0!==x)for(E=0;E<x;E++){var j;if(u=null,null!=(j=(p=n[E]).key))m&&void 0!==g[j]&&(u=g[j],g[j]=void 0,m--);else if(!u&&S<P)for(s=S;s<P;s++)if(void 0!==y[s]&&(l=a=y[s],h=r,"string"==typeof(f=p)||"number"==typeof f?void 0!==l.splitText:"string"==typeof f.nodeName?!l._componentConstructor&&v(l,f.nodeName):"function"==typeof f.nodeName?e.mapping[l.nodeName.toLowerCase()]===f.nodeName:h||l._componentConstructor===f.nodeName)){u=a,y[s]=void 0,s===P-1&&P--,s===S&&S++;break}u=C(u,p,o,i),c=d[E],u&&u!==t&&u!==c&&(null==c?t.appendChild(u):u===c.nextSibling?b(c):t.insertBefore(u,c))}if(m)for(var E in g)void 0!==g[E]&&k(g[E],!1);for(;S<=P;)void 0!==(u=y[P--])&&k(u,!1)}function k(e,t){null!=e.prevProps&&e.prevProps.ref&&("function"==typeof e.prevProps.ref?e.prevProps.ref(null):e.prevProps.ref.current&&(e.prevProps.ref.current=null)),!1!==t&&null!=e.prevProps||b(e),function(e){e=e.lastChild;for(;e;){var t=e.previousSibling;k(e,!0),e=t}}(e)}var T=0,M=function(n){function r(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,n.call(this));return e.props=Object.assign({},e.constructor.defaultProps,e.props),e.elementId=T++,e.computed={},e.isInstalled=!1,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,n),r.prototype.connectedCallback=function(){for(var n,r,o=this.parentNode;o&&!this.store;)this.store=o.store,o=o.parentNode||o.host;if(this.attrsToProps(),this.props.use&&(this.use=this.props.use),this.props.useSelf&&(this.use=this.props.useSelf),this.use){var i="function"==typeof this.use?this.use():this.use;if(e.isMultiStore){var c={},p={};for(var u in i)c[u]={},p[u]={},l(i[u],c,u),a(this.store[u].data,i[u],p,u),this.store[u].instances.push(this);this.using=p,this._updatePath=c}else this._updatePath=l(i),this.using=a(this.store.data,i),this.store.instances.push(this)}if(this.useSelf){var f="function"==typeof this.useSelf?this.useSelf():this.useSelf;if(e.isMultiStore){var h={},d={};for(var y in f)l(f[y],h,y),a(this.store[y].data,f[y],d,y),this.store[y].updateSelfInstances.push(this);this.usingSelf=d,this._updateSelfPath=h}else this._updateSelfPath=l(f),this.usingSelf=a(this.store.data,f),this.store.updateSelfInstances.push(this)}if(this.compute)for(var v in this.compute)this.computed[v]=this.compute[v].call(e.isMultiStore?this.store:this.store.data);if(this.beforeInstall(),this.install(),this.afterInstall(),this.constructor.isLightDom)n=this;else if(this.shadowRoot)for(n=this.shadowRoot;r=n.firstChild;)n.removeChild(r);else n=this.attachShadow({mode:"open"});var g=this.constructor.css;if(g)if("string"==typeof g){var m=new CSSStyleSheet;m.replaceSync(g),n.adoptedStyleSheets=[m]}else if("[object Array]"===Object.prototype.toString.call(g)){var b=[];g.forEach((function(e){if("string"==typeof e){var t=new CSSStyleSheet;t.replaceSync(e),b.push(t)}else b.push(e);n.adoptedStyleSheets=b}))}else n.adoptedStyleSheets=[g];this.beforeRender(),e.afterInstall&&e.afterInstall(this);var S=this.render(this.props,this.store);this.rootNode=O(null,S,null,this),this.rendered(),this.css&&n.appendChild(t("function"==typeof this.css?this.css():this.css)),this.props.css&&(this._customStyleElement=t(this.props.css),this._customStyleContent=this.props.css,n.appendChild(this._customStyleElement)),s(this.rootNode)?this.rootNode.forEach((function(e){n.appendChild(e)})):this.rootNode&&n.appendChild(this.rootNode),this.installed(),this.isInstalled=!0},r.prototype.disconnectedCallback=function(){if(this.uninstall(),this.isInstalled=!1,this.store)if(e.isMultiStore)for(var t in this.store){var n=this.store[t];f(this,n.instances),f(this,n.updateSelfInstances)}else f(this,this.store.instances),f(this,this.store.updateSelfInstances)},r.prototype.update=function(e,t){this._willUpdate=!0,this.beforeUpdate(),this.beforeRender(),this._customStyleContent!=this.props.css&&(this._customStyleContent=this.props.css,this._customStyleElement.textContent=this._customStyleContent),this.attrsToProps(e);var n=this.render(this.props,this.store);this.rendered(),this.rootNode=O(this.rootNode,n,this.constructor.isLightDom?this:this.shadowRoot,this,t),this._willUpdate=!1,this.updated()},r.prototype.forceUpdate=function(){this.update(!0)},r.prototype.updateProps=function(e){var t=this;Object.keys(e).forEach((function(n){t.props[n]=e[n],t.prevProps&&(t.prevProps[n]=e[n])})),this.forceUpdate()},r.prototype.updateSelf=function(e){this.update(e,!0)},r.prototype.removeAttribute=function(e){n.prototype.removeAttribute.call(this,e),this.isInstalled&&this.update()},r.prototype.setAttribute=function(e,t){t&&"object"==typeof t?n.prototype.setAttribute.call(this,e,JSON.stringify(t)):n.prototype.setAttribute.call(this,e,t),this.isInstalled&&this.update()},r.prototype.pureRemoveAttribute=function(e){n.prototype.removeAttribute.call(this,e)},r.prototype.pureSetAttribute=function(e,t){n.prototype.setAttribute.call(this,e,t)},r.prototype.attrsToProps=function(t){if(!(e.ignoreAttrs||t||this.store&&this.store.ignoreAttrs)){var n=this;n.props.css=n.getAttribute("css");var r=this.constructor.propTypes;r&&Object.keys(r).forEach((function(e){var t,o,i=r[e],s=n.getAttribute(e.replace(u,"-$1").toLowerCase());if(null!==s)switch(i){case String:n.props[e]=s;break;case Number:n.props[e]=Number(s);break;case Boolean:n.props[e]="false"!==s&&"0"!==s;break;case Array:case Object:":"===s[0]?n.props[e]=(t=s.substr(1),o=Omi.$,c(t).forEach((function(e){o=o[e]})),o):n.props[e]=JSON.parse(s.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g,'"$2":$4').replace(/'([\s\S]*?)'/g,'"$1"').replace(/,(\s*})/g,"$1"))}else n.constructor.defaultProps&&n.constructor.defaultProps.hasOwnProperty(e)?n.props[e]=n.constructor.defaultProps[e]:n.props[e]=null}))}},r.prototype.fire=function(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t}))},r.prototype.beforeInstall=function(){},r.prototype.install=function(){},r.prototype.afterInstall=function(){},r.prototype.installed=function(){},r.prototype.uninstall=function(){},r.prototype.beforeUpdate=function(){},r.prototype.updated=function(){},r.prototype.beforeRender=function(){},r.prototype.rendered=function(){},r.prototype.receiveProps=function(){},r}(HTMLElement);M.is="WeElement";
/*!
 * https://github.com/Palindrom/JSONPatcherProxy
 * (c) 2017 Starcounter
 * MIT license
 */
var _=function(){function e(e){return-1==e.indexOf("/")&&-1==e.indexOf("~")?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function t(e,t){for(var n=[],r=e.parenthoodMap.get(t);r&&r.path;)n.unshift(r.path),r=e.parenthoodMap.get(r.parent);return n.length?"/"+n.join("/"):""}function n(){var e=this;this.defaultCallback=function(t){e.isRecording&&e.patches.push(t),e.userCallback&&e.userCallback(t)},this.isObserving=!0}function r(){this.defaultCallback=function(){},this.isObserving=!1}function o(e,t){this.isProxifyingTreeNow=!1,this.isObserving=!1,this.proxifiedObjectsMap=new Map,this.parenthoodMap=new Map,"boolean"!=typeof t&&(t=!0),this.showDetachedWarning=t,this.originalObject=e,this.cachedProxy=null,this.isRecording=!1,this.userCallback,this.resume=n.bind(this),this.pause=r.bind(this)}return o.deepClone=function(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}},o.escapePathComponent=e,o.prototype.generateProxyAtPath=function(n,r,o){var i=this;if(!r)return r;var s={set:function(n,r,o,s){return function(n,r,o,i){var s=t(n,r)+"/"+e(o);if(n.proxifiedObjectsMap.has(i)){var a=n.proxifiedObjectsMap.get(i);n.parenthoodMap.set(a.originalObject,{parent:r,path:o})}var c=n.proxifiedObjectsMap.get(i);c&&!n.isProxifyingTreeNow&&(c.inherited=!0),i&&"object"==typeof i&&!n.proxifiedObjectsMap.has(i)&&(n.parenthoodMap.set(i,{parent:r,path:o}),i=n._proxifyObjectTreeRecursively(r,i,o));var p={op:"remove",path:s};if(void 0===i){if(!Array.isArray(r)&&!r.hasOwnProperty(o))return Reflect.set(r,o,i);Array.isArray(r)&&(p.op="replace",p.value=null);var u=n.proxifiedObjectsMap.get(r[o]);u&&(n.parenthoodMap.delete(r[o]),n.disableTrapsForProxy(u),n.proxifiedObjectsMap.delete(u))}else{if(Array.isArray(r)&&!Number.isInteger(+o.toString()))return"length"!=o&&console.warn("JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch"),Reflect.set(r,o,i);p.op="add",r.hasOwnProperty(o)&&(void 0!==r[o]||Array.isArray(r))&&(p.op="replace"),p.value=i}p.oldValue=r[o];var l=Reflect.set(r,o,i);return n.defaultCallback(p),l}(i,n,r,o)},deleteProperty:function(n,r){return function(n,r,o){if(void 0!==r[o]){var i=t(n,r)+"/"+e(o),s=n.proxifiedObjectsMap.get(r[o]);s&&(s.inherited?s.inherited=!1:(n.parenthoodMap.delete(s.originalObject),n.disableTrapsForProxy(s),n.proxifiedObjectsMap.delete(r[o])));var a=Reflect.deleteProperty(r,o);return n.defaultCallback({op:"remove",path:i}),a}}(i,n,r)}},a=Proxy.revocable(r,s);return a.trapsInstance=s,a.originalObject=r,this.parenthoodMap.set(r,{parent:n,path:o}),this.proxifiedObjectsMap.set(a.proxy,a),a.proxy},o.prototype._proxifyObjectTreeRecursively=function(t,n,r){for(var o in n)n.hasOwnProperty(o)&&n[o]instanceof Object&&(n[o]=this._proxifyObjectTreeRecursively(n,n[o],e(o)));return this.generateProxyAtPath(t,n,r)},o.prototype.proxifyObjectTree=function(e){this.pause(),this.isProxifyingTreeNow=!0;var t=this._proxifyObjectTreeRecursively(void 0,e,"");return this.isProxifyingTreeNow=!1,this.resume(),t},o.prototype.disableTrapsForProxy=function(e){if(this.showDetachedWarning){var t="You're accessing an object that is detached from the observedObject tree, see https://github.com/Palindrom/JSONPatcherProxy#detached-objects";e.trapsInstance.set=function(e,n,r){return console.warn(t),Reflect.set(e,n,r)},e.trapsInstance.set=function(e,n,r){return console.warn(t),Reflect.set(e,n,r)},e.trapsInstance.deleteProperty=function(e,t){return Reflect.deleteProperty(e,t)}}else delete e.trapsInstance.set,delete e.trapsInstance.get,delete e.trapsInstance.deleteProperty},o.prototype.observe=function(e,t){if(!e&&!t)throw new Error("You need to either record changes or pass a callback");return this.isRecording=e,this.userCallback=t,e&&(this.patches=[]),this.cachedProxy=this.proxifyObjectTree(this.originalObject),this.cachedProxy},o.prototype.generate=function(){if(!this.isRecording)throw new Error("You should set record to true to get patches later");return this.patches.splice(0,this.patches.length)},o.prototype.revoke=function(){this.proxifiedObjectsMap.forEach((function(e){e.revoke()}))},o.prototype.disableTraps=function(){this.proxifiedObjectsMap.forEach(this.disableTrapsForProxy,this)},o}();function R(e,t){t.update(e)}function A(e,t){if(e.compute)for(var n in e.compute)e.computed[n]=e.compute[n].call(t?e.store:e.store.data)}function I(e,t){for(var n in e){if(t[n])return!0;for(var r in t)if(L(n,r))return!0}return!1}function L(e,t){if(0===e.indexOf(t)){var n=e.substr(t.length,1);if("["===n||"."===n)return!0}return!1}function D(e){var t="",n=e.replace("/","").split("/"),r=n.length;return n.forEach((function(e,n){n<r-1&&(n?isNaN(Number(e))?t+="."+e:t+="["+e+"]":t+=e)})),t}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var H=["use","useSelf"];function z(t,n,r){if(!customElements.get(t)&&!e.mapping[t])if("WeElement"===n.is)customElements.define(t,n),e.mapping[t]=n;else{r="string"==typeof r?{css:r}:r||{};var o=function(e){function t(){var n,o;W(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return n=o=F(this,e.call.apply(e,[this].concat(s))),o.compute=r.compute,F(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return n.call(this,this)},t}(M);o.css=r.css,o.propTypes=r.propTypes,o.defaultProps=r.defaultProps,o.isLightDom=r.isLightDom;var i=function(e){"function"==typeof r[e]&&(o.prototype[e]=function(){return r[e].apply(this,arguments)})};for(var s in r)i(s);H.forEach((function(e){r[e]&&"function"!==r[e]&&(o.prototype[e]=function(){return r[e]})})),customElements.define(t,o),e.mapping[t]=o}}function V(e){return function(t){z(e,t)}}var B={}.hasOwnProperty;function $(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=$.apply(null,n);o&&e.push(o)}else if("object"===r)for(var i in n)B.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}function J(){var e=Array.prototype.slice.call(arguments,0),t=e[0],n=e.slice(1);if(t.class?(n.unshift(t.class),delete t.class):t.className&&(n.unshift(t.className),delete t.className),n.length>0)return{class:$.apply(null,n)}}!function(){if(!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument("boot"),n=new WeakMap,r="object"==typeof DOMException?Error:DOMException,o=Object.defineProperty,i=Array.prototype.forEach,s=/@import.+?;?$/gm,a=CSSStyleSheet.prototype;a.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},a.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};var c=new WeakMap,p=new WeakMap,u=new WeakMap,l=C.prototype;l.replace=function(e){try{return this.replaceSync(e),Promise.resolve(this)}catch(t){return Promise.reject(t)}},l.replaceSync=function(e){if(O(this),"string"==typeof e){var t=this,n=c.get(t).ownerNode;n.textContent=function(e){var t=e.replace(s,"");return t!==e&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.trim()}(e),c.set(t,n.sheet),p.get(t).forEach((function(e){e.isConnected()&&N(t,E(t,e))}))}},o(l,"cssRules",{configurable:!0,enumerable:!0,get:function(){return O(this),c.get(this).cssRules}}),["addImport","addPageRule","addRule","deleteRule","insertRule","removeImport","removeRule"].forEach((function(e){l[e]=function(){var t=this;O(t);var n=arguments,r=c.get(t),o=p.get(t),i=r[e].apply(r,n);return o.forEach((function(r){if(r.isConnected()){var o=E(t,r).sheet;o[e].apply(o,n)}})),i}})),o(C,Symbol.hasInstance,{configurable:!0,value:P});var f={childList:!0,subtree:!0},h=new WeakMap,d=new WeakMap,y=new WeakMap,v=new WeakMap,g=R.prototype;if(g.isConnected=function(){var e=d.get(this);return e instanceof Document?"loading"!==e.readyState:function(e){return"isConnected"in e?e.isConnected:document.contains(e)}(e.host)},g.connect=function(){var e=M(this);v.get(this).observe(e,f),y.get(this).length>0&&_(this),T(e,(function(e){j(e).connect()}))},g.disconnect=function(){v.get(this).disconnect()},g.update=function(e){var t=this,n=d.get(t)===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Iterator getter is not callable.");if(!e.every(P))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Failed to convert value to 'CSSStyleSheet'");if(e.some(x))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+n+": Can't adopt non-constructed stylesheets");t.sheets=e;var r,o,i=y.get(t),s=(r=e).filter((function(e,t){return r.indexOf(e)===t}));(o=s,i.filter((function(e){return-1===o.indexOf(e)}))).forEach((function(e){var n;(n=E(e,t)).parentNode.removeChild(n),function(e,t){u.get(e).delete(t),p.set(e,p.get(e).filter((function(e){return e!==t})))}(e,t)})),y.set(t,s),t.isConnected()&&s.length>0&&_(t)},window.CSSStyleSheet=C,k(Document),"ShadowRoot"in window){k(ShadowRoot);var m=Element.prototype,b=m.attachShadow;m.attachShadow=function(e){var t=b.call(this,e);return"closed"===e.mode&&n.set(this,t),t}}var S=j(document);S.isConnected()?S.connect():document.addEventListener("DOMContentLoaded",S.connect.bind(S))}function w(e){return e.shadowRoot||n.get(e)}function P(e){return"object"==typeof e&&(l.isPrototypeOf(e)||a.isPrototypeOf(e))}function x(e){return"object"==typeof e&&a.isPrototypeOf(e)}function E(e,t){return u.get(e).get(t)}function N(e,t){requestAnimationFrame((function(){var n,r;!function(e){for(var t=0;t<e.cssRules.length;t++)e.deleteRule(0)}(t.sheet),n=c.get(e),r=t.sheet,i.call(n.cssRules,(function(e,t){r.insertRule(e.cssText,t)}))}))}function O(e){if(!c.has(e))throw new TypeError("Illegal invocation")}function C(){var e=this,n=document.createElement("style");t.body.appendChild(n),c.set(e,n.sheet),p.set(e,[]),u.set(e,new WeakMap)}function j(e){var t=h.get(e);return t||(t=new R(e),h.set(e,t)),t}function k(e){o(e.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return j(this).sheets},set:function(e){j(this).update(e)}})}function T(e,t){for(var n=document.createNodeIterator(e,NodeFilter.SHOW_ELEMENT,(function(e){return w(e)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),r=void 0;r=n.nextNode();)t(w(r))}function M(e){var t=d.get(e);return t instanceof Document?t.body:t}function _(e){var t=document.createDocumentFragment(),n=y.get(e),r=v.get(e),o=M(e);r.disconnect(),n.forEach((function(n){t.appendChild(E(n,e)||function(e,t){var n=document.createElement("style");return u.get(e).set(t,n),p.get(e).push(t),n}(n,e))})),o.insertBefore(t,null),r.observe(o,f),n.forEach((function(t){N(t,E(t,e))}))}function R(t){var n=this;n.sheets=[],d.set(n,t),y.set(n,[]),v.set(n,new MutationObserver((function(t,r){document?t.forEach((function(t){e||i.call(t.addedNodes,(function(e){e instanceof Element&&T(e,(function(e){j(e).connect()}))})),i.call(t.removedNodes,(function(t){t instanceof Element&&(function(e,t){return t instanceof HTMLStyleElement&&y.get(e).some((function(t){return E(t,e)}))}(n,t)&&_(n),e||T(t,(function(e){j(e).disconnect()})))}))})):r.disconnect()})))}}(),d.f=r;var U=M,q=z,Y=e.mapping,G={tag:V,WeElement:M,Component:U,render:function(e,t,n){return t="string"==typeof t?document.querySelector(t):t,n&&(n.data&&function(e,t){e.instances=[],e.updateSelfInstances=[],function(e,t){e.update=function(n){Object.keys(n).length>0&&(this.instances.forEach((function(r){A(r,t),t?r._updatePath&&r._updatePath[t]&&I(n,r._updatePath[t])&&(r.use&&a(e.data,("function"==typeof r.use?r.use():r.use)[t],r.using,t),r.update()):r._updatePath&&I(n,r._updatePath)&&(r.use&&(r.using=a(e.data,"function"==typeof r.use?r.use():r.use)),r.update())})),this.updateSelfInstances.forEach((function(r){A(r,t),t?r._updateSelfPath&&r._updateSelfPath[t]&&I(n,r._updateSelfPath[t])&&(r.useSelf&&a(e.data,("function"==typeof r.useSelf?r.useSelf():r.useSelf)[t],r.usingSelf,t),r.updateSelf()):r._updateSelfPath&&I(n,r._updateSelfPath)&&(r.usingSelf=a(e.data,"function"==typeof r.useSelf?r.useSelf():r.useSelf),r.updateSelf())})),this.onChange&&this.onChange(n))}}(e,t),e.data=new _(e.data).observe(!1,(function(t){var n,r,o={};if("remove"===t.op){var i=function(e,t){for(var n=e.replace("/","").split("/"),r=t.data[n[0]],o=1,i=n.length;o<i-1;o++)r=r[n[o]];return{k:D(e),v:r}}(t.path,e);o[i.k]=i.v,R(o,e)}else{o[(n=t.path,r="",n.replace("/","").split("/").forEach((function(e,t){t?isNaN(Number(e))?r+="."+e:r+="["+e+"]":r+=e})),r)]=t.value,R(o,e)}}))}(n),t.store=n),O(null,e,t,!1)},h:d,createElement:d,options:e,define:z,cloneElement:function(e,t){return d(e.nodeName,o(o({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)},getHost:function(e){for(var t=e.parentNode;t;){if(t.host)return t.host;if(t.shadowRoot&&t.shadowRoot.host)return t.shadowRoot.host;t=t.parentNode}},rpx:function(e){return e.replace(/([1-9]\d*|0)(\.\d*)*rpx/g,(function(e,t){return window.innerWidth*Number(t)/750+"px"}))},defineElement:q,classNames:$,extractClass:J,createRef:function(){return{}},o:function(e){return JSON.stringify(e)},elements:Y,$:{},extend:function(e,t){g["o-"+e]=t},get:function(e,t){for(var n=c(t),r=e,o=0,i=n.length;o<i;o++)r=r[n[o]];return r},set:function(e,t,n){for(var r=c(t),o=e,i=0,s=r.length;i<s;i++)i===s-1?o[r[i]]=n:o=o[r[i]]},bind:function(e,t,n){e._listeners=e._listeners||{},e._listeners[t]=n,e.addEventListener(t,m)},unbind:function(e,t){e.removeEventListener(t,m)},JSONProxy:_};e.root.Omi=G,e.root.omi=G,e.root.Omi.version="6.19.23";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Z=function(e,t){return(Z=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};var K=function(){return(K=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Z(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.beforeRender=function(){this.pageNum=Math.ceil(this.props.total/this.props.pageSize)},t.prototype.goto=function(e){this.updateProps({currentPage:e}),this.fire("change",e)},t.prototype.render=function(e){var t=[],n=this.getInterval();if(n[0]>0&&e.numEdge>0){for(var r=Math.min(e.numEdge,n[0]),o=0;o<r;o++)t.push(this.getItem(o,o+1));e.numEdge<n[0]&&e.ellipseText&&t.push(d("li",{class:"o-icon more btn-quicknext o-icon-more"}))}for(o=n[0];o<n[1];o++)t.push(this.getItem(o,o+1));if(n[1]<this.pageNum&&e.numEdge>0){this.pageNum-e.numEdge>n[1]&&e.ellipseText&&t.push(d("li",{class:"o-icon more btn-quicknext o-icon-more"}));for(o=Math.max(this.pageNum-e.numEdge,n[1]);o<this.pageNum;o++)t.push(this.getItem(o,o+1))}return d("div",K({},J(e,"o-pagination is-background")),d("ul",{class:"o-pager"},d("li",{key:"prev"}," ",e.prevShow&&this.getPrev()," "),t.map((function(e){return e})),d("li",{key:"next"}," ",e.nextShow&&this.getNext()))," ")},t.prototype.getInterval=function(){var e=Math.ceil(this.props.numDisplay/2),t=this.pageNum-this.props.numDisplay;return[this.props.currentPage>e?Math.max(Math.min(this.props.currentPage-e,t),0):0,this.props.currentPage>e?Math.min(this.props.currentPage+e,this.pageNum):Math.min(this.props.numDisplay,this.pageNum)]},t.prototype.getPrev=function(){var e=this;return 0===this.props.currentPage?d("button",{type:"button",class:"btn-prev",disabled:!0},d("svg",{viewBox:"64 64 896 896",class:"","data-icon":"left",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d("path",{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}))):d("button",{type:"button",class:"btn-prev",onclick:function(t){e.goto(e.props.currentPage-1)}},d("svg",{viewBox:"64 64 896 896",class:"","data-icon":"left",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d("path",{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"})))},t.prototype.getNext=function(){var e=this;return this.props.currentPage===this.pageNum-1?d("button",{type:"button",class:"btn-next",disabled:!0},d("svg",{viewBox:"64 64 896 896",class:"","data-icon":"right",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}))):d("button",{type:"button",class:"btn-next",onclick:function(t){e.goto(e.props.currentPage+1)}},d("svg",{viewBox:"64 64 896 896",class:"","data-icon":"right",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"})))},t.prototype.getItem=function(e,t){var n=this;return this.props.currentPage===e?d("li",{class:"number active"},d("button",null,t)):d("li",{class:"number",onclick:function(t){n.goto(e)}},d("button",null,t))},t.css="div {\n  color: rgba(0, 0, 0, 0.87); }\n\n* {\n  box-sizing: border-box; }\n\nul,\nli {\n  padding: 0;\n  margin: 0; }\n\nli {\n  display: inline-block;\n  min-width: 32px;\n  height: 32px;\n  vertical-align: middle;\n  line-height: 32px;\n  text-align: center;\n  margin: 0 3px 0 3px;\n  border-radius: 3px;\n  font-size: 12px;\n  margin-right: 2px; }\n\n.o-pager {\n  display: inline-block; }\n\nbutton {\n  width: 32px;\n  height: 32px;\n  appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  background: none;\n  border-radius: 3px;\n  cursor: pointer;\n  outline: none;\n  border-radius: 50%; }\n\nbutton:hover {\n  background-color: rgba(7, 193, 96, 0.1);\n  background-color: var(--o-primary-fade-lot, rgba(7, 193, 96, 0.1)); }\n\nbutton:not(disabled):active {\n  color: white;\n  background-color: #059048;\n  background-color: var(--o-primary-active, #059048); }\n\nbutton:disabled {\n  pointer-events: none;\n  border-color: #eee; }\n\n.active button:hover {\n  background-color: rgba(7, 193, 96, 0.618);\n  background-color: var(--o-primary-fade-little, rgba(7, 193, 96, 0.618)); }\n\n.active button {\n  color: white;\n  background-color: #07c160;\n  background-color: var(--o-primary, #07c160); }\n\n.more:after {\n  content: '...'; }\n\n.more {\n  border: none;\n  cursor: default; }\n\nsvg {\n  position: relative;\n  top: 2px; }\n",t.defaultProps={total:0,pageSize:10,numDisplay:5,currentPage:0,numEdge:3,linkTo:"#",prevText:"Prev",nextText:"Next",ellipseText:"...",prevShow:!0,nextShow:!0},t.propTypes={total:Number,pageSize:Number,numDisplay:Number,currentPage:Number,numEdge:Number,linkTo:String,prevText:String,nextText:String,ellipseText:String,prevShow:Boolean,nextShow:Boolean},t=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([V("o-pagination")],t)}(M);
