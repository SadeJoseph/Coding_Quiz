//global variables 
var timer ='';
var score=0;
var time =74;

// reveal start of quiz .referencd variabels
 document.getElementById("start").addEventListener("click",startQuiz)
 var reveal =document.getElementById("questions");
 var count = document.getElementById("time");

//startQuiz first question
 function startQuiz() {
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").innerHTML= 
  `<div class= "quiz">
  <h2> What is the right way to write a JavaScript array? </h2>
  <button onclick="incorrectAnswer()" > var fruit = "orange", "apple", "banana" </button>
  <button onclick="correctAnswer()" > var fruit = ["orange", "apple", "banana"] </button>
  <button onclick="incorrectAnswer()" > var fruit = ("orange", "apple", "banana) </button>
  <button onclick="incorrectAnswer()" > var fruit = 1.orange, 2.apple, 3.banana </button>
  </div> `;
  reveal.classList.remove("hide");


  timer=setInterval (function () [
    counting.innerText =time ;
    console.log(time);
    time--;
    

    if (time<0) {
        clearTimeout(timer);
        outOfTime();
    }
}, 1000;

//correct nanswers result in score +15 score - add html to dom
 function correctAnswer (){
    score +=15;
    document.getElementById ("questions").innerHTML =
    `<div class= "quiz">
    <h2>  How do you declare a Javascript variable? </h2>
    <button onclick="nextCorrectAnswer()" > var foodItem </button>
    <button onclick="nextIncorrectAnswer()" > variable foodItem</button>
    <button onclick="nextIncorrectAnswer()" > var=fooditem </button>
    </div> `;
 }
 //incorrect answers = decrese in time by 15 seconds
 function incorrectAnswer () {
    time-=15;
    document.getElementById ("questions").innerHTML =
    `<div class= "quiz">
    <h2>  How do you declare a Javascript variable? </h2>
    <button onclick="nextCorrectAnswer()" > var foodItem </button>
    <button onclick="nextIncorrectAnswer()" > variable foodItem</button>
    <button onclick="nextIncorrectAnswer()" > var=fooditem </button>
    </div> `;

 }

 // penultimate question 

 function nextCorrectAnswer () {
    score +=15;
    document.getElementById ("questions").innerHTML =
    `<div class= "quiz">
    <h2> Inside what HTML element do we insert Javascript  </h2>
    <button onclick="penultimateInorrectAnswer()" > <JavaScript> </button>
    <button onclick="penultimateIncorrectAnswer()" > <js> /button>
    <button onclick="penultimateCorrectAnswer()" > <script> </button>
    </div> `;

 }


 function nextIncorrectAnswer () {
    time -=15;
    document.getElementById ("questions").innerHTML =
    `<div class= "quiz">
    <h2> Inside what HTML element do we insert Javascript  </h2>
    <button onclick="penultimateInorrectAnswer()" > <JavaScript> </button>
    <button onclick="penultimateIncorrectAnswer()" > <js> /button>
    <button onclick="penultimateCorrectAnswer()" > <script> </button>
    </div> `;




// last question 

function penultimateCorrectAnswer () {
    score +=15;
    document.getElementById ("questions").innerHTML =
    `<div class= "quiz">
    <h2>  How do we start a while loop </h2>
    <button onclick="lastCorrectAnswer()" > while (i<=55) </button>
    <button onclick="lasIncorrectAnswer()" > while i =1 to 55</button>
    <button onclick="lastIncorrectAnswer()" > while (i <= 55, i++) </button>
    </div> `;


    function penultimateIncorrectAnswer () {
        time -=15;
        document.getElementById ("questions").innerHTML =
        `<div class= "quiz">
        <h2>  How do we start a while loop </h2>
        <button onclick="lastCorrectAnswer()" > while (i<=55)  </button>
        <button onclick="lastIncorrectAnswer()" > while i =1 to 55</button>
        <button onclick="lastIncorrectAnswer()" > while (i <= 55, i++)  </button>
        </div> `;

    // last answer store , local storage 

    
//end game when time runs out


// final score 


 // quesstions
// how do you declare a javascript variable ? - done , indside which html element do we put the javascript?, how do we start a while loop