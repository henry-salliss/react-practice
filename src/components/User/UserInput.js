import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css";
import Button from "../UI/Button";

const UserInput = function () {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = function (e) {
    e.preventDefault();
    console.log(name, age);
  };

  const nameChange = function (e) {
    setName(e.target.value);
  };

  const ageChange = function (e) {
    setAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" onChange={nameChange}></input>
        <label htmlFor="age">Age</label>
        <input id="age" onChange={ageChange}></input>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default UserInput;
