import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import '../styles/components/UserBlock.pcss'

const UserBlock = ({id, username, image, countryChampion}) => {
  return (
    <div className="UserBlock">
      <a href={`/resource/${id}`}>
        {image &&
          <img src={image} alt={username} />
        }
        <h2>{username}</h2>
      </a>
      {countryChampion && (
        <h3>
          Country Champion for
          &nbsp;
          <Link href="#none">{countryChampion}</Link>
        </h3>
      )}
    </div>
  )
}

UserBlock.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  image: PropTypes.string,
  countryChampion: PropTypes.string
}

UserBlock.defaultProps = {
  image: undefined,
  countryChampion: undefined
}

export default UserBlock
