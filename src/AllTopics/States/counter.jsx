import { useState } from "react";

const Counter = () => {
    //! efficient way to update the state using the callback function in setState
    const [count, setCount] = useState(0);
    const handleIncrement = (prev) => {
        if (count < 10) {
            setCount((prev) => {
                return prev + 1;
            })
        }
    }
    const handledecrement = (prev) => {
        setCount((prev) => {
            return prev - 1;
        })
    }
    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement} disabled={count === 10 ? true : false}>increment</button>
            <button onClick={handledecrement} disabled={count === 0 ? true : false}>decrement</button>

        </>
    )

}

export default Counter;