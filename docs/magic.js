(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
function b(a,b){return j(a)||c(a,b)||f()}function c(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function e(a){return j(a)||g(a)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function g(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function j(a){if(Array.isArray(a))return a}function k(a,b){if(a==null)return{};var c=l(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function l(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function m(a){return m=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function m(a){return typeof a}:function m(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=require("hyperapp"),o=n.app,q=n.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),q(a,b,d)}};var r=h("div");var s=h("button");var t=h("code");var u=h("i");var i=h("pre");var v=h("span");var w=h("a");var a=h("text");var x=function Link(a,b){var c=a.to,d=k(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,l=d.onclick,m=k(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",m.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?m.onclick=function(a){l&&l({e:a,to:c}),f.go({e:a,to:c})}:(m.target="_blank",m.rel="noopener",i&&(m.rel+=" nofollow"),j&&(m.rel+=" noreferrer")),w(m,[h,b])}};var y=h("h1");var z=h("h2");var A=h("li");var B=h("p");var C=h("ul");var p={View:function View(a){var b=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];return function(c,d){var g="dark";return!b&&c.pre.theme==="dark"&&(g="light"),r({"class":"Pre ".concat(b||c.pre.theme)},[r({"class":"menu"},[!b&&s({onclick:function onclick(){return d.pre.changeTheme(g)}},g),s({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),i(function format(a){var f=function wrapWords(a){if(typeof a!=="string")return a;var e=a.split(/\b/);return a=e.map(function(a,f){if(a!==""){var g="";return a==="state"?g="state":a==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":j(a)?g="html":"let this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require".includes(a)?g="keyword":"Array Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array".includes(a)?g="builtin":"true false".includes(a)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(a=v({"class":g},a)),a}}),a};var h={canvas:1,video:1};var i=function wordsByLine(a){if(a.trim().startsWith("//"))return t({"class":"line comment"},a);if(a.includes("//")){var m=a.split("//");m[0]=i(m[0]);for(var n=1;n<m.length;n++)m[n]=t({"class":"comment"},"//".concat(m[n]));return t({"class":"line"},m)}var b=a.replace(/"/g,"'");var c=b.split("'"),d=e(c),g=d[0],h=d[1],j=d.slice(2);var k=j;k.length===1?k=i(k[0]):k.length>1&&(k=i(k.join("'")));var l=[];return l=typeof h==="undefined"?f(a):[f(g),v({"class":"string"},"'".concat(h,"'")),k],l};var j=function isHtmlTag(a){if(h.hasOwnProperty(a))return!0;try{var b=typeof global==="undefined"?document.createElement(a).toString()==="[object HTMLDivElement]":Object.keys(o.dependencies).includes(a);if(b)return h[a]=!0,!0}catch(a){}};a=a.replace(/^\n|\n$/g,"");var k=a.split("\n").map(function(a){return t({"class":"line"},i(a))});return k}(a))])}}};var D=h("h3");var E=h("nav");var F={View:function View(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,e=d===void 0?"menu":d,f=c["class"],g=f===void 0?"Menu":f,h=c.items,i=h===void 0?[]:h,j=c.collapse;var m=b.url,n=b[e],o=n===void 0?[]:n;if(i=i.length?i:o,!!i.length){b.hash&&(m+="#".concat(b.hash));var p=function Item(a){var b=a.text,c=a.items,d=c===void 0?[]:c,e=k(a,["text","items"]);if(e.to||b){var f={};e.to===m&&(f["class"]="active");var g;return d&&(m.startsWith(e.to)||!(j===void 0||j))&&(g=C(d.map(function(a){return p(a)}))),A(f,[e.to?x(e,b):v(e,b),g])}};return E({"class":g.includes("Menu")?g:"Menu ".concat(g)},C(i.map(function(a){return p(a)})))}}}};var G=h("img");var H=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),G(a)}};var I=h("footer");var J={View:function View(a){return r({"class":"Mod View"},[D("Mod.View"),B(["this is Mod.View. it gets loaded from ",x({to:"https://github.com/magic/core/example/assets/module.js"},"/assets/module.js")]),B(["and imported in ",x({to:"https://github.com/magic/core/example/assets/index.js"},"/assets/index.js")]),B(["the state of this module: ",JSON.stringify(a.module)])])},Component:function Component(){return r({"class":"Mod Component"},[D("Mod.Component"),B(["Mod.Component, a second component in ",x({to:"https://github.com/magic/core/example/assets/module.js"},"/assets/module.js")])])}};var K=function GitBadges(a){var c=a.project,d=c!==void 0&&c,e=a.branch,f=e===void 0?"master":e;var g=Object.entries({npm:function npm(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}},travis:function travis(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}},appveyor:function appveyor(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://ci.appveyor.com/project/".concat(a,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(a,"/").concat(f,".svg")}},coveralls:function coveralls(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://coveralls.io/github/".concat(a),src:"https://coveralls.io/repos/github/".concat(a,"/badge.svg")}},greenkeeper:function greenkeeper(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}},snyk:function snyk(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://snyk.io/test/github/".concat(a),src:"https://snyk.io/test/github/".concat(a,"/badge.svg")}}}).map(function(c){var d=b(c,2),e=d[0],f=d[1];return f(a[e])}).filter(function(b){return b.to&&b.src});return g.length?C({"class":"GitBadges"},g.map(function(a){var b=a.to,c=a.src;return A([x({to:b},H({src:c}))])})):void 0};var L=function component(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var c=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var d=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return!c&&(d(b,"string","number","function")||Array.isArray(b)?(c=b,b={}):d(b.View,"function")&&(c=b.View,b={})),q(a,b,c)}};var M=h("object");var N={View:function View(){return I({"class":"main"},[r({"class":"wrapper"},["made with a few bits of ",x({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var O=h("header");var P=function PageHead(a){return(a.logo||a.menu||a.tagline)&&O({"class":"main"},[(a.logo||a.logotext)&&x({to:"/core/","class":"logo-wrapper"},[a.logo&&H({"class":"logo",src:a.logo}),a.logotext&&v({"class":"logo-text"},a.logotext)]),F.View])};var Q={"/core/concepts/":function coreConcepts(a){var b={state:"\n// state variables can be anything you can JSON.stringify()\nstate: {\n  variable: true,\n  args: 'none',\n}",actions:"\n// actions are an object containing functions.\n// if an action returns an object, this object gets merged into the state\nactions: {\n  changeVariable: args => state => ({\n    variable: !state.variable,\n    args,\n  }),\n  callActionInAction: () => async (state, actions) => {\n    // just await something inside an action to create an async action\n    await new Promise(resolve => {\n      setTimeout(resolve, 200)\n    })\n\n    // actions can call other actions\n    actions.changeVariable('arg passed to function')\n  },\n}",global:"\nglobal: {\n  state: {\n    variable: true,\n    args: true,\n  },\n  actions: {\n    callActionInAction: true,\n    changeVariable: true,\n  },\n}",view:"\nView: (state, actions) => (\n  div({ onclick: actions.callActionInAction }, state.variable)\n)",style:"\nstyle: {\n  '.className': {\n    color: 'green',\n\n    // expands to .className:hover because of the &\n    '&:hover': {\n      color: 'orange',\n    },\n\n    // expands to .className .childClass\n    '.childClass': {\n      color: 'blue',\n    },\n  },\n  // css ids\n  '#id': {\n    color: 'yellow',\n  },\n  // default html tag styles\n  div: {\n    color: 'black',\n  },\n}",server:"\nserver: (req, res) => {\n  const { name } = req.body\n  res.writeHead(200, { 'content-type': 'text/plain' })\n  res.end(`hello, ${name}`)\n}",complexServer:"\nserver: {\n  index: (req, res) => {\n    res.writeHead(200, { 'content-type': 'text/plain' })\n    res.end('index route')\n  },\n  route: (req, res) => {\n    res.writeHead(200, { 'content-type': 'text/plain' })\n    res.end('api route')\n  },\n}",lib:"\nlib: {\n  local: require.resolve('./lib/local.js'),\n  npm: 'npm-lib',\n}"};var c=function indent(a){return a.split("\n").map(function(a){return"  ".concat(a)}).join("\n")};var d="\nconst exampleModule = {\n  ".concat(c(b.state),",\n  ").concat(c(b.actions),",\n  ").concat(c(b.style),",\n  ").concat(c(b.view),",\n  ").concat(c(b.global),",\n  ").concat(c(b.lib),",\n  ").concat(c(b.server),",\n}");return[y(a.title),B("magic concepts. These are the building blocks of every module in a magic app"),r([z({id:"philosophy"},"philosophy")]),r([z({id:"modules"},"modules"),B("modules are the main building block of magic."),B("modules can include state, actions, style and multiple components (which we call Views)."),B("View names have to start with an uppercased character. Every module can export multiple components that share state, actions and styles.")]),r([z({id:"state"},"state"),r([B("state is a javascript object."),B("state can be mutated by actions."),B("every rendering step, the state determines the output of the view"),D({id:"state-example"},"state example"),p.View(b.state)])]),r([z({id:"actions"},"actions"),B("actions are an object containing functions"),B("those functions get the state and actions and may return a new partial state."),B("alternatively, you can call any action from within any other action."),D({id:"actions-example"},"actions example"),p.View(b.actions)]),r([z({id:"views"},"views"),B("views render the state to html"),B("whenever an action triggers a statechange, this statechange then triggers a view change."),D({id:"views-example"},"views example"),p.View(b.view)]),r([z({id:"styles"},"styles"),B("every module can have a style object attached to it."),B("magic will automagically merge all styles into one global css file."),B("in the future, it will also remove unused styles for you."),B("style merge order from lowest to highest:"),B("module.style < page.style < app.style < theme.style"),D({id:"styles-example"},"example styles"),p.View(b.style),D({id:"styles-magic-css"},"@magic/css"),B("internally, magic uses it's own css-in-js library."),B("to find out more, click the following link:"),x({to:"https://magic.github.io/css/"},"@magic/css")]),r([z({id:"globals"},"global"),B("every module can set a global object, containing state and action properties."),B("every key in the mod.global object that is set to true gets merged into the main app state/actions."),D({id:"globals-example"},"global example"),p.View(b.global)]),r([z({id:"lambdas"},"server lambdas"),B("this is the serverside magic."),B("you can define functions that will turn into serverside lambdas."),B("server side lambdas will be available for POST requests."),B("the server side function signature is (req, res) => {}, as in any nodejs http server, with the addition of req.body being set."),D({id:"lambdas-example"},"single lambda"),p.View(b.server),D({id:"lambdas-example-multi"},"multiple lambdas"),p.View(b.complexServer)]),r([z({id:"libs"},"external libs"),B(["what would javascript be without the millions of dependencies"," that you can easily install and make the average webpage "," slow[ly] (pun intended) grow towards a footprint of 5 megabytes."]),B("as the sarcastic remark might demonstrate, we think that all of that bloat is unneeded, unheeded and, frankly, not optimal."),B(["magic has one external client side dependency, ",x({to:"https://github.com/jorgebucharan/hyperapp"},"hyperapp"),", [~400 lines that provide our ui state machine]. thats it. and it won't change."]),B("anyways, rant over. if you really need to use external packages, there is a way."),B(["once there is a lib key in at least one component,"," window.LIB (browser) and global.LIB (nodejs) will be set,"," aliasing LIB as a global variable in both environments"]),D({id:"libs-dir-or-file"},"lib dir or file"),B(["if you need libraries in internally developed modules,"," it might be easier to keep your library dependencies in a central place."," to achieve this, one can simply create /assets/lib.js and export a object from it."," the keys of the object are the function name, the values are the paths to the lib.js file"]),p.View("\n// /assets/lib.js or /assets/lib/index.js\nmodule.exports = {\n  local: require.resolve('./local.js'),\n  npm: 'npm-lib',\n}"),D({id:"libs-example-file"},"example lib file"),p.View("\n// /assets/lib/local.js\nmodule.exports = name => `hello, ${name}`\n"),D({id:"libs-app"},"app.lib"),p.View("\n// /assets/app.js\nmodule.exports = {\n  // ... other app props\n  lib: {\n    local: require.resolve('./lib'),\n    npm: 'npm-lib',\n  },\n}\n"),D({id:"libs-module"},"module.lib"),B("any page or module can export a lib key"),p.View("\n// /pages/page.js\n// /assets/Module.js\n\nmodule.exports = {\n  // ... other component / page properties and views  ".concat(c(b.lib),"\n},\nView: () => div(LIB.local('name')),\n}\n\n// renders\n<div>hello, name</div>"))]),r([z({id:"full-example"},"Full example"),B("If we assemble those pieces, we get the following:"),p.View(d)])]},"/core/files/":function coreFiles(a){var b={page:"\nmodule.exports = {\n  state: {\n    variable: 'test',\n  },\n  actions: {\n    changeVar: () => ({ variable: 'changed' }),\n  },\n  style: {\n    '.cl': {\n      color: 'green',\n    },\n  },\n  View: state => div({ class: 'cl' }, [\n    'this is the page content.',\n    state.variable,\n  ]),\n}",assets:"\nmodule.exports = {\n  Custom: () => div('custom component'),\n  Pre: require('@magic-modules/pre),\n}",app:"\nmodule.exports = {\n  state: {\n    globalStateVar: 'globally available',\n  },\n  actions: {\n    globalAction: () => ({ globalStateVar: 'overwritten.' }),\n  },\n  style: {\n    'body': {\n      color: 'green',\n    },\n  },\n}",config:"\nmodule.exports = {\n  ROOT: 'example',\n  THEME: 'blue',\n  WEB_ROOT: '/core/',\n\n  // this option adds the\n  // 'X-Clacks-Overhead', 'GNU Terry Pratchet'\n  // http header\n  // see http://www.gnuterrypratchett.com/\n  FOR_DEATH_CAN_NOT_HAVE_HIM: true,\n\n  // default CLIENT_LIB_NAME, overwrite to change names of transpiled css and js files\n  CLIENT_LIB_NAME: 'magic',\n}",theme:"\nmodule.exports = {\n  'body': {\n    color: 'blue',\n  },\n}"};return[y(a.title),B("There are multiple magic files and directories."),C([A("/pages - files in the page directory map to urls in your app."),A("/assets - custom components, @magic-modules get imported here"),A("/assets/static - static files"),A("/assets/themes - theme directory, @magic-themes get imported here"),A("/assets/lib.js - imports npm and local but external packages into your app"),A("/app.js - gets merged into the app, can set state, actions, style here"),A("/config.js - custom config for your app"),A("/assets/Menu.js - custom Menu for your app")]),r([z({id:"pages"},"/pages"),B("the pages dir contains the pages of your webapp."),B(["each page has it's own state and actions, ","but also inherits the global state and actions from the app and it's dependencies"]),D({id:"pages-dir-structure"},"pages directory to url map, for the domain mag.ic:"),C([A("/pages/index.js === http://mag.ic/"),A("/pages/pageName.js === http://mag.ic/pageName/"),A("/pages/page-name.js === http://mag.ic/page-name/"),A("/pages/page_name.js === http://mag.ic/page_name/"),A("/pages/dir/index.js === http://mag.ic/dir/"),A("/pages/dir/name.js === http://mag.ic/dir/name/")]),D({id:"pages-example"},"example page:"),p.View(b.page)]),r([z({id:"assets"},"/assets"),B("the assets dir contains custom components of your app."),B("you can additionally import @magic-modules here"),D({id:"assets-example"},"example /assets/index.js"),p.View(b.assets)]),r([z({id:"static"},"/assets/static"),B("the static dir contains all of your static assets."),B("every file in this directory gets copied to the public dir."),B("image and svg files get minified using imagemin"),B(["text and binary files get compressed using the optional ",x({to:"https://github.com/jaeh/node-zopfli-es"},"node-zopfli-es")," (if it is installed)"])]),r([z({id:"themes"},"/assets/themes"),B("the themes directory contains... themes."),B("at the moment this is file based, which means you have to manually import themes there."),D({id:"themes-example"},"example theme"),p.View(b.theme)]),r([z({id:"app"},"/assets/app.js"),B("the /app.js file allows you to set global state, actions, and styles"),D({id:"app-example"},"example /app.js"),p.View(b.app)]),r([z({id:"config"},"/config.js"),B("the /config.js file allows you to set various aspects of your app"),D({id:"config-example"},"example /config.js"),p.View(b.config)]),r([z({id:"menu"},"/assets/Menu.js"),B("the /assets/Menu.js file allows you to replace the default Menu component"),D({id:"menu-example"},"example /assets/Menu.js"),x({to:"https://github.com/magic/core/blob/master/src/modules/Menu.js"},"Menu.js on github")])]},"/core/":function core(a){return[y(a.title),r([z("Welcome to the magic docs."),B("The goal of this document is to give you a rough @magical overview."),K({project:"magic/core",appveyor:"jaeh/core"}),z("Features"),D("client app"),B(["magic uses ",x({to:"https://github.com/jorgebucaran/hyperapp/"},"hyperapp")," to generate a client side webapp."]),B(["since hyperapp is awesomely small, the minimal client bundle size hovers around 3-4kb (gzipped),"," this includes all of @magic and depends on the variety of html elements in use as well as the amount and content length of the pages."]),D("static file hosting:"),B(["publishes to ",x({to:"https://github.com"},"github"),", ",x({to:"https://gitlab.com"},"gitlab")," and any other git enabled hosting service."]),D("serverless / faas"),B(["automagically generates "," serverless lambdas, derived from the ",x({to:"https://github.com/magic-modules/"},"@magic-modules")," you use in your pages."," this makes visitor statistics, user authentication and authorization, chat, and all other server side services possible."])])]},"/core/modules/":function coreModules(a){return[y(a.title),B("magic modules are predefined modules for webapps."),z({id:"definition"},"module definition:"),B("the minimal module is a function that returns some html."),p.View("\n// /assets/ModuleName.js\n\n// simplest module\nmodule.exports = () => div('hello, world')\n\n// complete signature\nmodule.exports = (props, children) => (state, actions) => div('hello, world')\n"),z({id:"usage"},"usage"),B("to use a module in your app it has to be imported using /assets/index.js. "),p.View("\n// /assets/index.js\nmodule.exports = {\n  // ...otherModules\n\n  // load module from /assets/Mod.js\n  Mod: require('./Mod'),\n\n  // load module from node_modules\n  NpmModule: require('@magic-modules/npm-module'),\n}"),B("after this, the module will be a global in your app and can be used like any other component."),p.View("\n// any page or module\nmodule.exports = () => div([\n  'modules that do not need props can be used without calling them as a function ',\n  Mod.View,\n  'modules that need props: ',\n  Mod.View(propObject),\n"),z({id:"custom-module"},"Mod.View and Mod.Component:"),J.View,J.Component,D("Mod sourcecode:"),p.View("const Mod = {\n  View: state =>\n    div({ class: 'Mod View' }, [\n      h3('Mod.View'),\n      p([\n        'this is Mod.View. it gets loaded from ',\n        Link({ to: 'https://github.com/magic/core/blob/master/example/assets/Mod.js' }, '/assets/Mod.js'),\n      ]),\n      p([\n        'and imported in ',\n        Link({ to: 'https://github.com/magic/core/blob/master/example/assets/index.js' }, '/assets/index.js'),\n      ]),\n      p(['the state of this module: ', JSON.stringify(state.module)]),\n    ]),\n\n  Component: () =>\n    div({ class: 'Mod Component' }, [\n      h3('Mod.Component'),\n      p([\n        'Mod.Component, a second component in ',\n        Link({ to: 'https://github.com/magic/core/blob/master/example/assets/Mod.js' }, '/assets/Mod.js'),\n      ]),\n    ]),\n\n  state: {\n    module: {\n      test: 'testing',\n    },\n  },\n\n  style: {\n    '.Mod': {\n      margin: '0 0 1em',\n      padding: '0.5em',\n      border: '1px solid',\n\n      h3: {\n        margin: 0,\n      },\n\n      '&.View': {\n        borderColor: 'green',\n      },\n      '&.Component': {\n        borderColor: 'red',\n      },\n    },\n  },\n\n  global: {\n    state: {\n      module: true,\n    },\n  },\n}\n\nmodule.exports = Mod"),z({id:"preinstalled"},"preinstalled magic modules"),B("magic has some preinstalled modules that will be used in most pages."),z({id:"app"},"app"),B("this is the main app module. it has magically inherited properties and all of it is customizable."),B(["to add actions/state/style to the app you can just create an /assets/app.js file.","the contents of this file get ",x({to:"https://github.com/magic/deep",text:"deep .merged"})," into the app"]),p.View("\n// /assets/app.js\nmodule.exports = {\n  state: {\n    merge: 'gets merged into state',\n  },\n  actions: {\n    mergedActions: () => ({ merge: 'merged action executed' }),\n  },\n  style: {\n    body: {\n      backgroundColor: 'white',\n    },\n  },\n}\n"),z({id:"menu"},"menu"),B("the Menu module provides... menus."),B(["just pass it a string which is the state key of the menu,"," then add that menu to the /assets/app.js file."]),B(["by default, the menu will only show submenu items if their parent link is active."," to force submenu items to show at all times, just pass a collapse: false prop"]),p.View("\n// assets/app.js\nmodule.exports = {\n  state: {\n    // ...state\n    menuName: [\n      { to: '/core/example-page', text: 'example page' },\n      { to: 'https://example.com', text: 'example.com' },\n      { to: 'https://example.com', nofollow: true, noreferrer: true, target: 'utopia', text: 'nofollow and noref\" },\n    ],\n  },\n  // ... rest of app.js\n}"),B("then, in a page or module"),p.View("\nmodule.exports = () => Menu.View({ name: 'menuName', collapse: false })\n\n// output:\n<nav class=\"Menu\">\n  <ul>\n    <li>\n      <a onclick=\"actions.go\" href=\"{{ WEB_ROOT }}example-page\">example page</a>\n    </li>\n    <li>\n      <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">example.com</a>\n    </li>\n    <li>\n      <a href=\"https://example.com\" target=\"utopia\" rel=\"noopener nofollow noreferrer\">nofollow and noref</a>\n    </li>\n  </ul>\n</nav>\n}"),D({id:"menu-props"},"Menu props"),B("the Menu module allows multiple props to be passed when instantiating the Menu"),p.View("\nMenu({\n  collapse: false, // (default: true) menu will always show all submenu items\n})"),D({id:"menu-item-props"},"Menu.Item props"),B("every MenuItem accepts props."),p.View("\n\n"),D({id:"menu-sub-menus"},"sub menus"),B("to define a submenu, simply define a .items array on the menu item"),p.View("\n// assets/app.js\nmodule.exports = {\n  state: {\n    // ...state\n    menuName: [\n      {\n        to: '/core/example-page',\n        text: 'example page',\n        items: [\n          { to: '/core/example-page/#sub', text: 'example sub page' },\n      ] },\n    ],\n  },\n  // ... rest of app.js\n}"),z({id:"link"},"link"),B("the link module allows you to link to things."),p.View("\n// in any page or module View\nmodule.exports = () => [\n  Link({ to: '/core/page', text: 'page' }),\n  // output: <a href=\"/page\" onclick=\"actions.go\">page</a>\n  Link({ to: 'https://example.com', text: 'page' }),\n  // output: <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">page</a>\n  Link({ to: '/core/page', text: 'page', nofollow: true, noreferrer: true }),\n  // output: <a href=\"https://example.com\" target=\"_blank\" rel=\"nofollow noreferrer noopener\">page</a>\n\n  // you can also use children syntax instead of the text prop:\n  Link({ to: '/core/' }, 'home'),\n\n  // Link also supports # hash links\n  Link({ to: '/core/#hash' }, 'home with hash'),\n]"),z({id:"img"},"img"),B("the img module adds some sane default values to your images."),p.View("\n// in any page or module View\nmodule.exports = () => [\n  Img('/image.png'),\n  // output: <img src=\"/image.png\" alt=\"\" role=\"presentation\"/>\n  Img({ src: '/image.png }),\n  // output: <img src=\"/image.png\" alt=\"\" role=\"presentation\"/>\n  Img({ src: '/core/image.png', alt: 'image description' }),\n  // output: <img src=\"/image.png alt=\"image description\" />\n  Img({ src: '/core/image.png', title: 'image title', }),\n  // output: <img src=\"/image.png\" title=\"image title\" alt=\"image title\"/>\n  Img({ src: '/core/image.png', title: 'image title', alt: 'image alt' }),\n  // output: <img src=\"/image.png\" title=\"image title\" alt=\"image alt\"/>\n]"),z({id:"footer"},"footer"),B("the footer module contains a small info text and a link to the magic github repository."),B("to overwrite this behaviour, just place a Footer.js file in your assets and require it in /assets/index.js"),p.View("\n// /assets/Footer.js:\nconst Footer = {\n  style: {\n    'footer.main': {\n      position: 'relative',\n      textAlign: 'center',\n      padding: '5em 0 .5em',\n    },\n  },\n  View: () =>\n    footer({ class: 'main' }, [\n      div({ class: 'wrapper' }, [\n        'made with a few bits of ',\n        Link({ href: 'https://github.com/magic/core', target: '_blank', rel: 'noopener' }, 'magic'),\n      ]),\n    ]),\n}\n\n// /assets/index.js\nmodule.exports = {\n  // ...other assets\n  Footer: require('./Footer'),\n}\n"),z({id:"magic-modules"},"list of installable magic modules"),C([A([D("pre"),r("the pre magic module allows you to display javascript code with syntax highlighting. it is used throughout this documentation."),x({to:"https://github.com/magic-modules/pre"},"@magic-modules/pre")])])]},"/core/themes/":function coreThemes(a){return[y(a.title),B("magic themes are themes for magic apps. you decide which theme to load by specifying the theme name in config.THEME"),p.View("\n// /config.js\nmodule.exports = {\n  // ...rest of config,\n  THEME: 'blue',\n}\n"),z("theme load order"),B("themes get loaded from multiple places. last in the list overwrites earlier entries."),B("/node_modules/@magic/core/src/themes/${config.THEME}/index.js"),B("/node_modules/@magic-themes/${config.THEME}"),B("/assets/themes/${config.THEME}/index.js"),z("list of magic themes"),C([A([x({to:"https://github.com/magic-themes"},"none yet, coming soon.")])])]},"/404/":function _(){return r("404 - not found")}};var R={"url":"/core/","root":"/core/","app":{"title":"Custom App Title","description":"Custom App Description"},"menu":[{to:"/core/concepts/","text":"concepts","items":[{to:"/core/concepts/#philosophy","text":"philosophy"},{to:"/core/concepts/#modules","text":"modules"},{to:"/core/concepts/#state","text":"state","items":[{to:"/core/concepts/#state-example","text":"example state"}]},{to:"/core/concepts/#actions","text":"actions","items":[{to:"/core/concepts/#actions-example","text":"example actions"}]},{to:"/core/concepts/#views","text":"views","items":[{to:"/core/concepts/#views-example","text":"example view"}]},{to:"/core/concepts/#styles","text":"styles","items":[{to:"/core/concepts/#styles-example","text":"example styles"},{to:"/core/concepts/#styles-magic-css","text":"@magic/css"}]},{to:"/core/concepts/#globals","text":"global","items":[{to:"/core/concepts/#globals-example","text":"example global"}]},{to:"/core/concepts/#lambdas","text":"server lambdas","items":[{to:"/core/concepts/#lambdas-example","text":"single lambda"},{to:"/core/concepts/#lambdas-example-multi","text":"multiple lambdas"}]},{to:"/core/concepts/#libs","text":"external libs","items":[{to:"/core/concepts/#libs-dir-or-file","text":"lib dir or file"},{to:"/core/concepts/#libs-example-file","text":"example lib file"},{to:"/core/concepts/#libs-app","text":"app.lib"},{to:"/core/concepts/#libs-module","text":"module.lib"}]},{to:"/core/concepts/#full-example","text":"example"}]},{to:"/core/files/","text":"files & directories","items":[{to:"/core/files/#pages","text":"/pages","items":[{to:"/core/files/#pages-dir-structure","text":"url mapping"},{to:"/core/files/#pages-example","text":"example"}]},{to:"/core/files/#assets","text":"/assets","items":[{to:"/core/files/#assets-example","text":"example"}]},{to:"/core/files/#static","text":"/assets/static"},{to:"/core/files/#themes","text":"/assets/themes","items":[{to:"/core/files/#themes-example","text":"example"}]},{to:"/core/files/#app","text":"/assets/app.js","items":[{to:"/core/files/#app-example","text":"example"}]},{to:"/core/files/#config","text":"/config.js","items":[{to:"/core/files/#config-example","text":"example"}]},{to:"/core/files/#menu","text":"/assets/Menu.js","items":[{to:"/core/files/#menu-example","text":"example"}]}]},{to:"/core/modules/","text":"modules","items":[{to:"/core/modules/#definition","text":"definition"},{to:"/core/modules/#usage","text":"usage"},{to:"/core/modules/#custom-module","text":"custom modules"},{to:"/core/modules/#preinstalled","text":"preinstalled"},{to:"/core/modules/#menu","text":"menu","items":[{to:"/core/modules/#menu-props","text":"props"},{to:"/core/modules/#menu-sub-menus","text":"sub menus"}]},{to:"/core/modules/#link","text":"link"},{to:"/core/modules/#footer","text":"footer"},{to:"/core/modules/#magic-modules","text":"@magic-modules"}]},{to:"/core/themes/","text":"themes"}],logo:"/core/logo.png","logotext":"@magic","pages":{"/core/concepts/":{"title":"@magic/core concepts","description":"@magic/core conceptual information."},"/core/files/":{"title":"@magic/core files","description":"@magic/core directory docs."},"/core/":{"title":"@magic/core docs","description":"@magic/core documentation directory."},"/core/modules/":{"title":"@magic-modules","description":"@magic-modules documentation."},"/core/themes/":{"title":"@magic-themes","description":"@magic-theme docs."}},"pre":{"theme":"light"},"module":{"test":"testing"}};R.url=window.location.pathname,R.root="/core/";var S={"go":function go(a){return function(c){if(typeof window==="undefined"||!window.history)return!0;var d=a.to;var f=a.e?a.e:a;f.preventDefault();var e=c.url;var g=e.split("#"),h=b(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(d){e=d.replace(window.location.origin,"");var l=e.split("#"),m=b(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p;var q=c.hash?"#".concat(c.hash):"";var r=c.url+q;e!==r&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=f.state?f.state.uri:"/";return k&&window.location&&(window.location.hash=k),{url:i,hash:k,prev:c.url}}},"pre":{"changeTheme":function changeTheme(a){return{theme:a}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}}};var T=function view(a,b){var c=Q[a.url]?a.url:"/404/";var d=Q[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return r({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[P,d?r({"class":"page"},d(a,b)):r({"class":"page"},"404 - not found"),N.View])};var U=document;var d=U.getElementById("magic");!d&&(d=U.createElement("div"),d.id="magic",U.body.appendChild(d)),o(R,S,T,d);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
