"use strict";

var header = document.getElementById("header");
var quote = document.getElementById("quote");
var btn = document.getElementById("btn");
btn.addEventListener("click", randomiseAdvice);

function randomiseAdvice() {
  fetch("https://api.adviceslip.com/advice").then(function (response) {
    return response.json();
  }).then(function (data) {
    quote.textContent = data.slip.advice;
    header.textContent = "Advice #".concat(data.slip.id);
  });
}