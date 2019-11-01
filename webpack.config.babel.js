import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import safe from 'postcss-safe-parser'
import cssnano from 'cssnano'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import nodeExternals from 'webpack-node-externals'

import config, { apiConfig } from './config'

const { NODE_ENV } = process.env
const isProduction = NODE_ENV === 'production'
const directory = isProduction ? 'dist' : 'dev'

const loaders = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    },
  },
  {
    test: /\.mdx?$/,
    use: [
      'babel-loader',
      'mdx-loader',
    ],
  },
  {
    test: /\.(css|pcss)$/,
    include: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules/normalize.css'),
      path.resolve(__dirname, 'node_modules/font-awesome'),
      path.resolve(__dirname, 'node_modules/source-sans-pro'),
      path.resolve(__dirname, 'node_modules/mapbox-gl/dist'),
      path.resolve(__dirname, 'node_modules/rc-tooltip'),
      path.resolve(__dirname, 'node_modules/simplemde/dist'),
      path.resolve(__dirname, 'node_modules/react-select'),
    ],
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: !isProduction,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: !isProduction,
        },
      },
    ],
  }, {
    test: /\.(png|svg|jpg|gif|ico|woff|woff2|ttf|eot|otf)$/,
    use: {
      loader: 'file-loader',
      options: {
        outputPath: 'public/',
      },
    },
  },
]

const baseConfig = {
  mode: NODE_ENV,
  stats: isProduction ? 'normal' : 'minimal',
  devtool: isProduction ? 'cheap-source-map' : 'source-map',
  context: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, directory),
    publicPath: !isProduction ? `http://${config.host}:${config.port}/`
      : `${apiConfig.scheme}://${apiConfig.host}`
        .concat(apiConfig.port ? `:${apiConfig.port}/` : '/'),
  },
  plugins: [
    new webpack.ProgressPlugin(),
  ],
}

const configServer = merge(baseConfig, {
  entry: [
    '@babel/register',
    '@babel/polyfill',
    './server.js',
  ],
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server.js',
  },
  module: {
    exprContextCritical: false,
    rules: loaders,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/styles.css',
    }),
    // Copy public files
    new CopyWebpackPlugin([
      { from: 'public', to: 'public' },
      { from: '../docs/assets', to: 'assets' },
    ]),
  ],
})

if (isProduction) {
  // Minimize all CSS
  configServer.plugins.push(
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        parser: safe,
        discardComments: {
          removeAll: true,
        },
      },
    }),
  )
} else {
  // Use files from node_modules instead to include them in the build, makes the build faster
  configServer.externals = [nodeExternals({ whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i] })]
}

const configClient = merge(baseConfig, {
  target: 'web',
  entry: [
    '@babel/polyfill',
    './client.js',
  ],
  module: {
    exprContextCritical: false,
    // Styles styles and resources are processed by the server so they can be ignored
    // Slicing the loaders to only get the first 2 loaders for js and mdx
    rules: loaders.slice(0, 2).concat({
      test: /\.(css|pcss|png|svg|jpg|gif|ico|woff|woff2|ttf|eot|otf)$/,
      use: 'ignore-loader',
    }),
  },
  output: {
    filename: 'public/client.js',
  },
})

// export default configServer
export default [configClient, configServer]
