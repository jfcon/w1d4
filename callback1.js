// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
// for (var i = 0; i < arr.length; i++) {
// if (arr[i] === "Waldo") {
// found(i);   // execute callback
// }
// }
// }

//  same behavious as above, but used Declaratively
//  using a forEach loop

// take


//

// arr is the array, found is actionWhenFound function
function findWaldo(arr, found) {
    // y is counting the loops
    y=0;
    // function could be called "fluffyBunny" if I wanted.
    // It's just a unnamed function (totally kosher)
    arr.forEach(function (x) {
        if (x === "Waldo") {
            // if found, returns var y to found -->
            // found --> actionWhenFound
            found(y)
        // else will increase count if it doesn't find it
        } else {
            y++
        }
        }
    )
}
// transfers values from found(y) 
// into actionWhenFound(indexSpot)

function actionWhenFound(indexSpot) {
            console.log("Found Waldo at index " + indexSpot + "!");
        }

// invokes the findWaldo function
findWaldo(["Alice", "Bob", ,"Billy", "Waldo", "Winston"], actionWhenFound);