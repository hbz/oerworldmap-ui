import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const ENV = process.env.NODE_ENV

let Config = {
  context: path.join(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './site.js'
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    publicPath: '/',
    filename: 'assets/js/bundle.js'
  },
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.(css|pcss)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/normalize.css'),
          path.resolve(__dirname, 'node_modules/font-awesome'),
          path.resolve(__dirname, 'node_modules/source-sans-pro'),
        ],
      },

      {
        test: /\.(png|svg|jpg|gif|ico|woff|woff2|ttf|eot|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/'
          }
        }
      }
    ]
  }
}

if (ENV === 'production') {
  Config = merge(Config, {
    plugins: [
      new ExtractTextPlugin("assets/css/styles.css"),
    ],
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(css|pcss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
              },
            ],
          }),
        },
      ]
    }
  })
}

if (ENV === 'development') {
  Config.module.rules[0].use.query = {
    presets: ['react-hmre']
  }
  Config = merge(Config, {
    devtool: 'source-map',
    mode: 'development',
    entry: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch'
    ],
    devServer: {
      contentBase: __dirname + "/assets/",
      inline: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new StyleLintPlugin(
        {
          emitErrors: false,
          configFile: '.stylelintrc',
          context: 'src',
          files: '**/*.pcss',
        },
      ),
    ],
    module: {
      rules: [
        {
          test: /\.(css|pcss)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    }
  })
}

const WebpackConfig = Config
export default WebpackConfig
