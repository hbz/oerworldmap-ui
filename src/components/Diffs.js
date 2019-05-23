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
import i18n from '../i18n'

import { formatDate } from '../common'

import '../styles/components/Diff.pcss'

const Diffs = ({translate, locales, phrases, moment, emitter, log, compare, to, schema}) => {
  const v1 = renderToString(
    <I18nProvider i18n={i18n(locales, phrases)}>
      <EmittProvider emitter={emitter}>
        <WebPageView
          view="view"
          id="view"
          about={compare.about}
          schema={schema}
          expandAll
        />
      </EmittProvider>
    </I18nProvider>
  )

  const v2 = renderToString(
    <I18nProvider i18n={i18n(locales, phrases)}>
      <EmittProvider emitter={emitter}>
        <WebPageView
          view="view"
          id="view"
          about={to.about}
          schema={schema}
          expandAll
        />
      </EmittProvider>
    </I18nProvider>
  )
  const diff = htmldiff(v2, v1)

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
            <div>
              <h1>
                {translate('Diffs.historyFor')}
                :&nbsp;
                <a href={`/resource/${compare.about["@id"]}`}>{translate(compare.about.name)}</a>
              </h1>
              <p>{translate('Diffs.description')}</p>
            </div>

            <form action={`/log/${compare.about["@id"]}?`} onSubmit={(evt) => onSubmit(evt)}>
              {log.map(l => (
                <div key={l.commit} className="logBlock">
                  <div>
                    <a
                      href={`/resource/${compare.about["@id"]}?version=${l.commit}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.commit}
                    </a>
                    <br />
                    <span>
                      <b>
                        {translate('Diffs.author')}
                        :
                      </b>
                      &nbsp;
                      {l.author}
                    </span>
                    <br />
                    <span>
                      <b>
                        {translate('Diffs.date')}
                        :
                      </b>
                      &nbsp;
                      {formatDate(l.date, moment)}
                    </span>
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
        <a href="https://beta.oerworldmap.org/imprint">{translate('Diffs.terms')}</a>
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
  phrases: PropTypes.objectOf(PropTypes.any).isRequired,
  schema: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withEmitter(withI18n(Diffs))
