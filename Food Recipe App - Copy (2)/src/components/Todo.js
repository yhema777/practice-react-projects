import { useState, useSyncExternalStore } from "react";
import "../css/Todo.css";
import Card from "./Card";
import mockdata from "../utilitis/mockdata";

function Todo() {
  const [searchval,setSearchval] = useState("");
  const [initialval, setInitialval] = useState(mockdata);
  const [filteredval, setFilteredval] = useState(mockdata);

  function Onsearch(){
    const Filteredoptions = initialval.filter(item=>item.title.toLowerCase().includes(searchval.toLowerCase()));
    setFilteredval(Filteredoptions);

  }


  return (
    <div>
      <input type="text" onChange={(e)=>setSearchval(e.target.value)}></input>
      <button onClick={Onsearch}>
      Search
      </button>
      {filteredval.map((data) => (
        <div >
          <Card data={data} />
       
        </div>
      ))}
    </div>
  );
}

export default Todo;
