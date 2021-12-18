import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';

import App from "./App";

const TreesContext = createContext();

// useTrees is the custom hook
export const useTrees = () => useContext(TreesContext);


const trees = [
  { id: 1, type: "Maple" },
  { id: 2, type: "Oak" },
  { id: 3, type: "Family" },
  { id: 4, type: "Component" },
]

ReactDOM.render(
  <TreesContext.Provider value={ { trees } }>
    <div className='container mx-auto px-1'>
      <App />
    </div>
  </TreesContext.Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
