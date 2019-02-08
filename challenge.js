var list = [1, 2, 3, 4, 5, 6, 7, 8, 9]


function odds(list, cb) {
    for (var i = 0; i < list.length; i++) {
        cb(list[i]);
    }
}

odds(list, function (num) {
    if (num % 2 == 1){
        console.log(num)
    }
});

// vvvv close, but it's not implemented vvvvvv

// var list = [1,2,3,4,5,6,7,8,9];

// const odds = list.filter(x => {
//     return x % 2 === 1
// });


// console.log(odds);