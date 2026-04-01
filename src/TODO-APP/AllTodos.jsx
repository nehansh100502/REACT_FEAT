import { useContext } from "react";
import { TodoContext } from "./ContextProvider"

const AllTodos = () => {
    let { todos, deleteTodo, editTodo } = useContext(TodoContext);
    // console.log(todos);

    return (
        <>
            <div>All Todos</div>
            {todos.length === 0 ? (<p>No Todos available</p>) : (<div>
                {todos.map((ele) => {
                    return (
                        <section key={ele.id}>
                            <h2 style={{}}>Todo available</h2>
                            <h3>{ele.text}</h3>
                            <button onClick={() => editTodo(ele.id)}>edit</button>
                            <button onClick={() => deleteTodo(ele.id)}>delete</button>
                        </section>
                    )
                }
                )}
            </div>)}
        </>
    )
}
export default AllTodos;
