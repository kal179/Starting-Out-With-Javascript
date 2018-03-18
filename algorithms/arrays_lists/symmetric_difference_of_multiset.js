
// If element not in new list add it to new list
// else do nothing
function reducing_agent(lis) {
	var reducted = [];
	for (var i = 0; i < lis.length; ++i) {
		if (reducted.indexOf(lis[i]) === -1) { reducted.push(lis[i]); }
	}

	return reducted;
}

function sym_couple(l1, l2) {
	var small, big;

	// Separate small from big arrays
	if (l1.length > l2.length) { small = l2; big = l1; }
	else { small = reducing_agent(l1); big = reducing_agent(l2); }
	
	// Reduce arrays
	// So that their intersection is null set
	// E.g.
	// If 1 exists in both arrays 
	// then remove 1 from both arrays 
	var is = 0; 
	while (is < small.length) {
		
		// Need current to remove 
		// More than one occurrences
		var ib = 0;
		
		while (ib < big.length) {
			if (small[is] == big[ib]) { 

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

function sym(args) {
	// Start symmetric difference
	var past_menu = sym_couple(arguments[0], arguments[1]);
	
	// Calculate symmetric differences
	// till last using above explained principle
	for (var i = 2; i < arguments.length; ++i) {
		past_menu = sym_couple(past_menu, arguments[i]);
	}
	
	// Reduct Extras
	// We don't need 'em as sets do not have extras
	past_menu = reducing_agent(past_menu);
	
	// Sorted array of symmetric diff
	return past_menu.sort(function(a,b){ return a-b;});

}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

sym_couple([1, 1, 2, 5], [2, 2, 3, 5]);
sym_couple([1, 7, 3], [3, 4, 6]);




// Pseudo-Code
// Move through 2-Dimensional array
// Compute the (symmetric difference of current element) say (a)
// with the (symmetric differences of previous two consecutive
// elements of array) = b
// c = symmetric_difference(a, b)
// Like solving any mathematical expression
// from left to right
// We do same thing here


// Explaination
// Consider sets e1, e2, e3, e4
// e1 = { 1, 2, 3, 3, 4, 7, 9 } 
// e2 = { 1, 1, 2, 4, 6 }
// e3 = {1, 6, 10, 5, 9 }
// e4 = {1, 1, 3, 4, 7 } 
//
// Symmetric diff of these sets will be
// esym = { 3, 5, 10 }
// 
// a = sym(e1, e2)
// b = sym(a, e3) 
// c = sym(b, e4) is the symmetric difference of all these sets 
// final answer
//
// Since this is my orignal technique
// I call it previous reductant technique
// since we reduce previous sets to their 
// Symmetric differences and the compare that to next one 
