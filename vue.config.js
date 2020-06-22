module.exports = {
    productionSourceMap: false,//打包之后不生成map文件
    publicPath:'./',//打包时把路径改为././
    devServer: {
        proxy:{
            "/api":{
                target:"http://112.74.58.188:8080",
                changeOrigin:true,
                ws:true,
                pathRewrite: {
                    '^/api': ''  // rewrite path
                }
            }
        }
    },
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
            // 'jquery':'jQuery'
            'jquery' : '$',
            // 'echarts': 'echarts'
        }
    },

}