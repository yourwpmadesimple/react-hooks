import React from 'react';
import ReactDOM from 'react-dom';
import { FaStar } from 'react-icons/fa';
import './index.css';

const createArray = (length) => [
  ...Array(length)
]

function Star() {
  return <FaStar />
}

function StarRating({ totalStars = 5 }) {
  return createArray(totalStars).map((n, i) => (
    <Star key={ i } />
  ))
}

const App = () => {
  return <StarRating totalStars={ 1000 } />
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
