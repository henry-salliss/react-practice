import React from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css";
import Button from "../UI/Button";

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
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default UserInput;
