// Async/await
/* 
There's a speacial syntax to work with promises in a more comfortable fashion,
called "asyn/await". It's surprisingly easy to understand and use.

The word "async" before a funciton means one simple thing: a function
always returns a promise.

we can use await when calling any function that returns a Promise,
including we API functions

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


async function getData() {
   try { const rollnodata = await pobj1;
    // console.log(rollnodata);

    const biodatas = await getBiodata(rollnodata[1]);
    // console.log(biodatas);
       return biodatas
   } catch (error) {
       console.log(`The Error: ${error}`);
    }
}


const getname = getData().then((myname)=>{
    console.log(myname);
});
