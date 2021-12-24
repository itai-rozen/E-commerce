import React from 'react'
import './cart.css'

export default class Cart extends React.Component {
    renderCart = () => {
        return this.props.cartProducts.map((cartProduct,i) => {
            const {name, description,imgUrl,  price,id} = cartProduct
            return <li key={id+i}>
                <img src={imgUrl} alt={name} className="small-cart-img" />
                <p>{name}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{name}</p>
            </li>
        })
    }
    
    render(){
        return <ul>
            {this.renderCart()}
            <button onClick={this.props.emptyCart}>Buy all this shit</button>
        </ul>

    }
}