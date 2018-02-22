const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myHeading.addEventListener('click', () => {
  myHeading.style.color = "red";
});

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

