import express from "express";
import bodyParser  from "body-parser";
import  usersRoutes  from "./routes/users.js";


const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Homepage.')
})

app.listen(PORT, () => console.log(`Server live on port: http://localhost:${PORT}`))












// Get:     /users      finds all users
// POST:    /users      creates a user
// GET:     /users/:id  find user details
// Delete:  /users/:id  deletes as user
// patch:   /users/:id  update a user