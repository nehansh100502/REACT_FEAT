import { useState } from 'react'
function ErrorCounter() {
    const [count, setCount] = useState(0)

    if (count > 5 || count < -5) {
        throw new Error("App Crashed ...")
    }
    return (
        <>
            <h1 className="text-4xl">Count: {count}</h1>
            <br></br> <br></br>
            <button onClick={() => setCount((prev) => prev + 1)} className="text-2xl">incre</button>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={() => setCount((prev) => prev - 1)} className="text-2xl">decre</button>

        </>
    )
}
export default ErrorCounter