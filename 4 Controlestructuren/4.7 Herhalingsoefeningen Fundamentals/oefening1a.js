const prompt = require("prompt-sync")();

let aantalLijnen = prompt("Hoeveel lijnen wil je afdrukken? ");

for (let i = 1; i <= aantalLijnen; i++) {
    let lijn = "";
    for (let j = 0; j < i; j++) {
        lijn += "#";
    }
    console.log(lijn);
}

/*
nog een mogelijke manier om tewerk te gaan: 

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
*/