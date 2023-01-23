import React from 'react'

class Digital extends React.Component {
    state = {
        ct: new Date().toLocaleTimeString()
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                ct: new Date().toLocaleTimeString()
            })
        }, [1000])
    }
    render() {
        console.log("Render method -executing")
        return <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3 >Digital Clock</h3>
                        </div>

                        <div className="card-body">
                            <h3>{this.state.ct}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Digital