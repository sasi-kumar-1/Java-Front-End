import React from 'react'
import img_One from '../assets/iphone12.jpeg'
class Product extends React.Component {
    product = {
        name: "iphone 12",
        price: 32000,
        image: img_One
    }
    render() {
        return <div className="container">
            <div className="row">
                <h3>{JSON.stringify(this.product)}</h3>
                <div className="col-md-3">
                    <div className="card-">
                        <div className="card-header">
                            <img src={this.product.image} alt="" />
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">{this.product.name}</li>
                                <li className="list-group-item">{this.product.price}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Product