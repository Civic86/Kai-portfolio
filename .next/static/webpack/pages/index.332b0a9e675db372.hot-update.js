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

/***/ "./src/components/ProjectCard.tsx":
/*!****************************************!*\
  !*** ./src/components/ProjectCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n// components/ProjectCard.tsx\n\n\nconst ProjectCard = (param)=>{\n    let { title, description, imageUrl, href } = param;\n    // カードのスタイルを設定する\n    const cardStyle = {\n        backgroundImage: \"url(\".concat(imageUrl, \")\"),\n        backgroundSize: \"cover\",\n        backgroundPosition: \"center\",\n        height: \"475px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: href,\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:flex-shrink-0 cursor-pointer\",\n                    style: cardStyle\n                }, void 0, false, {\n                    fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ProjectCard.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ProjectCard.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-6 flex-1 flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl font-semibold mb-2\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ProjectCard.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700 text-base\",\n                                children: description\n                            }, void 0, false, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ProjectCard.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ProjectCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: href,\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-indigo-600 hover:text-indigo-900 mt-4 self-end cursor-pointer\",\n                            children: \"Learn more\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ProjectCard.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ProjectCard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ProjectCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ProjectCard.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2QkFBNkI7O0FBQ0E7QUFTN0IsTUFBTUMsY0FBMEM7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUU7SUFDckYsZ0JBQWdCO0lBQ2hCLE1BQU1DLFlBQVk7UUFDaEJDLGlCQUFpQixPQUFnQixPQUFUSCxVQUFTO1FBQ2pDSSxnQkFBZ0I7UUFDaEJDLG9CQUFvQjtRQUNwQkMsUUFBUTtJQUNWO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWixrREFBSUE7Z0JBQUNLLE1BQU1BO2dCQUFNUSxRQUFROzBCQUN4Qiw0RUFBQ0Y7b0JBQUlDLFdBQVU7b0JBQWtDRSxPQUFPUjs7Ozs7Ozs7Ozs7MEJBSTFELDhEQUFDSztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEOzswQ0FDQyw4REFBQ0k7Z0NBQUdILFdBQVU7MENBQStCVjs7Ozs7OzBDQUM3Qyw4REFBQ2M7Z0NBQUVKLFdBQVU7MENBQTJCVDs7Ozs7Ozs7Ozs7O2tDQUUxQyw4REFBQ0gsa0RBQUlBO3dCQUFDSyxNQUFNQTt3QkFBTVEsUUFBUTtrQ0FDeEIsNEVBQUNJOzRCQUFLTCxXQUFVO3NDQUFxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0Y7S0EzQk1YO0FBNkJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeD80MTc3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvUHJvamVjdENhcmQudHN4XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbnRlcmZhY2UgUHJvamVjdENhcmRQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn1cblxuY29uc3QgUHJvamVjdENhcmQ6IFJlYWN0LkZDPFByb2plY3RDYXJkUHJvcHM+ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZVVybCwgaHJlZiB9KSA9PiB7XG4gIC8vIOOCq+ODvOODieOBruOCueOCv+OCpOODq+OCkuioreWumuOBmeOCi1xuICBjb25zdCBjYXJkU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWAsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICc0NzVweCcsIC8vIOeUu+WDj+OBrumrmOOBleOBq+WQiOOCj+OBm+OBvuOBmVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZ1wiPlxuICAgICAgPExpbmsgaHJlZj17aHJlZn0gcGFzc0hyZWY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleC1zaHJpbmstMCBjdXJzb3ItcG9pbnRlclwiIHN0eWxlPXtjYXJkU3R5bGV9PlxuICAgICAgICAgIHsvKiDnlLvlg4/jgpLog4zmma/jgajjgZfjgaboqK3lrpogKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPnt0aXRsZX08L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LWluZGlnby05MDAgbXQtNCBzZWxmLWVuZCBjdXJzb3ItcG9pbnRlclwiPkxlYXJuIG1vcmU8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQ7XG4iXSwibmFtZXMiOlsiTGluayIsIlByb2plY3RDYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwiaHJlZiIsImNhcmRTdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaGVpZ2h0IiwiZGl2IiwiY2xhc3NOYW1lIiwicGFzc0hyZWYiLCJzdHlsZSIsImgzIiwicCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProjectCard.tsx\n"));

/***/ })

});