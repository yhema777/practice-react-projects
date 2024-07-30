import { useState } from "react";
import Todolist from "./Todolist";
import '../css/Todo.css'


function Todo() {
  const [note, setNote]=useState("");
  const [todos,setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  

  function Addbutton(){
    if (note.trim()) {
      const newTodos = editIndex !== null 
        ? todos.map((todo, index) => (index === editIndex ? note : todo))
        : [...todos, note];
      setTodos(newTodos);
      setNote("");
      setEditIndex(null);
    }
    
  }

  function Deletebutton(indexValue){
    const newTodos=todos.filter((todo,index)=> index !== indexValue);
    setTodos(newTodos);
  }

  function Editbutton(indexValue){
    setNote(todos[indexValue]);
    setEditIndex(indexValue);
    

  }

  return(
    <div>
      <h1>TODO LIST</h1>

        <input value={note} type="text" onChange={e=>setNote(e.target.value)} placeholder="add item..."></input>
        <button onClick={Addbutton}> {editIndex !== null ? "Update" : "ADD"}</button>
        <Todolist todos={todos} deletefunction={Deletebutton} editfunction={Editbutton}/>
        
    </div>
  )
  
}

export default Todo;
