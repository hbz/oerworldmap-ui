import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Composer } from 'json-pointer-form'

import Icon from './Icon'
import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'

import schema from '../json/schema.json'

import '../styles/components/Comments.pcss'

const getLabel = (translate, value) => {
  if (!value) return ''
  if (typeof value === "object") {
    return (
      <span>
        <Icon type={value["@type"]} />
        &nbsp;{value["name"] ? translate(value["name"]) : value["@id"]}
      </span>
    )
  } else {
    return translate(value)
  }
}

const Comments = ({moment, translate, emitter, about, comments, user}) => (
  <div className="Comments">

    {comments.filter(comment => comment.author && comment.text).map(comment => (
      <div className="Comment" key={comment['@id']}>
        <div className="head row auto">
          <div className="col">
            {comment.author.map(author => (
              <Link key={author["@id"]} href={`/resource/${author["@id"]}`}>
                {translate(author.name)}
              </Link>)
            )}{' '}
            {moment(comment.dateCreated).fromNow()}
          </div>
          {user &&
          user.groups.includes('admin') &&
            <div className="col">
              <form onSubmit={(e) => {
                e.preventDefault()
                emitter.emit('delete', {
                  url: `/resource/${comment['@id']}`,
                  redirect: {url: `/resource/${about['@id']}`}
                })}}
              >
                <button className="btn icon" type="submit" title="Delete">
                  <i className="fa fa-fw fa-trash" />
                </button>
              </form>
            </div>
          }
        </div>
        <ReactMarkdown source={translate(comment.text)} />
      </div>
    ))}
    {user ? (
      <div>
        <Composer
          value={{
            '@type': 'Comment',
            'text': [{ '@language': 'en' }]
          }}
          schema={schema}
          submit={data => emitter.emit('submit', {
            url: `/resource/${about['@id']}/comment`,
            redirect: {url: `/resource/${about['@id']}`},
            data
          })}
          getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('publish')}
        />
      </div>
    ) : (
      <div>
        <em>
          <Link href="/user/register">
            {translate('Join us to comment!')}
          </Link>
        </em>
      </div>
    )}
  </div>
)

Comments.propTypes = {
  moment: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  comments: PropTypes.arrayOf(PropTypes.any),
  user: PropTypes.objectOf(PropTypes.any),
  about: PropTypes.objectOf(PropTypes.any).isRequired,
}

Comments.defaultProps = {
  comments: [],
  user: null,
}

export default withI18n(withEmitter(Comments))
