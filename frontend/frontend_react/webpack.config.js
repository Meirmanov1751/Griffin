const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output:{
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[hash].js",
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-typescript'],
                            ['@babel/preset-react'],
                            ['@babel/preset-env', { targets: { node: 'current' } }]
                        ]
                    }
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', ['@babel/preset-env', { targets: { node: 'current' } }]]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./public/index.html"}),
        new CleanWebpackPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 3000,
        client: {
            logging: 'info',
        },
    }

}



