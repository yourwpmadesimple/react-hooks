import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [ name, setName ] = useState("Shelly");

  useEffect(() => {
    let section = document.querySelector('section')
    let content = "Hello World"
    section.append(content)
  });

  return (
    <section>
      <p>Congratulations { name }</p>
      <button onClick={ () => setName("Wayne") }>Change Winner</button>
    </section>
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
