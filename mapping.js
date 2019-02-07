var input = [
    { x: 3, y: 4 },
    { x: 12, y: 5 },
    { x: 8, y: 15 }
];
// console.log(input[0].x)
// var newArray = [];

var result = input.map(function (num) {
    // z will be returned to here vvvv
    // for (i = 0; i < input.length; i++) {
    return calc(num.x, num.y)
    // }
    // console.log("x is " + x);
    // console.log("y is " + y);
    // console.log("z is " + calc);
});

function calc(x, y) {
    var z = (Math.sqrt((x * x) + (y * y)));
    // console.log(z);
    return z;
}

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);