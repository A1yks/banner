import elements from './elements';
import i18next from 'i18next';
import en from '../locales/en.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import ja from '../locales/ja.json';
import nl from '../locales/nl.json';
import ru from '../locales/ru.json';
import zh from '../locales/zh.json';

const resources = {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    ja: { translation: ja },
    nl: { translation: nl },
    ru: { translation: ru },
    zh: { translation: zh },
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
    const langData = i18next.getDataByLanguage(i18next.language);
    const elems = elements.translation;

    for (const key in langData.translation) {
        switch (key) {
            case 'monthlyPrice':
                elems.firstMonthlyPrice.innerHTML = i18next.t(key, { price: '$9.99' });
                elems.secondMonthlyPrice.innerHTML = i18next.t(key, { price: '$1.66' });
                break;
            case 'firstPeriodPrice':
                elems.firstPeriodPrice.innerHTML = i18next.t(key, { price: '$9.99' });
                break;
            case 'secondPeriodPrice':
                elems.secondPeriodPrice.innerHTML = i18next.t(key, { price: '$19.99' });
                break;
            default:
                elems[key].innerHTML = i18next.t(key);
        }
    }
}

function setBannerLang() {
    elements.blocks.banner.classList.add(`banner--${i18next.language}`);
}

i18next
    .init({
        lng: getUserLanguage(),
        fallbackLng: 'en',
        resources,
    })
    .then(() => {
        translate();
        setBannerLang();
    })
    .catch(console.error);
