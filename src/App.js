import React, {
  useState,
  useEffect
} from "react";

function App() {
  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch(`https://api.github.com/users`)
      .then(response => response.json())
      .then(setData)
  }, []);

  if (data) {
    return (
      <div>
        <ul className="list-disc">
          { data.map((user) => (
            <li key={ user.id }>{ user.login }</li>
          )) }
        </ul>
        <button
          className="black"
          onClick={ () => data ? setData([]) : setData }
        >
          Remove Data
        </button>
      </div>

    )
  }

  return (
    <div>
      <h1 className="center">No Users</h1>
    </div>
  );
}

export default App;
