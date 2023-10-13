"use strict";(self.webpackChunkkadras_docs=self.webpackChunkkadras_docs||[]).push([[152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1,description:"Basic installation of the platform"},o="Installation",i={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Basic installation of the platform",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/kadras-docs/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/kadras-io/kadras-docs/tree/main/docs/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Basic installation of the platform"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/kadras-docs/docs/category/getting-started"},next:{title:"Deploy a Workload",permalink:"/kadras-docs/docs/getting-started/workload"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy Carvel kapp-controller",id:"deploy-carvel-kapp-controller",level:2},{value:"Add the Kadras Repository",id:"add-the-kadras-repository",level:2},{value:"Configure the Platform",id:"configure-the-platform",level:2},{value:"Install the Platform",id:"install-the-platform",level:2},{value:"Verify the Installation",id:"verify-the-installation",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Let's discover how to install Kadras Engineering Platform on a local Kubernetes cluster with ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io"},"kind"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Ensure you have the following tools installed in your local environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes ",(0,r.kt)("a",{parentName:"li",href:"https://kubectl.docs.kubernetes.io/installation/kubectl"},(0,r.kt)("inlineCode",{parentName:"a"},"kubectl"))),(0,r.kt)("li",{parentName:"ul"},"Carvel ",(0,r.kt)("a",{parentName:"li",href:"https://carvel.dev/kapp-controller/docs/latest/install"},(0,r.kt)("inlineCode",{parentName:"a"},"kctrl"))),(0,r.kt)("li",{parentName:"ul"},"Carvel ",(0,r.kt)("a",{parentName:"li",href:"https://carvel.dev/kapp-controller/docs/latest/install/#installing-kapp-controller-cli-kctrl"},(0,r.kt)("inlineCode",{parentName:"a"},"kapp")),".")),(0,r.kt)("p",null,"Then, create a local Kubernetes cluster with ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io"},"kind"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kind create cluster --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nname: kadras\nnodes:\n- role: control-plane\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n")),(0,r.kt)("h2",{id:"deploy-carvel-kapp-controller"},"Deploy Carvel kapp-controller"),(0,r.kt)("p",null,"The platform relies on the Kubernetes-native package management capabilities offered by Carvel ",(0,r.kt)("a",{parentName:"p",href:"https://carvel.dev/kapp-controller"},"kapp-controller"),". You can install it with Carvel ",(0,r.kt)("a",{parentName:"p",href:"https://carvel.dev/kapp/docs/latest/install"},(0,r.kt)("inlineCode",{parentName:"a"},"kapp"))," (recommended choice) or ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kapp deploy -a kapp-controller -y \\\n  -f https://github.com/carvel-dev/kapp-controller/releases/latest/download/release.yml\n")),(0,r.kt)("h2",{id:"add-the-kadras-repository"},"Add the Kadras Repository"),(0,r.kt)("p",null,"Add the Kadras repository to make the platform packages available to the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kctrl package repository add -r kadras-packages \\\n  --url ghcr.io/kadras-io/kadras-packages:0.14.0 \\\n  -n kadras-packages --create-namespace\n")),(0,r.kt)("h2",{id:"configure-the-platform"},"Configure the Platform"),(0,r.kt)("p",null,"The installation of the Kadras Engineering Platform can be configured via YAML. Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yml")," file with any configuration you need for the platform. The following is a minimal configuration example for a local environment, based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," installation profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="values.yml"',title:'"values.yml"'},"platform:\n  profile: run\n  infrastructure_provider: local\n  ingress:\n    domain: 127.0.0.1.sslip.io\n")),(0,r.kt)("p",null,"The Ingress is configured with the special domain ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1.sslip.io")," which will resolve to your localhost and be accessible via the kind cluster."),(0,r.kt)("h2",{id:"install-the-platform"},"Install the Platform"),(0,r.kt)("p",null,"Reference the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yml")," file you created in the previous step and install the Kadras Engineering Platform."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kctrl package install -i engineering-platform \\\n  -p engineering-platform.packages.kadras.io \\\n  -v 0.12.0 \\\n  -n kadras-packages \\\n  --values-file values.yml\n")),(0,r.kt)("h2",{id:"verify-the-installation"},"Verify the Installation"),(0,r.kt)("p",null,"Verify that all the platform components have been installed and properly reconciled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kctrl package installed list -n kadras-packages \n")))}u.isMDXComponent=!0}}]);