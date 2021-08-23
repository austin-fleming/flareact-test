import React from 'react'
import {Navbar, Footer} from '@components/blocks'
import s from './Layout.module.css'

type ColorThemeProps = 'light' | 'dark'

export const Layout = ({children}:{children:any}) => {
    const colorTheme = 'light'
    
    return (
    <>
        <Navbar/>
        <main className={s.main}>
            {children}
        </main>
        <Footer/>
    </>
)}