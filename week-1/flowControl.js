let x = false;

if (x) {
  console.log('the condition is true');
} else if (x == false) {
  console.log('the condition is not true');
} else {
  console.log('this won\'t run');
}

const comparisonOne = 10 > 9;
const comparisonTwo = 10 >= 10;

console.log(comparisonOne);
console.log(comparisonTwo);

const isEqual = 10 == '10';

console.log(isEqual);

const isStrictEqual = 10 === '10';

console.log(isStrictEqual);

const strictIsEqual = 10 === 10;

console.log(strictIsEqual);

const isNotEqual = 10 != '11';

console.log(isNotEqual);

const isNotStrictEqual = 10 !== '11';

console.log(isNotStrictEqual);

const isTruthy = "string";

console.log(!!isTruthy);
