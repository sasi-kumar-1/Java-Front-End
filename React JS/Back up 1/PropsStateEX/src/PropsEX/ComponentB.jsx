import React from 'react'
class CompB extends React.Component {
    render() {
        return <div>
            <h2>Component B</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Employee Name:{this.props.ename}</h3>
            <h3>Employee Sal:{this.props.esal}</h3>
            <h4>Availability:{this.props.avail}</h4>
        </div>
    }
}

export default CompB