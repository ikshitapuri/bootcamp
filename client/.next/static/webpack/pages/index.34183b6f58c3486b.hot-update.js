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

/***/ "./src/components/footer.tsx":
/*!***********************************!*\
  !*** ./src/components/footer.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc */ \"./src/components/doc.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar DocumentsFooter = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array()), documents = ref[0], updateDocuments = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref1[0], updateOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1), activeIndex = ref2[0], updateActiveIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), docText = ref3[0], updateText = ref3[1];\n    var onClose = function() {\n        updateOpen(false);\n    };\n    var onSave = function(index) {\n        if (documents[index] != docText) {\n            var newDocuments = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(documents);\n            newDocuments[index] = docText;\n            updateDocuments(newDocuments);\n        }\n        updateOpen(false);\n    };\n    var onDelete = function(index) {\n        var newDocuments = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(documents);\n        newDocuments.splice(index, 1);\n        updateDocuments((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newDocuments));\n    };\n    var onTapDoc = function(index) {\n        updateActiveIndex(index);\n        updateOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                paddingY: 50,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                    templateColumns: \"repeat(6, 1fr)\",\n                    gap: \"3\",\n                    justifyItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.GridItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                borderRadius: 10,\n                                as: \"button\",\n                                bgColor: \"blue\",\n                                height: 150,\n                                width: 150,\n                                onClick: function() {\n                                    return updateDocuments((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(documents).concat([\n                                        \"Tap to edit.\"\n                                    ]));\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                    src: \"/new-doc-button.svg\",\n                                    alt: \"Blue create document button\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, _this),\n                        documents.map(function(text, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.GridItem, {\n                                onClick: function() {\n                                    onTapDoc(index);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_doc__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onDelete: function() {\n                                        return onDelete(index);\n                                    },\n                                    docText: text\n                                }, void 0, false, {\n                                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 101\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 57\n                            }, _this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalHeader, {\n                                children: \"Document\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalBody, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                                    placeholder: \"Enter some text.\",\n                                    value: documents[activeIndex],\n                                    onChange: function(event) {\n                                        updateText(event.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 9\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: function() {\n                                        onSave(activeIndex);\n                                        updateActiveIndex(-1);\n                                    },\n                                    variant: \"solid\",\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 9\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                lineNumber: 66,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DocumentsFooter, \"BvL9TJlDUaJ05WLGP5a1wS57id8=\");\n_c = DocumentsFooter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DocumentsFooter);\nvar _c;\n$RefreshReg$(_c, \"DocumentsFooter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxFQUFHOytDQUFNQSxRQUFRLENBQUNGLEtBQUssQ0FBQztxQ0FBQTtvQ0FBRUosT0FBTyxFQUFFc0IsSUFBSTs7Ozs7eUNBQUc7Ozs7O3FDQUFXO3dCQUFBLENBQUMsQ0FBQzs7Ozs7O3lCQUNySjs7Ozs7cUJBQ1Q7MEJBQ04sOERBQUN6QyxtREFBSztnQkFBQ2UsTUFBTSxFQUFFQSxNQUFNO2dCQUFFTSxPQUFPLEVBQUVBLE9BQU87O2tDQUN2Qyw4REFBQ3BCLDBEQUFZOzs7OzZCQUFHO2tDQUNoQiw4REFBQ0MsMERBQVk7OzBDQUNYLDhEQUFDQyx5REFBVzswQ0FBQyxVQUFROzs7OztxQ0FBYzswQ0FDbkMsOERBQUNDLDhEQUFnQjs7OztxQ0FBRzswQ0FDcEIsOERBQUNDLHVEQUFTOzBDQUNSLDRFQUFDRyxzREFBUTtvQ0FDVGtDLFdBQVcsRUFBQyxrQkFBa0I7b0NBQzlCQyxLQUFLLEVBQUU5QixTQUFTLENBQUNJLFdBQVcsQ0FBQztvQ0FDN0IyQixRQUFRLEVBQUUsU0FBQ0MsS0FBSyxFQUFLO3dDQUNuQnpCLFVBQVUsQ0FBQ3lCLEtBQUssQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUMsQ0FBQztvQ0FDakMsQ0FBQzs7Ozs7eUNBQ0M7Ozs7O3FDQUNROzBDQUNaLDhEQUFDckMseURBQVc7MENBQ1YsNEVBQUNDLG9EQUFNO29DQUFDOEIsT0FBTyxFQUFFLFdBQU07d0NBQUNmLE1BQU0sQ0FBQ0wsV0FBVyxDQUFDO3dDQUN6Q0MsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQ3ZCLENBQUM7b0NBQUU2QixPQUFPLEVBQUMsT0FBTzs4Q0FBQyxNQUFJOzs7Ozt5Q0FBUzs7Ozs7cUNBQ3BCOzs7Ozs7NkJBQ0Q7Ozs7OztxQkFDVDs7b0JBQ0wsQ0FDRDtBQUNKLENBQUM7R0F0RUtwQyxlQUFlO0FBQWZBLEtBQUFBLGVBQWU7QUF3RXJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeD85MzUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBCb3gsIFxuICBHcmlkLCBcbiAgR3JpZEl0ZW0sIFxuICBJbWFnZSwgXG4gIE1vZGFsLCBcbiAgTW9kYWxPdmVybGF5LCBcbiAgTW9kYWxDb250ZW50LCAgXG4gIE1vZGFsSGVhZGVyLCBcbiAgTW9kYWxDbG9zZUJ1dHRvbixcbiAgTW9kYWxCb2R5LFxuICBNb2RhbEZvb3RlcixcbiAgQnV0dG9uLFxuICBUZXh0YXJlYSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRG9jIGZyb20gXCIuL2RvY1wiO1xuXG5jb25zdCBEb2N1bWVudHNGb290ZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2RvY3VtZW50cywgdXBkYXRlRG9jdW1lbnRzXSA9IHVzZVN0YXRlKEFycmF5KCkpXG4gIGNvbnN0IFtpc09wZW4sIHVwZGF0ZU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFthY3RpdmVJbmRleCwgdXBkYXRlQWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoLTEpXG4gIGNvbnN0IFtkb2NUZXh0LCB1cGRhdGVUZXh0XSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgdXBkYXRlT3BlbihmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IG9uU2F2ZSA9IChpbmRleCkgPT4ge1xuICAgIGlmIChkb2N1bWVudHNbaW5kZXhdICE9IGRvY1RleHQpIHtcbiAgICAgIHZhciBuZXdEb2N1bWVudHMgPSBbLi4uZG9jdW1lbnRzXVxuICAgICAgbmV3RG9jdW1lbnRzW2luZGV4XSA9IGRvY1RleHRcbiAgICAgIHVwZGF0ZURvY3VtZW50cyhuZXdEb2N1bWVudHMpXG4gICAgfVxuICAgIHVwZGF0ZU9wZW4oZmFsc2UpXG4gIH1cblxuICBjb25zdCBvbkRlbGV0ZSA9IChpbmRleCkgPT4ge1xuICAgIHZhciBuZXdEb2N1bWVudHMgPSBbLi4uZG9jdW1lbnRzXVxuICAgIG5ld0RvY3VtZW50cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgdXBkYXRlRG9jdW1lbnRzKFsuLi5uZXdEb2N1bWVudHNdKVxuICB9XG5cbiAgY29uc3Qgb25UYXBEb2MgPSAoaW5kZXgpID0+IHtcbiAgICB1cGRhdGVBY3RpdmVJbmRleChpbmRleClcbiAgICB1cGRhdGVPcGVuKHRydWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEJveCBwYWRkaW5nWT17NTB9PlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgdGVtcGxhdGVDb2x1bW5zPXsncmVwZWF0KDYsIDFmciknfVxuICAgICAgICAgICAgICBnYXA9JzMnXG4gICAgICAgICAgICAgIGp1c3RpZnlJdGVtcz17J2NlbnRlcid9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtPlxuICAgICAgICAgICAgICAgIDxCb3ggYm9yZGVyUmFkaXVzPXsxMH0gYXMgPSBcImJ1dHRvblwiIGJnQ29sb3I9eydibHVlJ30gaGVpZ2h0PXsxNTB9IHdpZHRoPXsxNTB9IG9uQ2xpY2s9eygpID0+IHVwZGF0ZURvY3VtZW50cyhbLi4uZG9jdW1lbnRzLCAnVGFwIHRvIGVkaXQuJ10pfT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbmV3LWRvYy1idXR0b24uc3ZnXCIgYWx0PVwiQmx1ZSBjcmVhdGUgZG9jdW1lbnQgYnV0dG9uXCIgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICAgIHtkb2N1bWVudHMubWFwKCh0ZXh0LCBpbmRleCkgPT4ge3JldHVybiA8R3JpZEl0ZW0gb25DbGljaz17KCkgPT4ge29uVGFwRG9jKGluZGV4KX19PjxEb2Mgb25EZWxldGU9IHsoKSA9PiBvbkRlbGV0ZShpbmRleCl9IGRvY1RleHQ9e3RleHR9Lz48L0dyaWRJdGVtPn0pfVxuICAgICAgICAgICAgPC9HcmlkPlxuICAgIDwvQm94PlxuICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17b25DbG9zZX0+XG4gICAgPE1vZGFsT3ZlcmxheSAvPlxuICAgIDxNb2RhbENvbnRlbnQ+XG4gICAgICA8TW9kYWxIZWFkZXI+RG9jdW1lbnQ8L01vZGFsSGVhZGVyPlxuICAgICAgPE1vZGFsQ2xvc2VCdXR0b24gLz5cbiAgICAgIDxNb2RhbEJvZHk+XG4gICAgICAgIDxUZXh0YXJlYSBcbiAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHNvbWUgdGV4dC4nIFxuICAgICAgICB2YWx1ZT17ZG9jdW1lbnRzW2FjdGl2ZUluZGV4XX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvTW9kYWxCb2R5PlxuICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtvblNhdmUoYWN0aXZlSW5kZXgpXG4gICAgICAgICAgdXBkYXRlQWN0aXZlSW5kZXgoLTEpXG4gICAgICAgIH19IHZhcmlhbnQ9J3NvbGlkJz5TYXZlPC9CdXR0b24+XG4gICAgICA8L01vZGFsRm9vdGVyPlxuICAgIDwvTW9kYWxDb250ZW50PlxuICA8L01vZGFsPlxuICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50c0Zvb3RlcjsiXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIkdyaWRJdGVtIiwiSW1hZ2UiLCJNb2RhbCIsIk1vZGFsT3ZlcmxheSIsIk1vZGFsQ29udGVudCIsIk1vZGFsSGVhZGVyIiwiTW9kYWxDbG9zZUJ1dHRvbiIsIk1vZGFsQm9keSIsIk1vZGFsRm9vdGVyIiwiQnV0dG9uIiwiVGV4dGFyZWEiLCJ1c2VTdGF0ZSIsIkRvYyIsIkRvY3VtZW50c0Zvb3RlciIsIkFycmF5IiwiZG9jdW1lbnRzIiwidXBkYXRlRG9jdW1lbnRzIiwiaXNPcGVuIiwidXBkYXRlT3BlbiIsImFjdGl2ZUluZGV4IiwidXBkYXRlQWN0aXZlSW5kZXgiLCJkb2NUZXh0IiwidXBkYXRlVGV4dCIsIm9uQ2xvc2UiLCJvblNhdmUiLCJpbmRleCIsIm5ld0RvY3VtZW50cyIsIm9uRGVsZXRlIiwic3BsaWNlIiwib25UYXBEb2MiLCJwYWRkaW5nWSIsInRlbXBsYXRlQ29sdW1ucyIsImdhcCIsImp1c3RpZnlJdGVtcyIsImJvcmRlclJhZGl1cyIsImFzIiwiYmdDb2xvciIsImhlaWdodCIsIndpZHRoIiwib25DbGljayIsInNyYyIsImFsdCIsIm1hcCIsInRleHQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/footer.tsx\n"));

/***/ })

});