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

/***/ "./src/components/ImageCarousel.tsx":
/*!******************************************!*\
  !*** ./src/components/ImageCarousel.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ImageCarousel = (param)=>{\n    let { images } = param;\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCurrentIndex((currentIndex)=>(currentIndex + 1) % images.length);\n        }, 3000); // Change image every 3 seconds\n        return ()=>clearInterval(interval);\n    }, [\n        images.length\n    ]);\n    const nextSlide = ()=>{\n        setCurrentIndex((currentIndex + 1) % images.length);\n    };\n    const prevSlide = ()=>{\n        setCurrentIndex((currentIndex - 1 + images.length) % images.length);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex transition-all duration-700 ease-in-out\",\n                style: {\n                    transform: \"translateX(-\".concat(currentIndex * 100, \"%)\")\n                },\n                children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: \"Slide \".concat(index),\n                        className: \"block w-full h-auto aspect-square object-cover\"\n                    }, index, false, {\n                        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarousel.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarousel.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: prevSlide,\n                className: \"absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full\",\n                children: \"◀\"\n            }, void 0, false, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarousel.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: nextSlide,\n                className: \"absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full\",\n                children: \"▶\"\n            }, void 0, false, {\n                fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarousel.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zawa/Desktop/code/Kai-portfolio/src/components/ImageCarousel.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageCarousel, \"tPjzCc9H5UuFdWNuAHYoD0K4UOk=\");\n_c = ImageCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageCarousel);\nvar _c;\n$RefreshReg$(_c, \"ImageCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbWFnZUNhcm91c2VsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRDO0FBTTVDLE1BQU1FLGdCQUE4QztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDN0QsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQUM7SUFFakRDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUssV0FBV0MsWUFBWTtZQUMzQkYsZ0JBQWdCLENBQUNELGVBQWlCLENBQUNBLGVBQWUsS0FBS0QsT0FBT0ssTUFBTTtRQUN0RSxHQUFHLE9BQU8sK0JBQStCO1FBRXpDLE9BQU8sSUFBTUMsY0FBY0g7SUFDN0IsR0FBRztRQUFDSCxPQUFPSyxNQUFNO0tBQUM7SUFFbEIsTUFBTUUsWUFBWTtRQUNoQkwsZ0JBQWdCLENBQUNELGVBQWUsS0FBS0QsT0FBT0ssTUFBTTtJQUNwRDtJQUVBLE1BQU1HLFlBQVk7UUFDaEJOLGdCQUFnQixDQUFDRCxlQUFlLElBQUlELE9BQU9LLE1BQU0sSUFBSUwsT0FBT0ssTUFBTTtJQUNwRTtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQStDQyxPQUFPO29CQUFFQyxXQUFXLGVBQWtDLE9BQW5CWCxlQUFlLEtBQUk7Z0JBQUk7MEJBQ3JIRCxPQUFPYSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDQzt3QkFBZ0JDLEtBQUtIO3dCQUFPSSxLQUFLLFNBQWUsT0FBTkg7d0JBQVNMLFdBQVU7dUJBQXBESzs7Ozs7Ozs7OzswQkFHZCw4REFBQ0k7Z0JBQU9DLFNBQVNaO2dCQUFXRSxXQUFVOzBCQUFtRjs7Ozs7OzBCQUd6SCw4REFBQ1M7Z0JBQU9DLFNBQVNiO2dCQUFXRyxXQUFVOzBCQUFvRjs7Ozs7Ozs7Ozs7O0FBS2hJO0dBbENNWDtLQUFBQTtBQW9DTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9JbWFnZUNhcm91c2VsLnRzeD83YmI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBJbWFnZUNhcm91c2VsUHJvcHMge1xuICBpbWFnZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBJbWFnZUNhcm91c2VsOiBSZWFjdC5GQzxJbWFnZUNhcm91c2VsUHJvcHM+ID0gKHsgaW1hZ2VzIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDdXJyZW50SW5kZXgoKGN1cnJlbnRJbmRleCkgPT4gKGN1cnJlbnRJbmRleCArIDEpICUgaW1hZ2VzLmxlbmd0aCk7XG4gICAgfSwgMzAwMCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSAzIHNlY29uZHNcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2ltYWdlcy5sZW5ndGhdKTtcblxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChjdXJyZW50SW5kZXggKyAxKSAlIGltYWdlcy5sZW5ndGgpO1xuICB9O1xuXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoKGN1cnJlbnRJbmRleCAtIDEgKyBpbWFnZXMubGVuZ3RoKSAlIGltYWdlcy5sZW5ndGgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0XCIgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHtjdXJyZW50SW5kZXggKiAxMDB9JSlgIH19PlxuICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGltZyBrZXk9e2luZGV4fSBzcmM9e2ltYWdlfSBhbHQ9e2BTbGlkZSAke2luZGV4fWB9IGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBoLWF1dG8gYXNwZWN0LXNxdWFyZSBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2U2xpZGV9IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzIgYmctZ3JheS04MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICYjOTY2NDtcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0U2xpZGV9IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIGJnLWdyYXktODAwIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAmIzk2NTQ7XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2Fyb3VzZWw7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZUNhcm91c2VsIiwiaW1hZ2VzIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm1hcCIsImltYWdlIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJhbHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ImageCarousel.tsx\n"));

/***/ })

});