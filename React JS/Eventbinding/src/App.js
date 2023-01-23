import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Digital from './Components/Digital'
import Message from './EventBindingEx/Message'
export class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Message />
            </div>
        )
    }
}

export default App