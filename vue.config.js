module.exports = {
    publicPath:'./',//打包时把路径改为././
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@views',

            }
        },
        externals: {
            'vue': 'Vue',
            'element-ui':'ELEMENT',
            'jquery':'jQuery'
        }
    }
}