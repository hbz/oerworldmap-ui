/* global document */
/* global confirm */
import React from 'react'
import PropTypes from 'prop-types'
import { uniqueId } from 'lodash'

import JsonSchema from './JSONPointerForm/JsonSchema'
import Form from './JSONPointerForm/Form'
import Builder from './JSONPointerForm/Builder'
import validate from './JSONPointerForm/validate'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import Link from './Link'

import expose from '../expose'

const WebPageEdit = ({
  about,
  emitter,
  translate,
  action,
  mapboxConfig,
  user,
  schema,
  closeLink,
  showOptionalFields,
  onSubmit
}) => (
  <Form
    data={about}
    validate={validate(JsonSchema(schema).get(`#/definitions/${about['@type']}`))}
    onSubmit={onSubmit}
    onError={() => document.querySelector('.hasError') && (document.querySelector('.webPageWrapper')
      .scrollTop = document.querySelector('.hasError').offsetTop
    )}
  >
    <h2>{translate(action, {type: translate(about['@type'])})}</h2>
    <a
      href="https://github.com/hbz/oerworldmap/wiki/FAQs-for-OER-World-Map-editors"
      target="_blank"
      rel="noopener noreferrer"
      className="needHelp"
    >
      {translate('needHelp')}
    </a>
    <Builder
      schema={JsonSchema(schema).get(`#/definitions/${about['@type']}`)}
      config={{mapboxConfig}}
      key={uniqueId()}
      showOptionalFields={showOptionalFields}
    />
    <p className="agree" dangerouslySetInnerHTML={{__html: translate('ResourceIndex.index.agreeMessage')}} />

    <div className="formButtons">
      <div className="primaryButtons">
        <button className="btn prominent" type="submit">{translate('publish')}</button>
        <Link href={closeLink || Link.home} className="btn">
          Cancel
        </Link>
      </div>
      {expose('deleteEntry', user, about) && (
        <button
          className="btn delete"
          type="button"
          onClick={e => {
            e.preventDefault()
            confirm(translate('other.deleteResource')) && emitter.emit('delete', {
              url: `/resource/${about['@id']}`
            })
          }}
        >
          {translate('ResourceIndex.read.delete')}
        </button>
      )}
    </div>

  </Form>
)

WebPageEdit.propTypes = {
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  action: PropTypes.string,
  mapboxConfig: PropTypes.shape(
    {
      token: PropTypes.string,
      style: PropTypes.string,
      miniMapStyle: PropTypes.string,
    }
  ).isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  closeLink: PropTypes.string,
  showOptionalFields: PropTypes.bool,
  onSubmit: PropTypes.func
}

WebPageEdit.defaultProps = {
  action: 'edit',
  user: null,
  closeLink: null,
  showOptionalFields: true,
  onSubmit: formData => console.log(formData)
}

export default withI18n(withEmitter(WebPageEdit))
