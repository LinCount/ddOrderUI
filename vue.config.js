module.exports = {
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