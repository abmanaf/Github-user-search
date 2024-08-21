import React from "react";
import { useState, useEffect, createContext } from "react";

const ThemeContext = createContext();


function ThemeProvider({children}){
    //const [theme, setTheme] = useState("src/assets/images/icon-moon.svg");
    const [theme, setTheme] = useState("light")
    const changeTheme = () => {
        //setTheme((previosTheme) => previosTheme === "src/assets/images/icon-moon.svg" ?  "src/assets/images/icon-moon.svg" : "src/assets/images/icon-sun.svg")
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return(
        <ThemeContext.Provider value= {{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext, ThemeProvider };
