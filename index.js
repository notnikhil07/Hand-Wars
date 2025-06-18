let userScore = 0;
let comScore = 0;

const userScorePara = document.querySelector("#user_score");
const comScorePara = document.querySelector("#comp_score");
const choices = document.querySelectorAll(".choice");
const pickBtn = document.querySelector(".pickBtn");

const showWinner = (UserWin) => {
    if (UserWin) {
        userScore++;
        userScorePara.innerText = userScore;
        pickBtn.innerHTML = "You Win!";
        pickBtn.style.backgroundColor = "Green";
    } else {
        comScore++;
        comScorePara.innerText = comScore;
        pickBtn.innerHTML = "You Loose!";
        pickBtn.style.backgroundColor = "Red";
    }
};

const genCompChoice = () => {
    const options = [1,2,3]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) =>{
    console.log("User choice = ", userChoice)
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice == compChoice){
        pickBtn.innerHTML = "Game Draw";
        pickBtn.style.backgroundColor = "grey";

    }
    else{
        let UserWin = true;
        if(userChoice == "1"){
            UserWin = compChoice == "2" ? false : true;
        }
        else if(userChoice == "2"){
            UserWin = compChoice == "3" ? false : true;
        }
        else if(userChoice == "3"){
            UserWin = compChoice == "1" ? false : true;
            }
        showWinner(UserWin);
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("value");
        playGame(userChoice);
    })
})