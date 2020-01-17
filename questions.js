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

//grab elements that we are working with and store to a div

var clearBtn = document.querySelector("#clearBtn");
var startBtn = document.querySelector("#startBtn");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var buttons = document.querySelector("#buttons");

//add event listeners for buttons


startBtn.addEventListener("click", function() {
  firstQuestion();
});

//create functions that allow us to pull the set of question.choices.answers that we need based on above click..

function firstQuestion () {
  question.firstChild.textContent = (questions[0].title);
  choices.remove();
  startBtn.replaceWith(questions[0].choices[0]);


}

// question.firstChild.textContent = 