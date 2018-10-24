const newObject = {
  foo: 'hello',
  bar: 'world',
};

const mixinObject = Object.assign({
  baz: 'qux',
}, newObject);

console.log(mixinObject.hasOwnProperty('foo'));
