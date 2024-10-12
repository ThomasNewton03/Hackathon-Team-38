const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const currentDay = 2;

document.getElementById("day-title").textContent = days[currentDay];

// Define an array of items
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// Select the <ul> element where the items will be added
const itemsList = document.getElementById('current-images');

// Use a for loop to create list items dynamically
for (let i = 0; i < items.length; i++) {
    // Create a new <li> element
    const li = document.createElement('li');
    // Set the text content of the <li> to the current item
    li.textContent = items[i];
    // Append the <li> to the <ul>
    itemsList.appendChild(li);
}
