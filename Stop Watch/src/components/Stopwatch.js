import { useState } from "react";
import "../css/card.css";
import Timer from "./Timer";
import Controlbuttons from './Controlbuttons'

function Stopwatch({ data }) {
  const [initial, setInitial] = useState("00:00:00");

  return (
    <div>
      <Timer />
      <Controlbuttons />
    </div>
  );
}

export default Stopwatch;
