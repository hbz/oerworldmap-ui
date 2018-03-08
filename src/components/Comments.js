import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import JsonSchema from './JSONPointerForm/JsonSchema'
import Form from './JSONPointerForm/Form'
import Builder from './JSONPointerForm/Builder'
import validate from './JSONPointerForm/validate'

import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'

import schema from '../json/schema.json'

const deleteComment = (id, emitter, e) => {
  e.preventDefault()
  emitter.emit('delete', {url: `/resource/${id}`})
}

const Comments = ({moment, translate, emitter, id, comments, user}) => (
  <div className="Comments">

    {comments.length > 0 && <h2>{translate('ResourceIndex.read.comments')}</h2>}
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
        <Form
          data={{
            '@type': 'Comment',
            'text': [{ '@language': 'en' }]
          }}
          validate={validate(JsonSchema(schema).get('#/definitions/Comment'))}
          onSubmit={data => emitter.emit('submit', {url: `/resource/${id}/comment`, data})}
        >
          <Builder schema={JsonSchema(schema).get('#/definitions/Comment')} />
          <button type="submit">{translate('publish')}</button>
        </Form>
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
