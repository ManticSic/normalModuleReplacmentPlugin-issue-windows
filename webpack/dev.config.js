module.exports = {
    mode: 'development',
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/,
    },
    devtool: 'cheap-module-eval-source-map'
};
