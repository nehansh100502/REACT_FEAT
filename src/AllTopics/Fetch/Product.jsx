import react from 'react'

const prod = () => {
    return (
        <div key={ele.id}>
            <h5 className={ele.completed ? 'line-through' : 'font-bold'}>{ele.product}</h5>
        </div>
    )
}
export default prod;