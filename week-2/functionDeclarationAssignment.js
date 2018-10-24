greet('Kevin');
add(3, 4);

function greet(name) {
  console.log('Hello, ' + name);
}

let add = function(a, b) {
  return a + b;
}

console.log(add(3, 4));

add = function(a, b, c) {
  return a + b + c;
}

console.log(add(4, 5, 19));

add = function() {
  let sum = 0;
  for(let i = 0; arguments.length > i; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(add(3, 6, 19, 89239, 3, 303));
