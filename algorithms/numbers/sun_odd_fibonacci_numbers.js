
// Sum all 
// odd fibonacci numbers using dynamic programming
function sumFibs(num) {
	var res = 1;
	
	// Seed values
	var prev_n = 0;
	var next_n = 1;
	
	
	// Further series
	while (true) {
		var next = next_n + prev_n;
		
		// If 
		if (next <= num) {
			// If and only if 
			// thus a separate if block and not used &&
			if (next % 2 !== 0) {
				res += next;
			}
			tmp = next_n;
			next_n += prev_n;
			prev_n = tmp;
			continue;
			
		} else {
			break;
		
		}
		
	}
	return res;
}

console.log(sumFibs(10));
console.log(sumFibs(75025));
