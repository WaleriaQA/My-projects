const mainEl = document.querySelector(".main");
const wrapper = document.createElement("div");

//Create a form
//Create an input
//Create a Search button

//Add input and button to the form
//Add form to main

//Add to all those elements necessary attributes and classes

//Write a function for card creation
//Write a function for card removing

const formEl = document.createElement("form");
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputsValue = Object.fromEntries(new FormData(e.target));
  const response = await fetch(`
https://api.github.com/users/${inputsValue.name}`);

  if (response.ok) {
    const data = await response.json();

    wrapper.innerHTML = "";

    wrapper.append(createProfileEl(data));
    mainEl.append(wrapper);

    inputEl.value = "";
  } else {
    alert("The user is not found");
  }
});

const inputEl = document.createElement("input");
inputEl.classList.add("search-input");
inputEl.setAttribute("name", "name");

const searchButtonEl = document.createElement("button");
searchButtonEl.classList.add("search-button");
searchButtonEl.setAttribute("type", "submit");
searchButtonEl.innerHTML = "Search";

formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
mainEl.appendChild(formEl);

function createProfileEl(profileData) {
  const element = document.createElement("div");
  element.classList.add("profile");

  element.innerHTML = `
  <img class="search-image" src=${profileData.avatar_url}></img> 
  <p class="search-text"><span>Name: </span>${profileData.name || "No info"}</p>
    <p class="search-text"><span>City: </span>${
      profileData.location || "No info"
    }</p>
    <p class="search-text"><span>About: </span>${
      profileData.bio || "No info"
    }</p>
  `;

  element.appendChild(createDeleteBtnEl());
  return element;
}

function createDeleteBtnEl() {
  const element = document.createElement("button");
  element.classList.add("close-button");
  element.innerText = "Close";
  element.addEventListener("click", (e) => {
    wrapper.innerHTML = "";
  });
  return element;
}
