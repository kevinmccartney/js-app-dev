let myVar = 'I am a string';

console.log(typeof myVar);

myVar = 2;

console.log(typeof myVar);

const myAge = '26';

const newAge = myAge + 5;

console.log(newAge);
console.log(typeof newAge);

let amountRaisedSoFar = 1000;
const newDonation = '50';

amountRaisedSoFar = Number(newDonation) + amountRaisedSoFar;

console.log(typeof amountRaisedSoFar);
const strAmount = String(amountRaisedSoFar);
console.log(typeof strAmount)
console.log('We now have ' + strAmount + '!');

let nothing;

console.log(nothing);

nothing = null;

console.log(nothing);
