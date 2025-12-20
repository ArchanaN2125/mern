import {useState} from "react";
function RockPaperScissors()
{
    const options =["Rock","Paper","Scissors"];

    const [UserChoice,setUserChoice]= useState("");
    const [ComputerChoice , setComputerChoice]= useState("");
    const [Result,setResult]= useState("");
    
    const PlayGame = (choice) => {
        const computer = options[Math.floor(Math.random()*options.length)];
        setUserChoice(choice);
        setComputerChoice(computer);
        if(choice==computer){
            setResult("Draw😑");
        }
        else if((choice==="Rock" && computer==="Scissors")||(choice==="Paper" && computer==="Rock")||(choice==="Scissors" && computer=="Paper")){
            setResult("You Won!😍");
        }
        else {
            setResult("You Lose!😏");
        }
    }
     return (
    <div>
      <h2>Rock Paper Scissors</h2>

      <button onClick={() => PlayGame("Rock")}>Rock✊</button>
      <button onClick={() => PlayGame("Paper")}>Paper🖐️</button>
      <button onClick={() => PlayGame("Scissors")}>Scissors✌️</button>

      <p>User Choice: {UserChoice}</p>
      <p>Computer Choice: {ComputerChoice}</p>
      <h3>{Result}</h3>
    </div>
  );
}

export default RockPaperScissors;