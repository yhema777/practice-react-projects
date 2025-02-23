# Netflix GPT

# Configuring Firebase app

- Login to firebase.google.com
- Click on Get started
- Click on Create a Project
- Give the project name
- Click on Continue
- It will create a project
- Once our project is ready, select for web (</>) option
- Give ur app a nickname and check the firebase hoisting so that we can host our website 
- Copy the code given under Add Firebase SDK as we are using npm by creating a firebase.js folder under utils
- Go to project overview --> Click on Authentication --> Get started --> Select Email/Password if 
you want to use that authentication --> Enable the first option as we need email authentication--> Click on Save
- Click on users tab - It will be empty as no one has signed up yet for this project
- Install and configure firebase using the commands below 
  - "npm install -g firebase-tools"
  - firebase login
  - firebase init (Login with ur email)
  - firebase deploy (give yes if asked u want to deploy)
- Be careful and select "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys" option now 
- Then select "Use an existing project"
-  What do you want to use as your public directory? build (i.e., type build for this question)
- Configure as a single-page app (rewrite all urls to /index.html)? N
- Set up automatic builds and deploys with GitHub? (y/N) N
- After all this is done, write "npm run build" in terminal. It creates a build folder in our project. index.html file under build will have our React code.
- Now, write "firebase deploy" in ur terminal
- It will give u the Hosting URL to deply. U can use that URL to host your website like "https://netflixgpt-26139.web.app"


-----------------------------------------------------------------------------------------------

# Now, adding Sign Up and Sign In functionality to our project

- Go to firebase.google.com
- Search authentication and select Firebase authentication
- Select web and click on Password authentication. It will give u boiler plate code for Sign in and Sign Up
- Always select the code only with Web Modular API.
- Copy the code for like Signed up in your signed up logic 
  - as auth is common in sign up and sign in logic included that in firebase.js and exported it
  - as email and password which user types refer to email.current.value, password.current.value, we replaced it with them
  - And set errormessage with any error from firebase while sugning up
- Similarly add Signed in logic
- Now, sign up with email and password, you can see that login under Users tab.
- You can sign in using that logins as well.
 
Any time, if you get errors related to firebase like can't resolve firebase/auth or firebase/app,
try this:
- npm list firebase
If firebase is not listed or have an issue, reinstall it:
- npm install firebase@latest





