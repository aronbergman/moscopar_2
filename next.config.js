const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

const rewrites = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.spid.center/v3/:path*',
            },
        ]
    },
};

const imagePlugin = withImages({
    webpack(config, options) {
        return config
    }
})

module.exports = withPlugins([imagePlugin, rewrites])