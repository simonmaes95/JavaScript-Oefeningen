const prompt = require("prompt-sync")();

let aantalLijnen = prompt("Hoeveel lijnen wil je afdrukken? ");
let aantalTekensInEenLijn = aantalLijnen * 2 - 1;
let aantalHekjes = 1;

for (let i = 1; i <= aantalLijnen; i++) {
    let lijn = "";
    for (let j = 1; j <= (aantalTekensInEenLijn - aantalHekjes) / 2; j++) {
        lijn += " ";
    }
    for (let k = 1; k <= aantalHekjes; k++) {
        lijn += "#";
    }

    for (let l = 1; l < (aantalTekensInEenLijn - aantalHekjes) / 2; l++){
        lijn += " ";
    }
    aantalHekjes += 2;
    console.log(lijn);
}