import React from "react";

import {
    Link,
  } from "react-router-dom";

const AuthForm = () => {
  return (
    <form>
      <input placeholder="username" type="text" />
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
