import path from 'path'
import webpack from 'webpack'
import i18ns from '../src/i18ns'

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      i18ns: JSON.stringify(i18ns)
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loaders: [require.resolve("@storybook/addon-storysource/loader")],
        enforce: "pre"
      },
      {
        test: /\.(css|pcss)$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/normalize.css'),
          path.resolve(__dirname, 'node_modules/font-awesome'),
          path.resolve(__dirname, 'node_modules/source-sans-pro'),
          path.resolve(__dirname, 'node_modules/mapbox-gl/dist'),
          path.resolve(__dirname, '..')
        ],
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
  }
}