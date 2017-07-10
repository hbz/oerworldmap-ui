import './styles/main.less'
import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App'

(function() {

  document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
      <App {...window.__APP_INITIAL_STATE__} />,
      document.getElementById('root')
    );
    setTimeout(function() {
      ReactDOM.render(
        <App source="Client" />,
        document.getElementById('root')
      )
    }, 3000);
  });

})();
