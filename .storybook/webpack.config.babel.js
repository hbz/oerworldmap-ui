import i18ns from '../src/i18ns'
import webpack from 'webpack'

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
}