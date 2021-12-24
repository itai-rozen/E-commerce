import React from 'react'
import './product.css'

export default class Product extends React.Component {
    renderProduct = () => {
        const {name, description,  price,product,imgUrl, addToCart} = this.props
        return <div className='product-card'>
            <img src={imgUrl} alt={description} />
            <h3>{name}</h3>
            <h4>{description}</h4>
            <p>₪{price}</p>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    }

    render() {
        return <div>
        {this.renderProduct()}
        </div>

    }
}