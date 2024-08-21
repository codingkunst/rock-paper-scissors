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
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="나" item={userSelect} />
        {/* <Box title="AI" /> */}
      </div>

      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
