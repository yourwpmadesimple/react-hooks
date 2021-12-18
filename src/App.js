import React, { useRef } from "react";
import './styles/index.css'

function App() {
  const sound = useRef();
  const color = useRef();

  const submit = (e) => {
    e.preventDefault(0);
    let soundVal = sound.current.value;
    let colorVal = color.current.value;
    alert(`${soundVal} sounds like ${colorVal}`);
    soundVal = "";
    colorVal = "";
  };


  return (
    <div>
      <form onSubmit={ submit }>
        <input ref={ sound } type="text" placeholder="Sound..." />
        <input ref={ color } type="color" />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default App;
