function b(a){return f(a)||e(a)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function f(a){if(Array.isArray(a))return a}function g(a){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){g=function(a){return typeof a}}else{g=function(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a}}return g(a)}function j(a,b){var c=[];var d=[];var e=arguments.length;while(e-->2){c.push(arguments[e])}while(c.length){var f=c.pop();if(f&&f.pop){for(e=f.length;e--;){c.push(f[e])}}else if(f!=null&&f!==true&&f!==false){d.push(f)}}return typeof a==="function"?a(b||{},d):{nodeName:a,attributes:b||{},children:d,key:b&&b.key}}function h(a,b,c,d){var v=[].map;var w=d&&d.children[0]||null;var x=w&&e(w);var y=[];var z;var A=true;var B=j(a);var C=m([],B,j(b));h();return C;function e(a){return{nodeName:a.nodeName.toLowerCase(),attributes:{},children:v.call(a.childNodes,function(a){return a.nodeType===3?a.nodeValue:e(a)})}}function f(a){return typeof a==="function"?f(a(B,C)):a!=null?a:""}function g(){z=!z;var a=f(c);if(d&&!z){w=u(d,w,x,x=a)}A=false;while(y.length){y.pop()()}}function h(){if(!z){z=true;setTimeout(g)}}function j(a,b){var c={};for(var d in a){c[d]=a[d]}for(var d in b){c[d]=b[d]}return c}function k(a,b,c){var d={};if(a.length){d[a[0]]=a.length>1?k(a.slice(1),b,c[a[0]]):b;return j(c,d)}return b}function l(a,b){var c=0;while(c<a.length){b=b[a[c++]]}return b}function m(a,b,c){for(var d in c){typeof c[d]==="function"?function(d,e){c[d]=function(d){var f=e(d);if(typeof f==="function"){f=f(l(a,B),c)}if(f&&f!==(b=l(a,B))&&!f.then){h(B=k(a,j(b,f),B))}return f}}(d,c[d]):m(a.concat(d),b[d]=j(b[d]),c[d]=j(c[d]))}return c}function n(a){return a?a.key:null}function o(a){return a.currentTarget.events[a.type](a)}function p(a,b,c,d,e){if(b==="key"){}else if(b==="style"){if(typeof c==="string"){a.style.cssText=c}else{if(typeof d==="string")d=a.style.cssText="";for(var f in j(d,c)){var g=c==null||c[f]==null?"":c[f];if(f[0]==="-"){a.style.setProperty(f,g)}else{a.style[f]=g}}}}else{if(b[0]==="o"&&b[1]==="n"){b=b.slice(2);if(a.events){if(!d)d=a.events[b]}else{a.events={}}a.events[b]=c;if(c){if(!d){a.addEventListener(b,o)}}else{a.removeEventListener(b,o)}}else if(b in a&&b!=="list"&&b!=="type"&&b!=="draggable"&&b!=="spellcheck"&&b!=="translate"&&!e){a[b]=c==null?"":c}else if(c!=null&&c!==false){a.setAttribute(b,c)}if(c==null||c===false){a.removeAttribute(b)}}}function q(a,b){var c=typeof a==="string"||typeof a==="number"?document.createTextNode(a):(b=b||a.nodeName==="svg")?document.createElementNS("http://www.w3.org/2000/svg",a.nodeName):document.createElement(a.nodeName);var d=a.attributes;if(d){if(d.oncreate){y.push(function(){d.oncreate(c)})}for(var e=0;e<a.children.length;e++){c.appendChild(q(a.children[e]=f(a.children[e]),b))}for(var g in d){p(c,g,d[g],null,b)}}return c}function r(a,b,c,d){for(var e in j(b,c)){if(c[e]!==(e==="value"||e==="checked"?a[e]:b[e])){p(a,e,c[e],b[e],d)}}var f=A?c.oncreate:c.onupdate;if(f){y.push(function(){f(a,b)})}}function s(a,b){var c=b.attributes;if(c){for(var d=0;d<b.children.length;d++){s(a.childNodes[d],b.children[d])}if(c.ondestroy){c.ondestroy(a)}}return a}function t(a,b,c){function d(){a.removeChild(s(b,c))}var e=c.attributes&&c.attributes.onremove;if(e){e(b,d)}else{d()}}function u(a,b,c,d,e){if(d===c){}else if(c==null||c.nodeName!==d.nodeName){var g=q(d,e);a.insertBefore(g,b);if(c!=null){t(a,b,c)}b=g}else if(c.nodeName==null){b.nodeValue=d}else{r(b,c.attributes,d.attributes,e=e||d.nodeName==="svg");var h={};var j={};var l=[];var m=c.children;var o=d.children;for(var p=0;p<m.length;p++){l[p]=b.childNodes[p];var s=n(m[p]);if(s!=null){h[s]=[l[p],m[p]]}}var p=0;var v=0;while(v<o.length){var s=n(m[p]);var w=n(o[v]=f(o[v]));if(j[s]){p++;continue}if(w!=null&&w===n(m[p+1])){if(s==null){t(b,l[p],m[p])}p++;continue}if(w==null||A){if(s==null){u(b,l[p],m[p],o[v],e);v++}p++}else{var x=h[w]||[];if(s===w){u(b,x[0],x[1],o[v],e);p++}else if(x[0]){u(b,b.insertBefore(x[0],l[p]),x[1],o[v],e)}else{u(b,l[p],null,o[v],e)}j[w]=o[v];v++}}while(p<m.length){if(n(m[p])==null){t(b,l[p],m[p])}p++}for(var p in h){if(!j[p]){t(b,h[p][0],h[p][1])}}}return b}}var k=function(b){return function(){var d=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var f=function(b){for(var a=arguments.length,c=new Array(a>1?a-1:0),d=1;d<a;d++){c[d-1]=arguments[d]}return c.some(function(a){return a===g(b)})};if(!e){if(f(d,"string","number")||Array.isArray(d)||f(d,"function")){e=d;d={}}else if(f(d.View,"function")){e=d.View;d={}}}return j(b,d,e)}};var l=k("div");var m=k("button");var n=k("h1");var o=k("i");var i=function(a){return o(a.app.title)};var q=k("li");var r=k("p");var p=k("ul");var s={View:function(a,b){return l({class:"Wrapper".concat(a.wrapperStateVar?" Test":"")},[i,m({onclick:b.wrapperAction},a.buttonText)])}};var t={View:function(a,b){return l([n("Counter"),l("count: ".concat(a.count)),l("this counter globally shares it's state with all other counters"),m({onclick:function(){return b.count(1)}},"+1"),m({onclick:function(){return b.count(10)}},"+10"),m({onclick:function(){return b.count(-1)}},"-1"),m({onclick:function(){return b.count(-10)}},"-10")])}};var u=k("a");var a=function(a,b){var c=a.to,d=a.text,e=a.nofollow,f=a.noreferrer;return function(a,g){var h={href:c||""};if(c&&c.startsWith("/")&&!c.startsWith("//")){h.onclick=g.go}else{h.rel="noopener";if(e){h.rel+=" nofollow"}if(f){h.rel+=" noreferrer"}h.target="_blank"}return u(h,d||b)}};var v=k("nav");var w=k("pre");var x=k("h3");var y={View:function(b){var c=b.name,d=c===void 0?"menu":c,e=b.between,f=e===void 0?false:e,g=b.pre,h=g===void 0?false:g,i=b.post,j=i===void 0?false:i;return function(b,c){if(!b[d]||!b[d].length){return}if(typeof window!=="undefined"){window.addEventListener("popstate",c.go)}return v({class:"Menu"},[p(b[d].map(function(c,e){var g={};var i=c.to===b.url;var k=c.to!=="/core/"&&b.url.startsWith(c.to);if(i||k){g.class="active"}else{g.class=null}return[h&&q(h),q(g,a(c)),f&&e<b[d].length-1?q(" - "):"",j&&q(j)]}))])}}};var z=k("header");var A=function(){return z({class:"sub"},[x("Contents:"),y.View({name:"docMenu"})])};var B=k("span");var C=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var c=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var d=function(b){for(var a=arguments.length,c=new Array(a>1?a-1:0),d=1;d<a;d++){c[d-1]=arguments[d]}return c.some(function(a){return a===g(b)})};if(!c){if(d(b,"string","number")||Array.isArray(b)||d(b,"function")){c=b;b={}}else if(d(b.View,"function")){c=b.View;b={}}}return j(a,b,c)}};var D=k("h4");var E=k("menu");var F={View:function(a){return l({class:"Pre"},function(a){var c="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\nvoid static default do\n\nboolean abstract implements\ntypeof function do break\nvoid static default transient\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports\n".replace(" ","").replace("\n","");var d="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".replace(" ","").replace("\n","");var g=function f(a){if(typeof a!=="string"){return a}var b=a.split(/\b/);a=b.map(function(a,f){if(a===""){return}var g="";if(b[f+1]&&b[f+1].includes(":")){g="colon"}else if(m(a)){g="tag"}else if(c.includes(a)){g="keyword"}else if(d.includes(a)){g="builtin"}else if(a==="state"){g="state"}else if(a==="actions"){g="actions"}else if("true false".includes(a)){g="boolean"}if(g){a=B({class:g},a)}return a});return a};var j={canvas:1,video:1};var k=function(a){if(a.trim().startsWith("//")){return l({class:"line comment"},a)}var c=a.replace(/"/g,"'");var d=c.split("'"),e=b(d),f=e[0],h=e[1],i=e.slice(2);var j=i;if(j.length===1){j=j[0]}else if(j.length>1){j=k(j.join("'"))}var m=[];if(typeof h!=="undefined"){m=[g(f),B({class:"string"},"'".concat(h,"'")),j]}else{m=g(a)}return m};var m=function(a){if(j.hasOwnProperty(a)){return true}else{try{var c=typeof global!=="undefined"?Object.keys(h.dependencies).includes(a):document.createElement(a).toString()==="[object HTMLDivElement]";if(c){j[a]=true;return true}}catch(a){}}};var n=a.split("\n").map(function(a){return l({class:"line"},k(a))});return n}(a))}};var G=k("h2");var H=k("h5");var I=k("object");var J={View:function(){return K({class:"main"},[l({class:"wrapper"},["made with a few bits of ",a({href:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var K=k("footer");var L=k("img");var M={"/core/deep/":function c(a,b){return[n(a.title),l("page content"),t.View(a,b)]},"/core/docs/concepts/":function(){var a={state:"\n// state variables can be anything you can JSON.stringify()\nstate: {\n  variable: true,\n  args: 'none',\n}",actions:"\n// actions are an object containing functions.\n// if an action returns an object, this object gets merged into the state\nactions: {\n  changeVariable: args => state => ({\n    variable: !state.variable,\n    args,\n  }),\n  callActionInAction: () => async (state, actions) => {\n    // just await something inside an action to create an async action\n    await new Promise(resolve => {\n      setTimeout(resolve, 200)\n    })\n\n    // actions can call other actions\n    actions.changeVariable(state.variable ? 'arg passed to function' : '')\n  },\n}",global:"\nglobal: {\n  state: {\n    variable: true,\n    args: true,\n  },\n  actions: {\n    callActionInAction: true,\n    changeVariable: true,\n  },\n}",view:"\nView: (state, actions) => (\n  div({ onclick: actions.callActionInAction }, state.variable)\n)",style:"\nstyle: {\n  '.className': {\n    color: 'green',\n\n    // expands to .className:hover because of the &\n    '&:hover': {\n      color: 'orange',\n    },\n\n    // expands to .className .childClass\n    '.childClass': {\n      color: 'blue',\n    },\n  },\n  // css ids\n  '#id': {\n    color: 'yellow',\n  },\n  // default html tag styles\n  div: {\n    color: 'black',\n  },\n}"};var b=function(a){return a.split("\n").map(function(a){return"  ".concat(a)}).join("\n")};var c="\nconst component = {\n  ".concat(b(a.state),",\n  ").concat(b(a.actions),",\n  ").concat(b(a.style),",\n  ").concat(b(a.view),",\n  ").concat(b(a.global),",\n}");return[A,n("concepts"),l([l([G("components"),r("components are the main building block of magic."),r("components can include state, actions, style and multiple Views")]),l([G("state"),l([r("state is a javascript object."),r("state can be mutated by actions."),r("every rendering step, the state determines the output of the view"),D("example state:"),F.View(a.state)])]),l([G("actions"),r("actions are an object of functions"),r("those functions get passed a state object and return a new partial state"),D("example functions"),F.View(a.actions)]),l([G("views"),r("views render the state to html"),r("whenever an action triggers a statechange, this statechange then triggers a view change."),F.View(a.view)]),l([G("styles"),r("every component can have a style object attached to it."),r("magic will automagically merge all styles into one global css file."),r("in the future, it will also remove unused styles for you."),F.View(a.style)]),l([G("global"),r("every component can set a global object, containing state and action properties."),F.View(a.global)]),l([G("Full component"),r("If we assemble those pieces, we get the following:"),F.View(c)])])]},"/core/docs/files/":function c(a){var b={page:"\nmodule.exports = {\n  state: {\n    variable: 'test',\n  },\n  actions: {\n    changeVar: () => ({ variable: 'changed' }),\n  },\n  style: {\n    '.cl': {\n      color: 'green',\n    },\n  },\n  Body: state => div({ class: 'cl' }, ['this is the page content.', state.variable]),\n}",assets:"\nmodule.exports = {\n  Custom: () => div('custom component'),\n  Pre: require('@magic-modules/pre),\n}",app:"\nmodule.exports = {\n  state: {\n    globalStateVar: 'globally available',\n  },\n  actions: {\n    globalAction: () => ({ globalStateVar: 'overwritten.' }),\n  },\n  style: {\n    'body': {\n      color: 'green',\n    },\n  },\n}",config:"\nmodule.exports = {\n  ROOT: 'example',\n  THEME: 'blue',\n  WEB_ROOT:'/core/core/',\n\n  // this option adds the\n  // 'X-Clacks-Overhead', 'GNU Terry Pratchet'\n  // http header\n  // see http://www.gnuterrypratchett.com/\n  FOR_DEATH_CAN_NOT_HAVE_HIM: true,\n}",theme:"\nmodule.exports = {\n  'body': {\n    color: 'blue',\n  },\n}",menu:"\nmodule.exports = {\n  View: ".concat(y.View.toString(),",\n}")};return[A,n(a.title),r("There are multiple magic files and directories."),p([q("/pages - directory maps to urls in your app"),q("/static - static files"),q("/assets - custom components, @magic-modules get imported here"),q("/themes - theme directory, @magic-themes get imported here"),q("/app.js - gets merged into the app, can set state, actions, style here"),q("/config.js - custom config for your app"),q("/assets/Menu.js - custom Menu for your app")]),l({id:"pages"},[G("/pages"),r("the pages dir contains the pages of your webapp."),r(["each page has it's own state and actions, ","but also inherits the global state and actions from the app and it's dependencies"]),H("example page:"),F.View(b.page)]),l({id:"static"},[G("/static"),r("the static dir contains all of your static assets."),r("every file in this directory gets copied to the app"),r("image and svg files get minified using imagemin"),r("text and binary files get compressed using zopfli")]),l({id:"assets"},[G("/assets"),r("the assets dir contains custom components of your app."),r("you can additionally import @magic-modules here"),H("example /assets/index.js"),F.View(b.assets)]),l({id:"themes"},[G("/themes"),r("the themes directory contains... themes."),r("at the moment this is file based, which means you have to manually import themes there."),r("TODO: handle themes as we handle assets. maybe move them into assets."),H("example /themes/blue/index.js"),F.View(b.theme)]),l({id:"appinfo"},[G("/app.js"),r("the /app.js file allows you to set global state, actions, and styles"),H("example /app.js"),F.View(b.app)]),l({id:"config"},[G("/config.js"),r("the /config.js file allows you to set the theme, root and web_root of your app"),H("example /config.js"),F.View(b.config)]),l({id:"menu"},[G("/assets/Menu.js"),r("the /assets/Menu.js file allows you to replace the default Menu component"),H("example /assets/Menu.js"),r("which changes nothing"),F.View(b.menu)])]},"/core/docs/":function(a){return[A,n(a.title),l([r("Welcome to the magic docs."),r("The goal of this document is to give you a rough @magical overview.")])]},"/core/docs/modules/":function c(b){return[A,n(b.title),r("magic modules are predefined components for webapps."),x("preinstalled magic modules"),r("magic has some preinstalled modules that will be useful in most pages."),D("menu"),r("the Menu module provides... menus."),r("just pass it a string which is the state key of the menu, add that menu to the /assets/app.js file."),F.View("\n// assets/app.js\nmodule.exports = {\n  state: {\n    // ...state\n    menuName: [\n      { to:'/core/example-page', text: 'example page' },\n      { to: 'https://example.com', text: 'example.com' },\n      { to: 'https://example.com', nofollow: true, noreferrer: true, target: 'utopia', text: 'nofollow and noref\" },\n    ],\n  },\n  // ... rest of app.js\n}"),r("then, in a page or module"),F.View("\nmodule.exports = () => Menu.View({ name: 'menuName' })\n\n// outputs:\n<nav class=\"Menu\">\n  <ul>\n    <li>\n      <a onclick=\"actions.go\" href=\"{{ WEB_ROOT }}example-page\">example page</a>\n    </li>\n    <li>\n      <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">example.com</a>\n    </li>\n    <li>\n      <a href=\"https://example.com\" target=\"utopia\" rel=\"noopener nofollow noreferrer\">nofollow and noref</a>\n    </li>\n  </ul>\n</nav>\n}"),x("link"),r("the link allows you to link to things."),F.View("\n// in any page or component View\nmodule.exports = () => [\n  Link({ to:'/core/page', text: 'page' }),\n  // outputs <a href=\"/page\" onclick=\"actions.go\">page</a>\n  Link({ to: 'https://example.com', text: 'page' }),\n  // outputs <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">page</a>\n  Link({ to:'/core/page', text: 'page', nofollow: true, noreferrer: true }),\n  // outputs <a href=\"https://example.com\" target=\"_blank\" rel=\"nofollow noreferrer noopener\">page</a>\n\n  // you can also use children instead of the text prop:\n  Link({ to:'/core/' }, 'home')\n"),x("list of installable magic modules"),p([q([a({to:"https://github.com/magic-modules/pre"},"@magic-modules/pre")])])]},"/core/docs/themes/":function c(b){return[A,n(b.title),r("magic themes are themes for magic apps."),x("list of magic themes"),p([q([a({to:"https://github.com/magic-themes/blue"},"@magic-themes/blue")])])]},"/core/":function c(a,b){return[n(a.title),l([r("index page content"),r("can stretch multiple lines"),p([q("and contain"),q("lists of content")])]),t.View(a,b),s.View(a,b)]},"/core/404/":function c(){return l("404 - not found")}};var N={"app":{"title":"Custom App Title","description":"Custom App Description"},"url":"/core/","menu":[{"to":"/core/","text":"home"},{"to":"/core/deep/","text":"deep"},{"to":"/core/docs/","text":"docs"}],"docMenu":[{"to":"/core/docs/concepts/","text":"concepts"},{"to":"/core/docs/files/","text":"files & directories"},{"to":"/core/docs/modules/","text":"modules"},{"to":"/core/docs/themes/","text":"themes"}],"logo":"/core/logo.png","pages":{"/core/deep/":{"title":"h1 deep/index","htmlTitle":"testing the html title tag"},"/core/docs/files/":{"title":"@magic/core files","description":"@magic/core directory docs."},"/core/docs/":{"title":"@magic/core docs","description":"@magic/core documentation directory."},"/core/docs/modules/":{"title":"@magic-modules","description":"@magic-modules docs."},"/core/docs/themes/":{"title":"@magic-themes","description":"@magic-theme docs."},"/core/":{"title":"h1 indexpage","description":"custom description","wrapperStateVar":false,"buttonText":"click me!"}},"count":0};N.url=window.location.pathname;var O={"go":function b(a){return function(b){a.preventDefault();var c=b.url;if(a.target&&a.target.href){c=a.target.href.replace(window.location.origin,"");if(c!==b.url){window.history&&window.history.pushState({urlPath:c},"",c)}}else{if(a.state){c=a.state.urlPath}else{c="/core/"}}return{url:c,prev:b.url}}},"pages":{"/core/deep/":{"deepAction":function b(a){return{test:!a.test}}},"/core/":{"wrapperAction":function a(){return function(a){return{wrapperStateVar:!a.wrapperStateVar}}}}},"count":function b(a){return function(b){return{count:b.count+a}}}};function P(a,b){var c=M[a.url];var d=a.pages[a.url];for(var f in d){a[f]=d[f]}var e=b.pages[a.url];for(var g in e){b[g]=e[g]}return l({class:"wrapper"},[z({class:"main"},[a.logo&&L({class:"logo",src:a.logo,height:100,width:200,role:"presentation"}),a.menu&&y.View]),c?l({class:"page"},c(a,b)):l({class:"page"},"404 - not found"),J.View])}var Q=document;var d=Q.getElementById("magic");if(!d){d=Q.createElement("div");d.id="magic";Q.body.appendChild(d)}h(N,O,P,d);