/* global MutationObserver */
/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import SimpleMDE from 'react-simplemde-editor'
import Markdown from 'markdown-to-jsx'
import ReactDOMServer from 'react-dom/server'

import 'simplemde/dist/simplemde.min.css'

import withFormData from './withFormData'
import LinkOverride from '../LinkOverride'
import { objectMap } from '../../common'

const MarkdownArea = ({
  name, value, setValue, errors, property, title, className, translate, shouldFormComponentFocus,
  formId, required, description,
}) => (
  <div className={`Textarea ${property || ''} ${className} ${errors.length ? 'hasError' : ''}`.trim()}>
    <label
      htmlFor={`${formId}-${name}`}
      className={required ? 'required' : ''}
    >
      {translate(title)}
      &nbsp;
      {required ? <span className="asterisk" title={translate('Error.requiredField')}>*</span> : ''}
    </label>
    <span className="fieldDescription">
      {(description
      && translate(description)
      !== description)
        ? translate(description)
        : ''}
    </span>
    {errors.map((error, index) => (
      <div className="error" key={index}>
        {translate(`Error.${error.keyword}`, objectMap(error.params, translate))}
      </div>
    ))}
    <SimpleMDE
      name={name}
      value={value}
      id={`${formId}-${name}`}
      onChange={value => setValue(value)}
      className="SimpleMDE"
      getMdeInstance={(instance) => {
        const mo = new MutationObserver((e) => {
          const mutation = e.shift()
          if (mutation
            && mutation.attributeName === 'class'
            && !mutation.target.classList.contains('hidden')) {
            instance.codemirror.refresh()
          }
        })

        document && document.getElementById('edit')
          && mo.observe(document.getElementById('edit'), { attributes: true })

        instance.codemirror.on('focus', (i, e) => !e && i.setCursor(i.getValue().length))
      }}
      options={{
        autofocus: shouldFormComponentFocus,
        status: false,
        spellChecker: false,
        placeholder: translate(title),
        previewRender(value) {
          return ReactDOMServer.renderToString(
            <Markdown options={{
              overrides: {
                a: {
                  component: LinkOverride,
                },
              },
            }}
            >
              {value}
            </Markdown>,
          )
        },
      }}
    />
  </div>
)

MarkdownArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  property: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  translate: PropTypes.func.isRequired,
  shouldFormComponentFocus: PropTypes.bool,
  formId: PropTypes.string.isRequired,
  required: PropTypes.bool,
  description: PropTypes.string,
}

MarkdownArea.defaultProps = {
  value: '',
  errors: [],
  property: undefined,
  title: '',
  className: '',
  shouldFormComponentFocus: false,
  required: false,
  description: undefined,
}

export default withFormData(MarkdownArea)
