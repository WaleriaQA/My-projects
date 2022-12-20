const button = document.getElementById("btn");
const color = document.querySelector(".color");

const colors = [
  "Darkblue",
  "Purple",
  "Deeppink",
  "Orangered",
  "Yellow",
  "Green",
];

// const norm = [ 
//   "Darkblue",
//   "Purple",
//   "Deeppink",
//   "Orangered",
//   "Yellow",
//   "Green",
//   "Purple",
//   "Deeppink",
//   "Orangered",
//   "Yellow",
//   "Green",
//   "Green",
//   "Purple",
//   "Deeppink",
//   "Orangered",
//   "Yellow",
// ];

button.addEventListener("click", () => {
  let normColor = colors[getRandomNumber()];
  document.body.style.backgroundColor = normColor;
  color.textContent = normColor;
});

// function generateNorm() {
//     let normColor = "pink";
//     for (let i = 0; i < 6; i++) {
//         normColor += norm[getRandomNumber()]
//     }
//     return normColor;
// }

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
