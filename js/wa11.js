const url = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
const quoteDisplay = document.querySelector("#js-quote-text");

function getQuote()
{
   fetch(url)
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's `then()` handler is called with the response.
  .then((response) => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.text(), and immediately returns the promise
    // returned by `response.text()`.
    return response.text();
  })

  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
  .then((text) => quoteDisplay.textContent = text)
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch((error) => quoteDisplay.textContent = `Could not fetch verse: ${error}`);
}

const newQuote = document.querySelector("#js-new-quote");
newQuote.addEventListener("click", getQuote);

getQuote(getQuote);