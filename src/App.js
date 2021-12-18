import React, { useReducer } from "react";
import './styles/index.css'

const initialState = {
  message: "hi"
}

const reducer = ((state, action) => {
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! I just said ${state.message}`
      };
    case "whisper":
      return {
        message: `escuse me, I just said ${state.message}`
      };
    default:
      return {
        message: "Nothing to see here"
      }
  }
})

function App() {
  const [ state, dispatch ] = useReducer(
    reducer,
    initialState
  );
  return (
    <div>
      <p>Message: { state.message }</p>
      <button
        className="black"
        onClick={ () => dispatch({ type: "yell" }) }>YELL
      </button>
      <button
        className="black"
        onClick={ () => dispatch({ type: "whisper" }) }>whisper
      </button>
    </div>
  );
}

export default App;
