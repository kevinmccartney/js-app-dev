const family = [
  {
    name: 'mom',
    age: 45,
  },
  {
    name: 'dad',
    age: 39,
  },
  {
    name: 'brandon',
    age: 6,
  },
  {
    name: 'chelsea',
    age: 2,
  },
];

let familyNames = '';

for(let i = 0; i < family.length; i++) {
  if (i === family.length - 1) {
    familyNames += family[i].name;
  } else if (i === family.length - 2) {
    familyNames += family[i].name + ', & ';
  } else {
    familyNames += family[i].name + ', ';
  }
}

console.log(familyNames);

const familyNamesWithAge = family.reduce(function(familyNames, member, currentIndex, familyArray) {
  if (currentIndex === familyArray.length - 1) {
    return familyNames + member.name + ' is ' + member.age;
  } else if (currentIndex === familyArray.length - 2) {
    return familyNames + member.name + ' is ' + member.age + ', & ';
  } else {
    return familyNames + member.name + ' is ' + member.age + ', ';
  }
}, '');

console.log(familyNamesWithAge);
