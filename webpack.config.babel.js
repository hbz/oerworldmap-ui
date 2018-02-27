import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import env from './config'

const TARGET = process.env.npm_lifecycle_event

let Config = {
  context: path.join(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './client.js',
    './views/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: `http://${env.host}:${env.port}/`,
    filename: 'assets/bundle.js'
  },
  module: {
    exprContextCritical: false,
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: [/node_modules/, /vendor/],
        loader: "eslint-loader",
        options: {
          cache: true,
          quiet: true
        }
      },
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
          path.resolve(__dirname, 'node_modules/mapbox-gl/dist'),
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
  },

  devtool: 'source-map',

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' },
    ])
  ]

}

if (TARGET === 'server:prod') {
  Config = merge(Config, {
    plugins: [
      new ExtractTextPlugin("assets/styles.css"),
      new UglifyJSPlugin({
        parallel: true,
        sourceMap: true,
        cache: true,
      })
    ],
    module: {
      noParse: /(mapbox-gl)\.js$/,
      rules: [
        {
          test: /\.(css|pcss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                  minimize: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ]
    }
  })
}

if (TARGET === 'server:dev') {
  Config.module.rules[1].use.query = {
    presets: ['react-hmre']
  }
  Config = merge(Config, {
    entry: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch'
    ],
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

if (TARGET === 'server:static') {
  Config.module.rules[1].use.query = {
    presets: ['react-hmre']
  }
  Config = merge(Config, {
    entry: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch'
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractTextPlugin("assets/styles.css"),
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
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        }
      ]
    }
  })
}

const WebpackConfig = Config
export default WebpackConfig
