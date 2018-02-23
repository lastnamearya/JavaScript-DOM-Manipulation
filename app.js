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

// Input for adding a new list item by user
const addItemInput = document.querySelector('input.addItemInput');

// Button for adding a new list item
const addItemButton = document.querySelector('button.addItemButton');

// ******************************************* //

// On Clicking the first Button i.e ToggleList Button, Event fires up
toggleList.addEventListener('click', () => {
  
  if (listDiv.style.display == "none") {
    debugger;
      toggleList.textContent = "Hide List";
      listDiv.style.display = 'block';
  } else {
    debugger;
      toggleList.textContent = "Show List";
      listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ":";
});

// Event Listener for our add new List Item Button
addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
});