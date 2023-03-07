"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[50558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={title:"Launching Kubernetes on New Nodes in an Infrastructure Provider"},l=void 0,i={unversionedId:"pages-for-subheaders/use-new-nodes-in-an-infra-provider",id:"pages-for-subheaders/use-new-nodes-in-an-infra-provider",title:"Launching Kubernetes on New Nodes in an Infrastructure Provider",description:"When you create an RKE or RKE2 cluster using a node template in Rancher, each resulting node pool is shown in a new Machine Pools tab. You can see the machine pools by doing the following:",source:"@site/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider",permalink:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider.md",tags:[],version:"current",lastUpdatedAt:1677880261,formattedLastUpdatedAt:"Mar 3, 2023",frontMatter:{title:"Launching Kubernetes on New Nodes in an Infrastructure Provider"},sidebar:"tutorialSidebar",previous:{title:"Launching Kubernetes with Rancher",permalink:"/pages-for-subheaders/launch-kubernetes-with-rancher"},next:{title:"Creating an Amazon EC2 Cluster",permalink:"/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"}},s={},d=[{value:"RKE Clusters",id:"rke-clusters",level:2},{value:"Node Templates",id:"node-templates",level:3},{value:"Node Labels",id:"node-labels",level:4},{value:"Node Taints",id:"node-taints",level:4},{value:"Administrator Control of Node Templates",id:"administrator-control-of-node-templates",level:4},{value:"Node Pools",id:"node-pools",level:3},{value:"Node Pool Taints",id:"node-pool-taints",level:4},{value:"About Node Auto-replace",id:"about-node-auto-replace",level:4},{value:"Enabling Node Auto-replace",id:"enabling-node-auto-replace",level:4},{value:"Disabling Node Auto-replace",id:"disabling-node-auto-replace",level:4},{value:"Cloud Credentials",id:"cloud-credentials",level:3},{value:"Node Drivers",id:"node-drivers",level:3},{value:"RKE2 Clusters",id:"rke2-clusters",level:2},{value:"Node Roles",id:"node-roles",level:3}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you create an RKE or RKE2 cluster using a node template in Rancher, each resulting node pool is shown in a new ",(0,a.kt)("strong",{parentName:"p"},"Machine Pools")," tab. You can see the machine pools by doing the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click  ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the name of the RKE or RKE2 cluster.")),(0,a.kt)("h2",{id:"rke-clusters"},"RKE Clusters"),(0,a.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template"),". This node template defines the parameters you want to use to launch nodes in your infrastructure providers or cloud providers."),(0,a.kt)("p",null,"One benefit of installing Kubernetes on node pools hosted by an infrastructure provider is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected."),(0,a.kt)("p",null,"The available cloud providers to create a node template are decided based on active ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-drivers"},"node drivers"),"."),(0,a.kt)("h3",{id:"node-templates"},"Node Templates"),(0,a.kt)("p",null,"A node template is the saved configuration for the parameters to use when provisioning nodes in a specific cloud provider. These nodes can be launched from the UI. Rancher uses ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine")," to provision these nodes. The available cloud providers to create node templates are based on the active node drivers in Rancher."),(0,a.kt)("p",null,"After you create a node template in Rancher, it's saved so that you can use this template again to create node pools. Node templates are bound to your login. After you add a template, you can remove them from your user profile."),(0,a.kt)("h4",{id:"node-labels"},"Node Labels"),(0,a.kt)("p",null,"You can add ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")," on each node template, so that any nodes created from the node template will automatically have these labels on them."),(0,a.kt)("p",null,"Invalid labels can prevent upgrades or can prevent Rancher from starting. For details on label syntax requirements, see the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"Kubernetes documentation.")),(0,a.kt)("h4",{id:"node-taints"},"Node Taints"),(0,a.kt)("p",null,"You can add ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," on each node template, so that any nodes created from the node template will automatically have these taints on them."),(0,a.kt)("p",null,"Since taints can be added at a node template and node pool, if there is no conflict with the same key and effect of the taints, all taints will be added to the nodes. If there are taints with the same key and different effect, the taints from the node pool will override the taints from the node template."),(0,a.kt)("h4",{id:"administrator-control-of-node-templates"},"Administrator Control of Node Templates"),(0,a.kt)("p",null,"Administrators can control all node templates. Admins can now maintain all the node templates within Rancher. When a node template owner is no longer using Rancher, the node templates created by them can be managed by administrators so the cluster can continue to be updated and maintained."),(0,a.kt)("p",null,"To access all node templates, an administrator will need to do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"RKE1 Configuration > Node Templates"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," All node templates are listed. The templates can be edited or cloned by clicking the ",(0,a.kt)("strong",{parentName:"p"},"\u22ee"),"."),(0,a.kt)("h3",{id:"node-pools"},"Node Pools"),(0,a.kt)("p",null,"Using Rancher, you can create pools of nodes based on a ",(0,a.kt)("a",{parentName:"p",href:"#node-templates"},"node template"),"."),(0,a.kt)("p",null,"A node template defines the configuration of a node, like what operating system to use, number of CPUs, and amount of memory."),(0,a.kt)("p",null,"The benefit of using a node pool is that if a node is destroyed or deleted, you can increase the number of live nodes to compensate for the node that was lost. The node pool helps you ensure that the count of the node pool is as expected."),(0,a.kt)("p",null,"Each node pool must have one or more nodes roles assigned."),(0,a.kt)("p",null,"Each node role (i.e. etcd, controlplane, and worker) should be assigned to a distinct node pool. Although it is possible to assign multiple node roles to a node pool, this should not be done for production clusters."),(0,a.kt)("p",null,"The recommended setup is to have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a node pool with the etcd node role and a count of three"),(0,a.kt)("li",{parentName:"ul"},"a node pool with the controlplane node role and a count of at least two"),(0,a.kt)("li",{parentName:"ul"},"a node pool with the worker node role and a count of at least two")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"RKE1 downstream cluster nodes in an air-gapped environment:")),(0,a.kt)("p",null,"By default, Rancher tries to run the Docker Install script when provisioning RKE1 downstream cluster nodes, such as in vSphere. However, the Rancher Docker installation script would fail in air-gapped environments. To work around this issue, you may choose to skip installing Docker when creating a Node Template where Docker is pre-installed onto a VM image. You can accomplish this by selecting ",(0,a.kt)("strong",{parentName:"p"},"None")," in the dropdown list for ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker Install URL")," under ",(0,a.kt)("strong",{parentName:"p"},"Engine Options")," in the Rancher UI."),(0,a.kt)("figcaption",null,"**Engine Options Dropdown:**"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Engine Options Dropdown",src:n(71481).Z,width:"1749",height:"377"})),(0,a.kt)("h4",{id:"node-pool-taints"},"Node Pool Taints"),(0,a.kt)("p",null,"If you haven't defined ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints")," on your node template, you can add taints for each node pool. The benefit of adding taints at a node pool is beneficial over adding it at a node template is that you can swap out the node templates without worrying if the taint is on the node template."),(0,a.kt)("p",null,"For each taint, they will automatically be added to any created node in the node pool. Therefore, if you add taints to a node pool that have existing nodes, the taints won't apply to existing nodes in the node pool, but any new node added into the node pool will get the taint."),(0,a.kt)("p",null,"When there are taints on the node pool and node template, if there is no conflict with the same key and effect of the taints, all taints will be added to the nodes. If there are taints with the same key and different effect, the taints from the node pool will override the taints from the node template."),(0,a.kt)("h4",{id:"about-node-auto-replace"},"About Node Auto-replace"),(0,a.kt)("p",null,"If a node is in a node pool, Rancher can automatically replace unreachable nodes. Rancher will use the existing node template for the given node pool to recreate the node if it becomes inactive for a specified number of minutes."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Self-healing node pools are designed to help you replace worker nodes for ",(0,a.kt)("b",null,"stateless")," applications. It is not recommended to enable node auto-replace on a node pool of master nodes or nodes with persistent volumes attached, because VMs are treated ephemerally. When a node in a node pool loses connectivity with the cluster, its persistent volumes are destroyed, resulting in data loss for stateful applications.")),(0,a.kt)("p",null,"Node auto-replace works on top of the Kubernetes node controller. The node controller periodically checks the status of all the nodes (configurable via the ",(0,a.kt)("inlineCode",{parentName:"p"},"--node-monitor-period")," flag of the ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller"),"). When a node is unreachable, the node controller will taint that node. When this occurs, Rancher will begin its deletion countdown. You can configure the amount of time Rancher waits to delete the node. If the taint is not removed before the deletion countdown ends, Rancher will proceed to delete the node object. Rancher will then provision a node in accordance with the set quantity of the node pool."),(0,a.kt)("h4",{id:"enabling-node-auto-replace"},"Enabling Node Auto-replace"),(0,a.kt)("p",null,"When you create the node pool, you can specify the amount of time in minutes that Rancher will wait to replace an unresponsive node."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the form for creating or editing a cluster, go to the ",(0,a.kt)("strong",{parentName:"li"},"Node Pools")," section."),(0,a.kt)("li",{parentName:"ol"},"Go to the node pool where you want to enable node auto-replace. In the ",(0,a.kt)("strong",{parentName:"li"},"Recreate Unreachable After")," field, enter the number of minutes that Rancher should wait for a node to respond before replacing the node."),(0,a.kt)("li",{parentName:"ol"},"Fill out the rest of the form for creating or editing the cluster.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Node auto-replace is enabled for the node pool."),(0,a.kt)("h4",{id:"disabling-node-auto-replace"},"Disabling Node Auto-replace"),(0,a.kt)("p",null,"You can disable node auto-replace from the Rancher UI with the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to disable node auto-replace and click ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Node Pools")," section, go to the node pool where you want to enable node auto-replace. In the ",(0,a.kt)("strong",{parentName:"li"},"Recreate Unreachable After")," field, enter 0."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Node auto-replace is disabled for the node pool."),(0,a.kt)("h3",{id:"cloud-credentials"},"Cloud Credentials"),(0,a.kt)("p",null,"Node templates can use cloud credentials to store credentials for launching nodes in your cloud provider, which has some benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Credentials are stored as a Kubernetes secret, which is not only more secure, but it also allows you to edit a node template without having to enter your credentials every time.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"After the cloud credential is created, it can be re-used to create additional node templates.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Multiple node templates can share the same cloud credential to create node pools. If your key is compromised or expired, the cloud credential can be updated in a single place, which allows all node templates that are using it to be updated at once."))),(0,a.kt)("p",null,"After cloud credentials are created, the user can start ",(0,a.kt)("a",{parentName:"p",href:"/reference-guides/user-settings/manage-cloud-credentials"},"managing the cloud credentials that they created"),"."),(0,a.kt)("h3",{id:"node-drivers"},"Node Drivers"),(0,a.kt)("p",null,"If you don't find the node driver that you want to use, you can see if it is available in Rancher's built-in ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers#activating-deactivating-node-drivers"},"node drivers and activate it"),", or you can ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers#adding-custom-node-drivers"},"add your own custom node driver"),"."),(0,a.kt)("h2",{id:"rke2-clusters"},"RKE2 Clusters"),(0,a.kt)("p",null,"Rancher v2.6 introduces provisioning for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"RKE2")," clusters directly from the Rancher UI. RKE2, also known as RKE Government, is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For RKE2 cluster templates, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/manage-cluster-templates#rke2-cluster-template"},"this page")," for additional information. ")),(0,a.kt)("h3",{id:"node-roles"},"Node Roles"),(0,a.kt)("p",null,"The RKE2 CLI exposes two roles, ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"agent"),", which represent the Kubernetes node-roles ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," respectively. With RKE2 integration in Rancher v2.6, RKE2 node pools can represent more fine-grained role assignments such that ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," roles can be represented."),(0,a.kt)("p",null,"The same functionality of using ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," nodes is possible in the RKE2 CLI by using flags and node tainting to control where workloads and the Kubernetes master were scheduled. The reason those roles were not implemented as first-class roles in the RKE2 CLI is that RKE2 is conceptualized as a set of raw building blocks that are best leveraged through an orchestration system such as Rancher."),(0,a.kt)("p",null,"The implementation of the three node roles in Rancher means that Rancher managed RKE2 clusters are able to easily leverage all of the same architectural best practices that are recommended for RKE clusters."),(0,a.kt)("p",null,"In our ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture"},"recommended cluster architecture"),", we outline how many nodes of each role clusters should have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At least three nodes with the role etcd to survive losing one node"),(0,a.kt)("li",{parentName:"ul"},"At least two nodes with the role controlplane for master component high availability"),(0,a.kt)("li",{parentName:"ul"},"At least two nodes with the role worker for workload rescheduling upon node failure")))}p.isMDXComponent=!0},71481:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-template-engine-options-rke1-137fd6915c30677c3da342091f91de9f.png"}}]);