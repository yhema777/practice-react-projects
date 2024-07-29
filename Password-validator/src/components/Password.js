import { useState } from "react";
import validator from 'validator';
import '../css/Password.css'

function Password(){
    const [message,setMessage] = useState("");
    
    function IsStrongPassword(value){
        if(validator.isStrongPassword(value,{
            minlength:8, minLowercase: 1,
            minUppercase: 1, minSymbols: 1, minNumbers: 1
        })){
            setMessage('It is strong password')
        }else{
            setMessage("It is not strong password")
        }     

    }
    return (
        <div>
            <h2>Checking password strength in ReactJs</h2>
            <span>Enter Password:</span>
            <input type="text"  onChange = {e=>IsStrongPassword(e.target.value)} />
            <p className="msg">{message}</p>

        </div>
        
    )
}

export default Password;