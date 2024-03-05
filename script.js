////array containing different colors for the game

const colors = ['#ffd7ee', '#ef8f9f', '#de484f', '#ce0000', '#dd5500', '#edaa00', '#fcff00', '#a8e000', '#54c000', '#00a100', '#006b55', '#0036aa', '#0000ff', '#2300cf', '#45009f', '#68006e']
;

///// Function to generate pairs of random colors for the game

const generateRandomColors = (numofcards) => {
    // duplicate the colors array to create pairs
    const duplicatedColors = colors.concat(colors);
    // Shuffle the colors randomly
    const shuffledColors = duplicatedColors.sort(() => Math.random() - 0.5);
    return shuffledColors.slice(0, numofcards / 2).concat(shuffledColors.slice(0, numofcards / 2));
};



//////function to create the game board dynamically
let currentLevel = 1;

const createBoard = (numofcards) => {
    // get the game board element from the HTML
    const gameBoard = document.getElementById("gameBoard");

    gameBoard.innerHTML = "";/*clears the game board? */

    // generate random colors for the game
    const shuffledColors = generateRandomColors(numofcards);
    //array to store selected cards during gameplay
    let selectedCards = [];
 // Shuffle the array of shuffled colors
    shuffledColors.sort(() => Math.random() - 0.5);
    //loop through each shuffled color
    shuffledColors.forEach(color => {
        //create a div element for each card
        const card = document.createElement("div");
        //set the CSS class for styling
        card.className = "card";
        //set default color for each card
        card.style.backgroundColor = "gray";

        ////////// Add click event listener to each card

        card.addEventListener("click", () => {
            //check if the card is already matched or the maximum number of selected cards(2) is reached
            if (!selectedCards.includes(card) && selectedCards.length < 2) {
                //changes the color of the card when it is clicked
                card.style.backgroundColor = color;
                //add the selected card to the array
                selectedCards.push(card);
                //check if two cards are selected
                if (selectedCards.length === 2) {
                    ////////////////// Set a timeout
                    setTimeout(() => {
                        if (selectedCards[0].style.backgroundColor !== selectedCards[1].style.backgroundColor) {
                            selectedCards.forEach(card => {
                                card.style.backgroundColor = "gray";
                            });
                        } else {
                            const matchedCards = document.querySelectorAll('.card[style="background-color: gray;"]');
                            if (matchedCards.length === 0) {
                                const continueButton = document.getElementById('continueButton');
                                continueButton.style.display = 'block';
                            }
                        }
                        selectedCards = [];
                    }, 1000);
                    // Set timeout duration to 1000 milliseconds(1 second)
                }
            }
        });
        //append the card to the game board
        gameBoard.appendChild(card);
    });
                            const continueButton = document.getElementById('continueButton');
                            continueButton.style.display = 'none'; // Hide the Next Level button
 // Display current level number in the UI
    const levelDisplay = document.getElementById("levelDisplay");
    levelDisplay.textContent = `Level ${currentLevel}`;
};

// Function to proceed to the next level
function nextLevel() {
    currentLevel++;
    createBoard(currentLevel * 4); // Generate a new game board with increased number of cards

}

// Function to initialize the game
function startGame() {
    currentLevel = 1;
    const startButton = document.getElementById('startButton');
    startButton.style.display = 'none'; // Hide start button
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.style.display = 'block'; // Show the game container
    createBoard(currentLevel * 4); // Start the game with 4 cards
}
// Function to restart the game
function restartGame() {
    const gameBoard = document.getElementById("gameBoard");
    const continueButton = document.getElementById('continueButton');
    continueButton.style.display = 'none';
    gameBoard.innerHTML = ""; // Clear the game board
    currentLevel = 1;
    startGame(); // Restart the game from the beginning
}

document.addEventListener('DOMContentLoaded', function () {
    // Event listener for "Restart" button
    const restartButton = document.getElementById('restartButton');
    restartButton.addEventListener('click', restartGame);

    // Event listener for "Start Game" button
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', startGame);

    // Event listener for "Continue to Next Level" button
    const continueButton = document.getElementById('continueButton');
    continueButton.addEventListener('click', () => {
        const numofcards = document.querySelectorAll('.card').length; // Proceed to the next level with an increased number of cards
    nextLevel(numofcards);
    });
});









