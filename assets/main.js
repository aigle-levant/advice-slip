
let header = document.getElementById("header");
let quote = document.getElementById("quote");
let btn = document.getElementById("btn");

btn.addEventListener("click", randomiseAdvice);

function randomiseAdvice()
{
    fetch("https://api.adviceslip.com/advice").then(response => response.json()).then(data =>
    {
        quote.textContent = data.slip.advice;
        header.textContent = `Advice #${data.slip.id}`;
    });
}