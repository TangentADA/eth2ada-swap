"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 4954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M0": () => (/* binding */ profileModalhide),
/* harmony export */   "Sr": () => (/* binding */ donateModalhide),
/* harmony export */   "Vy": () => (/* binding */ donateModalShow),
/* harmony export */   "XB": () => (/* binding */ toastModalhide),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "kC": () => (/* binding */ toastModalShow),
/* harmony export */   "r5": () => (/* binding */ profileModalShow)
/* harmony export */ });
/* unused harmony exports counterSlice, openMblMenu, closeMblMenu, openDropdown, closeDropdown, walletModalShow, walletModalhide, infoModalhide, infoModalShow, bidsModalShow, bidsModalHide, buyModalShow, buyModalHide, showPropatiesModal, closePropatiesModal, updatetrendingCategorySorText, updateTrendingCategoryItemData, updateTrendingCategoryItemByInput, collectCollectionData, updateCollectionData, collectRenkingData, updateRenkingData, updateRenkingDataByBlockchain, updateRenkingDataByPostdate */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    mblMenu: false,
    dropdown: false,
    collection_activity_item_data: [],
    trendingCategoryItemData: [],
    sortedtrendingCategoryItemData: [],
    collectiondata: [],
    sortedCollectionData: [],
    renkingData: [],
    filteredRenkingData: [],
    walletModal: false,
    profileModal: false,
    infoModal: true,
    donateModal: false,
    toastModal: false,
    toastStr: "",
    bidsModal: false,
    buyModal: false,
    propartiesModalValue: false,
    trendingCategorySorText: ""
};
const counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        openMblMenu: (state)=>{
            state.mblMenu = true;
        },
        closeMblMenu: (state)=>{
            state.mblMenu = false;
        },
        openDropdown: (state)=>{
            state.dropdown = true;
        },
        closeDropdown: (state)=>{
            state.dropdown = false;
        },
        handle_collection_activity_item_data: (state, payload)=>{
            state.collection_activity_item_data = payload.data;
        },
        walletModalShow: (state)=>{
            state.walletModal = true;
        },
        walletModalhide: (state)=>{
            state.walletModal = false;
        },
        profileModalShow: (state)=>{
            state.profileModal = true;
        },
        profileModalhide: (state)=>{
            state.profileModal = false;
        },
        infoModalShow: (state)=>{
            state.infoModal = true;
        },
        infoModalhide: (state)=>{
            state.infoModal = false;
        },
        donateModalShow: (state)=>{
            state.donateModal = true;
        },
        donateModalhide: (state)=>{
            state.donateModal = false;
        },
        toastModalShow: (state, payload)=>{
            state.toastModal = true;
            state.toastStr = payload.payload;
        },
        toastModalhide: (state)=>{
            state.toastModal = false;
        },
        bidsModalShow: (state)=>{
            state.bidsModal = true;
        },
        bidsModalHide: (state)=>{
            state.bidsModal = false;
        },
        buyModalShow: (state)=>{
            state.buyModal = true;
        },
        buyModalHide: (state)=>{
            state.buyModal = false;
        },
        showPropatiesModal: (state)=>{
            state.propartiesModalValue = true;
        },
        closePropatiesModal: (state)=>{
            state.propartiesModalValue = false;
        },
        updateTrendingCategoryItemData: (state, action)=>{
            state.trendingCategoryItemData = action.payload;
            state.sortedtrendingCategoryItemData = action.payload;
        },
        updatetrendingCategorySorText: (state, action)=>{
            const sortText = action.payload;
            if (sortText === "Price: Low to High") {
                state.sortedtrendingCategoryItemData = state.trendingCategoryItemData.sort((a, b)=>a.sortPrice - b.sortPrice
                );
            } else if (sortText === "Price: high to low") {
                state.sortedtrendingCategoryItemData = state.trendingCategoryItemData.sort((a, b)=>b.sortPrice - a.sortPrice
                );
            } else if (sortText === "Recently Added") {
                state.sortedtrendingCategoryItemData = state.trendingCategoryItemData.sort((a, b)=>a.addDate - b.addDate
                );
            } else if (sortText === "Auction Ending Soon") {
                state.sortedtrendingCategoryItemData = state.trendingCategoryItemData.sort((a, b)=>b.addDate - a.addDate
                );
            } else {
                state.sortedtrendingCategoryItemData = state.trendingCategoryItemData;
            }
        },
        updateTrendingCategoryItemByInput: (state, action)=>{
            const text = action.payload;
            if (text === "Verified Only") {
                state.sortedtrendingCategoryItemData = state.trendingCategoryItemData.filter((item)=>{
                    return item.verified;
                });
            } else if (text === "NFSW Only") {
                state.sortedtrendingCategoryItemData = state.trendingCategoryItemData.filter((item)=>{
                    return item.nfsw;
                });
            } else if (text === "Show Lazy Minted") {
                state.sortedtrendingCategoryItemData = state.trendingCategoryItemData.filter((item)=>{
                    return item.lazyMinted;
                });
            } else {
                state.sortedtrendingCategoryItemData = state.trendingCategoryItemData;
            }
        },
        collectCollectionData: (state, action)=>{
            const data = action.payload;
            state.collectiondata = data;
            state.sortedCollectionData = data;
        },
        updateCollectionData: (state, action)=>{
            const text = action.payload;
            console.log(text);
            if (text === "trending") {
                const tampItem = state.collectiondata.filter((item)=>item.trending
                );
                state.sortedCollectionData = tampItem;
            }
            if (text === "top") {
                const tampItem = state.collectiondata.filter((item)=>item.top
                );
                state.sortedCollectionData = tampItem;
            }
            if (text === "recent") {
                const tampItem = state.collectiondata.filter((item)=>item.recent
                );
                state.sortedCollectionData = tampItem;
            }
        // state.sortedCollectionData = state.collectiondata;
        },
        collectRenkingData: (state, action)=>{
            state.renkingData = action.payload;
            state.filteredRenkingData = action.payload;
        },
        updateRenkingData: (state, action)=>{
            const text = action.payload;
            let tempItem = state.renkingData.filter((item)=>item.category === text
            );
            if (text === "All") {
                tempItem = state.renkingData;
            }
            state.filteredRenkingData = tempItem;
        },
        updateRenkingDataByBlockchain: (state, action)=>{
            const text = action.payload;
            let tempItem = state.renkingData.filter((item)=>item.blockchain === text
            );
            if (text === "All") {
                tempItem = state.renkingData;
            }
            state.filteredRenkingData = tempItem;
        },
        updateRenkingDataByPostdate: (state, action)=>{
            const text = action.payload;
            let tempItem = state.renkingData.filter((item)=>item.postDate === text
            );
            if (text === "All Time" || text === "Last Year") {
                tempItem = state.renkingData;
            }
            state.filteredRenkingData = tempItem;
        }
    }
});
// Action creators are generated for each case reducer function
const { openMblMenu , closeMblMenu , openDropdown , closeDropdown , walletModalShow , walletModalhide , profileModalhide , infoModalhide , infoModalShow , profileModalShow , donateModalhide , donateModalShow , toastModalhide , toastModalShow , bidsModalShow , bidsModalHide , buyModalShow , buyModalHide , showPropatiesModal , closePropatiesModal , updatetrendingCategorySorText , updateTrendingCategoryItemData , updateTrendingCategoryItemByInput , collectCollectionData , updateCollectionData , collectRenkingData , updateRenkingData , updateRenkingDataByBlockchain , updateRenkingDataByPostdate ,  } = counterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterSlice.reducer);


/***/ })

};
;