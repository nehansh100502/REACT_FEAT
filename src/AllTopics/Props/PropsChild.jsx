const PropsChild = (props) => {
    return (
        <div>
            <h2>Props Child Component</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </div>
    );
}
export default PropsChild;