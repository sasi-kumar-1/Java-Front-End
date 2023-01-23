import React, { Component } from 'react'
class Product extends Component {
    state = {
        product_Name: "Google Pixel 6a ",
        price: 32999,
        qty: 1,
        image: "https://rukminim1.flixcart.com/image/224/224/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=90"

    }
    decrHandler = () => {
        this.setState({
            qty: this.state.qty - 1
        })
    }
    incrHandler = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product_Name}</td>
                                <td><img src={this.state.image} width="80px" alt="" /></td>
                                <td>{this.state.price}</td>
                                <td> <i className="fa fa-minus-circle" onClick={this.decrHandler}></i> {this.state.qty} <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.qty * this.state.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}

export default Product