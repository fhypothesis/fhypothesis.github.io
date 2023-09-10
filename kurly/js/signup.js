// 주소 검색 창 팝업

document.getElementById("popAddressBtn").addEventListener("click", () => {
	new daum.Postcode({
		oncomplete: (data) => {
			// 팝업에서 검색결과 항목을 클릭했을 때 실행될 코드
			const address = data.address; // 선택된 주소

			// 선택된 주소를 input 요소에 넣어주는 부분
			const addressInput = document.getElementById("addressInput");
			addressInput.value = address;

			// 주소 입력 박스 영역을 숨김 처리하고, 인풋 요소를 보이게 변경
			const popAddressBtn = document.getElementById("popAddressBtn");
			popAddressBtn.classList.add("hidden");
			popAddressBtn.classList.remove("form-input-popup-Btn");
			addressInput.classList.remove("hidden");
			addressInput.classList.add("form-input-popup-Btn-input");

			// 상세주소 입력 폼
			const addressDetailInput = document.getElementById("addressdetail");
			addressDetailInput.classList.remove("hidden");
			addressDetailInput.classList.add("form-input-popup-Btn-input");

			// formInputSpan 영역을 숨김 처리
			const formInputSpan = document.getElementById("formInputSpan");
			formInputSpan.classList.add("hidden");

			// fromInputBtn 버튼 요소를 보이게 처리
			const fromInputBtn = document.getElementById("fromInputBtn");
			fromInputBtn.classList.remove("hidden");
		}
	}).open();
});


// 재검색 버튼 누르면 주소 검색창 팝업
document.getElementById("fromInputBtn").addEventListener("click", () => {
	new daum.Postcode({
		oncomplete: (data) => {
			// 팝업에서 검색결과 항목을 클릭했을 때 실행될 코드
			const address = data.address; // 선택된 주소

			// 선택된 주소를 input 요소에 넣어주는 부분
			const addressInput = document.getElementById("addressInput");
			addressInput.value = address;

			// 주소 입력 박스 영역을 숨김 처리하고, 인풋 요소를 보이게 변경
			const popAddressBtn = document.getElementById("popAddressBtn");
			popAddressBtn.classList.add("hidden");
			popAddressBtn.classList.remove("form-input-popup-Btn");
			addressInput.classList.remove("hidden");
			addressInput.classList.add("form-input-popup-Btn-input");

			// formInputSpan 영역을 숨김 처리
			const formInputSpan = document.getElementById("formInputSpan");
			formInputSpan.classList.add("hidden");

			// fromInputBtn 버튼 요소를 보이게 처리
			const fromInputBtn = document.getElementById("fromInputBtn");
			fromInputBtn.classList.remove("hidden");
		}
	}).open();
});


// 모달창 팝업
const popTermBtn = document.querySelector(".pop-term-Btn");
const modalBg = document.getElementById("modalBg");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModalBtn");

popTermBtn.addEventListener("click", () => {
	modalBg.style.display = "flex";
	document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener("click", () => {
	closeModal();
});

modalBg.addEventListener("click", (event) => {
	if (event.target === modalBg) {
		closeModal();
	}
});

function closeModal() {
	modalBg.style.display = "none";
	document.body.style.overflow = 'auto';
}