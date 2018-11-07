const UserData = require('./userData');

$(document).ready(function() {
  function getUsername() {
    return new Promise(function(fulfill, reject) {
      $.get('http://jsonplaceholder.typicode.com/users', function(users) {
        fulfill(users);
      });
    })
  }

  function checkAuthStatus() {
    const userData = window.localStorage.getItem('userData');

    if(userData) {
      return true;
    }

    return false;
  }

  function populateErrorMessage(message) {
    const errorContainer = $('#errorMessage')[0];

    $(errorContainer).css('display', 'block');
    $(errorContainer).text(message);
  }

  function renderView(authStatus) {
    if(authStatus) {
      $('#homePage').css('display', 'block');
      $('#loginForm').css('display', 'none');
    } else {
      $('#homePage').css('display', 'none');
      $('#loginForm').css('display', 'block');
    }
  }

  function renderUserData() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    $('#greeting').text('Hello, ' + userData.name);

    const userPosts = getUserData('http://jsonplaceholder.typicode.com/posts?userId=' + userData.id);
    const userAlbums = getUserData('http://jsonplaceholder.typicode.com/albums?userId=' + userData.id);

    userPosts.then(function(data) {
      $('#userPosts').text(JSON.stringify(data, null, 2));
    });

    userAlbums.then(function(data) {
      $('#userAlbums').text(JSON.stringify(data, null, 2));
    });
  }

  $('#usernameSubmit').on('click', function() {
    let userData;

    const usernameInput = $('#usernameInput');
    const usernameValue = usernameInput[0].value;

    if(!usernameValue) {

      populateErrorMessage('Please enter a username');
    } else {
      const usernameRequest = getUsername();

      usernameRequest.then(function(users) {
        const validUsers = users.filter(function(user) {
          return usernameValue === user.username;
        });

        console.log(validUsers);

        if(validUsers.length === 0) {
          populateErrorMessage('Username not found');
        } else {
          const userData = JSON.stringify(validUsers[0]);

          window.localStorage.setItem('userData', userData);
          renderView(true);
          renderUserData();
        }
      })
    }
  });

  $('#logout').on('click', function() {
    window.localStorage.removeItem('userData');

    renderView(false);
  });

  const authStatus = checkAuthStatus();

  renderView(authStatus);

  if(authStatus) {
    renderUserData();
  }
});
