import { useSelector, useDispatch } from 'react-redux'
import { incre, decre, reset } from './reduxCounter.jsx'
const Counter = () => {
    //? use Selector is used to access reduxs state and returns...
    let count = useSelector((state) => {
        console.log(state.counter) //0
        return state.counter
    })
    const dispatch = useDispatch();

    return (
        <>
            <h3>Counter : {count} </h3>
            <button onClick={() => dispatch(incre(10))}>Increment</button>
            <button onClick={() => dispatch(decre())}>derement</button>
            <button onClick={() => dispatch(reset())}>reset</button>

        </>
    )
}
export default Counter;