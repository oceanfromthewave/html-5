const calcBody = document.querySelectorAll(".calc-body");
const calcValue = document.querySelector(".calc-value");

function renderNumber(number) {
  if (calcValue) {
    calcValue.textContent = number;
  }
}

function handleClickBtn(e) {
  const { value } = e.target;
  console.log("clicked button:", value);
}

function init() {
  // calcBody 안에 있는 버튼에 클릭 이벤트 위임

  calcBody.forEach((button) => {
    button.addEventListener("click", handleClickBtn);
  });

  // 초기 계산기 출력 값 0
  renderNumber(0);
}

// 초기 진입점
init();
