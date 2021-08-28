import React from 'react'
import { useDarkmode } from '@hooks/useDarkmode'
import s from './DarkmodeToggle.module.css'
import cn from 'classnames'

export const DarkmodeToggle = () => {
    const { isDarkmode, toggleDarkmode } = useDarkmode()

    return (
        <button
            className={cn(s.toggle, {[s["toggle--darkmode"]]: isDarkmode})}
            onClick={() => toggleDarkmode()}
            type="button"
            aria-label={`change to ${isDarkmode ? 'light' : 'dark'} mode`}
        >
            <span className={s.toggle__thumb}/>
            <span>🌚</span>
            <span>🌞</span>
        </button>
    )
}