import { useState } from "react";//named import
//whenever state will change its rerender again and again and it will update the dom and it will update the ui and not refreshing it 
const statesInFBC = () => {
    const [state, setData] = useState("Hello World");

    const [cart, setCart] = useState("add To cart");

    const handleBtn = () => {
        setCart("Go To cart");
    }
    return (
        <>
            <h3>Learn States in Function Based</h3>
            <h4>{state}</h4>
            <hr></hr>
            <button onClick={handleBtn}>{cart}</button>
        </>
    )
}
export default statesInFBC;