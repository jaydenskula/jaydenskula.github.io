const imgAPI = "https://random.dog/woof.json";
const quoteAPI = "https://api.quotable.io/random";

const button = document.querySelector(".button");
let quote = document.getElementById("quote");
let author = document.getElementById("author");

let c = 0;

function changeQuote()
{
	fetch(quoteAPI)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
}

function changeImage()
{
	fetch(imgAPI)
		.then(response => response.text())
		.then(data => {console.log(data)})
		.catch(error => console.error(error))
}

function quotesGenerated()
{

}

button.addEventListener("click", changeImage);
button.addEventListener("click", changeQuote);
button.addEventListener('click', () => {
    c++; 
    count.innerText = `You've generated ${c} quotes!`;
})

changeQuote(changeQuote);