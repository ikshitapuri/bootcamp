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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\nvar _this = undefined;\n\n\nvar Doc = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        display: \"flex\",\n        flexDirection: \"column\",\n        as: \"button\",\n        bg: \"lightGrey\",\n        borderColor: \"darkGrey\",\n        borderWidth: 1,\n        height: 150,\n        width: 150,\n        borderRadius: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                paddingLeft: 2,\n                variant: \"unstyled\",\n                onClick: function(e) {\n                    props.onDelete();\n                    e.stopPropagation();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                    src: \"/cross.svg\",\n                    alt: \"delete\"\n                }, void 0, false, {\n                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/doc.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/doc.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                alignSelf: \"center\",\n                bg: \"yellow\",\n                paddingX: 5,\n                paddingY: 5,\n                children: props.docText.length > 25 ? props.docText.substring(0, 25) + \"...\" : props.docText\n            }, void 0, false, {\n                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/doc.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/doc.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Doc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Doc);\nvar _c;\n$RefreshReg$(_c, \"Doc\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kb2MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBeUc7QUFRekcsSUFBTUksR0FBRyxHQUFHLFNBQUNDLEtBQWUsRUFBSztJQUUvQixxQkFDRSw4REFBQ0wsaURBQUc7UUFBQ00sT0FBTyxFQUFFLE1BQU07UUFBRUMsYUFBYSxFQUFFLFFBQVE7UUFBRUMsRUFBRSxFQUFHLFFBQVE7UUFBRUMsRUFBRSxFQUFFLFdBQVc7UUFBRUMsV0FBVyxFQUFFLFVBQVU7UUFBRUMsV0FBVyxFQUFFLENBQUM7UUFBRUMsTUFBTSxFQUFFLEdBQUc7UUFBRUMsS0FBSyxFQUFFLEdBQUc7UUFBRUMsWUFBWSxFQUFFLEVBQUU7OzBCQUM3Siw4REFBQ1gsb0RBQU07Z0JBQUNZLFdBQVcsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUcsVUFBVTtnQkFBRUMsT0FBTyxFQUFJLFNBQUNDLENBQUMsRUFBSztvQkFDOURiLEtBQUssQ0FBQ2MsUUFBUSxFQUFFO29CQUNoQkQsQ0FBQyxDQUFDRSxlQUFlLEVBQUU7Z0JBQ25CLENBQUM7MEJBQ0QsNEVBQUNuQixtREFBSztvQkFBQ29CLEdBQUcsRUFBQyxZQUFZO29CQUFDQyxHQUFHLEVBQUUsUUFBUTs7Ozs7eUJBQUc7Ozs7O3FCQUNqQzswQkFDVCw4REFBQ3BCLGtEQUFJO2dCQUFDcUIsU0FBUyxFQUFFLFFBQVE7Z0JBQUVkLEVBQUUsRUFBSSxRQUFRO2dCQUFFZSxRQUFRLEVBQUUsQ0FBQztnQkFBRUMsUUFBUSxFQUFFLENBQUM7MEJBQUdwQixLQUFLLENBQUNxQixPQUFPLENBQUNDLE1BQU0sR0FBRyxFQUFFLEdBQUd0QixLQUFLLENBQUNxQixPQUFPLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUNwSXZCLEtBQUssQ0FBQ3FCLE9BQU87Ozs7O3FCQUFROzs7Ozs7YUFDdkIsQ0FDTjtBQUNKLENBQUM7QUFkS3RCLEtBQUFBLEdBQUc7QUFnQlQsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kb2MudHN4PzZjN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBJbWFnZSwgSGVhZGluZywgVGV4dCwgSFN0YWNrLCBTcGFjZXIsIEJ1dHRvbiwgQ2VudGVyLCBJY29uQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW50ZXJmYWNlIGRvY1Byb3BzIHtcbiAgZG9jVGV4dDogc3RyaW5nLFxuICAvL29uVGFwRG9jOiBhbnksXG4gIG9uRGVsZXRlOiBhbnksXG59XG5cbmNvbnN0IERvYyA9IChwcm9wczogZG9jUHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9IGFzPSB7J2J1dHRvbid9IGJnPXsnbGlnaHRHcmV5J30gYm9yZGVyQ29sb3I9eydkYXJrR3JleSd9IGJvcmRlcldpZHRoPXsxfSBoZWlnaHQ9ezE1MH0gd2lkdGg9ezE1MH0gYm9yZGVyUmFkaXVzPXsxMH0+XG4gICAgICAgIDxCdXR0b24gcGFkZGluZ0xlZnQ9ezJ9IHZhcmlhbnQ9IHtcInVuc3R5bGVkXCJ9IG9uQ2xpY2sgPSB7KGUpID0+IHtcbiAgICAgICAgICBwcm9wcy5vbkRlbGV0ZSgpXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIH19PlxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvY3Jvc3Muc3ZnXCIgYWx0PXsnZGVsZXRlJ30vPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPFRleHQgYWxpZ25TZWxmPXtcImNlbnRlclwifSBiZyA9IHtcInllbGxvd1wifSBwYWRkaW5nWD17NX0gcGFkZGluZ1k9ezV9Pntwcm9wcy5kb2NUZXh0Lmxlbmd0aCA+IDI1ID8gcHJvcHMuZG9jVGV4dC5zdWJzdHJpbmcoMCwgMjUpICsgJy4uLidcbiAgICAgICAgICA6IHByb3BzLmRvY1RleHR9PC9UZXh0PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jOyJdLCJuYW1lcyI6WyJCb3giLCJJbWFnZSIsIlRleHQiLCJCdXR0b24iLCJEb2MiLCJwcm9wcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYXMiLCJiZyIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmdMZWZ0IiwidmFyaWFudCIsIm9uQ2xpY2siLCJlIiwib25EZWxldGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzcmMiLCJhbHQiLCJhbGlnblNlbGYiLCJwYWRkaW5nWCIsInBhZGRpbmdZIiwiZG9jVGV4dCIsImxlbmd0aCIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/doc.tsx\n"));

/***/ })

});