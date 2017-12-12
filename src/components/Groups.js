/* global FormData */
import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'
import Link from './Link'
import FullModal from './FullModal'
import '../styles/Groups.pcss'

const Groups = ({translate, groups, users}) => (
  <div className="Groups">
    <FullModal>
      <div>
        <h2>{translate('Groups.editGroups')}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const data = {}
            const uniqueKeys = [...new Set(formData.keys())]
            uniqueKeys.forEach(key => {
              data[key] = formData.getAll(key)
            })
            console.log(data)
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Account</th>
                {groups.map(group => (
                  <th>{group}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <Link href={`/resource/${user.id}`}>{translate(user.name)}</Link>
                  </td>
                  <td>{user.username}</td>
                  {groups.map(group => (
                    <td className="center">
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
  groups: PropTypes.arrayOf(PropTypes.any).isRequired,
  users: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default translate(Groups)
