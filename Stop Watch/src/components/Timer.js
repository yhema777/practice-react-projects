import { useState } from "react";

function Timer(){
    const [timer,setTimer] =useState("00:00:00")

    return(
        <div>
            {timer}

        </div>
    )
}

export default Timer;