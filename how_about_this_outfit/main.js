const addInfoBtn = document.querySelector(".add-info-rover-Btn");
const temperInfoText = document.querySelector(".temper-info-text");

addInfoBtn.addEventListener("mouseover", () => {
  temperInfoText.style.display = "block";
});

addInfoBtn.addEventListener("mouseout", () => {
  temperInfoText.style.display = "none";
});
