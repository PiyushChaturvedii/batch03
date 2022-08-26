var element;

// document.querySelector("#header").className = "green red";
// document.querySelector("#header").style.backgroundColor = "black"

// document.querySelector("#header").classList.add();

// element = document.querySelector("#header").style.color = "white";

document.querySelector("#header").classList.remove("xyz","green","red");


element = document.querySelector("#header").classList;
console.log(element);
console.log(typeof(element));