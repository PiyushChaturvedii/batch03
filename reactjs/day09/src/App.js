import React, {useState} from 'react';

import AddUser from "./components/Users/AddUser";
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setusersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setusersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id:Math.random().toString() }];
  })
}

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
