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

import { formatDate } from '../common'
import expose from '../expose'

import '../styles/components/Comments.pcss'

const Comments = ({moment, translate, emitter, about, comments, user, schema}) => (
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
            <span
              title={formatDate(comment.dateCreated, moment)}
            >
              {moment(comment.dateCreated).fromNow()}
            </span>
          </div>
          {expose('deleteEntry', user, comment) &&
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
    {expose('addEntry', user) ? (
      <div>
        <Form
          data={{
            '@type': 'Comment',
            'text': [{ '@language': 'en' }]
          }}
          validate={validate(JsonSchema(schema).get('#/definitions/Comment'))}
          onSubmit={data => emitter.emit('submit', {
            url: `/resource/${about['@id']}/comment`,
            redirect: {url: `/resource/${about['@id']}`},
            data
          })}
        >
          <Builder schema={JsonSchema(schema).get('#/definitions/Comment')} />
          <div className="buttons">
            <button className="btn" type="submit">{translate('publish')}</button>
          </div>
        </Form>
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
  schema: PropTypes.objectOf(PropTypes.any).isRequired
}

Comments.defaultProps = {
  comments: [],
  user: null,
}

export default withI18n(withEmitter(Comments))
