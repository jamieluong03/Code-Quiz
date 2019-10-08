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
    choices: ["0", "1", "2", "3"],
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
let homeButton = document.getElementById("home");
let first = document.getElementById("firstPage");
let questionContainer = document.getElementById("questionsPage");
let choices = document.getElementById("choices");
let choiceA = document.getElementById("a");
let choiceB = document.getElementById("b");
let choiceC = document.getElementById("c");
let choiceD = document.getElementById("d");
let result = document.getElementById("result");
let scoreContainer = document.getElementById("score");
let form = document.getElementById("form");
let submitButton = document.getElementById("submitButton");
let nameInput = document.querySelector("#name");
let timer = document.querySelector("#timer");
let highscore = document.getElementById("highscore");
let nameRecorded = document.getElementById("highscoreList");

let score = 0;
let currentNumber=0;
let lastQuestion = questions.length-1;
let secondsLeft = 50;
let timerInterval

let q = questions[currentNumber]
let scoresArray=localStorage.getItem("totalScore").split(",")
window.onload = function (){
  questionContainer.style.display = "none";
  choices.style.display = "none";
  form.style.display = "none";
  highscore.style.display="none";
};


startButton.addEventListener("click", function(){
  first.style.display = "none";
  questionContainer.style.display = "block";
  choices.style.display = "block";
  highscore.style.display="none";
  setTime();
  enterQuestions();
});


function setTime(){
    timerInterval = setInterval(function(){
    secondsLeft--;
    timer.innerHTML = "Timer: " + secondsLeft;

    if (secondsLeft===0){
      quizScore();
    }
  },1000);
};

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
  if (choice === questions[currentNumber].answer){
    score++;
      result.innerHTML = "Correct!";
  }
  else {
      result.innerHTML = "Wrong!";
      secondsLeft -= 5;
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
  scoreContainer.innerHTML = "Your final score is: " + secondsLeft;
  form.style.display = "block";
  clearInterval(timerInterval);
 // timer.innerHTML = "Timer: 0";
  highscore.style.display="none";
}

submitButton.addEventListener("click", function(){
  event.preventDefault();
  let name = document.querySelector("#name").value;
  localStorage.setItem("name", name);
  localStorage.setItem("score", secondsLeft);
  form.style.display="none";
  highscore.style.display="block";
  console.log(scoresArray)
  scoresArray.push([name, secondsLeft])

  //
localStorage.setItem('totalScore', scoresArray)
  //
  renderLastUser();
})

function renderLastUser (){
  var userName = localStorage.getItem("name");
  var finalScore = localStorage.getItem("score");

  //  nameRecorded.append(userName);
  console.log("score:", finalScore)
 // nameRecorded.append(sec)
  nameRecorded.append(`Name = ${userName} Score = ${finalScore}`)
  let showlist = localStorage.getItem("totalScore").split(",")
  console.log(showlist)   //[name,number,name,numbre]
   for (var i = 0; i < showlist.length; i+=2){
     console.log(i)

     nameRecorded.append(showlist[i],showlist[i+1]);
   }
}

homeButton.addEventListener("click", function(){
  window.location.reload();

;})


// content in a variable // number / string / array (list of element ) [0] [1] / loop  (for, map) // objects  // functions

// array vs ojects
var array = [3, 4, 5,6]
var array =["a", "b", "c"]   array[0]
var array =[{key:value},{},{}]


var car={

  model:"toyota",
  color:"white",
  year: "2015",
}
car.model
