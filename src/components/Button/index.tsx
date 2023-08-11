import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

import './button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    as?: 'btn'
    to?: never
}

interface RouteLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    as: 'route'
    to: string
}

const Button = ({ as = 'btn', ...componentProps }: ButtonProps | RouteLinkProps) => {
    if (as === 'route') {
        return <Link className='button' {...componentProps as RouteLinkProps} />
    }

    return <button className='button' {...componentProps as ButtonProps} />
}

export default Button