import React, { Component } from 'react'

class Message extends Component {
    state = {
        msg: "Hello"
    }
    gmHandler = () => {
        this.setState({
            msg: "Good Morning Rahul Gandhi"
        })
    }
    gaHandler = () => {
        this.setState({
            msg: "Good Afternoon Rahul Gandhi"
        })
    }
    gnHandler = () => {
        this.setState({
            msg: "Good Night Rahul Gandhi"
        })
    }
    render() {
        return (
            <div>
                <h1>Message:{this.state.msg}</h1>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gaHandler}>GA</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}

export default Message