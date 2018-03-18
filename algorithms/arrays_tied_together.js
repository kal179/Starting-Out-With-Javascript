


function tie_together(untied) {
	// Concatenate sub-arrays into single array 
	// 2-Dimensional Arrays only
	// Not an depth conquering algo
	let contents = []
	for (let x = 0; x < untied.length; ++x) {
		contents = contents.concat(untied[x]);
	}
	return contents;
}

tie_together([[2, 3], [3, 4], [4, 5], [5, 6]])
