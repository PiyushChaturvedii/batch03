export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User name ${user.firstname} added to the database.`);
}

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User id ${id} deleted from database.`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (age) user.age = age;


    res.send(`User id ${id} updated from database.`);
}