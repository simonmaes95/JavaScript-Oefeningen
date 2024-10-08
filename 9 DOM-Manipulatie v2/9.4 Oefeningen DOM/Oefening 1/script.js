let button = document.querySelector("button");

button.addEventListener('click', () => {
    if (button.innerHTML === "Subscribe") {
        button.innerHTML = "Subscribed"
    } else {
        button.innerHTML = "Subscribe"
    }
});