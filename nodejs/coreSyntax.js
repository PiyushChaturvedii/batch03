var name = 'Ram Kumar';
var age = 29;
var hasHobbies = true;

function summary(userName,userAge,userHasHobbies) {
    return (
        'Name is ' +
        userName +
        ' age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobbies
    );
}

console.log(summary(name, age, hasHobbies));