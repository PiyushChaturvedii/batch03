const person1 = {
    name: "Ram Kumar",
    age: 30,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

const { name, age } = person1;
console.log(name,age);





// const printName = (personData) => {
//     console.log(personData.name);
// }

// const printName = ({ name }) => {
//     console.log(name);
// }

// printName(person1)
