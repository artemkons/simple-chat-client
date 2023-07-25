import React from "react";

import { Link } from "react-router-dom";

import useInput from "../../hooks/useInput";

const AuthForm = () => {
  const usernameInputProps = useInput("");
  const roomSelectProps = useInput("");

  const username = usernameInputProps.value;
  const room = roomSelectProps.value;
  return (
    <form>
      <input placeholder="username" type="text" {...usernameInputProps} />
      <select {...roomSelectProps}>
        <option value="">--Please choose a room--</option>
        <option value="JS">JS</option>
        <option value="PHP">PHP</option>
      </select>
      {username && room ? (
        <Link
          to={`/rooms/${usernameInputProps.value}/${roomSelectProps.value}`}
        >
          Submit
        </Link>
      ) : (
        "Username and room must be specified!"
      )}
    </form>
  );
};

export default AuthForm;
