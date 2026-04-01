import { useContext } from 'react';
import { TodoContext } from './ContextProvider';

const CreateTodo = () => {
    let { newTodo, setNewTodo, addTodo } = useContext(TodoContext);
    return (
        <>
            <div>
                <h1>Create TODO</h1>
                <form onSubmit={addTodo}>
                    <input type="text" placeholder='Enter Todo' id="todo" name="todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} required />
                    <button>Add</button>
                </form>
            </div>
        </>
    )
}
export default CreateTodo;