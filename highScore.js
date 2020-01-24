
var highScoresEl = document.querySelector("#highScores")
var clearBtn = document.querySelector("#clearBtn")
var highScoreArr = [];

getScore()
clearScore()

function getScore(){
    var highScore = JSON.parse(localStorage.getItem("highscore"))
    var secondsLeft = highScore.secondsLeft
    var userInitials = highScore.userInitials
    var intialsEl = document.createElement("h5")

    intialsEl.textContent = userInitials + " " + secondsLeft;
    highScoresEl.append(intialsEl);
}

function clearScore() {
    clearBtn.addEventListener("click", function() {
        highScoresEl.innerHTML = '';
    });
}

