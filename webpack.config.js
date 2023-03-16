const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

function getFilename(ext) {
    const fixedExt = ext.replace(/^\./, '');

    return isDev ? `[name].${fixedExt}` : `${fixedExt}/[name].[contenthash].${fixedExt}`;
}

function getCssLoaders(...loaders) {
    const cssLoaders = [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, { loader: 'css-loader' }];

    if (loaders !== undefined) {
        cssLoaders.push(...loaders);
    }

    return cssLoaders;
}

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    target: 'web',
    entry: {
        banner: './src/js/banner.js',
        elements: './src/js/elements.js',
        plans: './src/js/plans.js',
        translation: './src/js/translation.js',
    },
    output: {
        filename: getFilename('.js'),
        chunkFilename: getFilename('.js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: getCssLoaders(),
                include: /\.module.css$/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: getCssLoaders('sass-loader'),
                include: /\.module.s[ac]ss$/,
            },
            {
                test: /\.css/i,
                use: getCssLoaders(),
                exclude: /\.module.css$/i,
            },
            {
                test: /\.s[ac]ss$/i,
                use: getCssLoaders('sass-loader'),
                exclude: /\.module.s[ac]ss$/i,
            },
            {
                test: /\.(png|jpg|svg|gif)/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(html)$/i,
                use: ['html-loader'],
            },
        ],
    },
    plugins: [
        new HTMLPlugin({ template: path.resolve(__dirname, 'src/index.html') }),
        new MiniCssExtractPlugin({
            filename: getFilename('.css'),
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
        minimize: true,
        minimizer: [new CssMinimizerPlugin()],
    },
    resolve: {
        extensions: ['.js'],
    },
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    devtool: isDev ? 'source-map' : undefined,
    stats: isDev ? 'minimal' : 'normal',
};

module.exports = config;
