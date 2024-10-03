let imageButton = document.getElementById('change-image');
let imageElement = document.getElementById('main-image');

if (imageButton && imageElement) {
    imageButton.addEventListener('click', () => {
        imageElement.setAttribute('src', 'image2.jpg');
    });
}