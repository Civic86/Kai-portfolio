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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ProjectCard */ \"./src/components/ProjectCard.tsx\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/NavBar */ \"./src/components/NavBar.tsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.tsx\");\n/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/TopBar */ \"./src/components/TopBar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst images = [\n    \"/Kai.jpg\",\n    \"/cocoon-app.png\",\n    \"/cocoon.png\"\n];\nconst Home = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        const observerCallback = (entries, observer)=>{\n            entries.forEach((entry)=>{\n                if (entry.isIntersecting) {\n                    entry.target.classList.add(\"animate-start\"); // ここでアニメーション開始のクラスを追加\n                    observer.unobserve(entry.target); // 一度トリガーされたら監視を停止\n                }\n            });\n        };\n        const observerOptions = {\n            threshold: 0.1\n        };\n        const observer = new IntersectionObserver(observerCallback, observerOptions);\n        // 監視対象の要素をすべて選択\n        const targets = document.querySelectorAll(\".circle, .animate-fade-down\");\n        targets.forEach((target)=>observer.observe(target));\n        return ()=>observer.disconnect();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Kai's Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4\"\n            }, void 0, false, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-white min-h-screen p-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"circle bg-white rounded-full h-64 w-64 block mx-auto mb-8 animate-rotate-y\",\n                                style: {\n                                    backgroundImage: \"url('/Kai.jpg')\",\n                                    backgroundSize: \"cover\",\n                                    backgroundPosition: \"center\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-5xl font-bold  mb-40 text-[#062438]\",\n                                children: \"Hello! This is Kai!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"mt-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-7xl font-bold mb-20 text-[#062438] animate-fade-down animate-once\",\n                                children: \"Work.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-1 md:grid-cols-3 gap-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            title: \"Cocoon\",\n                                            description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis...\",\n                                            imageUrl: \"/cocoon.png\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            title: \"Cocoon\",\n                                            description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis...\",\n                                            imageUrl: \"/cocoon.png\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            title: \"Cocoon\",\n                                            description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis...\",\n                                            imageUrl: \"/cocoon.png\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-20 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/work\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-indigo-600 hover:text-indigo-900 cursor-pointer\",\n                                        children: \"See more\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"mt-32\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-7xl font-bold mb-6 text-[#062438] animate-fade-down animate-once\",\n                                children: \"Case Study.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        title: \"Cocoon\",\n                                        description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis...\",\n                                        href: \"/project1\",\n                                        imageUrl: \"/logo.png\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        title: \"Product Name\",\n                                        description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis...\",\n                                        href: \"/project1\",\n                                        imageUrl: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"mt-32\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-7xl font-bold mb-6 text-[#062438]\",\n                                children: \"Contact.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"coming soon\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-yellow-100 text-center p-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-yellow-900\",\n                    children: \"\\xa9 2024 Kai's Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/pages/index.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNBO0FBQ3NCO0FBQ1Y7QUFDSjtBQUNJO0FBRU47QUFHbEMsTUFBTU8sU0FBUztJQUNiO0lBQ0E7SUFDQTtDQUVEO0FBRUQsTUFBTUMsT0FBaUI7O0lBQ3JCRixnREFBU0EsQ0FBQztRQUNSLE1BQU1HLG1CQUFtQixDQUFDQyxTQUFzQ0M7WUFDOURELFFBQVFFLE9BQU8sQ0FBQyxDQUFDQztnQkFDZixJQUFJQSxNQUFNQyxjQUFjLEVBQUU7b0JBQ3hCRCxNQUFNRSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixzQkFBc0I7b0JBQ25FTixTQUFTTyxTQUFTLENBQUNMLE1BQU1FLE1BQU0sR0FBRyxrQkFBa0I7Z0JBQ3REO1lBQ0Y7UUFDRjtRQUVBLE1BQU1JLGtCQUFrQjtZQUFFQyxXQUFXO1FBQUk7UUFDekMsTUFBTVQsV0FBVyxJQUFJVSxxQkFBcUJaLGtCQUFrQlU7UUFFNUQsZ0JBQWdCO1FBQ2hCLE1BQU1HLFVBQVVDLFNBQVNDLGdCQUFnQixDQUFDO1FBRTFDRixRQUFRVixPQUFPLENBQUNHLENBQUFBLFNBQVVKLFNBQVNjLE9BQU8sQ0FBQ1Y7UUFFM0MsT0FBTyxJQUFNSixTQUFTZSxVQUFVO0lBQ2xDLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQzFCLGtEQUFJQTs7a0NBQ0gsOERBQUMyQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ3pCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNGLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUM0QjtnQkFBSUMsV0FBVTs7Ozs7OzBCQUtmLDhEQUFDQztnQkFBS0QsV0FBVTs7a0NBQ2QsOERBQUNFO3dCQUFRRixXQUFVOzswQ0FDakIsOERBQUNEO2dDQUNDQyxXQUFVO2dDQUNWRyxPQUFPO29DQUFFQyxpQkFBa0I7b0NBQWtCQyxnQkFBZ0I7b0NBQVNDLG9CQUFvQjtnQ0FBUzs7Ozs7OzBDQUVyRyw4REFBQ0M7Z0NBQUdQLFdBQVU7MENBQTJDOzs7Ozs7Ozs7Ozs7a0NBRzNELDhEQUFDRTt3QkFBUUYsV0FBVTs7MENBQ2pCLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBeUU7Ozs7OzswQ0FDdkYsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUM1Qix3REFBSUE7NENBQ0h1QixPQUFNOzRDQUNOYyxhQUFZOzRDQUNaQyxVQUFTOzs7Ozs7c0RBRVgsOERBQUN0Qyx3REFBSUE7NENBQ0h1QixPQUFNOzRDQUNOYyxhQUFZOzRDQUNaQyxVQUFTOzs7Ozs7c0RBRVgsOERBQUN0Qyx3REFBSUE7NENBQ0h1QixPQUFNOzRDQUNOYyxhQUFZOzRDQUNaQyxVQUFTOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLZiw4REFBQ1g7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUMvQixrREFBSUE7b0NBQUM2QixNQUFLOzhDQUNULDRFQUFDYTt3Q0FBS1gsV0FBVTtrREFBdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTTdFLDhEQUFDRTt3QkFBUUYsV0FBVTs7MENBQ2pCLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FBd0U7Ozs7OzswQ0FDdEYsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQzlCLCtEQUFXQTt3Q0FDVnlCLE9BQU07d0NBQ05jLGFBQVk7d0NBQ1pYLE1BQUs7d0NBQ0xZLFVBQVM7Ozs7OztrREFFWCw4REFBQ3hDLCtEQUFXQTt3Q0FDVnlCLE9BQU07d0NBQ05jLGFBQVk7d0NBQ1pYLE1BQUs7d0NBQ0xZLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLZiw4REFBQ1I7d0JBQVFGLFdBQVU7OzBDQUNqQiw4REFBQ1E7Z0NBQUdSLFdBQVU7MENBQXlDOzs7Ozs7MENBQ3ZELDhEQUFDRDswQ0FDQyw0RUFBQ2E7OENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1ULDhEQUFDQztnQkFBT2IsV0FBVTswQkFDaEIsNEVBQUNZO29CQUFFWixXQUFVOzhCQUFrQjs7Ozs7Ozs7Ozs7OztBQUl2QztHQTNHTXhCO0tBQUFBO0FBNkdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnQC9jb21wb25lbnRzL1Byb2plY3RDYXJkJ1xuaW1wb3J0IE5hdkJhciBmcm9tICdAL2NvbXBvbmVudHMvTmF2QmFyJ1xuaW1wb3J0IENhcmQgZnJvbSAnQC9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgVG9wQmFyIGZyb20gJ0AvY29tcG9uZW50cy9Ub3BCYXInXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tICdAL2NvbXBvbmVudHMvSW1hZ2VDYXJvdXNlbCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBpbWFnZXMgPSBbXG4gICcvS2FpLmpwZycsXG4gICcvY29jb29uLWFwcC5wbmcnLFxuICAnL2NvY29vbi5wbmcnLFxuICAvLyBBZGQgbW9yZSBpbWFnZSBwYXRoc1xuXTtcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlcikgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1zdGFydCcpOyAvLyDjgZPjgZPjgafjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pplovlp4vjga7jgq/jg6njgrnjgpLov73liqBcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTsgLy8g5LiA5bqm44OI44Oq44Ks44O844GV44KM44Gf44KJ55uj6KaW44KS5YGc5q2iXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7IHRocmVzaG9sZDogMC4xIH07XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob2JzZXJ2ZXJDYWxsYmFjaywgb2JzZXJ2ZXJPcHRpb25zKTtcblxuICAgIC8vIOebo+imluWvvuixoeOBruimgee0oOOCkuOBmeOBueOBpumBuOaKnlxuICAgIGNvbnN0IHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2lyY2xlLCAuYW5pbWF0ZS1mYWRlLWRvd24nKTtcblxuICAgIHRhcmdldHMuZm9yRWFjaCh0YXJnZXQgPT4gb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpKTtcblxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkthaSdzIFBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRvcEJhciAvPlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctMTAwJVwiPlxuICAgICAgICAgIDxJbWFnZUNhcm91c2VsIGltYWdlcz17aW1hZ2VzfSAvPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLXdoaXRlIG1pbi1oLXNjcmVlbiBwLThcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUgYmctd2hpdGUgcm91bmRlZC1mdWxsIGgtNjQgdy02NCBibG9jayBteC1hdXRvIG1iLTggYW5pbWF0ZS1yb3RhdGUteVwiXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9LYWkuanBnJylgLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyB9fVxuICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkICBtYi00MCB0ZXh0LVsjMDYyNDM4XVwiPkhlbGxvISBUaGlzIGlzIEthaSE8L2gxPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTd4bCBmb250LWJvbGQgbWItMjAgdGV4dC1bIzA2MjQzOF0gYW5pbWF0ZS1mYWRlLWRvd24gYW5pbWF0ZS1vbmNlXCI+V29yay48L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDb2Nvb25cIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQW1ldCB2dWxwdXRhdGUgdHJpc3RpcXVlIHF1YW0gZmVsaXMuLi5cIlxuICAgICAgICAgICAgICAgIGltYWdlVXJsPVwiL2NvY29vbi5wbmdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29jb29uXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFtZXQgdnVscHV0YXRlIHRyaXN0aXF1ZSBxdWFtIGZlbGlzLi4uXCJcbiAgICAgICAgICAgICAgICBpbWFnZVVybD1cIi9jb2Nvb24ucG5nXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvY29vblwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBbWV0IHZ1bHB1dGF0ZSB0cmlzdGlxdWUgcXVhbSBmZWxpcy4uLlwiXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw9XCIvY29jb29uLnBuZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC1pbmRpZ28tOTAwIGN1cnNvci1wb2ludGVyXCI+U2VlIG1vcmU8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTMyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtYm9sZCBtYi02IHRleHQtWyMwNjI0MzhdIGFuaW1hdGUtZmFkZS1kb3duIGFuaW1hdGUtb25jZVwiPkNhc2UgU3R1ZHkuPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICB0aXRsZT1cIkNvY29vblwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQW1ldCB2dWxwdXRhdGUgdHJpc3RpcXVlIHF1YW0gZmVsaXMuLi5cIlxuICAgICAgICAgICAgICBocmVmPVwiL3Byb2plY3QxXCJcbiAgICAgICAgICAgICAgaW1hZ2VVcmw9XCIvbG9nby5wbmdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICB0aXRsZT1cIlByb2R1Y3QgTmFtZVwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQW1ldCB2dWxwdXRhdGUgdHJpc3RpcXVlIHF1YW0gZmVsaXMuLi5cIlxuICAgICAgICAgICAgICBocmVmPVwiL3Byb2plY3QxXCJcbiAgICAgICAgICAgICAgaW1hZ2VVcmw9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTMyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtN3hsIGZvbnQtYm9sZCBtYi02IHRleHQtWyMwNjI0MzhdXCI+Q29udGFjdC48L2gyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5jb21pbmcgc29vbjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmcteWVsbG93LTEwMCB0ZXh0LWNlbnRlciBwLTZcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctOTAwXCI+wqkgMjAyNCBLYWkncyBQb3J0Zm9saW88L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiUHJvamVjdENhcmQiLCJOYXZCYXIiLCJDYXJkIiwiVG9wQmFyIiwidXNlRWZmZWN0IiwiaW1hZ2VzIiwiSG9tZSIsIm9ic2VydmVyQ2FsbGJhY2siLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsIm9ic2VydmVyT3B0aW9ucyIsInRocmVzaG9sZCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwidGFyZ2V0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJzZWN0aW9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImgxIiwiaDIiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwic3BhbiIsInAiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});