"use strict";

//ANCHOR event propagation, bubbling , capturing ....
document.getElementById('container').addEventListener('click', function () {
  console.log("The  container div is clicked by the user!!!");
}, true);
document.getElementById('list').addEventListener('click', function () {
  console.log("The  unordered list is clicked by the user !!!!");
}, true);
document.querySelectorAll('list-item').forEach(function (item) {
  item.addEventListener('click', function () {
    console.log("the list item has been clicked by the user !!!");
  });
}, true);