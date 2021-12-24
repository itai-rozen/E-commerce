import React from 'react'
import { isCompositeComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development'
import Product from '../../components/Product/Product'
import './products.css'

export default class Products extends React.Component {
    renderProducts = () => {
        return this.props.products[this.props.category].map(product => {
            const {name, description, price,id} = product
            return <Product key={id} addToCart={this.props.addToCart} product={product} name={name} id={id} price={price} description={description} />
        })
    }
    render(){
        console.log(this.props)
        return <div className='products-container'>
            {this.renderProducts()}
        </div>

    }
}