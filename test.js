
const rock = document.getElementById("rock-btn"); // This initializes my buttons as variables that are easier to reuse
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");
const reset = document.getElementById("reset-btn");
let timesWon = 0;  //Starts the score board off at zero
let timesLost = 0;
let timesTied = 0;
let totalRounds = 0;


function computerChoice(choice) { //This section displays the computer's choice on the screen
    switch (choice) {
        case 1:
            document.getElementById("com-choice").innerHTML = " Rock"
            break
        case 2:
            document.getElementById("com-choice").innerHTML = " Paper"
            break
        case 3:
            document.getElementById("com-choice").innerHTML = " Scissors"
            break
        default:
    }
}
function resetGame() { //Adds functionality to the reset button
    reset.addEventListener("click", function (e) {
        timesWon = 0; //sets all variables back to zero
        timesLost = 0;
        timesTied = 0;
        totalRounds = 0;
        document.getElementById("wins").innerHTML = ""; //Updates the html to display empty spaces again
        document.getElementById("losses").innerHTML = "";
        document.getElementById("ties").innerHTML = "";
        document.getElementById("rounds").innerHTML = "";
        document.getElementById("your-choice").innerHTML = "";
        document.getElementById("com-choice").innerHTML = "";
        document.getElementById("winner").innerHTML = "";
        document.getElementById("champion").innerHTML = "";
        rock.disabled = false //reactivates all my buttons
        paper.disabled = false
        scissors.disabled = false
    })
}

function findChampion() { //Finds who won the best of 10
    if (timesWon > timesLost) {
        document.getElementById("champion").innerHTML = " You"
    }
    else if (timesWon < timesLost) {
        document.getElementById("champion").innerHTML = " Computer"
    }
    else if (timesLost = timesWon) {
        document.getElementById("champion").innerHTML = " It's a Tie"
    }

}


function checkGameEnd() {
    if (totalRounds >= 10) { //checks if the rounds have reached 10 yet
        rock.disabled = true //Disables buttons once the game is over
        paper.disabled = true
        scissors.disabled = true
        reset.disabled = false
        findChampion();
        resetGame();
    }
    else {
        reset.disabled = true //makes the reset button unusable until the end of the game
    }
}



rock.addEventListener("click", function (e) { //initiates an event on click
    if (e.target.value === "rock") { //validates user input
        console.log("Validation test passed: You chose rock");
        document.getElementById("your-choice").innerHTML = " Rock" //Displays user's choice
        const choice = Math.floor(Math.random() * 3) + 1; //Randomizes computer choice
        computerChoice(choice); //Displays computer choice
        switch (choice) { //Determines the winner based on computer choice
            case 1:
                document.getElementById("winner").innerHTML = " It's a tie"
                timesTied += 1;
                document.getElementById("ties").innerHTML = timesTied
                totalRounds += 1;
                document.getElementById("rounds").innerHTML = totalRounds
                checkGameEnd()
                break
            case 2:
                document.getElementById("winner").innerHTML = " You Lose"
                timesLost += 1;
                document.getElementById("losses").innerHTML = timesLost
                totalRounds += 1;
                document.getElementById("rounds").innerHTML = totalRounds
                checkGameEnd()
                break
            case 3:
                document.getElementById("winner").innerHTML = " You Win!"
                timesWon += 1;
                document.getElementById("wins").innerHTML = timesWon
                totalRounds += 1;
                document.getElementById("rounds").innerHTML = totalRounds
                checkGameEnd()
                break
        }

    }
    else {
        console.log("Invalid input"); //Catches possible invalid user input
    }
});


paper.addEventListener("click", function (e) {
    if (e.target.value === "paper") {
        console.log("Validation test passed: You chose paper");
        document.getElementById("your-choice").innerHTML = " Paper"
        const choice = Math.floor(Math.random() * 3) + 1;
        computerChoice(choice);
        switch (choice) {
            case 1:
                document.getElementById("winner").innerHTML = " You Win!"
                timesWon += 1;
                document.getElementById("wins").innerHTML = timesWon
                totalRounds += 1;
                document.getElementById("rounds").innerHTML = totalRounds
                checkGameEnd()
                break
            case 2:
                document.getElementById("winner").innerHTML = " It's a tie"
                timesTied += 1;
                document.getElementById("ties").innerHTML = timesTied
                totalRounds += 1;
                document.getElementById("rounds").innerHTML = totalRounds
                checkGameEnd()
                break
            case 3:
                document.getElementById("winner").innerHTML = " You Lose"
                timesLost += 1;
                document.getElementById("losses").innerHTML = timesLost
                totalRounds += 1;
                document.getElementById("rounds").innerHTML = totalRounds
                checkGameEnd()
                break
        }

    }
    else {
        console.log("Invalid input");
    }
});



scissors.addEventListener("click", function (e) {
    if (e.target.value === "scissors") {
        console.log("Validation test passed: You chose scissors");
        document.getElementById("your-choice").innerHTML = " Scissors"
        const choice = Math.floor(Math.random() * 3) + 1;
        computerChoice(choice);
        switch (choice) {
            case 1:
                document.getElementById("winner").innerHTML = " You Lose"
                timesLost += 1;
                document.getElementById("losses").innerHTML = timesLost
                totalRounds += 1;
                document.getElementById("rounds").innerHTML = totalRounds
                checkGameEnd()
                break
            case 2:
                document.getElementById("winner").innerHTML = " You Win"
                timesWon += 1;
                document.getElementById("wins").innerHTML = timesWon
                totalRounds += 1;
                document.getElementById("rounds").innerHTML = totalRounds
                checkGameEnd()
                break
            case 3:
                document.getElementById("winner").innerHTML = " It's a tie"
                timesTied += 1;
                document.getElementById("ties").innerHTML = timesTied
                totalRounds += 1;
                document.getElementById("rounds").innerHTML = totalRounds
                checkGameEnd()
                break
        }

    }
    else {
        console.log("Invalid input");
    }
});






