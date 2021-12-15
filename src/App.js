
import Navigation from '../src/navigation/navigation';

function App() {
  return (
    <div>
      <h1 className='text-center text-5xl my-4'>Bookkeeper</h1>
      <nav
        className="flex sm:justify-center space-x-4"
      >
        <Navigation />
      </nav>
    </div>
  );
}

export default App;
