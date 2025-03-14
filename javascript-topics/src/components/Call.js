import React from 'react'

const Call = () => {

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
  const newFullName = person.fullName.call(person2);

  return (
    <div>
      {newFullName}
    </div>
  )
}

export default Call
