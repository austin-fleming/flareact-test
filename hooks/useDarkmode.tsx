import React, {createContext, useState, useContext} from "react";

const defaultState = {
    isDarkmode: false,
    toggleDarkmode: () => {}
}

const DarkmodeContext = createContext(defaultState)

export const DarkmodeProvider = ({children}:{children:any}) => {
    const [isDarkmode, setDarkmode] = useState(false)

    const toggleDarkmode = () => {
        setDarkmode(!isDarkmode)
        
        document.body.dataset.theme = isDarkmode ? 'dark' : 'light'
    }

    return <DarkmodeContext.Provider value={{isDarkmode, toggleDarkmode}}>{children}</DarkmodeContext.Provider>
}

export const useDarkmode = () => useContext(DarkmodeContext)