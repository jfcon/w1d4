// reimplementation of a filter function
// challenge due friday 9am
// read mdn on filter()
// don't reimplement the thisArg


var list = [1,2,3,4,5,6,7,8,9];

const odds = list.filter(x => {
    return x % 2 === 1
});


console.log(odds);