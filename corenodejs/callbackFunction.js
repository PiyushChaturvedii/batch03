// "Functions is First Class Citizens"

// 1. In JS we can assign a function to a variable.

// 2. Pass a function as an Argument

// 3. Returning functions

// callback function

// 1. Any function that is passed as an argument is called a callback function.
// 2. A callback is a function that is to be executed after another function has
// finished executing - hence the name 'call back'

// const funA = () => {
//     setTimeout(() => {
//         console.log('function A');
 
//     }, 3000);

// }

// const funB = () => {
//     console.log('function B');

// }

// funA()
// funB()

// Why callback function?

// JavaScript is an event driven lang. This means that instead
// of waiting for a Response before moving on, js will keep
// executing while listening for other events.

// callbacks are a way to make sure certain code doesn't execute
// until other code has already finished execution.


// const person1 = (otherPerson, callfrnd) => {
//     console.log(`I am busy right now. I am talking to ${otherPerson}.I will call you back.`);
//     callfrnd();
// }

// const person2 = () => {
//  console.log("Hello I call back you.");
// }

// person1("ankit",person2);

// CallBack

// Callbacks are just the name of a convention for using JS functions.
// There isn't a special thing called a 'callback' in the JS lang, it's just a convention.
// Instead of immediately returning some result like most functions,
// functions that use callbacks take some time to produce a result.

/*
The word 'asynchronous'-'async' just means 'takes some time or happens in the future,
not right now'.Usually callbacks only used when doing I/O, e.g. downloading things,
reading files, talking to databases etc.
*/

/* API

1: 5 student roll not
2: 2no name and age
3: gender

*/

const getRollno = () => {
    setTimeout(() => {
        console.log('API getting roll no');
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

        setTimeout((rollno) => {

            const biodata = {
                name: 'ram',
                age : 30
            } 

            console.log(`My roll no is ${rollno}. 
        My name is ${biodata.name} and I am ${biodata.age} years old `);

            setTimeout((name) => {
                biodata.gender = 'male';
                console.log(`My roll no is ${rollno}. 
        My name is ${biodata.name} and I am ${biodata.age} years old. 
        I am ${biodata.gender}`);
            }, 2000,biodata.name);
        }, 4000, roll_no[1]);
    }, 2000);
}

getRollno()

// callback HELL

