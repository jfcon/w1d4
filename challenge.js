var list = [1,2,3,4,5,6,7,8,9].filter(odds);


// goes through the array
// each array item is called value
// checks to see if there's a remainder of 1 in each value
// puts it in var x if true
// returns it to the filter function

function odds(value) {
    x = value % 2 === 1;
    return x;
}

console.log(list);

// vvvv close, but it's not implemented vvvvvv

// var list = [1,2,3,4,5,6,7,8,9];

// const odds = list.filter(x => {
//     return x % 2 === 1
// });


// console.log(odds);