import React from 'react'
class Message extends React.Component {
    state = {
        msg: "Hello"
    }
    gmHandler = () => {
        this.setState({ msg: "GM Rahul Gandhi" })
    }
    gaHandler = () => {
        this.setState({ msg: "GA Rahul--Lunch Time" })
    }
    gnHandler = () => {
        this.setState({ msg: "GN - Go to hell" })
    }
    render() {
        console.log("Render Method Executing")
        return <div>
            <h2>Message Component</h2>
            <hr />
            <h2>Message Value:{this.state.msg}</h2>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>
            <button onClick={this.gnHandler}>GN</button>

        </div>
    }
}
export default Message