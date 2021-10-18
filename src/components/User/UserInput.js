import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import styles from "./UserInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserInput = function (props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = function (e) {
    e.preventDefault();

    // return on bad input
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Please input info",
        message: "You need to type your info into the inputs",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age input",
        message: "Your age needs to be 1 or over",
      });
    }

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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          onRemoveError={errorHandler}
        />
      ) : (
        ""
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler} autoComplete="off">
          <label htmlFor="name">Name</label>
          <input id="name" onChange={nameChange} value={name}></input>
          <label htmlFor="age">Age</label>
          <input id="age" onChange={ageChange} value={age}></input>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
