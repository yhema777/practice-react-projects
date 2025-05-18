// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-blue-600">
      <h1 className="text-3xl font-bold mb-4">Simple Redux Counter</h1>
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-300 rounded">Increment</button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-300 rounded">Decrement</button>
      </div>
    </div>
  );
}

export default App;
