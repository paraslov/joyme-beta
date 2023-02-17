import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { EN_LANG } from './consts'

i18n
  .use(initReactI18next)
  .init({
    lng: EN_LANG,
    fallbackLng: EN_LANG,
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    resources: { [EN_LANG]: { translations: {} } },
  })

export default i18n
