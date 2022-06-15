function countdown(count) {
	while (count > 0) {
		setTimeout(1000, function() {
			console.log(--count);
		});
	}
}
countdown(4);
console.log("Hello");