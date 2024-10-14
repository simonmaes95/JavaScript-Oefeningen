/* Versie 1
button.addEventListener('click', () => {
    if (button.innerHTML === "Subscribe") {
        button.innerHTML = "Subscribed"
    } else {
        button.innerHTML = "Subscribe"
    }
});
*/

/* Versie 2 */
let button = document.querySelector("button");

// Let op! De functie subcribe wordt als parameter
// meegegeven zonder haken!
button.addEventListener('click', subscribe);

function subscribe() {
    if (button.innerHTML === "Subscribe") {
        button.innerHTML = "Subscribed"
    } else {
        button.innerHTML = "Subscribe"
    }
}