import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaStar } from 'react-icons/fa'
import './index.css';

const createArray = (length) => [
  ...Array(length)
]

function Star({ selected = false, onSelect }) {
  return (<FaStar
    color={ selected ? 'red' : 'blue' }
    onClick={ onSelect }
  />
  )
}

function StarRating({ totalStars = 5 }) {
  const [ selectedStars, setSelectedStars ] = useState(0)
  return createArray(totalStars).map((n, i) => (
    <Star
      key={ i }
      selected={ selectedStars > i }
      onSelect={ () => setSelectedStars(i + 1) } />
  ))
}

const App = () => {
  return <StarRating totalStars={ 10 } />
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
