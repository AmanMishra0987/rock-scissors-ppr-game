let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = ()=>{
    msg.innerText = "draw,play again";
    msg.style.backgroundColor ="#081b31"
}

const showWiner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "you win!";
        msg.style.backgroundColor ="green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "you lose";
        msg.style.backgroundColor ="red"
    }
}

const genCompChoice = ()=>{
    const options = ["paper","rock","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const playGame = (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice==="paper"?false:true;
        }else if(userChoice ==="paper"){
            userWin =compChoice==="scissors"?false:true;
        }else{
            userWin= compChoice==="rock"?false:true;
        }
        showWiner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})