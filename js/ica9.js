function changeRed()
{
    redBox.style.backgroundColor = "red";
}

function changeOrange()
{
    orangeBox.style.backgroundColor = "orange";
}

function changeYellow()
{
    yellowBox.style.backgroundColor = "yellow";
}

function changeGreen()
{
    greenBox.style.backgroundColor = "Green";
}

function changeBlue()
{
    blueBox.style.backgroundColor = "blue";
}

function changePurple()
{
    purpleBox.style.backgroundColor = "purple";
}

function revert()
{
    redBox.style.backgroundColor = "black";
    orangeBox.style.backgroundColor = "black";
    yellowBox.style.backgroundColor = "black";
    greenBox.style.backgroundColor = "black";
    blueBox.style.backgroundColor = "black";
    purpleBox.style.backgroundColor = "black";
}

let redBox = document.querySelector(".red");
redBox.addEventListener("mouseover", changeRed);
redBox.addEventListener("mouseout", revert);

let orangeBox = document.querySelector(".orange");
orangeBox.addEventListener("mouseover", changeOrange);
orangeBox.addEventListener("mouseout", revert);

let yellowBox = document.querySelector(".yellow");
yellowBox.addEventListener("mouseover", changeYellow);
yellowBox.addEventListener("mouseout", revert);

let greenBox = document.querySelector(".green");
greenBox.addEventListener("mouseover", changeGreen);
greenBox.addEventListener("mouseout", revert);

let blueBox = document.querySelector(".blue");
blueBox.addEventListener("mouseover", changeBlue);
blueBox.addEventListener("mouseout", revert);

let purpleBox = document.querySelector(".purple");
purpleBox.addEventListener("mouseover", changePurple);
purpleBox.addEventListener("mouseout", revert);

function checkGuess()
{
    alert(userGuess.value);
}

let guessButton = document.querySelector(".guessSubmit");
let userGuess = document.querySelector(".guessField");
guessButton.addEventListener("click", checkGuess);

function changeButton()
{
    button.style.backgroundColor = "white";
    button.style.color = "black";
    button.textContent = "Hello!";
}

let button = document.querySelector(".button");
button.addEventListener("click", changeButton);

function changeButton2()
{
    button2.style.backgroundColor = "White";
    button2.style.color = "black";
    button2.textContent = "Watch Arcane on Netflix it's really fucking good I promise";
}

let button2 = document.querySelector(".button2");
button2.addEventListener("click", changeButton2);