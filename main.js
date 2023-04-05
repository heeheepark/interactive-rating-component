let resultScore = document.getElementById('resultScore');
let selectValue = 0;

let submitBtn = document.getElementById('submitBtn');
submitBtn.textContent = submitBtn.textContent.toUpperCase();

submitBtn.addEventListener("click", function() {
  if(selectValue != "0") {
    document.getElementsByClassName('feedback')[0].style.display = "none";
    document.getElementsByClassName('result')[0].style.display = "flex";
  } else {
    alert('점수를 선택해주세요.');
  }
})


let scoreValue = document.querySelectorAll('li');

for (let i = 0; i < scoreValue.length; i++) {
  scoreValue[i].addEventListener("click", (value) => {
    selectValue = value.target.textContent;
    resultScore.textContent = selectValue;
    if(scoreValue[i].textContent == value.target.textContent) {
      for(let j = 0; j < scoreValue.length; j++) {
        scoreValue[j].style.backgroundColor = "hsl(211, 19%, 24%)"
        scoreValue[j].style.color = "#8e94a8";
      }
      scoreValue[i].style.backgroundColor = "hsl(217, 12%, 63%)"
      scoreValue[i].style.color = "#fff"
    }
  })
}


