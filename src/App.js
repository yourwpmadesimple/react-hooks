import React from 'react';
import { useTrees } from './'


function App() {
  const { trees } = useTrees();
  return (
    <div>
      <h1 className='text-4xl my-10'>useContext</h1>
      <ul>
        { trees.map(tree => (
          <li className='list-disc' key={ tree.id }>{ tree.type }</li>
        )) }
      </ul>
    </div>
  );
}

export default App;
