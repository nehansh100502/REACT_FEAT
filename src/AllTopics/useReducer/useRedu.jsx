import { useReducer } from 'react';

const initialState = [{ text: 'default', id: 12 }]
const reducerFunc = (prev, action) => {
    console.log(action);
    switch (action.type) {
        case "add":
            return [...prev, action.payload];
    }
};
const ReducerTodo = () => {
    const [state, dispatch] = useReducer(reducerFunc, initialState)
    console.log(state);
    const newTodo = {
        text: "hello world",
        id: 1,

    };
    return (
        <>
            <div>
                <h1>Reducer Todo</h1>
                <button onClick={() => dispatch({ type: "add", payload: newTodo })}>AddTodo</button>
            </div>
        </>
    )
}
export default ReducerTodo;
