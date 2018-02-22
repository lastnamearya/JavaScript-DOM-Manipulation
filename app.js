const myList = document.getElementsByTagName('li');

myList[2].style.color = "red";

for(let i = 0; i < myList.length; i++){
  myList[i].style.color = 'purple';
}

