const cards = [
    { id: 1, value: 'A' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' },
    { id: 4, value: 'D' },
    { id: 5, value: 'E' },
    { id: 6, value: 'F' },
    { id: 7, value: 'G' },
    { id: 8, value: 'H' },
    { id: 1, value: 'A' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' },
    { id: 4, value: 'D' },
    { id: 5, value: 'E' },
    { id: 6, value: 'F' },
    { id: 7, value: 'G' },
    { id: 8, value: 'H' }
];

let flippedCards = [];
let matchedCards = 0;

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.id = card.id;
    cardElement.textContent = card.value;

    cardElement.addEventListener('click', flipCard);
    return cardElement;
}

function flipCard() {
    if (flippedCards.length === 2 || this.classList.contains('flipped') || this.classList.contains('matched')) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        setTimeout(checkForMatch, 1000);
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.id === card2.dataset.id) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards += 2;
        if (matchedCards === cards.length) {
            alert("You Win!");
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    flippedCards = [];
}

function initializeGame() {
    const shuffledCards = shuffleArray([...cards]);
    const cardsContainer = document.getElementById('cards-container');
    shuffledCards.forEach(card => {
        cardsContainer.appendChild(createCardElement(card));
    });
}

initializeGame();
