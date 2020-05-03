const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = [{
    entry: {
        index: [path.resolve('src', 'components', 'entrypoints', 'index.jsx')]
    },

    output: {
        path: path.resolve(__dirname, 'src', 'static', 'public'),
        filename: 'js/[chunkhash].js',
        publicPath: '/public'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],

                    }
                },
                exclude: [/node_modules/, /static/]
            }, {
                test: /\.ejs$/,
                loader: 'raw-loader'
            }, {
                test: /\.(css)/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/public/css'
                    }

                }, 'css-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*']
    },

    optimization: {
        splitChunks: {
            automaticNameDelimiter: '.',
            cacheGroups: {
                react: {
                    chunks: 'initial',
                }
            }
        }
    },

    plugins: [
        new CleanWebpackPlugin(),
        // create blog,
        new MiniCssExtractPlugin({
            chunkFilename: 'css/[hash].css'
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: '../views/pages/index.ejs',
            template: path.join('src', 'views', 'pages', 'index.ejs')
        })
    ]
}]

module.exports = config