(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-535e"],{CJ5O:function(t,e,a){"use strict";var n=a("14Xm"),i=a.n(n),r=a("D3Ub"),s=a.n(r),o=a("sm2R"),l={name:"GetDictionary",props:{dictKey:String,updataDict:String},data:function(){return{dictionary:"",dictionaryOptions:[]}},watch:{dictKey:{immediate:!0,handler:function(){this.getSystem()}},updataDict:{immediate:!0,handler:function(){this.dictionary=this.updataDict}}},created:function(){this.getSystem()},mounted:function(){this.dictionary=this.updataDict},methods:{getSystem:function(){var t=this;return s()(i.a.mark(function e(){var a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)(t.dictKey);case 2:if(a=e.sent,n=a.code,r=a.data,"200"==n){e.next=7;break}return e.abrupt("return");case 7:t.dictionaryOptions=r;case 8:case"end":return e.stop()}},e,t)}))()},selectChange:function(t){this.$emit("input",t)}}},c=(a("DWg2"),a("KHd+")),u=Object(c.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{attrs:{placeholder:"请选择",clearable:"",size:"mini"},on:{change:t.selectChange},model:{value:t.dictionary,callback:function(e){t.dictionary=e},expression:"dictionary"}},t._l(t.dictionaryOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.text,value:t.id}})}),1)},[],!1,null,"1fbe2153",null);u.options.__file="index.vue";e.a=u.exports},DWg2:function(t,e,a){"use strict";var n=a("FaPW");a.n(n).a},FaPW:function(t,e,a){},HDHf:function(t,e,a){"use strict";a.d(e,"d",function(){return i}),a.d(e,"a",function(){return r}),a.d(e,"g",function(){return s}),a.d(e,"f",function(){return o}),a.d(e,"i",function(){return l}),a.d(e,"l",function(){return c}),a.d(e,"k",function(){return u}),a.d(e,"j",function(){return d}),a.d(e,"b",function(){return m}),a.d(e,"h",function(){return f}),a.d(e,"e",function(){return p}),a.d(e,"c",function(){return h});var n=a("t3Un");function i(t){return Object(n.a)({url:"/dataSet/detailBysetId/"+t.id,method:"get"})}function r(t){return Object(n.a)({url:"/dataSet",method:"post",data:t})}function s(t){return Object(n.a)({url:"/dataSet",method:"put",data:t})}function o(t){return Object(n.a)({url:"/dataSet/"+t.id,method:"delete",data:t})}function l(t){return Object(n.a)({url:"/dataSource/queryAllDataSource",method:"get",data:t})}function c(t){return Object(n.a)({url:"/dataSetParam/verification",method:"post",data:t})}function u(t){return Object(n.a)({url:"/dataSet/testTransform",method:"post",data:t})}function d(t){return Object(n.a)({url:"/report/pageList",method:"get",params:t})}function m(t){return Object(n.a)({url:"/report",method:"post",data:t})}function f(t){return Object(n.a)({url:"/report",method:"put",data:t})}function p(t){return Object(n.a)({url:"/report/delReport",method:"delete",data:t})}function h(t){return Object(n.a)({url:"/dataSet/pageList?page="+t.page+"&size="+t.size+"&sort="+t.sort+"&order="+t.order+"&pageNumber="+t.pageNumber+"&pageSize="+t.pageSize,method:"GET",data:t})}},"PD+m":function(t,e,a){},j5TT:function(t,e,a){t.exports=function(t){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=3)}([function(e,a){e.exports=t},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n),r=window.CodeMirror||i.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var a=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(a[r]=i[r])}return a},writable:!0,configurable:!0}),e.default={name:"codemirror",data:function(){return{content:"",codemirror:null,cminstance:null}},props:{code:String,value:String,marker:Function,unseenLines:Array,name:{type:String,default:"codemirror"},placeholder:{type:String,default:""},merge:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{}}},globalEvents:{type:Array,default:function(){return[]}}},watch:{options:{deep:!0,handler:function(t){for(var e in t)this.cminstance.setOption(e,t[e])}},merge:function(){this.$nextTick(this.switchMerge)},code:function(t){this.handerCodeChange(t)},value:function(t){this.handerCodeChange(t)}},methods:{initialize:function(){var t=this,e=Object.assign({},this.globalOptions,this.options);this.merge?(this.codemirror=r.MergeView(this.$refs.mergeview,e),this.cminstance=this.codemirror.edit):(this.codemirror=r.fromTextArea(this.$refs.textarea,e),this.cminstance=this.codemirror,this.cminstance.setValue(this.code||this.value||this.content)),this.cminstance.on("change",function(e){t.content=e.getValue(),t.$emit&&t.$emit("input",t.content)});var a={};["scroll","changes","beforeChange","cursorActivity","keyHandled","inputRead","electricInput","beforeSelectionChange","viewportChange","swapDoc","gutterClick","gutterContextMenu","focus","blur","refresh","optionChange","scrollCursorIntoView","update"].concat(this.events).concat(this.globalEvents).filter(function(t){return!a[t]&&(a[t]=!0)}).forEach(function(e){t.cminstance.on(e,function(){for(var a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];t.$emit.apply(t,[e].concat(n));var r=e.replace(/([A-Z])/g,"-$1").toLowerCase();r!==e&&t.$emit.apply(t,[r].concat(n))})}),this.$emit("ready",this.codemirror),this.unseenLineMarkers(),this.refresh()},refresh:function(){var t=this;this.$nextTick(function(){t.cminstance.refresh()})},destroy:function(){var t=this.cminstance.doc.cm.getWrapperElement();t&&t.remove&&t.remove()},handerCodeChange:function(t){if(t!==this.cminstance.getValue()){var e=this.cminstance.getScrollInfo();this.cminstance.setValue(t),this.content=t,this.cminstance.scrollTo(e.left,e.top)}this.unseenLineMarkers()},unseenLineMarkers:function(){var t=this;void 0!==this.unseenLines&&void 0!==this.marker&&this.unseenLines.forEach(function(e){var a=t.cminstance.lineInfo(e);t.cminstance.setGutterMarker(e,"breakpoints",a.gutterMarkers?null:t.marker())})},switchMerge:function(){var t=this.cminstance.doc.history,e=this.cminstance.doc.cleanGeneration;this.options.value=this.cminstance.getValue(),this.destroy(),this.initialize(),this.cminstance.doc.history=t,this.cminstance.doc.cleanGeneration=e}},mounted:function(){this.initialize()},beforeDestroy:function(){this.destroy()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),i=a.n(n);for(var r in n)["default","default"].indexOf(r)<0&&function(t){a.d(e,t,function(){return n[t]})}(r);var s=a(5),o=a(4),l=o(i.a,s.a,!1,null,null,null);e.default=l.exports},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.install=e.codemirror=e.CodeMirror=void 0;var i=a(0),r=n(i),s=a(2),o=n(s),l=window.CodeMirror||r.default,c=function(t,e){e&&(e.options&&(o.default.props.globalOptions.default=function(){return e.options}),e.events&&(o.default.props.globalEvents.default=function(){return e.events})),t.component(o.default.name,o.default)},u={CodeMirror:l,codemirror:o.default,install:c};e.default=u,e.CodeMirror=l,e.codemirror=o.default,e.install=c},function(t,e){t.exports=function(t,e,a,n,i,r){var s,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(s=t,o=t.default);var c,u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var d=u.functional,m=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),m(t,e)}):u.beforeCreate=m?[].concat(m,c):[c]}return{esModule:s,exports:o,options:u}}},function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-codemirror",class:{merge:t.merge}},[t.merge?a("div",{ref:"mergeview"}):a("textarea",{ref:"textarea",attrs:{name:t.name,placeholder:t.placeholder}})])},staticRenderFns:[]};e.a=n}])}(a("VrN/"))},nj68:function(t,e,a){"use strict";var n=a("PD+m");a.n(n).a},z9F4:function(t,e,a){"use strict";a.r(e);var n=a("YEIV"),i=a.n(n),r=a("P2sY"),s=a.n(r),o=a("gDS+"),l=a.n(o),c=a("14Xm"),u=a.n(c),d=a("D3Ub"),m=a.n(d),f=a("HDHf"),p=a("CJ5O"),h=a("j5TT"),b=(a("/9rB"),a("+dQi"),a("p77/"),a("qNmG"),a("RaMD")),v={name:"Support",components:{Dictionary:p.a,codemirror:h.codemirror,vueJsonEditor:b.a},dicts:["pricing_method"],data:function(){return{data:[],listLoading:!0,permission:{add:["admin","alipayConfig:add"],edit:["admin","alipayConfig:edit"],del:["admin","datasource:del"]},code:"",optionsSql:{mode:"text/x-sql",tabSize:2,lineNumbers:!0,line:!0,styleActiveLine:!0,hintOptions:{completeSingle:!0}},optionsJavascript:{mode:"text/javascript",tabSize:2,lineNumbers:!0,line:!0,styleActiveLine:!0,hintOptions:{completeSingle:!0}},selectedList:[],clickType:"",formData:{},dialogFormVisible:!1,dialogFormVisibleTitle:"",dialogPermissionVisible:!1,dialogSwitchVisible:!1,permissionTextarea:"",isItemFilterType:"",itemFilterList:[{transformType:"js",transformScript:"function dataTransform(data){\n          //自定义脚本内容\n          return data;\n        }"}],transformScript:"function dataTransform(data){\n          //自定义脚本内容\n          return data;\n        }",itemFilterScriptId:"",title:"自定义高级规则",totalCount:0,totalPage:0,params:{pageNumber:1,pageSize:10,helpTitle:"",enabled:null,helpCategory:"",order:"DESC",sort:"update_time"},formRules:{setName:[{required:!0,message:"数据集名称必填",trigger:"blur"}],setCode:[{required:!0,message:"数据集编码必填",trigger:"blur"}],sourceCode:[{required:!0,message:"数据源必选",trigger:"change"}]},sourceList:[],validationRules:"",tabsActiveName:"first",cols:[],tableData:[{paramName:"",paramDesc:"",paramType:"",sampleItem:"",mandatory:!0,requiredFlag:1,validationRules:"function verification(data){\n          //自定义脚本内容\n          return true;\n        }"}],isRowData:{},tableData2:[],dialogTitle:"js脚本填写",isShowPagination:!1,updataDisabled:!1,dialogCaseResult:!1,caseResultTitle:"",caseResultContent:null,testMassageCode:null,query:{setName:"",setCode:""}}},watch:{},beforeCreate:function(){},mounted:function(){this.queryByPage()},created:function(){this.getAllDataSourceSet()},methods:{search:function(){this.params.pageNumber=1,this.queryByPage()},reset:function(t){this.query.setName="",this.query.setCode="",this.params.pageNumber=1,this.queryByPage()},queryByPage:function(){var t=this;return m()(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={page:t.params.pageNumber,size:t.params.pageSize,sort:"update_time",order:"DESC",pageNumber:t.params.pageNumber,pageSize:t.params.pageSize},e.next=3,Object(f.c)(a);case 3:if("200"==(n=e.sent).code){e.next=6;break}return e.abrupt("return");case 6:t.listLoading=!0,t.data=n.data.records,t.totalCount=n.data.total,t.totalPage=n.data.pages,t.listLoading=!1;case 11:case"end":return e.stop()}},e,t)}))()},handleSizeChange:function(t){this.params.pageSize=t,this.queryByPage()},handleCurrentChange:function(t){this.params.pageNumber=t,this.queryByPage()},onJsonChange:function(t){},onJsonSave:function(t){},handleClose:function(t){this.dialogFormVisible=!1},isShowCaseResult:function(t){this.dialogCaseResult=!0,this.caseResultTitle=t.setName,this.caseResultContent=JSON.parse(t.caseResult)},delect:function(t){var e=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(m()(u.a.mark(function a(){var n,i;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.$emit("deletelayer"),e.visible=!1,a.next=4,Object(f.f)(t);case 4:if(n=a.sent,i=n.code,n.data,"200"==i){a.next=9;break}return a.abrupt("return");case 9:e.queryByPage(),e.$message({type:"success",message:"删除成功!"});case 11:case"end":return a.stop()}},a,e)}))).catch(function(){e.$message({type:"info",message:"已取消删除"})})},addOrEditDataSet:function(t){var e=this;this.dialogFormVisible=!0,this.tabsActiveName="first",this.testMassageCode=null,null!=t?(this.updataDisabled=!0,this.dialogFormVisibleTitle="编辑数据集",Object(f.d)(t).then(function(t){if(e.formData=t.data,null!=t.data.dataSetParamDtoList||t.data.dataSetParamDtoList.length>0){e.tableData=t.data.dataSetParamDtoList;var a=0;e.tableData.find(function(t,n){"pageNumber"!==t.paramName&&"pageSize"!==t.paramName||a++,1==t.requiredFlag?e.tableData[n].mandatory=!0:e.tableData[n].mandatory=!1}),e.isShowPagination=2===a}else e.tableData=[],e.isShowPagination=!1;null!==t.data.dataSetTransformDtoList?e.itemFilterList=t.data.dataSetTransformDtoList:e.itemFilterList=[],e.itemFilterList.forEach(function(t,a){if("dict"==t.transformType){var n=JSON.parse(t.transformScript),i=[];for(var r in n){var s=[];for(var o in n[r])s.push({name:o,value:n[r][o]});i.push({name:r,children:s})}e.tableData2=i}})})):(this.dialogFormVisibleTitle="新增数据集",this.updataDisabled=!1,this.formData={setName:"",setCode:"",setDesc:"",sourceCode:"",dynSentence:""},this.tableData=[],this.itemFilterList=[],this.isShowPagination=!1)},getAllDataSourceSet:function(){var t=this;return m()(u.a.mark(function e(){var a,n,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.i)();case 2:if(a=e.sent,n=a.code,i=a.data,"200"==n){e.next=7;break}return e.abrupt("return");case 7:t.sourceList=i;case 8:case"end":return e.stop()}},e,t)}))()},handleClickTabs:function(t,e){var a=this;return m()(u.a.mark(function e(){var n,i,r,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("third"!=t.paneName){e.next=11;break}return n={sourceCode:a.formData.sourceCode,dynSentence:a.formData.dynSentence,dataSetParamDtoList:a.tableData,dataSetTransformDtoList:a.itemFilterList},e.next=4,Object(f.k)(n);case 4:if(i=e.sent,r=i.code,s=i.data,"200"==r){e.next=9;break}return e.abrupt("return");case 9:a.cols=s.data,a.testMassageCode=r;case 11:case"end":return e.stop()}},e,a)}))()},Mandatory:function(t){this.tableData[t].mandatory?this.tableData[t].requiredFlag=1:this.tableData[t].requiredFlag=0},changePagination:function(){var t=this;this.isShowPagination?this.tableData.push({paramName:"pageNumber",paramDesc:"当前页",paramType:"int",sampleItem:"1",mandatory:!0,requiredFlag:1,validationRules:"function verification(data){\n            //自定义脚本内容\n            return true;\n          }"},{paramName:"pageSize",paramDesc:"条数",paramType:"int",sampleItem:"10",mandatory:!0,requiredFlag:1,validationRules:"function verification(data){\n          //自定义脚本内容\n          return true;\n          }"}):this.tableData.forEach(function(e,a){"pageSize"!=e.paramName&&"pageNumber"!=e.paramName||t.tableData.splice(a,2)})},filterScriptBtn:function(t){var e=this;return m()(u.a.mark(function a(){var n;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:console.log(t),e.isItemFilterType=t,e.dialogSwitchVisible=!0,"js"==t.transformType?(e.itemFilterScriptId=t.itemFilterSort,n="function dataTransform(data){\n          //自定义脚本内容\n          return data;\n        }",e.transformScript=t.transformScript?t.transformScript:n):t.transformType;case 4:case"end":return a.stop()}},a,e)}))()},filterScriptConfirm:function(){var t=this,e=this.toObject(this.tableData2);this.itemFilterList.forEach(function(a,n){"dict"==a.transformType?a.transformScript=l()(e):a.transformScript=t.transformScript}),this.dialogSwitchVisible=!1},addFilter:function(){var t={};this.tableData2=[],t=0==this.itemFilterList.length?{transformType:"",transformScript:"",itemFilterSort:1}:{transformType:"",transformScript:"",itemFilterSort:this.itemFilterList.length+1},this.itemFilterList.push(t)},reduceFilter:function(t){if(this.itemFilterList.length>1){var e=this.itemFilterList.indexOf(t);e>-1&&this.itemFilterList.splice(e,1)}},permissionClick:function(t,e){if(this.title="自定义高级规则",""!=this.isRowData.sampleItem){this.isRowData=t;this.validationRules=t.validationRules?t.validationRules:"function verification(data){\n          //自定义脚本内容\n          return true;\n        }"}this.dialogPermissionVisible=!0},dialogValidationRules:function(){this.isRowData.validationRules=this.validationRules,this.dialogPermissionVisible=!1},addAllDict:function(){this.tableData2.push({name:"",children:[{name:"",value:""}]})},addDict:function(t,e){e.push({name:"",value:""})},delAllDict:function(t,e){e.splice(t,1)},delDict:function(t,e){0!=t?e.splice(t,1):this.$message.error("至少保留一条")},changeSource:function(){},testResultset:function(){this.isRowData.validationRules=this.validationRules,Object(f.l)(this.isRowData).then(function(t){})},cutOutRow:function(t,e){e.splice(t,1)},addRow:function(t,e){this.tableData.push({paramName:"",paramDesc:"",paramType:"",sampleItem:"",mandatory:!0,requiredFlag:1,validationRules:"function verification(data){\n          //自定义脚本内容\n          return true;\n        }"})},submit:function(t){var e=this;return m()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.$refs[t].validate(function(){var t=m()(u.a.mark(function t(a,n){var i,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=29;break}if(200!=e.testMassageCode){t.next=25;break}if(e.formData.dataSetParamDtoList=e.tableData,e.formData.dataSetTransformDtoList=e.itemFilterList,e.formData.caseResult=l()(e.cols),"新增数据集"!==e.dialogFormVisibleTitle){t.next=15;break}return t.next=8,Object(f.a)(e.formData);case 8:if(i=t.sent,"200"==i.code){t.next=12;break}return t.abrupt("return");case 12:e.queryByPage(),t.next=22;break;case 15:return t.next=17,Object(f.g)(e.formData);case 17:if(r=t.sent,"200"==r.code){t.next=21;break}return t.abrupt("return");case 21:e.queryByPage();case 22:e.dialogFormVisible=!1,t.next=27;break;case 25:return e.$message.error("请先测试预览，操作成功后便可保存！"),t.abrupt("return");case 27:t.next=30;break;case 29:return t.abrupt("return");case 30:case"end":return t.stop()}},t,e)}));return function(e,a){return t.apply(this,arguments)}}());case 1:case"end":return a.stop()}},a,e)}))()},toObject:function(t){var e={},a={};t.forEach(function(t){t.name&&(e[t.name]=t.children)});var n=function(t){var n={};e[t].map(function(t){s()(n,i()({},t.name,t.value))}),a[t]=n};for(var r in e)n(r);return a}}},g=(a("nj68"),a("KHd+")),y=Object(g.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"permission",rawName:"v-permission",value:"resultsetManage:query",expression:"'resultsetManage:query'"}]},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:20,md:6,lg:6,xl:6}},[a("el-form-item",{attrs:{label:"数据集编码","label-width":"120px"}},[a("el-input",{staticClass:"filter-item",attrs:{size:"mini",clearable:"",placeholder:"数据集编码"},model:{value:t.query.setCode,callback:function(e){t.$set(t.query,"setCode","string"==typeof e?e.trim():e)},expression:"query.setCode"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:20,md:6,lg:6,xl:6}},[a("el-form-item",{attrs:{label:"数据集名称","label-width":"120px"}},[a("el-input",{staticClass:"filter-item",attrs:{size:"mini",clearable:"",placeholder:"数据源名称"},model:{value:t.query.setName,callback:function(e){t.$set(t.query,"setName","string"==typeof e?e.trim():e)},expression:"query.setName"}})],1)],1),t._v(" "),a("el-col",{staticClass:"query",attrs:{xs:24,sm:20,md:4,lg:4,xl:4}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.search("form")}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.reset("form")}}},[t._v("重置")])],1)],1)],1),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"resultsetManage:insert",expression:"'resultsetManage:insert'"}],attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.addOrEditDataSet()}}},[t._v("+ 新增")]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"table",staticClass:"mt10",staticStyle:{width:"100%"},attrs:{border:"",data:t.data,size:"small"}},[a("el-table-column",{attrs:{align:"center",label:"序号",type:"index","min-width":"40"}}),t._v(" "),a("el-table-column",{attrs:{prop:"setName",label:"数据集名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"setCode",label:"数据集编码"}}),t._v(" "),a("el-table-column",{attrs:{prop:"setDesc",label:"描述"}}),t._v(" "),a("el-table-column",{attrs:{label:"折叠列"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(a){return t.isShowCaseResult(e.row)}}},[t._v("查看")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createBy",width:"100",label:"创建人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",width:"140",label:"创建人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateBy",width:"100",label:"更新人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",width:"140",label:"更新时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"resultsetManage:update",expression:"'resultsetManage:update'"}],attrs:{size:"mini",type:"text"},on:{click:function(a){return t.addOrEditDataSet(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"resultsetManage:delete",expression:"'resultsetManage:delete'"}],attrs:{slot:"reference",type:"text"},on:{click:function(a){return t.delect(e.row)}},slot:"reference"},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{total:t.totalCount,"page-sizes":[10,20,50,100],"page-size":t.params.pageSize,"current-page":t.params.pageNumber,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogFormVisible,title:t.dialogFormVisibleTitle,"close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":t.handleClose,width:"65%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.formData,rules:t.formRules,size:"small","label-width":"130px"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:20,md:6,lg:6,xl:6}},[a("el-form-item",{attrs:{label:"数据源",prop:"sourceCode"}},[a("el-select",{staticClass:"organisation",attrs:{size:"mini"},on:{change:t.changeSource},model:{value:t.formData.sourceCode,callback:function(e){t.$set(t.formData,"sourceCode","string"==typeof e?e.trim():e)},expression:"formData.sourceCode"}},t._l(t.sourceList,function(t){return a("el-option",{key:t.sourceName,attrs:{label:t.sourceName,value:t.sourceCode}})}),1)],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:20,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{label:"数据集编码",prop:"setCode"}},[a("el-input",{attrs:{disabled:t.updataDisabled,size:"mini"},model:{value:t.formData.setCode,callback:function(e){t.$set(t.formData,"setCode","string"==typeof e?e.trim():e)},expression:"formData.setCode"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:20,md:8,lg:8,xl:8}},[a("el-form-item",{attrs:{label:"数据集名称",prop:"setName"}},[a("el-input",{attrs:{size:"mini"},model:{value:t.formData.setName,callback:function(e){t.$set(t.formData,"setName","string"==typeof e?e.trim():e)},expression:"formData.setName"}})],1)],1),t._v(" "),a("el-col",{attrs:{xs:24,sm:20,md:22,lg:22,xl:22}},[a("el-form-item",{attrs:{label:"数据集描述"}},[a("el-input",{attrs:{size:"mini"},model:{value:t.formData.setDesc,callback:function(e){t.$set(t.formData,"setDesc","string"==typeof e?e.trim():e)},expression:"formData.setDesc"}})],1)],1),t._v(" "),a("el-col",{staticClass:"code-mirror-form",attrs:{xs:24,sm:20,md:22,lg:22,xl:22}},[a("el-form-item",{attrs:{label:"查询SQL或请求体"}},[a("div",{staticClass:"codemirror"},[a("codemirror",{staticStyle:{height:"190px"},attrs:{options:t.optionsSql},model:{value:t.formData.dynSentence,callback:function(e){t.$set(t.formData,"dynSentence","string"==typeof e?e.trim():e)},expression:"formData.dynSentence"}})],1)])],1)],1),t._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,sm:20,md:22,lg:22,xl:22}},[a("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClickTabs},model:{value:t.tabsActiveName,callback:function(e){t.tabsActiveName="string"==typeof e?e.trim():e},expression:"tabsActiveName"}},[a("el-tab-pane",{attrs:{label:"查询参数",name:"first"}},[0==t.tableData.length?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.addRow()}}},[t._v("添加")]):t._e(),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{align:"center",label:"序号",type:"index","min-width":"40"}}),t._v(" "),a("el-table-column",{attrs:{label:"参数名"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:"pageSize"==t.tableData[e.$index].paramName||"pageNumber"==t.tableData[e.$index].paramName},model:{value:t.tableData[e.$index].paramName,callback:function(a){t.$set(t.tableData[e.$index],"paramName","string"==typeof a?a.trim():a)},expression:"tableData[scope.$index].paramName"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:t.tableData[e.$index].paramDesc,callback:function(a){t.$set(t.tableData[e.$index],"paramDesc","string"==typeof a?a.trim():a)},expression:"tableData[scope.$index].paramDesc"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"数据类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:t.tableData[e.$index].paramType,callback:function(a){t.$set(t.tableData[e.$index],"paramType","string"==typeof a?a.trim():a)},expression:"tableData[scope.$index].paramType"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"示例值"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:t.tableData[e.$index].sampleItem,callback:function(a){t.$set(t.tableData[e.$index],"sampleItem","string"==typeof a?a.trim():a)},expression:"tableData[scope.$index].sampleItem"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"校验",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-checkbox",{on:{change:function(a){return t.Mandatory(e.$index)}},model:{value:t.tableData[e.$index].mandatory,callback:function(a){t.$set(t.tableData[e.$index],"mandatory",a)},expression:"tableData[scope.$index].mandatory"}},[t._v("必选")]),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(a){return t.permissionClick(e.row,e.$index)}}},[t._v("\n                        高级规则\n                      ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.cutOutRow(e.$index,t.tableData)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.addRow(e.row)}}},[t._v("追加")])]}}])})],1),t._v(" "),a("el-checkbox",{on:{change:t.changePagination},model:{value:t.isShowPagination,callback:function(e){t.isShowPagination=e},expression:"isShowPagination"}},[t._v("加入分页参数")])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"数据转换",name:"second"}},[[a("div",{staticClass:"filterWrapper"},[a("div",{staticClass:"filterTable"},[t._l(t.itemFilterList,function(e,n){return a("div",{key:n,staticClass:"filterBox"},[a("div",{staticClass:"box"},[a("Dictionary",{attrs:{"updata-dict":e.transformType,"dict-key":"TRANSFORM_TYPE"},model:{value:e.transformType,callback:function(a){t.$set(e,"transformType",a)},expression:"item.transformType"}}),t._v(" "),a("el-button",{staticClass:"reduceFilter",attrs:{type:"text",icon:"el-icon-close"},on:{click:function(a){return t.reduceFilter(e)}}}),t._v(" "),"js"==e.transformType||"dict"==e.transformType?a("el-button",{staticClass:"editor",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return t.filterScriptBtn(e)}}}):t._e()],1),t._v(" "),a("el-button",{staticClass:"font-icon-right",attrs:{type:"text",icon:"el-icon-right"}})],1)}),t._v(" "),a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogSwitchVisible,width:"60%","min-height":"400px","append-to-body":""},on:{"update:visible":function(e){t.dialogSwitchVisible=e}}},["js"==t.isItemFilterType.transformType?a("div",[a("div",{staticClass:"codemirror"},[a("codemirror",{staticStyle:{height:"210px",overflow:"hidden"},attrs:{options:t.optionsJavascript},model:{value:t.transformScript,callback:function(e){t.transformScript="string"==typeof e?e.trim():e},expression:"transformScript"}})],1)]):a("div",[t._l(t.tableData2,function(e,n){return a("div",{key:n},[a("label",[t._v("字典项名称：")]),t._v(" "),a("el-input",{staticStyle:{width:"25%"},attrs:{size:"small"},model:{value:e.name,callback:function(a){t.$set(e,"name","string"==typeof a?a.trim():a)},expression:"item.name"}}),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small",plain:"",icon:"el-icon-delete"},on:{click:function(e){return t.delAllDict(n,t.tableData2)}}}),t._v(" "),a("el-table",{staticStyle:{width:"80%"},attrs:{data:e.children,border:""}},[a("el-table-column",{attrs:{label:"key",width:"180"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("el-input",{model:{value:e.children[n.$index].name,callback:function(a){t.$set(e.children[n.$index],"name","string"==typeof a?a.trim():a)},expression:"\n                                      item.children[scope.$index].name\n                                    "}})]}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{label:"值"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("el-input",{model:{value:e.children[n.$index].value,callback:function(a){t.$set(e.children[n.$index],"value","string"==typeof a?a.trim():a)},expression:"\n                                      item.children[scope.$index].value\n                                    "}})]}}],null,!0)}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[a("el-button",{attrs:{type:"success",circle:"",plain:"",icon:"el-icon-plus"},on:{click:function(a){return t.addDict(n.$index,e.children)}}}),t._v(" "),a("el-button",{attrs:{type:"danger",circle:"",plain:"",icon:"el-icon-delete"},on:{click:function(a){return t.delDict(n.$index,e.children)}}})]}}],null,!0)})],1)],1)}),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(e){return t.addAllDict()}}},[t._v("新增")])],2),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogSwitchVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.filterScriptConfirm}},[t._v("保存")])],1)]),t._v(" "),a("div",{staticClass:"addFilter",attrs:{disabled:"true"},on:{click:t.addFilter}},[a("i",{staticClass:"el-icon-plus"}),a("span",[t._v("新增")])])],2)])]],2),t._v(" "),a("el-tab-pane",{attrs:{label:"测试预览",name:"third"}},[a("div",{staticStyle:{"max-height":"400px",overflow:"auto"}},[a("vue-json-editor",{attrs:{"show-btns":!1,mode:"code",lang:"zh"},on:{"json-change":t.onJsonChange,"json-save":t.onJsonSave},model:{value:t.cols,callback:function(e){t.cols=e},expression:"cols"}})],1)])],1)],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit("form")}}},[t._v("保存")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.title,visible:t.dialogPermissionVisible,width:"60%"},on:{"update:visible":function(e){t.dialogPermissionVisible=e}}},[a("div",{staticClass:"codemirror"},[a("codemirror",{staticStyle:{height:"210px",overflow:"hidden"},attrs:{options:t.optionsJavascript},model:{value:t.validationRules,callback:function(e){t.validationRules="string"==typeof e?e.trim():e},expression:"validationRules"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"warning"},on:{click:t.testResultset}},[t._v("测试")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.dialogValidationRules}},[t._v("保存")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogPermissionVisible=!1}}},[t._v("关闭")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:t.caseResultTitle,visible:t.dialogCaseResult,width:"70%"},on:{"update:visible":function(e){t.dialogCaseResult=e}}},[a("vue-json-editor",{staticClass:"my-editor",attrs:{"show-btns":!1,mode:"code",lang:"zh"},on:{"json-change":t.onJsonChange,"json-save":t.onJsonSave},model:{value:t.caseResultContent,callback:function(e){t.caseResultContent=e},expression:"caseResultContent"}}),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogCaseResult=!1}}},[t._v("关闭")])],1)],1)],1)},[],!1,null,"62d01e42",null);y.options.__file="index.vue";e.default=y.exports}}]);