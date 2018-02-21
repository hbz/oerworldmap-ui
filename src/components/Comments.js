import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Composer } from 'json-pointer-form'

import Icon from './Icon'
import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'

import schema from '../json/schema.json'

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

const deleteComment = (id, emitter, e) => {
  e.preventDefault()
  emitter.emit('delete', {url: `/resource/${id}`})
}

const Comments = ({moment, translate, emitter, id, comments, user}) => (
  <div className="Comments">

    {comments.filter(comment => comment.author && comment.text).map(comment => (
      <div className="Comment" key={comment['@id']}>
        <p>
          <small>
            {comment.author.map(author => (
              <Link key={author["@id"]} href={`/resource/${author["@id"]}`}>
                {translate(author.name)}
              </Link>)
            )}
            &nbsp; {moment(comment.dateCreated).fromNow()}
          </small>
        </p>
        <form onSubmit={(e) => deleteComment(comment["@id"], emitter, e)}>
          <button className="btn" type="submit" title="Delete">
            <i className="fa fa-fw fa-trash" />
          </button>
        </form>
        <ReactMarkdown source={translate(comment.text)} />
      </div>
    ))}
    {user &&
      <div>
        <Composer
          value={{
            '@type': 'Comment',
            'text': [{ '@language': 'en' }]
          }}
          schema={schema}
          submit={data => emitter.emit('submit', {url: `/resource/${id}/comment`, data})}
          getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('publish')}
        />
      </div>
    }
  </div>
)

Comments.propTypes = {
  moment: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.any),
  user: PropTypes.objectOf(PropTypes.any),
}

Comments.defaultProps = {
  comments: [],
  user: null,
}

export default withI18n(withEmitter(Comments))
