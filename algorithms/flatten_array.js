
// C1:
// If element of array is a list 
// then call the function on that list 
// and so until the depth has been conquered 
// every time the function extracts
// elements from list, elemets are concatenated 
// into list a layer above


function print(s) { console.log(s); }
function steamrollArray(arr) {
	// I'm a steamroller, baby
	
	res = []
	for (let index = 0; index < arr.length; index++) {
		// C1 Reference 
		if (Array.isArray(arr[index])) {
			res = res.concat(steamrollArray(arr[index]));
		} else {
			res.push(arr[index]);
		}
	}
	return res;
}

print(steamrollArray([1, [2], [3, [[4]]]]));
print(steamrollArray([1, {}, [3, [[4]]]]));
print(steamrollArray([[["a"]], [["b"]]]));
