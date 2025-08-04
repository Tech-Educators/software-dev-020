'use client'
// import context
import { createContext, useContext,  useState, useReducer} from "react";

// 1 Create out context - the thing we want to share around our app

// its default value should be light
const ThemeContext = createContext("light")

// 2. Create a provider

export function ThemeProvider({children}) {

    // useReducer takes two arguments - the reducer function and initial statestate.
    // it returns state and a 'dispatch' function - we give 'dispatch' the action.type so it can run the correct state update (see themeReducer)
    const [state, dispatch] = useReducer(themeReducer, {theme: "light"})

    // need to tell my Provider component what values to ... provide
    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

// 3. create a custom hooks

// create this hook just so I dont have to import useContext and ThemeContext into every single component that wants to use our Theme Context. I can just import the hook.
export function useTheme() {
    return useContext(ThemeContext)
}


/// ==== ======== REDUCER STUFF ======= 
// 1. Write a 'reducer' function
// 2. replace the useState with useReducer in our ThemeProvider function
// 3. Instead of calling setTheme like we have in the past we'll 'dispatch' actions to our reducter/ 

// you can name the function whatever you want, but any function passed to useReducer gets two arguments - current state and an 'action' object
function themeReducer(state, action) {

    // action.type will be light/dark or colourblind
    switch(action.type) {
        case "dark":
        case "light":
            return {theme: action.type}
        case "colourblind":
            // return my new state
            // updates the state variable
            return {theme: 'SamsTheme'}
        default:
            return {theme: 'light'}
    }
}