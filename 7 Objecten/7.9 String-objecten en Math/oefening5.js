console.log(genereerWillekeurigGetal(60,100));

function genereerWillekeurigGetal(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}