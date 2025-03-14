import React from 'react'

const Bind = () => {
    const person = {
        firstName: "Hello",
        lastName: "Hi",
        fullName: function(){
           return this.firstName + " " + this.lastName;
        }
      }
    
      const person2 = {
        firstName: "Abc",
        lastName: "Xyz"
      }
      const newFullName = person.fullName.bind(person2);
      newFullName();
      console.log(person2);
  return (
    
    <div>
      
    </div>
  )
}

export default Bind
