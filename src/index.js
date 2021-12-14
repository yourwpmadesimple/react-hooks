import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  // const result = useState();
  // console.log(result)

  const [ status, setStatus ] = useState('Not Delivered')

  console.log(status)
  return (
    <div>
      <h1>The package is: { status }</h1>
      <button onClick={ () => setStatus("Delivered") }>Deliver</button>
    </div>
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
