/* global FormData */
import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import Link from './Link'
import FullModal from './FullModal'
import withEmitter from './withEmitter'
import '../styles/components/Groups.pcss'

const Groups = ({translate, emitter, groups, users, _status, confirm}) => (
  <div className="Groups">
    <FullModal closeLink={Link.back}>
      <div>
        <h2>{translate('UserIndex.groups.title')}</h2>
        {confirm &&
          <p>{_status}</p>
        }
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const data = {}
            const uniqueKeys = [...new Set(formData.keys())]
            uniqueKeys.forEach(key => {
              data[key] = formData.getAll(key)
            })
            emitter.emit('submit', {url: '/user/groups', data})
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Account</th>
                {groups.map(group => (
                  <th key={group}>{group}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <Link
                      href={`/resource/${user.id}`}
                      target="_blank"
                    >
                      {translate(user.name)}
                    </Link>
                  </td>
                  <td>{user.username}</td>
                  {groups.map(group => (
                    <td
                      className="center"
                      key={`${user}${group}`}
                    >
                      <input
                        type="checkbox"
                        defaultChecked={user.groups.includes(group)}
                        name={user.username}
                        id={user.username}
                        value={group}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="controls center">
            <input className="btn" type="submit" value="Save" />
            <Link className="btn" href="/resource/">Cancel</Link>
          </div>
        </form>
      </div>
    </FullModal>
  </div>
)

Groups.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  groups: PropTypes.arrayOf(PropTypes.any).isRequired,
  users: PropTypes.arrayOf(PropTypes.any).isRequired,
  confirm: PropTypes.bool,
  _status: PropTypes.string
}

Groups.defaultProps = {
  confirm: false,
  _status: null,
}

export default withEmitter(withI18n(Groups))
