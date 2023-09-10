document.addEventListener("DOMContentLoaded", () => {
  const buttonNext = document.querySelector(".swiper-button-next"); // "다음" 버튼 요소를 선택합니다.
  const buttonPrev = document.querySelector(".swiper-button-prev"); // "이전" 버튼 요소를 선택합니다.

  const swiper = new Swiper(".swiper-container", {
    // Swiper 초기화 및 옵션 설정
    direction: "horizontal", // 슬라이드 방향을 가로로 변경합니다.
    loop: true, // 무한 루프를 활성화합니다.

    // 네비게이션 화살표 설정
    navigation: {
      nextEl: ".swiper-button-next", // "다음" 버튼의 요소를 지정합니다.
      prevEl: ".swiper-button-prev", // "이전" 버튼의 요소를 지정합니다.
    },
  });

  buttonNext.addEventListener("click", () => {
    swiper.slideNext(); // "다음" 버튼을 클릭하면 다음 슬라이드로 이동합니다.
  });
});
