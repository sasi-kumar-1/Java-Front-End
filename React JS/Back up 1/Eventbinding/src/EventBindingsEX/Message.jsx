import React, { Component } from 'react'

class Message extends Component {
    state = {
        msg: "Hello",
        money: ""
    }
    updateHandler = (value, money) => {
        console.log(value, money)
        this.setState({
            msg: value,
            money: money
        })
    }
    render() {
        return (
            <div>
                <h1>Message:{this.state.msg} ":" {this.state.money}</h1>
                <button onClick={this.updateHandler.bind(this, "Good Morning", 100)}>GM</button>
                <button onClick={this.updateHandler.bind(this, "Good Afternoon", 200)}>GA</button>
                <button onClick={this.updateHandler.bind(this, "Good Night !", 3000)}>GN</button>
            </div>
        )
    }
}

export default Message