import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import env from './config'

const TARGET = process.env.npm_lifecycle_event

let Config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './client.js',
    './views/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: `http://${env.host}:${env.port}/`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // Lint commented due to erros with Hot Module Reload
      // {
      //   test: /\.jsx?$/,
      //   enforce: 'pre',
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'eslint-loader',
      //       options: {
      //         // cache: true,
      //         emitWarning: true,
      //       }
      //     }
      //   ]
      // },
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
          path.resolve(__dirname, 'node_modules/mapbox-gl/dist'),
        ],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },

      {
        test: /\.(png|svg|jpg|gif|ico|woff|woff2|ttf|eot)$/,
        use: [
          'file-loader'
        ]
      },

      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      }
    ]
  },

  devtool: 'source-map'
}

if (TARGET === 'server:dev') {
  Config.module.rules[0].use.query = {
    presets: ['react-hmre']
  }
  Config = merge(Config, {
    entry: ['webpack-hot-middleware/client'],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new StyleLintPlugin(
        {
          emitErrors: false,
          configFile: '.stylelintrc',
          context: 'src',
          files: '**/*.pcss',
        },
      ),
    ]
  })
}

const WebpackConfig = Config
export default WebpackConfig
