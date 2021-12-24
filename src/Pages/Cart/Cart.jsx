import React from 'react'
import './cart.css'

export default class Cart extends React.Component {
    renderCart = () => {
        return this.props.cartProducts.map((cartProduct,i) => {
            const {amount,name, description,imgUrl,  price,id} = cartProduct
            return <li key={id} className="cart-item">
                <img src={imgUrl} alt={name} className="small-cart-img" />
                <p>{name}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{name}</p>
                <button onClick={() => this.props.changeProductAmount(id,-1)}>-</button>
                <p>{amount}</p>
                <button onClick={() => this.props.changeProductAmount(id,1)}>+</button>
            </li>
        })
    }
    
    render(){
        return <ul className="cart-list">
            {this.renderCart()}
            <button onClick={this.props.emptyCart}>Buy all this shit</button>
        </ul>

    }
}