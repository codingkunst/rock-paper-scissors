import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

const choice = {
  rock: {
    name: "rock",
    image: "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png",
  },
  paper: {
    name: "paper",
    image: "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png",
  },
  scissors: {
    name: "scissors",
    image: "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null); // 유저 선택
  const [computerSelect, setComputerSelect] = useState(null); // 컴퓨터 선택
  const [result, setResult] = useState(""); // 게임 결과

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randonItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randonItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "👿 무승부";
    } else if (user.name === 'rock') {
      return computer.name === 'scissors' ? '🤪 WIN' : '😭 LOSE';
    } else if (user.name === 'paper') {
      return computer.name === 'rock' ? '🤪 WIN' : '😭 LOSE';
    } else if (user.name === 'scissors') {
      return computer.name === 'paper' ? '🤪 WIN' : '😭 LOSE';
    }
  };

  return (
    <div>
      <div className="flex justify-center m-5">
        <Box title="PLAYER" item={userSelect} result={result} />
        <Box title="AI" item={computerSelect} result={result} />
      </div>

      <div className="flex justify-center m-5">
        <button className="rounded border border-solid bg-violet-400 p-2.5 m-2.5 w-16 h-11" onClick={() => play("scissors")}>가위</button>
        <button className="rounded border border-solid bg-violet-400 p-2.5 m-2.5 w-16 h-11" onClick={() => play("rock")}>바위</button>
        <button className="rounded border border-solid bg-violet-400 p-2.5 m-2.5 w-16 h-11" onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
