# Learnings:
 - Custom Hook should always start with use
 - You have to return something in the hook function that you will be fetching/extracting from this hook in other component.
 - When passing parameters to the hook, remember it is a function and pass the params accordingly.

 # Using async/await to fetch data instead of .then and .catch
 - Use a async function inside useEffect
 - Then code should be written in try block using await
 - Error part is handled in catch block
 - We shouldn't use async function for useEffect() directly
 
# Reason for not using async for useEffect() directly:
 React's useEffect expects a cleanup function or nothing to be returned.
 If you make useEffect async, it automatically returns a Promise.
 React does not know what to do with a Promise as a return from useEffect.
 So it breaks React’s expectations internally.


# 🚀 Quick Final Summary:
 - useEffect must return nothing or a cleanup function.
 - Async function returns Promise, which React cannot handle here.
 - Fix it by creating async function inside, then calling it.


 

