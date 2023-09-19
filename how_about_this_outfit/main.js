const addInfoBtn = document.querySelector(".add-info-rover-Btn");
const temperInfoText = document.querySelector(".temper-info-text");

addInfoBtn.addEventListener("mouseover", () => {
  temperInfoText.style.display = "block";
});

addInfoBtn.addEventListener("mouseout", () => {
  temperInfoText.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  let threeDayLater = new Date();
  threeDayLater.setDate(threeDayLater.getDate() + 3);
  let threeDayLaterString = threeDayLater.toISOString().split("T")[0];

  let oneWeekLater = new Date();
  oneWeekLater.setDate(oneWeekLater.getDate() + 10);
  let oneWeekLaterString = oneWeekLater.toISOString().split("T")[0];

  const dateInput = document.getElementById("date-input");
  const submitButton = document.getElementById("submit-button");

  // 로컬 스토리지 또는 세션 스토리지에서 저장된 값을 가져와서 설정
  const storedValue = localStorage.getItem("selectedDate");
  if (storedValue) {
    dateInput.value = storedValue;
  } else {
    dateInput.value = threeDayLaterString;
  }

  dateInput.setAttribute("min", threeDayLaterString);
  dateInput.setAttribute("max", oneWeekLaterString);

  // 서브밋 버튼을 클릭할 때
  submitButton.addEventListener("click", function (event) {
    // 선택한 값을 로컬 스토리지에 저장
    localStorage.setItem("selectedDate", dateInput.value);
  });

  dateInput.addEventListener("input", function () {
    // 사용자가 입력한 값을 value 속성에 설정
    dateInput.setAttribute("value", dateInput.value);
  });
});