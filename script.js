let mainEl = document.querySelector(".main");
let divEl = document.querySelector(".thank-you-state");
let ratings = document.querySelector(".ratings");
let submitBtn = document.querySelector(".submit");
let ratio = document.querySelector(".rating-ratio");

submitBtn.setAttribute("disabled", "");


let theRate;

function userRating(rating) {
    theRate = rating;
  submitBtn.removeAttribute("disabled");
}

submitBtn.addEventListener("click", function () {
  mainEl.classList.add("main-section");
  divEl.classList.remove("thankyou-section");

  ratio.textContent += `You selected ${theRate} out of 5`;
});
