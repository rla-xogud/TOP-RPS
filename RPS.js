let options = [
    "rock",
    "paper",
    "scissors"
]

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resetBtn = document.querySelector("#resetBtn");

rockBtn.addEventListener('click', ()=>{play('rock', computerPlay())});
paperBtn.addEventListener('click', ()=>{play('paper', computerPlay())});
scissorsBtn.addEventListener('click', ()=>{play('scissors', computerPlay())});
resetBtn.addEventListener('click', ()=>{resetGame()});


function computerPlay(){
    return options[Math.floor(Math.random() *3)];
}

function play(player, computer){
    if(isGameValid()){
        alert("Current game is over, please press reset if you want to play");
        return;
    }
    updateImages(player, computer)
    switch (player){
        case "rock":
            if(computer == "paper"){
                gameResult("comp")
            }else if(computer == "scissors"){
                gameResult("player")
            }
            break;
        case "scissors":
            if(computer == "paper"){
                gameResult("player")
            }else if(computer == "rock"){
                gameResult("comp")
            }
            break;
        case "paper":
            if(computer == "rock"){
                gameResult("player")
            }else if(computer == "scissors"){
                gameResult("comp")
            }
            break;
        default:
            break;
    }
}
function updateImages(playerImage, computerImage){
    let player = document.querySelector("#playerCast");
    player.src = playerImage+".jpeg";

    let computer = document.querySelector("#computerCast");
    computer.src = computerImage +".jpeg";

}
function gameResult(winner){
    if(winner == "comp"){
        let computerWins = document.querySelector("#compScore");
        let score = Number(computerWins.textContent);
        score++;
        computerWins.textContent = score;
        if(score == 5){
            alert("Computer wins!")
        }
    }
    if(winner == "player"){
        let playerWins = document.querySelector("#playerScore");
        let score = Number(playerWins.textContent);
        score++;
        playerWins.textContent = score;
        if(score == 5){
            alert("Player wins!")
        }
    }
}

function resetGame(){
    let playerWins = document.querySelector("#playerScore");
    let computerWins = document.querySelector("#compScore");

    playerWins.textContent = "0";
    computerWins.textContent = "0";

    updateImages("none", "none")
    alert("New game! Have Fun!");
}

function isGameValid(){
    let playerWins = document.querySelector("#playerScore").textContent;
    let computerWins = document.querySelector("#compScore").textContent;
    return(playerWins >= 5 || computerWins >= 5)        
}
