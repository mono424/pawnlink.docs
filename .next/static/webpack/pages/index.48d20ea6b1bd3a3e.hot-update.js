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

/***/ "./components/intro-section.jsx":
/*!**************************************!*\
  !*** ./components/intro-section.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IntroSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IntroSection() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                class: \"my-4 text-3xl font-extrabold text-gray-900 text-center dark:text-foreground md:text-5xl lg:text-6xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        class: \"text-transparent bg-clip-text bg-gradient-to-r to-secondary from-primary\",\n                        children: \"Link Chessboards\"\n                    }, void 0, false, {\n                        fileName: \"/Users/khadim/dev/pawnlink.docs/components/intro-section.jsx\",\n                        lineNumber: 5,\n                        columnNumber: 9\n                    }, this),\n                    \"\\xa0to your\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/khadim/dev/pawnlink.docs/components/intro-section.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    \"Websites and Apps\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/khadim/dev/pawnlink.docs/components/intro-section.jsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                class: \"text-lg text-gray-700 dark:text-gray-300 text-center\",\n                children: \"Pawnlink is a open-source platform for linking chessboards to websites and apps.\"\n            }, void 0, false, {\n                fileName: \"/Users/khadim/dev/pawnlink.docs/components/intro-section.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                class: \"text-lg text-gray-700 dark:text-gray-300 text-center\",\n                children: \"This documentation will help you get started with Pawnlink.\"\n            }, void 0, false, {\n                fileName: \"/Users/khadim/dev/pawnlink.docs/components/intro-section.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/khadim/dev/pawnlink.docs/components/intro-section.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n_c = IntroSection;\nvar _c;\n$RefreshReg$(_c, \"IntroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludHJvLXNlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTQTtJQUN0QixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBR0MsT0FBTTs7a0NBQ1IsOERBQUNDO3dCQUFLRCxPQUFNO2tDQUEyRTs7Ozs7O29CQUVoRjtrQ0FFUCw4REFBQ0U7Ozs7O29CQUFLOzs7Ozs7OzBCQUdSLDhEQUFDQztnQkFBRUgsT0FBTTswQkFBdUQ7Ozs7OzswQkFJaEUsOERBQUNHO2dCQUFFSCxPQUFNOzBCQUF1RDs7Ozs7Ozs7Ozs7O0FBS3RFO0tBcEJ3QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnRyby1zZWN0aW9uLmpzeD82NDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvU2VjdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMSBjbGFzcz1cIm15LTQgdGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCB0ZXh0LWNlbnRlciBkYXJrOnRleHQtZm9yZWdyb3VuZCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgdG8tc2Vjb25kYXJ5IGZyb20tcHJpbWFyeVwiPlxuICAgICAgICAgIExpbmsgQ2hlc3Nib2FyZHNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAmbmJzcDt0byB5b3VyXG4gICAgICAgIDxiciAvPlxuICAgICAgICBXZWJzaXRlcyBhbmQgQXBwc1xuICAgICAgPC9oMT5cbiAgICAgIDxwIGNsYXNzPVwidGV4dC1sZyB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICBQYXdubGluayBpcyBhIG9wZW4tc291cmNlIHBsYXRmb3JtIGZvciBsaW5raW5nIGNoZXNzYm9hcmRzIHRvIHdlYnNpdGVzXG4gICAgICAgIGFuZCBhcHBzLlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWxnIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIHRleHQtY2VudGVyXCI+XG4gICAgICAgIFRoaXMgZG9jdW1lbnRhdGlvbiB3aWxsIGhlbHAgeW91IGdldCBzdGFydGVkIHdpdGggUGF3bmxpbmsuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkludHJvU2VjdGlvbiIsInNlY3Rpb24iLCJoMSIsImNsYXNzIiwic3BhbiIsImJyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/intro-section.jsx\n"));

/***/ })

});