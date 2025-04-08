# Installing and setting Tailwind CSS:
 1. - npm i - D tailwindcss (This has to beused only if tailwind has not already installed in your system. With create react app, it will be there, just use the below command)
 - npx tailwindcss init

2. # Configure your template paths 
Tailwind.config.js file will be created. 
In this, modify this as:
 content: ["./src/**/*.js"],
  
3. # Add the Tailwind directives to your CSS# 
In App.css, remove all content and give it as:
@tailwind base;
@tailwind components;
@tailwind utilities;

4. # Start the build process
Run the app with npm start


# Installing router
- npm i -D react-router-dom 

# Installing Redux
- npm i -D @reduxjs/toolkit
- npm i react-redux




# Call back function example:
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