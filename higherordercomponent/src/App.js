import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="flex flex-col items-center text-blue-400">
      <Person1 />
      <Person2 />
    </div>
  );
}


function Person1(){
  const [money, setMoney] = useState(10);
  function handleClick(){
    setMoney(money*2);
  }
  return (
    <div>
      <p>Ram bets {money} rupees</p>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

function Person2(){
  const [money, setMoney] = useState(50);
  function handleClick(){
    setMoney(money*2);
  }
  return (
    <div>
      <p>Shyam bets {money} rupees</p>
      <button className="border-e-black" onClick={handleClick}>+</button>
    </div>
  )
}

export default App;
