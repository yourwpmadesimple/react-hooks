import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className='container mx-auto px-1'>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
