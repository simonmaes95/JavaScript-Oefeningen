const prompt = require("prompt-sync")();

let aantalLijnen = Number(prompt("Hoeveel lijnen wil je afdrukken? "));

for (let i = 1; i <= aantalLijnen; i++) {
    let lijn = "";
    for (let j = 1; j <= aantalLijnen - i; j++) {
        lijn += " ";
    }
    for (let k = 1; k <= i; k++) {
        lijn += "#";
    }
    console.log(lijn);
}