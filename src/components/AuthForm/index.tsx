import React from "react"

// TODO add form component
import './auth-form.css'

import { Link } from "react-router-dom"

import Input from '../Input'
import Select from '../Select'
import Button from "../Button"

import useInput from "../../hooks/useInput"

const AuthForm = () => {
  const usernameInputProps = useInput("");
  const roomSelectProps = useInput("");

  const username = usernameInputProps.value;
  const room = roomSelectProps.value;
  return (
    <form className="auth-form">
      <Input placeholder="username" type="text" {...usernameInputProps} />
      <Select {...roomSelectProps}>
        <option value="">--Please choose a room--</option>
        <option value="JS">JS</option>
        <option value="PHP">PHP</option>
      </Select>
        <Button
          as='route'
          to={username && room
            ? `/room/${usernameInputProps.value}/${roomSelectProps.value}`
            : window.location.pathname}
        >
          Submit
        </Button>
    </form>
  );
};

export default AuthForm;
