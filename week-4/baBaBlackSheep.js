var woolOwners = [
  {
	  "master": 1
  },
  {
  	"dame": 1
  },
  {
  	"little boy": 1,
  	"location": "down the lane"
  }
];


var bags = haveYouAnyWool;

var haveYouAnyWool = function() {
	for (var i = 0; i < woolOwners.length; i++) {
	   bags++;
	}
};


function baabaaBlackSheep() {
	console.log("BaaBaa BlackSheep have you any wool?");
  haveYouAnyWool();
	if (bags > 0) {
		console.log("yes sir, yes sir " + totalBags + " bags full");

  }
}

function oneForMy() {
	for (var i = 0; i < 2; i++) {
		people = Object.keys(woolOwners);
		var person = people.toString();
		console.log("one for my " + person);
	}
}

baabaaBlackSheep();
haveYouAnyWool();


var littleBoy = woolOwners[2];
var littleBoyName = Object.keys(littleBoy)[0];

var whereHeLives = littleBoy.location;
console.log("one for the " + littleBoyName + " that lives " + whereHeLives);
