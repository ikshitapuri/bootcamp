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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc */ \"./src/components/doc.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar DocumentsFooter = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array()), documents = ref[0], updateDocuments = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref1[0], updateOpen = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), index = ref2[0], updateIndex = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), docText = ref3[0], updateText = ref3[1];\n    var onClose = function() {\n        updateOpen(false);\n    };\n    var onSave = function(index) {\n        if (documents[index] != docText) {\n            var newDocuments = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(documents);\n            newDocuments[index] = docText;\n            updateDocuments(newDocuments);\n        }\n        updateOpen(false);\n    };\n    var onDelete = function(index) {\n        var newDocuments = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(documents);\n        newDocuments.splice(index, 1);\n        updateDocuments((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newDocuments));\n    };\n    var onTapDoc = function(index) {\n        updateIndex(index);\n        updateOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                paddingY: 50,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                    templateColumns: \"repeat(6, 1fr)\",\n                    gap: \"3\",\n                    justifyItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.GridItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                borderRadius: 10,\n                                as: \"button\",\n                                bgColor: \"blue\",\n                                height: 150,\n                                width: 150,\n                                onClick: function() {\n                                    return updateDocuments((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(documents).concat([\n                                        \"Tap to edit.\"\n                                    ]));\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                                    src: \"/new-doc-button.svg\",\n                                    alt: \"Blue create document button\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, _this),\n                        documents.map(function(text, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.GridItem, {\n                                onClick: function() {\n                                    onTapDoc(index);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_doc__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    onDelete: function() {\n                                        return onDelete(index);\n                                    },\n                                    docText: text\n                                }, void 0, false, {\n                                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 101\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 57\n                            }, _this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                isOpen: isOpen,\n                onClose: onClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalOverlay, {}, void 0, false, {\n                        fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalContent, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalHeader, {\n                                children: \"Document\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalCloseButton, {}, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalBody, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                                    placeholder: \"Enter some text.\",\n                                    value: docText,\n                                    onChange: function(event) {\n                                        updateText(event.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 9\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 7\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ModalFooter, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    onClick: function() {\n                                        onSave(index);\n                                        updateIndex(null);\n                                    },\n                                    variant: \"solid\",\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 9\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 7\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ikshitapuri/Desktop/bootcamp/client/src/components/footer.tsx\",\n                lineNumber: 66,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DocumentsFooter, \"AUjR8eA0tuDMWtH6q+6xoCfFv2c=\");\n_c = DocumentsFooter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DocumentsFooter);\nvar _c;\n$RefreshReg$(_c, \"DocumentsFooter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNQSxRQUFRLENBQUNQLEtBQUssQ0FBQztxQ0FBQTtvQ0FBRUUsT0FBTyxFQUFFcUIsSUFBSTs7Ozs7eUNBQUc7Ozs7O3FDQUFXO3dCQUFBLENBQUMsQ0FBQzs7Ozs7O3lCQUNySjs7Ozs7cUJBQ1Q7MEJBQ04sOERBQUN4QyxtREFBSztnQkFBQ2UsTUFBTSxFQUFFQSxNQUFNO2dCQUFFTSxPQUFPLEVBQUVBLE9BQU87O2tDQUN2Qyw4REFBQ3BCLDBEQUFZOzs7OzZCQUFHO2tDQUNoQiw4REFBQ0MsMERBQVk7OzBDQUNYLDhEQUFDQyx5REFBVzswQ0FBQyxVQUFROzs7OztxQ0FBYzswQ0FDbkMsOERBQUNDLDhEQUFnQjs7OztxQ0FBRzswQ0FDcEIsOERBQUNDLHVEQUFTOzBDQUNSLDRFQUFDRyxzREFBUTtvQ0FDVGlDLFdBQVcsRUFBQyxrQkFBa0I7b0NBQzlCQyxLQUFLLEVBQUV2QixPQUFPO29DQUNkd0IsUUFBUSxFQUFFLFNBQUNDLEtBQUssRUFBSzt3Q0FDbkJ4QixVQUFVLENBQUN3QixLQUFLLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDLENBQUM7b0NBQ2pDLENBQUM7Ozs7O3lDQUNDOzs7OztxQ0FDUTswQ0FDWiw4REFBQ3BDLHlEQUFXOzBDQUNWLDRFQUFDQyxvREFBTTtvQ0FBQzZCLE9BQU8sRUFBRSxXQUFNO3dDQUFDZCxNQUFNLENBQUNMLEtBQUssQ0FBQzt3Q0FDbkNDLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0NBQ25CLENBQUM7b0NBQUU0QixPQUFPLEVBQUMsT0FBTzs4Q0FBQyxNQUFJOzs7Ozt5Q0FBUzs7Ozs7cUNBQ3BCOzs7Ozs7NkJBQ0Q7Ozs7OztxQkFDVDs7b0JBQ0wsQ0FDRDtBQUNKLENBQUM7R0F0RUtuQyxlQUFlO0FBQWZBLEtBQUFBLGVBQWU7QUF3RXJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeD85MzUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBCb3gsIFxuICBHcmlkLCBcbiAgR3JpZEl0ZW0sIFxuICBJbWFnZSwgXG4gIE1vZGFsLCBcbiAgTW9kYWxPdmVybGF5LCBcbiAgTW9kYWxDb250ZW50LCAgXG4gIE1vZGFsSGVhZGVyLCBcbiAgTW9kYWxDbG9zZUJ1dHRvbixcbiAgTW9kYWxCb2R5LFxuICBNb2RhbEZvb3RlcixcbiAgQnV0dG9uLFxuICBUZXh0YXJlYSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRG9jIGZyb20gXCIuL2RvY1wiO1xuXG5jb25zdCBEb2N1bWVudHNGb290ZXIgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2RvY3VtZW50cywgdXBkYXRlRG9jdW1lbnRzXSA9IHVzZVN0YXRlKEFycmF5KCkpXG4gIGNvbnN0IFtpc09wZW4sIHVwZGF0ZU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpbmRleCwgdXBkYXRlSW5kZXhdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2RvY1RleHQsIHVwZGF0ZVRleHRdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHtcbiAgICB1cGRhdGVPcGVuKGZhbHNlKVxuICB9XG5cbiAgY29uc3Qgb25TYXZlID0gKGluZGV4KSA9PiB7XG4gICAgaWYgKGRvY3VtZW50c1tpbmRleF0gIT0gZG9jVGV4dCkge1xuICAgICAgdmFyIG5ld0RvY3VtZW50cyA9IFsuLi5kb2N1bWVudHNdXG4gICAgICBuZXdEb2N1bWVudHNbaW5kZXhdID0gZG9jVGV4dFxuICAgICAgdXBkYXRlRG9jdW1lbnRzKG5ld0RvY3VtZW50cylcbiAgICB9XG4gICAgdXBkYXRlT3BlbihmYWxzZSlcbiAgfVxuXG4gIGNvbnN0IG9uRGVsZXRlID0gKGluZGV4KSA9PiB7XG4gICAgdmFyIG5ld0RvY3VtZW50cyA9IFsuLi5kb2N1bWVudHNdXG4gICAgbmV3RG9jdW1lbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICB1cGRhdGVEb2N1bWVudHMoWy4uLm5ld0RvY3VtZW50c10pXG4gIH1cblxuICBjb25zdCBvblRhcERvYyA9IChpbmRleCkgPT4ge1xuICAgIHVwZGF0ZUluZGV4KGluZGV4KVxuICAgIHVwZGF0ZU9wZW4odHJ1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8Qm94IHBhZGRpbmdZPXs1MH0+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9eydyZXBlYXQoNiwgMWZyKSd9XG4gICAgICAgICAgICAgIGdhcD0nMydcbiAgICAgICAgICAgICAganVzdGlmeUl0ZW1zPXsnY2VudGVyJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAgPEJveCBib3JkZXJSYWRpdXM9ezEwfSBhcyA9IFwiYnV0dG9uXCIgYmdDb2xvcj17J2JsdWUnfSBoZWlnaHQ9ezE1MH0gd2lkdGg9ezE1MH0gb25DbGljaz17KCkgPT4gdXBkYXRlRG9jdW1lbnRzKFsuLi5kb2N1bWVudHMsICdUYXAgdG8gZWRpdC4nXSl9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9uZXctZG9jLWJ1dHRvbi5zdmdcIiBhbHQ9XCJCbHVlIGNyZWF0ZSBkb2N1bWVudCBidXR0b25cIiAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgICAge2RvY3VtZW50cy5tYXAoKHRleHQsIGluZGV4KSA9PiB7cmV0dXJuIDxHcmlkSXRlbSBvbkNsaWNrPXsoKSA9PiB7b25UYXBEb2MoaW5kZXgpfX0+PERvYyBvbkRlbGV0ZT0geygpID0+IG9uRGVsZXRlKGluZGV4KX0gZG9jVGV4dD17dGV4dH0vPjwvR3JpZEl0ZW0+fSl9XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgPC9Cb3g+XG4gICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICA8TW9kYWxPdmVybGF5IC8+XG4gICAgPE1vZGFsQ29udGVudD5cbiAgICAgIDxNb2RhbEhlYWRlcj5Eb2N1bWVudDwvTW9kYWxIZWFkZXI+XG4gICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxuICAgICAgPE1vZGFsQm9keT5cbiAgICAgICAgPFRleHRhcmVhIFxuICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgc29tZSB0ZXh0LicgXG4gICAgICAgIHZhbHVlPXtkb2NUZXh0fVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgdXBkYXRlVGV4dChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge29uU2F2ZShpbmRleClcbiAgICAgICAgICB1cGRhdGVJbmRleChudWxsKVxuICAgICAgICB9fSB2YXJpYW50PSdzb2xpZCc+U2F2ZTwvQnV0dG9uPlxuICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICA8L01vZGFsQ29udGVudD5cbiAgPC9Nb2RhbD5cbiAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudHNGb290ZXI7Il0sIm5hbWVzIjpbIkJveCIsIkdyaWQiLCJHcmlkSXRlbSIsIkltYWdlIiwiTW9kYWwiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbEhlYWRlciIsIk1vZGFsQ2xvc2VCdXR0b24iLCJNb2RhbEJvZHkiLCJNb2RhbEZvb3RlciIsIkJ1dHRvbiIsIlRleHRhcmVhIiwidXNlU3RhdGUiLCJEb2MiLCJEb2N1bWVudHNGb290ZXIiLCJBcnJheSIsImRvY3VtZW50cyIsInVwZGF0ZURvY3VtZW50cyIsImlzT3BlbiIsInVwZGF0ZU9wZW4iLCJpbmRleCIsInVwZGF0ZUluZGV4IiwiZG9jVGV4dCIsInVwZGF0ZVRleHQiLCJvbkNsb3NlIiwib25TYXZlIiwibmV3RG9jdW1lbnRzIiwib25EZWxldGUiLCJzcGxpY2UiLCJvblRhcERvYyIsInBhZGRpbmdZIiwidGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwianVzdGlmeUl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwiYXMiLCJiZ0NvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwibWFwIiwidGV4dCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/footer.tsx\n"));

/***/ })

});