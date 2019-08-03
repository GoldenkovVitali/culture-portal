import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          'Yury Chuchvaha': 'Yury Chuchvaha',
          'Evgeniy Oleshkevich': 'Evgeniy Oleshkevich',
          'Darya Novak': 'Darya Novak',
          'Yauheni Dauhala': 'Yauheni Dauhala',
          'Anton Yahorau': 'Anton Yahorau',
          'Vadzim Zartaiski': 'Vadzim Zartaiski',
          'Aliaksei Petrakou': 'Aliaksei Petrakou',
          Developers: 'Developers:',
          'Year of creation': 'Year of creation',
          'List of works': 'List of works',
          Works: 'Works',
          'Culture Portal':
            'Culture Portal',
        },
      },
      ru: {
        translations: {
          'Yury Chuchvaha': 'Юрий Чучвага',
          'Evgeniy Oleshkevich': 'Евгений Олешкевич',
          'Darya Novak': 'Дарья Новак',
          'Yauheni Dauhala': 'Евгений Довгало',
          'Anton Yahorau': 'Антон Егоров',
          'Vadzim Zartaiski': 'Вадим Зартайский',
          'Aliaksei Petrakou': 'Алексей Петраков',
          Developers: 'Разработчики:',
          'Year of creation': 'Год создания',
          'List of works': 'Список работ',
          Works: 'Работы',
          'Culture Portal':
            'Культурный портал',
        },
      },
      by: {
        translations: {
          'Yury Chuchvaha': 'Юрый Чучвага',
          'Evgeniy Oleshkevich': 'Яўген Аляшкевіч',
          'Darya Novak': 'Дар\'я Новак',
          'Yauheni Dauhala': 'Яўген Даўгала',
          'Anton Yahorau': 'Антон Ягораў',
          'Vadzim Zartaiski': 'Вадзім Зартайскі',
          'Aliaksei Petrakou': 'Аляксей Петракоў',
          Developers: 'Распрацоўшчыкі:',
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
