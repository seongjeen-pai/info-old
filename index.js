var timerId; // 타이머 ID를 저장할 변수

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomStyle() {
  var elements = document.querySelectorAll('.container, .header, .ol, .ol2, #name, #name2, #li1, #li2, #li3, #li4, #li5, #li6, #li7, #li8, #li9, #li10, #li11, #li12, #li13, #li14, #li15, #li16, #li17, #li18, #li19, #li20, #li21, #li22');

  var randomBackgroundColor = getRandomColor();
  var randomFontColor = getRandomColor();

  elements.forEach(function(element) {
    element.style.backgroundColor = randomBackgroundColor;
    element.style.borderColor = randomFontColor;
    element.style.color = randomFontColor;
  });

  // body에도 스타일 적용
  document.body.style.backgroundColor = randomBackgroundColor;
  document.body.style.color = randomFontColor;

  clearTimeout(timerId); // 이전 타이머 해제
  timerId = setTimeout(setRandomStyle, 10000); // 새로운 타이머 등록
}

// 초기 호출
setRandomStyle();