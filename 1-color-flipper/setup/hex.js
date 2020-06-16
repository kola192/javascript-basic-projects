// setting variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

//adding event listener to the button
btn.addEventListener('click', () => {
	let hexColor = '#';
	//looping in hex array 6 times to make the color
	for(let i=0;i<6;i++) {
		hexColor += hex[getRandomNumber()];
		}

	colorSpan.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
});

//getRandomNumber function
function getRandomNumber() {
	return Math.floor(Math.random() * hex.length);
};