'use strict';
// Adding Music to the background
window.addEventListener("DOMContentLoaded", event => {
    let mainAudio = new Audio("Sound/Powerful-Trap-.mp3");
    mainAudio.volume = 0.1;
    mainAudio.play();
})

let score = 20
let currentHighScore = 0;
let tempHighScore = 20;
let buttonCheck = document.querySelector(".check");
let gameon = true;
let randomNumber = Math.floor((Math.random() * 20) + 1); 


buttonCheck.addEventListener("click", function(){
    let sound = new Audio("Sound/wrong.mp3");
    sound.volume = 0.1;
    let numberGuessed = Number(document.querySelector(".guess").value);
    if(score != 0) {
        if (numberGuessed != randomNumber){
            document.body.style.backgroundColor = "#FF3442";
            setTimeout(function(){
                document.body.style.backgroundColor = "#222";
            }, 300)
            sound.play();
            score--;
            tempHighScore--;
            document.querySelector(".score").textContent = score
            if(numberGuessed > randomNumber){
                document.querySelector(".message").textContent = "📈 Your Guess is high!"
            } else { 
                document.querySelector(".message").textContent = "📉 Your Guess is low!"
            } 
        }else {
            document.querySelector(".message").textContent = "🎉 Correct Number!";
            document.body.style.backgroundColor = "#00E277";
            document.querySelector(".btncheck").disabled = true;
            if(tempHighScore > currentHighScore){
                document.querySelector(".highscore").textContent = tempHighScore;
                currentHighScore = tempHighScore;
            } else {
                document.querySelector(".highscore").textContent = currentHighScore;

            }
        }
    } else {
        document.querySelector("h1").textContent = "😩 Game Over!"
        document.body.style.backgroundColor = "#FF3442";
    }
    
});

document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    tempHighScore = 20;
    randomNumber = Math.floor((Math.random() * 20) + 1); 
    document.querySelector("h1").textContent = "Guess My Number!";
    document.querySelector(".message").textContent = "Start guessing...";
    document.body.style.backgroundColor = "#222";
    document.querySelector(".score").textContent = score;
    document.querySelector(".highscore").textContent = currentHighScore;
    document.querySelector(".guess").value = "";
    document.querySelector(".btncheck").disabled = false;

})