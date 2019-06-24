module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      importFrom: 'src/styles/variables.css',
      browsers: 'last 2 versions',
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'color-mod-function': true
      }
    },
  },
}
