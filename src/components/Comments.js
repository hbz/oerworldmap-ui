import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Composer } from 'json-pointer-form'

import Icon from './Icon'
import Link from './Link'
import translate from './translate'
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
    return translate(`properties.${value}`)
  }
}

const Comments = ({moment, translate, emitter, id, comments}) => (
  <div className="Comments">
    {comments.length > 0 && <h2>Comments</h2>}
    {comments.map(comment => (
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
        <ReactMarkdown source={translate(comment.text)} />
      </div>
    ))}
    <h2>Comment</h2>
    <Composer
      value={{
        '@type': 'Comment',
        'text': [{ '@language': 'en', '@value': '' }]
      }}
      schema={schema}
      submit={data => emitter.emit('submit', {url: `/resource/${id}/comment`, data})}
      //submit={data => console.log(data, id)}
      getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
      getLabel={value => getLabel(translate, value)}
      submitLabel={translate('properties.submitLabel')}
    />
  </div>
)

Comments.propTypes = {
  moment: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.any)
}

Comments.defaultProps = {
  comments: []
}

export default translate(withEmitter(Comments))
