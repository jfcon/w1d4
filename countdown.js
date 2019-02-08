var countdownGenerator = function (x) {
    // console.log(countdown);
    return function () {
        // var t = countdown;
        // console.log(t)
        if (x > 0) {
            console.log("T-minus " + x + "...");
        } else if (x < 0) {
            console.log("Rockets already gone, bub!");
        } else {
            console.log("Blast off!");
        }
        x--;
        // countdown--;
        // console.log(countdown);
    };
}
var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

// console.log(countdown())