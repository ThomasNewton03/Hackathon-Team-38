const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const currentDay = 2;

document.getElementById("day-title").textContent = days[currentDay];

tops = ['../imgs/tops/white-shirt.png', '../imgs/tops/black-shirt.png', '../imgs/tops/blue-shirt.png', '../imgs/tops/north-face-hoodie.png'];

// Define an array of items
const clothesList = tops;

// Select the <ul> element where the items will be added
var imgDiv = document.getElementsByClassName('div1')[0];

// Use a for loop to create list items dynamically
for (let i = 0; i < clothesList.length; i++) {
    imgDiv = document.getElementsByClassName(`div${i+1}`)[0];
    console.log(i)
    // Create a new <li> element
    const image = document.createElement('img');
    // Set the text content of the <li> to the current item
    image.src = clothesList[i];
    image.className = "clothing-item";
    // Append the <li> to the <ul>
    imgDiv.appendChild(image);
}

document.getElementsByClassName('tops')[0].addEventListener('click', function() {
    console.log('tops');
});
