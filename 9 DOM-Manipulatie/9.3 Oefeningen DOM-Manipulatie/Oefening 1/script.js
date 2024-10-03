let headerButton = document.getElementById('change-header');
let headerElement = document.getElementById('header');

if (headerButton && headerElement) {
    headerButton.addEventListener('click', () => {
        headerElement.textContent = 'JavaScript is fun!';
    });
}