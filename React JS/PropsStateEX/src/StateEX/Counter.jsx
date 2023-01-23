import React, { Component } from 'react'

class Counter extends Component {
    state = {
        qty: 1
    }
    decrHanlder = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    incrHanlder = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    render() {
        return (
            <div>
                <h1>QTY Value:{this.state.qty}</h1>
                <button onClick={this.decrHanlder}>DECR</button>
                <button onClick={this.incrHanlder}>INCR</button>
            </div>
        )
    }
}

export default Counter