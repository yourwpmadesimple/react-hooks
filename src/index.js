import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaStar } from 'react-icons/fa'
import './index.css';

const App = () => {
  return (
    <secttion>
      <p>Congratulations</p>
    </secttion>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
