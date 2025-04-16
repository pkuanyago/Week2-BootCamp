let board = document.getElementById("game-board");

//List of my 8 images
let images = [
  "cat.png",
  "dog.png",
  "fish.png",
  "bird.png",
  "apple.png",
  "banana.png",
  "car.png",
  "ball.png",
];

let cards = [...images, ...images]; // there will be 16 cards in total
let flippedCards = [];
let matchedCards = [];

shuffleCards();
createBoard();

// this will shuffles card randomly
function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
}

// Creates the card elements on the board
function createBoard() {
  cards.forEach((image, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = image;
    card.dataset.index = index;

    card.addEventListener("click", () => {
      if (
        flippedCards.length < 2 &&
        !card.classList.contains("flipped") &&
        !flippedCards.includes(card)
      ) {
        flipCard(card);
      }
    });

    board.appendChild(card);
  });
}

// Flips a card to show the image underneath
function flipCard(card) {
  let image = card.dataset.image;
  card.style.backgroundImage = `url('images/${image}')`;
  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkMatch();
  }
}

// Checks if the two flipped cards are a match
function checkMatch() {
  let [card1, card2] = flippedCards;

  if (card1.dataset.image === card2.dataset.image) {
    matchedCards.push(card1, card2);
    flippedCards = [];

    if (matchedCards.length === cards.length) {
      setTimeout(() => alert("Nice! You matched them all!"), 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      card1.style.backgroundImage = "url('images/back.jpg')";
      card2.style.backgroundImage = "url('images/back.jpg')";
      flippedCards = [];
    }, 1000);
  }
}
