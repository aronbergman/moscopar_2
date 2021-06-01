const NextI18Next = require('next-i18next').default
const path = require('path')

module.exports = new NextI18Next({
    otherLanguages: ['ru', 'fr'],
    defaultLanguage: 'ru',
    localeSubpaths: {
        ru: "ru",
        fr: "fr",
    },
    localePath: path.resolve('./public/locales')
})