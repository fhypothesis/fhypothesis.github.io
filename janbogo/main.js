document.addEventListener("DOMContentLoaded", () => {
  const btnCate = document.querySelector(".btn-cate");
  const boxCategory = document.getElementById("box-category"); // ID

  btnCate.addEventListener('click', () => {
    const boxCategoryStyle = window.getComputedStyle(boxCategory);
    const displayValue = boxCategoryStyle.getPropertyValue("display");

    if (displayValue === "none") {
      boxCategory.style.display = "block";
      btnCate.style.color = "#e66325";
      btnCate.style.fontWeight = '600';
      btnCate.classList.add("clicked");
    } else {
      boxCategory.style.display = "none";
      btnCate.style.color = "black";
      btnCate.style.fontWeight = "normal";
      btnCate.classList.remove("clicked");
    }
  });

  // 다른 영역을 클릭하면 boxCategory를 숨김
  document.addEventListener('click', (event) => {
    let targetElement = event.target;
    let isBoxCategoryClicked = false;

    while (targetElement !== null) {
      if (targetElement === boxCategory || targetElement === btnCate) {
        isBoxCategoryClicked = true;
        break;
      }
      targetElement = targetElement.parentElement;
    }

    if (!isBoxCategoryClicked) {
      boxCategory.style.display = "none";
      btnCate.style.color = "black";
      btnCate.style.fontWeight = "normal";
      btnCate.classList.remove("clicked");
    }
  });
});
