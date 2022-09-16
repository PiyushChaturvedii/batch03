function focusFunction(element) {
    element.style.background = "lightblue";
}

function blurFunction(element) {
    element.style.background = "";
}

function inputFunction(element) {
    var x = element.value;
    document.getElementById("test").innerHTML = x;
}

function changeFunction(element) {
    var x = element.value;
    document.getElementById("test").innerHTML = x;
}

function selectFunction() {
    alert("You selected some text.");
}

function submitFunction() {
    var x = document.getElementById("fname").value;
    alert("Hello " + x + " your form is submitted.");
}