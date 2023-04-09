const imgAPI = "https://v2.jokeapi.dev/joke/Any?safe-mode";
const quoteAPI = "https://api.quotable.io/random";

const newQuote = document.querySelector(".newQuote");
let quote = document.getElementById("quote");
let author = document.getElementById("author");

const joke = document.querySelector(".newJoke");
let setup = document.getElementById("setup");
let delivery = document.getElementById("delivery");

const image = document.querySelector(".showImage");

let q = 0;
let j = 0;

function showImage()
{
fetch('https://random.dog/c4fa1019-1817-41fb-baa2-a509f084671e.jpg')
  .then(response => response.blob())
  .then(blob => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
  });
}

function changeQuote()
{
	fetch(quoteAPI)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    })
	.catch(error => console.error(error));
}

function newJoke()
{
	fetch(imgAPI)
		.then(response => response.json())
		.then((item) => {
			setup.innerText = item.setup;
			delivery.innerText = item.delivery;
		})
		.catch(error => console.error(error));
}

joke.addEventListener("click", newJoke);
joke.addEventListener('click', () => {
    j++; 
    jokesCount.innerText = `You've generated ${j} jokes!`;
})


newQuote.addEventListener("click", changeQuote);
newQuote.addEventListener('click', () => {
    q++; 
    quotesCount.innerText = `You've generated ${q} quotes!`;
})

image.addEventListener("click", showImage);

changeQuote(changeQuote);
newJoke(newJoke);