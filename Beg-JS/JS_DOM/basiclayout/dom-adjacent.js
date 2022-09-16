// var newElement = document.createElement("h2");

// var newText = document.createTextNode("This is just text");

// newElement.appendChild(newText)

// var target = document.getElementById("test");

// target.insertAdjacentElement("afterbegin", newElement);



// var target = document.getElementById("test");

// var newElement = "<h2> This is Heading </h2>";

// target.insertAdjacentHTML("beforeend", newElement)


var target = document.getElementById("test");

var newElement = "This is Heading";

target.insertAdjacentText("beforeend", newElement)