

// Reduces 
// given Element count to 1
// i.e. removes all extra occurences of that element

function reduct_elem(list, a) {
	// Indicates that element has occurred before
	var arised_before = false;

	var index = 0;
	while (index < list.length) {

		// If element matche and has arised before
		// then remove all next occurrences
		if (a == list[index] && arised_before) {
			list.splice(index, 1);
			--index ;
		} else if (a == list[index] && !(arised_before)) { 
			// Just a safety check
			arised_before = true; 
		}
		++index;
		
	}
	return list;
}

console.log(reduct_elem([1, 1, 1, 0], 1));
console.log(reduct_elem([14, 15, 17, 19, 14, 21, 7, 49, 42, 14], 14));
