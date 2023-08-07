import React, { InputHTMLAttributes} from 'react'

import './input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input className='input' {...props} />
  )
}

export default Input