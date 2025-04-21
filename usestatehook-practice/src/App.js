import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function handleAdd(){
    setCount((prev)=>prev+1);
  }
  return (
    <div className="App">
      <button onClick={handleAdd}>+</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
