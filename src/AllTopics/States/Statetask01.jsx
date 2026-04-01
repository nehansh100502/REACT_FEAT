//toggle button 
//list (html,css,js ) initialy hidden when click on button its show and when click again its hide

TODO: "conditional rendering"
//! conditional rendering

import { useState } from "react";
const StateTask1 = () => {
    const [state, setState] = useState(false);
    //! conditonal rendering use (&&) operator 

    return (
        <>
            <h1>States Task 1</h1>
            {/* <button onClick={handleClick}>Show</button> */}
            <button onClick={() => setState((prev) => !prev)}>{state ? "Hide" : "Show"}</button>
            {state ? <> <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
            </ul></> : null}
        </>
    )
};
export default StateTask1;

