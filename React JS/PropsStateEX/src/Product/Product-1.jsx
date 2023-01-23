import React from 'react'
import img_One from '../assets/iphone12.jpeg'
class Product extends React.Component {
    product = {
        name: "iphone 12",
        price: 32000,
        image: img_One
    }
    render() {
        return <div>
            <h1>Product component</h1>
            <h2>Product Name:{this.product.name}</h2>
            <h2>Product Name:{this.product.price}</h2>
        </div>
    }
}

export default Product