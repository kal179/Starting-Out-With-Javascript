
// Works
// on reduced lists (sets)
function sym_(l1, l2) {
	var small, big;

	// Separate small from big arrays
	if (l1.length > l2.length) { small = l2; big = l1; }
	else { small = l1; big = l2; }
	
	// Reduce arrays
	// So that their intersection is null set
	// E.g.
	// If 1 exists in both arrays 
	// then remove 1 from both arrays once
	var is = 0; 
	while (is < small.length) {
		
		// Need current to remove 
		// More than one occurrences
		var ib = 0;
		
		while (ib < big.length) {
			if (small[is] === big[ib]) { 

				// Remove the elements
				small.splice(is, 1); 
				big.splice(ib, 1);
				
				// Change in index of arrays
				--is;
				--ib;
			}
			++ib;
		}
		
		++is;
	}

	// Union of reduced sets is
	// Symmetric Difference of those sets
	return small.concat(big);
}

sym_([1, 2, 3], [5, 2, 1, 1, 4]);
