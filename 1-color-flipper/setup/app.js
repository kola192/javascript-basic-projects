// setting variables
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

//adding event listener to the button
btn.addEventListener('click', () => {
	ranomNumber = Math.floor(Math.random() * colors.length);

	colorSpan.textContent = colors[ranomNumber];
	document.body.style.backgroundColor = colors[ranomNumber];
});

