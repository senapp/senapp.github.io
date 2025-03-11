/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects/ifs.tsx":
/*!******************************!*\
  !*** ./src/projects/ifs.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.IFSPage = void 0;\r\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\r\nconst PageContainer_1 = __webpack_require__(/*! ../components/page/PageContainer */ \"./src/components/page/PageContainer.tsx\");\r\nconst PageContent_1 = __webpack_require__(/*! ../components/page/PageContent */ \"./src/components/page/PageContent.tsx\");\r\nconst ProjectView_1 = __webpack_require__(/*! ../components/projects/ProjectView */ \"./src/components/projects/ProjectView.tsx\");\r\nconst projects_1 = __webpack_require__(/*! ../framework/projects */ \"./src/framework/projects.ts\");\r\nconst IFSPage = () => {\r\n    const project = projects_1.ProjectStore.get(projects_1.ProjectIdentity.IFS);\r\n    return (React.createElement(PageContainer_1.PageContainer, null,\r\n        React.createElement(PageContent_1.PageContent, null,\r\n            React.createElement(ProjectView_1.ProjectView, { project: project }))));\r\n};\r\nexports.IFSPage = IFSPage;\r\nReactDOM.render(React.createElement(exports.IFSPage, null), document.getElementById('root'));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdHMvaWZzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxnRkFBK0I7QUFDL0IsMkZBQXNDO0FBQ3RDLCtIQUFpRTtBQUNqRSx5SEFBNkQ7QUFDN0QsaUlBQWlFO0FBQ2pFLG1HQUFzRTtBQUUvRCxNQUFNLE9BQU8sR0FBYSxHQUFHLEVBQUU7SUFDbEMsTUFBTSxPQUFPLEdBQUcsdUJBQVksQ0FBQyxHQUFHLENBQUMsMEJBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV0RCxPQUFPLENBQ0gsb0JBQUMsNkJBQWE7UUFDVixvQkFBQyx5QkFBVztZQUNSLG9CQUFDLHlCQUFXLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBSSxDQUN2QixDQUNGLENBQ25CLENBQUM7QUFDTixDQUFDLENBQUM7QUFWVyxlQUFPLFdBVWxCO0FBRUYsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxlQUFPLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW5hcHAtc3R1ZGlvcy8uL3NyYy9wcm9qZWN0cy9pZnMudHN4PzVlZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQYWdlQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlL1BhZ2VDb250YWluZXInO1xyXG5pbXBvcnQgeyBQYWdlQ29udGVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZS9QYWdlQ29udGVudCc7XHJcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0Vmlldyc7XHJcbmltcG9ydCB7IFByb2plY3RJZGVudGl0eSwgUHJvamVjdFN0b3JlIH0gZnJvbSAnLi4vZnJhbWV3b3JrL3Byb2plY3RzJztcclxuXHJcbmV4cG9ydCBjb25zdCBJRlNQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0U3RvcmUuZ2V0KFByb2plY3RJZGVudGl0eS5JRlMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQYWdlQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0VmlldyBwcm9qZWN0PXtwcm9qZWN0fSAvPlxyXG4gICAgICAgICAgICA8L1BhZ2VDb250ZW50PlxyXG4gICAgICAgIDwvUGFnZUNvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPElGU1BhZ2UgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/projects/ifs.tsx\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"projects/ifs": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksenapp_studios"] = self["webpackChunksenapp_studios"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-2ee02c","src_components_page_PageContainer_tsx","src_components_page_PageContent_tsx-src_components_projects_ProjectView_tsx-src_framework_pro-de1a01"], () => (__webpack_require__("./src/projects/ifs.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;