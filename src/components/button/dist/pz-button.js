!function(o,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["pz-button"]=n():o["pz-button"]=n()}(this,function(){return function(o){function n(e){if(t[e])return t[e].exports;var r=t[e]={exports:{},id:e,loaded:!1};return o[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=o,n.c=t,n.p="",n(0)}([function(o,n,t){var e,r,i={};t(1),e=t(5),r=t(6),o.exports=e||{},o.exports.__esModule&&(o.exports=o.exports.default);var c="function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports;r&&(c.template=r),c.computed||(c.computed={}),Object.keys(i).forEach(function(o){var n=i[o];c.computed[o]=function(){return n}})},function(o,n,t){var e=t(2);"string"==typeof e&&(e=[[o.id,e,""]]);t(4)(e,{});e.locals&&(o.exports=e.locals)},function(o,n,t){n=o.exports=t(3)(),n.push([o.id,".btn{position:relative;display:inline-block;padding:6px 10px;margin-bottom:0;font-size:14px;min-width:10px;text-align:center;white-space:nowrap;vertical-align:top;cursor:pointer;background-color:#ccc;border:1px solid #ccc;border-radius:5px}.btn.active,.btn:active{color:inherit;background-color:#ccc}.btn.disabled,.btn:disabled{border:1px solid #c0c8c8;cursor:not-allowed}.btn.disabled,.btn.disabled:hover,.btn:disabled,.btn:disabled:hover{background-color:#e6ecf5;color:#898989}.btn>i{margin-right:5px;font-size:1.17em;vertical-align:baseline}.btn-default{color:#fff;background-color:#f1f1f1;border:1px solid #e4e4e4;color:#000}.btn-default.hover,.btn-default:hover{color:#fff;background-color:#ddd}.btn-default.active,.btn-default:active{color:#fff;background-color:#d8d8d8}.btn-default>span.badge{margin-left:10px;background-color:#fff;color:#f1f1f1}.btn-default:hover{color:#000}.btn-primary{color:#fff;background-color:#286090;border:1px solid #22537c}.btn-primary.hover,.btn-primary:hover{color:#fff;background-color:#1f4b70}.btn-primary.active,.btn-primary:active{color:#fff;background-color:#1d4568}.btn-primary>span.badge{margin-left:10px;background-color:#fff;color:#286090}.btn-success{color:#fff;background-color:#449d44;border:1px solid #3c8b3c}.btn-success.hover,.btn-success:hover{color:#fff;background-color:#388138}.btn-success.active,.btn-success:active{color:#fff;background-color:#357935}.btn-success>span.badge{margin-left:10px;background-color:#fff;color:#449d44}.btn-info{color:#fff;background-color:#31b0d5;border:1px solid #28a1c4}.btn-info.hover,.btn-info:hover{color:#fff;background-color:#2597b8}.btn-info.active,.btn-info:active{color:#fff;background-color:#2490af}.btn-info>span.badge{margin-left:10px;background-color:#fff;color:#31b0d5}.btn-warning{color:#fff;background-color:#ec971f;border:1px solid #df8a13}.btn-warning.hover,.btn-warning:hover{color:#fff;background-color:#d18112}.btn-warning.active,.btn-warning:active{color:#fff;background-color:#c77c11}.btn-warning>span.badge{margin-left:10px;background-color:#fff;color:#ec971f}.btn-danger{color:#fff;background-color:#d9534f;border:1px solid #d43f3a}.btn-danger.hover,.btn-danger:hover{color:#fff;background-color:#d2322d}.btn-danger.active,.btn-danger:active{color:#fff;background-color:#c9302c}.btn-danger>span.badge{margin-left:10px;background-color:#fff;color:#d9534f}.btn-small{font-size:12px;min-width:31px;min-height:14px;padding:6px 9px}.btn-large{padding:6px 15px 7px;font-size:14px}.btn-block{display:block;width:100%;padding:12px 8px;margin-bottom:10px;font-size:16px}",""])},function(o,n){o.exports=function(){var o=[];return o.toString=function(){for(var o=[],n=0;n<this.length;n++){var t=this[n];t[2]?o.push("@media "+t[2]+"{"+t[1]+"}"):o.push(t[1])}return o.join("")},o.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(e[i]=!0)}for(r=0;r<n.length;r++){var c=n[r];"number"==typeof c[0]&&e[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="("+c[2]+") and ("+t+")"),o.push(c))}},o}},function(o,n,t){function e(o,n){for(var t=0;t<o.length;t++){var e=o[t],r=l[e.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](e.parts[i]);for(;i<e.parts.length;i++)r.parts.push(f(e.parts[i],n))}else{for(var c=[],i=0;i<e.parts.length;i++)c.push(f(e.parts[i],n));l[e.id]={id:e.id,refs:1,parts:c}}}}function r(o){for(var n=[],t={},e=0;e<o.length;e++){var r=o[e],i=r[0],c=r[1],a=r[2],f=r[3],s={css:c,media:a,sourceMap:f};t[i]?t[i].parts.push(s):n.push(t[i]={id:i,parts:[s]})}return n}function i(o,n){var t=b(),e=h[h.length-1];if("top"===o.insertAt)e?e.nextSibling?t.insertBefore(n,e.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),h.push(n);else{if("bottom"!==o.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function c(o){o.parentNode.removeChild(o);var n=h.indexOf(o);n>=0&&h.splice(n,1)}function a(o){var n=document.createElement("style");return n.type="text/css",i(o,n),n}function f(o,n){var t,e,r;if(n.singleton){var i=v++;t=g||(g=a(n)),e=s.bind(null,t,i,!1),r=s.bind(null,t,i,!0)}else t=a(n),e=d.bind(null,t),r=function(){c(t)};return e(o),function(n){if(n){if(n.css===o.css&&n.media===o.media&&n.sourceMap===o.sourceMap)return;e(o=n)}else r()}}function s(o,n,t,e){var r=t?"":e.css;if(o.styleSheet)o.styleSheet.cssText=x(n,r);else{var i=document.createTextNode(r),c=o.childNodes;c[n]&&o.removeChild(c[n]),c.length?o.insertBefore(i,c[n]):o.appendChild(i)}}function d(o,n){var t=n.css,e=n.media,r=n.sourceMap;if(e&&o.setAttribute("media",e),r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),o.styleSheet)o.styleSheet.cssText=t;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(t))}}var l={},p=function(o){var n;return function(){return"undefined"==typeof n&&(n=o.apply(this,arguments)),n}},u=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=p(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,h=[];o.exports=function(o,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=u()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var t=r(o);return e(t,n),function(o){for(var i=[],c=0;c<t.length;c++){var a=t[c],f=l[a.id];f.refs--,i.push(f)}if(o){var s=r(o);e(s,n)}for(var c=0;c<i.length;c++){var f=i[c];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete l[f.id]}}}};var x=function(){var o=[];return function(n,t){return o[n]=t,o.filter(Boolean).join("\n")}}()},function(o,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"pz-button",props:{btn:{type:String,default:"primary"},size:String,type:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:""}},computed:{},mounted:function(){},methods:{clickon:function(){this.$emit("click","")}},components:{}}},function(o,n){o.exports=" <button v-on:click=clickon :type=type name=button class=btn :class=\"[\r\n    btn ? 'btn-' + btn : '',\r\n    size ? 'btn-' + size : '',\r\n    {\r\n      'disabled': disabled,\r\n    }\r\n  ]\"> <i class=\"icon-spinner icon-spin\" v-if=loading></i> <i :class=\"'icon-' + icon\" v-if=\"icon && !loading\"></i> <slot></slot> </button> "}])});