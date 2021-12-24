import React from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../Pages/Products/Products'
const ProductsWrapper = ({products, addToCart}) => {
    const { category } = useParams()
    return <Products products={products} addToCart={addToCart} category={category} />
}

export default ProductsWrapper