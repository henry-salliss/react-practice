import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css";
import Button from "../UI/Button";

const UserInput = function (props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = function (e) {
    e.preventDefault();

    // return on bad input
    if (name.trim().length === 0 || age.trim().length === 0) return;
    if (+age < 1) return;

    // reset values
    props.onSaveData(name, age);
    setName("");
    setAge("");
  };

  const nameChange = function (e) {
    setName(e.target.value);
  };

  const ageChange = function (e) {
    setAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler} autoComplete="off">
        <label htmlFor="name">Name</label>
        <input id="name" onChange={nameChange} value={name}></input>
        <label htmlFor="age">Age</label>
        <input id="age" onChange={ageChange} value={age}></input>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default UserInput;
