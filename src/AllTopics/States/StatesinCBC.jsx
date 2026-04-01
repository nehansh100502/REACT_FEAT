import { Component } from 'react'

class statesCBC extends Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }
    increment = () => {
        this.setState((prev) => {
            return { count: prev.count + 1 }
        })
    }
    decrement = () => {
        this.setState((prev) => {
            return { count: prev.count - 1 }
        })
    }
    reset = () => {
        this.setState((prev) => {
            return { count: 0 }
        })
    }
    render() {
        return (
            <>
                <h1>States in Class Based Component</h1>
                <h3>Counter : {this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </>
        )
    }
};
export default statesCBC;