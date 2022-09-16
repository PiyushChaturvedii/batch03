// var newComment = document.createComment("This is comment.");
// document.getElementById("test").appendChild(newComment);

var newElement = document.createElement("h2");
var newText = document.createTextNode("This is just in JS.");


newElement.appendChild(newText);


var target = document.getElementById("test");


target.insertBefore(newElement,target.childNodes[1])






console.log(newElement);
// console.log(newText);
