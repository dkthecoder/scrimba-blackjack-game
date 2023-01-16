import './App.css';

let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = 0;

//message output to frontend
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(firstCard, secondCard){
  let sum = firstCard + secondCard;
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;
  check(sum);
}

function check(num) {
  if (num === 21) {
    message = "win";
    hasBlackJack = true;
  }
  else if (num < 21) {
    message = "continue";
  }
  else {
    message = "out of the games";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard(){
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BlackJack</h1>
        <div>
          <p id="message-el">Want to play a round?</p>
          <p id="cards-el">Cards:</p>
          <p id="sum-el">Sum:</p>
        </div>
        <button onClick={startGame()}>play</button>
        <button onClick={newCard()}>New Card</button>
      </header>
    </div>
  );
}

export default App;
