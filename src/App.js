import React, { useState } from "react";
import './styles/index.css'

function App() {
  const [ sound, setSound ] = useState("");
  const [ color, setColor ] = useState("");

  const submit = (e) => {
    e.preventDefault(0);
    alert(`${sound} sounds like ${color}`);
    setSound('');
    setColor('');
  };


  return (
    <div>
      <form onSubmit={ submit }>
        <input
          onChange={ (e) => setSound(e.target.value) }
          value={ sound } type="text"
          placeholder="Sound..." />
        <input
          onChange={ (e) => setColor(e.target.value) }
          value={ color }
          type="color" />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default App;
