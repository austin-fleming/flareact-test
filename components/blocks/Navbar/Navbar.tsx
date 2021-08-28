import React from 'react'
import { DarkmodeToggle } from '@components/elements'
import s from './Navbar.module.css'

export const Navbar = () => {
    return <header className={s.header}><h1>Navbar</h1><DarkmodeToggle /></header>
}