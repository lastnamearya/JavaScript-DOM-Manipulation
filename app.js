const myHeading = document.getElementsByTagName('h1');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  // Here myHeading is a collection
  myHeading[0].style.color = myTextInput.value;
});

