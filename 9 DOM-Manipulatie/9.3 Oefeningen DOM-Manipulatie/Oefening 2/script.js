let backgroundButton = document.querySelector('#change-background');

if (backgroundButton) {
    backgroundButton.addEventListener('click', () => {
        // Generate a random color
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
}