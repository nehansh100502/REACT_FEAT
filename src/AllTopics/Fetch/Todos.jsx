import { useEffect, useState } from 'react';
import Todo from './Todo.jsx'

const todos = () => {
    const [allTodos, setAllTodos] = useState([])
    async function getTodos() {
        try {
            let res = await fetch("https://dummyjson.com/todos")
            let data = await res.json()
            console.log(data.todos)
            setAllTodos(data.todos)
        } catch (err) {
            console.log(err.response)
        }
    }
    useEffect(() => {
        getTodos();//invokes during mounting phase
    }, []);
    return (
        <>
            <div>Todos</div>
            {allTodos.length === 0 ? (<>
                <p>No Todos Available</p>
            </>) : (<>
                <section>
                    {allTodos.map((ele) => {
                        return (
                            <Todo ele={ele} key={ele.id} />
                        )
                    })}
                </section>
            </>)}
        </>
    )
}
export default todos;