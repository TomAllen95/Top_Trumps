let cardDeck = [];
let initialCardDeck = []
class pokemon 
{
    constructor (name, height, mass, offence, defence){
        this.name = name;
        this.height = height;
        this.mass = mass
        this.offence = offence
        this.defence = defence
        this.wonHands = 0
        cardDeck.push(this);
        initialCardDeck.push(this);
    }
}
const charizard = new pokemon("Charizard", 1.7, 90.5, 50, 30);
const blastoise = new pokemon("Blastoise", 1.6, 85.5, 40, 40);
const mewtwo = new pokemon ("Mewtwo", 2, 122, 80, 40);
const dragonite = new pokemon ("Dragonite", 2.2, 210, 70, 40);
const gengar = new pokemon ("Gengar", 1.5, 60, 30, 30);
const gyarados = new pokemon ("Gyarados",6.5, 235, 60, 30);
const mew = new pokemon ("Mew", 0.4, 4, 50, 40);
const arcanine = new pokemon("Arcanine", 1.9, 155, 60, 40);
const lapras = new pokemon ("Lapras", 2.5, 220, 40, 40);
const jolteon = new pokemon ("Jolteon", 0.8, 24.5, 50, 30);
const alakazam = new pokemon ("Alakazam", 1.5, 48, 70, 20);
const pickachu = new pokemon ("Pikachu", 0.4, 6, 30, 20);
const articuno = new pokemon ("Articuno", 1.7, 55.4, 50, 40);
const venusaur = new pokemon ("Venusaur", 2, 100, 50, 40);
const zapdos = new pokemon ("Zapdos", 1.6, 52.6, 60, 50);
const magmar = new pokemon ("Magmar", 1.3, 44.5, 50, 30);
const snorlax = new pokemon ("Snorlax", 2.1, 460, 60, 30);
const ninetales = new pokemon ("Ninetales", 1.1, 19.9, 40, 30);
const muk = new pokemon ("Muk", 1.2, 30, 50, 30);
const scyther = new pokemon ("Scyther", 1.5, 56, 60, 40);
const nidoking = new pokemon ("Nidoking", 1.4, 62, 50, 30);
const vaporeon = new pokemon ("Vaporeon", 1, 29, 50, 30);
const matchamp = new pokemon ("Matchamp", 1.6, 130, 70, 40);
const flareon = new pokemon ("Flareon", 0.9, 25, 70, 30 );
const rhydon = new pokemon ("Rhydon", 1.9, 120, 70, 50);
const dugtrio = new pokemon ("Dugtrio", 0.7, 33.3, 40, 20);
const onix = new pokemon ("Onix", 8.8, 210, 20, 70);
const marowak = new pokemon ("Marowak", 1, 45, 40, 50);
const moltres = new pokemon ("Moltres", 2, 60, 60, 50);
const golem = new pokemon ("Golem", 1.4, 300, 60, 60);


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex; 
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  cardDeck = shuffle(cardDeck);


  let player1Deck = cardDeck
  let player2Deck = player1Deck.splice(0, Math.ceil(player1Deck.length/2));

let player1score = player1Deck.length;
let player2score = player2Deck.length;
let unwonCards = []

playerOne = true
function compOffence() {
  if (player1Deck[0].offence > player2Deck[0].offence){
    player1Deck[0].wonHands = (player1Deck[0].wonHands+ 1);
    alert (`Player 1 won this hand with his ${player1Deck[0].name}, it had a offence score of ${player1Deck[0].offence} compared with player 2's ${player2Deck[0].name}, with an offence score of ${player2Deck[0].offence}`)
    let cardToEnd = player1Deck[0];
    player1Deck.shift()
    player1Deck.push(cardToEnd);
    let cardswap = player2Deck[0];
    player2Deck.shift(); // remove the first card
    player1Deck.push(cardswap);// add the card to the end of opponents deck
    player1Deck = player1Deck.concat(unwonCards);
    unwonCards = []
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    playerOne = true
    player1Move();
    // console.log(compOffence)
    return
  }
  else if (player2Deck[0].offence > player1Deck[0].offence){
    alert (`Player 2 won this hand with his ${player2Deck[0].name}, it had a offence score of ${player2Deck[0].offence} compared with player 1's ${player1Deck[0].name}, with an offence score of ${player1Deck[0].offence}`)
    player2Deck[0].wonHands = (player2Deck[0].wonHands+ 1);
    let cardToEnd = player2Deck[0];
    player2Deck.shift()
    player2Deck.push(cardToEnd);
    let cardswap = player1Deck[0];
    player1Deck.shift(); // remove the first card
    player2Deck.push(cardswap);
    player2Deck = player2Deck.concat(unwonCards);
    unwonCards = [];
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    playerOne = false
    player2Move();
    return
  }
  else {
    alert (`This hand was a draw, with player 1's ${player1Deck[0].name}, and player 2s ${player2Deck[0].name} both had a offence score of ${player1Deck[0].offence}`);
    let player1card  = player1Deck[0];
    let player2card = player2Deck[0];
    player1Deck.shift();
    player2Deck.shift();
    unwonCards.push(player1card);
    unwonCards.push(player2card);
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    
    const findOutWhosGo = () => {
      if (playerOne == true) {
          player1Move();
      }
      else {
          player2Move();
      }
    }
    findOutWhosGo();
  return
}
}
function compDefence() {
  if (player1Deck[0].defence > player2Deck[0].defence){
    alert (`Player 1 won this hand with his ${player1Deck[0].name}, it had a defence score of ${player1Deck[0].defence} compared with player 2's ${player2Deck[0].name}, with an defence score of ${player2Deck[0].defence}`)
    player1Deck[0].wonHands = (player1Deck[0].wonHands+ 1);
    let cardToEnd = player1Deck[0];
    player1Deck.shift()
    player1Deck.push(cardToEnd);
    let cardswap = player2Deck[0];
    player2Deck.shift(); // remove the first card
    player1Deck.push(cardswap);// add the card to the end of opponents deck
    player1Deck = player1Deck.concat(unwonCards);
    unwonCards = []
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    playerOne = true
    player1Move();
    return
    }
  else if (player2Deck[0].defence > player1Deck[0].defence){
    alert (`Player 2 won this hand with his ${player2Deck[0].name}, it had a defence score of ${player2Deck[0].defence} compared with player 1's ${player1Deck[0].name}, with an defence score of ${player1Deck[0].defence}`)
    player2Deck[0].wonHands = (player2Deck[0].wonHands+ 1);
    let cardToEnd = player2Deck[0];
    player2Deck.shift()
    player2Deck.push(cardToEnd);
    let cardswap = player1Deck[0];
    player1Deck.shift(); // remove the first card
    player2Deck.push(cardswap);
    player2Deck = player2Deck.concat(unwonCards);
    unwonCards = [];
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    playerOne = false
    player2Move();
    return
  }
  else {
    alert (`This hand was a draw, with player 1's ${player1Deck[0].name}, and player 2s ${player2Deck[0].name} both had a defence score of ${player1Deck[0].defence}`);
    let player1card  = player1Deck[0];
    let player2card = player2Deck[0];
    player1Deck.shift();
    player2Deck.shift();
    unwonCards.push(player1card);
    unwonCards.push(player2card);
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    const findOutWhosGo = () => {
      if (playerOne == true) {
          player1Move();
      }
      else {
          player2Move();
      }
    }
    findOutWhosGo();
    return
  }
}
function compMass() {
  if (player1Deck[0].mass > player2Deck[0].mass){
    alert (`Player 1 won this hand with his ${player1Deck[0].name}, it had a mass of ${player1Deck[0].mass}kg, compared with player 2's ${player2Deck[0].name}, with an mass of ${player2Deck[0].mass}kg`)
    player1Deck[0].wonHands = (player1Deck[0].wonHands+ 1);
    let cardToEnd = player1Deck[0];
    player1Deck.shift()
    player1Deck.push(cardToEnd);
    let cardswap = player2Deck[0];
    player2Deck.shift(); // remove the first card
    player1Deck.push(cardswap);// add the card to the end of opponents deck
    player1Deck = player1Deck.concat(unwonCards);
    unwonCards = [];
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    playerOne = true;
    player1Move();
    return
  }
  else if (player2Deck[0].mass > player1Deck[0].mass){
    alert (`Player 2 won this hand with his ${player2Deck[0].name}, with a mass of ${player2Deck[0].mass}kg compared with player 1's ${player1Deck[0].name}, with a mass of ${player1Deck[0].mass}kg`)
    player2Deck[0].wonHands = (player2Deck[0].wonHands+ 1);
    let cardToEnd = player2Deck[0];
    player2Deck.shift()
    player2Deck.push(cardToEnd);
    let cardswap = player1Deck[0];
    player1Deck.shift(); // remove the first card
    player2Deck.push(cardswap);
    player2Deck = player2Deck.concat(unwonCards);
    unwonCards = [];
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    playerOne = false
    player2Move();
    return
    }
  else {
    alert (`This hand was a draw, with player 1's ${player1Deck[0].name}, and player 2s ${player2Deck[0].name} both having a mass of ${player1Deck[0].mass}kg`);
    let player1card  = player1Deck[0];
    let player2card = player2Deck[0];
    player1Deck.shift();
    player2Deck.shift();
    unwonCards.push(player1card);
    unwonCards.push(player2card);
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    const findOutWhosGo = () => {
      if (playerOne == true) {
          player1Move();
      }
      else {
          player2Move();
      }
    }
    findOutWhosGo();
    return
    }
}

function compHeight() 
{
  if (player1Deck[0].height > player2Deck[0].height){
    alert (`Player 1 won this hand with his ${player1Deck[0].name}, it had a height of ${player1Deck[0].height}m compared with player 2's ${player2Deck[0].name}, with a height of ${player2Deck[0].height}m`)
    player1Deck[0].wonHands = (player1Deck[0].wonHands+ 1);
    let cardToEnd = player1Deck[0];
    player1Deck.shift()
    player1Deck.push(cardToEnd);
    let cardswap = player2Deck[0];
    player2Deck.shift(); // remove the first card
    player1Deck.push(cardswap);// add the card to the end of opponents deck
    player1Deck = player1Deck.concat(unwonCards);
    unwonCards = [];
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    playerOne = true
    player1Move();
    return;
    }
  else if (player2Deck[0].height > player1Deck[0].height){
    alert (`Player 2 won this hand with his ${player2Deck[0].name}, it had a height of ${player2Deck[0].height}m compared with player 1's ${player1Deck[0].name}, with a height of ${player1Deck[0].height}m`)
    player2Deck[0].wonHands = (player2Deck[0].wonHands+ 1);
    let cardToEnd = player2Deck[0];
    player2Deck.shift()
    player2Deck.push(cardToEnd);
    let cardswap = player1Deck[0];
    player1Deck.shift(); // remove the first card
    player2Deck.push(cardswap);
    player2Deck = player2Deck.concat(unwonCards);
    unwonCards = [];
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    playerOne = false;
    player2Move();
    return;
    }
  else {
    alert (`This hand was a draw, with player 1's ${player1Deck[0].name}, and player 2s ${player2Deck[0].name} both having a height of ${player1Deck[0].height}m`);
    let player1card  = player1Deck[0];
    let player2card = player2Deck[0];
    player1Deck.shift();
    player2Deck.shift();
    unwonCards.push(player1card);
    unwonCards.push(player2card);
    alert (`Player 1 now has ${player1Deck.length} cards remaining and player 2 has ${player2Deck.length} cards remaining`);
    
    const findOutWhosGo = () => {
      if (playerOne == true) {
          player1Move();
      }
      else {
          player2Move();
      }
    }
    findOutWhosGo();
    return;
    }
}

function player1Move(){
  cardStats();
  checkIfWon();
  alert (`Player 1, your card is ${player1Deck[0].name}. Height ${player1Deck[0].height}m, Mass ${player1Deck[0].mass}kg, offence ${player1Deck[0].offence}, defence ${player1Deck[0].defence}.`)
  let move = prompt (`Please choose either mass, height, offence or defence to play `)
  if (move.toLowerCase() == "offence"){
    compOffence();
  } else if(move.toLowerCase() == "defence"){
    compDefence();
  }else if(move.toLowerCase() == "mass"){
    compMass();
  } else if(move.toLowerCase() == "height"){
    compHeight();
  }else{
    alert (`Please select a correct attribute`);
    player1Move();
  }
}
function player2Move(){
  cardStats();
  checkIfWon();
  alert (`Player 2, your card is ${player2Deck[0].name}. Height ${player2Deck[0].height}m, Mass ${player2Deck[0].mass}kg, offence ${player2Deck[0].offence}, defence ${player2Deck[0].defence}.`)
  let move = prompt (`Please choose either mass, height, offence or defence to play `)
  if (move.toLowerCase() == "offence"){
    compOffence();
  } else if(move.toLowerCase() == "defence"){
    compDefence();
  }else if(move.toLowerCase() == "mass"){
    compMass();
  } else if(move.toLowerCase() == "height"){
    compHeight();
  }else{
    alert (`Please select a correct attribute`)
    player2Move();
  }
}

function startGame(){
let startGamey = prompt(`Do you want to start a game?`)
  if (startGamey.toLowerCase() == "yes"){
    player1Move();
  } else {
    alert (`If you're here you have to play`);
    startGame();
  }
}
function checkIfWon(){
if (player1Deck.length == 0){
  alert (` Player 2 has won!!`);
  return;
} else if(player2Deck.length == 0){
  alert (`Player 1 has won!!!`);
  return;
}else {
}
}

startGame();

function cardStats(){
  console.clear();
  console.log(`Card Win Statistics `)
  console.log(`${initialCardDeck[0].name} has won ${initialCardDeck[0].wonHands} times.`)
  console.log(`${initialCardDeck[1].name} has won ${initialCardDeck[1].wonHands} times.`)
  console.log(`${initialCardDeck[2].name} has won ${initialCardDeck[2].wonHands} times.`)
  console.log(`${initialCardDeck[3].name} has won ${initialCardDeck[3].wonHands} times.`)
  console.log(`${initialCardDeck[4].name} has won ${initialCardDeck[4].wonHands} times.`)
  console.log(`${initialCardDeck[5].name} has won ${initialCardDeck[5].wonHands} times.`)
  console.log(`${initialCardDeck[6].name} has won ${initialCardDeck[6].wonHands} times.`)
  console.log(`${initialCardDeck[7].name} has won ${initialCardDeck[7].wonHands} times.`)
  console.log(`${initialCardDeck[8].name} has won ${initialCardDeck[8].wonHands} times.`)
  console.log(`${initialCardDeck[9].name} has won ${initialCardDeck[9].wonHands} times.`)
  console.log(`${initialCardDeck[10].name} has won ${initialCardDeck[10].wonHands} times.`)
  console.log(`${initialCardDeck[11].name} has won ${initialCardDeck[11].wonHands} times.`)
  console.log(`${initialCardDeck[12].name} has won ${initialCardDeck[12].wonHands} times.`)
  console.log(`${initialCardDeck[13].name} has won ${initialCardDeck[13].wonHands} times.`)
  console.log(`${initialCardDeck[14].name} has won ${initialCardDeck[14].wonHands} times.`)
  console.log(`${initialCardDeck[15].name} has won ${initialCardDeck[15].wonHands} times.`)
  console.log(`${initialCardDeck[16].name} has won ${initialCardDeck[16].wonHands} times.`)
  console.log(`${initialCardDeck[17].name} has won ${initialCardDeck[17].wonHands} times.`)
  console.log(`${initialCardDeck[18].name} has won ${initialCardDeck[18].wonHands} times.`)
  console.log(`${initialCardDeck[19].name} has won ${initialCardDeck[19].wonHands} times.`)
  console.log(`${initialCardDeck[20].name} has won ${initialCardDeck[20].wonHands} times.`)
  console.log(`${initialCardDeck[21].name} has won ${initialCardDeck[21].wonHands} times.`)
  console.log(`${initialCardDeck[22].name} has won ${initialCardDeck[22].wonHands} times.`)
  console.log(`${initialCardDeck[23].name} has won ${initialCardDeck[23].wonHands} times.`)
  console.log(`${initialCardDeck[24].name} has won ${initialCardDeck[24].wonHands} times.`)
  console.log(`${initialCardDeck[25].name} has won ${initialCardDeck[25].wonHands} times.`)
  console.log(`${initialCardDeck[26].name} has won ${initialCardDeck[26].wonHands} times.`)
  console.log(`${initialCardDeck[27].name} has won ${initialCardDeck[27].wonHands} times.`)
  console.log(`${initialCardDeck[28].name} has won ${initialCardDeck[28].wonHands} times.`)
  console.log(`${initialCardDeck[29].name} has won ${initialCardDeck[29].wonHands} times.`)
  return
}