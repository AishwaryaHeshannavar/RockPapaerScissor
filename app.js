const choice=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#computer");
const msg=document.querySelector("#msg-container");
let userScore=0;
let compScore=0;
let winmsg;
const gamewinner=(userWin)=>{
    if(userWin===true){
        winmsg="You win the game!";
        msg.innerText=winmsg;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText=userScore;
    }else{
        winmsg="You Lost...\ntry again";
        msg.innerText=winmsg;
        msg.style.backgroundColor = "red";
        console.log("You Lost...\ntry again")
        compScore++;
        compScorePara.innerText=compScore;
    }

}
const random=()=>{
    const arr=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return arr[idx];
   
}
const draw=()=>{
    winmsg=`Game is Draw`;
    msg.innerText=winmsg;
    console.log(`Game is Draw`);
}

const playgame=(userchoice)=>{
    let userWin=true;
    const compChoice=random();

    // if (userchoice === compChoice) {
    //     //Draw Game
    //     draw();
    //   } else {
    //     let userWin = true;
    //     if (userchoice === "rock") {
    //       //scissors, paper
    //       userWin = compChoice === "paper" ? false : true;
    //     } else if (userchoice === "paper") {
    //       //rock, scissors
    //       userWin = compChoice === "scissors" ? false : true;
    //     } else {
    //       //rock, paper
    //       userWin = compChoice === "rock" ? false : true;
    //     }
        if(userchoice===compChoice){
            draw();
        }else{
            if(userchoice==="rock"){
                userWin=compChoice==="scissor"? true : false;
            }else if(userchoice==="paper"){
                userWin=compChoice==="rock"? true : false;
            }else{
                userWin=compChoice==="paper"? true : false;
            }

        }
        gamewinner(userWin);
  

}
choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    
    });
    
});