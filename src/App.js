import React, { useReducer } from "react";
import './styles/index.css'

function App() {
  const [ checked, toggle ] = useReducer(
    (checked) => !checked,
    false
  );
  return (
    <div>
      <input
        className="app-checkbox"
        type="checkbox"
        value={ checked }
        onClick={ toggle }
      />
      { checked ? "checked" : "not checked" }
    </div>
  );
}

export default App;
