"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ImageCarouse.tsx":
/*!*****************************************!*\
  !*** ./src/components/ImageCarouse.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Carousel = (param)=>{\n    let { images } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"overflow-hidden w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-3 gap-4\",\n                children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-full h-100 md:h-[calc(100vw/3)]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image,\n                            alt: \"Image \".concat(index + 1),\n                            className: \"object-cover w-full h-full\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarouse.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarouse.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarouse.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarouse.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarouse.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbWFnZUNhcm91c2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQU0xQixNQUFNQyxXQUF5QztRQUFDLEVBQUVDLE1BQU0sRUFBRTtJQUN4RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pGLE9BQU9HLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUNKO3dCQUVDQyxXQUFVO2tDQUVWLDRFQUFDSTs0QkFDQ0MsS0FBS0g7NEJBQ0xJLEtBQUssU0FBbUIsT0FBVkgsUUFBUTs0QkFDdEJILFdBQVU7Ozs7Ozt1QkFOUEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY25CO0tBckJNTjtBQXVCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbWFnZUNhcm91c2UudHN4PzcyNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEltYWdlQ2Fyb3VzZWxQcm9wcyB7XG4gIGltYWdlczogc3RyaW5nW107XG59XG5cbmNvbnN0IENhcm91c2VsOiBSZWFjdC5GQzxJbWFnZUNhcm91c2VsUHJvcHM+ID0gKHsgaW1hZ2VzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC0xMDAgbWQ6aC1bY2FsYygxMDB2dy8zKV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e2BJbWFnZSAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJvdXNlbCIsImltYWdlcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ImageCarouse.tsx\n"));

/***/ })

});