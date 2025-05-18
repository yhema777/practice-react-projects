# Steps to add Redux in the project with simple count example

- First install reudx using "npm install @reduxjs/toolkit react-redux"

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






