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

/***/ "./src/components/doc.tsx":
/*!********************************!*\
  !*** ./src/components/doc.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\nvar _this = undefined;\n\n\nvar Doc = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        as: \"button\",\n        bg: \"lightGrey\",\n        borderColor: \"darkGrey\",\n        borderWidth: 1,\n        height: 150,\n        width: 150,\n        borderRadius: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                variant: \"unstyled\",\n                onClick: function(e) {\n                    props.onDelete();\n                    e.stopPropagation();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                    src: \"/cross.svg\",\n                    alt: \"delete\"\n                }, void 0, false, {\n                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/doc.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/doc.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                paddingX: 5,\n                paddingY: 5,\n                children: props.docText.length > 25 ? props.docText.substring(0, 25) + \"...\" : props.docText\n            }, void 0, false, {\n                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/doc.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/doc.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Doc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Doc);\nvar _c;\n$RefreshReg$(_c, \"Doc\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kb2MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBeUc7QUFRekcsSUFBTUksR0FBRyxHQUFHLFNBQUNDLEtBQWUsRUFBSztJQUUvQixxQkFDRSw4REFBQ0wsaURBQUc7UUFBQ00sRUFBRSxFQUFHLFFBQVE7UUFBRUMsRUFBRSxFQUFFLFdBQVc7UUFBRUMsV0FBVyxFQUFFLFVBQVU7UUFBRUMsV0FBVyxFQUFFLENBQUM7UUFBRUMsTUFBTSxFQUFFLEdBQUc7UUFBRUMsS0FBSyxFQUFFLEdBQUc7UUFBRUMsWUFBWSxFQUFFLEVBQUU7OzBCQUNuSCw4REFBQ1Qsb0RBQU07Z0JBQUNVLE9BQU8sRUFBRyxVQUFVO2dCQUFFQyxPQUFPLEVBQUksU0FBQ0MsQ0FBQyxFQUFLO29CQUM5Q1YsS0FBSyxDQUFDVyxRQUFRLEVBQUU7b0JBQ2hCRCxDQUFDLENBQUNFLGVBQWUsRUFBRTtnQkFDbkIsQ0FBQzswQkFDRCw0RUFBQ2hCLG1EQUFLO29CQUFDaUIsR0FBRyxFQUFDLFlBQVk7b0JBQUNDLEdBQUcsRUFBRSxRQUFROzs7Ozt5QkFBRzs7Ozs7cUJBQ2pDOzBCQUNULDhEQUFDakIsa0RBQUk7Z0JBQUNrQixRQUFRLEVBQUUsQ0FBQztnQkFBRUMsUUFBUSxFQUFFLENBQUM7MEJBQUdoQixLQUFLLENBQUNpQixPQUFPLENBQUNDLE1BQU0sR0FBRyxFQUFFLEdBQUdsQixLQUFLLENBQUNpQixPQUFPLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUMvRm5CLEtBQUssQ0FBQ2lCLE9BQU87Ozs7O3FCQUFROzs7Ozs7YUFDdkIsQ0FDTjtBQUNKLENBQUM7QUFkS2xCLEtBQUFBLEdBQUc7QUFnQlQsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kb2MudHN4PzZjN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJbWFnZSwgSGVhZGluZywgVGV4dCwgSFN0YWNrLCBTcGFjZXIsIEJ1dHRvbiwgQ2VudGVyLCBJY29uQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW50ZXJmYWNlIGRvY1Byb3BzIHtcbiAgZG9jVGV4dDogc3RyaW5nLFxuICAvL29uVGFwRG9jOiBhbnksXG4gIG9uRGVsZXRlOiBhbnksXG59XG5cbmNvbnN0IERvYyA9IChwcm9wczogZG9jUHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9IHsnYnV0dG9uJ30gYmc9eydsaWdodEdyZXknfSBib3JkZXJDb2xvcj17J2RhcmtHcmV5J30gYm9yZGVyV2lkdGg9ezF9IGhlaWdodD17MTUwfSB3aWR0aD17MTUwfSBib3JkZXJSYWRpdXM9ezEwfT5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSB7XCJ1bnN0eWxlZFwifSBvbkNsaWNrID0geyhlKSA9PiB7XG4gICAgICAgICAgcHJvcHMub25EZWxldGUoKVxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB9fT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Nyb3NzLnN2Z1wiIGFsdD17J2RlbGV0ZSd9Lz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxUZXh0IHBhZGRpbmdYPXs1fSBwYWRkaW5nWT17NX0+e3Byb3BzLmRvY1RleHQubGVuZ3RoID4gMjUgPyBwcm9wcy5kb2NUZXh0LnN1YnN0cmluZygwLCAyNSkgKyAnLi4uJ1xuICAgICAgICAgIDogcHJvcHMuZG9jVGV4dH08L1RleHQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2M7Il0sIm5hbWVzIjpbIkJveCIsIkltYWdlIiwiVGV4dCIsIkJ1dHRvbiIsIkRvYyIsInByb3BzIiwiYXMiLCJiZyIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZSIsIm9uRGVsZXRlIiwic3RvcFByb3BhZ2F0aW9uIiwic3JjIiwiYWx0IiwicGFkZGluZ1giLCJwYWRkaW5nWSIsImRvY1RleHQiLCJsZW5ndGgiLCJzdWJzdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/doc.tsx\n"));

/***/ })

});