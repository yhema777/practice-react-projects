import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="flex flex-col items-center text-blue-400">
      <Person1 pname="Ram"/>
      <Person2 pname="Shyam"/>
    </div>
  );
}

function withMoneyLogic(Person, initialamount){
  return function NewComponent(props) {
    const [money, setMoney] = useState(initialamount);
    function handleClick() {
      setMoney(money * 2);
    }
    return <Person {...props} money={money} onClick={handleClick}/>
  };
}

function Person({pname, money, onClick}){
  return (
    <div>
      <p>{pname} bets {money} rupees</p>
      <button onClick={onClick}>+</button>
    </div>
    
  )
}


const Person1 = withMoneyLogic(Person, 10);
const Person2 = withMoneyLogic(Person, 50);


export default App;
