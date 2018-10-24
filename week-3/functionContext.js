const teacher = {
  name: 'Kevin',
  age: 26,
  greet: function() {
    setTimeout(function() {
      console.log('oh, hello. I didn\'t see you there, my name is ' + this.name);
    }.bind(this), 2000);
  }
}

const dog = {
  name: 'Rover',
  age: 7,
  sayAge: function() {
    console.log('I am ' + this.age + ' years old');
  }
}

// teacher.greet()
// teacher.greet.call(dog);
// dog.sayAge.apply(teacher);

const utils = {
  ageInTenYears: function() {
    console.log('I will be ' + (this.age + 10) + ' in 10 years.');
  }
};

utils.ageInTenYears.call(teacher);
