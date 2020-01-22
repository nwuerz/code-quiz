console.error(questions);
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
  
  
  //grab elements that we are working with and store to a div
  
  var clearBtn = findEl("#clearBtn");
  var startBtn = findEl("#startBtn");
  var question = findEl("#question");
  var choices = findEl("#choices");
  var buttons = findEl("#buttons");
  var timeEl = findEl("#timer");

  var questionIndex = 0;
  
  //first set of button options

  function generateBtn(questionIndex, choiceIndex, qnumber) {
    var choice = document.createElement("button");
    choice.textContent = (qnumber + ". " + questions[questionIndex].choices[choiceIndex]);
    choice.setAttribute("class", "lists");
    choice.setAttribute("data-choice", questions[questionIndex].choices[choiceIndex]);
    return choice;
  }
  
  //event listener to START code
  
  startBtn.addEventListener("click", function() {
    init();
    setTime();
  });
  
 
  //create functions that initiate first set of questions after start button is clicked...
  
  function init() {
    question.firstChild.textContent = (questions[0].title);
    var instructions = findEl('#div2');
    instructions.remove();
    startBtn.remove();
    replaceQuestions(questionIndex);
  }
  

  
  //function to replace questions with new ones 
  
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

  function findEl(selector) {
      return document.querySelector(selector);
  }

  function findAllEl(selector) {
    return document.querySelectorAll(selector);
}

  function assignButtonHandlers() {
      var buttonsArr = findAllEl('.lists');
    //   for (var i = 0; i < buttonsArr.length; i++) {
    //       var buttonEl = buttonsArr[i];
    //       buttonEl.addEventListener('click', function() {
    //         console.log('Hello world....?')
    //   });
          
    //   }

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
            }
      });
      });
      
  }
  
