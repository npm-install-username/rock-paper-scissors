function computerPlay(){
    const compChoices = ["r","p","s"];
    let compChoice = Math.floor(Math.random()*compChoices.length);

    compChoice = compChoices[compChoice]
    return compChoice
   
}

function playRound(userChoice,compChoice){
    if (userChoice == "r" & compChoice=="r"){
        let result = "d"
    } else if (userChoice == "r" & compChoice=="p"){
        let result = "l"
    }else if (userChoice == "r" & compChoice=="s"){
        let result = "w"
    }else if (userChoice == "p" & compChoice=="r"){
        let result = "w"
    }else if (userChoice == "p" & compChoice=="p"){
        let result = "d"
    }else if (userChoice == "p" & compChoice=="s"){
        let result = "l"
    }else if (userChoice == "s" & compChoice=="r"){
        let result = "l"
    }else if (userChoice == "s" & compChoice=="p"){
        let result = "w"
    }else if (userChoice == "s" & compChoice=="s"){
        let result = "d"
    }
}




let userChoice = prompt("enter a choice using r,p or s")

playRound(userChoice,computerPlay())
if(result="w"){
    console.log("win")
} else if (result="l"){
    console.log("lost")
} else{
    console.log("draw")
}
