"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(m,".").concat(d)]||u[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={id:"complex-objects",title:"\u7c7b"},m=void 0,c={unversionedId:"complex-objects",id:"complex-objects",title:"\u7c7b",description:"\u666e\u901a\u5bf9\u8c61\uff08\u6ca1\u6709\u539f\u578b\u7684\u5bf9\u8c61\uff09\u3001\u6570\u7ec4\u3001Map \u548c Set \u603b\u662f\u53ef\u4ee5\u7528 Immer \u66f4\u65b0\u3002\u6240\u6709\u5176\u4ed6\u5bf9\u8c61\u90fd\u5fc5\u987b\u4f7f\u7528 immerable \u7b26\u53f7\u5c06\u81ea\u5df1\u6807\u8bb0\u4e3a\u4e0e Immer \u517c\u5bb9\u3002\u5f53\u8fd9\u4e9b\u5bf9\u8c61\u4e4b\u4e00\u5728 produce \u4e2d\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u5b83\u7684\u539f\u578b\u5c06\u4fdd\u7559\u5728\u526f\u672c\u4e4b\u95f4",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/complex-objects.md",sourceDirName:".",slug:"/complex-objects",permalink:"/immer/zh-CN/complex-objects",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/main/website/docs/complex-objects.md",tags:[],version:"current",frontMatter:{id:"complex-objects",title:"\u7c7b"},sidebar:"Immer",previous:{title:"Map \u548c Set",permalink:"/immer/zh-CN/map-set"},next:{title:"Current",permalink:"/immer/zh-CN/current"}},p={},u=[{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"\u8bed\u4e49\u7ec6\u8282",id:"\u8bed\u4e49\u7ec6\u8282",level:3}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),(0,a.kt)("p",null,"\u666e\u901a\u5bf9\u8c61\uff08\u6ca1\u6709\u539f\u578b\u7684\u5bf9\u8c61\uff09\u3001\u6570\u7ec4\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Set")," \u603b\u662f\u53ef\u4ee5\u7528 Immer \u66f4\u65b0\u3002\u6240\u6709\u5176\u4ed6\u5bf9\u8c61\u90fd\u5fc5\u987b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"immerable")," \u7b26\u53f7\u5c06\u81ea\u5df1\u6807\u8bb0\u4e3a\u4e0e Immer \u517c\u5bb9\u3002\u5f53\u8fd9\u4e9b\u5bf9\u8c61\u4e4b\u4e00\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"produce")," \u4e2d\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u5b83\u7684\u539f\u578b\u5c06\u4fdd\u7559\u5728\u526f\u672c\u4e4b\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {immerable} from "immer"\n\nclass Foo {\n    [immerable] = true // \u65b9\u5f0f\u4e00\n\n    constructor() {\n        this[immerable] = true // \u65b9\u5f0f\u4e8c\n    }\n}\n\nFoo[immerable] = true // \u65b9\u5f0f\u4e09\n')),(0,a.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {immerable, produce} from "immer"\n\nclass Clock {\n    [immerable] = true\n\n    constructor(hour, minute) {\n        this.hour = hour\n        this.minute = minute\n    }\n\n    get time() {\n        return `${this.hour}:${this.minute}`\n    }\n\n    tick() {\n        return produce(this, draft => {\n            draft.minute++\n        })\n    }\n}\n\nconst clock1 = new Clock(12, 10)\nconst clock2 = clock1.tick()\nconsole.log(clock1.time) // 12:10\nconsole.log(clock2.time) // 12:11\nconsole.log(clock2 instanceof Clock) // true\n')),(0,a.kt)("h3",{id:"\u8bed\u4e49\u7ec6\u8282"},"\u8bed\u4e49\u7ec6\u8282"),(0,a.kt)("p",null,"\u5173\u4e8e\u7c7b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"draft")," \u5bf9\u8c61\u8bed\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7c7b\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"draft")," \u662f\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c\u4f46\u4e0e\u539f\u59cb\u5bf9\u8c61\u5177\u6709\u76f8\u540c\u7684\u539f\u578b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"draft")," \u65f6\uff0cImmer \u4f1a\u5c06\u6240\u6709\u62e5\u6709\u7684\u7684\u5c5e\u6027\u4ece\u6e90\u5bf9\u8c61\u590d\u5236\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"draft"),"\u3002\u8fd9\u5305\u62ec\u4e0d\u53ef\u679a\u4e3e\u548c\u7b26\u53f7\u5c5e\u6027\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6e90\u5bf9\u8c61\u62e5\u6709\u7684 getter \u5c06\u5728\u590d\u5236\u8fc7\u7a0b\u4e2d\u88ab\u8c03\u7528\uff0c\u5c31\u50cf ",(0,a.kt)("inlineCode",{parentName:"li"},"Object.assign")," \u65b9\u6cd5\u4e00\u6837"),(0,a.kt)("li",{parentName:"ol"},"\u7ee7\u627f\u7684 getter \u548c\u65b9\u6cd5\u5c06\u4fdd\u6301\u539f\u6837\u5e76\u88ab ",(0,a.kt)("inlineCode",{parentName:"li"},"draft")," \u7ee7\u627f"),(0,a.kt)("li",{parentName:"ol"},"Immer \u4e0d\u4f1a\u8c03\u7528\u6784\u9020\u51fd\u6570"),(0,a.kt)("li",{parentName:"ol"},"\u6700\u7ec8\u5b9e\u4f8b\u5c06\u4f7f\u7528\u4e0e\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"draft")," \u76f8\u540c\u7684\u673a\u5236\u6784\u5efa\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ea\u6709\u5177\u6709 setter \u7684 getter \u624d\u80fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"draft")," \u4e2d\u5199\u5165\uff0c\u5426\u5219\u65e0\u6cd5\u5c06\u503c\u590d\u5236\u56de\u6765\u3002")),(0,a.kt)("p",null,"\u56e0\u4e3a Immer \u4f1a\u5c06\u5bf9\u8c61\u62e5\u6709\u7684 getter \u89e3\u5f15\u7528\u5230\u666e\u901a\u5c5e\u6027\u4e2d\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\u5728\u5176\u5b57\u6bb5\u4e0a\u4f7f\u7528 getter/setter \u83b7\u5f97\u7684\u5bf9\u8c61\uff0c\u5c31\u50cfMobX \u548c Vue\u3002"),(0,a.kt)("p",null,"Immer \u4e0d\u652f\u6301\u5916\u6765/\u5f15\u64ce\u539f\u751f\u5bf9\u8c61\uff0c\u4f8b\u5982 DOM \u8282\u70b9\u6216 Buffers\uff0c\u4e5f\u4e0d\u652f\u6301\u7ee7\u627f\u7684 Map\u3001Set \u6216\u6570\u7ec4\uff0c\u5e76\u4e14\u4e0d\u80fd\u5728\u5b83\u4eec\u4e0a\u4f7f\u7528 immerable \u7b26\u53f7\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u4f8b\u5982\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," \u5bf9\u8c61\u65f6\uff0c\u60a8\u5e94\u8be5\u59cb\u7ec8\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," \u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f\u6539\u53d8\u73b0\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," \u5bf9\u8c61\u3002"))}d.isMDXComponent=!0}}]);