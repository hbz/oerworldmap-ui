import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'

const TARGET = process.env.npm_lifecycle_event

let Config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './client.js',
    './views/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader',
            options: {
              sourceMap: true
            }},
          {loader: 'less-loader',
            options: {
              sourceMap: true
            }}
        ]
      },

      {
        test: /\.(png|svg|jpg|gif|ico)$/,
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
      new webpack.NoEmitOnErrorsPlugin()
    ]
  })
}

const WebpackConfig = Config
export default WebpackConfig
