import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default class ProductNavs extends React.Component {
    calculatedCartItems = () => {
        const amountSum = this.props.cartProducts.reduce((prev,curr) => {
            console.log('prev: ',prev)
            console.log('prev anount: ',prev.amount)
            console.log('curr: ',curr)
            console.log('curr anount: ',curr.amount)
           return prev + curr.amount
        } , 0)
        console.log('sum: ',amountSum)
        return amountSum
    }
    render(){
        return <nav>
            <Link to="/">
            <h1 className="logo">E-Commercify</h1>
            </Link>

            <div className="cart-container">
            <p className="cart-counter">{this.calculatedCartItems()}</p>
            <Link to="/cart">
                <i className="fas fa-shopping-basket fa-3x"></i>
            </Link>
            </div>

        </nav>

    }
}