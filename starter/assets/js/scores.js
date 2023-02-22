//local storage . save high scores
var highScore =localStorage.getItem("highScore");
var name =localStorage.getItem("name");
document.getElementById("highscores").innerHTML =
`<ol>
 <li> ${userInitials} - ${highScore}</li>
 </ol>
 `;




 function clear() {
    document.getElementById("highscores").innerHTML ="";
    localStorage.clear();
 }