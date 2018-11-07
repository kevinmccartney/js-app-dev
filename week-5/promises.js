$(document).ready(function() {
  const nameToSearch = encodeURIComponent("Ervin Howell");

  function searchUsers() {
    return new Promise(function(resolve, reject) {
      $.get('http://jsonplaceholder.typicode.com/users?name=' + nameToSearch, function(result) {
        resolve(result);
      })
    })
  }
  $('#userSearch').on('click', function() {
    searchUsers()
      .then(function(value) {
        console.log(value);
      });
  });
});
