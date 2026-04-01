import React from 'react';
import CreateTodo from './CreateTodo';
import AllTodos from './AllTodos';

const TodoWrapper = () => {
    return (
        <>
            <h1>TODO APP</h1>
            <CreateTodo />
            <AllTodos />
        </>
    )

}
export default TodoWrapper;