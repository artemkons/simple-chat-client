import React from "react";

const AuthForm = () => {
  return (
    <form>
      <input placeholder="username" type="text" />
      <select>
        <option value="">--Please choose a room--</option>
        <option value="dog">JS</option>
        <option value="dog">PHP</option>
      </select>
      <button>submit</button>
    </form>
  );
};

export default AuthForm;
