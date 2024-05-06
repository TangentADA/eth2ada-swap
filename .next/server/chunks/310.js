exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 6046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(422);
/* harmony import */ var _data_newseLatterData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7802);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var _redux_counterSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_8__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const NewseLatter = ({ bgWhite =true  })=>{
    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
        email: ""
    });
    const dispath = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_8__["default"].post("https://yallacap-api.herokuapp.com/newsletter", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 200) {
                dispath((0,_redux_counterSlice__WEBPACK_IMPORTED_MODULE_9__/* .toastModalShow */ .kC)("Congratulations! You Have Subscribed To The Eth2Ada Newsletter Launching Soon."));
            } else {
                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Oops, something went wrong!");
            }
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Oops, something went wrong!");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "dark:bg-jacarta-800 relative py-24",
        children: [
            bgWhite && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("picture", {
                className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: "/images/gradient_light.jpg",
                    alt: "gradient",
                    className: "h-full",
                    layout: "fill"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headLine__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        text: "Newsletter",
                        classes: "font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-jacarta-700 mx-auto mt-20 max-w-2xl text-center text-lg dark:text-white",
                        style: {
                            textTransform: "none"
                        },
                        children: "Join our mailing list to stay in the loop with news & new releases"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mx-auto mt-7 max-w-md text-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            className: "relative",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "email",
                                    value: formData.email,
                                    onChange: handleChange,
                                    type: "email",
                                    placeholder: "Email address",
                                    style: {
                                        textTransform: "lowercase"
                                    },
                                    className: "dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: "hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white",
                                    children: "Subscribe"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewseLatter);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _data_coverflow_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7093);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _headLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(422);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CoverflowCarousel = ()=>{
    swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
        swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto max-w-2xl text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headLine__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    // image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f4a5.png"
                    text: "TRENDING TERMS",
                    classes: "font-display text-jacarta-700 mb-2 text-center text-3xl dark:text-white"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative px-6 sm:pb-5 xs:pb-5 sm:px-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                        breakpoints: {
                            // when window width is >= 640px
                            100: {
                                // width: 640,
                                slidesPerView: 1
                            },
                            575: {
                                // width: 640,
                                slidesPerView: 3
                            },
                            // when window width is >= 768px
                            992: {
                                // width: 768,
                                slidesPerView: 5
                            }
                        },
                        effect: "coverflow",
                        grabCursor: true,
                        centeredSlides: true,
                        slidesPerView: 5,
                        loop: true,
                        autoplay: true,
                        coverflowEffect: {
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        },
                        pagination: true,
                        modules: [
                            swiper__WEBPACK_IMPORTED_MODULE_2__.EffectCoverflow,
                            swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,
                            swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation
                        ],
                        navigation: {
                            nextEl: ".swiper-button-next-4",
                            prevEl: ".swiper-button-prev-4"
                        },
                        className: "swiper coverflow-slider !py-5",
                        children: _data_coverflow_data__WEBPACK_IMPORTED_MODULE_3__/* .coverflow_data.map */ .w.map((item)=>{
                            const { img , id , authorImage , authorName , title  } = item;
                            const itemLink = id.split("/").slice(-1).toString().replace(".jpg", "").replace(".gif", "").replace("_lg", "");
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                className: "relative",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/single_term/" + itemLink,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                            src: img,
                                                            alt: title,
                                                            className: "swiper-lazy h-[430px] w-full object-cover",
                                                            height: "430",
                                                            width: "379"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            href: "/single_term/" + itemLink,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "shrink-0",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: authorImage,
                                                                    alt: "avatar",
                                                                    className: "mr-4 h-10 w-10"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                    href: "/single_term/" + itemLink,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "block",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white",
                                                                            children: title
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        className: "text-2xs text-accent",
                                                                        children: authorName
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }, id);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "swiper-button-prev-4 group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl shadow-white-volume",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            className: "fill-jacarta-700 group-hover:fill-accent",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "none",
                                    d: "M0 0h24v24H0z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "swiper-button-next-4 group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl shadow-white-volume",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            className: "fill-jacarta-700 group-hover:fill-accent",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "none",
                                    d: "M0 0h24v24H0z"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoverflowCarousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_bids_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2531);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_counterSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4954);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6155);
/* harmony import */ var _data_statistic_promo_2_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2911);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const Statistic_promo_carousel = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
                    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
                    swiper__WEBPACK_IMPORTED_MODULE_3__.Scrollbar
                ],
                spaceBetween: 30,
                slidesPerView: "auto",
                loop: true,
                breakpoints: {
                    240: {
                        slidesPerView: 1
                    }
                },
                navigation: {
                    nextEl: ".bids-swiper-button-next",
                    prevEl: ".bids-swiper-button-prev"
                },
                className: " card-slider-4-columns !py-5",
                children: _data_statistic_promo_2_data__WEBPACK_IMPORTED_MODULE_13__/* .statistic_promo_2_data.map */ .I.map((item)=>{
                    const { id , img  } = item;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        className: "text-white",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: img,
                            alt: "",
                            width: "398",
                            height: "571",
                            className: "swiper-lazy inline-block border-0"
                        })
                    }, id);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "group bids-swiper-button-prev swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdKeyboardArrowLeft, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "group bids-swiper-button-next swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdKeyboardArrowRight, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statistic_promo_carousel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cU": () => (/* reexport safe */ _blog_newseLatter_jsx__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _headLine_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(422);
/* harmony import */ var _blog_newseLatter_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6046);
/* harmony import */ var _tabs_Tabs_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5328);
/* harmony import */ var _modal_donate_modal_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4252);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_blog_newseLatter_jsx__WEBPACK_IMPORTED_MODULE_1__]);
_blog_newseLatter_jsx__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const headLine = ({ text , classes , image , pera  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: classes,
                children: [
                    image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: image,
                        alt: "headling",
                        className: "mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
                    }),
                    text
                ]
            }),
            pera && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "dark:text-jacarta-300 mt-6",
                children: "While we take pride in being the first and largest marketplace and in our robust feature set, we also help our partners succeed with the following..."
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headLine);


/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Hero_4)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(4661);
;// CONCATENATED MODULE: ./components/autocomplete.jsx


class Autocomplete extends external_react_.Component {
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: ""
    };
    onChange = (e)=>{
        console.log("onChanges");
        const { options  } = this.props;
        const userInput = e.currentTarget.value;
        const filteredOptions = options.filter((val)=>val.title.toLowerCase().includes(userInput.toLowerCase()) //|| val.text.toLowerCase().includes(userInput.toLowerCase())
        );
        this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value
        });
    };
    onClick = (e)=>{
        this.setState({
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: e.currentTarget.innerText
        });
        window.location.href = `/dictionary?query=${e.currentTarget.innerText}`;
    };
    handleSubmit = (event)=>{
        event.preventDefault();
        const { userInput  } = this.state;
        window.location.href = `/dictionary?query=${userInput}`;
    };
    onKeyDown = (e)=>{
        const { activeOption , filteredOptions  } = this.state;
        if (e.keyCode === 13) {
            this.setState({
                activeOption: 0,
                showOptions: false,
                userInput: filteredOptions[activeOption].title
            });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            this.setState({
                activeOption: activeOption - 1
            });
        } else if (e.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                console.log(activeOption);
                return;
            }
            this.setState({
                activeOption: activeOption + 1
            });
        }
    };
    render() {
        const { onChange , onClick , handleSubmit , onKeyDown , state: { activeOption , filteredOptions , showOptions , userInput  }  } = this;
        let optionList;
        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "options max-w-2xl w-full rounded-2xl ",
                    children: filteredOptions.map((option, index)=>{
                        let className;
                        if (index === activeOption) {
                            className = "option-active";
                        }
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: className,
                            onClick: onClick,
                            children: option.title
                        }, option.title);
                    })
                });
            } else {
                optionList = /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "no-options"
                });
            }
        }
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: handleSubmit,
                    className: "relative mb-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            onChange: onChange,
                            onKeyDown: onKeyDown,
                            value: userInput,
                            //    value={query}
                            //     onChange={handleChange}
                            type: "text",
                            // onChange={evt => setInputValue(evt.target.value)}
                            className: "w-full rounded-2xl border border-jacarta-100 py-4 px-4 pl-10 text-md text-jacarta-700 placeholder-jacarta-300 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white",
                            placeholder: "Search Dictionary"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                width: "24",
                                height: "24",
                                className: "h-4 w-4 fill-jacarta-500 dark:fill-white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fill: "none",
                                        d: "M0 0h24v24H0z"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                optionList
            ]
        });
    }
};

// EXTERNAL MODULE: ./data/news_data.js
var news_data = __webpack_require__(1525);
;// CONCATENATED MODULE: ./components/hero/hero_4.jsx






function Hero_4() {
    const { 0: query , 1: setQuery  } = (0,external_react_.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const queryString = `?query=${query}`;
        window.location.href = `/dictionary${queryString}`;
    };
    const handleChange = (event)=>{
        setQuery(event.target.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            id: "top",
            className: "hero relative pb-15 pt-10 md:pt-10 xs:pt-42",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                    className: "pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/gradient.jpg",
                        alt: "gradient"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("picture", {
                    className: "pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/gradient_dark.jpg",
                        alt: "gradient dark"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-auto pt-20 max-w-2xl text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "mb-2 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-5xl mt-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "animate-gradient",
                                    children: "Welcome to the Eth2Ada Dictionary!"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mx-auto mb-6 max-w-md text-md leading-normal text-jacarta-50",
                                children: "The Place To Learn Cryptocurrency Definitions"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "App",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Autocomplete, {
                                    options: news_data/* single_news_data */.s
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
;


/***/ }),

/***/ 6053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Intro_video = ()=>{
    const { 0: videoModal , 1: setvideoModal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative mx-auto pb-1 max-w-[90rem]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/nft-game/crypto_icons.png",
                    className: "pointer-events-none absolute -top-1/4 animate-fly",
                    alt: ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: videoModal ? "modal lightbox fade show block" : "modal lightbox fade",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal-dialog modal-dialog-centered modal-xl w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "modal-content border-0 bg-transparent",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "modal-body p-0 relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        setvideoModal(false);
                                        setUrl(null);
                                    },
                                    type: "button",
                                    className: "btn-close position-absolute top-0 end-0 p-3 z-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 16 16",
                                        fill: "#fff",
                                        className: "h-6 w-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    id: "lightboxCarousel-d7ewe4ig",
                                    className: "lightbox-carousel carousel",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "carousel-inner",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "carousel-item active",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "position-absolute top-50 start-50 translate-middle text-white",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "spinner-border",
                                                        role: "status"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "ratio ratio-16x9",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                                        src: url,
                                                        title: "YouTube video player",
                                                        allow: "accelerometer clipboard-write encrypted-media gyroscope picture-in-picture autoplay"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro_video);


/***/ }),

/***/ 6155:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Likes = ({ like , classes ="dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2" ,  })=>{
    const { 0: likeState , 1: setLikeState  } = useState(typeof like === "string" ? +like - 1 : like - 1);
    const { 0: likeNumber , 1: setlikeNumber  } = useState(likeState);
    const handleLike = ()=>{
        if (likeState >= likeNumber) {
            setlikeNumber((prev)=>prev + 1
            );
        } else {
            setlikeNumber((prev)=>prev - 1
            );
        }
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: classes,
        onClick: handleLike,
        children: [
            /*#__PURE__*/ _jsx(Tippy, {
                content: /*#__PURE__*/ _jsx("span", {
                    children: "Favorite"
                }),
                children: /*#__PURE__*/ _jsx("button", {
                    className: "js-likes relative cursor-pointer",
                    children: likeState === likeNumber ? /*#__PURE__*/ _jsx("svg", {
                        className: "icon icon-heart-fill dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4",
                        children: /*#__PURE__*/ _jsx("use", {
                            xlinkHref: "/icons.svg#icon-hert-fill"
                        })
                    }) : /*#__PURE__*/ _jsx("svg", {
                        className: "icon icon-heart-fill dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4",
                        children: /*#__PURE__*/ _jsx("use", {
                            xlinkHref: "/icons.svg#icon-heart-fill"
                        })
                    })
                })
            }),
            /*#__PURE__*/ _jsx("span", {
                className: "dark:text-jacarta-200 text-sm",
                children: likeNumber
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Likes)));


/***/ }),

/***/ 7043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_news_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1525);
/* harmony import */ var _carousel_statistic_promo_2_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3117);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_carousel_statistic_promo_2_carousel__WEBPACK_IMPORTED_MODULE_4__]);
_carousel_statistic_promo_2_carousel__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable react/no-unescaped-entities */ 



function getDailyNumber() {
    const currentDate = new Date();
    const dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000); // Calculate day of the year (0-365)
    // Calculate the daily number based on the day of the year
    const dailyNumber = dayOfYear % 60 + 1;
    return dailyNumber;
}
const Statistic_promo_2 = ()=>{
    const dailyNumber = getDailyNumber();
    var term = _data_news_data__WEBPACK_IMPORTED_MODULE_3__/* .single_news_data */ .s[dailyNumber];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "termofday",
        className: "pt-20 lg:pt-20 xs:pt-5 sm:pt-5",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "statistic_promo_2-section py-12 lg:pb-24 overflow-x-hidden overflow-y-hidden",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "items-center justify-between lg:flex",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-12 lg:w-[45%] lg:pr-16",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mb-6 font-display text-2xl text-white",
                                    children: "TERM OF THE DAY"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "mb-2 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-5xl",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "animate-gradient",
                                        children: term.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-8 text-lg leading-normal text-jacarta-200",
                                    style: {
                                        textTransform: "none",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        "-webkit-line-clamp": "8",
                                        "-webkit-box-orient": "vertical",
                                        display: "-webkit-box"
                                    },
                                    children: term.description == "---" ? term.descriptionAda : term.description
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-12 text-jacarta-200"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/single_term/${term.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark",
                                        children: "View More"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative text-center lg:w-1/2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/nft-game/gradient_glow_large_2.png",
                                    loading: "lazy",
                                    alt: "",
                                    className: "pointer-events-none absolute scale-150"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_carousel_statistic_promo_2_carousel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/nft-game/crypto_icons_1.png",
                                    alt: "",
                                    loading: "lazy",
                                    className: "pointer-events-none absolute -top-10 z-10 animate-fly"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Statistic_promo_2);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5328:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(5973);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./data/items_tabs_data.js
const items_tabs_data_items_offer_data = [
    {
        id: "1ViviGiallo",
        ethPrice: "30",
        usdPrice: "$90,136.10",
        difference: "70%",
        Expiration: "5",
        user: "ViviGiallo"
    },
    {
        id: "2DB96DB",
        ethPrice: "15.5",
        usdPrice: "$45,458.10",
        difference: "70%",
        Expiration: "5",
        user: "DB96DB"
    },
    {
        id: "3myc_nc",
        ethPrice: "0.9",
        usdPrice: "$2,347.90",
        difference: "98%",
        Expiration: "5",
        user: "myc_nc"
    },
    {
        id: "4MetaRDnA",
        ethPrice: "1.2",
        usdPrice: "$4,568.40",
        difference: "100%",
        Expiration: "6",
        user: "MetaRDnA"
    },
    {
        id: "5Karafuru",
        ethPrice: "0.5",
        usdPrice: "$1,699.10",
        difference: "100%",
        Expiration: "6",
        user: "Karafuru"
    },
    {
        id: "6seekortelur",
        ethPrice: "4.7",
        usdPrice: "$13,966.64",
        difference: "40%",
        Expiration: "2",
        user: "seekortelur"
    }, 
];
const items_tabs_data_items_Properties_data = [
    {
        id: 0,
        category: "ACCESSORY",
        product: "Metal headband",
        trait: "3% have this trait"
    },
    {
        id: 1,
        category: "SKIN",
        product: "Dark Brown",
        trait: "8% have this trait"
    },
    {
        id: 2,
        category: "EYES",
        product: "Cyborg",
        trait: "2% have this trait"
    },
    {
        id: 3,
        category: "CLOTH",
        product: "Adidas",
        trait: "7% have this trait"
    },
    {
        id: 4,
        category: "HAIR",
        product: "White Ash",
        trait: "7% have this trait"
    },
    {
        id: 5,
        category: "CHARACTER",
        product: "TSAREVNA",
        trait: "1% have this trait"
    },
    {
        id: 6,
        category: "BACKGROUND",
        product: "CyberPunk",
        trait: "9% have this trait"
    },
    {
        id: 7,
        category: "MOUTH",
        product: "Flower",
        trait: "4% have this trait"
    }, 
];
const items_tabs_data_items_activity_data = [
    {
        id: "1ViviGiallo",
        price: "30",
        from: "AD496A",
        to: "Polymorph: MORPH Token",
        date: "19 days ago",
        text: "bid"
    },
    {
        id: "2DB96DB",
        price: ".00510",
        from: "The_vikk",
        to: "Polymorph: MORPH Token",
        date: "16 days ago",
        text: "transfer"
    },
    {
        id: "3myc_nc",
        price: "1.50",
        from: "CryptoGuysNFT",
        to: "Polymorph: MORPH Token",
        date: "19 days ago",
        text: "sale"
    }, 
];


;// CONCATENATED MODULE: ./components/tabs/OfferTab.jsx




const OfferTab_OfferTab = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "tab-pane fade show active",
            id: "offers",
            role: "tabpanel",
            "aria-labelledby": "offers-tab",
            children: /*#__PURE__*/ _jsxs("div", {
                role: "table",
                className: "scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 grid max-h-72 w-full grid-cols-5 overflow-y-auto rounded-lg rounded-tl-none border bg-white text-sm dark:text-white",
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "contents",
                        role: "row",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
                                role: "columnheader",
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                    children: "Price"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
                                role: "columnheader",
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                    children: "USD Price"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
                                role: "columnheader",
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                    children: "Floor Difference"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
                                role: "columnheader",
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                    children: "Expiration"
                                })
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
                                role: "columnheader",
                                children: /*#__PURE__*/ _jsx("span", {
                                    className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                    children: "From"
                                })
                            })
                        ]
                    }),
                    items_offer_data.map((item)=>{
                        const { ethPrice , id , usdPrice , difference , Expiration , user  } = item;
                        return /*#__PURE__*/ _jsxs("div", {
                            className: "contents",
                            role: "row",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap border-t py-4 px-4",
                                    role: "cell",
                                    children: [
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "-ml-1",
                                            "data-tippy-content": "ETH",
                                            children: /*#__PURE__*/ _jsx("svg", {
                                                className: "icon mr-1 h-4 w-4",
                                                children: /*#__PURE__*/ _jsx("use", {
                                                    xlinkHref: "/icons.svg#icon-ETH"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs("span", {
                                            className: "text-green text-sm font-medium tracking-tight",
                                            children: [
                                                ethPrice,
                                                " ETH"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
                                    role: "cell",
                                    children: usdPrice
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
                                    role: "cell",
                                    children: [
                                        difference,
                                        " below"
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
                                    role: "cell",
                                    children: [
                                        "in ",
                                        Expiration,
                                        " months"
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
                                    role: "cell",
                                    children: /*#__PURE__*/ _jsx(Link, {
                                        href: "#",
                                        children: /*#__PURE__*/ _jsx("a", {
                                            className: "text-accent",
                                            children: user
                                        })
                                    })
                                })
                            ]
                        }, id);
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const tabs_OfferTab = ((/* unused pure expression or super */ null && (OfferTab_OfferTab)));

;// CONCATENATED MODULE: ./components/tabs/Properties.jsx




const Properties_Properties = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "tab-pane fade",
            id: "properties",
            role: "tabpanel",
            "aria-labelledby": "properties-tab",
            children: /*#__PURE__*/ _jsx("div", {
                className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6 md:p-10",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4",
                    children: items_Properties_data.map((item)=>{
                        const { id , category , product , trait  } = item;
                        return /*#__PURE__*/ _jsx(Link, {
                            href: "#",
                            children: /*#__PURE__*/ _jsxs("a", {
                                className: "dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 flex flex-col space-y-2 border p-5 text-center transition-shadow hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-accent text-sm uppercase",
                                        children: category
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-jacarta-700 text-base dark:text-white",
                                        children: product
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-jacarta-400 text-sm",
                                        children: trait
                                    })
                                ]
                            })
                        }, id);
                    })
                })
            })
        })
    });
};
/* harmony default export */ const tabs_Properties = ((/* unused pure expression or super */ null && (Properties_Properties)));

;// CONCATENATED MODULE: ./components/tabs/Activity_tab.jsx




const Activity_tab_Activity_tab = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsxs("div", {
            className: "tab-pane fade",
            id: "activity",
            role: "tabpanel",
            "aria-labelledby": "activity-tab",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base border border-b-0 px-4 pt-5 pb-2.5",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ _jsxs("button", {
                                className: "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",
                                children: [
                                    /*#__PURE__*/ _jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
                                        children: [
                                            /*#__PURE__*/ _jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ _jsx("path", {
                                                d: "M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-2xs font-medium",
                                        children: "Listing"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("button", {
                                className: "dark:hover:bg-accent-dark hover:bg-accent-dark bg-accent mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-transparent px-4 py-3",
                                children: [
                                    /*#__PURE__*/ _jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "mr-2 h-4 w-4 fill-white",
                                        children: [
                                            /*#__PURE__*/ _jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ _jsx("path", {
                                                d: "M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-2xs font-medium text-white",
                                        children: "Bids"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("button", {
                                className: "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",
                                children: [
                                    /*#__PURE__*/ _jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
                                        children: [
                                            /*#__PURE__*/ _jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ _jsx("path", {
                                                d: "M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-2xs font-medium",
                                        children: "Transfers"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("button", {
                                className: "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",
                                children: [
                                    /*#__PURE__*/ _jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        width: "24",
                                        height: "24",
                                        className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
                                        children: [
                                            /*#__PURE__*/ _jsx("path", {
                                                fill: "none",
                                                d: "M0 0h24v24H0z"
                                            }),
                                            /*#__PURE__*/ _jsx("path", {
                                                d: "M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "text-2xs font-medium",
                                        children: "Sales"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ _jsxs("div", {
                    role: "table",
                    className: "scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 max-h-72 w-full overflow-y-auto rounded-lg rounded-tl-none border bg-white text-sm dark:text-white",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "dark:bg-jacarta-600 bg-light-base sticky top-0 flex",
                            role: "row",
                            children: [
                                /*#__PURE__*/ _jsx("div", {
                                    className: "w-[17%] py-2 px-4",
                                    role: "columnheader",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                        children: "Event"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "w-[17%] py-2 px-4",
                                    role: "columnheader",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                        children: "Price"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "w-[22%] py-2 px-4",
                                    role: "columnheader",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                        children: "From"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "w-[22%] py-2 px-4",
                                    role: "columnheader",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                        children: "To"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "w-[22%] py-2 px-4",
                                    role: "columnheader",
                                    children: /*#__PURE__*/ _jsx("span", {
                                        className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
                                        children: "Date"
                                    })
                                })
                            ]
                        }),
                        items_activity_data.map((item)=>{
                            const { id , price , from , to , text , date  } = item;
                            return /*#__PURE__*/ _jsxs("div", {
                                className: "flex",
                                role: "row",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4",
                                        role: "cell",
                                        children: [
                                            /*#__PURE__*/ _jsxs("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                width: "24",
                                                height: "24",
                                                className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
                                                children: [
                                                    /*#__PURE__*/ _jsx("path", {
                                                        fill: "none",
                                                        d: "M0 0h24v24H0z"
                                                    }),
                                                    /*#__PURE__*/ _jsx("path", {
                                                        d: "M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
                                                    })
                                                ]
                                            }),
                                            text
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4",
                                        role: "cell",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "-ml-1",
                                                "data-tippy-content": "ETH",
                                                children: /*#__PURE__*/ _jsx("svg", {
                                                    className: "icon mr-1 h-4 w-4",
                                                    children: /*#__PURE__*/ _jsx("use", {
                                                        xlinkHref: "icons.svg#icon-ETH"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs("span", {
                                                className: "text-green text-sm font-medium tracking-tight",
                                                children: [
                                                    price,
                                                    " ETH"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4",
                                        role: "cell",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                className: "text-accent",
                                                children: from
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4",
                                        role: "cell",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: /*#__PURE__*/ _jsx("a", {
                                                className: "text-accent",
                                                children: to
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4",
                                        role: "cell",
                                        children: /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            children: /*#__PURE__*/ _jsxs("a", {
                                                className: "text-accent flex flex-wrap items-center",
                                                target: "_blank",
                                                rel: "nofollow noopener",
                                                title: "Opens in a new window",
                                                "data-tippy-content": "March 13 2022, 2:32 pm",
                                                children: [
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "mr-1",
                                                        children: date
                                                    }),
                                                    /*#__PURE__*/ _jsxs("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        width: "24",
                                                        height: "24",
                                                        className: "h-4 w-4 fill-current",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("path", {
                                                                fill: "none",
                                                                d: "M0 0h24v24H0z"
                                                            }),
                                                            /*#__PURE__*/ _jsx("path", {
                                                                d: "M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }, id);
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const tabs_Activity_tab = ((/* unused pure expression or super */ null && (Activity_tab_Activity_tab)));

// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__(7051);
// EXTERNAL MODULE: external "chart.js/auto"
var auto_ = __webpack_require__(5732);
;// CONCATENATED MODULE: ./components/tabs/Price_history.jsx




const Price_history_Price_history = ({ classes  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "relative mb-24 w-full",
        children: /*#__PURE__*/ _jsx("div", {
            className: "tab-pane fade",
            children: /*#__PURE__*/ _jsxs("div", {
                className: classes,
                children: [
                    /*#__PURE__*/ _jsxs("div", {
                        className: "mb-10 flex flex-wrap items-center",
                        children: [
                            /*#__PURE__*/ _jsxs("select", {
                                className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mr-8 min-w-[12rem] rounded-lg py-3.5 text-sm dark:text-white",
                                children: [
                                    /*#__PURE__*/ _jsx("option", {
                                        defaultValue: "7-days",
                                        children: "Last 7 Days"
                                    }),
                                    /*#__PURE__*/ _jsx("option", {
                                        defaultValue: "14-days",
                                        children: "Last 14 Days"
                                    }),
                                    /*#__PURE__*/ _jsx("option", {
                                        defaultValue: "30-days",
                                        children: "Last 30 Days"
                                    }),
                                    /*#__PURE__*/ _jsx("option", {
                                        defaultValue: "60-days",
                                        children: "Last 60 Days"
                                    }),
                                    /*#__PURE__*/ _jsx("option", {
                                        defaultValue: "90-days",
                                        children: "Last 90 Days"
                                    }),
                                    /*#__PURE__*/ _jsx("option", {
                                        value: "last-year",
                                        children: "Last Year"
                                    }),
                                    /*#__PURE__*/ _jsx("option", {
                                        value: "all-time",
                                        children: "All Time"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "py-2",
                                children: [
                                    /*#__PURE__*/ _jsxs("span", {
                                        className: "mr-4 inline-block align-middle",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "block text-sm font-bold dark:text-white",
                                                children: "90 Day Avg. Price:"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "text-green block text-sm font-bold",
                                                children: "\u039E7.0633"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("span", {
                                        className: "inline-block align-middle",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "block text-sm font-bold dark:text-white",
                                                children: "90 Day Volume:"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "text-green block text-sm font-bold",
                                                children: "\u039E24,085.6957"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "chart-container relative h-80 w-full",
                        children: /*#__PURE__*/ _jsx(Bar, {
                            data: {
                                labels: [
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June"
                                ],
                                datasets: [
                                    {
                                        type: "line",
                                        label: "Avg. price",
                                        backgroundColor: "#10B981",
                                        borderColor: "#10B981",
                                        data: [
                                            54.73,
                                            64,
                                            53,
                                            96,
                                            130,
                                            100,
                                            102.88
                                        ]
                                    },
                                    {
                                        type: "bar",
                                        label: "Sales",
                                        backgroundColor: "#E7E8EC",
                                        data: [
                                            25,
                                            20,
                                            40,
                                            130,
                                            75,
                                            48,
                                            12
                                        ]
                                    }, 
                                ]
                            },
                            options: {
                                maintainAspectRatio: false,
                                responsive: true,
                                interaction: {
                                    intersect: false,
                                    mode: "index"
                                },
                                scales: {
                                    x: {
                                        grid: {
                                            display: false
                                        }
                                    },
                                    y: {
                                        ticks: {
                                            stepSize: 50
                                        }
                                    }
                                },
                                plugins: {
                                    legend: {
                                        display: false
                                    },
                                    decimation: {
                                        enabled: true
                                    },
                                    tooltip: {
                                        usePointStyle: true,
                                        position: "nearest",
                                        backgroundColor: "#131740",
                                        titleAlign: "center",
                                        bodyAlign: "center",
                                        footerAlign: "center",
                                        padding: 12,
                                        displayColors: false,
                                        yAlign: "bottom"
                                    }
                                },
                                animation: false
                            }
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const tabs_Price_history = ((/* unused pure expression or super */ null && (Price_history_Price_history)));

;// CONCATENATED MODULE: ./components/tabs/Tabs.jsx








const ItemsTabs = ()=>{
    const { 0: tabsActive , 1: setTabsActive  } = useState(1);
    const tabsHeadText = [
        {
            id: 1,
            text: "Offers",
            icon: "offers"
        },
        {
            id: 2,
            text: "properties",
            icon: "properties"
        },
        {
            id: 3,
            text: "details",
            icon: "details"
        },
        {
            id: 4,
            text: "activities",
            icon: "activity"
        },
        {
            id: 5,
            text: "price history",
            icon: "price"
        }, 
    ];
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "scrollbar-custom mt-14 overflow-x-auto rounded-lg",
            children: /*#__PURE__*/ _jsxs(Tabs, {
                className: "min-w-fit tabs",
                children: [
                    /*#__PURE__*/ _jsx(TabList, {
                        className: "nav nav-tabs flex items-center",
                        children: tabsHeadText.map(({ id , text , icon  })=>{
                            return /*#__PURE__*/ _jsx(Tab, {
                                className: "nav-item bg-transparent",
                                children: /*#__PURE__*/ _jsxs("button", {
                                    className: tabsActive === id ? "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white active" : "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white",
                                    onClick: ()=>setTabsActive(id)
                                    ,
                                    children: [
                                        /*#__PURE__*/ _jsx("svg", {
                                            className: "icon mr-1 h-5 w-5 fill-current",
                                            children: /*#__PURE__*/ _jsx("use", {
                                                xlinkHref: `/icons.svg#icon-${icon}`
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            className: "font-display text-base font-medium",
                                            children: text
                                        })
                                    ]
                                })
                            }, id);
                        })
                    }),
                    /*#__PURE__*/ _jsx(TabPanel, {
                        className: "tab-content",
                        children: /*#__PURE__*/ _jsx(OfferTab, {})
                    }),
                    /*#__PURE__*/ _jsx(TabPanel, {
                        children: /*#__PURE__*/ _jsx(Properties, {})
                    }),
                    /*#__PURE__*/ _jsx(TabPanel, {
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "tab-pane fade",
                            id: "details",
                            role: "tabpanel",
                            "aria-labelledby": "details-tab",
                            children: /*#__PURE__*/ _jsxs("div", {
                                className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6 md:p-10",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "mb-2 flex items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                                                children: "Contract Address:"
                                            }),
                                            /*#__PURE__*/ _jsx("a", {
                                                href: "#",
                                                className: "text-accent",
                                                children: "0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "mb-2 flex items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                                                children: "Token ID:"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "js-copy-clipboard text-jacarta-700 cursor-pointer select-none dark:text-white",
                                                "data-tippy-content": "Copy",
                                                children: "7714"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "mb-2 flex items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                                                children: "Token Standard:"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "text-jacarta-700 dark:text-white",
                                                children: "ERC-721"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                                                children: "Blockchain:"
                                            }),
                                            /*#__PURE__*/ _jsx("span", {
                                                className: "text-jacarta-700 dark:text-white",
                                                children: "Ethereum"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx(TabPanel, {
                        children: /*#__PURE__*/ _jsx(Activity_tab, {})
                    }),
                    /*#__PURE__*/ _jsx(TabPanel, {
                        children: /*#__PURE__*/ _jsx(Price_history, {
                            classes: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const tabs_Tabs = ((/* unused pure expression or super */ null && (ItemsTabs)));


/***/ }),

/***/ 2531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export bidsData */
// import '/images/item_1.jpg' from '/images/item_1.jpg';
const bidsData = [
    {
        id: 1,
        image: "/images/products/item_1.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    },
    {
        id: 2,
        image: "/images/products/item_2.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    },
    {
        id: 3,
        image: "/images/products/item_3.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    },
    {
        id: 4,
        image: "/images/products/item_4.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    },
    {
        id: 5,
        image: "/images/products/item_5.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    },
    {
        id: 6,
        image: "/images/products/item_6.jpg",
        title: "ETH Me Outside",
        bid_number: 1.55,
        eth_number: 1.3,
        react_number: 159
    }, 
];



/***/ }),

/***/ 7093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ coverflow_data)
/* harmony export */ });
/* unused harmony export hero_5_data */
const coverflow_data = [
    {
        img: "/images/products/item_4.jpeg",
        title: "UTXO",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_1"
    },
    {
        img: "/images/products/item_5.jpeg",
        title: "Smart Contract / Policy Script",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_2"
    },
    {
        img: "/images/products/item_3.png",
        title: "Consensus Type",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_3"
    },
    {
        img: "/images/products/item_6.jpeg",
        title: "Consensus Algorithm",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_4"
    },
    {
        img: "/images/products/item_5.jpeg",
        title: "Slot",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_5"
    },
    {
        img: "/images/products/item_3.png",
        title: "Epoch",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_6"
    },
    {
        img: "/images/products/item_5.jpeg",
        title: "Fees for smart contracts",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_7"
    },
    {
        img: "/images/products/item_7.jpeg",
        title: "Addresses",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_8"
    },
    {
        img: "/images/products/item_7.jpeg",
        title: "Reward Address",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_9"
    },
    {
        img: "/images/products/item_5.jpeg",
        title: "Token sub-unit",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_10"
    },
    {
        img: "/images/products/item_4.jpeg",
        title: "Controlled Stake Key",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_11"
    },
    {
        img: "/images/products/item_5.jpeg",
        title: "Address encoding",
        authorImage: "/images/logo-circle.png",
        authorName: "Eth2Ada Academy",
        id: "term_12"
    }
];
const hero_5_data = [
    {
        img: "/images/products/item_16_2lg.jpg",
        title: "Etherium NFT Launching Lab",
        authorImage: "/images/avatars/avatar_18_rounded.gif",
        authorName: "051_Hart",
        id: "0Etherium NFT Launching Lab"
    },
    {
        img: "/images/products/item_12_2lg.jpg",
        title: "Oceania \\\\ OVERSEER 017",
        authorImage: "/images/avatars/avatar_22_rounded.jpg",
        authorName: "MadeByM1KE",
        id: "1Oceania \\\\ OVERSEER 017",
        subItem: [
            {
                img: "/images/products/item_13_lg.jpg",
                title: "Light Bars",
                authorImage: "/images/avatars/avatar_17_rounded.jpg",
                authorName: "Wow Frens",
                id: "2Light Bars"
            }, 
        ]
    }, 
];


/***/ }),

/***/ 7802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export newseLatterData */
const newseLatterData = [
    {
        id: "1",
        icon: {
            parentBg: "#beaaf7",
            childBg: "rgb(131 88 255) ",
            svg: "icon-wallet"
        },
        title: [
            "Set",
            "up",
            "your",
            "wallet"
        ],
        text: "Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein the topright corner."
    },
    {
        id: "2",
        icon: {
            parentBg: "#c4f2e3",
            childBg: "rgb(16 185 129)",
            svg: "icon-wallet"
        },
        title: [
            "Create",
            "Your",
            "Collection"
        ],
        text: "Click Create and set up your collection. Add social links, a description, profile & banner images, andset a secondary sales fee."
    },
    {
        id: "3",
        icon: {
            parentBg: "#cddffb",
            childBg: "rgb(66 138 248)",
            svg: "icon-gallery"
        },
        title: [
            "Add",
            "Your",
            "NFTs"
        ],
        text: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTswith properties, stats."
    },
    {
        id: "4",
        icon: {
            parentBg: "#ffd0d0",
            childBg: "rgb(239 68 68)",
            svg: "icon-list"
        },
        title: [
            "List",
            "Them",
            "For",
            "Sale"
        ],
        text: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want tosell your NFTs!"
    }, 
];



/***/ }),

/***/ 2911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ statistic_promo_2_data)
/* harmony export */ });
const statistic_promo_2_data = [
    {
        id: "1",
        img: "/images/products/item_1.png"
    },
    {
        id: "2",
        img: "/images/products/item_1.png"
    },
    {
        id: "3",
        img: "/images/products/item_1.png"
    },
    {
        id: "4",
        img: "/images/products/item_1.png"
    }, 
];


/***/ }),

/***/ 6310:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8401);
/* harmony import */ var _components_intro_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6053);
/* harmony import */ var _components_promo_statistic_promo_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7043);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3554);
/* harmony import */ var _components_hero_hero_4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(736);
/* harmony import */ var _components_carousel_coverflowCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2577);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_counterSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_component__WEBPACK_IMPORTED_MODULE_2__, _components_promo_statistic_promo_2__WEBPACK_IMPORTED_MODULE_4__, _components_carousel_coverflowCarousel__WEBPACK_IMPORTED_MODULE_7__]);
([_components_component__WEBPACK_IMPORTED_MODULE_2__, _components_promo_statistic_promo_2__WEBPACK_IMPORTED_MODULE_4__, _components_carousel_coverflowCarousel__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Home_1 = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
    const infoModal = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)((state)=>state.counter.infoModal
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: "Eth2Ada Dictionary"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hero_hero_4__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_intro_video__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_carousel_coverflowCarousel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_promo_statistic_promo_2__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_component__WEBPACK_IMPORTED_MODULE_2__/* .NewseLatter */ .cU, {
                bgWhite: true
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home_1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 8933:
/***/ (() => {



/***/ })

};
;