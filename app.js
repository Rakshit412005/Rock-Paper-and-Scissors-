let userScore=0;
let compScore=0;
const msg= document.querySelector(".beta-box3");
const choices = document.querySelectorAll(".hover");
const scoreUser=document.querySelector("#user-score");
const scoreComp=document.querySelector("#comp-score");
const GenCompChoice = ()=>{
    const options= ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3); 
    return options[randomIdx];
}
const showWinner=(Result)=>{
    if(Result==="You win !"){
        msg.innerText= "You win !";
        userScore++;
        scoreUser.innerText = userScore;
        msg.style.backgroundColor = "green";
        msg.style.fontSize = "30px";
        msg.style.color = "black";
        msg.style.fontWeight = "bold";
    }
    else if(Result==="You lose !"){
        msg.innerText="You lose !";
        compScore++;
        scoreComp.innerText = compScore;
        msg.style.backgroundColor = "red";
        msg.style.fontSize = "30px";
        msg.style.color = "black";
        msg.style.fontWeight = "bold";
    }
    else{
        msg.innerText="Game was Draw !";
        msg.style.backgroundColor = "yellow";
        msg.style.fontSize = "30px";
        msg.style.color = "black";
        msg.style.fontWeight = "bold";
    }

}

const playGame = (userChoice) =>{
    
    const CompChoice=GenCompChoice();
    
    const result=()=>{
        if(userChoice===CompChoice){
            return "Draw";
        }
        else if(userChoice==="rock"){
            if (CompChoice==="scissors"){
                return "You win !";
            }
            else{
                return "You lose !";
            }
        }
        else if(userChoice==="paper"){
            if (CompChoice==="rock"){
                return "You win !";
            }
            else{
                return "You lose !";
            }
        }
        else if(userChoice==="scissors"){
            if (CompChoice==="paper"){
                return "You win !";
            }
            else{
                return "You lose !";
            }
        }
    }
    const Result=result();
    
    showWinner(Result);
   
}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})
