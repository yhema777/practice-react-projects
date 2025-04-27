import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [addButton, setAddButton] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [searchvalue, setSearchValue] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);


  function handleChange(e){
    setTodo(e.target.value);
    console.log(todoList);
  }
  
  function handleDelete(indextoDelete) {
  setTodoList((prev) => prev.filter((todo, index) => index !== indextoDelete));
  }

  function handleEdit(indextoEdit){
    var editable = todoList[indextoEdit];
    setTodo(editable);
    setAddButton(false);
    setEditIndex(indextoEdit);
  
  }
  

  function handleAddButton(){
    if(addButton){
      if(todo.trim() !== ""){
        setTodoList((prev) =>[...prev, todo]);
        setTodo("");
      } 
    }
    else{
      if (todo.trim() !== "" && editIndex !== null) {
        setTodoList((prev) =>
          prev.map((item, index) =>
            index === editIndex ? todo : item
          )
        );
        setTodo(""); 
        setAddButton(true); 
        setEditIndex(null);
      }
  
    }
      
  }

  function handleSearchField(e){
    setSearchValue(e.target.value);
  }

  function handleSearch(){
    var searchresults = todoList.filter((item)=> item.includes(searchvalue));
    if(searchresults){
      setTodoList(searchresults);
    }
    setSearchClicked(true);
  }

  return (
    <div className='flex flex-col items-center m-5'>
      <p>To-do list</p>
      <div>
      <input type="text" className="m-5 border border-black" value={searchvalue} onChange={handleSearchField}/>
      <button className='border border-black m-2 p-1' onClick={handleSearch}>Search</button>
      </div>
      
      <div>
        <input className="m-5 border border-black" type="text" value={todo} onChange={handleChange}/>
        <button className='border border-black m-2 p-1' onClick={handleAddButton}>
         {addButton ? "Add" : "Update"}
          </button>
      </div>
      <TodoList todos={todoList} onDelete={handleDelete} onEdit={handleEdit} buttonToShow={addButton}/>  
        
      
    </div>
  );
}

export default App;
