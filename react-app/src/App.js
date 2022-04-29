import "./App.css";
import "./components/Cards/sprite.css";
import Card from "./components/Cards/Card.js";
import {FindCombinations} from './Logic';

class CardTemplate {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}
function cardsort(A) {
  A.sort((a, b) => {
    if (typeof b.value == "string") return -1;
    return a.value - b.value;
  });
  return A;
}
function shuffle(A) {
  for (var i = A.length - 1; i > 0; i--) {
    var j = parseInt(Math.random() * A.length);
    [A[i], A[j]] = [A[j], A[i]];
  }
  return A;
}
var deck = [];
var suits = ["black", "blue", "green", "red"];
var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var magic = ["dogs", "dragon", 1, "phoenix"];

suits.forEach((suit, i) => {
  values.forEach((value) => {
    deck.push(new CardTemplate(value, suit));
  });
  deck.push(new CardTemplate(magic[i], "magic"));
});
shuffle(deck);
var testdeck = deck.slice(0, 14);
if (!testdeck.some(e => e.value =="phoenix")){
  testdeck.pop();
  testdeck.push(new CardTemplate("phoenix", "magic"));
}
var testdecks = cardsort(testdeck.slice(0, 14));






var deck1 = cardsort(deck.slice(0, 14));
var deck2 = cardsort(deck.slice(14, 28));
var deck3 = cardsort(deck.slice(28, 42));
var deck4 = cardsort(deck.slice(42, 56));
// var shuffledDeck = shuffle(deck)
// console.log(shuffledDeck)
// console.log("Player One", deck1);
// FindCombinations(deck1);
// console.log("Player Two", deck2);
// FindCombinations(deck2);
// console.log("Player Three", deck3);
// FindCombinations(deck3);
// console.log("Player Four", deck4);
// FindCombinations(deck4);
FindCombinations(testdecks);
function App() {
  return (
    <div className="App">
      <div>PLAYER ONE</div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {testdecks.map((card) => {
          return (
            <Card
              className={card}
              styles={{ width: "150px", height: "200px", fontFamily: "Bonzai" }}
              value={card.value}
              suit={card.suit}
              key={card.value + card.suit}
            ></Card>
          );
        })}
      </div>
      {/* <div>PLAYER TWO</div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {deck2.map((card) => {
          return (
            <Card
              className={card}
              styles={{ width: "150px", height: "200px", fontFamily: "Bonzai" }}
              value={card.value}
              suit={card.suit}
              key={card.value + card.suit}
            ></Card>
          );
        })}
      </div>
      <div>PLAYER THREE</div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {deck3.map((card) => {
          return (
            <Card
              className={card}
              styles={{ width: "150px", height: "200px", fontFamily: "Bonzai" }}
              value={card.value}
              suit={card.suit}
              key={card.value + card.suit}
            ></Card>
          );
        })}
      </div>
      <div>PLAYER FOUR</div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {deck4.map((card) => {
          return (
            <Card
              className={card}
              styles={{ width: "150px", height: "200px", fontFamily: "Bonzai" }}
              value={card.value}
              suit={card.suit}
              key={card.value + card.suit}
            ></Card>
          );
        })}
      </div>*/}
    </div> 
  );
}

export default App;
