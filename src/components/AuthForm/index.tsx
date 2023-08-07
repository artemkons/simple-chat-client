import React from "react"

// TODO add form component
import './auth-form.css'

import { Link } from "react-router-dom"

import Input from '../Input'

import useInput from "../../hooks/useInput";

const AuthForm = () => {
  const usernameInputProps = useInput("");
  const roomSelectProps = useInput("");

  const username = usernameInputProps.value;
  const room = roomSelectProps.value;
  return (
    <form className="auth-form">
      <Input placeholder="username" type="text" {...usernameInputProps} />
      <select {...roomSelectProps}>
        <option value="">--Please choose a room--</option>
        <option value="JS">JS</option>
        <option value="PHP">PHP</option>
      </select>
      {username && room ? (
        <Link
          to={`/room/${usernameInputProps.value}/${roomSelectProps.value}`}
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
