import React from 'react'
import { useState } from 'react'
const themeChange = () => {
    const [theme, setTheme] = useState("light");
    const handleThemeChange = () => {
        console.log("theme Changed")
        setTheme((prev) => {
            return prev === "light" ? "dark" : "light";
        })
        // if (theme === "light") {
        //     setTheme("dark");
        //     // const section = document.querySelector("section");
        //     // section.style.backgroundColor = "black";
        //     const body = document.querySelector("body");
        //     body.style.backgroundColor = "skyblue";
        // }
        // else {
        //     setTheme("light");
        //     const body = document.querySelector("body");
        //     body.style.backgroundColor = "orange";
        // }
    }
    return (
        <>
            <section style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white", }}>
                <h3>Learn Theme Change</h3>
                <button onClick={handleThemeChange}>{theme}</button>
            </section>
        </>
    )

}
export default themeChange;