var countdownGenerator = function (x) {
    var countdown = x;
    // console.log(countdown);
    return function () {
        var t = countdown;
        // console.log(t)
        countdown --;
        if (t > 0) {
            console.log("T-minus " + t + "...");
        } else if (t < 0) {
            console.log("Rockets already gone, bub!");
        } else {
            console.log("Blast off!");
        }
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