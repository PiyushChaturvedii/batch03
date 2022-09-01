var element;

document.getElementById("footer").addEventListener("click", abc);



document.getElementById("footer").addEventListener("mouseenter", function () {
    this.style.border = "10px dashed yellow";
    this.style.color = "tan";
    this.style.background = "Grey";
});



function abc() {
    document.getElementById("footer").style.background = "green";
}

