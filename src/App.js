import './App.css';

let firstCard = 0;
let secondCard = 0;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame(){
  
}

function check(num) {
  if (num === 21) {
    message = "win 🥳";
    hasBlackJack = true;
  }
  else if (num < 21) {
    message = "continue 🙂";
  }
  else {
    message = "out of the game 😭";
    isAlive = false;
  }
}

console.log(message);

function reset() {
  firstCard = 0;
  secondCard = 0;
  hasBlackJack = false;
  isAlive = true;
  message = "";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BlackJack</h1>
        <div>
          <p id="message-el">Want to play a round?</p>
          <p>Cards:</p>
          <p>Sum:</p>
        </div>
        <button onClick={startGame()}>play</button>
      </header>
    </div>
  );
}

export default App;
