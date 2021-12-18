import React, { createContext } from "react";

import './styles/index.css'

export const TreesContext = createContext();

export const trees = [
  { id: 1, type: "Maple" },
  { id: 2, type: "Oak" },
  { id: 3, type: "Family" },
  { id: 4, type: "Component" },
]



function App() {

  return (
    <div>
      <h1>Trees I've Head of</h1>
    </div>
  );
}

export default App;
