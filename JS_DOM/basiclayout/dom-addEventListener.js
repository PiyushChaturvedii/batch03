var element;



// document.getElementById("wrapper").onclick = abc;
// document.getElementById("header").onmouseenter = abc;



function abc() {
    document.getElementById("header").style.background = "red";
    
}

// element = document.querySelector("#header").classList;

// console.log(element);

document.getElementById("header").addEventListener("click",abc)


// document.getElementById("header").addEventListener("mouseenter", function () {
//     document.getElementById("header").style.backgroundColor = "yellow";
//     document.getElementById("header").style.border = "10px solid red";
// })

document.getElementById("header").addEventListener("mouseenter", function () {
    this.style.backgroundColor = "yellow";
    this.style.border = "10px solid red";
})