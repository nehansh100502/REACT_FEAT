import { useMemo, useState, useCallback } from 'react';
import MemoChild from '../Memo_callBack/memoChild.jsx'

const Memo = () => {
    const [addCount, setAddCount] = useState(0)
    const [subCount, setSubCount] = useState(100)
    //! it return memoized value 
    let multiply = useMemo(() => {
        console.log("I am multiply ")
        return addCount * 5
    }, [addCount])

    //! it return memoized function 

    const display = useCallback(() => {
        console.log("i am display")
    }, [])
    return (
        <>
            <h1>This is memo example</h1>
            <br></br>
            <article>
                <h4>addition:{addCount}</h4>
                <br></br>
                <button onClick={() => setAddCount((prev) => prev + 1)}>increment</button>
            </article >
            <br></br>
            <article>
                <h4>substraction:{subCount}</h4>
                <br></br>
                <button onClick={() => setSubCount((prev) => prev - 1)}>decrement</button>
            </article>
            <br></br>
            <br></br>
            <br></br>
            <article>
                Multiply : {multiply}
            </article>

            <hr></hr>
            <MemoChild display={display} />
        </>
    )

}
export default Memo;
