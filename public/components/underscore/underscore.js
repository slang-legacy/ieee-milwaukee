(function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,o=Function.prototype,a=r.push,s=r.slice,u=r.concat,c=i.toString,l=i.hasOwnProperty,f=r.forEach,p=r.map,h=r.reduce,d=r.reduceRight,g=r.filter,m=r.every,v=r.some,y=r.indexOf,x=r.lastIndexOf,b=Array.isArray,w=Object.keys,T=o.bind,k=function(e){return e instanceof k?e:this instanceof k?(this._wrapped=e,void 0):new k(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=k),exports._=k):e._=k,k.VERSION="1.4.4";var C=k.each=k.forEach=function(e,t,r){if(null!=e)if(f&&e.forEach===f)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,o=e.length;o>i;i++)if(t.call(r,e[i],i,e)===n)return}else for(var a in e)if(k.has(e,a)&&t.call(r,e[a],a,e)===n)return};k.map=k.collect=function(e,t,n){var r=[];return null==e?r:p&&e.map===p?e.map(t,n):(C(e,function(e,i,o){r[r.length]=t.call(n,e,i,o)}),r)};var j="Reduce of empty array with no initial value";k.reduce=k.foldl=k.inject=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),h&&e.reduce===h)return r&&(t=k.bind(t,r)),i?e.reduce(t,n):e.reduce(t);if(C(e,function(e,o,a){i?n=t.call(r,n,e,o,a):(n=e,i=!0)}),!i)throw new TypeError(j);return n},k.reduceRight=k.foldr=function(e,t,n,r){var i=arguments.length>2;if(null==e&&(e=[]),d&&e.reduceRight===d)return r&&(t=k.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var o=e.length;if(o!==+o){var a=k.keys(e);o=a.length}if(C(e,function(s,u,c){u=a?a[--o]:--o,i?n=t.call(r,n,e[u],u,c):(n=e[u],i=!0)}),!i)throw new TypeError(j);return n},k.find=k.detect=function(e,t,n){var r;return E(e,function(e,i,o){return t.call(n,e,i,o)?(r=e,!0):void 0}),r},k.filter=k.select=function(e,t,n){var r=[];return null==e?r:g&&e.filter===g?e.filter(t,n):(C(e,function(e,i,o){t.call(n,e,i,o)&&(r[r.length]=e)}),r)},k.reject=function(e,t,n){return k.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},k.every=k.all=function(e,t,r){t||(t=k.identity);var i=!0;return null==e?i:m&&e.every===m?e.every(t,r):(C(e,function(e,o,a){return(i=i&&t.call(r,e,o,a))?void 0:n}),!!i)};var E=k.some=k.any=function(e,t,r){t||(t=k.identity);var i=!1;return null==e?i:v&&e.some===v?e.some(t,r):(C(e,function(e,o,a){return i||(i=t.call(r,e,o,a))?n:void 0}),!!i)};k.contains=k.include=function(e,t){return null==e?!1:y&&e.indexOf===y?-1!=e.indexOf(t):E(e,function(e){return e===t})},k.invoke=function(e,t){var n=s.call(arguments,2),r=k.isFunction(t);return k.map(e,function(e){return(r?t:e[t]).apply(e,n)})},k.pluck=function(e,t){return k.map(e,function(e){return e[t]})},k.where=function(e,t,n){return k.isEmpty(t)?n?null:[]:k[n?"find":"filter"](e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},k.findWhere=function(e,t){return k.where(e,t,!0)},k.max=function(e,t,n){if(!t&&k.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&k.isEmpty(e))return-1/0;var r={computed:-1/0,value:-1/0};return C(e,function(e,i,o){var a=t?t.call(n,e,i,o):e;a>=r.computed&&(r={value:e,computed:a})}),r.value},k.min=function(e,t,n){if(!t&&k.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&k.isEmpty(e))return 1/0;var r={computed:1/0,value:1/0};return C(e,function(e,i,o){var a=t?t.call(n,e,i,o):e;a<r.computed&&(r={value:e,computed:a})}),r.value},k.shuffle=function(e){var t,n=0,r=[];return C(e,function(e){t=k.random(n++),r[n-1]=r[t],r[t]=e}),r};var _=function(e){return k.isFunction(e)?e:function(t){return t[e]}};k.sortBy=function(e,t,n){var r=_(t);return k.pluck(k.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index<t.index?-1:1}),"value")};var S=function(e,t,n,r){var i={},o=_(t||k.identity);return C(e,function(t,a){var s=o.call(n,t,a,e);r(i,s,t)}),i};k.groupBy=function(e,t,n){return S(e,t,n,function(e,t,n){(k.has(e,t)?e[t]:e[t]=[]).push(n)})},k.countBy=function(e,t,n){return S(e,t,n,function(e,t){k.has(e,t)||(e[t]=0),e[t]++})},k.sortedIndex=function(e,t,n,r){n=null==n?k.identity:_(n);for(var i=n.call(r,t),o=0,a=e.length;a>o;){var s=o+a>>>1;n.call(r,e[s])<i?o=s+1:a=s}return o},k.toArray=function(e){return e?k.isArray(e)?s.call(e):e.length===+e.length?k.map(e,k.identity):k.values(e):[]},k.size=function(e){return null==e?0:e.length===+e.length?e.length:k.keys(e).length},k.first=k.head=k.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:s.call(e,0,t)},k.initial=function(e,t,n){return s.call(e,0,e.length-(null==t||n?1:t))},k.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:s.call(e,Math.max(e.length-t,0))},k.rest=k.tail=k.drop=function(e,t,n){return s.call(e,null==t||n?1:t)},k.compact=function(e){return k.filter(e,k.identity)};var N=function(e,t,n){return C(e,function(e){k.isArray(e)?t?a.apply(n,e):N(e,t,n):n.push(e)}),n};k.flatten=function(e,t){return N(e,t,[])},k.without=function(e){return k.difference(e,s.call(arguments,1))},k.uniq=k.unique=function(e,t,n,r){k.isFunction(t)&&(r=n,n=t,t=!1);var i=n?k.map(e,n,r):e,o=[],a=[];return C(i,function(n,r){(t?r&&a[a.length-1]===n:k.contains(a,n))||(a.push(n),o.push(e[r]))}),o},k.union=function(){return k.uniq(u.apply(r,arguments))},k.intersection=function(e){var t=s.call(arguments,1);return k.filter(k.uniq(e),function(e){return k.every(t,function(t){return k.indexOf(t,e)>=0})})},k.difference=function(e){var t=u.apply(r,s.call(arguments,1));return k.filter(e,function(e){return!k.contains(t,e)})},k.zip=function(){for(var e=s.call(arguments),t=k.max(k.pluck(e,"length")),n=new Array(t),r=0;t>r;r++)n[r]=k.pluck(e,""+r);return n},k.object=function(e,t){if(null==e)return{};for(var n={},r=0,i=e.length;i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},k.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=k.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;i>r;r++)if(e[r]===t)return r;return-1},k.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=null!=n;if(x&&e.lastIndexOf===x)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);for(var i=r?n:e.length;i--;)if(e[i]===t)return i;return-1},k.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=0,o=new Array(r);r>i;)o[i++]=e,e+=n;return o},k.bind=function(e,t){if(e.bind===T&&T)return T.apply(e,s.call(arguments,1));var n=s.call(arguments,2);return function(){return e.apply(t,n.concat(s.call(arguments)))}},k.partial=function(e){var t=s.call(arguments,1);return function(){return e.apply(this,t.concat(s.call(arguments)))}},k.bindAll=function(e){var t=s.call(arguments,1);return 0===t.length&&(t=k.functions(e)),C(t,function(t){e[t]=k.bind(e[t],e)}),e},k.memoize=function(e,t){var n={};return t||(t=k.identity),function(){var r=t.apply(this,arguments);return k.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},k.delay=function(e,t){var n=s.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},k.defer=function(e){return k.delay.apply(k,[e,1].concat(s.call(arguments,1)))},k.throttle=function(e,t){var n,r,i,o,a=0,s=function(){a=new Date,i=null,o=e.apply(n,r)};return function(){var u=new Date,c=t-(u-a);return n=this,r=arguments,0>=c?(clearTimeout(i),i=null,a=u,o=e.apply(n,r)):i||(i=setTimeout(s,c)),o}},k.debounce=function(e,t,n){var r,i;return function(){var o=this,a=arguments,s=function(){r=null,n||(i=e.apply(o,a))},u=n&&!r;return clearTimeout(r),r=setTimeout(s,t),u&&(i=e.apply(o,a)),i}},k.once=function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}},k.wrap=function(e,t){return function(){var n=[e];return a.apply(n,arguments),t.apply(this,n)}},k.compose=function(){var e=arguments;return function(){for(var t=arguments,n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},k.after=function(e,t){return 0>=e?t():function(){return--e<1?t.apply(this,arguments):void 0}},k.keys=w||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)k.has(e,n)&&(t[t.length]=n);return t},k.values=function(e){var t=[];for(var n in e)k.has(e,n)&&t.push(e[n]);return t},k.pairs=function(e){var t=[];for(var n in e)k.has(e,n)&&t.push([n,e[n]]);return t},k.invert=function(e){var t={};for(var n in e)k.has(e,n)&&(t[e[n]]=n);return t},k.functions=k.methods=function(e){var t=[];for(var n in e)k.isFunction(e[n])&&t.push(n);return t.sort()},k.extend=function(e){return C(s.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},k.pick=function(e){var t={},n=u.apply(r,s.call(arguments,1));return C(n,function(n){n in e&&(t[n]=e[n])}),t},k.omit=function(e){var t={},n=u.apply(r,s.call(arguments,1));for(var i in e)k.contains(n,i)||(t[i]=e[i]);return t},k.defaults=function(e){return C(s.call(arguments,1),function(t){if(t)for(var n in t)null==e[n]&&(e[n]=t[n])}),e},k.clone=function(e){return k.isObject(e)?k.isArray(e)?e.slice():k.extend({},e):e},k.tap=function(e,t){return t(e),e};var A=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;e instanceof k&&(e=e._wrapped),t instanceof k&&(t=t._wrapped);var i=c.call(e);if(i!=c.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(var o=n.length;o--;)if(n[o]==e)return r[o]==t;n.push(e),r.push(t);var a=0,s=!0;if("[object Array]"==i){if(a=e.length,s=a==t.length)for(;a--&&(s=A(e[a],t[a],n,r)););}else{var u=e.constructor,l=t.constructor;if(u!==l&&!(k.isFunction(u)&&u instanceof u&&k.isFunction(l)&&l instanceof l))return!1;for(var f in e)if(k.has(e,f)&&(a++,!(s=k.has(t,f)&&A(e[f],t[f],n,r))))break;if(s){for(f in t)if(k.has(t,f)&&!a--)break;s=!a}}return n.pop(),r.pop(),s};k.isEqual=function(e,t){return A(e,t,[],[])},k.isEmpty=function(e){if(null==e)return!0;if(k.isArray(e)||k.isString(e))return 0===e.length;for(var t in e)if(k.has(e,t))return!1;return!0},k.isElement=function(e){return!(!e||1!==e.nodeType)},k.isArray=b||function(e){return"[object Array]"==c.call(e)},k.isObject=function(e){return e===Object(e)},C(["Arguments","Function","String","Number","Date","RegExp"],function(e){k["is"+e]=function(t){return c.call(t)=="[object "+e+"]"}}),k.isArguments(arguments)||(k.isArguments=function(e){return!(!e||!k.has(e,"callee"))}),"function"!=typeof/./&&(k.isFunction=function(e){return"function"==typeof e}),k.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},k.isNaN=function(e){return k.isNumber(e)&&e!=+e},k.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"==c.call(e)},k.isNull=function(e){return null===e},k.isUndefined=function(e){return void 0===e},k.has=function(e,t){return l.call(e,t)},k.noConflict=function(){return e._=t,this},k.identity=function(e){return e},k.times=function(e,t,n){for(var r=Array(e),i=0;e>i;i++)r[i]=t.call(n,i);return r},k.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var O={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};O.unescape=k.invert(O.escape);var D={escape:new RegExp("["+k.keys(O.escape).join("")+"]","g"),unescape:new RegExp("("+k.keys(O.unescape).join("|")+")","g")};k.each(["escape","unescape"],function(e){k[e]=function(t){return null==t?"":(""+t).replace(D[e],function(t){return O[e][t]})}}),k.result=function(e,t){if(null==e)return null;var n=e[t];return k.isFunction(n)?n.call(e):n},k.mixin=function(e){C(k.functions(e),function(t){var n=k[t]=e[t];k.prototype[t]=function(){var e=[this._wrapped];return a.apply(e,arguments),$.call(this,n.apply(k,e))}})};var q=0;k.uniqueId=function(e){var t=++q+"";return e?e+t:t},k.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var L=/(.)^/,H={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},M=/\\|'|\r|\n|\t|\u2028|\u2029/g;k.template=function(e,t,n){var r;n=k.defaults({},n,k.templateSettings);var i=new RegExp([(n.escape||L).source,(n.interpolate||L).source,(n.evaluate||L).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(i,function(t,n,r,i,s){return a+=e.slice(o,s).replace(M,function(e){return"\\"+H[e]}),n&&(a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(a+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(a+="';\n"+i+"\n__p+='"),o=s+t.length,t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(n.variable||"obj","_",a)}catch(s){throw s.source=a,s}if(t)return r(t,k);var u=function(e){return r.call(this,e,k)};return u.source="function("+(n.variable||"obj")+"){\n"+a+"}",u},k.chain=function(e){return k(e).chain()};var $=function(e){return this._chain?k(e).chain():e};k.mixin(k),C(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];k.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!=e&&"splice"!=e||0!==n.length||delete n[0],$.call(this,n)}}),C(["concat","join","slice"],function(e){var t=r[e];k.prototype[e]=function(){return $.call(this,t.apply(this._wrapped,arguments))}}),k.extend(k.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);