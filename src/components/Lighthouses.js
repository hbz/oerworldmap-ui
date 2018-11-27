import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'markdown-to-jsx'

import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import LinkOverride from './LinkOverride'

import { formatDate } from '../common'
import expose from '../expose'

const Lighthouses = ({moment, translate, emitter, lighthouses, user, about}) => (
  <div className="Lighthouses">

    {lighthouses.filter(lighthouse => lighthouse.agent && lighthouse.description).map(lighthouse => (
      <div className="Comment" key={lighthouse['@id']}>
        <div className="head row auto">
          <div className="col">
            {lighthouse.agent.map(author => (
              <Link key={author["@id"]} href={`/resource/${author["@id"]}`}>
                {translate(author.name)}
              </Link>)
            )}
            {lighthouse.startTime && (
              <span
                title={formatDate(lighthouse.startTime, moment)}
              >
                &nbsp;
                {moment(lighthouse.startTime).fromNow()}
              </span>
            )}
          </div>
          {expose('deleteEntry', user, lighthouse) && (
            <div className="col">
              <form onSubmit={(e) => {
                e.preventDefault()
                emitter.emit('delete', {
                  url: `/resource/${lighthouse['@id']}`,
                  redirect: {url: `/resource/${about['@id']}`}
                })}}
              >
                <button className="btn icon" type="submit" title="Delete">
                  <i aria-hidden="true" className="fa fa-fw fa-trash" />
                </button>
              </form>
            </div>
          )}
        </div>
        <Markdown options={{
          overrides: {
            a: {
              component: LinkOverride
            }
          }
        }}
        >
          {translate(lighthouse.description)}
        </Markdown>
      </div>
    ))}

  </div>
)

Lighthouses.propTypes = {
  moment: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  lighthouses: PropTypes.arrayOf(PropTypes.any),
  user: PropTypes.objectOf(PropTypes.any),
  about: PropTypes.objectOf(PropTypes.any).isRequired,
}

Lighthouses.defaultProps = {
  lighthouses: [],
  user: null,
}

export default withI18n(withEmitter(Lighthouses))
