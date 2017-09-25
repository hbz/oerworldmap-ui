/* global document */

import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'
// import Link from './Link'

import '../styles/Country.pcss'

const triggerClick = (e) => {
  if (e.keyCode === 32) {
    e.target.click()
  }
}

const hideContainer = (header, container) => {

  console.dir(header.target)

  const icon = header.target.querySelector('i')
    || (header.target.classList.contains('fa')
      ? header.target
      : header.target.parentElement.querySelector('i'))

  icon.classList.toggle('fa-plus')
  icon.classList.toggle('fa-minus')

  const el = document.querySelector(`.${container}`)
  el.classList.toggle('collapsed')
}

const Country = () => (
  <div className="Country">
    <h2>Germany</h2>
    <div className="countryChampion">
      <h3
        onKeyDown={triggerClick}
        tabIndex="0"
        role="button"
        onClick={(e) => hideContainer(e,'countryChampionContainer')}
      >
        <span>Country Champion</span> <i className="fa fa-minus" />
      </h3>
      <div className="countryChampionContainer">
        <div className="user">
          <img src="https://placehold.it/30/1A91E6/000000?text=+" alt="Logo" />

          <div className="text">
            Jan Newmann
            <br />
            newmann@hbz-nrw.de
          </div>
        </div>
        <div className="user">
          <img src="https://placehold.it/30/2A99E6/000000?text=+" alt="Logo" />

          <div className="text">
            Jan Newmann
            <br />
            newmann@hbz-nrw.de
          </div>
        </div>
      </div>

    </div>
    <div className="countryReports">
      <h3
        onKeyDown={triggerClick}
        tabIndex="0"
        role="button"
        onClick={(e) => hideContainer(e,'resourcesContainer')}
      >
        <span>Country Reports</span> <i className="fa fa-minus" />
      </h3>
      <div className="resourcesContainer">
        <div className="resource">
          <i className="fa fa-book" />
          <div className="text">
            German OER Practices and Policy – from Bottom-up to Top-down Initiatives
          </div>
        </div>
        <div className="resource">
          <i className="fa fa-book" />
          <div className="text">
            German OER Practices and Policy – from Bottom-up to Top-down Initiatives
          </div>
        </div>
      </div>

    </div>
    <div className="statistics">
      <h3
        onKeyDown={triggerClick}
        tabIndex="0"
        role="button"
        onClick={(e) => hideContainer(e,'statisticsContainer')}
      >
        <span>Statistics</span> <i className="fa fa-minus" />
      </h3>
      <div className="statisticsContainer">
        <table>
          <tbody>
            <tr>
              <td>175</td>
              <td><i className="fa fa-users" /> Organization</td>
            </tr>
            <tr>
              <td>108</td>
              <td><i className="fa fa-desktop" /> Service</td>
            </tr>
            <tr>
              <td>105</td>
              <td><i className="fa fa-user" /> Person</td>
            </tr>
            <tr>
              <td>86</td>
              <td><i className="fa fa-comment" /> Story</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

Country.propTypes = {

}

export default translate(Country)
