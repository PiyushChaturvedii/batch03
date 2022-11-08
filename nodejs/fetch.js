// function loaddoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = funtion() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("header").innerHTML =
//                 this.responseText
//         }
//     }

//     xhttp.open("GET", "ajx.txt", true);
//     xhttp.send();
// }
/*
The Fetch API.

The Fetch API provides a fetch() method defined on the window
object, which you can use to perfom requests.

This method returns a Promise that you can use to retrieve the
response of the request

*/

fetch('https://api.covid19api.com/summary').then((apidata) => {
    console.log(apidata);
    return apidata.json();
})
    .then((actualdata) => {
        // console.log(actualdata);
        const mydata= actualdata.Countries[77];
        document.getElementById('apiindia').innerHTML = `The name of the country is ${mydata.Country}
        The TotalConfirmed cases here is ${mydata.TotalConfirmed} and the deaths is ${mydata.TotalDeaths}`;
    })
    .catch((error) => {
    console.log(error);
})
