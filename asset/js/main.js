const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");
const generateBtn = document.getElementById("generate-btn");
const baseUrl = "https://api.adviceslip.com/advice";
async function getAdivce() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  displayAdvice(data.slip);
}
function displayAdvice(data) {
  adviceText.textContent = data.advice;
  adviceId.textContent = data.id;
}
generateBtn.addEventListener("click", getAdivce);
getAdivce();
