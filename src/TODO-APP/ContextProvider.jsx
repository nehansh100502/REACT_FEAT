import { createContext, useState } from "react";
import React from "react";

export const TodoContext = createContext();//context object in which we can pass value to all the components without props drilling and have provider key 

const contextProvider = (props) => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setAllTodos] = useState([{ id: 1, text: "Default Todo" }]);
    const addTodo = (e) => {
        e.preventDefault()

        if (newTodo.trim() === "") {
            alert("No Todo available!")
            setNewTodo("")
            return;
        };
        let todo = {
            id: Date.now(),
            text: newTodo.trim()
        }
        console.log(todo)
        setAllTodos((prev) => [...prev, todo])
        // clear input fields 
        setNewTodo("")
    }

    const editTodo = (id) => {
        let allTodos = [...todos]
        let findEdit = allTodos.find((ele) => ele.id === id)
        setNewTodo(findEdit.text)
        deleteTodo(id)
    }
    const deleteTodo = (id) => {
        let allTodos = [...todos]
        let filterTodos = allTodos.filter((ele) => ele.id !== id)
        setAllTodos(filterTodos)
    }
    return (
        <TodoContext.Provider value={{ newTodo, setNewTodo, todos, setAllTodos, addTodo, deleteTodo, editTodo }}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default contextProvider;