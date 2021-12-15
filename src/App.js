import React, { useReducer } from "react";


function App() {
  const [ number, setNumber ] = useReducer((
    number, newNumber) => number + newNumber,
    0
  );
  return (
    <div>
      <h1
        className="center"
        onClick={ () => setNumber(1) }
      >
        { number }
      </h1>
    </div>
  );
}

export default App;
