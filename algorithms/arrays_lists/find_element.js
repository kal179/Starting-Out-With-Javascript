


// Finds first element 
// According to given function 
// Exhaustive searching algo
function findElement(arr, func) {
	var index = 0;
	var current;
	while (index < arr.length) {
		current = arr[index];
		if (func(current)) {
			return current;
		}
		index += 1;
	}
  return undefined;
}

findElement([1, 22, 3, 4], function(num){ return num % 2 === 0; });
