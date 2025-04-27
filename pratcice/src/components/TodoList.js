import React from 'react';

const TodoList = ({todos, onDelete, onEdit, buttonToShow}) => {
   
  return (
    <div>
      {todos.map((todo, index)=>(
        <div key={index}>
         <span>{todo}</span>
         <button className='border border-black mx-5 my-1 px-2 py-1' onClick={()=>onDelete(index)}>Delete</button>
         <button className='border border-black mx-0  my-1 px-2 py-1' onClick={()=>onEdit(index)}>Edit</button>
         </div>
      ))}
    </div>
  )
}

export default TodoList;
