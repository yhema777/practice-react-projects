# Higher Order Component: 
- A Higher-Order Component (HOC) in React is a function that takes a component and returns a new component with additional props, logic, or behavior.
 - A Higher-Order Component is a pattern used to reuse component logic. It’s not a component itself, but a function that enhances components.


# Ex:
import React from 'react';

// Higher-Order Component
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Props passed:", props);
    return <WrappedComponent {...props} />;
  };
};

// Base Component
const Hello = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Enhanced Component using HOC
const HelloWithLogger = withLogger(Hello);

// Root Component rendering the final component
const App = () => {
  return (
    <div>
      <HelloWithLogger name="John" />
    </div>
  );
};

export default App;
