const imgAPI = "https://random.dog/woof.json";
const quoteAPI = "https://api.quotable.io/random";

const button = document.querySelector(".button");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let image = document.getElementById("image");

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
		.then(response => response.json())
		.then((item) => 
			image.innerText = item.url)
		.catch(error => console.error(error));
}

button.addEventListener("click", changeImage);
button.addEventListener("click", changeQuote);
button.addEventListener('click', () => {
    c++; 
    count.innerText = `You've generated ${c} quotes!`;
})

changeQuote(changeQuote);