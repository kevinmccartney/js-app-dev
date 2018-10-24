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

const familyInTwelveYears = [];

for(let i = 0; i < family.length; i++) {
  familyInTwelveYears.push({
    name: family[i].name,
    age: family[i].age + 12,
  });
}

console.log(familyInTwelveYears);

const familyInFiveYears = family.map(function(member) {
  return {
    name: member.name,
    age: member.age + 5,
  };
});

console.log(familyInFiveYears);
