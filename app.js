// First get the Hide List Button which will toggle our List
const toggleList = document.getElementById('toggleList');

// Second, get the List which we want to toggle Completely
const listDiv = document.querySelector('.list');

// Now, Select the Input Element
const descriptionInput = document.querySelector('input.description');

// Paragraph Element i.e going to mutate
const descriptionP = document.querySelector('p.description');

// Button for Changing the List Description
const descriptionButton = document.querySelector('button.description');

const listUl = listDiv.querySelector('ul');

// Input for adding a new list item by user
const addItemInput = document.querySelector('input.addItemInput');

// Button for adding a new list item
const addItemButton = document.querySelector('button.addItemButton');

// All List Items
const listItems = document.getElementsByTagName('li');

// Using .parentNode property to hide all the list items
listUl.addEventListener('click', (event) => {
  if(event.target.tagName == 'BUTTON') {
    // Li is the parent of the button, we can use button's parentNode property to refer it
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});

// ******************************************* //

// On Clicking the first Button i.e ToggleList Button, Event fires up
toggleList.addEventListener('click', () => {
  
  if (listDiv.style.display == "none") {
      toggleList.textContent = "Hide List";
      listDiv.style.display = 'block';
  } else {
      toggleList.textContent = "Show List";
      listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ":";
  descriptionInput.value = '';
});

// Event Listener for our add new List Item Button
addItemButton.addEventListener('click', () => {
  // let ul = document.querySelector('ul');
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  // Now after adding the input 'li' element, it's better to clear our input box
  addItemInput.value = '';
});

