// to define an array, place the members of the array between two brackets
// an array can hold values of any type (string, number, boolean, function, etc)
const arrayWithVariousTypes = ['foo', 2, true, { a: 'b'}, function() { console.log('hello, world')}];

const myHobbies = ['coding', 'hanging out with friends', 'hiking', 'cooking', 'listening to podcasts'];

// you access array members (items in the array) by index
// index simply refers to the position of the member in the array
// array indexes start at 0

// this is going to log the first member of the array 'coding', because index 0 refers to the first member
console.log(myHobbies[0]);

// this will log out the last member, because the array index starts at 0 & the array has 5 members
// just thinking of the length minus 1 is a good way to remeber which index to use to access array members
console.log(myHobbies[4]);

// arrays also have a 'length' property that you can access with the dot notation
// important to note that the length is going to be a number that represents how many members are in the array,
// so it will always be 1 greater than the index of the last item
console.log(myHobbies.length);


myHobbies.push('bike riding');

// console.log(myHobbies);

// console.log(myHobbies[5]);
// console.log(myHobbies);

// const lastHobby = myHobbies.pop();

// console.log(lastHobby);

// console.log(myHobbies);

// console.log(myHobbies.shift());

// const firstHobby = myHobbies.unshift('new hobby');

// console.log(firstHobby);
// console.log(myHobbies);
// console.log(myHobbies);

// const myArr = ['cat', 'dog' , 'mouse'];
//
// myArr.push('bird');
//
// console.log(myArr);
//
// const numArr = [1, 2, 3, 4, 5];
//
// const slicedArr = numArr.slice(0, 3);
//
// console.log(slicedArr);
// console.log(numArr);
//
// numArr.splice(0, 2, 'a', 'b', 'c');
//
// console.log(numArr);

// const animalArr = ['dogs', 'cats', 'mice', 'moose'];
//
// animalArr.forEach(function(item, index) {
//   console.log(item + ' is index ' + index);
// });
//
// console.log(animalArr);
//
// console.log(animalArr.toString());
// console.log(animalArr.join(' & '));
// console.log(animalArr.sort());
// console.log([99, 3, 45, 72, 8].sort());
// console.log([99, 3, 45, 72, 8].reverse())

// const objOne = {
//   arr: [1, 2, 3],
// };

// const objTwo = {
//   arr: [1, 2, 3],
// };

// console.log(objOne.arr[0] === objTwo.arr[0]);
