import React, { useState } from "react";
import UserInput from "./components/User/UserInput";
import UsersList from "./components/User/UsersList";

function App() {
  const [dataArr, setDataArr] = useState([]);

  const userListHandler = function (newName, newAge) {
    setDataArr((prevUser) => {
      return [...prevUser, { name: newName, age: newAge, id: Math.random() }];
    });
  };
  return (
    <div>
      <UserInput onSaveData={userListHandler} />
      <UsersList users={dataArr} />
    </div>
  );
}

export default App;
