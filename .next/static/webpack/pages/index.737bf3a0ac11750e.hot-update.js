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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ImageCarousel = (param)=>{\n    let { images } = param;\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setTimeout(()=>{\n            const nextIndex = (currentIndex + 1) % images.length;\n            setCurrentIndex(nextIndex);\n        }, 3000); // 3秒ごとに画像を切り替える\n        return ()=>clearTimeout(timer);\n    }, [\n        currentIndex,\n        images\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative overflow-hidden w-full aspect-w-3 aspect-h-2 md:aspect-w-1 md:aspect-h-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"absolute inset-0 flex\",\n            children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full \".concat(index === currentIndex ? \"opacity-100\" : \"opacity-0\", \" transition-opacity duration-500 ease-in-out\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: \"Image \".concat(index + 1),\n                        className: \"object-cover w-full h-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarouse.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarouse.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarouse.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarouse.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageCarousel, \"tPjzCc9H5UuFdWNuAHYoD0K4UOk=\");\n_c = ImageCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCarousel);\nvar _c;\n$RefreshReg$(_c, \"ImageCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbWFnZUNhcm91c2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFNbkQsTUFBTUcsZ0JBQThDO1FBQUMsRUFBRUMsTUFBTSxFQUFFOztJQUM3RCxNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVqREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxRQUFRQyxXQUFXO1lBQ3ZCLE1BQU1DLFlBQVksQ0FBQ0osZUFBZSxLQUFLRCxPQUFPTSxNQUFNO1lBQ3BESixnQkFBZ0JHO1FBQ2xCLEdBQUcsT0FBTyxnQkFBZ0I7UUFDMUIsT0FBTyxJQUFNRSxhQUFhSjtJQUM1QixHQUFHO1FBQUNGO1FBQWNEO0tBQU87SUFFekIscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1pULE9BQU9VLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUNKO29CQUVDQyxXQUFXLFVBQ1IsT0FEa0JHLFVBQVVYLGVBQWUsZ0JBQWdCLGFBQzNEOzhCQUVILDRFQUFDWTt3QkFDQ0MsS0FBS0g7d0JBQ0xJLEtBQUssU0FBbUIsT0FBVkgsUUFBUTt3QkFDdEJILFdBQVU7Ozs7OzttQkFQUEc7Ozs7Ozs7Ozs7Ozs7OztBQWNqQjtHQTlCTWI7S0FBQUE7QUFnQ04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VDYXJvdXNlLnRzeD83MjRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgSW1hZ2VDYXJvdXNlbFByb3BzIHtcbiAgaW1hZ2VzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgSW1hZ2VDYXJvdXNlbDogUmVhY3QuRkM8SW1hZ2VDYXJvdXNlbFByb3BzPiA9ICh7IGltYWdlcyB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSBpbWFnZXMubGVuZ3RoO1xuICAgICAgc2V0Q3VycmVudEluZGV4KG5leHRJbmRleCk7XG4gICAgfSwgMzAwMCk7IC8vIDPnp5LjgZTjgajjgavnlLvlg4/jgpLliIfjgormm7/jgYjjgotcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgfSwgW2N1cnJlbnRJbmRleCwgaW1hZ2VzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgYXNwZWN0LXctMyBhc3BlY3QtaC0yIG1kOmFzcGVjdC13LTEgbWQ6YXNwZWN0LWgtMVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXhcIj5cbiAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgJHtpbmRleCA9PT0gY3VycmVudEluZGV4ID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnXG4gICAgICAgICAgICAgIH0gdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTUwMCBlYXNlLWluLW91dGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICBhbHQ9e2BJbWFnZSAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJvdXNlbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2VDYXJvdXNlbCIsImltYWdlcyIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsInRpbWVyIiwic2V0VGltZW91dCIsIm5leHRJbmRleCIsImxlbmd0aCIsImNsZWFyVGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ImageCarouse.tsx\n"));

/***/ })

});