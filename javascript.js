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
let questionContainer = document.getElementById("questionsPage");
let choices = document.getElementById("choices");
let choiceA = document.getElementById("a");
let choiceB = document.getElementById("b");
let choiceC = document.getElementById("c");
let choiceD = document.getElementById("d");

let score = 0;
let currentNumber=0;
let lastQuestion = questions.length-1;

window.onload = function (){
  questionContainer.style.display = "none";
  choices.style.display = "none";
}

startButton.addEventListener("click", function(){
  first.style.display = "none";
  questionContainer.style.display = "block";
  choices.style.display = "block";
  enterQuestions();
});

choiceA.addEventListener("click", function(){
  checkAnswer('a');
});

choiceB.addEventListener("click", function(){
  checkAnswer('b');
});

choiceC.addEventListener("click", function(){
  checkAnswer('c');
});

choiceD.addEventListener("click", function(){
  checkAnswer('d');
});

function enterQuestions(){
  let q = questions[currentNumber]
  questionContainer.innerHTML = ''+ q.title + '';
  choiceA.innerHTML = ''+ q.choices[0]+'';
  choiceB.innerHTML = ''+ q.choices[1]+'';
  choiceC.innerHTML = ''+ q.choices[2]+'';
  choiceD.innerHTML = ''+ q.choices[3]+'';
};

function checkAnswer(answer){
  if (answer === questions[currentNumber].answer){
    score ++;
  }
  else {
    score;
  }
  if (currentNumber < lastQuestion) {
    currentNumber++;
    enterQuestions();
  }
};


//onclick="checkAnswer('A')"

// function enterQuestions(){
//   questionContainer.textContent = questions[0].title;
//   choices.textContent = questions[0].choices;
// };



// function enterQuestions (){
//     questionContainer.textContent = questions[currentNumber].title;
//     choices.innerHTML='';
//     for (var i = 0; i < questions[currentNumber].choices.length; i++){
//       let choiceButtons = document.createElement("button");
//       choiceButtons.setAttribute("class", "button");
//       choiceButtons.setAttribute("value", questions[i].choices);
//       choiceButtons
//       choices.appendChild(choiceButtons);

//     }

//   }

// on button clicked, go to next function -> create a nextQuestion ();


// on button clicked, equate to whether the it is correct or wrong with if/else statements


//create scores


//create timers

