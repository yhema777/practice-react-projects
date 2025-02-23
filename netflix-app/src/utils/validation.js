const errorValidation = (email, password)=>{
     const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 
     if(!isEmailValid) return "Email is invalid";

     if(!isPasswordValid) return "Password is invalid";
 
     return null;
 }
 export default errorValidation;


// const errorValidation = (email, password)=>{
//     let errors = [];
//      const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
//      const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 
//      if(!isEmailValid) {
//         errors = [...errors, "Email is invalid"]
//      }
//      if(!isPasswordValid){
//        errors = [...errors, "Password is invalid"]
//        retur 

//      }
 
//      return null;
//  }
//  export default errorValidation;
 

 
 
 

 
 