const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    ru: 'ru',
    fr: 'fr'
}

const rewrites = {
        rewrites: async () => [
            ...nextI18NextRewrites(localeSubpaths),
            {
                source: '/api/:path*',
                destination: 'https://api.spid.center/v3/:path*',
            }
        ],
        publicRuntimeConfig: {
            localeSubpaths,
        },
    };

const imagePlugin = withImages({
    webpack(config, options) {
        return config
    }
})

module.exports = withPlugins([imagePlugin, rewrites])