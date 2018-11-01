const button = document.getElementById('button');
const textField = document.getElementById('textField');

button.addEventListener('click', function (event) {
  console.log('button clicked!');
  console.log(event);
});

console.log(textField);

textField.addEventListener('keydown', function(event) {
  console.log(event)
  textField.value = event.key;
});
