Installing and setting Tailwind CSS:
npm i - D tailwindcss
npx tailwindcss init
 
tailwind.config.js file will be created. 
In this, modify this as:
 content: ["./src/**/*.js"],
  
In App.css, remove all content and give it as:
@tailwind base;
@tailwind components;
@tailwind utilities;




Call back function example:
A callback function is a function that is passed as an argument to another function and is executed (or called back) at a later point in time, after a certain task or operation is completed. Essentially, it's a way to ensure that one function runs after another has finished its work.
Y is the callback function here.

function x(y) {
  console.log("x");
  y();  // y is called here, and y is the callback function
}

x(function y() {
  console.log("y");
});
O/p: x
     y