const game = () => {
let pScore = 0;
let cScore= 0;
//starts the game
const startGame = () =>{
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    
    playBtn.addEventListener("click", () =>{
        introScreen.classList.add(".fadeOut");
        match.classList.add(".fadeIn");
    });
};

//play match
const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    //computer options

    let computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
        option.addEventListener("click", function (){
            //computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
        })
    })

    console.log(computerNumber);
};
//call all the inner functions
startGame();

};

//start game function
game();

