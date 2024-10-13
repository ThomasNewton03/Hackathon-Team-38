const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const currentDay = 0;

document.getElementById("day-title").textContent = days[currentDay];

tops = ['../imgs/tops/white-shirt.png', '../imgs/tops/black-shirt.png', '../imgs/tops/blue-shirt.png', '../imgs/tops/north-face.png'];
bottoms = ['../imgs/trousers/baggy-dress-trousers.png', '../imgs/trousers/skinny-jeans.png', '../imgs/trousers/baggy-jeans.png', '../imgs/trousers/trackpants.png'];
fullLength = ['../imgs/skirts/blue-skirt.png', '../imgs/skirts/grey-skirt.png', '../imgs/skirts/green-skirt.png', '../imgs/skirts/red-tartan-skirt.png'];
jackets = [];
shoes = [];
hats = [];

indices = [-1, -1, -1, -1, -1, -1]
current_item = 0

var clothesList = tops;

var imgDiv = document.getElementsByClassName('div1')[0];

renderClothes();

function renderClothes() {
    for (let i = 0; i < clothesList.length; i++) {
        imgDiv = document.getElementsByClassName(`div${i + 1}`)[0];

        while (imgDiv.firstChild) {
            imgDiv.removeChild(imgDiv.firstChild);
        }

        const image = document.createElement('img');
        image.src = clothesList[i].split(".png")[0] + "-icon.png";
        image.className = "clothing-item";
        imgDiv.appendChild(image);
    }
}

document.getElementsByClassName('tops')[0].addEventListener('click', function () {
    clothesList = tops;
    current_item = 0
    renderClothes();
    console.log(clothesList)
});

document.getElementsByClassName('bottoms')[0].addEventListener('click', function () {
    clothesList = bottoms;
    current_item = 1
    renderClothes()
    console.log(clothesList)
});

document.getElementsByClassName('full-length')[0].addEventListener('click', function () {
    clothesList = fullLength;
    current_item = 2
    renderClothes()
    console.log(clothesList)
});

document.getElementsByClassName('jackets')[0].addEventListener('click', function () {
    clothesList = jackets;
    current_item = 3
    renderClothes()
    console.log(clothesList)
});

document.getElementsByClassName('shoes')[0].addEventListener('click', function () {
    clothesList = shoes;
    current_item = 4
    renderClothes()
    console.log(clothesList)
});

document.getElementsByClassName('hats')[0].addEventListener('click', function () {
    clothesList = hats;
    current_item = 5
    renderClothes()
    console.log(clothesList)
});

const divs = document.querySelectorAll('div[class^="div"]');

divs.forEach(div => {
    div.addEventListener('click', function() {
        const index = parseInt(div.className.replace('div', '')) - 1; // Get the index (subtract 1 for 0-based index)
        console.log('You clicked on:', index);
        displayItem(index);

    });
});

function displayItem(index) {
    imgDiv = document.getElementsByClassName('model')[0];

    if (imgDiv.childElementCount > 1 && indices[current_item] != -1) {
        console.log(imgDiv.children)
        imgDiv.removeChild(imgDiv.children[indices[current_item]])

        for (i = 0; i < indices.length; i++) {
            indices[i] -= 1;
        }
        console.log(imgDiv.children)
    }

    const image = document.createElement('img');
    image.src = clothesList[index];
    image.className = "worn-clothes";
    imgDiv.appendChild(image);

    indices[current_item] = imgDiv.childElementCount - 1

}

