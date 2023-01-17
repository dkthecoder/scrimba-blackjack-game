import { render } from '@testing-library/react';
import './App.css';

let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
//player object
let player = {
  name: "barry",
  chips:  200,
  sayHello: function(){
    console.log("namaste");
  }
}

player.sayHello();

//card array
let cards = [];

//message output to frontend
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame(sum);
}

function renderGame(num) {
  for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

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
  if(isAlive === true && hasBlackJack === false){
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard();
    sum += card;
    card.push(card);
    renderGame();
  }

}

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13) + 1;
  if (randomNumber >  10){
    return 10;
  } else if (randomNumber === 1){
    return 11;
  } else {
    return randomNumber;
  }
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
        <p id="player-el"></p>
      </header>
    </div>
  );
}

export default App;
