"use strict";
exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 7337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo_white.fe9e15d8.png","height":1214,"width":1788,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAIVBMVEX///////////////////////////////////9MaXH+/v7fwN7sAAAAC3RSTlN8jnOdOVKpZBoA01vicE8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAoSURBVAiZBcGJAQAgDAKxA/qo+w9swu09huJMKyj4NdihtRKYitBMfQzoAIHKl2KkAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 4252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7337);
/* harmony import */ var _redux_counterSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4954);







const Donate_modal = ()=>{
    const donateModal = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.counter.donateModal
    );
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { 0: isCopied , 1: setIsCopied  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        navigator.clipboard.writeText("addr1q8skk43qzh7v9dc0kg8fuw0nh77t67a09s5zpkcyae7wtej8f5qs2jc328wt5a2m0vdyamfwd6umwykps4wwd4729kfqcg46q6");
        setIsCopied(true);
        setTimeout((function() {
            setIsCopied(false);
        }).bind(undefined), 1000);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: donateModal ? "block modal fade show " : "modal fade hidden",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "modal-dialog max-w-lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "modal-content",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal-header",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "modal-body text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                        height: 60,
                                        width: 90,
                                        alt: "ETH2ADA",
                                        className: "max-h-7 h-auto"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal-body p-6 text-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-center dark:text-white",
                                    children: "To donate to the building of phase 2 of the Eth2Ada University you may send ADA to this address:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mx-auto mt-7 max-w-md text-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "relative",
                                        onSubmit: handleSubmit,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                name: "email",
                                                type: "email",
                                                disabled: true,
                                                value: "addr1q8skk43qzh7v9dc0kg8fuw0nh7...",
                                                style: {
                                                    textTransform: "lowercase"
                                                },
                                                className: "dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "submit",
                                                className: "hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white",
                                                children: isCopied ? "Copied!" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    width: 24,
                                                    height: 24,
                                                    style: {
                                                        color: "white"
                                                    },
                                                    className: "dark:fill-jacarta-100 fill-jacarta-100 ml-auto mb-px h-4 w-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            fill: "none",
                                                            d: "M0 0h24v24H0z"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "modal-footer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-center space-x-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    //href="https://metamask.io/"
                                    //target="_blank"
                                    //rel="noreferrer noopener"
                                    onClick: ()=>dispatch((0,_redux_counterSlice__WEBPACK_IMPORTED_MODULE_6__/* .donateModalhide */ .Sr)())
                                    ,
                                    className: "bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
                                    children: "Close"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Donate_modal);


/***/ })

};
;