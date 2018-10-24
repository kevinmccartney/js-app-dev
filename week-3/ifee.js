function greet(name) {
  console.log('hello, ' + name)
}

(function(name) {
  console.log('hello, ' + name + '. I am immediately invoked.');
})('kevin');

greet('kevin');
