import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'

import '../src/styles/main.pcss'

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

addDecorator(withA11y)

configure(loadStories, module)