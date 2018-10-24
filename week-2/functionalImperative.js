const arrayOne = [2, 6, 9, 18];

console.log(arrayOne);

for(let i = 0; i < arrayOne.length; i++) {
  arrayOne[i] += 1;
}

console.log(arrayOne);

const arrayTwo = [4, 77, 9, 3];

const arrayPlusFive = arrayTwo.map(function(x) {
  return x + 5;
});

console.log(arrayTwo);
console.log(arrayPlusFive);
