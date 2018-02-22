const myHeading = document.getElementById('myHeading');

myHeading.addEventListener('click', () => {
  if(myHeading.style.color == "black") {
    myHeading.style.color = "red";
  } else {
    myHeading.style.color = "black";
  }
});