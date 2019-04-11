const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin( {
            analyzerMode: 'disabled',
            generateStatsFile: true
        } ),
        new webpack.NormalModuleReplacementPlugin(
            /src\/environments\/environment.ts/,
            './environment.prod.ts'
        ),
    ],
    devtool: 'source-map'
};
