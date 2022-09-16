var newElement = document.createElement("li");
var newText = document.createTextNode("Guava");
newElement.appendChild(newText);

var target = document.getElementById("list");

var oldElement = target.children[3];

// console.log(oldElement);

// target.replaceChild(newElement, oldElement);

target.removeChild(oldElement)