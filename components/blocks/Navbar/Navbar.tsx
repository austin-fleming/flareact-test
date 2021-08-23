import React from 'react'
import s from './Navbar.module.css'
import { useDarkmode } from '@hooks/useDarkmode'

const DarkmodeButton = () => {
    const {isDarkmode, toggleDarkmode} = useDarkmode()

    const buttonText = isDarkmode ? 'switch to light mode' : 'switch to dark mode'

    return <button onClick={() => toggleDarkmode()}>{buttonText}</button>
}

export const Navbar = () => {
return<header className={s.header}><h1>Navbar</h1><DarkmodeButton/></header>
}