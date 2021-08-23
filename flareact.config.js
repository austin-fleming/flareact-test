const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'components/'),
      '@hooks': path.resolve(__dirname, 'hooks/'),
    }
  }
}

const { join } = require('path')

module.exports = {
    webpack: (config, { dev, isWorker, defaultLoaders, webpack }) => {
        config.resolve.alias = {
            '@components': join(__dirname, 'components'),
            '@styles': join(__dirname, 'styles'),
            '@hooks': join(__dirname, 'hooks')
        }

        return config
    }
}