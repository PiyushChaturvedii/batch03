var a = 0;
// var id = setInterval(Anim, 100);

var id = setTimeout(function Anim() {
    var target = document.getElementById("test");
    target.style.width = "500px";
}, 3000);



// function Anim() {
//     a = a + 10;


//     if (a == 500) {
//         clearInterval(id);
//     } else {
//         // console.log(a);
//         var target = document.getElementById("test");
//         // target.style.marginLeft = a + 'px';
//         target.style.width = a + 'px';
//     }
// }

function stopAnimation() {
    clearTimeout(id)
}