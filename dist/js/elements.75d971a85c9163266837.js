"use strict";
(self["webpackChunktest_task"] = self["webpackChunktest_task"] || []).push([[531],{

/***/ 541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const [firstPeriod, secondPeriod] = document.querySelectorAll('.plan-card__title');
const [firstPeriodPrice, secondPeriodPrice] = document.querySelectorAll('.plan-card__price-info');
const [firstRibbonText, secondRibbonText] = document.querySelectorAll('.plan-card__ribbon-text');
const [firstMonthlyPrice, secondMonthlyPrice] = document.querySelectorAll('.plan-card__month-price');

const elements = {
    translation: {
        featuresInfo: document.querySelector('.features__info'),
        unlimitedDocuments: document.querySelector('.features__unlimited-docs'),
        countMode: document.querySelector('.features__count-mode'),
        textRecognition: document.querySelector('.features__text-rec'),
        firstPeriod,
        firstPeriodPrice,
        firstRibbonText,
        firstMonthlyPrice,
        secondPeriod,
        discount: document.querySelector('.plan-card__discount'),
        secondPeriodPrice,
        secondRibbonText,
        secondMonthlyPrice,
        btn: document.querySelector('.btn'),
        footerInfo: document.querySelector('.footer__info'),
        terms: document.querySelector('.footer__terms'),
        restore: document.querySelector('.header__restore'),
        privacy: document.querySelector('.footer__privacy'),
    },
    blocks: {
        plans: document.querySelectorAll('.plan-card'),
        banner: document.querySelector('.banner'),
    },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elements);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(541));
/******/ }
]);