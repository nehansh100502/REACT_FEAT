import { useEffect, useState, useRef } from 'react';

const LifeCycleFbc = () => {
    const [count, setCount] = useState(0);
    const initialRender = useRef(true)// {current:true}

    useEffect(() => {

        console.log("mouted UI")
        let id = setInterval(() => {
            console.log("Api Call")
        })
        return () => {
            console.log("unmounted UI ")
            clearInterval(id)
        }
    }, [])

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        console.log("Updated UI")
    }, [count])

    return (
        <>
            <h1>Learn Life-Cycle in Function Component {count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

        </>
    )
}
export default LifeCycleFbc;

// useEffect()= 