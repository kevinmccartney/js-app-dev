setTimeout(function() {
  console.log('I ran after 1 second');
}, 1000);

let counter = 0;

const twoSecondLog = setInterval(function() {
  console.log('I run every 2 seconds');
  counter++;

  if (counter > 3) {
    clearInterval(twoSecondLog);
  }
}, 2000);
