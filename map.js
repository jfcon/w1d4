var words = ["ground", "control", "to", "major", "tom"];


function map(words, cb) {
    var results = [];
    for (i = 0; i < words.length; i++) {
        var result = cb(words[i]);
        results.push(result);
    }
    return results;

    // cb(x);
    // result wordCount(x);
}
// word count
var wordCount = map(words, function (num) {
    return num.length;
});



// // uppercase
var uppercase = map(words, function (word) {
    return word.toUpperCase();
});


// // backwards
var backwards = map(words, function (word) {
    return word.split('').reverse().join('');
});

console.log(wordCount);
console.log(uppercase);
console.log(backwards);
