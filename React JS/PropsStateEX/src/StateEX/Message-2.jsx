import React from 'react'
class Message extends React.Component {
    constructor(props) {
        super(props)
        console.log("First Const")
        this.msg = "Hello"
    }
    gmHandler = () => {
        console.log("GM Handler working")
        this.msg = "GM Rahul Gandhi"
        console.log(this.msg)
        this.forceUpdate()
    }
    render() {
        console.log("----second Render--- ")
        return <div>
            <h1>Message Component</h1>
            <hr />
            <h2>Message:{this.msg}</h2>
            <button onClick={this.gmHandler}>GM</button>

        </div>
    }
}
export default Message