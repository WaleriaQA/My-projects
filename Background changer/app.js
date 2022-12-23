const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
	let hexColor = generateHex();
	document.body.style.backgroundColor = hexColor[1];
	color.textContent = hexColor[0];
});

function generateHex() {

	const newObject = {
		Aqua: "#00ffff",
		Gray: "#808080",
		Navy: "#000080",
		Green: "#008000",
		Olive: "#808000",
		Fuchsia: "#ff00ff	",
		Purple: "#800080",
		Deeppink: "#FF1493",
		BlueViolet: "#8A2BE2"
	};

	const colorArr = Object.entries(newObject);
	return colorArr[Math.round(Math.random() * (colorArr.length - 1))];
}