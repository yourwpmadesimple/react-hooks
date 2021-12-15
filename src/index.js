import React from 'react';
import ReactDOM from 'react-dom';


import './styles/index.css';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className='container max-w-screen-lg	mx-auto px-2'>
      <App />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
