var littleOne = [
	"The little one stops to suck her thumb",
	"The little one stops to tie his shoe",
	"The little one stops to climb a tree",
	"The little one stops to shut the door",
	"The little one stops to take a dive",
	"The little one stops to pick up sticks",
	"The little one stops to pray to heaven",
	"The little one stops to roll a skate",
	"The little one stops to check the time",
	"The little one stops to shut The End",
];
var howTheyMarch = ["one by one", "two by two", "three by three", "four by four", "five by five", "six by six", "seven by seven", "eight by eight", "nine by nine", "ten by ten"];

function theAntsGoMarching(){
	for (var i = 0; i < howTheyMarch.length; i++){
		howManyByHowMany(i);
		console.log(littleOne[i]);
		console.log("And they all go marching down to the ground to get out of the rain, BOOM! BOOM! BOOM!");
	}
}
theAntsGoMarching();

function howManyByHowMany(number){
	var numbers = howTheyMarch[number];
	var hurrah = " hurrah, hurrah \n";
	var march = "The ants go marching " + numbers;
	console.log(march + hurrah + march + hurrah + march);
}
