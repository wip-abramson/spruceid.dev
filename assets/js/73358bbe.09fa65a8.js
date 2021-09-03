"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[212],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1646:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"node",title:"Node.JS"},d={unversionedId:"didkit-interfaces/node",id:"didkit-interfaces/node",isDocsHomePage:!1,title:"Node.JS",description:"At a Glance",source:"@site/docs/didkit-interfaces/node.md",sourceDirName:"didkit-interfaces",slug:"/didkit-interfaces/node",permalink:"/docs/didkit-interfaces/node",editUrl:"https://github.com/spruceid/docs/didkit-interfaces/node.md",version:"current",frontMatter:{id:"node",title:"Node.JS"},sidebar:"docs",previous:{title:"Python",permalink:"/docs/didkit-interfaces/python"},next:{title:"Overview of Examples",permalink:"/docs/didkit-examples/overview"}},s=[{value:"At a Glance",id:"at-a-glance",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"at-a-glance"},"At a Glance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Two slightly different versions of the DIDKit binary can be installed via ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),', both vendored under the heading "@spruceid":',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"[didkit-node](https://www.npmjs.com/package/@spruceid/didkit)"))," is optimized for Javascript/Node.JS environments, with bindings generated with ",(0,a.kt)("inlineCode",{parentName:"li"},"[neon](https://github.com/neon-bindings/neon)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"[didkit-wasm](https://www.npmjs.com/package/didkit-wasm)"))," is packed to operate in browser and blockchain contexts via ",(0,a.kt)("inlineCode",{parentName:"li"},"[wasm-pack](https://github.com/rustwasm/wasm-pack/)")))),(0,a.kt)("li",{parentName:"ul"},"For a quick function & type reference, you can check out the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/lib/node/README.md#Issuing-a-Credential"},"Issuing a Credential")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/lib/node/README.md#Options"},"Options")," sections of the ",(0,a.kt)("inlineCode",{parentName:"li"},"/lib/node/README.md")," file in the DIDKit repo. Better yet, install it and run the commands yourself!"),(0,a.kt)("li",{parentName:"ul"},"To test your installation or just to see examples of calls and returns with valid DID-key test vectors, see the provided ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/spruceid/didkit/lib/node/test/index.spec.js"},"test script")," "),(0,a.kt)("li",{parentName:"ul"},"An experimental ASM.JS implementation is ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/didkit-wasm#ASM-target"},"provided for reference")," but not maintained or recommended for the casual developer.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Installation over node package managers is quite simple. Run this command to confirm version number and proper operation of basic functions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Import the module\nconst DIDKit = require('didkit');\n\nconsole.log(DIDKit.getVersion());\n\n// To issue credentials and presentations, you need a key.\n// The library provides a function to generate one.\nconst key = DIDKit.generateEd25519Key();\n\n// There are two helpful functions to obtain a DID and the `did:key`\n// `verificationMethod` from the key.\nconst did = DIDKit.keyToDID('key', key);\nconst verificationMethod = DIDKit.keyToVerificationMethod('key', key);\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Components"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Wasm, Blockchain Indexer"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/spruceid/tzprofiles/blob/main/api/service/index.js"},"JS Code"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Web Application, dApp"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/spruceid/tzprofiles/tree/main/dapp"},"JS Code"))))))}p.isMDXComponent=!0}}]);