import React, { Component } from 'react'

class Digital extends Component {
    constructor(props) {
        super(props)
        console.log("First Cosnt")
        this.state = {
            ct: new Date().toLocaleTimeString()
        }
    }
    updateTime = () => {
        this.setState({
            ct: new Date().toLocaleTimeString()
        })
    }
    render() {
        console.log("Second Render")
        return (
            <div>
                <h1>Digital Clock</h1>
                <h3>Time:{this.state.ct}</h3>
                <button onClick={this.updateTime}>Refresh</button>
            </div>
        )
    }
}

export default Digital