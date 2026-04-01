import React, { Component } from 'react';

export default class LifeCycle extends Component {
    constructor() {
        super();
        this.state = { count: 0 }
        console.log("I am constructor")
    }
    increment = () => {
        this.setState((prev) => ({ count: prev.count + 1 }))
    }
    componentDidMount() {
        this.id = setInterval(() => {
            console.log("API Calls")
        }, 2000)
        console.log("Components Mounted Successfully...")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate successfully...")
    }
    componentWillUnmount() {
        console.log("component  Unmounted !")
        clearInterval(this.id)
    }

    render() {
        console.log("i am render ...")
        return (
            <>
                <div className='p-5'>
                    <h1 className='text-center text-4xl'>
                        Learn Life-Cycle of a component...
                        {this.state.count}
                    </h1>
                    <button onClick={this.increment}>INcre</button>
                    <p>smoothly changes UI component
                        1) mounting Phase = constructor / render / react update / componentDidMount(async opertaions )
                        2) updating Phase
                        3) unmounting Phase
                    </p>
                </div>
            </>
        )
    }
}