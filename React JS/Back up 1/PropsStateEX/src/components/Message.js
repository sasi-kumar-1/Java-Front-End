import React from 'react'

class Message extends React.Component {
    msg = "Good Morning"
    render() {
        return <div>
            <h1>Message Component - Class</h1>
            <hr />
            <h2>Message Value : {this.msg}</h2>
        </div>
    }

}

export default Message