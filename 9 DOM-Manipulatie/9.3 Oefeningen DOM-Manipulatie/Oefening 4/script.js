let colorButton = document.getElementById('change-color');
let paragraphs = document.querySelectorAll('p');

if (colorButton && paragraphs.length > 0) {
    colorButton.addEventListener('click', () => {
        paragraphs.forEach((paragraph) => {
            paragraph.style.color = 'red';
        });
    });
}