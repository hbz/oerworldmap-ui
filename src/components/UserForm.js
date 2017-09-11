import React from 'react'
import PropTypes from 'prop-types'

import '../styles/UserForm.pcss'

const UserForm = () => (
  <div className="fullModal">
    <div className="UserForm">
      <div className="separator">
        <h2>Login</h2>
        <p>When you click the login button your browser will present you a popup where you can enter your email address and password.</p>
        <a href="/.login" className="btn">Login</a>
      </div>

      <div className="separator">
        <h2>Forgot password?</h2>
        <p>Enter your email address, we will send you a temporary password.</p>
        <div className="combined">
          <input type="email" />
          <button className="btn">Reset Password</button>
        </div>
      </div>

      <div className="separator">
        <h2>Register</h2>
        <input type="text" placeholder="Your Name ..." />
        <input type="text" placeholder="Your Location ..." />
        <input type="email" placeholder="Your Email Address ..." />
        <input type="text" placeholder="Choose Password" />
        <input type="text" placeholder="Repeat Password" />
        <label>
          <input type="checkbox" />
          <span>By registering, I agree to the terms of the <a href="/imprint" target="_blank">privacy policy</a>. I specifically agree to publish the information I provide, except for my password, which will be stored securely. Your activities within OER World Map will also be stored and processed for the purpose of improving the service as well as to prove your consent to specific activities.*</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>I also agree to the <a href="/imprint" target="_blank">Terms of the service.</a> Especially, I will ensure, that no rights of others are violated by me publishing information through OER World Map. This includes the privacy and copyrights of others.*</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>I agree to having my email-address published as part of my profile</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>I want to subscribe to the OER World Map Newsletter</span>
        </label>
        <br />
        <button className="btn">Register</button>
      </div>
    </div>

  </div>
)

UserForm.propTypes = {
  children: PropTypes.node.isRequired
}

export default UserForm
