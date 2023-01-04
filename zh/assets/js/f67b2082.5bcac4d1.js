"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[29503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(g,".").concat(d)]||u[d]||c[d]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Rancher Logging \u96c6\u6210",description:"Rancher \u96c6\u6210\u4e86\u4e3b\u6d41\u7684\u65e5\u5fd7\u670d\u52a1\u3002\u4e86\u89e3\u96c6\u6210\u65e5\u5fd7\u670d\u52a1\u7684\u8981\u6c42\u548c\u4f18\u52bf\uff0c\u5e76\u5728\u4f60\u7684\u96c6\u7fa4\u4e0a\u542f\u7528 Logging\u3002"},i=void 0,o={unversionedId:"pages-for-subheaders/logging",id:"pages-for-subheaders/logging",title:"Rancher Logging \u96c6\u6210",description:"Rancher \u96c6\u6210\u4e86\u4e3b\u6d41\u7684\u65e5\u5fd7\u670d\u52a1\u3002\u4e86\u89e3\u96c6\u6210\u65e5\u5fd7\u670d\u52a1\u7684\u8981\u6c42\u548c\u4f18\u52bf\uff0c\u5e76\u5728\u4f60\u7684\u96c6\u7fa4\u4e0a\u542f\u7528 Logging\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/logging.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/logging",permalink:"/zh/pages-for-subheaders/logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/logging.md",tags:[],version:"current",lastUpdatedAt:1672712056,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"Rancher Logging \u96c6\u6210",description:"Rancher \u96c6\u6210\u4e86\u4e3b\u6d41\u7684\u65e5\u5fd7\u670d\u52a1\u3002\u4e86\u89e3\u96c6\u6210\u65e5\u5fd7\u670d\u52a1\u7684\u8981\u6c42\u548c\u4f18\u52bf\uff0c\u5e76\u5728\u4f60\u7684\u96c6\u7fa4\u4e0a\u542f\u7528 Logging\u3002"},sidebar:"tutorialSidebar",previous:{title:"Longhorn - Kubernetes \u7684\u4e91\u539f\u751f\u5206\u5e03\u5f0f\u5757\u5b58\u50a8",permalink:"/zh/integrations-in-rancher/longhorn"},next:{title:"\u67b6\u6784",permalink:"/zh/integrations-in-rancher/logging/logging-architecture"}},g={},p=[{value:"\u542f\u7528 Logging",id:"\u542f\u7528-logging",level:2},{value:"\u5378\u8f7d Logging",id:"\u5378\u8f7d-logging",level:2},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"RBAC",id:"rbac",level:2},{value:"\u914d\u7f6e Logging \u81ea\u5b9a\u4e49\u8d44\u6e90",id:"\u914d\u7f6e-logging-\u81ea\u5b9a\u4e49\u8d44\u6e90",level:2},{value:"Flows \u548c ClusterFlows",id:"flows-\u548c-clusterflows",level:3},{value:"Outputs \u548c ClusterOutputs",id:"outputs-\u548c-clusteroutputs",level:3},{value:"\u914d\u7f6e Logging Helm Chart",id:"\u914d\u7f6e-logging-helm-chart",level:2},{value:"Windows \u652f\u6301",id:"windows-\u652f\u6301",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49 Docker \u6839\u76ee\u5f55",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-docker-\u6839\u76ee\u5f55",level:3},{value:"\u5904\u7406\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6",id:"\u5904\u7406\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6",level:3},{value:"\u5728 SELinux \u4e0a\u4f7f\u7528 Logging V2",id:"\u5728-selinux-\u4e0a\u4f7f\u7528-logging-v2",level:3},{value:"\u5176\u4ed6\u65e5\u5fd7\u6765\u6e90",id:"\u5176\u4ed6\u65e5\u5fd7\u6765\u6e90",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"<code>cattle-logging</code> \u547d\u540d\u7a7a\u95f4\u6b63\u5728\u91cd\u65b0\u521b\u5efa",id:"cattle-logging-\u547d\u540d\u7a7a\u95f4\u6b63\u5728\u91cd\u65b0\u521b\u5efa",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u73b0\u5728\uff0cRancher \u7684\u65e5\u5fd7\u7ba1\u7406\u7531 ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/"},"Banzai Cloud Logging operator")," \u63d0\u4f9b\u652f\u6301\uff0c\u5b83\u53d6\u4ee3\u4e86\u4ee5\u524d\u7684\u5185\u90e8\u89e3\u51b3\u65b9\u6848\u3002"),(0,a.kt)("p",null,"\u6709\u5173 Rancher 2.5 \u66f4\u6539\u7684\u6982\u8ff0\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/logging-architecture#rancher-2-5-%E5%8F%98%E6%9B%B4"},"\u672c\u8282"),"\u3002"),(0,a.kt)("h2",{id:"\u542f\u7528-logging"},"\u542f\u7528 Logging"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u8f6c\u5230",(0,a.kt)("strong",{parentName:"p"},"\u5e94\u7528"),"\u9875\u9762\u5e76\u5b89\u88c5 Logging \u5e94\u7528\u7a0b\u5e8f\uff0c\u4ece\u800c\u4e3a Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u542f\u7528 Logging\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u5b89\u88c5 Logging \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Apps"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Logging")," \u5e94\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6eda\u52a8\u5230 Helm Chart README \u7684\u5e95\u90e8\uff0c\u7136\u540e\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aLogging \u5e94\u7528\u5df2\u90e8\u7f72\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u5378\u8f7d-logging"},"\u5378\u8f7d Logging"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u5b89\u88c5 Logging \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Apps"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5df2\u5b89\u88c5\u7684\u5e94\u7528"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-logging-system")," \u547d\u540d\u7a7a\u95f4\u5e76\u9009\u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-logging")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-logging-crd")," \u6846\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u786e\u8ba4",(0,a.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5378\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-logging"),"\u3002"),(0,a.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,a.kt)("p",null,"\u6709\u5173 Logging \u5e94\u7528\u7a0b\u5e8f\u5de5\u4f5c\u539f\u7406\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/logging-architecture"},"\u672c\u8282"),"\u3002"),(0,a.kt)("h2",{id:"rbac"},"RBAC"),(0,a.kt)("p",null,"Rancher Logging \u6709\u4e24\u4e2a\u89d2\u8272\uff0c\u5206\u522b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-admin")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"logging-view"),"\u3002\u6709\u5173\u5982\u4f55\u4ee5\u53ca\u4f55\u65f6\u4f7f\u7528\u8fd9\u4e9b\u89d2\u8272\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/rbac-for-logging"},"\u6b64\u9875\u9762"),"\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e-logging-\u81ea\u5b9a\u4e49\u8d44\u6e90"},"\u914d\u7f6e Logging \u81ea\u5b9a\u4e49\u8d44\u6e90"),(0,a.kt)("p",null,"\u8981\u7ba1\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u914d\u7f6e Logging \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Logging"),"\u3002")),(0,a.kt)("h3",{id:"flows-\u548c-clusterflows"},"Flows \u548c ClusterFlows"),(0,a.kt)("p",null,"\u6709\u5173\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"Flows")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," \u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows"},"\u6b64\u9875\u9762"),"\u3002"),(0,a.kt)("h3",{id:"outputs-\u548c-clusteroutputs"},"Outputs \u548c ClusterOutputs"),(0,a.kt)("p",null,"\u6709\u5173\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterOutputs")," \u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"},"\u6b64\u9875\u9762"),"\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e-logging-helm-chart"},"\u914d\u7f6e Logging Helm Chart"),(0,a.kt)("p",null,"\u6709\u5173\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Logging \u5e94\u7528\u7a0b\u5e8f\u65f6\u53ef\u914d\u7f6e\u7684\u9009\u9879\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/logging-helm-chart-options"},"\u6b64\u9875\u9762"),"\u3002"),(0,a.kt)("h3",{id:"windows-\u652f\u6301"},"Windows \u652f\u6301"),(0,a.kt)("p",null,"Windows \u96c6\u7fa4\u652f\u6301 Logging\uff0c\u4f60\u53ef\u4ee5\u6536\u96c6 Windows \u8282\u70b9\u7684\u65e5\u5fd7\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u5982\u4f55\u5728 Windows \u8282\u70b9\u4e0a\u542f\u7528\u6216\u7981\u7528 Logging \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/logging-helm-chart-options#%E5%90%AF%E7%94%A8/%E7%A6%81%E7%94%A8-windows-%E8%8A%82%E7%82%B9-logging"},"\u672c\u8282"),"\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-docker-\u6839\u76ee\u5f55"},"\u4f7f\u7528\u81ea\u5b9a\u4e49 Docker \u6839\u76ee\u5f55"),(0,a.kt)("p",null,"\u6709\u5173\u4f7f\u7528\u81ea\u5b9a\u4e49 Docker \u6839\u76ee\u5f55\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/logging-helm-chart-options#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%AE%9A%E4%B9%89-docker-%E6%A0%B9%E7%9B%AE%E5%BD%95"},"\u672c\u8282"),"\u3002"),(0,a.kt)("h3",{id:"\u5904\u7406\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6"},"\u5904\u7406\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6"),(0,a.kt)("p",null,"\u6709\u5173\u5982\u4f55\u5728 Logging \u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/taints-and-tolerations"},"\u6b64\u9875\u9762"),"\u3002"),(0,a.kt)("h3",{id:"\u5728-selinux-\u4e0a\u4f7f\u7528-logging-v2"},"\u5728 SELinux \u4e0a\u4f7f\u7528 Logging V2"),(0,a.kt)("p",null,"\u6709\u5173\u5728\u542f\u7528\u4e86 SELinux \u7684\u8282\u70b9\u4e0a\u4f7f\u7528 Logging \u5e94\u7528\u7a0b\u5e8f\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/logging-helm-chart-options#%E5%90%AF%E7%94%A8-logging-%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E4%BB%A5%E4%BD%BF%E7%94%A8-selinux"},"\u672c\u8282"),"\u3002"),(0,a.kt)("h3",{id:"\u5176\u4ed6\u65e5\u5fd7\u6765\u6e90"},"\u5176\u4ed6\u65e5\u5fd7\u6765\u6e90"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4f1a\u6536\u96c6\u6240\u6709\u7c7b\u578b\u96c6\u7fa4\u7684 controlplane \u7ec4\u4ef6\u548c\u8282\u70b9\u7ec4\u4ef6\u7684\u65e5\u5fd7\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e5f\u4f1a\u6536\u96c6\u5176\u4ed6\u65e5\u5fd7\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/logging/logging-helm-chart-options#%E5%85%B6%E4%BB%96%E6%97%A5%E5%BF%97%E6%9D%A5%E6%BA%90"},"\u672c\u8282"),"\u3002"),(0,a.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,a.kt)("h3",{id:"cattle-logging-\u547d\u540d\u7a7a\u95f4\u6b63\u5728\u91cd\u65b0\u521b\u5efa"},(0,a.kt)("inlineCode",{parentName:"h3"},"cattle-logging")," \u547d\u540d\u7a7a\u95f4\u6b63\u5728\u91cd\u65b0\u521b\u5efa"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u4e4b\u524d\u5728\u65e7\u7248 Rancher UI \u7684\u5168\u5c40\u89c6\u56fe\u4e2d\u90e8\u7f72\u4e86 Logging\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging")," \u547d\u540d\u7a7a\u95f4\u53ef\u80fd\u4f1a\u4e0d\u65ad\u88ab\u91cd\u65b0\u521b\u5efa\u3002"),(0,a.kt)("p",null,"\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u5c06\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterloggings.management.cattle.io")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"projectloggings.management.cattle.io")," \u81ea\u5b9a\u4e49\u8d44\u6e90\u4ece\u7ba1\u7406\u96c6\u7fa4\u4e2d\u9488\u5bf9\u8be5\u96c6\u7fa4\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u5220\u9664\u3002\n\u8fd9\u4e9b\u81ea\u5b9a\u4e49\u8d44\u6e90\u4f1a\u5bfc\u81f4 Rancher \u5728\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging")," \u547d\u540d\u7a7a\u95f4\uff08\u5982\u679c\u4e0d\u5b58\u5728\uff09\u3002"),(0,a.kt)("p",null,"\u96c6\u7fa4\u547d\u540d\u7a7a\u95f4\u4e0e\u96c6\u7fa4 ID \u5339\u914d\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u627e\u5230\u6bcf\u4e2a\u96c6\u7fa4\u7684\u96c6\u7fa4 ID\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u83b7\u53d6 ID \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ece\u4ee5\u4e0b\u5176\u4e2d\u4e00\u4e2a URL \u4e2d\u590d\u5236 ",(0,a.kt)("inlineCode",{parentName:"li"},"<cluster-id>")," \u7684\u5185\u5bb9\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"<cluster-id>")," \u662f\u96c6\u7fa4\u547d\u540d\u7a7a\u95f4\u540d\u79f0\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Cluster Management UI\nhttps://<your-url>/c/<cluster-id>/\n\n# Cluster Dashboard\nhttps://<your-url>/dashboard/c/<cluster-id>/\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6709\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"<cluster-id>")," \u547d\u540d\u7a7a\u95f4\uff0c\u6211\u4eec\u53ef\u4ee5\u5220\u9664\u5bfc\u81f4 ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-logging")," \u4e0d\u65ad\u91cd\u65b0\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\u3002\n",(0,a.kt)("em",{parentName:"p"},"\u8b66\u544a"),"\uff1a\u8bf7\u5f53\u524d\u672a\u4f7f\u7528\u786e\u4fdd Logging\uff08\u4ece\u65e7\u7248 Rancher UI \u5168\u5c40\u89c6\u56fe\u4e2d\u5b89\u88c5\u7684\u7248\u672c\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete clusterloggings.management.cattle.io -n <cluster-id>\nkubectl delete projectloggings.management.cattle.io -n <cluster-id>\n")))}c.isMDXComponent=!0}}]);