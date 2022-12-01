// Promises are used to handle asynchronous operations
// They are easy to manage when dealing with multiple asynchronous operations
// where callbacks can create callback hell leading to unmanageable code.

/* 
A Promise is an object that keep track about whether a certain
event has happened already or not.

Promise Stage : 1. pending, fullfilled, rejected
*/


const pobj1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        resolve(roll_no)
        reject('Ankit ko data nhi mila')
    }, 2000);
})

const getBiodata = (indexdata) => {
    return new Promise((resolve, reject) => {
        setTimeout((indexdata) => {
            let biodata = {
                name: 'ram',
                age: 30
            }
            resolve(`My roll no is ${indexdata}. 
            My name is ${biodata.name} and I am ${biodata.age} years old. `)
        }, 2000, indexdata);
        
    })
}


// promise consume
pobj1.then((rollno) => {
    console.log(rollno);
    return getBiodata(rollno[1]).then((naresh) => {
        console.log(naresh);
    })
}).catch((error) => {
    console.log(error);
})