var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store _____.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
    },
    {
      title: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parenthesis"],
      answer: "commas"
    },
    {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
      answer: "console.log"
    },

  ];

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

var clearBtn = document.querySelector("#clearBtn");
var startBtn = document.querySelector("#startBtn");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var buttons = document.querySelector("#buttons");
var timeEl = document.querySelector("#timer");

//first set of button options

var choiceOne0 = document.createElement("button");
choiceOne0.textContent = ("1. " + questions[0].choices[0]);
choiceOne0.setAttribute("class", "lists");

var choiceTwo0 = document.createElement("button");
choiceTwo0.textContent = ("2. " + questions[0].choices[1]);
choiceTwo0.setAttribute("class", "lists");

var choiceThree0 = document.createElement("button");
choiceThree0.textContent = ("3. " + questions[0].choices[2]);
choiceThree0.setAttribute("class", "lists");

var choiceFour0 = document.createElement("button");
choiceFour0.textContent = ("4. " + questions[0].choices[3]);
choiceFour0.setAttribute("class", "lists");
console.log(choiceOne0, choiceTwo0, choiceThree0, choiceFour0);

//second set of button options

// var choiceOne1 = document.createElement("button");
// choiceOne0.textContent = ("1. " + questions[1].choices[0]);
// choiceOne0.setAttribute("class", "lists");

// var choiceTwo1 = document.createElement("button");
// choiceOne0.textContent = ("1. " + questions[1].choices[0]);
// choiceOne0.setAttribute("class", "lists");

// var choiceThree1 = document.createElement("button");
// choiceOne0.textContent = ("1. " + questions[1].choices[0]);
// choiceOne0.setAttribute("class", "lists");

// var choiceFour1 = document.createElement("button");
// choiceOne0.textContent = ("1. " + questions[1].choices[0]);
// choiceOne0.setAttribute("class", "lists");

//event listener to START code

startBtn.addEventListener("click", function() {
  init();
  setTime();
});

buttons.addEventListener("click", function() {
  init2();
});
//create functions that initiate first set of questions after start button is clicked...

function init() {
  question.firstChild.textContent = (questions[0].title);
  div2.remove();
  startBtn.remove();
  buttons.appendChild(choiceOne0);
  buttons.appendChild(choiceTwo0);
  buttons.appendChild(choiceThree0);
  buttons.appendChild(choiceFour0);
}


function init2() {

if (choiceOne0.clicked === true || choiceTwo0.clicked === true || choiceFour0.clicked === true) {
  console.log("test");
  //alert wrong answer for 1 second
  //subtract 10 seconds from the timer
  //replace html with next set of questions (function)
  replaceQuestions();
  console.log("test");
}

else if (choiceThree0.clicked === true){
  //alert correct answer 1 second
  //replace html with next set of questions (function)
  replaceQuestions();
}
}

//function to replace questions with new ones 

function replaceQuestions () {
  choiceOne0.remove();
  choiceTwo0.remove();
  choiceThree0.remove();
  choiceFour0.remove();
  buttons.appendChild(choiceOne1);
  buttons.appendChild(choiceTwo1);
  buttons.appendChild(choiceThree1);
  buttons.appendChild(choiceFour1);
}

  // question.firstChild.textContent = (questions[1].title);
  // choiceOne0.textContent = ("1. " + questions[1].choices[0]);
  // choiceOne0.setAttribute("id", "secondBtns");
  // choiceTwo0.textContent = ("2. " + questions[1].choices[1]);
  // choiceTwo0.setAttribute("id", "secondBtns");
  // choiceThree0.textContent = ("3. " + questions[1].choices[2]);
  // choiceThree0.setAttribute("id", "secondBtns");
  // choiceFour0.textContent = ("4. " + questions[1].choices[3]);
  // choiceFour0.setAttribute("id", "secondBtns");

  // create a for loop that scans the array and generates buttons 
  for (let i = 0; i < questions.length; i++) {
    var btnOption = questions[i];
    
  }