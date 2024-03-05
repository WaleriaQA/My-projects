const items = document.querySelectorAll(".countdown-item > h4");

const countdownElement = document.querySelector(".countdown");

//Nazna4aem datu otscheta
let countdownDate = new Date(2025, 11, 24, 10, 37, 0).getTime();

function getCountTime() {
  const now = new Date().getTime();
  const difference = countdownDate - now;
  //1 s= 1000 ms
  //1 m= 60 s
  //1 h= 60 m
  //1 d= 24h
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(difference / oneDay);
  let hours = Math.floor((difference % oneDay) / oneHour);
  let minutes = Math.floor((difference % oneHour) / oneMinute);
  let seconds = Math.floor((difference % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  items.forEach(function (item, index) {
    item.textContent = values[index];
  });
  if (difference < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "<h4 class='expired'>The time is out!</h4>";
  }
}
let countdown = setInterval(getCountTime, 1000);
getCountTime();
