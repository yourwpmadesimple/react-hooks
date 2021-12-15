import React, { useState, useEffect } from "react";
//import './styles/index.css'

function App() {
  const [ name, setName ] = useState('Jan');
  const [ admin, setAdmin ] = useState(false);

  useEffect(() => {
    console.log(`Celebrate ${name}`)
  }, [ name ])

  useEffect(() => {
    console.log(`
    The user is: ${admin ? "admin" : "not admin"},
    `);
  }, [ admin ])

  return (
    <section>
      <p>Congratulations { name }!</p>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        type="button"
        onClick={ () => setName("Shelly") }>
        Change Winner
      </button>
      <p>{ admin ? "Logged in" : "not logged in" }</p>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        type="button"
        onClick={ () => setAdmin(true) }>
        Log in
      </button>
    </section>
  )
}

export default App;
