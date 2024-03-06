"use strict";

let inptElemnt = document.querySelector(".input-el");
let add = document.querySelector(".button");
let ulEl = document.querySelector(".ul-list");
let clearAll = document.querySelector(".clearAll");
let form = document.querySelector(".form-el");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let value = inptElemnt.value;

  if (value.trim() === "") {
    return;
  }

  let li = document.createElement("li");
  li.textContent = value;

  let icon = document.createElement("i");
  icon.classList.add("fas", "fa-trash-alt");

  icon.style.border = "none";
  icon.style.margin = "0";

  li.appendChild(icon);

  li.addEventListener("click", function () {
    li.remove();
  });

  ulEl.appendChild(li);

  inptElemnt.value = " ";
});

clearAll.addEventListener("click", function () {
  ulEl.innerHTML = " ";
});
