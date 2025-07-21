const image = [
    "images/clunkypreg.png",
    "images/farmerpreg.png",
    "images/IMG_4874.JPEG",
    "images/royalpreg.png",
    "images/screampreg.png",
    "images/trumppreg.png",
    "images/willpreg.jpg"
];

const name = [
    "Pirate Preg!",
    "Pregnant Amish",
    "Man Preg CEO",
    "Brit Preg",
    "Preg Scream",
    "Pregnant Donny Trump",
    "Pregnant Willy G"
];

const randomIndex = Math.floor(Math.random() * image.length);
const randomImage = image[randomIndex];
const randomName = name[randomIndex];

const imageElement = document.getElementById("RandomPreg");
imageElement.src = randomImage;

const nameElement = document.getElementById("PregName");
nameElement.textContent = randomName;