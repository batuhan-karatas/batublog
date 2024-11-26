'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
    isDarkMode: boolean
    toggleTheme: () => void
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}: {children:ReactNode}) =>{
    const [isDarkMode, setIsDarkMode] = useState(false)

    // it checks and applies stored theme preference from previous sessions
    useEffect(() =>{
        // Check system theme preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        console.log(prefersDark)
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme) {
        setIsDarkMode(storedTheme === "dark");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        } else {
        setIsDarkMode(prefersDark);
        if (prefersDark) {
            document.documentElement.classList.add("dark");
        }
        }
    }, [])

    // Save theme preference to local host and update state
    const toggleTheme = () =>{
        if(isDarkMode){

            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        } else {

            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')

        }
        setIsDarkMode(!isDarkMode)
    }

    return (
        <ThemeContext.Provider value = {{isDarkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error('useTheme must be used within ThemeProvider')
    }
    
    return context
}
