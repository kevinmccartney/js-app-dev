const objectLiteral = {
  keyOne: 'foo',
  keyTwo: 2,
};

console.log(objectLiteral);

const constructedObject = new Object({
  keyOne: 'foo',
  keyTwo: 2,
});

console.log(constructedObject);

function normalFunc(keyOne, keyTwo) {
  console.log('keyOne is ' + keyOne);
  console.log('keyTwo is ' + keyTwo);

  this.property = 'hello, world!';
}

normalFunc('foo', 2);

function MyClass(keyOne, keyTwo) {
  this.keyOne = keyOne;
  this.keyTwo = keyTwo;
}

const classObject = new MyClass('foo', 2);

console.log(MyClass('foo', 2));
console.log(classObject);

console.log(new normalFunc('foo', 2));

const aNewObj = {};

aNewObj.property = 'foo';
