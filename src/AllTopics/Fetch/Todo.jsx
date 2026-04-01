import react from 'react';

const Todo = ({ ele }) => {
    return (
        <div key={ele.id}>
            <h5 className={ele.completed ? 'line-through' : 'font-bold'}>{ele.todo}</h5>
        </div>
    )
}
export default Todo;
