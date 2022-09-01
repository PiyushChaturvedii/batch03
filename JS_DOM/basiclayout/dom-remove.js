var element;
document.getElementById("footer").addEventListener("mouseenter", abc);
document.getElementById("footer").addEventListener("click", xyz);


function abc() {
    this.style.background = "green";
}

function xyz() {
    document.getElementById("footer").removeEventListener("mouseenter", abc);
}