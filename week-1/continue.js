for(let i = 0; i < 10; i++) {
	console.log(i);
	console.log('before continue');
	continue; // continues to the next iteration
	console.log('after continue'); //never happens
}
