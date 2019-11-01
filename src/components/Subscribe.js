import React from 'react'

const Subscribe = () => (
  <section
    id="newsletter"
    className="pageSection bg-orange-light text-white"
  >
    <div className="inner">

      <h3>Subscribe to the OER World Map Newsletter</h3>

      <form method="post" action="https://oerworldmap.org/user/newsletter">
        <div className="row">

          <div className="col">
            <input className="width-100" type="email" name="email" placeholder="Email address" />
          </div>

          <div className="col">
            <button className="btn width-100" type="submit">Subscribe</button>
          </div>

        </div>
      </form>

      <p>
        Leave your email address so we can keep you posted!
        &nbsp;
        Don&apos;t worry, we won&apos;t publish your email address or share it with anyone else -
        &nbsp;
        check out our
        &nbsp;
        <a href="/imprint">privacy policy</a>
      </p>

    </div>
  </section>
)

export default Subscribe
