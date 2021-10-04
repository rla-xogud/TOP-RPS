let options = [
    "rock",
    "raper",
    "scissors"
]

const btn = document.querySelector(".gameButton");
btn.addEventListener('click', ()=>{alert("hello world")});
function computerPlay(){
    return options[Math.floor(Math.random() *3)];
}

function play(player, computer){
    if(player == null){
        alert("Please enter your choice");
        return;
    }
    let cast = player.toLowerCase();
    if(!(cast == "rock"||cast == "scissors"||cast == "paper")){
        alert("Invalid choice");
        return;
    }
    switch (cast){
        case "rock":
            if(computer == "paper"){
                return -1;
            }else if(computer == "scissors"){
                return 1;
            }
        case "scissors":
            if(computer == "paper"){
                return 1;
            }else if(computer == "rock"){
                return -1;
            }
        case "paper":
            if(computer == "rock"){
                return 1;
            }else if(computer == "scissors"){
                return -1;
            }
        default:
            return 0;
            break;
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    while(playerWins < 5 || computerWins < 5){
        let player = prompt("What is your choice? Pick rock, paper, or scissors");
        if(player === null){
            alert("Thanks for playing, if you want to play again refresh the page");
            return;
        }
        let computer = computerPlay();
        let result = play(player,computer);
        if(result == -1){
            computerWins++;
            alert("The computer won this round. Computer wins: " + computerWins + " Player wins: " + playerWins);
        }else if(result == 1){
            playerWins++;
            alert("You won this round Computer wins: "+ computerWins + " Player wins: " + playerWins);
        }else{
            alert("No winner! Computer wins: "+ computerWins + " Player wins: " + playerWins);
        }
    }
    if(playerWins == 5){
        console.log("You won the game!");
    }else{
        console.log("The computer won the game!");
    }
}
game();
    