(this["webpackJsonpgke-net"]=this["webpackJsonpgke-net"]||[]).push([[0],{11:function(e,t,n){},19:function(e,t,n){e.exports=n(28)},24:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(10),l=n.n(i),o=(n(24),n(3)),s=n(4),u=n(7),c=n(6),p=n(8),h=(n(11),n(9)),m=n(5),d=n(17),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).createOptions=function(){var e=[];return n.props.options.forEach((function(t){e.push(r.a.createElement("option",{value:t.value,key:t.value},t.text))})),e},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.props.changeHandler(e.target.value)}},{key:"render",value:function(){return""===this.props.value||null===this.props.value?r.a.createElement(m.f,{type:"select",name:this.props.name,id:this.props.id,onChange:this.handleChange},this.createOptions()):r.a.createElement(m.f,{type:"select",name:this.props.name,id:this.props.id,onChange:this.handleChange,value:this.props.value},this.createOptions())}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).createOptions=function(){for(var e=n.props.rules.minimum().minimum(),t=n.props.rules.maximum().maximum(),a=[],i=e;i>=t;i--)a.push(r.a.createElement("option",{value:i,key:i},"/",i));return a},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.props.changeHandler(Number(e.target.value))}},{key:"render",value:function(){return""===this.props.value||null===this.props.value?r.a.createElement(m.f,{type:"select",name:"select",id:"exampleSelect",onChange:this.handleChange},this.createOptions()):r.a.createElement(m.f,{type:"select",name:"select",id:"exampleSelect",onChange:this.handleChange,value:this.props.value},this.createOptions())}}]),t}(a.Component),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.props.changeHandler(this.props.propName,e)}},{key:"render",value:function(){return r.a.createElement(m.e,{row:!0},r.a.createElement(m.g,{for:"{this.props.name}",sm:3},this.props.label),r.a.createElement(m.b,{sm:2},r.a.createElement(b,{name:this.props.name,rules:this.props.rules,changeHandler:this.handleChange,value:this.props.value})))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.props.changeHandler(this.props.propName,e)}},{key:"render",value:function(){return r.a.createElement(m.e,{row:!0},r.a.createElement(m.g,{for:"{this.props.name}",sm:3},this.props.label),r.a.createElement(m.b,{sm:2},r.a.createElement(f,{name:this.props.name,id:this.props.name,options:this.props.options,value:this.props.value,changeHandler:this.handleChange})))}}]),t}(a.Component),k=function(e,t){return null==e||t.maximum()>e.maximum()?t:e},O=function(e,t){return null==e||t.maximum()<e.maximum()?t:e},E=function(){function e(t,n){Object(o.a)(this,e),this.minRules=t,this.maxRules=n}return Object(s.a)(e,[{key:"minimum",value:function(){return this.minRules.reduce(O)}},{key:"maximum",value:function(){return this.maxRules.reduce(k)}}]),e}(),j=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"minimum",value:function(){return 24}},{key:"ref",value:function(){return"https://cloud.google.com/kubernetes-engine/docs/how-to/alias-ips#defaults_limits"}}]),e}(),y=function(){function e(t){Object(o.a)(this,e),this.state=t}return Object(s.a)(e,[{key:"maximum",value:function(){return this.state.netmask}}]),e}(),C=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).call(this,[new j],[new y(e)]))}return Object(p.a)(t,e),t}(E),N=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"minimum",value:function(){return 29}},{key:"ref",value:function(){return"https://cloud.google.com/vpc/docs/vpc#manually_created_subnet_ip_ranges"}}]),e}(),w=function(){function e(t){Object(o.a)(this,e),this.state=t}return Object(s.a)(e,[{key:"maximum",value:function(){return this.state.netmask}}]),e}(),x=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).call(this,[new N],[new w(e)]))}return Object(p.a)(t,e),t}(E),R=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"minimum",value:function(){return 27}},{key:"ref",value:function(){return"https://cloud.google.com/kubernetes-engine/docs/how-to/alias-ips#defaults_limits"}}]),e}(),S=function(){function e(t){Object(o.a)(this,e),this.state=t}return Object(s.a)(e,[{key:"maximum",value:function(){return this.state.netmask}}]),e}(),T=function(e){function t(e){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).call(this,[new R],[new S(e)]))}return Object(p.a)(t,e),t}(E),U=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"minimum",value:function(){return 29}}]),e}(),I=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"maximum",value:function(){return 8}}]),e}(),M=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).call(this,[new U],[new I]))}return Object(p.a)(t,e),t}(E),A=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"minimum",value:function(){return 28}}]),e}(),D=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"maximum",value:function(){return 24}}]),e}(),P=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).call(this,[new A],[new D]))}return Object(p.a)(t,e),t}(E),L=function(){function e(t){Object(o.a)(this,e),this.clusterRules=new C(t),this.nodeRules=new x(t),this.serviceRules=new T(t),this.availableNetmaskRules=new M,this.podRules=new P}return Object(s.a)(e,[{key:"getClusterRules",value:function(){return this.clusterRules}},{key:"getNodeRules",value:function(){return this.nodeRules}},{key:"getServiceRules",value:function(){return this.serviceRules}},{key:"getAvailableNetmaskRules",value:function(){return this.availableNetmaskRules}},{key:"getPodRules",value:function(){return this.podRules}}]),e}(),_=[{value:"ZONAL",text:"Zonal"},{value:"MULTI_ZONAL",text:"Multi - zonal"},{value:"REGIONAL",text:"Regional"}],H=[{value:"1",text:"1"},{value:"2",text:"2"},{value:"3",text:"3"}],Z=[{value:"PUBLIC",text:"Public Master"},{value:"SHARE",text:"Share one Master CIDR across all clusters"},{value:"UNIQUE",text:"Create a Unique Master CIDR for each cluster"},{value:"DEFAULT",text:"Use default values for the Master CIDR block"}],G=[{value:"28",text:"8 pods (/28)",max:8},{value:"27",text:"9 to 16 pods (/27)",max:16},{value:"26",text:"17 to 32 pods (/26)",max:32},{value:"25",text:"33 to 64 pods (/25)",max:64},{value:"24",text:"65 to 110 pods (/24)",max:110}],z=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleChangeNetwork=n.handleChangeNetwork.bind(Object(h.a)(n)),n.handleLocationTypeChange=n.handleLocationTypeChange.bind(Object(h.a)(n)),n.handleExtraZonesChange=n.handleExtraZonesChange.bind(Object(h.a)(n)),n.handlePropChange=n.handlePropChange.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleLocationTypeChange",value:function(e){this.props.handleUpdateInput(Object.assign({},this.props.input,{locationType:e}))}},{key:"handleExtraZonesChange",value:function(e){this.props.handleUpdateInput(Object.assign({},this.props.input,{extraZones:e}))}},{key:"handleChangeNetwork",value:function(e){this.props.handleUpdateInput(Object.assign({},this.props.input,{network:e.target.value}))}},{key:"handlePropChange",value:function(e,t){this.props.handleUpdateInput(Object.assign({},this.props.input,Object(d.a)({},e,t)))}},{key:"render",value:function(){var e,t;return"MULTI_ZONAL"===this.props.input.locationType?(e=r.a.createElement(m.g,{for:"extra-zones-select",sm:2},"Extra Zones"),t=r.a.createElement(m.b,{sm:1},r.a.createElement(f,{name:"extra-zones-select",id:"extra-zones-select",options:H,value:this.props.input.extraZones,changeHandler:this.handleExtraZonesChange}))):(e=" ",t=" "),r.a.createElement(m.d,null,r.a.createElement(m.e,{row:!0},r.a.createElement(m.g,{for:"location-type-select",sm:3},"Location Type"),r.a.createElement(m.b,{sm:2},r.a.createElement(f,{name:"location-type-select",id:"location-type-select",options:_,value:this.props.input.locationType,changeHandler:this.handleLocationTypeChange})),e,t),r.a.createElement(m.e,{row:!0},r.a.createElement(m.g,{for:"network",sm:3}," ","Available Network"," ")," ",r.a.createElement(m.b,{sm:2},r.a.createElement(m.f,{name:"network",id:"network",type:"text",placeholder:"10.0.0.0",value:this.props.input.network,onChange:this.handleChangeNetwork})," ")," "),r.a.createElement(g,{name:"available-netmask",label:"Available Netmask",rules:this.props.inputRules.getAvailableNetmaskRules(),changeHandler:this.handlePropChange,value:this.props.input.netmask,propName:"netmask"}),r.a.createElement(g,{name:"node-netmask",label:"Node Subnet mask",rules:this.props.inputRules.getNodeRules(),changeHandler:this.handlePropChange,value:this.props.input.nodeNetmask,propName:"nodeNetmask"}),r.a.createElement(g,{name:"cluster-netmask",label:"Cluster Subnet mask",rules:this.props.inputRules.getClusterRules(),changeHandler:this.handlePropChange,value:this.props.input.clusterNetmask,propName:"clusterNetmask"}),r.a.createElement(v,{name:"node-pod-netmask-select",label:"Maximum Pods (Pod Netmask)",options:G,changeHandler:this.handlePropChange,value:this.props.input.nodePodNetmask,propName:"nodePodNetmask"}),r.a.createElement(g,{name:"service-netmask",label:"Service Subnet mask",rules:this.props.inputRules.getServiceRules(),changeHandler:this.handlePropChange,value:this.props.input.serviceNetmask,propName:"serviceNetmask"}),r.a.createElement(v,{name:"master-block-select",label:"Master CIDR block",options:Z,changeHandler:this.handlePropChange,value:this.props.input.masterNetwork,propName:"masterNetwork"}))}}]),t}(a.Component),V=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"decToDot",value:function(e){return(e>>24&255)+"."+(e>>16&255)+"."+(e>>8&255)+"."+(255&e)}},{key:"dotToDec",value:function(e){var t=e.match(/(\d+)/g),n=0;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var r=Math.pow(2,8*(3-a));n+=t[a]*r}return n}},{key:"netEnd",value:function(e,t){var n=Math.pow(2,32-t)-1;return this.fixSigned(e|n)}},{key:"netStart",value:function(e,t){var n=4294967295-(Math.pow(2,32-t)-1);return this.fixSigned(e&n)}},{key:"findLargestMask",value:function(e,t){for(var n=t-e,a=0;a<32;){if(n<=Math.pow(2,a))return 32-a;a++}return NaN}},{key:"netmaskToDecimal",value:function(e){var t=Math.pow(2,32-e)-1;return this.fixSigned(4294967295^t)}},{key:"fixSigned",value:function(e){if(e<0){var t=2147483647&e;return t+=2147483648}return e}},{key:"netmaskToUsableIps",value:function(e){return Math.pow(2,32-e)}}]),e}(),J=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"pack",value:function(e,t){for(var n=this.sortSubnets(t),a=V.netStart(V.dotToDec(e.net),e.mask),r=V.netEnd(a,e.mask),i=[],l=0;l<n.length;l++){var o=n[l],s=this.fit(a,r,o);if(!s.fit)return{state:"bad"};i.push({name:o.name,mask:o.mask,netStart:a,netEnd:s.end,description:o.description,vpcName:o.vpcName,subnetRangeName:o.subnetRangeName,type:o.type}),a=s.end+1}return{state:"ok",packedNets:i,freeRanges:this.findEmptyRanges(e,a)}}},{key:"fit",value:function(e,t,n){var a=V.netEnd(e,n.mask);return a>t?{fit:!1,end:a}:{fit:!0,end:a}}},{key:"sortSubnets",value:function(e){return e.sort((function(e,t){return e.mask===t.mask?e.name<t.name?-1:e.name>t.name?1:0:e.mask-t.mask}))}},{key:"findEmptyRanges",value:function(e,t){for(var n=V.netStart(V.dotToDec(e.net),e.mask),a=V.netEnd(n,e.mask),r=n+(a-t),i=[],l=n,o=e.mask;o<32;o++){var s={mask:o},u=this.fit(l,r,s);u.fit&&(i.unshift({mask:o,netStart:a-u.end+n,netEnd:a-l+n}),l=u.end+1)}return i}}]),e}(),Y=function(){function e(t){Object(o.a)(this,e);for(var n=new J,a=[],r={net:t.network,mask:t.netmask},i=!0,l=1;i&&l<1001;){for(var s=[],u=l.toString().length,c=1;c<=l;c++)s.push({mask:t.nodeNetmask,name:"node-"+this.pad(u,c),vpcName:"vpc-"+this.pad(u,c),subnetRangeName:"N/A",type:"PRIMARY",description:"Main VPC range for node-"+this.pad(u,c)}),s.push({mask:t.clusterNetmask,name:"cluster-"+this.pad(u,c),vpcName:"vpc-"+this.pad(u,c),subnetRangeName:"cluster-"+this.pad(u,c),type:"SECONDARY",description:"Secondary range for VPC node-"+this.pad(u,c)+" (for pods)"}),s.push({mask:t.serviceNetmask,name:"service-"+this.pad(u,c),vpcName:"vpc-"+this.pad(u,c),subnetRangeName:"service-"+this.pad(u,c),type:"SECONDARY",description:"Secondary range for VPC node-"+this.pad(u,c)+" (for services)"}),"UNIQUE"===t.masterNetwork&&s.push({mask:28,name:"master-"+this.pad(u,c),vpcName:"N/A",subnetRangeName:"N/A",type:"MANAGED",description:"IP range for managed VPC for master(s) for cluster node-"+this.pad(u,c)});"SHARE"===t.masterNetwork&&s.push({mask:28,name:"master",vpcName:"N/A",subnetRangeName:"N/A",type:"MANAGED",description:"Shared IP range for managed VPC for master(s) for all clusters"});var p=n.pack(r,s);"ok"===p.state?a.push({networks:p.packedNets,freeRanges:p.freeRanges}):i=!1,l++}this.combinations=a}return Object(s.a)(e,[{key:"pad",value:function(e,t){return t.toString().padStart(e,"0")}},{key:"getClusterRules",value:function(){return this.clusterRules}},{key:"getNodeRules",value:function(){return this.nodeRules}},{key:"getServiceRules",value:function(){return this.serviceRules}},{key:"getCombinations",value:function(){return this.combinations}}]),e}(),B=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).createOptions=function(){var e=n.props.logic.getCombinations(),t=[];return e.forEach((function(e,n){t.push(r.a.createElement("option",{value:n,key:n},"Number of clusters: ",n+1," "))})),t},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.props.changeHandler(Number(e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.e,{row:!0},r.a.createElement(m.g,{for:"combination",sm:2}," ","Available Combinations"," "),r.a.createElement(m.b,{sm:2},r.a.createElement(m.f,{type:"select",name:"combination",id:"exampleSelect",onChange:this.handleChange}," ",this.createOptions()," ")," ")," "))}}]),t}(a.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"subnetTypeText",value:function(e){return"PRIMARY"===e?"Primary":"SECONDARY"===e?"Secondary":"MANAGED"===e?"Google Managed":"N/A"}},{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null," ",V.decToDot(this.props.network.netStart),"/",this.props.network.mask),r.a.createElement("td",null," ",V.decToDot(this.props.network.netStart)," "),r.a.createElement("td",null," ",V.decToDot(this.props.network.netEnd)," "),r.a.createElement("td",null," ",this.props.network.name," "),r.a.createElement("td",null," ",this.props.network.vpcName," "),r.a.createElement("td",null," ",this.props.network.subnetRangeName," "),r.a.createElement("td",null," ",this.subnetTypeText(this.props.network.type)," "),r.a.createElement("td",null," ",this.props.network.description," "))}}]),t}(a.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null," ",V.decToDot(this.props.network.netStart),"/",this.props.network.mask),r.a.createElement("td",null," ",V.decToDot(this.props.network.netStart)," "),r.a.createElement("td",null," ",V.decToDot(this.props.network.netEnd)," "),r.a.createElement("td",null," /",this.props.network.mask," "))}}]),t}(a.Component),q=function(){function e(t){Object(o.a)(this,e),this.input=t}return Object(s.a)(e,[{key:"maximum",value:function(){var e=this.input.nodeNetmask;return V.netmaskToUsableIps(e)-4}},{key:"ref",value:function(){return["https://cloud.google.com/vpc/docs/vpc#reserved_ip_addresses_in_every_subnet"]}}]),e}(),Q=function(){function e(t){Object(o.a)(this,e),this.input=t}return Object(s.a)(e,[{key:"maximum",value:function(){return V.netmaskToUsableIps(this.input.clusterNetmask)/V.netmaskToUsableIps(this.input.nodePodNetmask)}},{key:"ref",value:function(){return[]}}]),e}(),K=function(){function e(t,n){Object(o.a)(this,e),this.input=t,this.currentMax=n}return Object(s.a)(e,[{key:"maximum",value:function(){return"REGIONAL"===this.input.locationType?this.currentMax-this.currentMax%3:"MULTI_ZONAL"===this.input.locationType?this.currentMax-this.currentMax%(Number.parseInt(this.input.extraZones)+1):this.currentMax}},{key:"ref",value:function(){return[]}}]),e}(),$=function(){function e(t){Object(o.a)(this,e),this.input=t,this.nodeNetworkRules=new q(this.input),this.clusterNetworkRules=new Q(this.input)}return Object(s.a)(e,[{key:"maximum",value:function(){var e=this.nodeNetworkRules.maximum(),t=this.clusterNetworkRules.maximum();return new K(this.input,e<t?e:t).maximum()}},{key:"details",value:function(){var e=[];return e.push({id:"subnet_limit",text:"The node subnet will limit each cluster to a maximum of ".concat(this.nodeNetworkRules.maximum()," node(s).")}),e.push({id:"cluster_limit",text:"The cluster subnet will limit each cluster to a maximum of ".concat(this.clusterNetworkRules.maximum()," node(s).")}),"REGIONAL"===this.input.locationType?e.push({id:"regional_multiple_limit",text:"Nodes in a regional cluster have to be deployed in multiples of three"}):"MULTI_ZONAL"===this.input.locationType&&e.push({id:"zonal_multiple_limit",text:"Nodes in a multi-zonal cluster (with ".concat(this.input.extraZones," extra zone) have to be deployed in multiples of ").concat(Number.parseInt(this.input.extraZones)+1)}),e}}]),e}(),X=function(){function e(t){Object(o.a)(this,e),this.input=t}return Object(s.a)(e,[{key:"maximum",value:function(){return V.netmaskToUsableIps(this.input.serviceNetmask)}}]),e}(),ee=function(){function e(t){Object(o.a)(this,e),this.input=t}return Object(s.a)(e,[{key:"maximum",value:function(){var e;for(e=0;e<G.length;++e)if(G[e].value===this.input.nodePodNetmask)return G[e].max;return NaN}}]),e}(),te=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).createDetail=function(e){var t=[];return e.details().forEach((function(e){t.push(r.a.createElement("div",{key:e.id},e.text))})),t},n.createRows=function(){var e=n.props.logic.getCombinations()[n.state.output.combinationIndex].networks,t=[];return e.forEach((function(e){t.push(r.a.createElement(F,{key:e.name,network:e}))})),t},n.createFreeRows=function(){var e=n.props.logic.getCombinations()[n.state.output.combinationIndex].freeRanges,t=[];return e.forEach((function(e){t.push(r.a.createElement(W,{key:e.netStart,network:e}))})),t},n.createTables=function(){return n.props.logic.getCombinations().length<n.state.output.combinationIndex?r.a.createElement("div",null,r.a.createElement("h3",null," Invalid Combination Selected ")):r.a.createElement("div",null,r.a.createElement("h3",null," VPCs and Subnets required "),r.a.createElement(m.m,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null," Network "),r.a.createElement("th",null," Start "),r.a.createElement("th",null," End "),r.a.createElement("th",null," Name "),r.a.createElement("th",null," VPC Name "),r.a.createElement("th",null," Subnet Range Name "),r.a.createElement("th",null," Subnet Range Type "),r.a.createElement("th",null," Description ")),n.createRows()))," ",r.a.createElement("h3",null," Free Subnets "),r.a.createElement(m.m,null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null," Network "),r.a.createElement("th",null," Start "),r.a.createElement("th",null," End "),r.a.createElement("th",null," Netmask ")),n.createFreeRows())))};return n.state={output:{combinationIndex:0}},n.handleUpdateOutput=n.handleUpdateOutput.bind(Object(h.a)(n)),n.handleChangeCombination=n.handleChangeCombination.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleChangeCombination",value:function(e){this.handleUpdateOutput(Object.assign({},this.state.output,{combinationIndex:e}))}},{key:"handleUpdateOutput",value:function(e){this.setState({output:e})}},{key:"render",value:function(){var e=new $(this.props.input),t=new X(this.props.input),n=new ee(this.props.input);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("b",null," Summary ")," ",r.a.createElement("br",null),"With the current configuration, up to"," ",this.props.logic.getCombinations().length," isolated clusters can be created. ",r.a.createElement("br",null),"Each cluster will suppport: ",r.a.createElement("br",null),"Up to ",e.maximum()," node(s) per cluster. ",r.a.createElement("br",null),"Up to ",t.maximum()," service(s) per cluster. ",r.a.createElement("br",null),"Up to ",n.maximum()," pods per node. ",r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement("b",null,"Details"),r.a.createElement("br",null),this.createDetail(e)),r.a.createElement(B,{logic:this.props.logic,changeHandler:this.handleChangeCombination})," ",this.createTables())}}]),t}(a.Component),ne=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"printReslts",value:function(){return this.props.state.logic&&this.props.state.logic.getCombinations()&&this.props.state.logic.getCombinations().length>0?r.a.createElement(te,{logic:this.props.state.logic,input:this.props.state.input}):r.a.createElement("div",null," Invalid Input ")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null," Results "),this.printReslts())}}]),t}(a.Component),ae=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(c.a)(t).call(this,e))).state={downloadModal:!1,uploadModal:!1,configText:""},n.toggleDownload=n.toggleDownload.bind(Object(h.a)(n)),n.toggleUpload=n.toggleUpload.bind(Object(h.a)(n)),n.uploadConfig=n.uploadConfig.bind(Object(h.a)(n)),n.handleConfigText=n.handleConfigText.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleConfigText",value:function(e){this.setState(Object.assign({},this.state.input,{configText:e.target.value}))}},{key:"toggleDownload",value:function(){this.setState((function(e){return{downloadModal:!e.downloadModal,uploadModal:e.uploadModal,configText:""}}))}},{key:"toggleUpload",value:function(){this.setState((function(e){return{downloadModal:e.downloadModal,uploadModal:!e.uploadModal,configText:""}}))}},{key:"uploadConfig",value:function(){this.toggleUpload(),this.props.handleUploadConfig(this.state.configText)}},{key:"render",value:function(){return r.a.createElement(m.b,{className:"text-right "},r.a.createElement(m.a,{color:"primary",onClick:this.toggleDownload},"Download Config")," ",r.a.createElement(m.h,{isOpen:this.state.downloadModal,toggle:this.toggleDownload},r.a.createElement(m.k,{toggle:this.toggleDownload},"Current Configuration"),r.a.createElement(m.i,null,r.a.createElement("pre",null,this.props.input)),r.a.createElement(m.j,null,r.a.createElement(m.a,{color:"secondary",onClick:this.toggleDownload},"Close"))),r.a.createElement(m.a,{color:"secondary",onClick:this.toggleUpload},"Upload Config")," ",r.a.createElement(m.h,{isOpen:this.state.uploadModal,toggle:this.toggleUpload},r.a.createElement(m.k,{toggle:this.toggleUpload},"Upload Configuration"),r.a.createElement(m.i,null,r.a.createElement(m.f,{type:"textarea",name:"text",id:"exampleText",rows:"15",onChange:this.handleConfigText})),r.a.createElement(m.j,null,r.a.createElement(m.a,{color:"primary",onClick:this.uploadConfig},"Upload"),r.a.createElement(m.a,{color:"secondary",onClick:this.toggleUpload},"Cancel"))))}}]),t}(r.a.Component),re=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(u.a)(this,Object(c.a)(t).call(this,e));var a={network:"10.0.0.0",netmask:16,nodeNetmask:29,clusterNetmask:24,serviceNetmask:24,nodePodNetmask:"24",masterNetwork:"PUBLIC",locationType:"ZONAL",extraZones:1},r=new Y(a),i=new L(a);return n.state={input:a,logic:r,inputRules:i},n.handleUpdateInput=n.handleUpdateInput.bind(Object(h.a)(n)),n.handleUploadConfig=n.handleUploadConfig.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleUploadConfig",value:function(e){var t=JSON.parse(e);this.handleUpdateInput(t)}},{key:"handleUpdateInput",value:function(e){var t;this.validateInput(e)&&(t=new Y(e)),this.setState({input:e,logic:t})}},{key:"validateInput",value:function(e){return!!Number.isInteger(e.netmask)}},{key:"render",value:function(){return r.a.createElement("div",{className:"workspace"},r.a.createElement("br",null),r.a.createElement(m.c,null,r.a.createElement(m.l,null,r.a.createElement(ae,{input:JSON.stringify(this.state.input,null," "),handleUploadConfig:this.handleUploadConfig}))),r.a.createElement("br",null),r.a.createElement(z,{input:this.state.input,inputRules:this.state.inputRules,handleUpdateInput:this.handleUpdateInput}),r.a.createElement("hr",null),r.a.createElement("h2",null,"Input"),r.a.createElement("pre",null,JSON.stringify(this.state.input,null," ")),r.a.createElement(ne,{state:this.state}))}}]),t}(a.Component),ie=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null," GKE IP Address Management ")),r.a.createElement(re,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(27);l.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c4f827ee.chunk.js.map