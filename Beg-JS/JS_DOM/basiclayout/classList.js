var element;

document.getElementById("header").addEventListener("click", abc);


function abc() {
    // this.style.background = "green";
    // this.classList.add("xyz", "abc", "efg");
    // this.classList.remove("xyz", "abc", "efg");
    // var class1 = this.classList.length;
    // console.log(class1);
    // this.classList.toggle("green");
    
    var a = this.classList.contains("xyz");
    console.log(a);
    
    
}