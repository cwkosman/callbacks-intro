// The second argument/parameter is expected to be a function
//function findWaldo(arr, found, name) {
//  for (var i = 0; i < arr.length; i++) {
//    if (arr[i] === name) {
//      found(i, name);   // execute callback
//    }
//  }
//}

function findWaldo(arr, found, name) {
  arr.forEach((person, i) => {
    if (person === name) {
      // execute callback
      found(i, name);
    }
  });
}


function actionWhenFound(i, name) {
  console.log("Found " + name + " at index " + i + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound, "Waldo");
