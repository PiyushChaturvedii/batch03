const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);


const person1 = {
    name: "Ram Kumar",
    age: 30,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const { name, age } = person1;
console.log(name, age);
