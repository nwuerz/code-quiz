  //create a variable for elements that we are working with
  
  var clearBtn = findEl("#clearBtn");
  var startBtn = findEl("#startBtn");
  var question = findEl("#question");
  var choices = findEl("#choices");
  var buttons = findEl("#buttons");
  var timeEl = findEl("#timer");
  
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
    
        if(secondsLeft === 0) {
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

  // function used to assign button handler to the newly generated set of buttons and prompt end of quiz
  function assignButtonHandlers() {
      var buttonsArr = findAllEl('.lists');
      var questionsArr = findAllEl()
      buttonsArr.forEach(function(buttonEl) {
        buttonEl.addEventListener('click', function(event) {
            //compare below var with questions[questionsIndex].answer
            //Handle incrementing right/qwrong var
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

// create All done! page

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

    

}
