import { useEffect, useState } from "react";
import "../css/Game.css";
function Game() {
  const [computer, setComputer] = useState("");
  const [userselection, setUserSelection] = useState("");
  const [score, setScore] = useState("");
  const [resultText, setResultText] = useState("");
  const [userscore, setUserscore] = useState(0);
  const [computerscore, setComputerscore] = useState(0);
 // const [gamestarted,setGamestareted] = useState(false)

  useEffect(() => {
    if (userselection && computer) {
      let result = "";
      if (userselection === computer) {
        result = "Tie match";
      } else if (
        (userselection === "Rock" && computer === "Scissors") ||
        (userselection === "Paper" && computer === "Rock") ||
        (userselection === "Scissors" && computer === "Paper")
      ) {
        result = "User wins";
        setUserscore((prevScore) => prevScore + 1);
      } else {
       result = "Computer wins";
        setComputerscore((prevScore) => prevScore + 1);
      }
      setScore(result);
      setResultText(
        `Computer selected ${computer}\nUser selected ${userselection}\n${result}`
      );
    }
  }, [computer, userselection]);

  // function Buttonsenabled(){
  //   setGamestareted(true)
  // }

  function Rockselect() {
    setUserSelection("Rock");
    Computerselection();
  }
  function Paperselect() {
    setUserSelection("Paper");
    Computerselection();
  }
  function Scissorsselect() {
    setUserSelection("Scissors");
    Computerselection();
    
  }

  function Computerselection() {
    const randomNum = Math.floor(Math.random() * 10);

    if (randomNum >= 0 && randomNum <= 3) {
      setComputer("Rock");
    } else if (randomNum > 3 && randomNum <= 6) {
      setComputer("Paper");
    } else if (randomNum > 6 && randomNum <= 10) {
      setComputer("Scissors");
    } else {
      console.log("Computer selection out of expected range");
    }
  }

  function onReset(){
    setComputerscore(0);
    setUserscore(0);

  }

  return (
    <div className="main">
      <p>WELCOME TO ROCK, PAPER, SCISSORS GAME</p>
      <div className="buttons">
        <button onClick={Rockselect} >Rock</button>
        <button onClick={Paperselect} >Paper</button>
        <button onClick={Scissorsselect}>Scissors</button>
      
      </div>

      <button className="resetbutton" onClick={onReset}>Reset</button>

      {resultText && (
        <div>
          <p>{resultText.split("\n")[0]}</p>
          <p>{resultText.split("\n")[1]}</p>
          <p>{resultText.split("\n")[2]}</p>
          <p>{resultText.split("\n")[3]}</p>
          
        </div>
      )}

      <div>
        <p>User score: <strong>{userscore}</strong></p>
        <p>Computer score: <strong>{computerscore}</strong></p>
      </div>
    </div>
  );
}

export default Game;
