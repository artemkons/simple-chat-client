import React, { SelectHTMLAttributes } from 'react'

import './select.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select = ({ children, ...rest }: SelectProps) => {
  return (
    <select className='select' {...rest}>
        {children}
    </select>
  )
}

export default Select