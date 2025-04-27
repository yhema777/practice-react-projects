
import './App.css';
import useGetQuery from './components/useGetQuery';

function App() {

  const {data} = useGetQuery("https://dummyjson.com/users");
 console.log(data);
  

  return (
    <div className="App">
     {data?.users?.map((user)=>
        <div>{user.firstName}</div>
     )}
    </div>
  );
}

export default App;
