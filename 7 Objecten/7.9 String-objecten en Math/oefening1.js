let tekst = "In deze cursus leer je coderen in JS. JavaScript is een veelzijdige programmeertaal.";
let zin = haalSubzin(tekst, "JavaScript");
console.log(zin);

function haalSubzin(tekst, woord) {
    let startIndex = tekst.indexOf(woord);
    if (startIndex == -1) {
        return "";
    }
    let eindIndex = tekst.indexOf(".", startIndex);
    return tekst.slice(startIndex, eindIndex + 1);
}