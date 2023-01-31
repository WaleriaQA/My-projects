const notesEl = document.querySelector(".notes");
const addBtn = document.querySelector(".note-add");

// 1) Write a function createNote
// 2) Add button and handler on adding the card
// 3) Add styles
// 4) Make the redaction possible

function createNote(title, text) {
	const noteEl = document.createElement("div");
	noteEl.classList.add("note"); // adding a style
	noteEl.innerHTML = `

  <button class="note-edit"><i class="fa-solid fa-cat"></i></button>
  <button class="note-delete"><i class="fa-solid fa-trash"></i></button>

  <div class="note-header">   
  <p class="note-title">${title}</p>
  <textarea class="hidden note-title-input">${title}</textarea>
  </div>
  <div class = "txt">
  <p class="note-text">${text}</p>
  <textarea class="note-textarea hidden">${text}</textarea>
  </div>  
  `;

	//lowim knopki, naweschiwaem obrabotchiki dlja edit i delete

	const editBtn = noteEl.querySelector(".note-edit");
	const deleteBtn = noteEl.querySelector(".note-delete");
	const titleEl = noteEl.querySelector(".note-title");
	const textEl = noteEl.querySelector(".note-text");
	const titleInputEl = noteEl.querySelector(".note-title-input");
	const textInputEl = noteEl.querySelector(".note-textarea");

	editBtn.addEventListener("click", (e) => {
		titleEl.classList.toggle("hidden"); // dobawlenie i udalenie klassow
		textEl.classList.toggle("hidden");
		titleInputEl.classList.toggle("hidden");
		textInputEl.classList.toggle("hidden");
		titleInputEl.textContent = "";
		textInputEl.textContent = "";
		titleInputEl.placeholder = "Header";
		textInputEl.placeholder = "Your text";
	});
	deleteBtn.addEventListener("click", (e) => {
		noteEl.remove(); //udalit opredelennij dom uzel
	});

	titleInputEl.addEventListener("input", (e) => {
		titleEl.innerText = e.target.value; // tut lezhit zna4enie na to, 4to wwodim pri inpute
	}); //naweschiwaem obrabot4iki na textarea
	textInputEl.addEventListener("input", (e) => {
		textEl.innerText = e.target.value;
	}); //naweschiwaem obrabot4iki na textarea
	return noteEl;
}

addBtn.addEventListener("click", (e) => {
	const el = createNote("Header", "Your text"); //wiziwaet funkciju createNote
	notesEl.append(el);
});