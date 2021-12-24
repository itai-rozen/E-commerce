import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import Cart from './Pages/Cart/Cart';
import Nav from './components/Nav/Nav'
import ProductsWrapper from './components/ProductsWrapper/ProductsWrapper';
import CommerceApi from './api'

export default class App extends React.Component {
  state = {
    products:{
      instruments:CommerceApi.getInstruments(), clothes:CommerceApi.getClothes(),
      natureEquipment:CommerceApi.getNatureEquip(), cars:CommerceApi.getCars()  
      },
  cartProducts: [],
  totalAmount: 0
}

saveToLocalStorage = () => {
  localStorage.setItem('products-in-cart', JSON.stringify(this.state.cartProducts))
}

loadFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('products-in-cart'))
}

changeProductAmount = (id, number) => {
  let cartProductsCopy = [...this.state.cartProducts]
  const product = cartProductsCopy.find(cartProd => cartProd.id === id)
  product.amount += number
  if (product.amount === 0) cartProductsCopy = cartProductsCopy.filter(prod => prod.id !== id)
  this.setState({cartProducts : cartProductsCopy})
  
} 
addToCart = product => {
  const productInCart = this.state.cartProducts.find(prod => prod.id === product.id)
  if (productInCart) this.changeProductAmount(productInCart.id, 1)

  else this.setState((prev) => {return {
    cartProducts: [...this.state.cartProducts,product]
  }})
}
emptyCart = () => {
  this.setState({cartProducts : []})
}

removeFromCart = id => {
  this.setState({cartProducts: this.state.cartProducts.filter(prod => prod.id !== id)})
}

componentDidMount = () => {
  const loadedFromStorage = this.loadFromLocalStorage()
  console.log(loadedFromStorage)
  if (loadedFromStorage) this.setState({cartProducts: loadedFromStorage})
}

componentDidUpdate = () => {
  this.saveToLocalStorage()
}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav cartProducts={this.state.cartProducts}/>
          <Routes>
            <Route path="/" element={<Homepage products={this.state.products} />} />
            <Route path="/:category" element={<ProductsWrapper 
                                                        products={this.state.products}
                                                        addToCart={this.addToCart} />} />
            <Route path="/cart" element={<Cart cartProducts={this.state.cartProducts}
                                                emptyCart={this.emptyCart}
                                                changeProductAmount={this.changeProductAmount} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

