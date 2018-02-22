// First get the Hide List Button which will toggle our List
const toggleList = document.getElementById('toggleList');

// Second, get the List which we want to toggle Completely
const listDiv = document.querySelector('.list');

// Now, Select the Input Element
const input = document.querySelector('input.description');

// Paragraph Element i.e going to mutate
const p = document.querySelector('p.description');

// Button for Changing the List Description
const button = document.querySelector('button.description');

// On Clicking the first Button i.e ToggleList Button, Event fires up
toggleList.addEventListener('click', () => {
  
  if (listDiv.style.display == "none") {
      toggleList.textContent = "Hide List";
      listDiv.style.display = 'block';
  } else {
      toggleList.textContent = "Show List";
      listDiv.style.display = 'none';
  }
})

button.addEventListener('click', () => {
  p.innerHTML = input.value + ":";
})

