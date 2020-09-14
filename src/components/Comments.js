import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'markdown-to-jsx'
import LinkOverride from './LinkOverride'

import JsonSchema from './JSONPointerForm/JsonSchema'
import Form from './JSONPointerForm/Form'
import Builder from './JSONPointerForm/Builder'
import validate from './JSONPointerForm/validate'

import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import withUser from './withUser'

import { formatDate, sortByProp } from '../common'
import expose from '../expose'

import '../styles/components/Comments.pcss'

const sortByDate = sortByProp('dateCreated')

const Comments = ({
  moment, translate, emitter, about, comments, user, schema, _self,
}) => (
  <div className="Comments">

    {comments.filter(comment => comment.author && comment.text).sort(sortByDate).map(comment => (
      <div className="Comment" key={comment['@id']}>
        <div className="head row auto">
          <div className="col">
            {comment.author.map(author => (
              <Link key={author['@id']} href={`/resource/${author['@id']}`}>
                {translate(author['@id'])}
              </Link>
            ))}
            {' '}
            <span
              title={formatDate(comment.dateCreated, moment)}
            >
              {moment(comment.dateCreated).fromNow()}
            </span>
          </div>
          {expose('deleteEntry', user, comment) && (
            <div className="col">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  emitter.emit('delete', {
                    url: `/resource/${comment['@id']}`,
                    redirect: { url: `/resource/${about['@id']}` },
                  })
                }}
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
              component: LinkOverride,
            },
          },
        }}
        >
          {translate(comment.text)}
        </Markdown>
      </div>
    ))}
    {expose('addEntry', user) ? (
      <div>
        <Form
          data={{
            '@type': 'Comment',
            text: { en: '' },
          }}
          validate={validate(JsonSchema(schema).get('#/definitions/Comment'))}
          onSubmit={data => emitter.emit('submit', {
            url: `/resource/${about['@id']}/comment`,
            redirect: { url: `/resource/${about['@id']}` },
            data,
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
          <a href={`/.login?continue=${_self}`}>
            {translate('Comments.joinUsToComment')}
          </a>
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
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  _self: PropTypes.string.isRequired,
}

Comments.defaultProps = {
  comments: [],
  user: null,
}

export default withI18n(withEmitter(withUser(Comments)))
