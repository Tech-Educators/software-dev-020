'use client'
// import context
import { createContext, useContext, useState} from "react";

// 1 Create out context - the thing we want to share around our app

// its default value should be light
const ThemeContext = createContext("light")

// 2. Create a provider

export function ThemeProvider({children}) {

    const [theme, setTheme] = useState("light")

    // need to tell my Provider component what values to ... provide
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// 3. create a custom hooks

// create this hook just so I dont have to import useContext and ThemeContext into every single component that wants to use our Theme Context. I can just import the hook.
export function useTheme() {
    return useContext(ThemeContext)
}