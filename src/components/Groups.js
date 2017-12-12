import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'
import Link from './Link'
import FullModal from './FullModal'
import '../styles/Groups.pcss'

const Groups = ({translate, groups, users}) => (
  <div className="Groups">
    <FullModal>
      {console.log(users,groups)}
      <div>
        <h2>{translate('Groups.editGroups')}</h2>
        <form action="">
          <table>
            <thead>
              <tr>
                <th>Profile</th>
                <th>Account</th>
                <th>Admin</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Username</td>
                <td>user@localhost</td>
                <td className="center">
                  <input type="checkbox" name="role.admin" id="role.admin" />
                </td>
                <td className="center">
                  <input type="checkbox" name="role.edit" id="role.edit" />
                </td>
              </tr>
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
}

export default translate(Groups)
