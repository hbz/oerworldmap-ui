import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import safe from 'postcss-safe-parser'
import cssnano from 'cssnano'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import config, { apiConfig } from './config'

const ENV = process.env.NODE_ENV

let Config = {
  context: path.join(__dirname, 'src'),
  entry: [
    '@babel/polyfill',
    './client.js',
    './views/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: `${apiConfig.scheme}://${apiConfig.host}`
      .concat(apiConfig.port ? `:${apiConfig.port}/` : '/'),
    filename: 'public/bundle.js'
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
          path.resolve(__dirname, 'node_modules/mapbox-gl/dist'),
        ],
      },

      {
        test: /\.(png|svg|jpg|gif|ico|woff|woff2|ttf|eot|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'public/'
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new CopyWebpackPlugin([
      { from: 'public', to: 'public' },
    ])
  ]

}

if (ENV === 'production') {
  Config = merge(Config, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: "public/styles.css"
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          parser: safe,
          discardComments: { removeAll: true }
        }
      })
    ],
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(css|pcss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            "postcss-loader"
          ]
        },
      ]
    }
  })
}

if (ENV === 'development') {
  Config = merge(Config, {
    output: {
      publicPath: `http://${config.host}:${config.port}/`,
    },
    devtool: 'source-map',
    mode: 'development',
    entry: ['webpack-hot-middleware/client'],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
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
            'style-loader',
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
