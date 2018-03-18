

// Effective on 
// Sorted arrays
function dropElements(arr, func) {
	// Drop them elements.
	let index = 0;
	while (index < arr.length) {
		if (func(arr[index]))	 {
			return arr.slice(index);
		}
		index += 1;
	}
	return [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
//dropElements([1, 2, 3, 4], function(n) {return n > 5;});
//dropElements([0, 1, 0, 1], function(n) {return n === 1;});
