import './App.css';
import { useToggle } from './component/useToggle';


function App() {

const [state, setState] = useToggle();

  return (
    <div className="App">
     <button onClick={()=>setState()}>
      {state ? "Hide" : "Show"}
     </button>
     {state && <h1>Hide Text</h1>}
    </div>
  );
}

export default App;
