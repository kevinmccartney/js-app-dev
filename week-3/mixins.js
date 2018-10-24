const prompt = require('prompt');

const userProfile = {
  name: 'Kevin McCartney',
  address: '1504 Kenny Rd',
  city: 'Columbus',
  state: 'Ohio',
  zipCode: 43212,
  avatar: 'https://via.placeholder.com/350x150',
};

function performUpdate(srcObj, propToUpdate, value) {
  const newObj = Object.assign({}, srcObj);
  newObj[propToUpdate] = value;

  return newObj;
}


function updateProfile(initialProfile) {
  prompt.start();

  prompt.get(['field', 'value'], function(err, result) {
    const newProfile = performUpdate(initialProfile, result.field, result.value);

    for (let key in newProfile) {
      if (newProfile[key] !== initialProfile[key]) {
        console.log('\n');
        console.log('the old ' + key + ' value was ' + initialProfile[key]);
        console.log('the new ' + key + ' value is ' + newProfile[key]);
      }
    }

    console.log('\n');
    console.log('the new profile is');
    console.log('\n');
    console.log(newProfile);
  });
}

updateProfile(userProfile);
