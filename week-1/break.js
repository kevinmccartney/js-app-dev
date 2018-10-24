for(let i = 0; i < 10; i++) {
	console.log(i);
	console.log('before break');
	break; // exits the next loop
	console.log('after break'); //never happens
}
