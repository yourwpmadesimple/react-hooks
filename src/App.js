import React, { useState, useReducer } from "react";


function App() {
  const [ checked, setChecked ] = useState(false);
  return (
    <div>
      <input
        type={ `checkbox` }
        value={ checked }
        onClick={ () =>
          setChecked((checked) => !checked)
        }
      />
      { checked ? "checked" : "not checked" }
    </div>
  );
}

export default App;
