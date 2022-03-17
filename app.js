function computerPlay(){
    const compChoices = ["r","p","s"];
    let compChoice = Math.floor(Math.random()*compChoices.length);

    compChoice = compChoices[compChoice]
    return compChoice
   
}

function playRound(userChoice,compChoice){
    if (userChoice == "r" & compChoice=="r"){
        return result = "d"
    } else if (userChoice == "r" & compChoice=="p"){
        return result = "l"
    }else if (userChoice == "r" & compChoice=="s"){
        return result = "w"
    }else if (userChoice == "p" & compChoice=="r"){
        return result = "w"
    }else if (userChoice == "p" & compChoice=="p"){
        return result = "d"
    }else if (userChoice == "p" & compChoice=="s"){
        return result = "l"
    }else if (userChoice == "s" & compChoice=="r"){
        return result = "l"
    }else if (userChoice == "s" & compChoice=="p"){
        return result = "w"
    }else if (userChoice == "s" & compChoice=="s"){
        return result = "d"
    }
    
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const userButtons = document.querySelectorAll(".userButton")

userButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let userChoice = e.target.innerText
        if(userChoice=="rock"){
            userChoice ="r"
        } else if (userChoice=="paper"){
            userChoice="p"
        } else if( userChoice =="scissors"){
            userChoice="s"
        }
        console.log(userChoice)
        let computerChoice = computerPlay()
        console.log(computerChoice)
        result = playRound(userChoice,computerChoice)
        console.log(result);
        
        if(result="w"){
            console.log("win")
        } else if (result="l"){
            console.log("lost")
        } else{
            console.log("draw")
        }
    })
})


