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
    "Screaming Prego",
    "Pregnant Donny Trump",
    "Pregnant Willy G"
];

  function getDayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

//const randomIndex = Math.floor(Math.random() * image.length);
//const randomImage = image[5];
//const randomName = name[5];

const dayOfYear = getDayOfYear();
const index = dayOfYear % image.length;

const randomImage = image[index];
const randomName = name[index];

const imageElement = document.getElementById("RandomPreg");
imageElement.src = randomImage;

const nameElement = document.getElementById("PregName");
nameElement.textContent = randomName;