import React from "react";
import { useState, useEffect, createContext } from "react";


const ThemeContext = createContext();


function ThemeProvider({children}){
    const [theme, setTheme] = useState("light")
    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    
    useEffect(() => {
        document.body.classList = theme;
    }, [theme])

    return(
        <ThemeContext.Provider value= {{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext, ThemeProvider };
