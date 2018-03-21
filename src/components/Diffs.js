/* global FormData */
import React from 'react'
import PropTypes from 'prop-types'
import { renderToString } from 'react-dom/server'
import htmldiff from '../../vendor/htmldiff'

import WebPageView from './WebPageView'
import I18nProvider from './I18nProvider'
import EmittProvider from './EmittProvider'
import withEmitter from './withEmitter'
import withI18n from './withI18n'

import { formatDate } from '../common'

import '../styles/components/Diff.pcss'

const Diffs = ({translate, locales, phrases, moment, emitter, log, compare, to}) => {
  const v1 = renderToString(
    <I18nProvider locales={locales} phrases={phrases}>
      <EmittProvider emitter={emitter}>
        <WebPageView
          view="view"
          id="view"
          about={compare.about}
          expandAll
        />
      </EmittProvider>
    </I18nProvider>
  )

  const v2 = renderToString(
    <I18nProvider locales={locales} phrases={phrases}>
      <EmittProvider emitter={emitter}>
        <WebPageView
          view="view"
          id="view"
          about={to.about}
          expandAll
        />
      </EmittProvider>
    </I18nProvider>
  )
  const diff = htmldiff(v1, v2)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.target.parentElement.form || e.target.form || e.target
    const formData = new FormData(form)
    const parameters = [...formData.entries()]
      .filter(p => !!p[1])
      .map(p => encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1])).join("&")
    emitter.emit('navigate', `/log/${compare.about["@id"]}?` + parameters)
  }

  return (
    <div className="Diff">
      <div className="diffContent">
        <div className="diffList">
          <div className="scroll">
            <h1>{translate('History for')}: <a href={`/resource/${compare.about["@id"]}`}>{translate(compare.about.name)}</a></h1>

            <form action={`/log/${compare.about["@id"]}?`} onSubmit={(evt) => onSubmit(evt)} >
              {log.map(l => (
                <div key={l.commit} className="logBlock">
                  <div>
                    <a href={`/log/${l.commit}`}>{l.commit}</a>
                    <br />
                    <span><b>{translate('Author')}:</b> {l.author}</span>
                    <br />
                    <span><b>{translate('Date')}:</b> {formatDate(l.date, moment)}</span>
                  </div>
                  <div>
                    <input
                      name="compare"
                      type="radio"
                      value={l.commit}
                      checked={compare.version === l.commit}
                      onChange={onSubmit}
                    />
                    <input
                      name="to"
                      type="radio"
                      value={l.commit}
                      checked={to.version === l.commit}
                      onChange={onSubmit}
                    />
                  </div>
                </div>
              ))}
              <noscript>
                <input type="sumbit" className="btn" />
              </noscript>
            </form>
          </div>

        </div>
        <div className="diffView">

          <div className="scroll">
            <div dangerouslySetInnerHTML={{__html: diff}} />
          </div>
        </div>

      </div>
      <div className="footer">
        <a href="https://beta.oerworldmap.org/imprint">{translate('Terms of Use & Privacy Policy')}</a>
      </div>
    </div>
  )
}


Diffs.propTypes = {
  moment: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  log: PropTypes.arrayOf(PropTypes.any).isRequired,
  compare: PropTypes.objectOf(PropTypes.any).isRequired,
  to: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  locales: PropTypes.arrayOf(PropTypes.any).isRequired,
  phrases: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withEmitter(withI18n(Diffs))
