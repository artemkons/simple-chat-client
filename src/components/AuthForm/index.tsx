import React from "react";

import {
    Link,
  } from "react-router-dom";

import useInput from '../../hooks/useInput';

const AuthForm = () => {
  const usernameInputProps = useInput('')

  return (
    <form>
      <input placeholder="username" type="text" {...usernameInputProps} />
      <select>
        <option value="">--Please choose a room--</option>
        <option value="dog">JS</option>
        <option value="dog">PHP</option>
      </select>
      <Link to='rooms'>Submit</Link>
    </form>
  );
};

export default AuthForm;
