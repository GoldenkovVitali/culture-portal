import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          'Year of creation': 'Year of creation',
          'List of works': 'List of works',
          Works: 'Works',
          'Culture Portal':
            'Culture Portal',
        },
      },
      ru: {
        translations: {
          'Year of creation': 'Год создания',
          'List of works': 'Список работ',
          Works: 'Работы',
          'Culture Portal':
            'Культурный портал',
        },
      },
      by: {
        translations: {
          'Year of creation': 'Год стварэння',
          'List of works': 'Спіс работ',
          Works: 'Работы',
          'Culture Portal':
            'Культурны партал',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
