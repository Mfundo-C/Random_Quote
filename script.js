const btnEl= document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiURL = "https://api.quotable.io/random";

async function getQuote(){

    try{  

const response = await fetch (apiURL);
const data = await response.json();
const quoteContent = data.content;
const quoteAuthor = data.author;
quoteEl.innerText = quoteContent;
authorEl.innerText = "`" + quoteAuthor;

console.log(data);


}catch(error) {
  
    quoteEl.innerText = "There was an error, please try again later";
    authorEl.innerText = "There was an error";
    btnEl.innerText = " Get a quote";
    btnEl.ariaDisabled = false;
}
}

getQuote()

    btnEl.addEventListener("click", getQuote);
