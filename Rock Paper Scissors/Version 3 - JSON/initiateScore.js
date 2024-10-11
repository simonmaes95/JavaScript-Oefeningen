// Controleert of localStorage al bestaat. Zo niet wordt het aangemaakt.
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

let score = {
	wins: 0,
    losses: 0,
    draws: 0
};

let scoreJson = JSON.stringify(score);
localStorage.setItem("score", scoreJson);