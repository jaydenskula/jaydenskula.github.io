function changeButton()
{
    // console.log("The button has been pressed");
    button.textContent = "TEST";
    button.style.backgroundColor = "blue";
    button.style.border = "5px solid purple";
}

function checkGuess()
{
    alert(userGuess.value);
}

console.log("Hello, World!");
let button = document.querySelector("#button");
// console.log(button);
button.addEventListener("click", changeButton);

let guessButton = document.querySelector(".guessSubmit");
let userGuess = document.querySelector(".guessField");
guessButton.addEventListener("click", checkGuess);