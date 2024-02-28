const game = ()=> {
let pScore = 0;
let cScore= 0;
//starts the game
const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    
    playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
    });
};

//play match
const playMatch =()=> {};
//call all the inner functions
startGame();

};

//start game function
game();