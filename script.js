const ratingBtns = document.querySelectorAll(".rate-btn");
const submitBtn = document.querySelector(".submit-btn");
const selectedRate = document.querySelector(".selected-rate");
const boxContainer = document.querySelector(".box-container");
const thanksBox = document.querySelector(".thanks-box");
console.log(thanksBox);

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedRate.textContent = btn.id;

    ratingBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    btn.classList.add("selected");
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedRate.textContent === "") {
    return;
  } 
    boxContainer.style.display = "none";
    thanksBox.style.display = "flex";
  
});
