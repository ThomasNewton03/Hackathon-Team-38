const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const currentDay = 0;

document.getElementById("day-title").textContent = days[currentDay];

tops = ['../imgs/tops/white-shirt.png', '../imgs/tops/black-shirt.png', '../imgs/tops/blue-shirt.png', '../imgs/tops/north-face-hoodie.png'];
bottoms = ['../imgs/skirts/blue-skirt.png', '../imgs/skirts/brown-skirt.png', '../imgs/skirts/green-skirt.png', '../imgs/skirts/red-tartan-skirt.png'];
fullLength = [];
jackets = [];
shoes = [];
hats = [];


var clothesList = tops;

var imgDiv = document.getElementsByClassName('div1')[0];

renderClothes();

function renderClothes() {
    for (let i = 0; i < clothesList.length; i++) {
        imgDiv = document.getElementsByClassName(`div${i + 1}`)[0];

        while (imgDiv.firstChild) {
            imgDiv.removeChild(imgDiv.firstChild);
        }

        console.log(i)
        const image = document.createElement('img');
        image.src = clothesList[i];
        image.className = "clothing-item";
        imgDiv.appendChild(image);
    }
}

document.getElementsByClassName('tops')[0].addEventListener('click', function () {
    clothesList = tops;
    renderClothes();
    console.log(clothesList)
});

document.getElementsByClassName('bottoms')[0].addEventListener('click', function () {
    clothesList = bottoms;
    renderClothes()
    console.log(clothesList)
});

document.getElementsByClassName('full-length')[0].addEventListener('click', function () {
    clothesList = fullLength;
    renderClothes()
    console.log(clothesList)
});

document.getElementsByClassName('jackets')[0].addEventListener('click', function () {
    clothesList = jackets;
    renderClothes()
    console.log(clothesList)
});

document.getElementsByClassName('shoes')[0].addEventListener('click', function () {
    clothesList = shoes;
    renderClothes()
    console.log(clothesList)
});

document.getElementsByClassName('hats')[0].addEventListener('click', function () {
    clothesList = hats;
    renderClothes()
    console.log(clothesList)
});

