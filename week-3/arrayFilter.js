const animals = [
  {
    name: 'monkey',
    habitat: 'jungle'
  },
  {
    name: 'racoon',
    habitat: 'forrest',
  },
  {
    name: 'tiger',
    habitat: 'jungle'
  },
  {
    name: 'pelican',
    habitat: 'ocean'
  },
];

const jungleAnimals = [];

for(let i = 0; i < animals.length; i++) {
  if(animals[i].habitat === 'jungle') {
    jungleAnimals.push(animals[i]);
  }
}

console.log(jungleAnimals);

const filteredJungleAnimals = animals.filter(function(animal) {
  return animal.habitat === 'jungle';
});

console.log(filteredJungleAnimals);

for(let i = 0; i < animals.length; i++) {
  if(animals[i].habitat !== 'jungle') {
    delete animals[i]
  }
}

console.log(animals);
