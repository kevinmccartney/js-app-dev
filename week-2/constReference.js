const calculator = {
  add: function(a, b) {
    return a + b;
  }
}

console.log(calculator.add(9, 5));

calculator.subtract = function(a, b ) {
  return a - b;
}

console.log(calculator.subtract(9, 3));

console.log(calculator);

delete calculator.subtract;

console.log(calculator);

calculator.add = function(a, b, c) {
  return a + b + c;
}

console.log(calculator.add(3, 9, 1));

// calculator = {
//   multiply: function(a, b) {
//     return a * b;
//   }
// }


const hello = 'hello, world!';

hello = 'hello, kevin';
