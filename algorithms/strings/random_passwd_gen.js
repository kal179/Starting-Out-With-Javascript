

function random_password_generator(size) {
	// Characters to include in 
	// our random password
	let chars = "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={[}]|\"':;<,>.?/";

	// Initials
	let res = "";
	let tally = 0;	
	while (tally < size) {
		
		// Add random chars from above string 
		// to new password
		res = res.concat(chars.charAt(Math.floor(Math.random() * chars.length)));
		++tally;
	}
	
	// Business as usual
	return res;
}


// Tests
for (let x = 4; x < 49; ++x) {
	console.log(random_password_generator(x));	
}
