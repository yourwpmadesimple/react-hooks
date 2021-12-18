import React, { useState } from "react";

import { useInput } from "./useInput";

import './styles/index.css'

function App() {
  const [ titleProps, resetTitle ] = useInput("")
  const [ colorProps, resetColor ] = useInput("#000000")
  const submit = (e) => {
    e.preventDefault(0);
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle('');
    resetColor('');
  };


  return (
    <div>
      <form onSubmit={ submit }>
        <input
          { ...titleProps }
          placeholder="Sound..." />
        <input
          { ...colorProps }
          type="color" />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default App;
