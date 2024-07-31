function Todolist({ todos, deletefunction, editfunction }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
         
          <button onClick={()=>deletefunction(index)}>Delete</button>
          <button onClick={()=>editfunction(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default Todolist;
