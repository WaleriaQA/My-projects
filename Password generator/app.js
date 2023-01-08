// Create Input
// Add class
// Add placeholder
// Reset default input behavior
// Add a click handler
// Add button Copy
// Add button Generate
// Create a function of password generation

const mainEl = document.querySelector(".main");

const passwordEl = document.createElement("input");
passwordEl.classList.add("password");
passwordEl.setAttribute("placeholder", "Generate password");
passwordEl.addEventListener("keypress", (e) => {
  e.preventDefault();
});
passwordEl.addEventListener("focus", (e) => {
  navigator.clipboard.writeText(passwordEl.value);
});

const copyBtn = document.createElement("button");
copyBtn.classList.add("password-button");
copyBtn.innerText = "Copy";
copyBtn.addEventListener("click", (e) => {
  //Select the textfield, Copy the text inside the text field
  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999); //For mobile devices
  navigator.clipboard.writeText(passwordEl.value);
});

const generateBtn = document.createElement("button");
generateBtn.classList.add("password-button");
generateBtn.innerText = "Generate";
generateBtn.addEventListener("click", (e) => {
  // wizow funk gen parolja
  let password = generatePassword(12);
  passwordEl.value = password;
});

function generatePassword(passwordLength) {
  const numberChars = "0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const symbolChars = "!@#$%^&*()_+";
  const allChars = numberChars + upperChars + lowerChars + symbolChars;

  let randomString = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length);
    randomString += allChars[randomNumber];
  }
  return randomString;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);
