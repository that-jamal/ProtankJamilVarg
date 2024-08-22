import 'public/style.css'
const images: string[] = [
    'public/truck-1.jpg',
    'public/truck-2.jpg',
    'public/truck-3.jpg',
    'public/truck-4.jpg',
    'public/truck-5.jpg',
    'public/truck-6.jpg',
    'public/truck-7.jpg',
    'public/truck-8.jpg'
];

const imgElement = document.getElementById('slideshow') as HTMLImageElement;
const prevButton = document.getElementById('prev') as HTMLButtonElement;
const nextButton = document.getElementById('next') as HTMLButtonElement;
let currentIndex = 0;
const updateImage = () => {
    imgElement.src = images[currentIndex];
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
/**made by jamil varg 2024 sosdata lia**/