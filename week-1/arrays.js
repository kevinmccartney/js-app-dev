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

// the array.push() method adds an item to the end of the array
// this operation is done 'in-place' which means that it is mutating (or changing) the array
// the method is being called on
// array.push returns the new length of the array...
const addBike = myHobbies.push('bike riding');

// so we will get the new length here
console.log(addBike)

// we should now also see the new item here in the array
console.log(myHobbies);

// the array.pop() method removes the last item from an array
// this operation is also in-place, so it mutates the array the method is being called on
// array.pop() returns the item that was removed from the end of the array...
const lastHobby = myHobbies.pop();

// so when we log lastHobby out, we will get 'bike'
console.log(lastHobby);

// and we now see that it's gone from the array
console.log(myHobbies);

// array.shift() removes the first member from an array
// this operation is in-place & mutates the array it is called on
// this method is basically the opposite of array.pop()
// array.shift() returns the member that is removed from the array so when we log it...
const firsthobby = myHobbies.shift()

// the value will be 'coding'
console.log(firsthobby);

// & you will see that 'coding' is no longer in the array
console.log(myHobbies);

// array.unshift() adds a member to the start of an array
// this operation is in-place & mutates the array it is called on
// this method is basically the opposite of array.push()
// array.unshift() returns the new length of the array
const newFirstHobby = myHobbies.unshift('watching movies');

// so when we log out newFirstHobby here, it will be  5
console.log(newFirstHobby);

// & when we log out the array again, we will see that 'watching movies' is at the beginning of the array
console.log(myHobbies);

// array.splice() has a required parameter (start), an optional second parameter (deleteCount), & can take many optional parameters (itemOne, itemTwo, etc...)
// so the function signature looks like this -
// array.splice(start, delete, itemOne, itemTwo, etc...)
// the start parameter is the index we want to start at, the deleteCount is how many items you want to delete from the array, starting at the index
// represented in the start parameter, & every parameter from the third parameter on (itemOne, itemTwo, etc...) are members that you want to add to the array
// let's look at some examples

// this would start at the beginning of the array & remove one member, so we would remove 'new hobby' from the array
myHobbies.splice(0, 1);

// here we can see that 'new hobby' is no longer at the beginning of the array
console.log(myHobbies);

// here, we're adding 'new hobby' back to the beginning of the array
// because we are starting at the beginning of the array, not deleting any members, & adding one item to the array ('watching movies')
myHobbies.splice(0, 0, 'watching movies');

console.log(myHobbies);

// here, we're replacing the second & third elements in the array
// because we're starting at the index 1 (the second member), deleting 2 items, & adding two members ('drawing' & 'trying new food')
myHobbies.splice(1, 2, 'drawing', 'trying new food');

// here we can see that 'hanging out with friends' & 'hiking' have been replaced with 'drawing' & 'trying new food'
console.log(myHobbies);

// another thing to keep in mind is that the array.splice returns an array of the elements that have been removed from an array
const splicedOutItems = myHobbies.splice(0, 2)

// so if we log out splicedOutItems here, we get ['watching movies', 'drawing']
console.log(splicedOutItems);

// if we don't remove anything from the array...
const zeroSplicedOutItems = myHobbies.splice(0, 0,);

// we will get an empty array
console.log(zeroSplicedOutItems);

// let's log out the array here to see what we still have in there
// it will be ['trying new food', 'cooking', 'listening to podcasts']
console.log(myHobbies);

// array.slice() is a little different than the last 5 methods we have looked at, because the operation is NOT in-place,
// so it doesn't mutate or change the array
// array.slice() returns a 'slice' of the array & has two parameters begin & end
// so the function signature looks like this -
// array.slice(start, end)
// start is the index to begin at & end is the index to stop BEFORE
// so if the end is 4, the slice will stop at index 3
// here's an example
const hobbiesSlice = myHobbies.slice(0, 2);

// so when we log this out here, we'll get ['trying new food', 'cooking']
// because we started at the beginning of the array (index 0) & stopped BEFORE the last array index (2)
console.log(hobbiesSlice);

// if we log out the original array here, we will see that it's the same as it was the last time we logged it out
// this is because array.slice() did not mutate (or change) the array
console.log(myHobbies);

// let's make a new array to try array.forEach()
const animalArr = ['dogs', 'cats', 'mice', 'moose', 'fish', 'geese'];

// array.forEach() is an iterator method, which means that it allows us to run a function on the array one member at a time
// so the parameter that array.forEach() takes is a function, also called a callback function
// array.forEach() will run the function one time for each member in the array & give the function two arguments that you can use as parameters
// when you're defining the callback function - item & index
// item is just the current item that you are iterating over & index is the index of that item
// here's an example
animalArr.forEach(function(item, index) {
  console.log(item + ' is index ' + index);
});

// when this function runs you should see
// 'dogs is index 0'
// 'cats is index 1'
// 'mice is index 2'
// 'moose is index 3'
// 'fish is index 4'
// 'geese is index 5'
//
// this is because the callback function is run once for each member in the array & receives the member value & index that the callback is using

// if we log out the original array, it is not changed, because array.forEach() is not in-place
console.log(animalArr);

// array.toString() returns the array members as a comma-separated string
console.log(animalArr.toString());

// it does not mutate the original array
console.log(animalArr);

// array.join() is similar to array.toString(), but it takes a parameter called string separator that is used to separate the items
console.log(animalArr.join(' & '));

// it does not mutate the original array
console.log(animalArr);

// array.sort() sorts the array in-place
animalArr.sort();

// you can see now that the animalArr has been mutated & is now alphabetized
console.log(animalArr);

// you can also sort numbers in an array, however you might see some unexpected behavior
// this isn't in numerical value, because by default array.sort() coerces the values in the array to strings & compares them using unicode values
const numberArr = [99, 72, 3, 8, 45];
console.log(numberArr.sort());

// you can get around this by using the compareFunction parameter of array.sort() the function signature will look like this -
// array.sort(function(a, b))
// a & b are the two values being compared
// if the compareFunction returns a negative number, then a is sorted before b
// if the compareFunction returns 0, a & b are not moved
// if the compareFunction returns a postive number, then b is sorted before a
// here's an example
numberArr.sort(function(a, b) {
  console.log('a is ' + a);
  console.log('b is ' + b);

  return a - b;
})

// the array is now sorted numerically
console.log(numberArr);

// array.reverse() is like array.sort(), but... well... reversed.
animalArr.reverse();

// the array is now in reverse alphabetical order
console.log(animalArr);

// array.reverse() also works on number, but array.reverse() doesn't coerce values to strings, so you don't need to provide a compareFunction
// array.reverse() will just work sorting numbers in reverse numerical order out of the box
numberArr.reverse()

// reverse numerical order
console.log(numberArr);
