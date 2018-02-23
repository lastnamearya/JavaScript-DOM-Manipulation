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

// Button for removing last item
const removeItemButton = document.querySelector('button.removeItemButton');

// All List Items
const listItems = document.getElementsByTagName('li')[0];

// Adding Event Listener to it right below
listItems.addEventListener('mouseover', () => {
  listItems.textContent = listItems.textContent.toUpperCase();
});

// Similiar Mouse Out Event when we remove our pointer from the item
listItems.addEventListener('mouseout', () => {
  listItems.textContent = listItems.textContent.toLowerCase();
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

// Remove Last Item from the List
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];

  // Using CSS Pseudo Class Selector
  let li = document.querySelector('li:last-child');

  // The normal way to proceed
  // let li = ul.lastChild;

  ul.removeChild(li);
});

