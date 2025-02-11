import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const Memo2 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  //const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);


  const increment = () => {
    console.log("Adding the value by 1")
    setCount((c) => c + 1);
  };
  
  const addTodo = () => {
    console.log("Adding Todo...")
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div className="m-5">
      <div>
        <h2 className="font-bold">My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button className="border border-black p-1 my-2 bg-gray-400 rounded-md" onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div className="m-2">
        Count: {count}
        <button className="border border-black px-1 bg-gray-400 rounded-md m-2" onClick={increment}>+</button>
        <h2 className="font-bold">Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default Memo2;