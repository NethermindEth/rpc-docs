"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,v=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(v,s(s({ref:t},l),{},{components:n})):r.createElement(v,s({ref:t},l))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={slug:"/spec",sidebar_position:4,title:"RPC spec versions"},s="Using a specific version of the RPC spec",a={unversionedId:"spec",id:"spec",title:"RPC spec versions",description:"The service will support each version of the RPC spec from version v0.4.0 onwards. Specifying the spec version on the path is optional.",source:"@site/docs/spec.md",sourceDirName:".",slug:"/spec",permalink:"/spec",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/spec",sidebar_position:4,title:"RPC spec versions"},sidebar:"tutorialSidebar",previous:{title:"API key",permalink:"/apikey"},next:{title:"References",permalink:"/refs"}},c={},p=[{value:"Latest version",id:"latest-version",level:3},{value:"Specific version",id:"specific-version",level:3}],l={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-a-specific-version-of-the-rpc-spec"},"Using a specific version of the RPC spec"),(0,i.kt)("p",null,"The service will support each version of the RPC spec from version ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.4.0")," onwards. Specifying the spec version on the path is optional."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"v0_5")," on the path to specify version ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.5.0"),"."),(0,i.kt)("h3",{id:"latest-version"},"Latest version"),(0,i.kt)("p",null,"By default, we serve the latest version of the spec implemented by the full nodes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location \'https://limited-rpc.nethermind.io/mainnet-juno/\' \\\n--data \'{\n    "jsonrpc":"2.0",\n    "method":"starknet_specVersion",\n    "id":1\n}\'\n')),(0,i.kt)("h3",{id:"specific-version"},"Specific version"),(0,i.kt)("p",null,"If you need a specific version of the spec, you can add it to the path, like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location \'https://limited-rpc.nethermind.io/mainnet-juno/v0_5\' \\\n--data \'{\n    "jsonrpc":"2.0",\n    "method":"starknet_specVersion",\n    "id":1\n}\'\n')))}f.isMDXComponent=!0}}]);