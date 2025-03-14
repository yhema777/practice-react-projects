import React from 'react'

const Apply = () => {
    const person = {
        firstName: "Hello",
        lastName: "Hi",
        fullName: function(city, country){
           return this.firstName + " " + this.lastName + " " + city + " " + country;
        }
      }
    
      const person2 = {
        firstName: "Abc",
        lastName: "Xyz"
      }
      const newFullName = person.fullName.apply(person2, ["Chennai", "Tamil Nadu"]);

  return (
    <div>
      {newFullName}
    </div>
  )
}

export default Apply
