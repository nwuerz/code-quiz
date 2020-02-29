  //create a variable for elements that we are working with
  
  var clearBtn = findEl("#clearBtn");
  var startBtn = findEl("#startBtn");
  var question = findEl("#question");
  var choices = findEl("#choices");
  var buttons = findEl("#buttons");
  var timeEl = findEl("#timer");
  var highScores = findEl("highScores");
  
  var questionIndex = 0;
  
  //event listener to START code
  startBtn.addEventListener("click", function() {
    init();
    setTime();
  });
  
  //function to generate first set of questions
  function generateBtn(questionIndex, choiceIndex, qnumber) {
    var choice = document.createElement("button");
    choice.textContent = (qnumber + ". " + questions[questionIndex].choices[choiceIndex]);
    choice.setAttribute("class", "lists");
    choice.setAttribute("data-choice", questions[questionIndex].choices[choiceIndex]);
    return choice;
  }
  
    // set timer
    var secondsLeft = 75;

    function setTime() {
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
    
        if(secondsLeft === 0 || (questionIndex >= questions.length)) {
          clearInterval(timerInterval);
        }
    
      }, 1000);
    }

  //function to replace start page with the first set of questions and initialize quiz
  function init() {
    question.firstChild.textContent = (questions[0].title);
    var instructions = findEl('#div2');
    instructions.remove();
    startBtn.remove();
    replaceQuestions(questionIndex);
  }
    
  //function to clear questions and loop through questions object to append the next set of questions/choices
  function replaceQuestions (questionIndex) {
    var buttonContainer = findEl('#buttons');
    var questionContainer = findEl('#question');
    buttonContainer.innerHTML = '';
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        var choice = generateBtn(questionIndex,i, i+1);
        buttonContainer.appendChild(choice);
    }
    questionContainer.textContent = questions[questionIndex].title;
    assignButtonHandlers();
  }

  // function used select an individual element (id)
  function findEl(selector) {
      return document.querySelector(selector);
  }
  // function used to select multiple elements (class)
  function findAllEl(selector) {
    return document.querySelectorAll(selector);
  }

  // alert user of outcome for each question/answer until questions are completed
  function assignButtonHandlers() {
      var buttonsArr = findAllEl('.lists');
      buttonsArr.forEach(function(buttonEl) {
        buttonEl.addEventListener('click', function(event) {
            var userSelection = event.target.getAttribute('data-choice');
            if (userSelection === questions[questionIndex].answer) {
                alert("correct!")
            }
            else {
                alert("wrong answer :(");
                secondsLeft = (secondsLeft - 10);
            }

            console.log(event.target.getAttribute('data-choice'));
            questionIndex++;
            if(questionIndex < questions.length) {
                replaceQuestions(questionIndex)
            }
            else {
                console.log('game over do stuff')
                allDone();
            }
      });
      });
      
  }

// create All done! page and retrieve initials from user

function allDone() {
    var buttonContainer = findEl('#buttons');
    var questionContainer = findEl('#question');
    questionContainer.textContent = "All done!";
    var intialsPrompt = document.createElement("h5");
    var initialsInput = document.createElement("input");
    var initialsSubmit = document.createElement("button");
    initialsInput.setAttribute("id", "userInitials");
    initialsSubmit.setAttribute("id", "initalsSubmit");
    buttonContainer.innerHTML = '';
    intialsPrompt.textContent = "Enter Initials: ";
    initialsSubmit.textContent = "Submit";
    buttonContainer.appendChild(intialsPrompt);
    buttonContainer.appendChild(initialsInput);
    buttonContainer.appendChild(initialsSubmit);
    initialsSubmit.addEventListener('click', function () {
        userInitials = initialsInput.value.trim();
        if (userInitials === "") {
            return;
        }
        storeScores();
        window.location.href = 'high-score.html';
    });
}

//store high score to local storage

function storeScores() {
  var currentHighScores = JSON.parse(localStorage.getItem("highscores")) || [];
    var highScore = {
      userInitials,
      secondsLeft
    }



    //If the array is empty just add it

    //If it is not empty start from first item which should have highest `score`
    if (currentHighScores.length === 0 ) {
      currentHighScores.push(highScore);
      return localStorage.setItem("highscores", JSON.stringify(currentHighScores));
    }

    let inserted = false;
    //Keep copmaring the current value to the value you are iterating at and see if our value is ever higher than one in high scores
    currentHighScores.forEach( ({userInitials, secondsLeft}, index)=> {
      //If so use splice to modfy the array
      if (secondsLeft <= highScore.secondsLeft) {
        currentHighScores.splice(index, 0, highScore);
        inserted = true;
      }
      
    });

    if(!inserted && currentHighScores.length < 5) {
      currentHighScores.push(highScore);
    }

    if (currentHighScores.length > 5) {
      currentHighScores = currentHighScores.slice(0, 5);
    }
    console.log(currentHighScores);
    //Then check if our array is longer than cache length we shojld non mutattive slice which 
    //returns a copy and we can exclude the last item essentially dropping it
    //Finally tha tvalue will be se below to local storage

    localStorage.setItem("highscores", JSON.stringify(currentHighScores));
}

