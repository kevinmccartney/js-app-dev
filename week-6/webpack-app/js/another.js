function sayHello(){
  var header = document.querySelector("#greeting");
  var hello = ("<h1> hello world, I am Kevin </h1>");
    header.innerHTML = hello;
}

module.exports = sayHello();
