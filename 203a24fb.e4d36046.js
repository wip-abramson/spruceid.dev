(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),o=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=o(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=o(a),s=n,u=d["".concat(b,".").concat(s)]||d[s]||m[s]||r;return a?i.a.createElement(u,c(c({ref:t},l),{},{components:a})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var l=2;l<r;l++)b[l]=a[l];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(105)),b=["components"],c={id:"changelog",title:"Changelog",hide_title:!0,custom_edit_url:"https://github.com/spruceid/didkit/blob/main/CHANGELOG.md"},p={unversionedId:"didkit/changelog",id:"didkit/changelog",isDocsHomePage:!1,title:"Changelog",description:"{@import ../../../didkit/CHANGELOG.md}",source:"@site/docs/didkit/changelog.md",slug:"/didkit/changelog",permalink:"/docs/didkit/changelog",editUrl:"https://github.com/spruceid/didkit/blob/main/CHANGELOG.md",version:"current",sidebar:"docs",previous:{title:"Foreign Function Interfaces",permalink:"/docs/didkit/ffis"},next:{title:"Overview of Examples",permalink:"/docs/didkit/examples"}},l=[],o={toc:l};function d(e){var t=e.components,a=Object(i.a)(e,b);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("h1",{parentName:"p"},"Changelog"),Object(r.b)("p",{parentName:"p"},"All notable changes to this project will be documented in this file."),Object(r.b)("p",{parentName:"p"},"The format is based on ",Object(r.b)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"Keep a Changelog"),",\nand this project adheres to ",Object(r.b)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning"),"."),Object(r.b)("h2",{parentName:"p"},Object(r.b)("a",{parentName:"h2",href:"https://github.com/spruceid/didkit/compare/v0.2.1...HEAD"},"Unreleased")),Object(r.b)("h2",{parentName:"p"},Object(r.b)("a",{parentName:"h2",href:"https://github.com/spruceid/didkit/releases/tag/v0.2.1"},"0.2.1")," - 2021-04-13"),Object(r.b)("h3",{parentName:"p"},"Fixed"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},"Include readme and license files in ",Object(r.b)("inlineCode",{parentName:"li"},"didkit")," crate.")),Object(r.b)("h2",{parentName:"p"},Object(r.b)("a",{parentName:"h2",href:"https://github.com/spruceid/didkit/releases/tag/v0.2.0"},"0.2.0")," - 2021-04-12"),Object(r.b)("h3",{parentName:"p"},"Added"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},"Add Node.js package, using ",Object(r.b)("a",{parentName:"li",href:"https://www.neon-bindings.com"},"Neon"),"."),Object(r.b)("li",{parentName:"ul"},"Add WASM package, using ",Object(r.b)("a",{parentName:"li",href:"https://rustwasm.github.io/wasm-pack/"},"wasm-pack"),"."),Object(r.b)("li",{parentName:"ul"},"Add ASM.js package, using ",Object(r.b)("a",{parentName:"li",href:"https://github.com/WebAssembly/binaryen#building"},"Binaryen"),"."),Object(r.b)("li",{parentName:"ul"},"Add Python package."),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("a",{parentName:"li",href:"https://svelte.dev/"},"Svelte")," ",Object(r.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/credential-handler-api/"},"CHAPI")," wallet example."),Object(r.b)("li",{parentName:"ul"},"Add Java ",Object(r.b)("a",{parentName:"li",href:"https://spring.io/projects/spring-boot"},"Spring Boot")," example."),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jspt.html"},"JavaServer Pages (JSP)")," example."),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("a",{parentName:"li",href:"https://www.djangoproject.com/"},"Django")," example."),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("a",{parentName:"li",href:"https://palletsprojects.com/p/flask/"},"Flask")," example."),Object(r.b)("li",{parentName:"ul"},"Add Resolve DID command."),Object(r.b)("li",{parentName:"ul"},"Add Dereference DID URL command."),Object(r.b)("li",{parentName:"ul"},"Add DIDAuth command."),Object(r.b)("li",{parentName:"ul"},"Add fallback resolver option for CLI and HTTP server."),Object(r.b)("li",{parentName:"ul"},"Allow using multiple DID methods in ",Object(r.b)("inlineCode",{parentName:"li"},"example.sh"),"."),Object(r.b)("li",{parentName:"ul"},"Support Rust stable."),Object(r.b)("li",{parentName:"ul"},"Support iOS, with static library and Flutter plugin."),Object(r.b)("li",{parentName:"ul"},"Enable ",Object(r.b)("inlineCode",{parentName:"li"},"did:web"),"."),Object(r.b)("li",{parentName:"ul"},"Enable ",Object(r.b)("inlineCode",{parentName:"li"},"did:sol"),"."),Object(r.b)("li",{parentName:"ul"},"Enable ",Object(r.b)("inlineCode",{parentName:"li"},"did:onion"),"."),Object(r.b)("li",{parentName:"ul"},"Enable ",Object(r.b)("inlineCode",{parentName:"li"},"did:pkh"),"."),Object(r.b)("li",{parentName:"ul"},"Enable ",Object(r.b)("inlineCode",{parentName:"li"},"P-256")," curve."),Object(r.b)("li",{parentName:"ul"},"Enable HTTP(S) in WASM, for parity with other platforms."),Object(r.b)("li",{parentName:"ul"},"Enable external signing for WASM."),Object(r.b)("li",{parentName:"ul"},"Add test driver for ",Object(r.b)("a",{parentName:"li",href:"https://github.com/w3c-ccg/vc-http-api/tree/b4df10d/packages/vc-http-api-test-server"},"vc-http-api-test-server")," (",Object(r.b)("inlineCode",{parentName:"li"},"vc-http-api v0.0.2"),")."),Object(r.b)("li",{parentName:"ul"},"Public GCHR container images.")),Object(r.b)("h3",{parentName:"p"},"Changed"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},"Use Flutter ",Object(r.b)("inlineCode",{parentName:"li"},"dev")," channel."),Object(r.b)("li",{parentName:"ul"},"Update ",Object(r.b)("inlineCode",{parentName:"li"},"async-std")," dependency version."),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("a",{parentName:"li",href:"https://tokio.rs/"},"Tokio")," runtime."),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"vc-http-api")," controller pattern routes."),Object(r.b)("li",{parentName:"ul"},"Update ",Object(r.b)("a",{parentName:"li",href:"https://github.com/spruceid/ssi/compare/v0.1.0...1ecb3d90a0fdd06a4ae3b34064a908918b51a230"},Object(r.b)("inlineCode",{parentName:"a"},"ssi")," since ",Object(r.b)("inlineCode",{parentName:"a"},"v0.1.0"))),Object(r.b)("li",{parentName:"ul"},"Change method name to method pattern for ",Object(r.b)("inlineCode",{parentName:"li"},"key-to-did"),"/",Object(r.b)("inlineCode",{parentName:"li"},"keyToDID")," and ",Object(r.b)("inlineCode",{parentName:"li"},"key-to-verification-method"),"/",Object(r.b)("inlineCode",{parentName:"li"},"keyToVerificationMethod"),".")),Object(r.b)("h3",{parentName:"p"},"Fixed"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},"Fixed optionality of ",Object(r.b)("inlineCode",{parentName:"li"},"ssi")," features."),Object(r.b)("li",{parentName:"ul"},"Enable ",Object(r.b)("inlineCode",{parentName:"li"},"http2"),", to fix build."),Object(r.b)("li",{parentName:"ul"},"Improve ",Object(r.b)("inlineCode",{parentName:"li"},"PATH")," quoting, for Windows.")),Object(r.b)("h3",{parentName:"p"},"Security"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},"Update ",Object(r.b)("inlineCode",{parentName:"li"},"node-notifier")," dev dependency.")),Object(r.b)("h2",{parentName:"p"},Object(r.b)("a",{parentName:"h2",href:"https://github.com/spruceid/didkit/releases/tag/v0.1.0"},"0.1.0")," - 2021-01-27"),Object(r.b)("p",{parentName:"p"},Object(r.b)("a",{parentName:"p",href:"https://sprucesystems.medium.com/didkit-v0-1-is-live-d0ea6638dbc9"},"Initial release")),Object(r.b)("h3",{parentName:"p"},"Added"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},"Issuing and verifying JSON-LD ",Object(r.b)("a",{parentName:"li",href:"https://w3c.github.io/vc-data-model/"},"Verifiable Credentials")," and ",Object(r.b)("a",{parentName:"li",href:"https://w3c.github.io/vc-data-model/#presentations-0"},"Verifiable Presentations"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/ld-proofs/"},"Linked data proof")," types ",Object(r.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/lds-rsa2018/"},"RsaSignature2018")," and ",Object(r.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/lds-ed25519-2018/"},"Ed25519Signature2018"),"."),Object(r.b)("li",{parentName:"ul"},"Resolving DID methods ",Object(r.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-method-key/"},"did:key"),", ",Object(r.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-method-web/"},"did:web"),", and ",Object(r.b)("a",{parentName:"li",href:"https://did-tezos-draft.spruceid.com/"},"did:tz")," (layer 1), for proof verification."),Object(r.b)("li",{parentName:"ul"},"Deriving ",Object(r.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-method-key/"},"did:key")," and ",Object(r.b)("a",{parentName:"li",href:"https://did-tezos-draft.spruceid.com/"},"did:tz")," DIDs from Ed25519 keypairs."),Object(r.b)("li",{parentName:"ul"},"Ed25519 keypair generation."),Object(r.b)("li",{parentName:"ul"},"CLI (",Object(r.b)("inlineCode",{parentName:"li"},"didkit"),")."),Object(r.b)("li",{parentName:"ul"},"HTTP server (",Object(r.b)("inlineCode",{parentName:"li"},"didkit-http"),") implementing ",Object(r.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/vc-http-api/versions/v0.0.1/"},"vc-http-api ",Object(r.b)("inlineCode",{parentName:"a"},"0.0.1")),"."),Object(r.b)("li",{parentName:"ul"},"C shared library (",Object(r.b)("inlineCode",{parentName:"li"},"didkit.so"),")."),Object(r.b)("li",{parentName:"ul"},"Java package (",Object(r.b)("inlineCode",{parentName:"li"},"didkit.jar"),")."),Object(r.b)("li",{parentName:"ul"},"Android library (",Object(r.b)("inlineCode",{parentName:"li"},"didkit.aar"),")."),Object(r.b)("li",{parentName:"ul"},"Dart/Flutter plugin."),Object(r.b)("li",{parentName:"ul"},"Apache License, Version 2.0."),Object(r.b)("li",{parentName:"ul"},"Third-party copyright notices."))))}d.isMDXComponent=!0}}]);