import { useState } from "react";
import "../css/card.css";
import Timer from "./Timer";
import Controlbuttons from './Controlbuttons'

function Stopwatch({ data }) {
  const [initial, setInitial] = useState("00:00:00");

  function startTimer(prev){
    setInitial();

  }

  return (
    <div>
      <Timer />
      <button onClick={startTimer}>
                Start
            </button>
    </div>
  );
}

export default Stopwatch;
