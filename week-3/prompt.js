const prompt = require('prompt');

function updateProfile(userProfile) {
  prompt.start();

  prompt.get(['fieldToUpdate', 'value'], function(err, answers) {
    console.log(answers);
  })
}

updateProfile();
