const prompt = require("prompt-sync")();

let aantalLijnen = Number(prompt("Hoeveel lijnen wil je afdrukken? "));
let regel = "";

for (let i = 0; i < aantalLijnen; i++) {
	if (i % 2 == 0) {
		for (let j = 0; j < aantalLijnen; j++) {
			if (j % 2 == 0) {
				regel += " ";
			} else {
				regel += "#";
			}
		}
	} else {
		for (let j = 0; j < aantalLijnen; j++) {
			if (j % 2 == 0) {
				regel += "#";
			} else {
				regel += " ";
			}
		}
	}
	console.log(regel);
	regel = "";
}