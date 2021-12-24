import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default class ProductNavs extends React.Component {
    render(){
        return <nav>
            <Link to="/">
            <h1 className="logo">E-Commercify</h1>
            </Link>

            <div className="cart-container">
            <p className="cart-counter">{this.props.cartProducts.length}</p>
            <Link to="/cart">
                <i className="fas fa-shopping-basket fa-3x"></i>
            </Link>
            </div>

        </nav>

    }
}