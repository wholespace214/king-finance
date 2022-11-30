import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationCN from './translate/chinese.json';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'English',
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      English: {
        translation: {
          header: {
            docs: 'Docs',
            staking: 'Staking'
          }
        }
      },
      Spanish: {
        translation: {
          header: {
            docs: 'asdf',
            staking: 'ffff'
          }
        }
      },
      Italian: {
        translation: {
          header: {
            docs: 'rr',
            staking: 'eeee'
          }
        }
      },
      French: {
        translation: {
          header: {
            docs: 'hh',
            staking: 'kkkk'
          }
        }
      },
      German: {
        translation: {
          header: {
            docs: 'werrwe',
            staking: 'ww'
          }
        }
      },
      Chinese: {
        translation: translationCN
      }
    }
  });

export default i18n;
