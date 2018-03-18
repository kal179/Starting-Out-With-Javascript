
// Pseudo
// Separate binary values
// convert to numbers 
// push ascii/unicode value to new string 
// return the string 


function stringReverse(S) {
	// To reverse string 
	// B'cuz binary strings are inverse 
	let hangover = [];
	for (let counter = S.length; counter >= 0; counter--) {
		hangover.push(S.charAt(counter));
	}
	return hangover.join("");
}


function toBase10(S) {
	// Convert binary to base 10 
	// Simple conversion algo
	let res = 0;
	for (let counter = 0; counter < S.length; counter ++) {
		if (S.charAt(counter) == "1") {
			res += Math.pow(2, counter);
		}
	}
	return res;
}


function binaryAgent(str) {
	// Converts given binary encoding to 
	// Human readable string 
	let splitted = str.split(" ");
	let new_seq = [];
	for (let x = 0; x < splitted.length; x++) {
		new_seq.push(String.fromCharCode(toBase10(stringReverse(splitted[x]))));
	}
	return new_seq.join("");
}


binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
