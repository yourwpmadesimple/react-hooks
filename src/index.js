import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [ first, second, third ] = [ "Alex", "Ali", "Anna" ]
// Destructuring arrays
// console.log(first)
// console.log(second)
// console.log(third)
ReactDOM.render(
  <React.StrictMode>
    <App name={ third } />
  </React.StrictMode>,
  document.getElementById('root')
);
if (module.hot) {
  module.hot.accept();
}
