module.exports = {
    chainWebpack: config => {
        config.module
            .rule('raw')
            .test(/\.txt$/)
            .loader('raw-loader')
            .end()
    }
}
