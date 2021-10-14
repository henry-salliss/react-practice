import React from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css";
const UserInput = function () {
  const submitHandler = function (e) {
    e.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input id="name"></input>
        <label htmlFor="age">Age</label>
        <input id="age"></input>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default UserInput;
