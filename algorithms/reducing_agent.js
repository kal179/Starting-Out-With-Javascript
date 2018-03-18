
// Move through list
// If current element is not in our new reducted list
// then add it to our redcuted list
// else do nothing

function reducing_agent(lis) {
	var reducted = [];
	for (var i = 0; i < lis.length; ++i) {
		if (reducted.indexOf(lis[i]) === -1) { reducted.push(lis[i]); }
	}

	return reducted;
}

reducing_agent([11, 11, 21, 11, 45, 169, 45, 13, 11]);
