import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Counter from './Counter.jsx'
//!step -3
//!step -2 

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        incre: (prevState, action) => {
            return [...prevState, action.payload]
        },
        decre: (prevState, action) => {
            return prevState - 1
        },
        reset: (prevState, action) => {
            return prevState = 0
        }
    }
})

export let { incre, decre, reset } = counterSlice.actions
//!step -1 
const myStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,

    }
})




const ReduxCounter = () => {
    return (
        <Provider store={myStore}>
            <Counter />
        </Provider>
    )
}


export default ReduxCounter