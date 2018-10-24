const cars = {
  carOne: "Saab",
  carTwo: "Volvo",
  carThree: "BMW",
};

const carsArr = ['saab', 'volvo', 'BMW'];
function isArray(value) {
  return !!(typeof value === 'object' && value.length);
}

console.log(cars);
console.log(typeof cars);
console.log(Object.keys(cars));

console.log(carsArr);
console.log(isArray(carsArr));
console.log(carsArr.entries());
