"use strict";

//ANCHOR form 
var form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); //preventing default actions   

  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;
  console.log("your name ".concat(name, " and your password is ").concat(password));
});