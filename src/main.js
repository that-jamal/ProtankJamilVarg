/**
const images = [
    'public/carpov.mp4,',
    'public/tankpov.mp4',
    'public/topdowncars.mp4',
    'public/truck.mp4',
    'public/truck-5.jpg',
    'public/truck-6.jpg',
    'public/truck-7.jpg',
    'public/truck-8.jpg'
];

const videoElement = document.getElementById('slideshow');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

const updateImage = () => {
    videoElement.src = images[currentIndex];
    videoElement.alt = images[currentIndex];
};

const showPreviousImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
};

const showNextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
};

prevButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);
updateImage();
**/