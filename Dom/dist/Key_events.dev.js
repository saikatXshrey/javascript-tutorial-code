"use strict";

//ANCHOR Key events 
//keypress:: when key is pressed
//keydown::   when key is down 
//keyup::   when key is relaesed 
var name = document.getElementById('name');
name.addEventListener('keyup', function () {
  console.log("The key was up!!!!");
});