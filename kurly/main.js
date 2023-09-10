const categoryBtn = document.getElementById('categoryBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

function showDropdownMenu() {
  dropdownMenu.style.display = 'block';
}

function hideDropdownMenu() {
  dropdownMenu.style.display = 'none';
}

function keepDropdownMenu() {
  dropdownMenu.style.display = 'block';
}

categoryBtn.addEventListener('mouseenter', showDropdownMenu);
categoryBtn.addEventListener('mouseleave', hideDropdownMenu);

dropdownMenu.addEventListener('mouseenter', keepDropdownMenu);
dropdownMenu.addEventListener('mouseleave', hideDropdownMenu);


// 메뉴바 고정
const menuBox = document.querySelector(".main-menu-box-wrapper");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    menuBox.classList.add("fixed");
  } else {
    menuBox.classList.remove("fixed");
  }
});