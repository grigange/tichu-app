



export function FindCombinations(deck) {
  let length = deck.length;
  let e = 0;
  while (e < length - 1) {
    if (deck[e].value === deck[e + 1].value) {
      //console.log("double", deck[e], deck[e + 1]);
      e = e + 1;
      if (e === length - 1) break;
    }

    if (deck[e].value === deck[e + 1].value) {
      //console.log("triple", deck[e], deck[e + 1]);
      e = e + 1;
      if (e === length - 1) break;
    }

    if (deck[e].value === deck[e + 1].value) {
      //console.log("bomb", deck[e], deck[e + 1]);
      e = e + 1;
      if (e === length - 1) break;
    }
    e = e + 1;
  }
  FindStraights(deck);
  console.table([
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]);

  // console.log("black");
  // FindStraights(deck, "black");

  // console.log("blue");
  // FindStraights(deck, "blue");

  // console.log("green");
  // FindStraights(deck, "green");

  // console.log("red");
  // FindStraights(deck, "red");
}



function FindStraights(deck, suit = "") {
  if (suit !== "") {
    deck = deck.filter((card) => card.suit === suit);
  }else{
    // var ndeck = deck.reduce(function (p, c) {
    //   if (!p.some(function (el) { return el.value === c.value; })) p.push(c);
    //   return p;
    // }, []);
    // deck = ndeck;
  }
  // console.log(ndeck)
  var phoenix = deck.some((e) => e.value == "phoenix");
  let length = deck.length;
  let e = 0;
  let hasPhoenix = true;
  let phoenixIndex = e;
  let combo = 1;
  while (e < length - 1) {
    if (deck[e].value === deck[e + 1].value) {
      e = e + 1;
      continue;
    }
    if (deck[e].value === deck[e + 1].value - 1) {
      combo = combo + 1;
      if (combo >= 5) {
        console.log(`STRAIGHT ${suit} ${combo}`);
      }
    } else {
      // alert(phoenix,hasPhoenix);
      if (phoenix && hasPhoenix && (deck[e].value === deck[e + 1].value - 2)) {
        combo = combo + 2;
        hasPhoenix = false;
        phoenixIndex = e;
        console.log(phoenixIndex);
        if (combo >= 5) {
          console.log(`STRAIGHT ${suit} ${combo} with phoenix`);
        }
      } else {
        combo = 1;

        if (phoenix && !hasPhoenix) {
          e = phoenixIndex;
          hasPhoenix = true;
        }
      }
    }
    e = e + 1;
  }
}
