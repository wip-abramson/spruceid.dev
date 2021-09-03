"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[858],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2485:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],c={id:"document-loading",title:"Document Loading"},l={unversionedId:"didkit/document-loading",id:"didkit/document-loading",isDocsHomePage:!1,title:"Document Loading",description:"Introduction",source:"@site/docs/didkit/document-loading.md",sourceDirName:"didkit",slug:"/didkit/document-loading",permalink:"/docs/didkit/document-loading",editUrl:"https://github.com/spruceid/docs/didkit/document-loading.md",version:"current",frontMatter:{id:"document-loading",title:"Document Loading"},sidebar:"docs",previous:{title:"Core Concepts",permalink:"/docs/didkit/concepts"},next:{title:"DIDKit Changelog",permalink:"/docs/didkit/changelog"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Document types",id:"document-types",children:[]},{value:"Different modes of document loading",id:"different-modes-of-document-loading",children:[]},{value:"Pre-loading a document resource at build time",id:"pre-loading-a-document-resource-at-build-time",children:[]},{value:"Loading a document resource locally at run-time",id:"loading-a-document-resource-locally-at-run-time",children:[]},{value:"Caching remote documents at run-time",id:"caching-remote-documents-at-run-time",children:[]},{value:"Loading remote document at run-time",id:"loading-remote-document-at-run-time",children:[]}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h4",{id:"urls-that-point-to-documents"},(0,a.kt)("em",{parentName:"h4"},"URLs that point to documents")),(0,a.kt)("p",null,'One of the trickiest things about Verifiable Credentials, for people without\nJSON-LD or Semantic Web experience, is the referencing of external (linked)\ndocuments, represented in Verifiable Credentials and other Linked-Data documents\nby URLs. Thinking of them as URLs is deceptive, however, as fetching each from\nthe open web at the time of verification of a credential bears many risks to\nboth security and privacy-- although represented as URLs, they are best "cached"\nor stored locally, to be checked at time of verification.'),(0,a.kt)("h2",{id:"document-types"},"Document types"),(0,a.kt)("p",null,'The most common Linked-Data documents used to make Verifiable Contexts more\nportable are "context files", which are linked in the mandatory ',(0,a.kt)("inlineCode",{parentName:"p"},"@context")," field\nof all verifiable credentials.  These contain all the additional the vocabulary\nreferences needed to ",(0,a.kt)("a",{parentName:"p",href:"concepts#semantics"},"semantically disambiguate"),' the keys\nand values that make up a credential. I say "additional" because there is a\n',(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/2018/credentials/v1"},"core vocabulary")," in the core context\nfile maintained by the Verifiable Credentials working group, which must be\nreferenced by all conformant VCs to anchor all mandatory terms defined by the VC\nspecification. There are also some additional core vocabularies that cover a lot\nof common semantics, like the ",(0,a.kt)("a",{parentName:"p",href:"https://schema.org/"},"schema.org")," project central\nto the Semantic Web community, and VC-specific extensions to the core context\nmaintained by the W3C-CCG community, such as the ",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/security-vocab/"},"security\nvocabulary")," for anchoring\ncryptographic terms and proof-object properties and the ",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/traceability-vocab/"},"traceability\nvocabulary")," for anchoring terms\ncommon across major supply chain use cases.  It is common practice, when\nestablishing anything from a small use-case to a vast ecosystem, to establish\none context file (or more) to anchor all the VCs involved."),(0,a.kt)("p",null,"In addition to context files, there are other kinds of Linked-Data/JSON-LD\ndocuments that you might need to publish/host or resolve.  For example, the\n",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-status-rl-2020/"},"RevocationList2020")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-status-list-2021/"},"StatusList2021"),' specifications\nrely on "status lists" to be published to and queried over the open web in much\nthe same was as context files. These lists are the linked-data equivalent of the\n',(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Online_Certificate_Status_Protocol"},"OCSP")," status\nlists so central to the certificate-authority PKI networks that power HTTPS/TLS\nand other basic cybersecurity infrastructure. Like those, they may need to be\npropagated and cached, with latency built into systems relying on them. See\nbelow for details on how to handle that on both publisher and verifier sides of\nthe interaction."),(0,a.kt)("h2",{id:"different-modes-of-document-loading"},"Different modes of document loading"),(0,a.kt)("p",null,'In a nutshell, there are three options for loading contexts into an\nissuer/verifier, i.e., four different ways an instance of DIDKit can dereference\na URL pointing to a document. Technically, these are "resources" in the\nclassical sense, but DIDKit is configured to build and maintain a local\nreference table to avoid fetching remote resources, which is disabled by\ndefault.'),(0,a.kt)("p",null,"Ranked by their simplicity and security, the four ways of loading a document for\nissuance or verification purposes are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Package a resource into DIDKit at build time."),(0,a.kt)("li",{parentName:"ol"},"Load a context resource locally at run time. (Coming soon)"),(0,a.kt)("li",{parentName:"ol"},'Periodically reload a context resource "remotely" from a remote trusted\nsource. (Coming soon)'),(0,a.kt)("li",{parentName:"ol"},"Load a context resource remotely at time of verification (",(0,a.kt)("em",{parentName:"li"},"Strongly\ndiscouraged and not supported or endorsed by Spruce"),")")),(0,a.kt)("p",null,"The security advantages of 1 over 2 and 2 over 3 should be clear, but it is also\nworth mentioning that option #4 has major privacy/data-leakage implications\nwhich make it categorically deprecated.  Option #3 is not completely free from\nthe complications and risks of option #4, so it is strongly recommended that 1\nand 2 be ruled out categorically before finding an optimal balance of\nmitigations and performance for implementing #3."),(0,a.kt)("h2",{id:"pre-loading-a-document-resource-at-build-time"},"Pre-loading a document resource at build time"),(0,a.kt)("p",null,"Any context file can be added to the directory, ",(0,a.kt)("inlineCode",{parentName:"p"},"ssi/contexts/"),", which DIDKit\nqueries for contexts.  A few considerations, though:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Context files are intellectual property, and as such should be covered by\nlicenses if upstreamed or otherwise distributed. Add licensing information\nabout any new context file to ",(0,a.kt)("inlineCode",{parentName:"li"},"ssi/contexts/LICENSES.md")," and\n",(0,a.kt)("inlineCode",{parentName:"li"},"ssi/contexts/README.md")," as needed.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If it's a W3C context file you are adding, simply add the name and URL in\n",(0,a.kt)("inlineCode",{parentName:"li"},"ssi/contexts/README.md")," with the other W3C documents (they are already\ncovered by W3C license statements)."),(0,a.kt)("li",{parentName:"ul"},"If the new context is covered by neither W3C's license, or an Apache-2.0 or\nCC-BY-SA-3.0 license, you will also need to update the license property in\n",(0,a.kt)("inlineCode",{parentName:"li"},"ssi/contexts/Cargo.toml"),"."))),(0,a.kt)("li",{parentName:"ol"},"Add a line in ",(0,a.kt)("inlineCode",{parentName:"li"},"contexts/src/lib.rs")," using ",(0,a.kt)("inlineCode",{parentName:"li"},"include_str")," to load the JSON-LD\nfile and export it as a ",(0,a.kt)("strong",{parentName:"li"},"constant variable"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Optionally, you may want to add the URL in a rustdoc comment."))),(0,a.kt)("li",{parentName:"ol"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"ssi/src/jsonld.rs"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Declare and export a constant for the context file's canonical URL."),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"lazy_static")," block, define the context document as a\n",(0,a.kt)("inlineCode",{parentName:"li"},"RemoteDocument"),", referencing the context file variable defined in\ncontexts/src/lib.rs and the constant defined for the URL."),(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"StaticLoader"),", match the context file's URL(s) to the context document.")),(0,a.kt)("p",null,"After that, you are ready to follow the steps in didkit to build didkit-cli or\ndidkit-http, using the locally-modified ssi repo."),(0,a.kt)("h2",{id:"loading-a-document-resource-locally-at-run-time"},"Loading a document resource locally at run-time"),(0,a.kt)("p",null,"Coming soon!"),(0,a.kt)("h2",{id:"caching-remote-documents-at-run-time"},"Caching remote documents at run-time"),(0,a.kt)("p",null,"Coming soon!"),(0,a.kt)("h2",{id:"loading-remote-document-at-run-time"},"Loading remote document at run-time"),(0,a.kt)("p",null,"Coming never! See above for reasons why we do not support this feature out of\nthe box.  Builder beware!"))}u.isMDXComponent=!0}}]);