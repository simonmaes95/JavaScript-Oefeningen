function changeSubscribe() {
    let button = document.querySelector("#subscribe-button");

    /* Basis */ 
    /*
    button.innerHTML = "Subscribed";
    */

    /* Uitbreiding */
    if (button.innerHTML === "Subscribe") {
        button.innerHTML = "Subscribed";
    } else {
        button.innerHTML = "Subscribe";
    }
}