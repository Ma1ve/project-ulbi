(self.webpackChunkulbi=self.webpackChunkulbi||[]).push([[445],{"./src/widgets/PageError/ui/PageError.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PageError_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PageError_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PageError_module.A,options);const ui_PageError_module=PageError_module.A&&PageError_module.A.locals?PageError_module.A.locals:void 0;__webpack_require__("./node_modules/void-elements/index.js");Object.create(null);const alreadyWarned={};function utils_warnOnce(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];"string"==typeof args[0]&&alreadyWarned[args[0]]||("string"==typeof args[0]&&(alreadyWarned[args[0]]=new Date),function utils_warn(){if(console&&console.warn){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];"string"==typeof args[0]&&(args[0]=`react-i18next:: ${args[0]}`),console.warn(...args)}}(...args))}const loadedClb=(i18n,cb)=>()=>{if(i18n.isInitialized)cb();else{const initialized=()=>{setTimeout((()=>{i18n.off("initialized",initialized)}),0),cb()};i18n.on("initialized",initialized)}};function loadNamespaces(i18n,ns,cb){i18n.loadNamespaces(ns,loadedClb(i18n,cb))}function loadLanguages(i18n,lng,ns,cb){"string"==typeof ns&&(ns=[ns]),ns.forEach((n=>{i18n.options.ns.indexOf(n)<0&&i18n.options.ns.push(n)})),i18n.loadLanguages(lng,loadedClb(i18n,cb))}const matchHtmlEntity=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,htmlEntities={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},unescapeHtmlEntity=m=>htmlEntities[m];let i18nInstance,defaultOptions={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:text=>text.replace(matchHtmlEntity,unescapeHtmlEntity)};const context_I18nContext=(0,react.createContext)();class ReportNamespaces{constructor(){this.usedNamespaces={}}addUsedNamespaces(namespaces){namespaces.forEach((ns=>{this.usedNamespaces[ns]||(this.usedNamespaces[ns]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}function alwaysNewT(i18n,language,namespace,keyPrefix){return i18n.getFixedT(language,namespace,keyPrefix)}function useTranslation_useTranslation(ns){let props=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:i18nFromProps}=props,{i18n:i18nFromContext,defaultNS:defaultNSFromContext}=(0,react.useContext)(context_I18nContext)||{},i18n=i18nFromProps||i18nFromContext||function i18nInstance_getI18n(){return i18nInstance}();if(i18n&&!i18n.reportNamespaces&&(i18n.reportNamespaces=new ReportNamespaces),!i18n){utils_warnOnce("You will need to pass in an i18next instance by using initReactI18next");const notReadyT=(k,optsOrDefaultValue)=>"string"==typeof optsOrDefaultValue?optsOrDefaultValue:optsOrDefaultValue&&"object"==typeof optsOrDefaultValue&&"string"==typeof optsOrDefaultValue.defaultValue?optsOrDefaultValue.defaultValue:Array.isArray(k)?k[k.length-1]:k,retNotReady=[notReadyT,{},!1];return retNotReady.t=notReadyT,retNotReady.i18n={},retNotReady.ready=!1,retNotReady}i18n.options.react&&void 0!==i18n.options.react.wait&&utils_warnOnce("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const i18nOptions={...defaultOptions,...i18n.options.react,...props},{useSuspense,keyPrefix}=i18nOptions;let namespaces=ns||defaultNSFromContext||i18n.options&&i18n.options.defaultNS;namespaces="string"==typeof namespaces?[namespaces]:namespaces||["translation"],i18n.reportNamespaces.addUsedNamespaces&&i18n.reportNamespaces.addUsedNamespaces(namespaces);const ready=(i18n.isInitialized||i18n.initializedStoreOnce)&&namespaces.every((n=>function hasLoadedNamespace(ns,i18n){let options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i18n.languages&&i18n.languages.length?void 0!==i18n.options.ignoreJSONStructure?i18n.hasLoadedNamespace(ns,{lng:options.lng,precheck:(i18nInstance,loadNotPending)=>{if(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18nInstance.services.backendConnector.backend&&i18nInstance.isLanguageChangingTo&&!loadNotPending(i18nInstance.isLanguageChangingTo,ns))return!1}}):function oldI18nextHasLoadedNamespace(ns,i18n){let options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const lng=i18n.languages[0],fallbackLng=!!i18n.options&&i18n.options.fallbackLng,lastLng=i18n.languages[i18n.languages.length-1];if("cimode"===lng.toLowerCase())return!0;const loadNotPending=(l,n)=>{const loadState=i18n.services.backendConnector.state[`${l}|${n}`];return-1===loadState||2===loadState};return!(options.bindI18n&&options.bindI18n.indexOf("languageChanging")>-1&&i18n.services.backendConnector.backend&&i18n.isLanguageChangingTo&&!loadNotPending(i18n.isLanguageChangingTo,ns)||!i18n.hasResourceBundle(lng,ns)&&i18n.services.backendConnector.backend&&(!i18n.options.resources||i18n.options.partialBundledLanguages)&&(!loadNotPending(lng,ns)||fallbackLng&&!loadNotPending(lastLng,ns)))}(ns,i18n,options):(utils_warnOnce("i18n.languages were undefined or empty",i18n.languages),!0)}(n,i18n,i18nOptions))),memoGetT=function useMemoizedT(i18n,language,namespace,keyPrefix){return(0,react.useCallback)(alwaysNewT(i18n,language,namespace,keyPrefix),[i18n,language,namespace,keyPrefix])}(i18n,props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix),getT=()=>memoGetT,getNewT=()=>alwaysNewT(i18n,props.lng||null,"fallback"===i18nOptions.nsMode?namespaces:namespaces[0],keyPrefix),[t,setT]=(0,react.useState)(getT);let joinedNS=namespaces.join();props.lng&&(joinedNS=`${props.lng}${joinedNS}`);const previousJoinedNS=((value,ignore)=>{const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=ignore?ref.current:value}),[value,ignore]),ref.current})(joinedNS),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((()=>{const{bindI18n,bindI18nStore}=i18nOptions;function boundReset(){isMounted.current&&setT(getNewT)}return isMounted.current=!0,ready||useSuspense||(props.lng?loadLanguages(i18n,props.lng,namespaces,(()=>{isMounted.current&&setT(getNewT)})):loadNamespaces(i18n,namespaces,(()=>{isMounted.current&&setT(getNewT)}))),ready&&previousJoinedNS&&previousJoinedNS!==joinedNS&&isMounted.current&&setT(getNewT),bindI18n&&i18n&&i18n.on(bindI18n,boundReset),bindI18nStore&&i18n&&i18n.store.on(bindI18nStore,boundReset),()=>{isMounted.current=!1,bindI18n&&i18n&&bindI18n.split(" ").forEach((e=>i18n.off(e,boundReset))),bindI18nStore&&i18n&&bindI18nStore.split(" ").forEach((e=>i18n.store.off(e,boundReset)))}}),[i18n,joinedNS]);const isInitial=(0,react.useRef)(!0);(0,react.useEffect)((()=>{isMounted.current&&!isInitial.current&&setT(getT),isInitial.current=!1}),[i18n,keyPrefix]);const ret=[t,i18n,ready];if(ret.t=t,ret.i18n=i18n,ret.ready=ready,ready)return ret;if(!ready&&!useSuspense)return ret;throw new Promise((resolve=>{props.lng?loadLanguages(i18n,props.lng,namespaces,(()=>resolve())):loadNamespaces(i18n,namespaces,(()=>resolve()))}))}var Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),PageError=function(props){var className=props.className,t=useTranslation_useTranslation().t;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{className:(0,classNames.x)(ui_PageError_module.PageError,{},[className]),children:[(0,jsx_runtime.jsx)("p",{children:t("Произошла непредвиденная ошибка")}),(0,jsx_runtime.jsx)(Button.$,{onClick:function(){location.reload()},children:"Обновить страницу"})]})})};PageError.__docgenInfo={description:"",methods:[],displayName:"PageError",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const PageError_stories={title:"widget/PageError",component:PageError};var Light={args:{}},Dark={args:{}};Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Dark.parameters?.docs?.source}}};const __namedExportsOrder=["Light","Dark"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/PageError/ui/PageError.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-PageError-ui-PageError-module__PageError--HSFBb{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column}","",{version:3,sources:["webpack://./src/widgets/PageError/ui/PageError.module.scss"],names:[],mappings:"AAAA,6DACE,UAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,qBAAA",sourcesContent:[".PageError {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={PageError:"src-widgets-PageError-ui-PageError-module__PageError--HSFBb"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/void-elements/index.js":module=>{module.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);