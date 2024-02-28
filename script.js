////array containing different colors for the game

const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];

///// Function to generate pairs of random colors for the game

const generateRandomColors = () => {
    // duplicate the colors array to create pairs
    const duplicatedColors = colors.concat(colors);
    // Shuffle the colors randomly
    const shuffledColors = duplicatedColors.sort(() => Math.random() - 0.5);
    return shuffledColors;
};

//////function to create the game board dynamically

const createBoard = () => {
    // get the game board element from the HTML
    const gameBoard = document.getElementById("gameBoard");
    // generate random colors for the game
    const shuffledColors = generateRandomColors();
    //array to store selected cards during gameplay
    let selectedCards = [];

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
                        // Check if the selected cards have the same color
                        if (selectedCards[0].style.backgroundColor === selectedCards[1].style.backgroundColor) {
                     
                            //keep the color of matching cards and reset selectedCards array for new selection
                            selectedCards = [];
                      


                        } else {
                            //reset unmatched cards to gray and reset array for new selection
                            selectedCards.forEach(card => {
                                card.style.backgroundColor = "gray";
                            });
                            selectedCards = [];
                        }




                    }, 1000); // Set timeout duration to 1000 milliseconds(1 second)
                }
            }
        });
        //append the card to the game board
        gameBoard.appendChild(card);
    });
};

//initialize the game board when the script is executed
createBoard();

