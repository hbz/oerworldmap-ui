/* global MutationObserver */
/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import SimpleMDE from 'react-simplemde-editor'
import "simplemde/dist/simplemde.min.css"

import withFormData from './withFormData'

const MarkdownArea = ({
  name, value, setValue, errors, property, title, className, translate, shouldFormComponentFocus,
  formId, required, empty
}) => (
  <div className={`Textarea ${property || ''} ${className} ${errors.length ? 'hasError': ''} ${empty ? 'isEmpty': ''}`.trim()}>
    <label
      htmlFor={`${formId}-${name}`}
      className={required ? 'required' : ''}
    >
      {translate(title)} {required ? <span className="asterisk" title={translate('This is a required field!')}>*</span> : ''}
    </label>
    {errors.map((error, index) => (
      <div className="error" key={index}>{error.message}</div>
    ))}
    <SimpleMDE
      name={name}
      value={value}
      id={`${formId}-${name}`}
      placeholder={translate(title)}
      onChange={value => setValue(value)}
      className="SimpleMDE"
      getMdeInstance={instance => {

        const mo = new MutationObserver(e => {
          const mutation = e.shift()
          if (mutation
            && mutation.attributeName === "class"
            && !mutation.target.classList.contains('hidden')) {
            instance.codemirror.refresh()
          }
        })

        document && document.getElementById('edit') &&
          mo.observe(document.getElementById('edit'), {attributes: true})

        instance.codemirror.on("focus", (i, e) =>
          !e && i.setCursor(i.getValue().length))
      }}
      options={{
        autofocus: shouldFormComponentFocus,
        status: false,
        spellChecker: false,
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
  required: PropTypes.bool
}

MarkdownArea.defaultProps = {
  value: '',
  errors: [],
  property: undefined,
  title: '',
  className: '',
  shouldFormComponentFocus: false,
  required: false
}

export default withFormData(MarkdownArea)
