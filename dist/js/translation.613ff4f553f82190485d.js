"use strict";
(self["webpackChunktest_task"] = self["webpackChunktest_task"] || []).push([[283,531],{

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


/***/ }),

/***/ 693:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/js/elements.js
var js_elements = __webpack_require__(541);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js + 17 modules
var i18next = __webpack_require__(912);
;// CONCATENATED MODULE: ./src/locales/en.json
const en_namespaceObject = JSON.parse('{"featuresInfo":"Unlimited Accessto All Features","unlimitedDocuments":"Unlimited documents","countMode":"Count mode","textRecognition":"Text recognition (OCR)","firstPeriod":"Monthly","firstPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>per month","firstRibbonText":"3 DAYS FREE","monthlyPrice":"{{price}} month","secondPeriod":"Annually","discount":"-83%","secondPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>per year","secondRibbonText":"MOST POPULAR","btn":"Continue","footerInfo":"Auto-renewable. Cancel anytime.","terms":"Terms of Use","restore":"Restore","privacy":"Privacy Policy"}');
;// CONCATENATED MODULE: ./src/locales/es.json
const es_namespaceObject = JSON.parse('{"featuresInfo":"Acceso ilimitadoa todas las funciones","unlimitedDocuments":"Documentos ilimitados","countMode":"Modo de recuento","textRecognition":"Reconocimiento de texto (OCR)","firstPeriod":"Mensual","firstPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>por mes","firstRibbonText":"3 DÍAS GRATIS","monthlyPrice":"{{price}}/mes","secondPeriod":"Anual","discount":"-83%","secondPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>por año","secondRibbonText":"LO MÁS PEDIDO","btn":"Continuar","footerInfo":"Renovable automáticamente. Cancela cuando quieras.","terms":"Términos de uso","restore":"Restablecer","privacy":"Política de privacidad"}');
;// CONCATENATED MODULE: ./src/locales/fr.json
const fr_namespaceObject = JSON.parse('{"featuresInfo":"Accès illimitéà toutes les fonctionnalités","unlimitedDocuments":"Documents illimités","countMode":"Mode décompte","textRecognition":"Reconnaissance de texte (OCR)","firstPeriod":"Tous les mois","firstPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>par mois","firstRibbonText":"3 JOURS GRATUITS","monthlyPrice":"{{price}}/mois","secondPeriod":"Tous les ans","discount":"-83%","secondPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>par an","secondRibbonText":"LE PLUS POPULAIRE","btn":"Continuer","footerInfo":"Renouvelable automatiquement. Annulez à tout moment.","terms":"Conditions d\'utilisation","restore":"Restaurer","privacy":"Politique de confidentialité"}');
;// CONCATENATED MODULE: ./src/locales/ja.json
const ja_namespaceObject = JSON.parse('{"featuresInfo":"全ての機能へ無制限アクセス","unlimitedDocuments":"無制限のドキュメント","countMode":"カウントモード","textRecognition":"テキスト認識 (OCR)","firstPeriod":"月次","firstPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>/月","firstRibbonText":"3日間無料","monthlyPrice":"{{price}}/か月","secondPeriod":"年次","discount":"-83%","secondPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>/年","secondRibbonText":"一番人気","btn":"続行する","footerInfo":"自動更新可能。いつでもキャンセル可能。","terms":"利用規約","restore":"復元する","privacy":"プライバシーポリシー"}');
;// CONCATENATED MODULE: ./src/locales/nl.json
const nl_namespaceObject = JSON.parse('{"featuresInfo":"Onbeperkte toegangtot alle functies","unlimitedDocuments":"Onbeperkt aantal documenten","countMode":"Aantal modus","textRecognition":"Gratis tekstherkenning (OCR)","firstPeriod":"Maandelijks","firstPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>per maand","firstRibbonText":"3 DAGEN GRATIS","monthlyPrice":"{{price}}/maand","secondPeriod":"Jaarlijks","discount":"-83%","secondPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>per jaar","secondRibbonText":"MEEST POPULAIR","btn":"Doorgaan","footerInfo":"Automatisch verlengbaar. Altijd annuleren.","terms":"Gebruiksvoorwaarden","restore":"Herstellen","privacy":"Privacybeleid"}');
;// CONCATENATED MODULE: ./src/locales/ru.json
const ru_namespaceObject = JSON.parse('{"featuresInfo":"Неограниченный доступко всем функциям","unlimitedDocuments":"Любое количество документов","countMode":"Режим «Подсчет»","textRecognition":"Распознавание текста (OCR)","firstPeriod":"1 месяц","firstPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>в месяц","firstRibbonText":"3 ДНЯ БЕСПЛАТНО","monthlyPrice":"{{price}}/месяц","secondPeriod":"1 ГОД","discount":"-83%","secondPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>в год","secondRibbonText":"ПОПУЛЯРНОЕ","btn":"Продолжить","footerInfo":"Автопродление. Отмена в любое время.","terms":"Условия использования","restore":"Восстановить","privacy":"Конфиденциальность"}');
;// CONCATENATED MODULE: ./src/locales/zh.json
const zh_namespaceObject = JSON.parse('{"featuresInfo":"无限制使用所有功能","unlimitedDocuments":"文档无限制","countMode":"计数模式","textRecognition":"文本识别（OCR）","firstPeriod":"每月","firstPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>每月","firstRibbonText":"3日免费","monthlyPrice":"{{price}}/月","secondPeriod":"包年","discount":"-83%","secondPeriodPrice":"<strong class=\'plan-card__full-price\'>{{price}}</strong>每年","secondRibbonText":"最热门","btn":"继续","footerInfo":"自动续订。可随时取消。","terms":"使用条款","restore":"恢复","privacy":"隐私政策"}');
;// CONCATENATED MODULE: ./src/js/translation.js










const resources = {
    en: { translation: en_namespaceObject },
    es: { translation: es_namespaceObject },
    fr: { translation: fr_namespaceObject },
    ja: { translation: ja_namespaceObject },
    nl: { translation: nl_namespaceObject },
    ru: { translation: ru_namespaceObject },
    zh: { translation: zh_namespaceObject },
};

function getLanguageParam() {
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get('lang');
}

function getUserLanguage() {
    let lang = getLanguageParam() || navigator.language || navigator.userLanguage;

    if (!Object.hasOwn(resources, lang)) {
        return 'en';
    }

    return lang.substring(0, 2);
}

function translate() {
    const langData = i18next/* default.getDataByLanguage */.ZP.getDataByLanguage(i18next/* default.language */.ZP.language);
    const elems = js_elements/* default.translation */.Z.translation;

    for (const key in langData.translation) {
        switch (key) {
            case 'monthlyPrice':
                elems.firstMonthlyPrice.innerHTML = i18next/* default.t */.ZP.t(key, { price: '$9.99' });
                elems.secondMonthlyPrice.innerHTML = i18next/* default.t */.ZP.t(key, { price: '$1.66' });
                break;
            case 'firstPeriodPrice':
                elems.firstPeriodPrice.innerHTML = i18next/* default.t */.ZP.t(key, { price: '$9.99' });
                break;
            case 'secondPeriodPrice':
                elems.secondPeriodPrice.innerHTML = i18next/* default.t */.ZP.t(key, { price: '$19.99' });
                break;
            default:
                elems[key].innerHTML = i18next/* default.t */.ZP.t(key);
        }
    }
}

function setBannerLang() {
    js_elements/* default.blocks.banner.classList.add */.Z.blocks.banner.classList.add(`banner--${i18next/* default.language */.ZP.language}`);
}

i18next/* default.init */.ZP.init({
        lng: getUserLanguage(),
        fallbackLng: 'en',
        resources,
    })
    .then(() => {
        translate();
        setBannerLang();
    })
    .catch(console.error);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [912], () => (__webpack_exec__(693)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);