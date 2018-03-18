

// Just for convinience
function print(s) {
	console.log(s);
}


// FizzBuzz 
// Classic FizzBuzz Program
function fizzbuzz(start, end) {
	for (let x = start; x <= end; x++) {
		if (x % 3 === 0 && x % 5 === 0) {
			print('FizzBuzz');
		} else if (x % 3 === 0) {
			print('Fizz');
		} else if (x % 5 === 0) {
			print('Buzz');
		} else {
			print(x);
		}
	}
}

print(fizzbuzz(1, 100));
