var element;


// document.getElementById("header").setAttribute("style", "border:10px dotted yellow");

// document.getElementById("header").attributes[1].value = "xyz";

document.getElementById("header").removeAttribute("style")
document.getElementById("header").removeAttribute("class")
document.getElementById("header").removeAttribute("onclick")


element = document.getElementById("header").attributes

// document.getElementById("header").innerText = "<h1>Jai Shree Ram</h1>"
// document.getElementById("header").innerHTML = "<h1>Jai Shree Ram</h1>"



console.log(element);
console.log(typeof(element));