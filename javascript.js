var questions = [
  {
    title: "How many strings are in this array? fruits = ['orange', 'apple', 'watermelon', 'peaches']",
    choices: ["5", "4", "3", "2"],
    answer: "4"
  },
  {
    title: "What is the value at fruits[2]? fruits = ['orange', 'apple', 'watermelon', 'peaches']",
    choices: ["orange", "apple", "watermelon", "peaches"],
    answer: "watermelon"
  },
  {
    title: "What is the index at fruits[peaches]? fruits = ['orange', 'apple', 'watermelon', 'peaches']",
    choices: ["0", "1", "2", "3 "],
    answer: "3"
  },
  {
    title: "What type of data is within this array? fruits = ['orange', 'apple', 'watermelon', 'peaches']",
    choices: ["strings", "numbers", "boolean", "some type"],
    answer: "strings"
  },
  {
    title: "How do you add 'banana' to the end of the array? fruits = ['orange', 'apple', 'watermelon', 'peaches']",
    choices: ["fruits.remove('banana')", "fruits.shift();", "fruits.push('banana')", "fruits.push();"],
    answer: "fruits.push('banana')"
  },
]

let startButton = document.getElementById("button");
let first = document.getElementById("firstPage");
let second = document.getElementById("questionsPage");
let currentNumber=0;
let questionContainer = document.getElementById("questionsLoad");
let choices = document.getElementById("choices");
let choiceButtons = document.getElementById("button");

window.onload = function (){
  second.style.display = "none";
}

startButton.addEventListener("click", function(){
  first.style.display = "none";
  second.style.display = "block";
  enterQuestions();
})

function enterQuestions (){
    questionContainer.textContent = questions[currentNumber].title;
    choices.innerHTML='';
    for (var i = 0; i < questions[currentNumber].choices.length; i++){
      choiceButtons.setAttribute("class", "button");
      choiceButtons.setAttribute("value", questions[currentNumber].choices);
      choiceButtons.textContent = questions[currentNumber].choices;

    }

  }

// on button clicked, go to next function -> create a nextQuestion ();


// on button clicked, equate to whether the it is correct or wrong with if/else statements


//create scores


//create timers

