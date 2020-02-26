var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var questions = [
    "Patriots' wide receiver, #11",
    "Chiefs' QB, #15",
    "Seahawks' QB, #3",
    "Patriots' retired tight end, #87",
    "Green Bay QB, in that one State Farm commercial, #12",
    "Patriots' 6 ring QB, #12"
];
var answers = [
    "EDELMAN",
    "MAHOMES",
    "WILSON",
    "GRONKOWSKI",
    "RODGERS",
    "BRADY"
];
let initialLives = ["🧡","🧡","🧡","🧡","🧡"];
let lifeCount = 5;
let count = 0;
var answer = answers[Math.floor(Math.random() * answers.length)];
var dashes = [];
var dashesRemaining = answer.length;
let league = document.getElementById("check");
var buttonHold = document.getElementById("buttons");
var questionHold = document.getElementById("question");
var wordHold = document.getElementById("word-guess");
let incorrectHold = document.getElementById("incorrect-guess");
let lives = document.getElementById("hearts");
let b = document.querySelector("button");


console.log(answer);


// window.onload = createButtons();
// function createButtons() {
//     for (let t = 0; t < alphabet.length; t++) {
//         var btn = document.createElement("button");
//         buttonHold.appendChild(btn);
//         btn.class = "buttonsv"
//         btn.innerHTML = alphabet[t];
//         btn.id = alphabet[t];
//         console.log(btn.id);
//     };
// }


window.onload = insertQuestion();

function insertQuestion() {
    var hintIndex = answers.indexOf(answer);
    questionHold.innerHTML = (questions[hintIndex]);
}


$(".botones").click(function() {
    this.setAttribute("disabled", "");
    let findId = $(this).text().trim();
    for (let j = 0; j < answer.length; j++) { //to explain this: j is the variable of this loop, this loop steps through each letter of the "answer". For example; if the answer is Edelman, the first loop, j will equal to "E", the next time "D", and so on 
        if (answer[j] === findId) { //checks wehether the current letter we're looking at matches the anwer provided by user if it does, on line 58, we use dashes[j] to upadte the array with the current guess 
            dashes[j] = findId; //how does this [] thing work figure it out later match this with the answer the user has guessed 
            wordHold.innerHTML = dashes.join(" "); //show on screen and join with rest
            count+= 1; //this should be counting how many correct answers have been given for the win 
            console.log(count);
            dashesRemaining--; //decrement the amount left to guess 
            console.log(dashesRemaining);
            setTimeout(win, 500);
            // there's a bug in the game if I click the same letter more than once the dashes remaining amount keeps on decrementing 
        }
    }
    //decreases lives per incorrect guess made 
    let x = (answer.indexOf(findId)); //make sure you understand indexof
    if (x === -1) {
        lifeCount--;
        initialLives.pop();
        console.log(initialLives)
        lives.innerHTML = initialLives.join("");
        incorrectHold.innerHTML += (findId + " ");
        setTimeout(gameEnd, 800);  //you shouldn't use gameEnd() because then you're invoking the function, instead you need to pass it to be invoked later 
    };
});


// function to display the player hast lost 
function gameEnd() {
    if (lifeCount === 0) {
        alert("Game over!");
        location.reload();
    }
}

// to move to next question if the answer is correct 
function win(){
    if (count === answer.length){
        alert("Welcome to the league!");
        league.innerHTML = answer;
    }
}

// create the dashes for the answer 
for (let i = 0; i < answer.length; i++) {
    dashes[i] = "_";
    wordHold.innerHTML = dashes.join(" ");

}
