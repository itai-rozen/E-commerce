import React from 'react'
import Product from '../../components/Product/Product'
import './products.css'

export default class Products extends React.Component {
    renderProducts = () => {
        return this.props.products[this.props.category].map(product => {
            const {name, description, price,id, imgUrl} = product
            return <Product key={id} addToCart={this.props.addToCart} imgUrl={imgUrl} product={product} name={name} id={id} price={price} description={description} />
        })
    }
    render(){
        return <div className='products-container'>
            {this.renderProducts()}
        </div>

    }
}