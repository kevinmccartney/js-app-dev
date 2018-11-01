// console.log('hello, world!');

function greetOnLoad() {
  console.log('greetOnLoad has started running');

  const name = prompt('What is your name?');

  if (name === '') {
    console.warn('No name was entered');
  }
  const greetingNode = document.getElementById('greeting');

  if(greetingNode === null) {
    console.error('could not find greeting node (tag)');
  } else {
    greetingNode.innerHTML = 'Hello, ' + name + ', nice to meet you!';
  }
}

// greetOnLoad();

const salutation = document.getElementById('salutation');

console.log(salutation);

const paragraphs = document.getElementsByTagName('p');

console.log(paragraphs);

const listClassElements = document.getElementsByClassName('list');

console.log(listClassElements);

const listItemMembers = document.querySelectorAll('.list li');

console.log(listItemMembers);

console.log(window.location.href);

console.log(window.location);

console.log(window.location.toString());

function redirect() {
  window.location.href = 'https://google.com';
}

// setTimeout(redirect, 5000)

function updateHash() {
  window.location.hash = 'aboutUs';
}

// setTimeout(updateHash, 5000);

function goBackTwo() {
  window.history.go(-2);
}

// setInterval(goBackTwo, 3000);

// window.history.pushState({ testProperty: 'I\'m on the history object!' }, undefined, 'contact.html');

console.log(window.history);

console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.scrollY);

// window.scrollTo(0, 982);

window.sessionStorage.setItem('sessionValue', 'cat');
window.localStorage.setItem('localValue', JSON.stringify({ pet: 'dog'}));

const parsedLocalValue = JSON.parse(localStorage.getItem('localValue'));

console.log(parsedLocalValue.pet);
