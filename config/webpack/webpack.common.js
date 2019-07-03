const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  dotenv.config();
  return {
    entry: ['react', 'react-dom', './src/index.jsx'],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: 'Output Management'
      }),
      new Webpack.DefinePlugin({
        'process.env': {
          AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
          AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
          AUTH0_CALLBACK: JSON.stringify(process.env.AUTH0_CALLBACK)
        }
      }),
      new CleanWebpackPlugin(['dist']),
      new Webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.less', '.css']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.scss$/,
          use: {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(process.cwd(), 'src/styles')],
              sourceMap: true
            }
          }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  };
};
