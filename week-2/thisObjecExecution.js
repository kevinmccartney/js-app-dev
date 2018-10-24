function sayName() {
	console.log(this.name);
}

var teacher1 = {
	name: 'Assaf',
	speak: sayName
}

var teacher2 = {
	name: 'Shane',
	speak: sayName
}

teacher1.speak(); // 'Assaf'
teacher2.speak(); // 'Shane'

sayName();
