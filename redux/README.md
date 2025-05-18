# Steps to add Redux in the project with simple count example

# Step 1:
- First install redux using "npm install @reduxjs/toolkit react-redux"

# Step 2: Create Slice

Ex:
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {value: 0},
    reducers: {
        increment: state => {state.value += 1},
        decrement: state => {state.value -= 1},
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;


# Step 3: Configure Store

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

export default store;


# Step 4: Wrap the App with Provider (index.js)
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


# Step 5: Build the App component
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



###### With Tailwindcss:
- @tailwind base; @tailwind components; @tailwind utilities;
These should be written in index.js. No use in App.js







