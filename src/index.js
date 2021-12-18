import React from 'react';
import ReactDOM from 'react-dom';


import './styles/index.css';
import App, { TreesContext, trees } from "./App";

ReactDOM.render(
  <TreesContext.Provider value={ { trees } }>
    <div className='container max-w-screen-md	mx-auto px-2'>
      <App />
    </div>
  </TreesContext.Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
