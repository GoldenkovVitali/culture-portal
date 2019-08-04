import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
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
        'All Directors': 'All Directors',
        'Learn more': 'Learn more',
        Video: 'Video',
        'About theatre director':
          "A theatre director or stage director is an instructor in the theatre fiel who oversees and orchestrates the mounting of a theatre production (a play, opera, musical, or devised piece of work) by unifying various endeavours and aspects of production. The director's function is to ensure the quality and completeness of theatre production and to lead the members of the creative team into realizing their artistic vision for it. The director thereby collaborates with a team of creative individuals and other staff, coordinating research, stagecraft, costume design, props, lighting design, acting, set design, stage combat, and sound design for the production. If the production is a new piece of writing or a (new) translation of a play, the director may also work with the playwright or a translator.",
        'Year of creation': 'Year of creation',
        'List of works': 'List of works',
        Works: 'Works',
        'Culture Portal': 'Culture Portal',
        BIOGRAPHY: 'BIOGRAPHY',
        GALLERY: 'GALLERY',
        WORKS: 'WORKS',
        MAP: 'MAP',
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
        'All Directors': 'Все режиссёры',
        'Learn more': 'Узнать больше',
        Video: 'Видео',
        'About theatre director':
          'Театральный режиссёр — творческий работник театра, осуществляющий постановку драматического или музыкально-драматического (оперы, оперетты, мюзикла) произведения. Театральный режиссер чаще всего руководит театром, то есть возглавляет не только творческий процесс, но и хозяйственную деятельность предприятия.',
        'Year of creation': 'Год создания',
        'List of works': 'Список работ',
        Works: 'Работы',
        'Culture Portal': 'Культурный портал',
        BIOGRAPHY: 'БИОГРАФИЯ',
        GALLERY: 'ГАЛЕРЕЯ',
        WORKS: 'РАБОТЫ',
        MAP: 'КАРТА',
      },
    },
    by: {
      translations: {
        'Yury Chuchvaha': 'Юрый Чучвага',
        'Evgeniy Oleshkevich': 'Яўген Аляшкевіч',
        'Darya Novak': "Дар'я Новак",
        'Yauheni Dauhala': 'Яўген Даўгала',
        'Anton Yahorau': 'Антон Ягораў',
        'Vadzim Zartaiski': 'Вадзім Зартайскі',
        'Aliaksei Petrakou': 'Аляксей Петракоў',
        Developers: 'Распрацоўшчыкі:',
        'All Directors': 'Усе рэжысёры',
        'Learn more': 'Даведайцеся больш',
        Video: 'Відэа',
        'About theatre director':
          'Тэатральны рэжысёр — асоба ў тэатры, якая паводле сваёй творчай задумы кіруе работай усіх удзельнікаў пастаноўкі (акцёраў, сцэнографа, кампазітара і інш.), знітоўвае ўсе элементы спектакля і падпарадкоўвае іх раскрыццю ідэйна-мастацкай сутнасці драматычнага твора. Рэжысёрская задума ўключае ідэйнае вытлумачэнне (інтэрпрэтацыю) п’есы, вызначэнне яе жанру, стылю і адпаведна манеру акцёрскага выканання, характарыстыку персанажаў, вырашэнне спектакля ў часе і прасторы (тэмп, рытм, мізансцэны, арганізацыя сцэнічнай пляцоўкі), а таксама прынцыпы мастацкага афармлення спектакля.',
        'Year of creation': 'Год стварэння',
        'List of works': 'Спіс работ',
        Works: 'Работы',
        'Culture Portal': 'Культурны партал',
        BIOGRAPHY: 'БІЯГРАФІЯ',
        GALLERY: 'ГАЛЕРЭЯ',
        WORKS: 'РАБОТЫ',
        MAP: 'КАРТА',
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
