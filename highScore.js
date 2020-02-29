
var highScoresEl = document.querySelector("#highScores")
var clearBtn = document.querySelector("#clearBtn")
var highScoreArr = [];

getScore()
clearScore()

function getScore(){
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    if(highScores.length !== 0) {

        highScores.forEach(({userInitials, secondsLeft})=>{
            var intialsEl = document.createElement("h5")
            intialsEl.textContent = userInitials + " " + secondsLeft;
            highScoresEl.append(intialsEl);
        
        })
    }
}

function clearScore() {
    clearBtn.addEventListener("click", function() {
        highScoresEl.innerHTML = '';
        localStorage.removeItem("highscores");
    });
}

