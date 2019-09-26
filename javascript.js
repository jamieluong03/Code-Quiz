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
  }
];

let startButton = document.getElementById("button");
let first = document.getElementById("firstPage");
let questionContainer = document.getElementById("questionsPage");
let choices = document.getElementById("choices");
let choiceA = document.getElementById("a");
let choiceB = document.getElementById("b");
let choiceC = document.getElementById("c");
let choiceD = document.getElementById("d");
let result = document.getElementById("result");
let scoreContainer = document.getElementById("score");

let score = 0;
let currentNumber=0;
let lastQuestion = questions.length-1;

let q = questions[currentNumber]

window.onload = function (){
  questionContainer.style.display = "none";
  choices.style.display = "none";
};

startButton.addEventListener("click", function(){
  first.style.display = "none";
  questionContainer.style.display = "block";
  choices.style.display = "block";
  enterQuestions();
});

function enterQuestions(){
  q = questions[currentNumber]
  questionContainer.innerHTML = currentNumber+1 + ":   " + q.title;
  choiceA.innerHTML = 'A:   '+ q.choices[0];
  choiceB.innerHTML = 'B:   '+ q.choices[1];
  choiceC.innerHTML = 'C:   '+ q.choices[2];
  choiceD.innerHTML = 'D:   '+ q.choices[3];
};

choiceA.addEventListener("click", function(){
checkAnswer(q.choices[0]);
});

choiceB.addEventListener("click", function(){
checkAnswer(q.choices[1]);
});

choiceC.addEventListener("click", function(){
checkAnswer(q.choices[2]);
});

choiceD.addEventListener("click", function(){
checkAnswer(q.choices[3]);
});


function checkAnswer(choice){
  console.log('WHAT')
  if (choice === questions[currentNumber].answer){
    score++;
    result.innerHTML = "Correct!";
  }
  else {
      result.innerHTML = "Wrong!";
  }
  if (currentNumber < lastQuestion) {
    currentNumber++;
    enterQuestions();
  }
  else {
    quizScore();
  }
};

function quizScore(){
  result.style.display="none";
  questionContainer.style.display = "none";
  choices.style.display = "none";
  scoreContainer.innerHTML = "Total Score " + score;
}


// var questions = [
//   {
//     title: "How many strings are in this array? fruits = ['orange', 'apple', 'watermelon', 'peaches']",
//     choices: ["5", "4", "3", "2"],
//     answer: "4"
//   },
//   {
//     title: "What is the value at fruits[2]? fruits = ['orange', 'apple', 'watermelon', 'peaches']",
//     choices: ["orange", "apple", "watermelon", "peaches"],
//     answer: "watermelon"
//   },
//   {
//     title: "What is the index at fruits[peaches]? fruits = ['orange', 'apple', 'watermelon', 'peaches']",
//     choices: ["0", "1", "2", "3 "],
//     answer: "3"
//   },
//   {
//     title: "What type of data is within this array? fruits = ['orange', 'apple', 'watermelon', 'peaches']",
//     choices: ["strings", "numbers", "boolean", "some type"],
//     answer: "strings"
//   },
//   {
//     title: "How do you add 'banana' to the end of the array? fruits = ['orange', 'apple', 'watermelon', 'peaches']",
//     choices: ["fruits.remove('banana')", "fruits.shift();", "fruits.push('banana')", "fruits.push();"],
//     answer: "fruits.push('banana')"
//   }
// ];

// let startButton = document.getElementById("button");
// let first = document.getElementById("firstPage");
// let questionContainer = document.getElementById("questionsPage");
// let choices = document.getElementById("choices");
// let choiceA = document.getElementById("a");
// let choiceB = document.getElementById("b");
// let choiceC = document.getElementById("c");
// let choiceD = document.getElementById("d");
// let result = document.getElementById("result");
// let scoreContainer = document.getElementById("score");

// let score = 0;
// let currentNumber=0;
// let lastQuestion = questions.length-1;

// window.onload = function (){
//   questionContainer.style.display = "none";
//   choices.style.display = "none";
// };

// startButton.addEventListener("click", function(){
//   first.style.display = "none";
//   questionContainer.style.display = "block";
//   choices.style.display = "block";
//   enterQuestions();
// });

//   choiceA.addEventListener("click", function(){
//   checkAnswer(q.choices[0]);
//   });

//   choiceB.addEventListener("click", function(){
//   checkAnswer(q.choices[1]);
//   });

//   choiceC.addEventListener("click", function(){
//   checkAnswer(q.choices[2]);
//   });

//   choiceD.addEventListener("click", function(){
//   checkAnswer(q.choices[3]);
//   });


// function enterQuestions(){
//   let q = questions[currentNumber]
//   questionContainer.innerHTML = currentNumber+1 + ":   " + q.title;
//   choiceA.innerHTML = 'A:   '+ q.choices[0];
//   choiceB.innerHTML = 'B:   '+ q.choices[1];
//   choiceC.innerHTML = 'C:   '+ q.choices[2];
//   choiceD.innerHTML = 'D:   '+ q.choices[3];
// };


// function checkAnswer(choice){
//   if (choice === questions[currentNumber].answer){
//     score ++;
//       result.innerHTML = "Correct!";
//   }
//   else {
//       result.innerHTML = "Wrong!";
//   }
//   if (currentNumber < lastQuestion) {
//     currentNumber++;
//     enterQuestions();
//   }
//   else {
//     quizScore();
//   }
// };

// function quizScore(){
//   result.style.display="none";
//   questionContainer.style.display = "none";
//   choices.style.display = "none";
//   scoreContainer.innerHTML = "Total Score " + score;
// }