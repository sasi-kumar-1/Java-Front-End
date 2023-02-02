import React, { Component } from 'react'

class Digital extends Component {
    constructor(props) {
        super(props)
        console.log("First Cosnt")
        this.state = {
            ct: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        console.log("After Render method")
        setInterval(() => {
            this.setState({
                ct: new Date().toLocaleTimeString()
            })
        }, [1000])
    }
    render() {
        console.log("Second Render")
        return (
            <div>
                <h1>Digital Clock</h1>
                <h3>Time:{this.state.ct}</h3>

            </div>
        )
    }
}

export default Digital