const imgAPI = "https://random.dog/";
const quoteAPI = "https://type.fit/api/quotes"


function changeImage()
{
	fetch(imgAPI)
	.then(response => response.changeImage())
	.then(data => console.log(data));
}

const button = document.querySelector(".button");
button.addEventListener("click", changeImage);