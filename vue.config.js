

module.exports = {
    // publicPath: './',
    // outputDir: 'dist',
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            extensions: ['.js','.vue','.json'],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}