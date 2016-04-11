var i;
for (i= 1; i<= 100; i++) {
	if (i % 15 ===0) {
		document.write("FizzBuzz<br>");
		continue;
	};
	if (i % 3 ===0) {
		document.write ("Fizz<br>");
		continue;
	};
	if(i % 5 === 0) {
		document.write ("Buzz<br>");
	};

	document.write (i + "<br>");
}
